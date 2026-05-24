import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Eco-Friendly Homes in Las Vegas | Las Vegas Luxury & Relocation REALTOR®",
  description: "Eco-friendly and energy-efficient home services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in solar, water-wise, and sustainable properties.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/eco-friendly-homes',
  },
};

export default function Page() {
  return <MigratedPage slug="services/eco-friendly-homes" />;
}
