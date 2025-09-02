import { Award, Clock, DollarSign, Phone, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'Sell Your Las Vegas Home | Dr. Jan Duffy Real Estate',
  description:
    'Sell your Las Vegas home with Dr. Jan Duffy. Get expert guidance, market analysis, and maximum value for your property.',
  keywords: [
    'sell home Las Vegas',
    'Las Vegas home selling',
    'real estate agent Las Vegas',
    'home valuation Las Vegas',
    'sell house Las Vegas',
    'Las Vegas property sales',
  ],
};

const SellPage = () => {
  const services = [
    {
      icon: DollarSign,
      title: 'Market Analysis',
      description: 'Comprehensive property valuation and market comparison',
    },
    {
      icon: TrendingUp,
      title: 'Pricing Strategy',
      description: "Data-driven pricing to maximize your home's value",
    },
    {
      icon: Clock,
      title: 'Quick Sale',
      description: 'Proven strategies to sell your home fast',
    },
    {
      icon: Award,
      title: 'Expert Marketing',
      description: 'Professional photography, staging, and marketing',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'We discuss your goals, timeline, and property details',
    },
    {
      step: '2',
      title: 'Market Analysis',
      description: "Comprehensive evaluation of your home's value and market position",
    },
    {
      step: '3',
      title: 'Marketing Strategy',
      description: 'Professional photos, staging, and targeted marketing campaign',
    },
    {
      step: '4',
      title: 'Showings & Offers',
      description: 'Coordinate showings and negotiate the best offers',
    },
    {
      step: '5',
      title: 'Closing',
      description: 'Guide you through the closing process to completion',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sell Your Las Vegas Home for Maximum Value
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              With 20+ years of Las Vegas real estate experience, I'll help you sell your home
              quickly and for the best possible price. Let's get started today.
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
            How I Help You Sell
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

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
            My Selling Process
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {process.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-vegas-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-vegas-deep-blue font-bold text-lg">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-vegas-deep-blue mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Sell Your Home?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's discuss your property and create a customized selling strategy to maximize your
            home's value and minimize time on market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              className="btn-primary inline-flex items-center justify-center"
            >
              Call 702-222-1964
            </a>
            <a href="/contact" className="btn-secondary inline-flex items-center justify-center">
              Get Free Valuation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;
