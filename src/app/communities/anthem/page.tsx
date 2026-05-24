import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Anthem Luxury & Relocation Real Estate | Henderson | Dr. Janet Duffy REALTOR®",
  description: "Explore Anthem luxury and relocation real estate in Henderson with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover golf course homes, country club estates, and gated communities.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/anthem',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/anthem" />;
}
