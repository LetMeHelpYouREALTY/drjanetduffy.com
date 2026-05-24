import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Single Family Homes for Sale | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse single family homes for sale across Las Vegas with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Explore spacious homes with yards, privacy, and room to grow for families and long-term investors.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/single-family',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/single-family" />;
}
