import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Hero from '@/components/Hero';
import MarketInsights from '@/components/MarketInsights';
import RealScoutListings from '@/components/RealScoutListings';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="listings" className="section-padding bg-white">
        <RealScoutListings />
      </section>
      <AboutSection />
      <MarketInsights />
      <ContactSection />
    </>
  );
}
