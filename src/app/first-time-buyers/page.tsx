import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "First-Time Home Buyer Guide | Dr. Janet Duffy REALTOR®",
  description: "Complete guide for first-time home buyers in Las Vegas. Expert guidance on financing, finding your dream home, and navigating the buying process.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/first-time-buyers',
  },
};

export default function Page() {
  return <MigratedPage slug="first-time-buyers" />;
}
