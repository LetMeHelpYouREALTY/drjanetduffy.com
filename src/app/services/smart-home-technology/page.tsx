import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Home Technology Services | Las Vegas Luxury & Relocation REALTOR®",
  description: "Smart home technology guidance from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, helping buyers evaluate features, privacy, and long-term value.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/smart-home-technology',
  },
};

export default function Page() {
  return <MigratedPage slug="services/smart-home-technology" />;
}
