/**
 * Content Freshness Utilities for GEO/AEO Optimization
 *
 * Research shows AI engines prioritize content updated within 7-14 days.
 * 83% of AI citations come from pages updated within 12 months,
 * with 60%+ from content refreshed in the last 6 months.
 */

/**
 * Get the last modified date for a page
 * This should be updated whenever content changes
 */
export function getLastModified(): string {
  return new Date().toISOString();
}

/**
 * Calculate days since last update
 */
export function daysSinceUpdate(lastModified: string): number {
  const now = new Date();
  const updated = new Date(lastModified);
  const diffTime = Math.abs(now.getTime() - updated.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Check if content is fresh enough for optimal GEO performance
 * Content should be updated every 7-14 days for maximum citation rates
 */
export function isContentFresh(lastModified: string): boolean {
  return daysSinceUpdate(lastModified) <= 14;
}

/**
 * Content freshness metadata for pages
 * Include this in page metadata to signal freshness to AI engines
 */
export function freshnessMetadata() {
  const now = new Date();
  return {
    'article:modified_time': now.toISOString(),
    'og:updated_time': now.toISOString(),
  };
}

/**
 * Page update tracking for content maintenance
 * Track when key pages were last updated
 */
export const pageUpdateSchedule = {
  homepage: '2026-06-07',
  about: '2026-06-07',
  contact: '2026-06-07',
  properties: '2026-06-07',
  communities: '2026-06-07',
} as const;

/**
 * Get pages that need updating (older than 14 days)
 */
export function getPagesNeedingUpdate(): string[] {
  const needsUpdate: string[] = [];

  Object.entries(pageUpdateSchedule).forEach(([page, lastUpdate]) => {
    if (!isContentFresh(lastUpdate)) {
      needsUpdate.push(page);
    }
  });

  return needsUpdate;
}
