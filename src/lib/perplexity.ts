// Perplexity AI API Integration
const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

export interface PerplexityMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface PerplexityRequest {
  model: string;
  stream: boolean;
  max_tokens: number;
  frequency_penalty: number;
  temperature: number;
  messages: PerplexityMessage[];
}

export interface PerplexityResponse {
  id: string;
  model: string;
  created: number;
  object: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export class PerplexityService {
  private apiKey: string;
  private baseUrl = 'https://api.perplexity.ai/chat/completions';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || PERPLEXITY_API_KEY || '';
    if (!this.apiKey) {
      throw new Error('PERPLEXITY_API_KEY environment variable is required');
    }
  }

  async chat(
    messages: PerplexityMessage[],
    options: {
      model?: string;
      maxTokens?: number;
      temperature?: number;
      frequencyPenalty?: number;
      stream?: boolean;
    } = {}
  ): Promise<PerplexityResponse> {
    const {
      model = 'pplx-7b-online',
      maxTokens = 1024,
      temperature = 0.0,
      frequencyPenalty = 1,
      stream = false,
    } = options;

    const requestBody: PerplexityRequest = {
      model,
      stream,
      max_tokens: maxTokens,
      frequency_penalty: frequencyPenalty,
      temperature,
      messages,
    };

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`Perplexity API error: ${response.status} ${response.statusText}`);
      }

      const data: PerplexityResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Perplexity API Error:', error);
      throw error;
    }
  }

  async getRealEstateInsights(query: string): Promise<string> {
    const messages: PerplexityMessage[] = [
      {
        role: 'system',
        content:
          'You are a real estate expert specializing in Las Vegas real estate market analysis. Provide concise, accurate, and helpful insights about Las Vegas real estate trends, neighborhoods, and market conditions.',
      },
      {
        role: 'user',
        content: query,
      },
    ];

    const response = await this.chat(messages, {
      model: 'pplx-7b-online',
      maxTokens: 800,
      temperature: 0.3,
    });

    return response.choices[0]?.message?.content || 'Unable to generate insights at this time.';
  }

  async getPropertyAnalysis(address: string, price?: string): Promise<string> {
    const query = `Analyze the real estate property at ${address}${price ? ` with a price of ${price}` : ''}. Provide insights about the neighborhood, market value, and investment potential in Las Vegas.`;

    return this.getRealEstateInsights(query);
  }

  async getMarketTrends(): Promise<string> {
    const query =
      'What are the current trends in the Las Vegas real estate market? Include information about price trends, inventory levels, and market conditions.';

    return this.getRealEstateInsights(query);
  }
}

// Export singleton instance
export const perplexityService = new PerplexityService();
