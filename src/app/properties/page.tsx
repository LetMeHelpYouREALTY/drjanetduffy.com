import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Homes for Sale | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse all available Las Vegas homes for sale with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. View updated MLS listings, compare neighborhoods, and schedule private tours.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/properties',
  },
};

export default function Page() {
  return <MigratedPage slug="properties" />;
}
