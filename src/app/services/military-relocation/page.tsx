import { MigratedPage } from '@/components/pages/MigratedPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Military Relocation Services in Las Vegas | Dr. Janet Duffy",
  description: "Specialized military relocation services for Las Vegas. Expert support for military families relocating to or from Nellis Air Force Base, Creech Air Force Base, and surrounding areas.",
  alternates: {
    canonical: 'https://www.drjanetduffy.com/services/military-relocation',
  },
};

export default function Page() {
  return <MigratedPage slug="services/military-relocation" />;
}
