import AIMarketInsights from '@/components/AIMarketInsights';
import AIPropertyAnalyzer from '@/components/AIPropertyAnalyzer';
import RealScoutListings from '@/components/RealScoutListings';
import { BarChart3, Brain, Home, Sparkles, TrendingUp, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Real Estate Tools | Dr. Jan Duffy | Las Vegas',
  description:
    'Advanced AI tools for Las Vegas real estate analysis. Property analysis, market insights, and personalized recommendations powered by artificial intelligence. Call 702-222-1964.',
  keywords: [
    'AI real estate tools',
    'Las Vegas property analysis',
    'AI market insights',
    'real estate artificial intelligence',
    'property analysis AI',
    'Las Vegas real estate AI',
    'AI-powered real estate',
    'property valuation AI',
    'market analysis AI',
    'real estate technology',
    'Las Vegas real estate tools',
    'AI property recommendations',
    'smart real estate analysis',
    'AI real estate assistant',
    'Las Vegas real estate AI tools',
  ],
  openGraph: {
    title: 'AI-Powered Real Estate Tools | Dr. Jan Duffy | Las Vegas',
    description:
      'Advanced AI tools for Las Vegas real estate analysis. Property analysis, market insights, and personalized recommendations.',
    url: 'https://drjanetduffy.com/ai-tools',
    type: 'website',
  },
  alternates: {
    canonical: '/ai-tools',
  },
};

const AIToolsPage = () => {
  // AI-powered real estate tools page
  const features = [
    {
      icon: Brain,
      title: 'AI Property Analysis',
      description:
        'Get instant, expert analysis of any Las Vegas property with market insights, neighborhood analysis, and investment potential.',
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description:
        'Real-time AI-generated market analysis with trends, pricing data, and opportunities in the Las Vegas area.',
    },
    {
      icon: BarChart3,
      title: 'Investment Analysis',
      description:
        'Comprehensive investment potential analysis with ROI projections and market timing recommendations.',
    },
    {
      icon: Users,
      title: 'Client Profiling',
      description:
        'AI-powered client analysis to provide personalized recommendations based on preferences and goals.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-luxury-navy to-luxury-royal-blue text-white">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-12 h-12 text-luxury-gold mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">AI-Powered Real Estate Tools</h1>
            </div>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Experience the future of real estate with advanced AI technology. Get instant property
              analysis, market insights, and personalized recommendations powered by artificial
              intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#property-analyzer"
                className="btn-primary bg-luxury-gold text-luxury-navy hover:bg-luxury-gold/90"
              >
                Try Property Analyzer
              </a>
              <a
                href="tel:702-222-1964"
                className="btn-secondary border-white text-white hover:bg-white hover:text-luxury-navy"
              >
                Call 702-222-1964
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered tools provide comprehensive analysis and insights to help you make
              informed real estate decisions in the Las Vegas market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-luxury-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-luxury-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Property Analyzer */}
      <section id="property-analyzer">
        <AIPropertyAnalyzer />
      </section>

      {/* AI Market Insights */}
      <section>
        <AIMarketInsights />
      </section>

      {/* RealScout Listings */}
      <section className="section-padding bg-gray-50">
        <RealScoutListings />
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-luxury-navy to-luxury-royal-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience AI-Powered Real Estate?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Combine the power of artificial intelligence with Dr. Jan Duffy's 20+ years of Las Vegas
            real estate expertise for the ultimate property buying and selling experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              className="btn-primary bg-luxury-gold text-luxury-navy hover:bg-luxury-gold/90"
            >
              Call Dr. Jan: 702-222-1964
            </a>
            <a
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:text-luxury-navy"
            >
              Schedule AI Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIToolsPage;
