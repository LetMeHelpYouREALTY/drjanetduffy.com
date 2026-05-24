import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Moving Checklist | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Complete moving checklist for relocating to Las Vegas. Timeline and tasks to ensure a smooth move to your new home.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/moving-checklist',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/moving-checklist" />;
}
