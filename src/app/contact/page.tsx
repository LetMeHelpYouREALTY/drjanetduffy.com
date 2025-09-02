import ContactSection from '@/components/ContactSection';
import RealScoutListings from '@/components/RealScoutListings';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Las Vegas Real Estate Expert | 702-222-1964',
  description:
    'Contact Dr. Jan Duffy for all your Las Vegas real estate needs. Free consultation for buying or selling homes. Call 702-222-1964 or send a message today.',
  keywords: [
    'contact Dr. Jan Duffy',
    'Las Vegas real estate contact',
    'real estate agent phone',
    'Las Vegas realtor contact',
    'home buying consultation',
    'home selling consultation',
    'Las Vegas real estate consultation',
    'Las Vegas real estate expert',
    'Las Vegas real estate advice',
    'Las Vegas real estate questions',
    'Las Vegas real estate help',
    'Las Vegas real estate support',
    'Las Vegas real estate guidance',
    'Las Vegas real estate consultation free',
    'Las Vegas real estate expert contact',
    'Las Vegas real estate agent phone number',
    'Las Vegas real estate agent email',
    'Las Vegas real estate agent address',
    'Las Vegas real estate office',
    'Las Vegas real estate services',
  ],
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Las Vegas Real Estate Expert | 702-222-1964',
    description: 'Contact Dr. Jan Duffy for all your Las Vegas real estate needs. Free consultation for buying or selling homes.',
    url: 'https://drjanetduffy.com/contact',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

const ContactPage = () => {
  return (
    <div className="pt-16">
      <ContactSection />

      {/* RealScout Listings */}
      <section className="section-padding bg-gray-50">
        <RealScoutListings />
      </section>
    </div>
  );
};

export default ContactPage;
