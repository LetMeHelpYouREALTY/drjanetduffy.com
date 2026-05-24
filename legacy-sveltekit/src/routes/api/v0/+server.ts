import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { createClient } from 'v0-sdk';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		const { prompt, model = 'claude-3-5-sonnet', shadcn = true, system } = body;

		if (!prompt) {
			return json({ error: 'Prompt is required' }, { status: 400 });
		}

		const V0_API_KEY = env.V0_API_KEY;
		
		if (!V0_API_KEY) {
			return json({ 
				error: 'V0_API_KEY not configured. Please set it in your environment variables.' 
			}, { status: 500 });
		}

		// Initialize v0 SDK client with API key
		const client = createClient({
			apiKey: V0_API_KEY,
		});

		try {
			// Use the official v0-sdk to create a chat
			// The SDK handles the API communication
			// Note: model and shadcn parameters are handled by v0's model configuration
			const chat = await client.chats.create({
				message: prompt,
				system: system || 'You are an expert React and Svelte developer. Generate clean, modern UI components using Tailwind CSS.',
				// Model configuration is handled by v0's default settings
				// You can specify modelConfiguration if needed, but it uses different model IDs
			});

			// Extract component code from the chat response
			// The latestVersion contains the generated files
			const latestVersion = chat.latestVersion;
			let component = '';
			
			if (latestVersion?.files && latestVersion.files.length > 0) {
				// Combine all file contents
				component = latestVersion.files
					.map(file => `// ${file.name}\n${file.content}`)
					.join('\n\n');
			} else {
				// Fallback to stringify if no files
				component = JSON.stringify(chat, null, 2);
			}

			return json({ 
				success: true, 
				component,
				metadata: {
					chatId: chat.id,
					webUrl: chat.webUrl,
					apiUrl: chat.apiUrl,
					status: latestVersion?.status,
					files: latestVersion?.files?.map(f => f.name) || [],
					rawResponse: chat,
				}
			});
		} catch (error) {
			console.error('V0 SDK error:', error);
			
			// Provide helpful error message
			const errorMessage = error instanceof Error ? error.message : String(error);
			return json({ 
				error: `V0 SDK error: ${errorMessage}. Please check your API key and ensure it's valid. Get your key from https://v0.dev/chat/settings/keys` 
			}, { status: 500 });
		}

	} catch (error) {
		console.error('V0 API error:', error);
		return json({ 
			error: error instanceof Error ? error.message : 'Internal server error' 
		}, { status: 500 });
	}
};

// GET endpoint to check API status
export const GET: RequestHandler = async () => {
	const V0_API_KEY = env.V0_API_KEY;
	return json({
		status: 'ok',
		configured: !!V0_API_KEY,
		message: V0_API_KEY 
			? 'V0 API is configured and ready' 
			: 'V0_API_KEY not set. Please configure it in your environment variables.'
	});
};

