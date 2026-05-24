import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Las Vegas Luxury & Relocation Real Estate Glossary | Dr. Janet Duffy REALTOR®",
  description: "Las Vegas Luxury & Relocation real estate glossary with clear definitions of terms used in buying, selling, investing, and relocating to Las Vegas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/resources/real-estate-glossary',
  },
};

export default function Page() {
  return <MigratedPage slug="resources/real-estate-glossary" />;
}
