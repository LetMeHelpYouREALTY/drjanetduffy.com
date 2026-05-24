import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home Inspection Guide | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Complete guide to home inspections in Las Vegas. Learn what inspectors check, common issues, and how to use inspection results in negotiations.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/home-inspection-guide',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/home-inspection-guide" />;
}
