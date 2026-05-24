import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Rent vs Buy Calculator | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Compare renting vs buying a home in Las Vegas. Calculate the financial benefits of homeownership vs renting over time.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/rent-vs-buy',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/rent-vs-buy" />;
}
