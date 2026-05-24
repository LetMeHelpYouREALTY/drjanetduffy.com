import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Foreclosure Properties | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse Las Vegas foreclosure properties with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Find below-market homes and investment opportunities with expert guidance through complex transactions.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/foreclosures',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/foreclosures" />;
}
