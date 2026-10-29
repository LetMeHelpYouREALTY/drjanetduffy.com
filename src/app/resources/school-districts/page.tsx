import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "School Districts & Schools | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Information about Las Vegas area school districts and nearby public schools. Find the nearby public schools for your family in Henderson, Summerlin, and Clark County.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/school-districts',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/school-districts" />;
}
