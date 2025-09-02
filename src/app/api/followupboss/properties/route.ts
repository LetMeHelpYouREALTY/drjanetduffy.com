import { type NextRequest, NextResponse } from 'next/server';
import { followUpBossService } from '@/lib/followupboss';

// GET /api/followupboss/properties - Get properties with caching
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Parse query parameters
    const filters = {
      city: searchParams.get('city') || undefined,
      state: searchParams.get('state') || undefined,
      priceMin: searchParams.get('priceMin') ? Number.parseInt(searchParams.get('priceMin')!) : undefined,
      priceMax: searchParams.get('priceMax') ? Number.parseInt(searchParams.get('priceMax')!) : undefined,
      bedrooms: searchParams.get('bedrooms') ? Number.parseInt(searchParams.get('bedrooms')!) : undefined,
      propertyType: searchParams.get('propertyType') || undefined,
    };

    // Remove undefined values
    const cleanFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => value !== undefined)
    );

    const result = await followUpBossService.getProperties(cleanFilters);

    if (result.success) {
      // Set cache headers for client-side caching
      const response = NextResponse.json(result);
      response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
      return response;
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Error in GET /api/followupboss/properties:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/followupboss/properties - Create new property
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.address || !body.city || !body.state || !body.zipCode) {
      return NextResponse.json(
        { success: false, message: 'Address, city, state, and zip code are required' },
        { status: 400 }
      );
    }

    const result = await followUpBossService.createProperty(body);

    if (result.success) {
      return NextResponse.json(result, { status: 201 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Error in POST /api/followupboss/properties:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
