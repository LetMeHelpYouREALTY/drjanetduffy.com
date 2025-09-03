import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Star, value: '500+', label: 'Happy Clients' },
    { icon: MapPin, value: '20+', label: 'Years Experience' },
    { icon: TrendingUp, value: '$2.5B+', label: 'Sales Volume' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-luxury-navy via-luxury-royal-blue to-luxury-gold">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block bg-luxury-gold/20 text-luxury-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🎰 Las Vegas Real Estate Expert
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-title font-bold mb-6 leading-tight"
            >
              Find Your Dream Home in <span className="text-luxury-gold">Las Vegas</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Be the expert neighbor who knows every sale and genuinely helps. With 20+ years of Las
              Vegas real estate experience, I'll guide you through every step of your home buying or
              selling journey.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="tel:702-222-1964" className="btn-phone">
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Now: 702-222-1964</span>
              </a>

              <a
                href="#listings"
                className="btn-secondary border-white text-white hover:bg-white hover:text-luxury-navy"
              >
                <span>View Properties</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-luxury-gold/20 rounded-lg mb-2 mx-auto">
                      <Icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                    <div className="text-2xl font-bold text-luxury-gold">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/40 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-luxury-gold rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <span className="text-4xl font-bold text-luxury-navy">JD</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Dr. Jan Duffy</h3>
                    <p className="text-luxury-gold font-semibold">Las Vegas Real Estate Expert</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-luxury-gold text-luxury-navy p-4 rounded-full shadow-lg"
              >
                <Star className="w-6 h-6" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-white text-luxury-navy p-4 rounded-full shadow-lg"
              >
                <MapPin className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;