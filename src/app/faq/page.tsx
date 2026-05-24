import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation FAQ | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury & Relocation FAQ answering common questions about buying, selling, investing, and relocating with a concierge-level REALTOR®.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/faq',
  },
};

export default function Page() {
  return <MigratedPage slug="faq" />;
}
