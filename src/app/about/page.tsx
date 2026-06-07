import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'About Dr. Janet Duffy | 35+ Years Las Vegas Real Estate Experience',
  description:
    'Dr. Janet Duffy is a Las Vegas REALTOR® with 35+ years experience, $127M+ in career sales, specializing in luxury homes, relocation, and investment properties. Licensed S.0197614.LLC with Berkshire Hathaway HomeServices.',
  path: 'about',
});

export default function Page() {
  return <MigratedPage slug="about" />;
}
