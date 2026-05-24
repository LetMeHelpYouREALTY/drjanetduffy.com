import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Senior Housing Solutions | Dr. Janet Duffy REALTOR®",
  description: "Senior housing and 55+ real estate services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, specializing in downsizing, active adult communities, and retirement moves.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/senior-housing',
  },
};

export default function Page() {
  return <MigratedPage slug="services/senior-housing" />;
}
