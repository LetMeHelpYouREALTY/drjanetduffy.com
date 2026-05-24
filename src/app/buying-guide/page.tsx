import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Home Buying Guide | Dr. Janet Duffy REALTOR®",
  description: "Step-by-step Las Vegas home buying guide from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, covering financing, neighborhoods, HOAs, inspections, and closing.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/buying-guide',
  },
};

export default function Page() {
  return <MigratedPage slug="buying-guide" />;
}
