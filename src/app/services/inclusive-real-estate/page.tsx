import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Inclusive Real Estate Services | Las Vegas Luxury & Relocation REALTOR®",
  description: "Inclusive real estate services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, providing fair, culturally aware representation for all communities.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/inclusive-real-estate',
  },
};

export default function Page() {
  return <MigratedPage slug="services/inclusive-real-estate" />;
}
