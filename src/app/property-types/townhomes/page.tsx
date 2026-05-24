import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Townhomes for Sale | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse Las Vegas townhomes with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Low-maintenance homes with more space than condos, ideal for families, first-time buyers, and investors.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/townhomes',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/townhomes" />;
}
