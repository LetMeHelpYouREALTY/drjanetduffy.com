import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sitemap | Dr. Janet Duffy, REALTOR® | Luxury Las Vegas Real Estate",
  description: "Complete site map for Dr. Janet Duffy, REALTOR® luxury Las Vegas real estate website. Browse all pages including properties, communities, services, and resources for buying and selling homes in Las Vegas, Summerlin, Henderson, and surrounding areas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/sitemap',
  },
};

export default function Page() {
  return <MigratedPage slug="sitemap" />;
}
