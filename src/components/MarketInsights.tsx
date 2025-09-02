'use client';

import { motion } from 'framer-motion';
import { Calendar, DollarSign, Home, MapPin, TrendingDown, TrendingUp } from 'lucide-react';
import RealScoutListings from './RealScoutListings';

const MarketInsights = () => {
  const marketStats = [
    {
      icon: DollarSign,
      value: '$425,000',
      label: 'Median Home Price',
      change: '+5.2%',
      trend: 'up',
    },
    {
      icon: Home,
      value: '2,847',
      label: 'Active Listings',
      change: '+12.1%',
      trend: 'up',
    },
    {
      icon: Calendar,
      value: '28 days',
      label: 'Avg. Days on Market',
      change: '-8.3%',
      trend: 'down',
    },
    {
      icon: TrendingUp,
      value: '98.5%',
      label: 'List to Sale Ratio',
      change: '+2.1%',
      trend: 'up',
    },
  ];

  const neighborhoods = [
    {
      name: 'Summerlin',
      price: '$650,000',
      change: '+6.2%',
      trend: 'up',
      description: 'Master-planned community with top-rated schools',
    },
    {
      name: 'Henderson',
      price: '$485,000',
      change: '+4.8%',
      trend: 'up',
      description: 'Family-friendly with excellent amenities',
    },
    {
      name: 'Green Valley',
      price: '$520,000',
      change: '+5.5%',
      trend: 'up',
      description: 'Established neighborhood with mature trees',
    },
    {
      name: 'Anthem',
      price: '$580,000',
      change: '+7.1%',
      trend: 'up',
      description: 'Gated communities with resort-style living',
    },
  ];

  const insights = [
    {
      title: "Strong Seller's Market Continues",
      description:
        'Las Vegas remains a competitive market with low inventory and high demand, particularly in master-planned communities.',
      highlight: 'Multiple offers are common on well-priced homes',
    },
    {
      title: 'Interest Rates Impacting Affordability',
      description:
        'While rates have stabilized, buyers are being more selective and focusing on move-in ready properties.',
      highlight: 'Pre-approval is essential in this market',
    },
    {
      title: 'New Construction Gaining Momentum',
      description:
        'Several new developments are launching, offering modern amenities and energy-efficient features.',
      highlight: 'Early bird pricing available on select communities',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue mb-4">
            Las Vegas Market Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest Las Vegas real estate market trends, neighborhood data,
            and expert analysis to make confident decisions.
          </p>
        </motion.div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketStats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue rounded-xl p-6 text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-8 h-8 text-vegas-gold" />
                  <div
                    className={`flex items-center space-x-1 ${
                      stat.trend === 'up' ? 'text-green-300' : 'text-red-300'
                    }`}
                  >
                    <TrendIcon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{stat.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-vegas-gold text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Neighborhood Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-vegas-deep-blue text-center mb-8">
            Popular Neighborhoods
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neighborhoods.map((neighborhood, index) => {
              const TrendIcon = neighborhood.trend === 'up' ? TrendingUp : TrendingDown;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-vegas-deep-blue">
                      {neighborhood.name}
                    </h4>
                    <div className="flex items-center space-x-1 text-green-600">
                      <TrendIcon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{neighborhood.change}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-vegas-gold mb-2">
                    {neighborhood.price}
                  </div>
                  <p className="text-gray-600">{neighborhood.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Market Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-vegas-deep-blue text-center mb-8">
            Expert Market Analysis
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-vegas-deep-blue mb-3">{insight.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{insight.description}</p>
                <div className="bg-vegas-gold/10 border-l-4 border-vegas-gold p-3 rounded-r-lg">
                  <p className="text-vegas-deep-blue font-semibold text-sm">
                    💡 {insight.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-vegas-deep-blue to-vegas-accent-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make Your Move?</h3>
            <p className="text-lg mb-6 opacity-90">
              Get personalized market insights and expert guidance for your Las Vegas real estate
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:702-222-1964"
                className="inline-flex items-center justify-center space-x-2 bg-vegas-gold hover:bg-vegas-gold-dark text-vegas-deep-blue px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <span>Call Dr. Jan Duffy</span>
                <span className="font-mono">702-222-1964</span>
              </a>
              <a
                href="/market-analysis"
                className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-vegas-deep-blue px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Get Market Analysis</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RealScout Listings */}
      <div className="mt-16">
        <RealScoutListings />
      </div>
    </section>
  );
};

export default MarketInsights;
