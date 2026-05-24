import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get Started With Las Vegas Real Estate | Dr. Janet Duffy",
  description: "Get started with Las Vegas real estate in minutes. Use advanced home search, instant home value tools, calculators, and step-by-step guides for buyers, sellers, investors, and relocation clients.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/get-started',
  },
};

export default function Page() {
  return <MigratedPage slug="get-started" />;
}
