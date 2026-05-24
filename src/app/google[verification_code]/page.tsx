import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Google Search Console Verification",
  description: "",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/google[verification_code]',
  },
};

export default function Page() {
  return <MigratedPage slug="google[verification_code]" />;
}
