import type { APIRoute } from 'astro';
import { perplexityService } from '../../lib/perplexity';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { query, type = 'general' } = body;

    if (!query) {
      return new Response(JSON.stringify({ error: 'Query is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let insights: string;

    switch (type) {
      case 'property': {
        const { address, price } = body;
        insights = await perplexityService.getPropertyAnalysis(address, price);
        break;
      }
      case 'market':
        insights = await perplexityService.getMarketTrends();
        break;
      default:
        insights = await perplexityService.getRealEstateInsights(query);
        break;
    }

    return new Response(
      JSON.stringify({
        success: true,
        insights,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        },
      }
    );
  } catch (error) {
    console.error('Perplexity API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to generate insights',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      message: 'Perplexity AI Insights API',
      endpoints: {
        POST: 'Send a POST request with query and optional type (property, market, general)',
      },
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
