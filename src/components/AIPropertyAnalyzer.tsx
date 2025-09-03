import { motion } from 'framer-motion';
import { BarChart3, Clock, DollarSign, Home, MapPin, Sparkles, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { type PropertyAnalysis, analyzeProperty } from '../lib/openrouter';

interface PropertyDetails {
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  neighborhood: string;
  yearBuilt: number;
}

const AIPropertyAnalyzer = () => {
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetails>({
    address: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: 0,
    neighborhood: '',
    yearBuilt: 0,
  });

  const [analysis, setAnalysis] = useState<PropertyAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await analyzeProperty(propertyDetails);
      setAnalysis(result);
    } catch (_err) {
      setError('Failed to analyze property. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof PropertyDetails, value: string | number) => {
    setPropertyDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
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
            <h2 className="text-3xl md:text-4xl font-bold">AI-Powered Property Analysis</h2>
          </div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Get instant, expert analysis of any Las Vegas property using advanced AI technology.
            Understand market trends, neighborhood insights, and investment potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 text-vegas-gold">Property Details</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-200 mb-2">
                  Property Address *
                </label>
                <input
                  id="address"
                  type="text"
                  value={propertyDetails.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-vegas-gold"
                  placeholder="123 Main St, Las Vegas, NV"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="price" className="block text-sm font-semibold text-gray-200 mb-2">
                    Price ($) *
                  </label>
                  <input
                    id="price"
                    type="number"
                    value={propertyDetails.price || ''}
                    onChange={(e) =>
                      handleInputChange('price', Number.parseInt(e.target.value) || 0)
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-vegas-gold"
                    placeholder="500000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="neighborhood"
                    className="block text-sm font-semibold text-gray-200 mb-2"
                  >
                    Neighborhood *
                  </label>
                  <select
                    id="neighborhood"
                    value={propertyDetails.neighborhood}
                    onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                    required
                    aria-label="Select Neighborhood"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-vegas-gold"
                  >
                    <option value="">Select Neighborhood</option>
                    <option value="Summerlin">Summerlin</option>
                    <option value="Henderson">Henderson</option>
                    <option value="Green Valley">Green Valley</option>
                    <option value="Anthem">Anthem</option>
                    <option value="Southern Highlands">Southern Highlands</option>
                    <option value="Centennial Hills">Centennial Hills</option>
                    <option value="Spring Valley">Spring Valley</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Bedrooms *
                  </label>
                  <input
                    type="number"
                    value={propertyDetails.bedrooms || ''}
                    onChange={(e) =>
                      handleInputChange('bedrooms', Number.parseInt(e.target.value) || 0)
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-vegas-gold"
                    placeholder="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Bathrooms *
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={propertyDetails.bathrooms || ''}
                    onChange={(e) =>
                      handleInputChange('bathrooms', Number.parseFloat(e.target.value) || 0)
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-vegas-gold"
                    placeholder="2.5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Square Feet *
                  </label>
                  <input
                    type="number"
                    value={propertyDetails.squareFeet || ''}
                    onChange={(e) =>
                      handleInputChange('squareFeet', Number.parseInt(e.target.value) || 0)
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-vegas-gold"
                    placeholder="2000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Year Built *
                </label>
                <input
                  type="number"
                  value={propertyDetails.yearBuilt || ''}
                  onChange={(e) =>
                    handleInputChange('yearBuilt', Number.parseInt(e.target.value) || 0)
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-vegas-gold"
                  placeholder="2010"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary bg-vegas-gold text-vegas-deep-blue hover:bg-vegas-gold/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-vegas-deep-blue mr-2" />
                    Analyzing Property...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Analyze Property
                  </div>
                )}
              </button>
            </form>
          </motion.div>

          {/* Analysis Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-200">
                {error}
              </div>
            )}

            {analysis && (
              <div className="space-y-6">
                {/* Market Insights */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-6 h-6 text-vegas-gold mr-3" />
                    <h4 className="text-xl font-bold text-vegas-gold">Market Insights</h4>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{analysis.marketInsights}</p>
                </div>

                {/* Neighborhood Analysis */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-vegas-gold mr-3" />
                    <h4 className="text-xl font-bold text-vegas-gold">Neighborhood Analysis</h4>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{analysis.neighborhoodAnalysis}</p>
                </div>

                {/* Investment Potential */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 text-vegas-gold mr-3" />
                    <h4 className="text-xl font-bold text-vegas-gold">Investment Potential</h4>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{analysis.investmentPotential}</p>
                </div>

                {/* Recommendations */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="w-6 h-6 text-vegas-gold mr-3" />
                    <h4 className="text-xl font-bold text-vegas-gold">Recommendations</h4>
                  </div>
                  <ul className="space-y-2">
                    {analysis.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-vegas-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-200">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-vegas-gold/20 backdrop-blur-sm rounded-xl p-6 border border-vegas-gold/30 text-center">
                  <h4 className="text-xl font-bold text-vegas-gold mb-4">Ready to Take Action?</h4>
                  <p className="text-gray-200 mb-6">
                    Get personalized guidance from Dr. Jan Duffy, your Las Vegas real estate expert.
                  </p>
                  <a
                    href="tel:702-222-1964"
                    className="btn-primary bg-vegas-gold text-vegas-deep-blue hover:bg-vegas-gold/90"
                  >
                    Call Dr. Jan: 702-222-1964
                  </a>
                </div>
              </div>
            )}

            {!analysis && !isLoading && !error && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                <Home className="w-16 h-16 text-vegas-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold text-vegas-gold mb-4">
                  Get Instant Property Analysis
                </h4>
                <p className="text-gray-200">
                  Enter property details to receive AI-powered insights about market trends,
                  neighborhood analysis, and investment potential.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIPropertyAnalyzer;
