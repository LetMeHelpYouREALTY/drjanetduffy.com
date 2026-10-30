import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Las Vegas Luxury & Relocation REALTOR | Dr. Jan Duffy",
  description: "Learn about Dr. Jan Duffy, Las Vegas Luxury & Relocation REALTOR licensed since 2008 · 35 years in Las Vegas, with 500+ homes sold and $127M+ in sales volume.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/about',
  },
};

export default function Page() {
  return <MigratedPage slug="about" />;
}
