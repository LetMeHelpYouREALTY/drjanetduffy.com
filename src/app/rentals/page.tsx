import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rental Properties | Dr. Janet Duffy REALTOR®",
  description: "Find rental properties in Las Vegas with Dr. Janet Duffy. Browse available rentals, apartments, and homes for rent in the Las Vegas area.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/rentals',
  },
};

export default function Page() {
  return <MigratedPage slug="rentals" />;
}
