import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "{pageTitle}",
  description: "",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/blog',
  },
};

export default function Page() {
  return <MigratedPage slug="blog" />;
}
