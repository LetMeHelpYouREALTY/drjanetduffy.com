<!--
  PalmsListingCard — Featured listing widget for Palms Place #822
  MLS# 2782527 · $437,777 · Active

  TO REMOVE when listing sells:
    1. Delete this file
    2. Remove import + <PalmsListingCard /> from RealScoutListings.svelte
-->

<script lang="ts">
  const badges = [
    '🏨 STR Permitted',
    '💡 HOA Covers All Utilities',
    '🏢 8th Floor Corner',
    '📐 1,220 SF',
    '🌟 Strip Views',
  ];
</script>

<div class="palms-card">
  <div class="gold-bar"></div>

  <div class="badge-row">
    <span class="featured-badge">✦ Featured Listing</span>
    <span class="agent-name">Dr. Jan Duffy · BHHS Nevada Properties</span>
  </div>

  <div class="price-block">
    <div class="price">$437,777</div>
    <div class="address">4381 W Flamingo Rd #822 · Palms Place</div>
    <div class="mls">Las Vegas, NV 89103 · MLS# 2782527</div>
  </div>

  <div class="badges">
    {#each badges as badge}
      <span class="feature-badge">{badge}</span>
    {/each}
  </div>

  <div class="cta-row">
    <a href="tel:702-222-1964" class="cta-primary">📞 Call/Text 702-222-1964</a>
    <a
      href="https://drjanduffy.com/property/4381-w-flamingo-rd-822-las-vegas-nv-89103"
      target="_blank"
      rel="noopener noreferrer"
      class="cta-link"
    >View Full Details →</a>
  </div>
</div>

<style>
  .palms-card {
    background: linear-gradient(135deg, #0a2440 0%, #0d2d52 100%);
    border: 1px solid #c9a84c;
    border-radius: 12px;
    padding: 28px 32px;
    margin: 32px 0;
    font-family: Inter, system-ui, sans-serif;
    color: #fff;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .gold-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c);
  }

  .badge-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }

  .featured-badge {
    background: #c9a84c;
    color: #0a2440;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 20px;
  }

  .agent-name {
    font-size: 12px;
    color: #c9a84c;
    font-weight: 600;
  }

  .price-block {
    margin-bottom: 16px;
  }

  .price {
    font-size: 32px;
    font-weight: 800;
    color: #f0d080;
    letter-spacing: -0.5px;
    line-height: 1;
    margin-bottom: 6px;
  }

  .address {
    font-size: 16px;
    font-weight: 600;
    color: #e8edf2;
  }

  .mls {
    font-size: 13px;
    color: #94a3b8;
    margin-top: 2px;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
  }

  .feature-badge {
    background: rgba(201, 168, 76, 0.15);
    border: 1px solid rgba(201, 168, 76, 0.4);
    color: #f0d080;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 20px;
    white-space: nowrap;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  .cta-primary {
    background: #c9a84c;
    color: #0a2440;
    font-weight: 700;
    font-size: 14px;
    padding: 10px 22px;
    border-radius: 8px;
    text-decoration: none;
    display: inline-block;
    letter-spacing: 0.02em;
  }

  .cta-primary:hover {
    background: #f0d080;
  }

  .cta-link {
    color: #c9a84c;
    font-weight: 600;
    font-size: 13px;
    text-decoration: underline;
  }

  .cta-link:hover {
    color: #f0d080;
  }
</style>
