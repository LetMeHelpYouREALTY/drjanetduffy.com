import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		// Optimize chunk splitting for better caching
		rollupOptions: {
			output: {
				manualChunks: {
					// Separate vendor chunks
					'lucide': ['lucide-svelte']
				}
			}
		},
		// Enable minification (esbuild is faster than terser)
		minify: 'esbuild',
		// Optimize asset inlining threshold (4KB)
		assetsInlineLimit: 4096,
		// Enable CSS code splitting
		cssCodeSplit: true,
		// Optimize chunk size warnings
		chunkSizeWarningLimit: 1000
	},
	// Optimize dependencies
	optimizeDeps: {
		include: ['lucide-svelte']
	}
});
