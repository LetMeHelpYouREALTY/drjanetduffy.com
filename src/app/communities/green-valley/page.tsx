import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Green Valley Luxury & Relocation Real Estate | Henderson | Dr. Janet Duffy REALTOR®",
  description: "Explore Green Valley luxury and relocation real estate in Henderson with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover established neighborhoods with mature trees, top schools, and strong value.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/green-valley',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/green-valley" />;
}
