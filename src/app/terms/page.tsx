import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Dr. Janet Duffy REALTOR®",
  description: "Terms of Service for Dr. Janet Duffy REALTOR® website. Read our terms and conditions for using our real estate services.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/terms',
  },
};

export default function Page() {
  return <MigratedPage slug="terms" />;
}
