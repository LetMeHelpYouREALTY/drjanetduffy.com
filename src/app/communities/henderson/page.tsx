import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata({
  title: 'Henderson NV Real Estate & Homes for Sale | Dr. Janet Duffy',
  description:
    'Henderson NV homes for sale with Dr. Janet Duffy. Discover family-friendly neighborhoods, A-rated schools, and master-planned communities. 35+ years Las Vegas experience. Call (702) 766-7668.',
  path: 'communities/henderson',
});

export default function Page() {
  return <MigratedPage slug="communities/henderson" />;
}
