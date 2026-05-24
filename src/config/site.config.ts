export const siteConfig = {
  name: 'Dr. Janet Duffy',
  legalName: 'Dr. Janet Duffy Real Estate',
  alternateName: 'Dr. Jan Duffy',
  title: 'Las Vegas Luxury & Relocation REALTOR | Dr. Janet Duffy',
  description:
    'Las Vegas real estate expert serving buyers, sellers, and investors across Summerlin, Henderson, and the valley. Call (702) 766-7668.',
  url: 'https://www.drjanetduffy.com',
  phone: '(702) 766-7668',
  phoneTel: '+17027667668',
  email: 'info@DrJanetDuffy.com',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  brokerageUrl: 'https://www.bhhsnv.com',
  realScoutAgentId: 'QWdlbnQtMjI1MDUw',
  address: {
    street: '1980 Festival Plaza Drive, Suite 300',
    city: 'Las Vegas',
    region: 'NV',
    postalCode: '89135',
    country: 'US',
  },
  hours: 'Mo-Su 08:00-20:00',
  googleAnalyticsId: 'G-CPD9RR8GTX',
  ogImage: '/favicon.png',
} as const;

export type SiteConfig = typeof siteConfig;
