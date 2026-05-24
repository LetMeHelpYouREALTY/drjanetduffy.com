import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Negotiation Expertise | Dr. Janet Duffy REALTOR®",
  description: "Negotiation expertise from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, helping buyers and sellers secure better prices, terms, and outcomes.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/negotiation-expertise',
  },
};

export default function Page() {
  return <MigratedPage slug="services/negotiation-expertise" />;
}
