import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Centennial Hills Luxury & Relocation Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Explore Centennial Hills luxury and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Newer master-planned communities with excellent schools, strong appreciation, and great value in northwest Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/centennial-hills',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/centennial-hills" />;
}
