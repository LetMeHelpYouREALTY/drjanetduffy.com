import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Cache configuration
const CACHE_DURATION = 300; // 5 minutes
const STALE_WHILE_REVALIDATE = 600; // 10 minutes

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per minute per IP

// In-memory rate limit store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Cache store for API responses
const cacheStore = new Map<string, { data: any; timestamp: number; ttl: number }>();

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';

  // Handle Follow Up Boss API routes
  if (pathname.startsWith('/api/followupboss/')) {
    return handleFollowUpBossAPI(request, ip);
  }

  // Handle static assets with long-term caching
  if (pathname.startsWith('/_next/static/') || pathname.startsWith('/images/')) {
    return NextResponse.next({
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // Handle other API routes with basic rate limiting
  if (pathname.startsWith('/api/')) {
    return handleAPIRateLimit(request, ip);
  }

  return NextResponse.next();
}

function handleFollowUpBossAPI(request: NextRequest, ip: string) {
  const { pathname, searchParams } = request.nextUrl;
  const method = request.method;

  // Rate limiting for Follow Up Boss API
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Rate limit exceeded. Please try again later.' },
      { status: 429 }
    );
  }

  // Handle GET requests with caching
  if (method === 'GET') {
    const cacheKey = `${pathname}${searchParams.toString()}`;
    const cached = getFromCache(cacheKey);

    if (cached) {
      const response = NextResponse.json(cached);
      response.headers.set('X-Cache', 'HIT');
      response.headers.set('X-Cache-Timestamp', new Date(cached.timestamp).toISOString());
      return response;
    }

    // Add cache headers for client-side caching
    const response = NextResponse.next();
    response.headers.set('Cache-Control', `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`);
    response.headers.set('X-Cache', 'MISS');
    return response;
  }

  // Handle POST/PUT/DELETE requests
  if (['POST', 'PUT', 'DELETE'].includes(method)) {
    const response = NextResponse.next();
    
    // Clear related cache entries
    clearRelatedCache(pathname);
    
    // Add no-cache headers for write operations
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('X-Cache', 'BYPASS');
    
    return response;
  }

  return NextResponse.next();
}

function handleAPIRateLimit(request: NextRequest, ip: string) {
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Rate limit exceeded. Please try again later.' },
      { status: 429 }
    );
  }

  return NextResponse.next();
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - (RATE_LIMIT_WINDOW * 1000);

  // Clean up expired entries
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(ip);
  
  if (!current) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + (RATE_LIMIT_WINDOW * 1000) });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  current.count++;
  return true;
}

function getFromCache(key: string): any | null {
  const cached = cacheStore.get(key);
  if (!cached) return null;

  const now = Date.now();
  if (now - cached.timestamp > cached.ttl) {
    cacheStore.delete(key);
    return null;
  }

  return cached.data;
}

function setCache(key: string, data: any, ttl: number = CACHE_DURATION * 1000): void {
  cacheStore.set(key, {
    data,
    timestamp: Date.now(),
    ttl,
  });
}

function clearRelatedCache(pathname: string): void {
  // Clear cache entries related to the modified resource
  const keysToDelete: string[] = [];
  
  for (const key of cacheStore.keys()) {
    if (key.includes(pathname) || pathname.includes(key.split('?')[0])) {
      keysToDelete.push(key);
    }
  }

  keysToDelete.forEach(key => cacheStore.delete(key));
}

// Export cache functions for use in API routes
export { setCache, getFromCache, clearRelatedCache };

export const config = {
  matcher: [
    '/api/:path*',
    '/_next/static/:path*',
    '/images/:path*',
  ],
};
