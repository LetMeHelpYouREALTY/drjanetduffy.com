import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Residential Appraisal Services | Property Valuations",
  description: "Residential appraisal services for Las Vegas homes from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, delivering lender-ready, market-accurate valuations.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/residential-appraisal',
  },
};

export default function Page() {
  return <MigratedPage slug="services/residential-appraisal" />;
}
