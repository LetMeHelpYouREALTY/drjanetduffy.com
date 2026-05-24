import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Motivational Real Estate Quotes | Dr. Janet Duffy, REALTOR®",
  description: "Inspirational real estate quotes to motivate agents, build client trust, and drive success. Curated collection from industry leaders and thought leaders.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/quotes',
  },
};

export default function Page() {
  return <MigratedPage slug="quotes" />;
}
