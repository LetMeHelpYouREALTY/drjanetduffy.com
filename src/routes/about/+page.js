// SvelteKit 2.x configuration for About page

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender = true;

// Enable client-side rendering for better interactivity
export const csr = true;

// Enable server-side rendering
export const ssr = true;
