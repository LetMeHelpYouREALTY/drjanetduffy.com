import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Boulder City Luxury & Relocation Real Estate | Dr. Janet Duffy REALTOR®",
  description: "Explore Boulder City luxury and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Enjoy small-town charm, Lake Mead access, and peaceful living just outside Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/boulder-city',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/boulder-city" />;
}
