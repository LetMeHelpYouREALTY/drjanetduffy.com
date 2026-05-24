import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Investment Real Estate Guide | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury & Investment real estate guide covering strategies, ROI, cap rates, and building a profitable property portfolio with a local expert.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/investment-guide',
  },
};

export default function Page() {
  return <MigratedPage slug="investment-guide" />;
}
