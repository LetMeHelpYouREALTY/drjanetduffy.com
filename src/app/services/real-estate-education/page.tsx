import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Real Estate Education | Dr. Janet Duffy REALTOR®",
  description: "Real estate education and training from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, covering legal, regulatory, technology, and sales process best practices.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/real-estate-education',
  },
};

export default function Page() {
  return <MigratedPage slug="services/real-estate-education" />;
}
