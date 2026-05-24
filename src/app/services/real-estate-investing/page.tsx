import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Real Estate Investing Services | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy provides data-driven real estate investing services, from rental portfolios to fix-and-flip and 1031 exchange strategies across the Las Vegas Valley.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/real-estate-investing',
  },
};

export default function Page() {
  return <MigratedPage slug="services/real-estate-investing" />;
}
