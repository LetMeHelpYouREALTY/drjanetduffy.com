import { generateMarketInsights } from '@/lib/openrouter';
import { type NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest) {
  try {
    const insights = await generateMarketInsights();

    return NextResponse.json({
      insights,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error in generate-insights API:', error);
    return NextResponse.json({ error: 'Failed to generate market insights' }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed. Use GET to generate market insights.' },
    { status: 405 }
  );
}
