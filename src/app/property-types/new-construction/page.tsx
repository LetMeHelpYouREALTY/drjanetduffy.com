import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "New Construction Homes | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse new construction homes across Las Vegas with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Explore modern, energy-efficient homes with builder warranties and customization options.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/new-construction',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/new-construction" />;
}
