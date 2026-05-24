import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Digital Marketing Services | Dr. Janet Duffy REALTOR®",
  description: "Digital marketing services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, combining SEO, PPC, email, and social campaigns to generate more qualified real estate leads.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/digital-marketing',
  },
};

export default function Page() {
  return <MigratedPage slug="services/digital-marketing" />;
}
