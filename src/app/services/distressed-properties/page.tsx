import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Distressed Property Solutions | Dr. Janet Duffy REALTOR®",
  description: "Distressed property guidance from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in short sales, foreclosures, and REO opportunities for buyers, sellers, and investors.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/distressed-properties',
  },
};

export default function Page() {
  return <MigratedPage slug="services/distressed-properties" />;
}
