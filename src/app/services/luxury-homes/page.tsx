import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Luxury Home Services | Dr. Janet Duffy REALTOR®",
  description: "Luxury home services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in The Ridges, MacDonald Highlands, Red Rock Country Club, Anthem, Seven Hills, and other premier communities.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/luxury-homes',
  },
};

export default function Page() {
  return <MigratedPage slug="services/luxury-homes" />;
}
