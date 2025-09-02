'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'buying',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'buying',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <h2 className="text-3xl md:text-4xl font-bold text-vegas-deep-blue mb-4">
            Let's Connect
          </h2>
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
            <div className="card-hover p-6 md:p-8">
              <h3 className="text-2xl font-bold text-vegas-deep-blue mb-6">Send Me a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-vegas-deep-blue mb-2">Thank You!</h4>
                  <p className="text-gray-600">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="(702) 555-0123"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        I'm Interested In
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="buying">Buying a Home</option>
                        <option value="selling">Selling a Home</option>
                        <option value="investment">Investment Properties</option>
                        <option value="market-analysis">Market Analysis</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-textarea"
                      placeholder="Tell me about your real estate needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary inline-flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
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
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-vegas-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-vegas-deep-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-vegas-deep-blue mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className={info.title === 'Phone' ? 'phone-number' : 'text-vegas-gold hover:text-vegas-gold-dark font-semibold transition-colors duration-200'}
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
              className="bg-gradient-to-r from-vegas-deep-blue to-vegas-accent-blue rounded-2xl p-8 text-white text-center"
            >
              <h4 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h4>
              <p className="text-lg mb-6 opacity-90">
                Call me directly for urgent real estate questions or to schedule a showing.
              </p>
              <a
                href="tel:702-222-1964"
                className="btn-phone"
              >
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
