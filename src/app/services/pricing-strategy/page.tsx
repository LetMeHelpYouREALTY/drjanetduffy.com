import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Pricing Strategy Services | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy provides data-driven pricing strategy for homes in Summerlin, Henderson, Green Valley, North Las Vegas, and the greater Las Vegas Valley.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/pricing-strategy',
  },
};

export default function Page() {
  return <MigratedPage slug="services/pricing-strategy" />;
}
