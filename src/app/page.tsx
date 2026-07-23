'use client';

import { useEffect, useState } from 'react';
import type { Metadata } from 'next';

const neighborhoods = [
  {
    name: 'Summerlin West',
    zip: '89138',
    description: 'Luxury communities with golf courses and mountain views'
  },
  {
    name: 'The Ridges',
    zip: '89135',
    description: 'Guard-gated luxury estates and custom homes'
  },
  {
    name: 'Red Rock Country Club',
    zip: '89144',
    description: 'Prestigious golf course community'
  }
];

const faqs = [
  {
    question: 'How is the Las Vegas real estate market in 2026?',
    answer: 'The Las Vegas market in 2026 shows strong fundamentals with median home prices at $485K, averaging 28 days on market. West Summerlin continues to lead in luxury property appreciation.'
  },
  {
    question: 'What areas do you specialize in?',
    answer: 'I specialize in West Summerlin, including zip codes 89138, 89144, and 89135. These areas feature luxury communities like The Ridges, Red Rock Country Club, and Summerlin West.'
  },
  {
    question: 'How can I get my home\'s current market value?',
    answer: 'Use my free home value calculator for an instant estimate based on current market data, or contact me for a comprehensive Comparative Market Analysis (CMA) tailored to your property.'
  },
  {
    question: 'Do you work with first-time homebuyers?',
    answer: 'Yes! I guide first-time buyers through the entire process, from financing pre-approval to closing. I make complex transactions simple and stress-free.'
  }
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* SEO Head Tags */}
      <head>
        <title>Dr. Janet Duffy, REALTOR® | West Summerlin Luxury Real Estate Expert | Las Vegas, NV</title>
        <meta name="description" content="Dr. Janet Duffy - West Summerlin's trusted REALTOR® specializing in luxury homes in 89138, 89144, 89135. Berkshire Hathaway Nevada Properties. 15+ years serving executives and California relocations. Call 702-222-1964." />
        <meta name="keywords" content="Dr. Janet Duffy REALTOR, West Summerlin real estate, Las Vegas luxury homes, 89138 homes for sale, 89144 properties, 89135 real estate, Berkshire Hathaway Nevada, Summerlin realtor, luxury real estate agent Las Vegas" />
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Las Vegas" />
        <meta name="geo.position" content="36.1699;-115.1398" />
        <meta name="ICBM" content="36.1699, -115.1398" />
        <link rel="canonical" href="https://drjanduffy.com/" />
      </head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">West Summerlin's Luxury Real Estate Expert</h1>
            <p className="text-2xl mb-4 font-semibold">Dr. Janet Duffy, REALTOR<sup>®</sup></p>
            <p className="text-xl mb-8 text-primary-100">
              Berkshire Hathaway Nevada Properties | 15+ Years Experience | $50M+ in Sales
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Specializing in luxury homes across West Summerlin (89138, 89144, 89135). Trusted by executives and families relocating from California to Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/properties" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Search Luxury Homes
              </a>
              <a href="tel:+17022221964" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors">
                Call 702-222-1964
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Find Your Dream Home in Las Vegas</h2>
            {mounted ? (
              <div dangerouslySetInnerHTML={{
                __html: '<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>'
              }} />
            ) : (
              <div className="animate-pulse">
                <div className="h-14 bg-gray-200 rounded"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Neighborhood Expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">West Summerlin Neighborhood Expertise</h2>
            <p className="text-xl text-gray-600">Specializing in Las Vegas's most prestigious communities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {neighborhoods.map((neighborhood) => (
              <article key={neighborhood.zip} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{neighborhood.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">Zip Code: {neighborhood.zip}</p>
                <p className="text-gray-600 mb-4">{neighborhood.description}</p>
                <a href="/properties" className="text-primary-600 hover:text-primary-700 font-semibold">
                  View Homes in {neighborhood.zip} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Las Vegas Market at a Glance (2026)</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$485K</div>
              <div className="text-primary-100">Median Home Price</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">28</div>
              <div className="text-primary-100">Days on Market</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+8.5%</div>
              <div className="text-primary-100">Year-Over-Year Growth</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for AEO */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <article key={index} className="bg-white rounded-lg shadow p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/contact" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Have More Questions? Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make Your Move in Las Vegas?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Whether you're buying, selling, or relocating to West Summerlin, I'm here to help you achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/home-value" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Home Valuation
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
