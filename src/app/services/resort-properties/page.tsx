import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Resort & Second Home Services | Dr. Janet Duffy REALTOR®",
  description: "Resort and second home services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, focused on Lake Las Vegas, golf communities, and view properties for vacation and investment use.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/resort-properties',
  },
};

export default function Page() {
  return <MigratedPage slug="services/resort-properties" />;
}
