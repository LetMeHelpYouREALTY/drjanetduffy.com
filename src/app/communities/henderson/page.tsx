import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Henderson Luxury & Relocation Real Estate | Dr. Janet Duffy REALTOR®",
  description: "Explore Henderson luxury and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover family-friendly neighborhoods, top schools, and safe communities just outside Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/henderson',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/henderson" />;
}
