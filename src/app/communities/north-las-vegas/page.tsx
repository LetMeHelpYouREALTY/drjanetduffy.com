import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "North Las Vegas Luxury & Relocation Real Estate | Dr. Janet Duffy REALTOR®",
  description: "Explore North Las Vegas real estate. Affordable housing, growing economy, and new developments in this family-friendly Las Vegas area community.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/north-las-vegas',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/north-las-vegas" />;
}
