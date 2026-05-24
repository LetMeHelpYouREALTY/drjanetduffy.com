import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Commercial Consulting | Dr. Janet Duffy REALTOR®",
  description: "Objective commercial real estate consulting from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, covering market analysis, property evaluation, and development strategy.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/commercial-consulting',
  },
};

export default function Page() {
  return <MigratedPage slug="services/commercial-consulting" />;
}
