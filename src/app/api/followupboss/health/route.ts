import { NextResponse } from 'next/server';
import { followUpBossService } from '@/lib/followupboss';

// GET /api/followupboss/health - Health check for Follow Up Boss API
export async function GET() {
  try {
    const isHealthy = await followUpBossService.healthCheck();
    const cacheStats = followUpBossService.getCacheStats();

    const response = {
      success: true,
      data: {
        status: isHealthy ? 'healthy' : 'unhealthy',
        timestamp: new Date().toISOString(),
        cache: {
          size: cacheStats.size,
          keys: cacheStats.keys.length,
        },
        api: {
          baseUrl: 'https://api.followupboss.com/v1',
          system: 'DrJanDuffyWebsite',
        },
      },
    };

    return NextResponse.json(response, {
      status: isHealthy ? 200 : 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error in Follow Up Boss health check:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Health check failed',
        data: {
          status: 'error',
          timestamp: new Date().toISOString(),
        },
      },
      { status: 503 }
    );
  }
}
