import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Closing Costs Calculator | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Calculate your estimated closing costs for buying a home in Las Vegas. Understand all fees and costs associated with your home purchase.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/closing-costs-calculator',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/closing-costs-calculator" />;
}
