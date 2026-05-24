import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Southern Highlands Luxury & Relocation Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Explore Southern Highlands luxury and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover golf course homes, custom estates, and gated communities in southwest Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/southern-highlands',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/southern-highlands" />;
}
