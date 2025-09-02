import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Buy Homes', href: '/buy' },
    { name: 'Sell Homes', href: '/sell' },
    { name: 'AI Tools', href: '/ai-tools' },
    { name: 'About Dr. Jan', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Home Buying', href: '/buy' },
    { name: 'Home Selling', href: '/sell' },
    { name: 'Market Analysis', href: '/market-analysis' },
    { name: 'Property Valuation', href: '/valuation' },
    { name: 'Investment Properties', href: '/investment' },
  ];

  const neighborhoods = [
    { name: 'Summerlin', href: '/neighborhoods/summerlin' },
    { name: 'Henderson', href: '/neighborhoods/henderson' },
    { name: 'Green Valley', href: '/neighborhoods/green-valley' },
    { name: 'Anthem', href: '/neighborhoods/anthem' },
    { name: 'Southern Highlands', href: '/neighborhoods/southern-highlands' },
  ];

  return (
    <footer className="bg-vegas-deep-blue text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-vegas-gold rounded-full flex items-center justify-center">
                  <span className="text-vegas-deep-blue font-bold text-lg">JD</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dr. Jan Duffy</h3>
                  <p className="text-vegas-gold text-sm">Las Vegas Real Estate Expert 🎰</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Be the expert neighbor who knows every sale and genuinely helps. 20+ years of Las
                Vegas real estate expertise.
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                <a
                  href="tel:702-222-1964"
                  className="flex items-center space-x-2 text-vegas-gold hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>702-222-1964</span>
                </a>
                <a
                  href="mailto:jan@drjanetduffy.com"
                  className="flex items-center space-x-2 text-vegas-gold hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>jan@drjanetduffy.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span>Las Vegas, NV</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-vegas-gold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-vegas-gold transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-vegas-gold">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-vegas-gold transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Neighborhoods */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-vegas-gold">Popular Areas</h4>
              <ul className="space-y-2">
                {neighborhoods.map((neighborhood) => (
                  <li key={neighborhood.name}>
                    <Link
                      href={neighborhood.href}
                      className="text-gray-300 hover:text-vegas-gold transition-colors duration-200"
                    >
                      {neighborhood.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Dr. Jan Duffy Real Estate. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/drjanetduffy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-vegas-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/drjanetduffy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-vegas-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/drjanetduffy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-vegas-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
