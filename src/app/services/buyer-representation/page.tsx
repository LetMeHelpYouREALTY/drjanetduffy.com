import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Buyer Representation Services | Dr. Janet Duffy REALTOR®",
  description: "Work with Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy for concierge-level buyer representation across Summerlin, Henderson, Skye Canyon, Centennial Hills, and the greater Las Vegas Valley.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/buyer-representation',
  },
};

export default function Page() {
  return <MigratedPage slug="services/buyer-representation" />;
}
