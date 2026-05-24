import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mortgage Calculator | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Calculate your monthly mortgage payment with our free mortgage calculator. Estimate payments for Las Vegas homes.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/mortgage-calculator',
  },
};

export default function Page() {
  return <MigratedPage slug="mortgage-calculator" />;
}
