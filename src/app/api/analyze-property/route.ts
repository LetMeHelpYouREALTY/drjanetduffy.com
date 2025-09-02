import { analyzeProperty } from '@/lib/openrouter';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'address',
      'price',
      'bedrooms',
      'bathrooms',
      'squareFeet',
      'neighborhood',
      'yearBuilt',
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Validate data types
    if (typeof body.price !== 'number' || body.price <= 0) {
      return NextResponse.json({ error: 'Price must be a positive number' }, { status: 400 });
    }

    if (typeof body.bedrooms !== 'number' || body.bedrooms <= 0) {
      return NextResponse.json({ error: 'Bedrooms must be a positive number' }, { status: 400 });
    }

    if (typeof body.bathrooms !== 'number' || body.bathrooms <= 0) {
      return NextResponse.json({ error: 'Bathrooms must be a positive number' }, { status: 400 });
    }

    if (typeof body.squareFeet !== 'number' || body.squareFeet <= 0) {
      return NextResponse.json({ error: 'Square feet must be a positive number' }, { status: 400 });
    }

    if (
      typeof body.yearBuilt !== 'number' ||
      body.yearBuilt < 1800 ||
      body.yearBuilt > new Date().getFullYear()
    ) {
      return NextResponse.json({ error: 'Year built must be a valid year' }, { status: 400 });
    }

    // Call the AI analysis function
    const analysis = await analyzeProperty({
      address: body.address,
      price: body.price,
      bedrooms: body.bedrooms,
      bathrooms: body.bathrooms,
      squareFeet: body.squareFeet,
      neighborhood: body.neighborhood,
      yearBuilt: body.yearBuilt,
    });

    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Error in analyze-property API:', error);
    return NextResponse.json({ error: 'Failed to analyze property' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST to analyze properties.' },
    { status: 405 }
  );
}
