import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation General Appraisal Services | Dr. Janet Duffy REALTOR®",
  description: "General appraisal services for Las Vegas residential, commercial, and land properties from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/general-appraisal',
  },
};

export default function Page() {
  return <MigratedPage slug="services/general-appraisal" />;
}
