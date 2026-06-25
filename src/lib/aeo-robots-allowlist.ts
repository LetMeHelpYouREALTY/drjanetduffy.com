/**
 * Shared AI citation crawler allowlist for AEO (June 2026).
 * Used by src/app/robots.ts — explicit permit for search/index/browse bots.
 */
export const AEO_AI_CRAWLER_ALLOWLIST = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'cohere-ai',
  'Applebot-Extended',
  'Amazonbot',
  'meta-externalagent',
  'meta-externalfetcher',
  'YouBot',
  'Diffbot',
  'CCBot',
  'Bytespider',
] as const;
