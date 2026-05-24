import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Popular Neighborhoods in Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Discover the best places to live in Las Vegas. Explore popular neighborhoods including West Summerlin, The Ridges, Red Rock Country Club, Henderson, Green Valley, and Seven Hills.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/neighborhoods',
  },
};

export default function Page() {
  return <MigratedPage slug="neighborhoods" />;
}
