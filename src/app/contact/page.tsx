import ContactSection from '@/components/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Las Vegas Real Estate Expert',
  description:
    'Get in touch with Dr. Jan Duffy for all your Las Vegas real estate needs. Call 702-222-1964 or send a message today.',
  keywords: [
    'contact Dr. Jan Duffy',
    'Las Vegas real estate contact',
    'real estate agent phone',
    'Las Vegas realtor contact',
    'home buying consultation',
    'home selling consultation',
  ],
};

const ContactPage = () => {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
};

export default ContactPage;
