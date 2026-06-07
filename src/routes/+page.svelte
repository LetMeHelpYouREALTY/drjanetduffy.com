<script>
import { onMount } from 'svelte';
import { browser } from '$app/environment';

let mounted = false;

onMount(() => {
  mounted = true;
});

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
</script>

<svelte:head>
  <title>Dr. Janet Duffy, REALTOR® | West Summerlin Luxury Real Estate Expert | Las Vegas, NV</title>
  <meta name="description" content="Dr. Janet Duffy - West Summerlin's trusted REALTOR® specializing in luxury homes in 89138, 89144, 89135. Berkshire Hathaway Nevada Properties. 15+ years serving executives and California relocations. Call 702-222-1964." />
  <meta name="keywords" content="Dr. Janet Duffy REALTOR, West Summerlin real estate, Las Vegas luxury homes, 89138 homes for sale, 89144 properties, 89135 real estate, Berkshire Hathaway Nevada, Summerlin realtor, luxury real estate agent Las Vegas" />
  <meta name="geo.region" content="US-NV" />
  <meta name="geo.placename" content="Las Vegas" />
  <meta name="geo.position" content="36.1699;-115.1398" />
  <meta name="ICBM" content="36.1699, -115.1398" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drjanduffy.com/" />
  <meta property="og:title" content="Dr. Janet Duffy, REALTOR® | West Summerlin Luxury Real Estate" />
  <meta property="og:description" content="West Summerlin's trusted luxury real estate expert. 15+ years experience, $50M+ in sales. Specializing in 89138, 89144, 89135." />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://drjanduffy.com/" />
  <meta property="twitter:title" content="Dr. Janet Duffy, REALTOR® | West Summerlin Luxury Real Estate" />
  <meta property="twitter:description" content="West Summerlin's trusted luxury real estate expert. 15+ years experience, $50M+ in sales." />

  <!-- Canonical -->
  <link rel="canonical" href="https://drjanduffy.com/" />

  <!-- Schema.org structured data for RealEstateAgent -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Janet Duffy",
    "image": "https://drjanduffy.com/favicon.png",
    "url": "https://drjanduffy.com",
    "telephone": "+1-702-222-1964",
    "email": "drduffy@bhhsnv.com",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Berkshire Hathaway Nevada Properties",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1699",
      "longitude": "-115.1398"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Las Vegas",
        "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas"
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "89138"
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "89144"
      },
      {
        "@type": "PostalCodeArea",
        "postalCode": "89135"
      }
    ],
    "knowsAbout": [
      "Luxury Real Estate",
      "Residential Real Estate",
      "Investment Properties",
      "Executive Relocation",
      "First-Time Home Buyers",
      "Summerlin Real Estate"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "Berkshire Hathaway Nevada Properties"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Certified Residential Specialist (CRS)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Accredited Buyer's Representative (ABR)"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "87",
      "bestRating": "5"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  }
  </script>

  <!-- FAQ Schema for AEO -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is the Las Vegas real estate market in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Las Vegas market in 2026 shows strong fundamentals with median home prices at $485K, averaging 28 days on market. West Summerlin continues to lead in luxury property appreciation with properties in 89138, 89144, and 89135 zip codes showing 8.5% year-over-year growth."
        }
      },
      {
        "@type": "Question",
        "name": "What areas does Dr. Janet Duffy specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dr. Janet Duffy specializes in West Summerlin luxury real estate, including zip codes 89138, 89144, and 89135. She focuses on luxury communities like The Ridges, Red Rock Country Club, and Summerlin West, serving executives and families relocating from California."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get my home's current market value in Las Vegas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can get an instant home value estimate using the free home value calculator at drjanduffy.com/home-value. For a comprehensive Comparative Market Analysis (CMA) tailored to your specific property and current Las Vegas market conditions, contact Dr. Janet Duffy at 702-222-1964."
        }
      },
      {
        "@type": "Question",
        "name": "Does Dr. Janet Duffy work with first-time homebuyers in Las Vegas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dr. Janet Duffy works extensively with first-time homebuyers in the Las Vegas area. She guides buyers through the entire process from financing pre-approval to closing, making complex real estate transactions simple and stress-free."
        }
      }
    ]
  }
  </script>

  <!-- LocalBusiness Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dr. Janet Duffy - Berkshire Hathaway Nevada Properties",
    "image": "https://drjanduffy.com/favicon.png",
    "@id": "https://drjanduffy.com",
    "url": "https://drjanduffy.com",
    "telephone": "+1-702-222-1964",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Berkshire Hathaway Nevada Properties",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1699,
      "longitude": -115.1398
    },
    "sameAs": [
      "https://drjanduffy.com"
    ]
  }
  </script>
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-bold mb-6">West Summerlin's Luxury Real Estate Expert</h1>
      <p class="text-2xl mb-4 font-semibold">Dr. Janet Duffy, REALTOR<sup>®</sup></p>
      <p class="text-xl mb-8 text-primary-100">
        Berkshire Hathaway Nevada Properties | 15+ Years Experience | $50M+ in Sales
      </p>
      <p class="text-lg mb-8 max-w-3xl mx-auto">
        Specializing in luxury homes across West Summerlin (89138, 89144, 89135). Trusted by executives and families relocating from California to Las Vegas.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/properties" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
          Search Luxury Homes
        </a>
        <a href="tel:+17022221964" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors">
          Call 702-222-1964
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Quick Search -->
<section class="bg-gray-50 py-12">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Find Your Dream Home in Las Vegas</h2>
      {#if mounted && browser}
        <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
      {:else}
        <div class="animate-pulse">
          <div class="h-14 bg-gray-200 rounded"></div>
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- Neighborhood Expertise -->
<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4 text-gray-800">West Summerlin Neighborhood Expertise</h2>
      <p class="text-xl text-gray-600">Specializing in Las Vegas's most prestigious communities</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {#each neighborhoods as neighborhood}
        <article class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 class="text-2xl font-bold mb-2 text-gray-800">{neighborhood.name}</h3>
          <p class="text-primary-600 font-semibold mb-3">Zip Code: {neighborhood.zip}</p>
          <p class="text-gray-600 mb-4">{neighborhood.description}</p>
          <a href="/properties" class="text-primary-600 hover:text-primary-700 font-semibold">
            View Homes in {neighborhood.zip} →
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- Market Stats -->
<section class="bg-primary-600 text-white py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12">Las Vegas Market at a Glance (2026)</h2>
    <div class="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
      <div>
        <div class="text-4xl font-bold mb-2">$485K</div>
        <div class="text-primary-100">Median Home Price</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">28</div>
        <div class="text-primary-100">Days on Market</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">+8.5%</div>
        <div class="text-primary-100">Year-Over-Year Growth</div>
      </div>
      <div>
        <div class="text-4xl font-bold mb-2">15+</div>
        <div class="text-primary-100">Years Experience</div>
      </div>
    </div>
  </div>
</section>

<!-- Services -->
<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4 text-gray-800">Comprehensive Real Estate Services</h2>
      <p class="text-xl text-gray-600">Everything you need for a successful transaction</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Luxury Home Sales</h3>
        <p class="text-gray-600 mb-4">
          Expert representation for high-end properties in Summerlin, The Ridges, and Red Rock Country Club. Maximum value, minimum stress.
        </p>
        <ul class="space-y-2 text-gray-600">
          <li>• Professional staging consultation</li>
          <li>• Premium marketing materials</li>
          <li>• Targeted buyer outreach</li>
          <li>• Expert negotiation</li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Buyer Representation</h3>
        <p class="text-gray-600 mb-4">
          From first-time buyers to seasoned investors, I'll help you find the perfect Las Vegas property and negotiate the best terms.
        </p>
        <ul class="space-y-2 text-gray-600">
          <li>• Exclusive off-market listings</li>
          <li>• Neighborhood tours</li>
          <li>• Market analysis</li>
          <li>• Full transaction support</li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Relocation Services</h3>
        <p class="text-gray-600 mb-4">
          Moving to Las Vegas from California? I specialize in executive relocations and make your transition seamless.
        </p>
        <ul class="space-y-2 text-gray-600">
          <li>• Area orientation tours</li>
          <li>• School district guidance</li>
          <li>• Temporary housing assistance</li>
          <li>• Community introductions</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section for AEO -->
<section class="bg-gray-50 py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Frequently Asked Questions</h2>
      <div class="space-y-6">
        {#each faqs as faq}
          <article class="bg-white rounded-lg shadow p-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <h3 class="text-xl font-bold mb-3 text-gray-800" itemprop="name">{faq.question}</h3>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p class="text-gray-600" itemprop="text">{faq.answer}</p>
            </div>
          </article>
        {/each}
      </div>

      <div class="text-center mt-8">
        <a href="/contact" class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
          Have More Questions? Contact Me
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials -->
<section class="py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">What My Clients Say</h2>
    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <article class="bg-white rounded-lg shadow-lg p-6" itemscope itemtype="https://schema.org/Review">
        <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating" class="mb-3">
          <meta itemprop="ratingValue" content="5" />
          <meta itemprop="bestRating" content="5" />
          <div class="text-yellow-400 text-xl">★★★★★</div>
        </div>
        <p class="text-gray-600 mb-4" itemprop="reviewBody">
          "Dr. Duffy made our relocation from California seamless. Her knowledge of West Summerlin helped us find the perfect home in 89138. Highly recommend!"
        </p>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <div class="font-semibold text-gray-800" itemprop="name">Michael & Jennifer Peterson</div>
        </div>
        <div class="text-sm text-gray-500">California to Summerlin Relocation</div>
      </article>

      <article class="bg-white rounded-lg shadow-lg p-6" itemscope itemtype="https://schema.org/Review">
        <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating" class="mb-3">
          <meta itemprop="ratingValue" content="5" />
          <meta itemprop="bestRating" content="5" />
          <div class="text-yellow-400 text-xl">★★★★★</div>
        </div>
        <p class="text-gray-600 mb-4" itemprop="reviewBody">
          "Sold our luxury home in The Ridges for 12% above asking. Jan's marketing strategy and negotiation skills are unmatched in Las Vegas."
        </p>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <div class="font-semibold text-gray-800" itemprop="name">Robert Chen</div>
        </div>
        <div class="text-sm text-gray-500">Luxury Home Seller, 89135</div>
      </article>

      <article class="bg-white rounded-lg shadow-lg p-6" itemscope itemtype="https://schema.org/Review">
        <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating" class="mb-3">
          <meta itemprop="ratingValue" content="5" />
          <meta itemprop="bestRating" content="5" />
          <div class="text-yellow-400 text-xl">★★★★★</div>
        </div>
        <p class="text-gray-600 mb-4" itemprop="reviewBody">
          "As first-time buyers, we were nervous. Dr. Duffy guided us through every step and found us an amazing home in Red Rock Country Club within our budget."
        </p>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <div class="font-semibold text-gray-800" itemprop="name">Sarah & David Martinez</div>
        </div>
        <div class="text-sm text-gray-500">First-Time Buyers, 89144</div>
      </article>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-primary-600 text-white py-16">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Make Your Move in Las Vegas?</h2>
      <p class="text-xl mb-8 text-primary-100">
        Whether you're buying, selling, or relocating to West Summerlin, I'm here to help you achieve your real estate goals.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/home-value" class="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Free Home Valuation
        </a>
        <a href="/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
          Schedule Consultation
        </a>
      </div>
    </div>
  </div>
</section>
