import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Commercial Real Estate Services | Dr. Janet Duffy REALTOR®",
  description: "Commercial real estate services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in industrial, office, and retail properties across the Las Vegas Valley.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/commercial-real-estate',
  },
};

export default function Page() {
  return <MigratedPage slug="services/commercial-real-estate" />;
}
