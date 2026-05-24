import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Seven Hills Luxury & Relocation Real Estate | Henderson | Dr. Janet Duffy REALTOR®",
  description: "Explore Seven Hills luxury and relocation real estate with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover custom luxury homes, mountain views, and gated communities in Henderson.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/seven-hills',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/seven-hills" />;
}
