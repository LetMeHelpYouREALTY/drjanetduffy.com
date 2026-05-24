import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Residential Specialist | Dr. Janet Duffy REALTOR®",
  description: "Residential specialist services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, guiding homebuyers and sellers through every step of the Las Vegas residential market.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/residential-specialist',
  },
};

export default function Page() {
  return <MigratedPage slug="services/residential-specialist" />;
}
