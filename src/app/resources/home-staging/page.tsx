import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home Staging Guide | Las Vegas | Dr. Janet Duffy REALTOR®",
  description: "Complete home staging guide for selling your Las Vegas home. Tips to maximize appeal and sale price with professional staging.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/home-staging',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/home-staging" />;
}
