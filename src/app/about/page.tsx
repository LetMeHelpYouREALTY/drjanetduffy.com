import { Award, CheckCircle, Heart, Home, Star, Users } from 'lucide-react';
import type { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Las Vegas Real Estate Expert',
  description:
    'Learn about Dr. Jan Duffy, Las Vegas real estate expert with 20+ years of experience helping families find their dream homes.',
  keywords: [
    'Dr. Jan Duffy',
    'Las Vegas real estate agent',
    'Las Vegas realtor',
    'real estate experience',
    'Las Vegas neighborhoods',
    'home buying expert',
    'home selling expert',
  ],
};

const AboutPage = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Licensed Real Estate Agent',
      description: 'Fully licensed and certified real estate professional in Nevada',
    },
    {
      icon: Users,
      title: '500+ Happy Clients',
      description: 'Successfully helped hundreds of families find their perfect homes',
    },
    {
      icon: Home,
      title: '20+ Years Experience',
      description: 'Deep knowledge of Las Vegas real estate market and trends',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Genuine care for your needs throughout the entire process',
    },
  ];

  const testimonials = [
    {
      quote:
        'Dr. Jan made our home buying process so smooth. Her knowledge of Las Vegas neighborhoods is incredible!',
      author: 'Sarah & Mike Johnson',
      location: 'Summerlin',
      rating: 5,
    },
    {
      quote:
        "We couldn't have asked for a better real estate agent. Jan truly cares about her clients.",
      author: 'David Chen',
      location: 'Henderson',
      rating: 5,
    },
    {
      quote: "Jan's expertise helped us sell our home above asking price in just 3 days!",
      author: 'Lisa Rodriguez',
      location: 'Green Valley',
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-vegas-deep-blue to-vegas-accent-blue text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dr. Jan Duffy</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                As a Las Vegas native with over 20 years of real estate experience, I've dedicated
                my career to helping families find their perfect homes in the vibrant communities of
                Las Vegas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-vegas-gold/20 to-vegas-gold/40 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-vegas-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-vegas-deep-blue">JD</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dr. Jan Duffy</h3>
                    <p className="text-vegas-gold font-semibold">Las Vegas Real Estate Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
              My Story
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Born and raised in Las Vegas, I've witnessed the incredible growth and
                transformation of our city over the past two decades. What started as a passion for
                helping people find their perfect home has evolved into a career dedicated to making
                the real estate process as smooth and enjoyable as possible.
              </p>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My approach is simple: be the expert neighbor who knows every sale and genuinely
                helps. I believe that buying or selling a home should be an exciting journey, not a
                stressful experience. That's why I take the time to understand your unique needs,
                preferences, and goals.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With deep knowledge of every neighborhood, school district, and community in Las
                Vegas, I can help you find not just a house, but a home where you'll create lasting
                memories. Whether you're a first-time buyer, looking to upgrade, or ready to
                downsize, I'm here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
            Why Choose Dr. Jan Duffy?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-vegas-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-vegas-deep-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-vegas-deep-blue mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue text-center mb-12">
            What My Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-vegas-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-vegas-deep-blue">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let's discuss your real estate goals and how I can help you achieve them. I'm here to
            make your Las Vegas real estate journey smooth and successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-222-1964"
              className="btn-primary inline-flex items-center justify-center"
            >
              Call 702-222-1964
            </a>
            <a href="/contact" className="btn-secondary inline-flex items-center justify-center">
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
