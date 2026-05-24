import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Golf Course Communities | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse Las Vegas golf course communities with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Explore homes along championship courses with resort amenities, country club access, and prestigious lifestyles.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/golf-communities',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/golf-communities" />;
}
