import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Luxury Homes for Sale | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse Las Vegas luxury homes with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Explore exclusive properties in The Ridges, MacDonald Highlands, Southern Highlands, Seven Hills, and other premier communities.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/luxury-homes',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/luxury-homes" />;
}
