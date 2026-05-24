import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home Value Calculator | Dr. Janet Duffy REALTOR®",
  description: "Get an instant estimate of your home's value with Dr. Janet Duffy's advanced valuation tool. Free, accurate, and based on current Las Vegas market data.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/home-value',
  },
};

export default function Page() {
  return <MigratedPage slug="home-value" />;
}
