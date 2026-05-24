import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "International Property Services in Las Vegas | Las Vegas Luxury & Relocation REALTOR®",
  description: "International property services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, guiding global buyers and investors through cross-border Las Vegas transactions.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/international-property',
  },
};

export default function Page() {
  return <MigratedPage slug="services/international-property" />;
}
