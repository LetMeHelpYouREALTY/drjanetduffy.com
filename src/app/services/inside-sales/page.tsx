import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Inside Sales Services | Las Vegas Luxury & Relocation REALTOR®",
  description: "Inside sales support from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, covering calls, email, chat, and CRM follow-up for real estate clients.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/inside-sales',
  },
};

export default function Page() {
  return <MigratedPage slug="services/inside-sales" />;
}
