import type { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import { Home, MapPin, School, ShoppingBag, Mountain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Henderson Homes for Sale | Dr. Jan Duffy Real Estate | Las Vegas',
  description:
    'Find your dream home in Henderson, NV. Family-friendly community with excellent schools, parks, and amenities. Expert guidance from Dr. Jan Duffy. Call 702-222-1964.',
  keywords: [
    'Henderson homes for sale',
    'Henderson real estate',
    'Henderson NV',
    'Henderson neighborhoods',
    'Henderson homes',
    'Henderson properties',
    'Henderson family community',
    'Henderson schools',
    'Henderson amenities',
    'Henderson parks',
    'Henderson shopping',
    'Henderson home prices',
    'Henderson real estate market',
    'Henderson home buying',
    'Henderson home selling',
    'Las Vegas Henderson',
    'Henderson real estate agent',
    'Henderson realtor',
    'Green Valley Henderson',
    'Anthem Henderson',
  ],
  openGraph: {
    title: 'Henderson Homes for Sale | Dr. Jan Duffy Real Estate | Las Vegas',
    description: 'Find your dream home in Henderson, NV. Family-friendly community with excellent schools, parks, and amenities.',
    url: 'https://drjanetduffy.com/neighborhoods/henderson',
    type: 'website',
  },
  alternates: {
    canonical: '/neighborhoods/henderson',
  },
};

const HendersonPage = () => {
  const features = [
    {
      icon: School,
      title: 'Excellent Schools',
      description: 'Top-rated public schools including Green Valley High School and Coronado High School',
    },
    {
      icon: Mountain,
      title: 'Natural Beauty',
      description: 'Close to Lake Mead, Red Rock Canyon, and numerous hiking trails',
    },
    {
      icon: ShoppingBag,
      title: 'Shopping & Dining',
      description: 'The District at Green Valley Ranch, Galleria at Sunset, and diverse dining options',
    },
    {
      icon: Home,
      title: 'Family-Friendly',
      description: 'Safe neighborhoods with parks, community centers, and family activities',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Henderson Homes for Sale
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover Henderson, Nevada's family-friendly community with excellent schools, 
              beautiful parks, and a strong sense of community. Perfect for families and professionals.
            </p>
            <a
              href="tel:702-222-1964"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Call 702-222-1964</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
            Why Choose Henderson?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-vegas-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-vegas-deep-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-vegas-deep-blue mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RealScout Listings */}
      <section className="section-padding bg-gray-50">
        <RealScoutListings />
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Henderson Home?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let Dr. Jan Duffy help you find the perfect home in Henderson. 
            From Green Valley to Anthem, I know every neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              className="btn-primary inline-flex items-center justify-center"
            >
              Call 702-222-1964
            </a>
            <a
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HendersonPage;
