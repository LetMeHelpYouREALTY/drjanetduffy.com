import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Past Sales & All Listings | Dr. Janet Duffy REALTOR®",
  description: "View Dr. Janet Duffy's past sales and all property listings including sold, rented, and current listings in Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/past-sales',
  },
};

export default function Page() {
  return <MigratedPage slug="past-sales" />;
}
