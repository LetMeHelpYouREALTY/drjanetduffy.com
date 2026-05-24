import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Land Investment Services in Las Vegas | Las Vegas Luxury & Relocation REALTOR®",
  description: "Land investment and development services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, supporting residential, commercial, and rural land strategies.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/land-investment',
  },
};

export default function Page() {
  return <MigratedPage slug="services/land-investment" />;
}
