import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Client Testimonials | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Hear what clients say about working with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Real stories from Las Vegas buyers, sellers, investors, and relocation clients.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/testimonials',
  },
};

export default function Page() {
  return <MigratedPage slug="testimonials" />;
}
