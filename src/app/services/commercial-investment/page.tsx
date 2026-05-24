import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Commercial Investment Services | Dr. Janet Duffy REALTOR®",
  description: "Commercial investment services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, helping investors analyze, acquire, and optimize commercial properties across the Las Vegas market.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/commercial-investment',
  },
};

export default function Page() {
  return <MigratedPage slug="services/commercial-investment" />;
}
