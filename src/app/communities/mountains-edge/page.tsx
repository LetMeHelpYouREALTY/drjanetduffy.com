import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mountains Edge Family & Relocation Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Explore Mountains Edge family and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover affordable, family-friendly homes with parks, trails, and great schools in southwest Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/mountains-edge',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/mountains-edge" />;
}
