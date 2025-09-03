import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import FollowUpBossContactForm from './FollowUpBossContactForm';

const ContactSection = () => {
  const handleFormSuccess = (contactId: string) => {
    console.log('Contact created successfully:', contactId);
    // You can add additional success handling here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '702-222-1964',
      link: 'tel:702-222-1964',
      description: 'Call anytime for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'jan@drjanetduffy.com',
      link: 'mailto:jan@drjanetduffy.com',
      description: 'Send me a message anytime',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      value: 'Las Vegas & Surrounding Areas',
      link: null,
      description: 'Serving all of Las Vegas Valley',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Mon-Sun: 8AM-8PM',
      link: null,
      description: 'Available 7 days a week',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-luxury-navy mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your Las Vegas real estate journey? I'm here to help you every step of
            the way. Get in touch today for a free consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FollowUpBossContactForm
              title="Send Me a Message"
              subtitle="Get expert Las Vegas real estate guidance from Dr. Jan Duffy"
              source="Website Contact Form"
              onSuccess={handleFormSuccess}
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-luxury-pearl rounded-xl p-6 shadow-lg border border-luxury-platinum hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-luxury-navy" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-luxury-navy mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className={
                              info.title === 'Phone'
                                ? 'phone-number'
                                : 'text-luxury-gold hover:text-luxury-gold-dark font-semibold transition-colors duration-200'
                            }
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-700 font-semibold">{info.value}</p>
                        )}
                        <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Call CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-luxury-navy to-luxury-royal-blue rounded-2xl p-8 text-white text-center"
            >
              <h4 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h4>
              <p className="text-lg mb-6 opacity-90">
                Call me directly for urgent real estate questions or to schedule a showing.
              </p>
              <a href="tel:702-222-1964" className="btn-phone">
                <Phone className="w-5 h-5 mr-2" />
                <span>Call 702-222-1964</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
