import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Property Management Services | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy provides professional property management services for single-family, multi-unit, and luxury rentals across the Las Vegas Valley.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/property-management',
  },
};

export default function Page() {
  return <MigratedPage slug="services/property-management" />;
}
