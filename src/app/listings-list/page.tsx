import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Listings - List View | Dr. Janet Duffy REALTOR®",
  description: "Browse Las Vegas property listings in a detailed list format. See active, pending, and sold properties with comprehensive details.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/listings-list',
  },
};

export default function Page() {
  return <MigratedPage slug="listings-list" />;
}
