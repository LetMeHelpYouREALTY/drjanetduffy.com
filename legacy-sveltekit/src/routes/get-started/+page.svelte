<script lang="ts">
  import { Home, Search, DollarSign, MapPin, BookOpen, HelpCircle, TrendingUp } from 'lucide-svelte';
</script>

<svelte:head>
  <title>Get Started With Las Vegas Real Estate | Dr. Janet Duffy</title>
  <meta
    name="description"
    content="Get started with Las Vegas real estate in minutes. Use advanced home search, instant home value tools, calculators, and step-by-step guides for buyers, sellers, investors, and relocation clients."
  />
  <link rel="canonical" href="https://www.drjanetduffy.com/get-started" />
</svelte:head>

<!-- Hero: Get Started Control Center -->
<section class="hero-section-alt">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto text-center">
      <p class="badge badge-primary inline-flex items-center mb-4">
        <span class="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
        Fast-start for buyers, sellers & investors
      </p>
      <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
        Get Started With Las Vegas Real Estate in 3 Clear Paths
      </h1>
      <p class="text-lg sm:text-xl text-gray-700 mb-6 text-pretty">
        Whether you are buying, selling, relocating, or investing, this page is your
        control center. Choose a path below, then use the built-in tools to search homes,
        estimate value, compare costs, and schedule a strategy call with Dr. Janet Duffy.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#paths" class="btn-primary">
          View your path
        </a>
        <a href="/contact" class="btn-secondary">
          Schedule a consultation
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Quick Overview Cards -->
<section class="section bg-white" id="paths">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
      <a href="#buyers" class="card hover-lift hover-glow group">
        <div class="flex items-center justify-between mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
            <Home class="w-5 h-5 text-primary-600" />
          </div>
          <span class="badge badge-gold text-xs uppercase tracking-wide">Buyers</span>
        </div>
        <h2 class="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">
          I want to buy a home
        </h2>
        <p class="text-sm text-gray-600 mb-3">
          Use the advanced property search, neighborhood guides, and buyer roadmap to move from
          browsing to writing a strong offer.
        </p>
        <p class="text-sm font-medium text-primary-600">
          View buyer tools →
        </p>
      </a>

      <a href="#sellers" class="card hover-lift hover-glow group">
        <div class="flex items-center justify-between mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
            <DollarSign class="w-5 h-5 text-primary-600" />
          </div>
          <span class="badge badge-gold text-xs uppercase tracking-wide">Sellers</span>
        </div>
        <h2 class="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">
          I want to sell or evaluate equity
        </h2>
        <p class="text-sm text-gray-600 mb-3">
          Start with your home value, then use the selling guide, staging resources, and market
          insights to plan for top-dollar results.
        </p>
        <p class="text-sm font-medium text-primary-600">
          View seller tools →
        </p>
      </a>

      <a href="#investors-relocation" class="card hover-lift hover-glow group">
        <div class="flex items-center justify-between mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 group-hover:bg-primary-200 transition-colors">
            <TrendingUp class="w-5 h-5 text-primary-600" />
          </div>
          <span class="badge badge-gold text-xs uppercase tracking-wide">Investors & Relocation</span>
        </div>
        <h2 class="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">
          I am relocating or investing
        </h2>
        <p class="text-sm text-gray-600 mb-3">
          Use relocation checklists, investment guides, and market reports tailored to Las Vegas,
          Summerlin, Skye Canyon, and Henderson.
        </p>
        <p class="text-sm font-medium text-primary-600">
          View investor & relocation tools →
        </p>
      </a>
    </div>
  </div>
</section>

<!-- Buyer Tools -->
<section id="buyers" class="section bg-gray-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto mb-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-3">
        Tools for Las Vegas Home Buyers
      </h2>
      <p class="text-lg text-gray-700">
        Start with search, then layer in guidance. These tools help you compare neighborhoods,
        understand payments, and stay confident from first tour to closing.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="card-luxury hover-lift">
        <div class="flex items-center gap-3 mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
            <Search class="w-5 h-5 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold">
            Advanced Home Search
          </h3>
        </div>
        <p class="text-gray-700 mb-4">
          Explore real-time Las Vegas listings with Dr. Janet Duffy’s advanced search experience.
          Filter by price, neighborhood, beds, baths, and lifestyle features across Summerlin,
          Skye Canyon, Centennial Hills, Henderson, and more.
        </p>
        <ul class="text-sm text-gray-600 space-y-2 mb-4">
          <li>• Save searches and favorite properties between sessions</li>
          <li>• See price changes and new listings as soon as they hit the market</li>
          <li>• Request private tours directly from the search experience</li>
        </ul>
        <a href="/properties" class="btn-primary">
          Launch property search
        </a>
      </div>

      <div class="card-luxury hover-lift">
        <div class="flex items-center gap-3 mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
            <BookOpen class="w-5 h-5 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold">
            Buyer Roadmap & Calculators
          </h3>
        </div>
        <p class="text-gray-700 mb-4">
          Combine education with clear numbers. Use the buyer guide, mortgage calculator,
          and rent-vs-buy analysis to understand what fits your lifestyle and budget.
        </p>
        <div class="grid gap-3 text-sm text-gray-700 mb-4">
          <a href="/buying-guide" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Full Buying Guide:</strong> step-by-step
              roadmap from pre-approval to closing.</span>
          </a>
          <a href="/mortgage-calculator" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Mortgage Calculator:</strong> estimate
              monthly payments and compare scenarios.</span>
          </a>
          <a href="/resources/rent-vs-buy" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Rent vs. Buy Guide:</strong> understand
              when ownership makes financial sense in Las Vegas.</span>
          </a>
        </div>
        <a href="/contact" class="btn-secondary">
          Ask a buyer question
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Seller Tools -->
<section id="sellers" class="section bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto mb-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-3">
        Tools for Las Vegas Home Sellers
      </h2>
      <p class="text-lg text-gray-700">
        Understand your equity, prepare your home, and plan for a smooth exit. These tools
        are designed to help you list with confidence and net strong results.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="card-luxury hover-lift">
        <div class="flex items-center gap-3 mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
            <DollarSign class="w-5 h-5 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold">
            Home Value & Net Proceeds
          </h3>
        </div>
        <p class="text-gray-700 mb-4">
          Start with an expert opinion of value—not just an automated estimate. Then use
          calculators and guides to preview what you could net after commissions, credits,
          and closing costs.
        </p>
        <div class="grid gap-3 text-sm text-gray-700 mb-4">
          <a href="/home-value" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Home Value Request:</strong> personalized
              equity review based on real-time Las Vegas comps.</span>
          </a>
          <a href="/resources/closing-costs-calculator" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Closing Costs Calculator:</strong> estimate
              expenses and net proceeds before you list.</span>
          </a>
        </div>
        <a href="/selling-guide" class="btn-primary">
          Open the selling guide
        </a>
      </div>

      <div class="card-luxury hover-lift">
        <div class="flex items-center gap-3 mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
            <HelpCircle class="w-5 h-5 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold">
            Staging, Preparation & Strategy
          </h3>
        </div>
        <p class="text-gray-700 mb-4">
          Use concierge-style resources to prepare your home for photography, showings,
          and inspections—without guessing which updates matter.
        </p>
        <div class="grid gap-3 text-sm text-gray-700 mb-4">
          <a href="/resources/home-staging" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Home Staging Guide:</strong> practical
              checklists to help your listing stand out online and in person.</span>
          </a>
          <a href="/resources/home-inspection-guide" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Inspection Guide:</strong> prepare for
              buyer inspections and minimize last-minute surprises.</span>
          </a>
          <a href="/market-insights" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Market Insights:</strong> understand
              current demand, pricing trends, and days-on-market.</span>
          </a>
        </div>
        <a href="/contact" class="btn-secondary">
          Book a seller strategy call
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Investors & Relocation Tools -->
<section id="investors-relocation" class="section bg-gray-50">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto mb-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-3">
        Tools for Investors & Relocation Clients
      </h2>
      <p class="text-lg text-gray-700">
        Evaluate returns, understand neighborhoods, and coordinate logistics from any time
        zone. These tools are built for executives, military families, and long-distance
        investors.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div class="card-luxury hover-lift">
        <div class="flex items-center gap-3 mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
            <MapPin class="w-5 h-5 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold">
            Neighborhood & Relocation Toolkit
          </h3>
        </div>
        <p class="text-gray-700 mb-4">
          Compare Summerlin, Skye Canyon, Henderson, North Las Vegas, and other master-planned
          communities with lifestyle and commute in mind—not just square footage.
        </p>
        <div class="grid gap-3 text-sm text-gray-700 mb-4">
          <a href="/neighborhoods" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Neighborhood Guides:</strong> curated
              overviews of schools, amenities, HOAs, and local feel.</span>
          </a>
          <a href="/relocation" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Relocation Services:</strong> concierge
              coordination for executives, medical professionals, and military families.</span>
          </a>
          <a href="/resources/moving-checklist" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Moving Checklist:</strong> stay organized
              from listing your current home to turning on utilities in Las Vegas.</span>
          </a>
        </div>
        <a href="/contact" class="btn-secondary">
          Plan a relocation consult
        </a>
      </div>

      <div class="card-luxury hover-lift">
        <div class="flex items-center gap-3 mb-3">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100">
            <TrendingUp class="w-5 h-5 text-primary-600" />
          </div>
          <h3 class="text-xl font-semibold">
            Investment & Market Intelligence
          </h3>
        </div>
        <p class="text-gray-700 mb-4">
          Pair local knowledge with data. Use investment-focused guides and reports to
          evaluate cash flow, appreciation trends, and neighborhood risk.
        </p>
        <div class="grid gap-3 text-sm text-gray-700 mb-4">
          <a href="/investment-guide" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Investment Guide:</strong> strategies for
              1031 exchanges, rental properties, and portfolio-building.</span>
          </a>
          <a href="/market-insights" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Market Insights:</strong> current inventory,
              days-on-market, and price trends across the valley.</span>
          </a>
          <a href="/resources/market-reports" class="flex items-start gap-2 hover:text-primary-700">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span><strong class="font-semibold">Market Reports:</strong> deep-dive charts
              and stats for serious investors.</span>
          </a>
        </div>
        <a href="/contact" class="btn-primary">
          Discuss an investment strategy
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Final CTA -->
<section class="section bg-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        One Conversation Can Clarify Your Entire Plan
      </h2>
      <p class="text-lg text-gray-700 mb-6">
        Use the tools on this page to explore on your own, then reach out when you are ready
        for custom strategy. Dr. Janet Duffy will help you align timelines, financing, and
        neighborhood choices so every decision feels intentional.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="btn-primary">
          Schedule a 1:1 strategy call
        </a>
        <a href="/testimonials" class="btn-secondary">
          Read client success stories
        </a>
      </div>
    </div>
  </div>
</section>


