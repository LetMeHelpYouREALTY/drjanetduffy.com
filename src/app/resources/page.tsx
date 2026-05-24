import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Resources | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury & Relocation resources including buying and selling guides, market insights, relocation checklists, and investment information.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources',
  },
};

export default function Page() {
  return <MigratedPage slug="resources" />;
}
