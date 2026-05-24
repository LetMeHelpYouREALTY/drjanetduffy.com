import { RealScoutListings } from '@/components/realscout/RealScoutListings';

/** Site-wide listing bands (ported from legacy +layout.svelte). */
export function GlobalListingsSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          <RealScoutListings
            priceMin="500000"
            priceMax="600000"
            title="Homes $500K - $600K"
            subtitle="Discover beautiful single-family homes in this price range"
          />
          <RealScoutListings
            priceMin="600000"
            priceMax="800000"
            title="Homes $600K - $800K"
            subtitle="Explore premium properties in this mid-range price point"
          />
          <RealScoutListings
            priceMin="800000"
            priceMax="1000000"
            title="Homes $800K - $1M"
            subtitle="Luxury homes and estates in this upper price range"
          />
          <RealScoutListings
            priceMin="1000000"
            title="Luxury Homes $1M+"
            subtitle="Premium estates and luxury properties"
          />
        </div>
      </div>
    </section>
  );
}
