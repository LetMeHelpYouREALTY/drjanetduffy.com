import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Skye Canyon Homes - Las Vegas's Newest Community Guide | Dr. Janet Duffy",
  description: "Your complete 2025 guide to buying in Skye Canyon, Northwest Las Vegas's booming master-planned community. Learn about builders, prices, amenities, and how Dr. Duffy's concierge service simplifies new construction.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/communities/skye-canyon/buyers-guide',
  },
};

export default function Page() {
  return <MigratedPage slug="communities/skye-canyon/buyers-guide" />;
}
