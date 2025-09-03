import type { APIRoute } from 'astro';
import { generateMarketInsights } from '../../lib/openrouter';

export const GET: APIRoute = async () => {
  try {
    const insights = await generateMarketInsights();

    return new Response(
      JSON.stringify({
        insights,
        generatedAt: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in generate-insights API:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate market insights' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async () => {
  return new Response(
    JSON.stringify({ error: 'Method not allowed. Use GET to generate market insights.' }),
    {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
