import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Seller Representation Services | Dr. Janet Duffy REALTOR®",
  description: "List with Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy for strategic seller representation, premium marketing, and pricing expertise across Summerlin, Henderson, and the greater Las Vegas Valley.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/seller-representation',
  },
};

export default function Page() {
  return <MigratedPage slug="services/seller-representation" />;
}
