import RealScoutListings from '@/components/RealScoutListings';
import { Home, MapPin, School, ShoppingBag, TreePine } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Summerlin Homes for Sale | Dr. Jan Duffy Real Estate | Las Vegas',
  description:
    'Find your dream home in Summerlin, Las Vegas. Master-planned community with top schools, parks, and amenities. Expert guidance from Dr. Jan Duffy. Call 702-222-1964.',
  keywords: [
    'Summerlin homes for sale',
    'Summerlin real estate',
    'Summerlin Las Vegas',
    'Summerlin neighborhoods',
    'Summerlin homes',
    'Summerlin properties',
    'Summerlin master planned community',
    'Summerlin schools',
    'Summerlin amenities',
    'Summerlin parks',
    'Summerlin shopping',
    'Summerlin golf courses',
    'Summerlin home prices',
    'Summerlin real estate market',
    'Summerlin home buying',
    'Summerlin home selling',
    'Las Vegas Summerlin',
    'Summerlin NV',
    'Summerlin real estate agent',
    'Summerlin realtor',
  ],
  openGraph: {
    title: 'Summerlin Homes for Sale | Dr. Jan Duffy Real Estate | Las Vegas',
    description:
      'Find your dream home in Summerlin, Las Vegas. Master-planned community with top schools, parks, and amenities.',
    url: 'https://drjanetduffy.com/neighborhoods/summerlin',
    type: 'website',
  },
  alternates: {
    canonical: '/neighborhoods/summerlin',
  },
};

const SummerlinPage = () => {
  const features = [
    {
      icon: School,
      title: 'Top-Rated Schools',
      description:
        'Excellent public and private schools including The Meadows School and Palo Verde High School',
    },
    {
      icon: TreePine,
      title: 'Parks & Recreation',
      description: 'Over 150 parks, trails, and recreational facilities including Red Rock Canyon',
    },
    {
      icon: ShoppingBag,
      title: 'Shopping & Dining',
      description: 'Downtown Summerlin, Tivoli Village, and numerous restaurants and shops',
    },
    {
      icon: Home,
      title: 'Diverse Housing',
      description: 'From luxury estates to family homes, condos to custom builds',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Summerlin Homes for Sale</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Discover the premier master-planned community in Las Vegas. Summerlin offers luxury
              living with top-rated schools, beautiful parks, and world-class amenities.
            </p>
            <a href="tel:702-222-1964" className="btn-primary inline-flex items-center space-x-2">
              <span>Call 702-222-1964</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
            Why Choose Summerlin?
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
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
            Ready to Find Your Summerlin Home?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let Dr. Jan Duffy help you find the perfect home in Summerlin. With 20+ years of Las
            Vegas real estate experience, I know every neighborhood.
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

export default SummerlinPage;
