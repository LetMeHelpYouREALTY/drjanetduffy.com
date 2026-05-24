import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Real Estate Services | Dr. Janet Duffy",
  description: "Las Vegas Luxury & Relocation REALTOR services including buyer and seller representation, luxury homes, relocation support, commercial real estate, and investment guidance.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services',
  },
};

export default function Page() {
  return <MigratedPage slug="services" />;
}
