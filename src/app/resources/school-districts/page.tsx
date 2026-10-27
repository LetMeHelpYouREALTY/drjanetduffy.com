import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "School Districts & Schools | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Clark County School District zoning for Henderson, Summerlin, and Las Vegas. Look up the schools assigned to any address.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/school-districts',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/school-districts" />;
}
