import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Skye Canyon Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Explore Skye Canyon real estate. Las Vegas's newest master-planned community with modern amenities, excellent builders, and strong investment potential.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/skye-canyon',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/skye-canyon" />;
}
