import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Las Vegas Luxury & Relocation REALTOR®",
  description: "Social media marketing services from Las Vegas Luxury &amp; Relocation REALTOR® Dr. Janet Duffy, showcasing listings and expertise across Facebook, Instagram, LinkedIn, YouTube, and more.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/social-media-marketing',
  },
};

export default function Page() {
  return <MigratedPage slug="services/social-media-marketing" />;
}
