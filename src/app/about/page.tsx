import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Las Vegas Luxury & Relocation REALTOR | Dr. Jan Duffy",
  description: "Learn about Dr. Jan Duffy, Las Vegas Luxury & Relocation REALTOR with 15+ years of experience, 150+ properties sold, and $50M+ in sales volume.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/about',
  },
};

export default function Page() {
  return <MigratedPage slug="about" />;
}
