import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Listings - Grid View | Dr. Janet Duffy REALTOR®",
  description: "Browse Las Vegas property listings with our grid view. See active, pending, and sold properties in a visual grid format.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/listings-embedded',
  },
};

export default function Page() {
  return <MigratedPage slug="listings-embedded" />;
}
