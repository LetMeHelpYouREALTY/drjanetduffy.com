'use client';

import { motion } from 'framer-motion';
import { BarChart3, DollarSign, MapPin, RefreshCw, Sparkles, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const AIMarketInsights = () => {
  const [insights, setInsights] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchInsights = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-insights');
      if (!response.ok) {
        throw new Error('Failed to fetch insights');
      }

      const data = await response.json();
      setInsights(data.insights);
      setLastUpdated(new Date(data.generatedAt));
    } catch (err) {
      setError('Failed to load market insights. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const formatInsights = (text: string) => {
    // Split by common section headers and format
    const sections = text.split(/(?=\d+\.|\*\*|##)/);
    return sections
      .map((section, index) => {
        const trimmed = section.trim();
        if (!trimmed) return null;

        // Check if it's a header
        if (trimmed.match(/^\d+\./)) {
          return (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold text-vegas-gold mb-2">{trimmed}</h4>
            </div>
          );
        }

        // Check if it's a bold header
        if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
          return (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold text-vegas-gold mb-2">
                {trimmed.replace(/\*\*/g, '')}
              </h4>
            </div>
          );
        }

        // Regular paragraph
        return (
          <p key={index} className="text-gray-200 leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      })
      .filter(Boolean);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-vegas-gold mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">AI-Generated Market Insights</h2>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get real-time, AI-powered analysis of the Las Vegas real estate market. Updated insights
            on trends, pricing, and opportunities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Header with refresh button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center mb-4 sm:mb-0">
              <BarChart3 className="w-6 h-6 text-vegas-gold mr-3" />
              <div>
                <h3 className="text-xl font-bold text-vegas-gold">Current Market Analysis</h3>
                {lastUpdated && (
                  <p className="text-sm text-gray-300">
                    Last updated: {lastUpdated.toLocaleString()}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={fetchInsights}
              disabled={isLoading}
              className="btn-primary bg-vegas-gold text-vegas-deep-blue hover:bg-vegas-gold/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-vegas-deep-blue mr-2"></div>
                  <span>Generating...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  <span>Refresh Insights</span>
                </div>
              )}
            </button>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-200 mb-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  {error}
                </div>
              </div>
            )}

            {isLoading && !insights && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vegas-gold mx-auto mb-4"></div>
                <p className="text-gray-200">Generating AI-powered market insights...</p>
              </div>
            )}

            {insights && !isLoading && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 text-vegas-gold mr-3" />
                  <h4 className="text-xl font-bold text-vegas-gold">
                    Las Vegas Real Estate Market Analysis
                  </h4>
                </div>

                <div className="prose prose-lg max-w-none">{formatInsights(insights)}</div>
              </div>
            )}

            {!insights && !isLoading && !error && (
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-vegas-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold text-vegas-gold mb-4">Market Insights Loading</h4>
                <p className="text-gray-200">
                  Click "Refresh Insights" to generate AI-powered market analysis.
                </p>
              </div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 bg-vegas-gold/20 backdrop-blur-sm rounded-xl p-6 border border-vegas-gold/30 text-center"
          >
            <h4 className="text-xl font-bold text-vegas-gold mb-4">
              Ready to Act on These Insights?
            </h4>
            <p className="text-gray-200 mb-6">
              Get personalized guidance from Dr. Jan Duffy to navigate the Las Vegas real estate
              market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:702-222-1964"
                className="btn-primary bg-vegas-gold text-vegas-deep-blue hover:bg-vegas-gold/90"
              >
                Call Dr. Jan: 702-222-1964
              </a>
              <a
                href="/contact"
                className="btn-secondary border-vegas-gold text-vegas-gold hover:bg-vegas-gold hover:text-vegas-deep-blue"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIMarketInsights;
