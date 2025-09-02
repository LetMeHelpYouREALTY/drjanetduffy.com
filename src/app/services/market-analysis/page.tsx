import RealScoutListings from '@/components/RealScoutListings';
import { BarChart3, DollarSign, Home, Phone, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Market Analysis | Dr. Jan Duffy | 702-222-1964',
  description:
    'Get expert Las Vegas real estate market analysis from Dr. Jan Duffy. Current market trends, home values, and neighborhood insights. Free consultation. Call 702-222-1964.',
  keywords: [
    'Las Vegas real estate market analysis',
    'Las Vegas home values',
    'Las Vegas real estate trends',
    'Las Vegas property values',
    'Las Vegas real estate market report',
    'Las Vegas home prices',
    'Las Vegas real estate statistics',
    'Las Vegas real estate data',
    'Las Vegas real estate insights',
    'Las Vegas real estate forecast',
    'Las Vegas real estate market conditions',
    'Las Vegas real estate market trends',
    'Las Vegas real estate market update',
    'Las Vegas real estate market outlook',
    'Las Vegas real estate market research',
    'Las Vegas real estate market study',
    'Las Vegas real estate market analysis 2024',
    'Las Vegas real estate market analysis 2025',
    'Las Vegas real estate expert',
    'Las Vegas real estate consultant',
  ],
  openGraph: {
    title: 'Las Vegas Real Estate Market Analysis | Dr. Jan Duffy | 702-222-1964',
    description:
      'Get expert Las Vegas real estate market analysis from Dr. Jan Duffy. Current market trends, home values, and neighborhood insights.',
    url: 'https://drjanetduffy.com/services/market-analysis',
    type: 'website',
  },
  alternates: {
    canonical: '/services/market-analysis',
  },
};

const MarketAnalysisPage = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Market Trends Analysis',
      description:
        'Comprehensive analysis of current Las Vegas real estate market trends and future projections',
    },
    {
      icon: TrendingUp,
      title: 'Price Movement Tracking',
      description:
        'Detailed tracking of home price movements across different neighborhoods and property types',
    },
    {
      icon: DollarSign,
      title: 'Property Valuation',
      description: 'Accurate property valuations using current market data and comparable sales',
    },
    {
      icon: Home,
      title: 'Neighborhood Insights',
      description:
        'In-depth analysis of specific neighborhoods, schools, amenities, and growth potential',
    },
  ];

  const marketStats = [
    { label: 'Median Home Price', value: '$425,000', change: '+5.2%' },
    { label: 'Average Days on Market', value: '28 days', change: '-8.3%' },
    { label: 'Active Listings', value: '2,847', change: '+12.1%' },
    { label: 'List to Sale Ratio', value: '98.5%', change: '+2.1%' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Las Vegas Real Estate Market Analysis
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get expert insights into the Las Vegas real estate market. Current trends, home
              values, and neighborhood analysis to help you make informed decisions.
            </p>
            <a href="tel:702-222-1964" className="btn-primary inline-flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Call 702-222-1964</span>
            </a>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
            Current Market Statistics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue rounded-xl p-6 text-white text-center"
              >
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-vegas-gold text-sm font-semibold mb-2">{stat.change}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
            Market Analysis Services
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

      {/* RealScout Listings */}
      <section className="section-padding bg-white">
        <RealScoutListings />
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Market Analysis</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Ready to understand the Las Vegas real estate market? Get a free, comprehensive market
            analysis tailored to your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              className="btn-primary inline-flex items-center justify-center"
            >
              Call 702-222-1964
            </a>
            <a href="/contact" className="btn-secondary inline-flex items-center justify-center">
              Request Analysis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketAnalysisPage;
