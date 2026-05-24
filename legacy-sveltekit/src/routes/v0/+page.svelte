<script lang="ts">
	import { onMount } from 'svelte';
	import { generateComponent, checkV0Status } from '$lib/v0';
	import type { V0Response } from '$lib/v0';

	let prompt = '';
	let loading = false;
	let result: V0Response | null = null;
	let status: { configured: boolean; message: string } = { configured: false, message: '' };
	let selectedModel = 'claude-3-5-sonnet';
	let useShadcn = true;

	onMount(async () => {
		status = await checkV0Status();
	});

	async function handleGenerate() {
		if (!prompt.trim()) {
			alert('Please enter a prompt');
			return;
		}

		loading = true;
		result = null;

		try {
			result = await generateComponent({
				prompt,
				model: selectedModel as 'claude-3-5-sonnet' | 'claude-3-opus' | 'gpt-4',
				shadcn: useShadcn,
			});
		} catch (error) {
			result = {
				success: false,
				error: error instanceof Error ? error.message : 'Unknown error',
			};
		} finally {
			loading = false;
		}
	}

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text);
		alert('Copied to clipboard!');
	}
</script>

<svelte:head>
	<title>V0 Component Generator | Dr. Janet Duffy</title>
	<meta name="description" content="Generate UI components using V0 AI" />
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-6xl">
	<h1 class="text-4xl font-bold mb-6">V0 Component Generator</h1>

	{#if !status.configured}
		<div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
			<p class="text-yellow-800">
				<strong>V0 API not configured.</strong> Please set <code class="bg-yellow-100 px-2 py-1 rounded">V0_API_KEY</code> in your environment variables.
				Get your API key from <a href="https://v0.dev/settings/api-keys" target="_blank" class="underline">v0.dev/settings/api-keys</a>
			</p>
		</div>
	{:else}
		<div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
			<p class="text-green-800">✓ {status.message}</p>
		</div>
	{/if}

	<div class="bg-white rounded-lg shadow-lg p-6 mb-6">
		<div class="mb-4">
			<label for="prompt" class="block text-sm font-medium text-gray-700 mb-2">
				Component Prompt
			</label>
			<textarea
				id="prompt"
				bind:value={prompt}
				placeholder="e.g., Create a real estate property card component with image, price, address, and contact button"
				class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
				rows="4"
			></textarea>
		</div>

		<div class="grid md:grid-cols-2 gap-4 mb-4">
			<div>
				<label for="model" class="block text-sm font-medium text-gray-700 mb-2">
					Model
				</label>
				<select
					id="model"
					bind:value={selectedModel}
					class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
				>
					<option value="claude-3-5-sonnet">Claude 3.5 Sonnet</option>
					<option value="claude-3-opus">Claude 3 Opus</option>
					<option value="gpt-4">GPT-4</option>
				</select>
			</div>

			<div class="flex items-center">
				<input
					type="checkbox"
					id="shadcn"
					bind:checked={useShadcn}
					class="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
				/>
				<label for="shadcn" class="text-sm font-medium text-gray-700">
					Use Shadcn UI components
				</label>
			</div>
		</div>

		<button
			on:click={handleGenerate}
			disabled={loading || !status.configured}
			class="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
		>
			{loading ? 'Generating...' : 'Generate Component'}
		</button>
	</div>

	{#if result}
		<div class="bg-white rounded-lg shadow-lg p-6">
			{#if result.success && result.component}
				<div class="mb-4 flex justify-between items-center">
					<h2 class="text-2xl font-bold">Generated Component</h2>
					<button
						on:click={() => result && copyToClipboard(result.component || '')}
						class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium"
					>
						Copy Code
					</button>
				</div>
				
				<pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm"><code>{result?.component || ''}</code></pre>

				{#if result.metadata && Object.keys(result.metadata).length > 0}
					<div class="mt-4 pt-4 border-t">
						<h3 class="font-semibold mb-2">Metadata:</h3>
						<pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto text-xs">{JSON.stringify(result.metadata, null, 2)}</pre>
					</div>
				{/if}
			{:else}
				<div class="bg-red-50 border border-red-200 rounded-lg p-4">
					<p class="text-red-800">
						<strong>Error:</strong> {result.error || 'Failed to generate component'}
					</p>
				</div>
			{/if}
		</div>
	{/if}

	<div class="mt-8 bg-gray-50 rounded-lg p-6">
		<h2 class="text-xl font-bold mb-4">Example Prompts</h2>
		<ul class="space-y-2 text-gray-700">
			<li>
				<button
					on:click={() => prompt = 'Create a real estate property card component with image, price, address, bedrooms, bathrooms, and a contact button'}
					class="text-primary-600 hover:underline text-left"
				>
					Property card component
				</button>
			</li>
			<li>
				<button
					on:click={() => prompt = 'Create a hero section for a real estate website with headline, subheadline, search bar, and CTA buttons'}
					class="text-primary-600 hover:underline text-left"
				>
					Hero section with search
				</button>
			</li>
			<li>
				<button
					on:click={() => prompt = 'Create a contact form with name, email, phone, message fields and submit button'}
					class="text-primary-600 hover:underline text-left"
				>
					Contact form component
				</button>
			</li>
			<li>
				<button
					on:click={() => prompt = 'Create a testimonial carousel component with customer reviews'}
					class="text-primary-600 hover:underline text-left"
				>
					Testimonial carousel
				</button>
			</li>
		</ul>
	</div>
</div>

