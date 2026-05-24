import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Market Insights | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury & Relocation market insights including current median prices, days on market, inventory levels, and trends across key Las Vegas communities.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/market-insights',
  },
};

export default function Page() {
  return <MigratedPage slug="market-insights" />;
}
