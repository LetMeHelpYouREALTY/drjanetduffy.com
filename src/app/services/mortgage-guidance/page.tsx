import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Mortgage Guidance | Dr. Janet Duffy REALTOR®",
  description: "Mortgage guidance from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, helping buyers compare loan types, improve approval odds, and secure better terms.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/mortgage-guidance',
  },
};

export default function Page() {
  return <MigratedPage slug="services/mortgage-guidance" />;
}
