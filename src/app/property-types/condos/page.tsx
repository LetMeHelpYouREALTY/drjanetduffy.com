import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Condos & Townhomes for Sale | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse Las Vegas condos and townhomes with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover low-maintenance homes with great amenities and prime locations for first-time buyers, downsizers, and investors.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/condos',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/condos" />;
}
