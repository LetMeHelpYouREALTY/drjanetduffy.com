import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Summerlin Real Estate | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Explore Summerlin real estate. Master-planned community with luxury homes, golf courses, top schools, and world-class amenities in Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/summerlin',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/summerlin" />;
}
