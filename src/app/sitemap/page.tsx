import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site.config';
import { allGeoAreas } from '@/content/geo';
import { pageMetadata } from '@/lib/metadata';
import { sitemapRoutes } from '@/lib/sitemap-routes';

export const metadata: Metadata = pageMetadata({
  title: 'Sitemap | Dr. Janet Duffy, REALTOR® | Las Vegas Real Estate',
  description:
    'Complete site map for Dr. Janet Duffy, REALTOR®: Las Vegas community guides, zip-code guides, property searches, services, and resources for buying and selling homes in Summerlin, Henderson, and the valley.',
  path: 'sitemap',
});

const LABEL_OVERRIDES: Record<string, string> = {
  '': 'Homepage — Las Vegas REALTOR®',
  'get-started': 'Get started buying or selling',
  properties: 'Search Las Vegas homes for sale',
  'home-value': 'What is my Las Vegas home worth?',
  rentals: 'Las Vegas rentals',
  blog: 'Blog & market updates',
  about: 'About Dr. Janet Duffy',
  services: 'Real estate services',
  neighborhoods: 'Las Vegas neighborhoods overview',
  testimonials: 'Client testimonials',
  'market-insights': 'Las Vegas market insights',
  contact: 'Contact Dr. Duffy',
  faq: 'Frequently asked questions',
  resources: 'Buyer & seller resources',
  'first-time-buyers': 'First-time buyer guide',
  relocation: 'Relocating to Las Vegas',
  'investment-guide': 'Investment guide',
  'buying-guide': 'Home buying guide',
  'selling-guide': 'Home selling guide',
  'mortgage-calculator': 'Mortgage calculator',
  'listings-embedded': 'Featured listings',
  'listings-list': 'All listings',
  'past-sales': 'Past sales',
  communities: 'All Las Vegas community guides',
  'las-vegas-zip-codes': 'All zip-code guides',
  quotes: 'Quotes & inspiration',
  privacy: 'Privacy policy',
  terms: 'Terms of service',
  sitemap: 'Sitemap',
  'communities/skye-canyon/buyers-guide': 'Skye Canyon buyer’s guide',
};

const geoNames = new Map(allGeoAreas.map((area) => [area.path, area.name]));

function labelFor(path: string): string {
  if (LABEL_OVERRIDES[path]) return LABEL_OVERRIDES[path];
  const geoName = geoNames.get(path);
  if (geoName) {
    if (path.startsWith('communities/')) return `${geoName} community guide`;
    if (path.startsWith('las-vegas-zip-codes/')) return `${geoName} home guide`;
  }
  const last = path.split('/').pop() ?? path;
  const pretty = last
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  if (path.startsWith('services/')) return `${pretty} services`;
  if (path.startsWith('property-types/')) return `${pretty} in Las Vegas`;
  return pretty;
}

type Group = { title: string; match: (path: string) => boolean };

const GROUPS: Group[] = [
  {
    title: 'Main pages',
    match: (p) => !p.includes('/') && !['privacy', 'terms', 'quotes', 'sitemap'].includes(p),
  },
  { title: 'Las Vegas community guides', match: (p) => p.startsWith('communities/') },
  { title: 'Zip-code home guides', match: (p) => p.startsWith('las-vegas-zip-codes/') },
  { title: 'Property types', match: (p) => p.startsWith('property-types/') },
  { title: 'REALTOR® services', match: (p) => p.startsWith('services/') },
  { title: 'Buyer & seller resources', match: (p) => p.startsWith('resources/') },
  {
    title: 'Legal & site',
    match: (p) => ['privacy', 'terms', 'quotes', 'sitemap'].includes(p),
  },
];

export default function SitemapPage() {
  const uniquePaths = Array.from(new Set(sitemapRoutes.map((r) => r.path)));
  const grouped = GROUPS.map((group) => ({
    title: group.title,
    paths: uniquePaths.filter(group.match),
  })).filter((g) => g.paths.length > 0);

  return (
    <article className="container-premium py-12">
      <h1 className="font-display mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Sitemap</h1>
      <p className="mb-10 max-w-3xl text-xl leading-relaxed text-gray-600">
        Every page on {siteConfig.url.replace('https://', '')} — community and zip-code guides,
        property searches, services, and resources from {siteConfig.name}, REALTOR® with{' '}
        {siteConfig.brokerage}. Call {siteConfig.phone}.
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {grouped.map((group) => (
          <section key={group.title} aria-label={group.title}>
            <h2 className="font-display mb-4 text-2xl font-bold text-gray-900">{group.title}</h2>
            <ul className="space-y-2">
              {group.paths.map((path) => (
                <li key={path || 'home'}>
                  <Link
                    href={`/${path}`}
                    className="text-primary-700 no-underline hover:underline"
                  >
                    {labelFor(path)}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
