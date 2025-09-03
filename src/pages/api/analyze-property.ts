import type { APIRoute } from 'astro';
import { analyzeProperty } from '../../lib/openrouter';

export const POST: APIRoute = async ({ request }) => {
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
        return new Response(JSON.stringify({ error: `Missing required field: ${field}` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Validate data types
    if (typeof body.price !== 'number' || body.price <= 0) {
      return new Response(JSON.stringify({ error: 'Price must be a positive number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (typeof body.bedrooms !== 'number' || body.bedrooms <= 0) {
      return new Response(JSON.stringify({ error: 'Bedrooms must be a positive number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (typeof body.bathrooms !== 'number' || body.bathrooms <= 0) {
      return new Response(JSON.stringify({ error: 'Bathrooms must be a positive number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (typeof body.squareFeet !== 'number' || body.squareFeet <= 0) {
      return new Response(JSON.stringify({ error: 'Square feet must be a positive number' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (
      typeof body.yearBuilt !== 'number' ||
      body.yearBuilt < 1800 ||
      body.yearBuilt > new Date().getFullYear()
    ) {
      return new Response(JSON.stringify({ error: 'Year built must be a valid year' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
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

    return new Response(JSON.stringify(analysis), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in analyze-property API:', error);
    return new Response(JSON.stringify({ error: 'Failed to analyze property' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ error: 'Method not allowed. Use POST to analyze properties.' }),
    {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
