import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home Selling Guide | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Complete guide to selling your home in Las Vegas. Expert tips on pricing, staging, marketing, and maximizing your sale price.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/selling-guide',
  },
};

export default function Page() {
  return <MigratedPage slug="selling-guide" />;
}
