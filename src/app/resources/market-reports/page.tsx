import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Market Reports | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury & Relocation market reports and trends with current statistics on home prices, inventory, days on market, and sales volume across key communities.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/market-reports',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/market-reports" />;
}
