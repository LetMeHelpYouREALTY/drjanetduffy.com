import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Short Sale Properties | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse Las Vegas short sale properties with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Access below-market homes that require lender approval with expert guidance through complex negotiations.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/short-sales',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/short-sales" />;
}
