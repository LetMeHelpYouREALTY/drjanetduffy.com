import OpenAI from 'openai';

// OpenRouter API configuration
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'https://drjanetduffy.com',
    'X-Title': 'Dr. Jan Duffy Real Estate Website',
  },
});

export interface AIResponse {
  content: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface PropertyAnalysis {
  marketInsights: string;
  neighborhoodAnalysis: string;
  investmentPotential: string;
  recommendations: string[];
}

export interface ClientProfile {
  preferences: string[];
  budget: string;
  timeline: string;
  priorities: string[];
  recommendations: string[];
}

// AI-powered property analysis
export async function analyzeProperty(propertyDetails: {
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  neighborhood: string;
  yearBuilt: number;
}): Promise<PropertyAnalysis> {
  try {
    const response = await openai.chat.completions.create({
      model: 'anthropic/claude-3.5-sonnet',
      messages: [
        {
          role: 'system',
          content:
            'You are a Las Vegas real estate expert AI assistant for Dr. Jan Duffy. Provide detailed, professional analysis of properties in Las Vegas, Henderson, Summerlin, and surrounding areas. Focus on market trends, neighborhood insights, and investment potential. Be specific about Las Vegas market conditions and local knowledge.',
        },
        {
          role: 'user',
          content: `Analyze this Las Vegas property and provide insights:

Property Details:
- Address: ${propertyDetails.address}
- Price: $${propertyDetails.price.toLocaleString()}
- Bedrooms: ${propertyDetails.bedrooms}
- Bathrooms: ${propertyDetails.bathrooms}
- Square Feet: ${propertyDetails.squareFeet.toLocaleString()}
- Neighborhood: ${propertyDetails.neighborhood}
- Year Built: ${propertyDetails.yearBuilt}

Please provide:
1. Market insights and current trends
2. Neighborhood analysis
3. Investment potential
4. Specific recommendations

Format as JSON with keys: marketInsights, neighborhoodAnalysis, investmentPotential, recommendations (array of strings).`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const content = response.choices[0]?.message?.content || '';
    return JSON.parse(content);
  } catch (error) {
    console.error('Error analyzing property:', error);
    throw new Error('Failed to analyze property');
  }
}

// AI-powered client profile analysis
export async function analyzeClientProfile(clientInfo: {
  budget: string;
  timeline: string;
  preferences: string[];
  priorities: string[];
  experience: string;
}): Promise<ClientProfile> {
  try {
    const response = await openai.chat.completions.create({
      model: 'anthropic/claude-3.5-sonnet',
      messages: [
        {
          role: 'system',
          content:
            'You are a Las Vegas real estate expert AI assistant for Dr. Jan Duffy. Help analyze client profiles and provide personalized recommendations for buying or selling homes in Las Vegas. Consider local market conditions, neighborhoods, and investment opportunities.',
        },
        {
          role: 'user',
          content: `Analyze this client profile and provide recommendations:

Client Profile:
- Budget: ${clientInfo.budget}
- Timeline: ${clientInfo.timeline}
- Preferences: ${clientInfo.preferences.join(', ')}
- Priorities: ${clientInfo.priorities.join(', ')}
- Experience: ${clientInfo.experience}

Provide personalized recommendations for Las Vegas real estate, including:
1. Preferred neighborhoods
2. Property types
3. Market timing advice
4. Specific recommendations

Format as JSON with keys: preferences (array), budget, timeline, priorities (array), recommendations (array of strings).`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1200,
    });

    const content = response.choices[0]?.message?.content || '';
    return JSON.parse(content);
  } catch (error) {
    console.error('Error analyzing client profile:', error);
    throw new Error('Failed to analyze client profile');
  }
}

// AI-powered market insights
export async function generateMarketInsights(): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'anthropic/claude-3.5-sonnet',
      messages: [
        {
          role: 'system',
          content:
            'You are a Las Vegas real estate expert AI assistant for Dr. Jan Duffy. Provide current market insights, trends, and analysis for the Las Vegas real estate market. Include specific data about neighborhoods like Summerlin, Henderson, Green Valley, and Anthem.',
        },
        {
          role: 'user',
          content: `Generate current Las Vegas real estate market insights including:
1. Overall market trends
2. Price movements by neighborhood
3. Inventory levels
4. Buyer/seller market conditions
5. Investment opportunities
6. Future outlook

Focus on actionable insights for potential buyers and sellers.`,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating market insights:', error);
    throw new Error('Failed to generate market insights');
  }
}

// AI-powered content generation for blog posts
export async function generateBlogPost(topic: string, targetAudience: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'anthropic/claude-3.5-sonnet',
      messages: [
        {
          role: 'system',
          content:
            'You are a Las Vegas real estate expert AI assistant for Dr. Jan Duffy. Write engaging, informative blog posts about Las Vegas real estate. Include local knowledge, market insights, and practical advice. Use a professional but approachable tone.',
        },
        {
          role: 'user',
          content: `Write a blog post about: ${topic}

Target audience: ${targetAudience}

Include:
- Engaging introduction
- Key points with local Las Vegas examples
- Practical advice
- Call-to-action for Dr. Jan Duffy's services
- SEO-friendly content

Format as markdown.`,
        },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating blog post:', error);
    throw new Error('Failed to generate blog post');
  }
}

// AI-powered email response generation
export async function generateEmailResponse(
  clientMessage: string,
  context: string
): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'anthropic/claude-3.5-sonnet',
      messages: [
        {
          role: 'system',
          content:
            'You are Dr. Jan Duffy, a Las Vegas real estate expert with 20+ years of experience. Respond to client inquiries with professionalism, local expertise, and genuine care. Always include your phone number (702-222-1964) and offer to schedule a consultation.',
        },
        {
          role: 'user',
          content: `Client message: ${clientMessage}

Context: ${context}

Respond as Dr. Jan Duffy with:
- Professional and friendly tone
- Local Las Vegas real estate expertise
- Specific advice or next steps
- Offer to schedule a consultation
- Include phone number: 702-222-1964
- Keep response concise but helpful`,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return response.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating email response:', error);
    throw new Error('Failed to generate email response');
  }
}

export default openai;
