import RealScoutListings from '@/components/RealScoutListings';
import { DollarSign, Home, MapPin, Phone, Search } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy a Home in Las Vegas | Dr. Jan Duffy Real Estate | 702-222-1964',
  description:
    'Find your dream home in Las Vegas with Dr. Jan Duffy. Expert home buying guidance in Summerlin, Henderson, Green Valley. Browse MLS listings. Call 702-222-1964.',
  keywords: [
    'Las Vegas homes for sale',
    'buy home Las Vegas',
    'Las Vegas real estate listings',
    'home buying Las Vegas',
    'Las Vegas properties',
    'real estate agent Las Vegas',
    'Las Vegas MLS listings',
    'Summerlin homes for sale',
    'Henderson homes for sale',
    'Green Valley homes for sale',
    'Anthem homes for sale',
    'Southern Highlands homes',
    'Las Vegas home buying process',
    'Las Vegas first time home buyer',
    'Las Vegas home buying tips',
    'Las Vegas property search',
    'Las Vegas real estate market',
    'Las Vegas home prices',
    'Las Vegas neighborhoods',
    'Las Vegas school districts',
  ],
  openGraph: {
    title: 'Buy a Home in Las Vegas | Dr. Jan Duffy Real Estate | 702-222-1964',
    description: 'Find your dream home in Las Vegas with Dr. Jan Duffy. Expert home buying guidance in Summerlin, Henderson, Green Valley.',
    url: 'https://drjanetduffy.com/buy',
    type: 'website',
  },
  alternates: {
    canonical: '/buy',
  },
};

const BuyPage = () => {
  const services = [
    {
      icon: Search,
      title: 'Property Search',
      description: 'Access to all MLS listings and off-market properties',
    },
    {
      icon: Home,
      title: 'Home Tours',
      description: 'Personalized property tours with expert insights',
    },
    {
      icon: MapPin,
      title: 'Neighborhood Analysis',
      description: 'Detailed information about schools, amenities, and community',
    },
    {
      icon: DollarSign,
      title: 'Negotiation',
      description: 'Expert negotiation to get you the best deal',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Dream Home in Las Vegas
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              With 20+ years of Las Vegas real estate experience, I'll help you find the perfect
              home in the perfect neighborhood. Let's start your journey today.
            </p>
            <a href="tel:702-222-1964" className="btn-primary inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call 702-222-1964</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
            How I Help You Buy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-vegas-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-vegas-deep-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-vegas-deep-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="section-padding bg-gray-50">
        <RealScoutListings />
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Home Search?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's discuss your needs, preferences, and budget to find the perfect Las Vegas home for
            you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              className="btn-primary inline-flex items-center justify-center"
            >
              Call 702-222-1964
            </a>
            <a href="/contact" className="btn-secondary inline-flex items-center justify-center">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyPage;
