import { motion } from 'framer-motion';
import { Award, CheckCircle, Heart, Home, Quote, Users } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: '20+ Years Experience',
      description: 'Deep knowledge of Las Vegas real estate market trends and neighborhoods',
    },
    {
      icon: Users,
      title: '500+ Happy Clients',
      description: 'Successfully helped families find their dream homes in Las Vegas',
    },
    {
      icon: Home,
      title: 'Local Expert',
      description: 'Intimate knowledge of every neighborhood, school district, and community',
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Genuine care for your needs and goals throughout the entire process',
    },
  ];

  const testimonials = [
    {
      quote:
        'Dr. Jan made our home buying process so smooth. Her knowledge of Las Vegas neighborhoods is incredible!',
      author: 'Sarah & Mike Johnson',
      location: 'Summerlin',
    },
    {
      quote:
        "We couldn't have asked for a better real estate agent. Jan truly cares about her clients.",
      author: 'David Chen',
      location: 'Henderson',
    },
    {
      quote: "Jan's expertise helped us sell our home above asking price in just 3 days!",
      author: 'Lisa Rodriguez',
      location: 'Green Valley',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* About Dr. Jan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue mb-6">
              Meet Dr. Jan Duffy
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              As a Las Vegas native with over 20 years of real estate experience, I've helped
              hundreds of families find their perfect homes in the vibrant communities of Las Vegas,
              Henderson, and surrounding areas.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My approach is simple: be the expert neighbor who knows every sale and genuinely
              helps. I believe that buying or selling a home should be an exciting journey, not a
              stressful experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/about" className="btn-primary inline-flex items-center justify-center">
                Learn More About Jan
              </a>
              <a href="tel:702-222-1964" className="btn-phone">
                Call 702-222-1964
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="aspect-square bg-gradient-to-br from-vegas-gold/20 to-vegas-gold/40 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-vegas-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-vegas-deep-blue">JD</span>
                  </div>
                  <h3 className="text-xl font-bold text-vegas-deep-blue mb-2">Dr. Jan Duffy</h3>
                  <p className="text-vegas-accent-blue font-semibold">
                    Las Vegas Real Estate Expert
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-vegas-gold" />
                  <span className="text-gray-700">Licensed Real Estate Agent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-vegas-gold" />
                  <span className="text-gray-700">Las Vegas Native</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-vegas-gold" />
                  <span className="text-gray-700">20+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-vegas-gold" />
                  <span className="text-gray-700">500+ Successful Transactions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-hover p-6 text-center"
              >
                <div className="w-16 h-16 bg-vegas-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-vegas-deep-blue" />
                </div>
                <h3 className="text-xl font-semibold text-vegas-deep-blue mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-vegas-deep-blue text-center mb-12">
            What My Clients Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <Quote className="w-8 h-8 text-vegas-gold mb-4" />
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-vegas-deep-blue">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
