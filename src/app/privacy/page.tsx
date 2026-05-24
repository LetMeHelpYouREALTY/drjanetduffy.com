import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Janet Duffy REALTOR®",
  description: "Privacy Policy for Dr. Janet Duffy REALTOR® website. Learn how we protect your personal information and respect your privacy.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/privacy',
  },
};

export default function Page() {
  return <MigratedPage slug="privacy" />;
}
