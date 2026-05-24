import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gated Communities | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse secure gated communities in Las Vegas with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Explore homes in exclusive neighborhoods with 24/7 security, privacy, and strong property values.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/gated-communities',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/gated-communities" />;
}
