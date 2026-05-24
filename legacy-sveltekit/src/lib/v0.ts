/**
 * V0 API Client Utility
 * Helper functions to interact with V0 API for component generation
 */

export interface V0GenerateOptions {
	prompt: string;
	model?: 'claude-3-5-sonnet' | 'claude-3-opus' | 'gpt-4';
	shadcn?: boolean;
}

export interface V0Response {
	success: boolean;
	component?: string;
	metadata?: {
		components?: string[];
		dependencies?: string[];
		[key: string]: unknown;
	};
	error?: string;
}

/**
 * Generate a component using V0 API
 */
export async function generateComponent(options: V0GenerateOptions): Promise<V0Response> {
	try {
		const response = await fetch('/api/v0', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				prompt: options.prompt,
				model: options.model || 'claude-3-5-sonnet',
				shadcn: options.shadcn !== false, // default to true
			}),
		});

		const data = await response.json();
		
		if (!response.ok) {
			return {
				success: false,
				error: data.error || 'Failed to generate component',
			};
		}

		return data as V0Response;
	} catch (error) {
		return {
			success: false,
			error: error instanceof Error ? error.message : 'Unknown error occurred',
		};
	}
}

/**
 * Check if V0 API is configured
 */
export async function checkV0Status(): Promise<{ configured: boolean; message: string }> {
	try {
		const response = await fetch('/api/v0');
		const data = await response.json();
		return {
			configured: data.configured || false,
			message: data.message || 'Unknown status',
		};
	} catch (error) {
		return {
			configured: false,
			message: 'Failed to check V0 API status',
		};
	}
}

