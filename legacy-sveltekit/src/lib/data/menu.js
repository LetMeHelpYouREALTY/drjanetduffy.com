// Comprehensive menu structure for Dr. Jan Duffy Real Estate website

export const menuStructure = {
  main: [
    {
      name: 'Home',
      href: '/',
      description: 'Welcome to Dr. Jan Duffy Real Estate',
      icon: '🏠'
    },
    {
      name: 'Properties',
      href: '/properties',
      description: 'Browse all properties',
      icon: '🏘️',
      hasDropdown: true
    },
    {
      name: 'Home Value',
      href: '/home-value',
      description: 'Get your home valuation',
      icon: '💰'
    },
    {
      name: 'Rentals',
      href: '/rentals',
      description: 'Find rental properties',
      icon: '🔑'
    },
    {
      name: 'About',
      href: '/about',
      description: 'Learn about Dr. Jan Duffy',
      icon: '👩‍💼'
    },
    {
      name: 'Contact',
      href: '/contact',
      description: 'Get in touch with us',
      icon: '📞'
    }
  ],
  
  properties: {
    title: 'Property Search',
    description: 'Find your perfect home',
    sections: [
      {
        title: 'Browse Properties',
        items: [
          {
            name: 'All Properties',
            href: '/properties',
            description: 'View all available properties',
            icon: '🏘️'
          },
          {
            name: 'Grid View',
            href: '/listings-embedded',
            description: 'Properties in grid layout',
            icon: '⊞'
          },
          {
            name: 'List View',
            href: '/listings-list',
            description: 'Properties in list format',
            icon: '☰'
          },
          {
            name: 'Past Sales',
            href: '/past-sales',
            description: 'Recently sold properties',
            icon: '📈'
          }
        ]
      },
      {
        title: 'Property Types',
        items: [
          {
            name: 'Single Family',
            href: '/properties?type=single-family',
            description: 'Detached homes',
            icon: '🏡'
          },
          {
            name: 'Condos',
            href: '/properties?type=condo',
            description: 'Condominiums',
            icon: '🏢'
          },
          {
            name: 'Townhomes',
            href: '/properties?type=townhome',
            description: 'Attached homes',
            icon: '🏘️'
          },
          {
            name: 'Luxury Homes',
            href: '/properties?type=luxury',
            description: 'High-end properties',
            icon: '🏰'
          }
        ]
      }
    ]
  },
  
  quickLinks: [
    {
      name: 'Market Analysis',
      href: '/home-value',
      description: 'Get your home valued',
      icon: '📊',
      category: 'Tools'
    },
    {
      name: 'Investment Properties',
      href: '/properties?type=investment',
      description: 'Real estate investments',
      icon: '🏢',
      category: 'Properties'
    },
    {
      name: 'First Time Buyers',
      href: '/first-time-buyers',
      description: 'Buying your first home',
      icon: '🔑',
      category: 'Services'
    },
    {
      name: 'Relocation Services',
      href: '/relocation',
      description: 'Moving to Las Vegas',
      icon: '✈️',
      category: 'Services'
    },
    {
      name: 'Market Reports',
      href: '/resources/market-reports',
      description: 'Las Vegas market data',
      icon: '📈',
      category: 'Resources'
    },
    {
      name: 'Testimonials',
      href: '/testimonials',
      description: 'Client success stories',
      icon: '⭐',
      category: 'About'
    }
  ],
  
  neighborhoods: [
    {
      name: 'Summerlin',
      href: '/communities/summerlin',
      description: 'Premier master-planned community with luxury homes and world-class amenities',
      icon: '🌴'
    },
    {
      name: 'Skye Canyon',
      href: '/communities/skye-canyon',
      description: 'Las Vegas\'s newest master-planned community with modern amenities',
      icon: '🏔️'
    },
    {
      name: 'Centennial Hills',
      href: '/communities/centennial-hills',
      description: 'Newer master-planned communities with excellent schools and value',
      icon: '⛰️'
    },
    {
      name: 'North Las Vegas',
      href: '/communities/north-las-vegas',
      description: 'Affordable options with larger lots and no-HOA neighborhoods',
      icon: '🏘️'
    },
    {
      name: 'Henderson',
      href: '/communities/henderson',
      description: 'Master-planned area with parks and trails',
      icon: '🏞️'
    },
    {
      name: 'Green Valley',
      href: '/communities/green-valley',
      description: 'Established neighborhood with mature trees and strong community',
      icon: '🌳'
    },
    {
      name: 'Anthem',
      href: '/communities/anthem',
      description: 'Premier Henderson golf community with luxury homes',
      icon: '🏰'
    },
    {
      name: 'Spring Valley',
      href: '/properties?neighborhood=spring-valley',
      description: 'Convenient location with easy access to Strip and amenities',
      icon: '🌸'
    }
  ],
  
  services: [
    {
      name: 'Home Buying',
      href: '/buying-guide',
      description: 'Expert guidance for buyers',
      icon: '🏠'
    },
    {
      name: 'Home Selling',
      href: '/selling-guide',
      description: 'Maximize your home value',
      icon: '💼'
    },
    {
      name: 'Market Analysis',
      href: '/home-value',
      description: 'Professional home valuation',
      icon: '📊'
    },
    {
      name: 'Investment Consulting',
      href: '/investment-guide',
      description: 'Real estate investment advice',
      icon: '📈'
    }
  ],
  
  contact: [
    {
      name: 'Call Now',
      href: 'tel:+17027667668',
      description: '(702) 766-7668',
      icon: '📞',
      isPrimary: true
    },
    {
      name: 'Email',
      href: 'mailto:info@DrJanetDuffy.com',
      description: 'info@DrJanetDuffy.com',
      icon: '✉️'
    },
    {
      name: 'Schedule Consultation',
      href: '/contact',
      description: 'Free consultation',
      icon: '📅'
    }
  ]
};

// Search suggestions for the search functionality
export const searchSuggestions = [
  'Summerlin homes',
  'Henderson condos',
  '3 bedroom house',
  'Pool home',
  'Investment property',
  'Luxury home',
  'First time buyer',
  'Market analysis',
  'Home value',
  'Rental property'
];

// Price ranges for property search
export const priceRanges = [
  { label: 'Under $300K', value: '0-300000' },
  { label: '$300K - $500K', value: '300000-500000' },
  { label: '$500K - $750K', value: '500000-750000' },
  { label: '$750K - $1M', value: '750000-1000000' },
  { label: 'Over $1M', value: '1000000-999999999' }
];

// Property features for search
export const propertyFeatures = [
  'Pool',
  'Garage',
  'Fireplace',
  'Updated Kitchen',
  'Hardwood Floors',
  'Granite Countertops',
  'Stainless Appliances',
  'Walk-in Closet',
  'Master Suite',
  'Open Floor Plan'
];
