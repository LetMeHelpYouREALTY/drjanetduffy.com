import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Home Value', href: '/home-value' },
  { name: 'Rentals', href: '/rentals' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

const services = [
  { name: 'Luxury Home Sales', href: '/properties' },
  { name: 'Buyer Representation', href: '/about' },
  { name: 'Home Valuation', href: '/home-value' },
  { name: 'Relocation Services', href: '/contact' }
];

const neighborhoods = [
  { name: 'Summerlin West 89138', href: '/properties?zip=89138' },
  { name: 'The Ridges 89135', href: '/properties?zip=89135' },
  { name: 'Red Rock 89144', href: '/properties?zip=89144' },
  { name: 'Summerlin Centre', href: '/properties' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with NAP */}
          <div className="lg:col-span-1" itemScope itemType="https://schema.org/RealEstateAgent">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">JD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold" itemProp="name">Dr. Janet Duffy</h3>
                <p className="text-sm text-gray-400">REALTOR<sup>®</sup></p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              West Summerlin's trusted luxury real estate expert with 15+ years of experience serving <span itemProp="areaServed">89138, 89144, and 89135</span>.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Phone:</span>{' '}
                <a href="tel:+17022221964" className="hover:text-primary-400" itemProp="telephone">702-222-1964</a>
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:drduffy@bhhsnv.com" className="hover:text-primary-400" itemProp="email">drduffy@bhhsnv.com</a>
              </p>
              <p className="text-sm text-gray-300" itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <span className="font-semibold">Brokerage:</span>{' '}
                <span itemProp="name">Berkshire Hathaway Nevada Properties</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Neighborhoods */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h5 className="text-md font-semibold mb-3">Neighborhoods Served</h5>
              <div className="space-y-1">
                {neighborhoods.map((neighborhood) => (
                  <Link
                    key={neighborhood.href}
                    href={neighborhood.href}
                    className="block text-sm text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {neighborhood.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div itemScope itemType="https://schema.org/OpeningHoursSpecification">
                <h5 className="font-semibold text-primary-400 mb-2">Office Hours</h5>
                <p className="text-sm text-gray-300">
                  <span itemProp="dayOfWeek" content="Monday Tuesday Wednesday Thursday Friday">Monday - Friday</span>:{' '}
                  <time itemProp="opens" content="09:00">9:00 AM</time> -{' '}
                  <time itemProp="closes" content="18:00">6:00 PM</time>
                </p>
                <p className="text-sm text-gray-300">
                  <span itemProp="dayOfWeek" content="Saturday">Saturday</span>:{' '}
                  <time itemProp="opens" content="10:00">10:00 AM</time> -{' '}
                  <time itemProp="closes" content="16:00">4:00 PM</time>
                </p>
                <p className="text-sm text-gray-300">Sunday: By Appointment</p>
              </div>

              <div>
                <Link href="/contact" className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Contact Me Today
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Dr. Janet Duffy - Berkshire Hathaway Nevada Properties. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-primary-400 transition-colors">Sitemap</Link>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500">
            <p>Serving West Summerlin: 89138, 89144, 89135 | Las Vegas, Nevada Real Estate</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
