/** Paths excluded from sitemap.xml (still may exist as routes). */
export const SITEMAP_EXCLUDED_PATHS = new Set([
  'google[verification_code]',
]);

export function isSitemapExcluded(path: string): boolean {
  return SITEMAP_EXCLUDED_PATHS.has(path);
}
