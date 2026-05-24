import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "55+ Active Adult Communities | Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy",
  description: "Browse Las Vegas 55+ active adult communities with Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy. Discover low-maintenance homes, recreation centers, and vibrant social lifestyles for active adults and retirees.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/property-types/55-plus-communities',
  },
};

export default function Page() {
  return <MigratedPage slug="property-types/55-plus-communities" />;
}
