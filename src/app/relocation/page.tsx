import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Services | Moving to Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury & Relocation services for executives, medical professionals, military families, and remote workers planning a move to Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/relocation',
  },
};

export default function Page() {
  return <MigratedPage slug="relocation" />;
}
