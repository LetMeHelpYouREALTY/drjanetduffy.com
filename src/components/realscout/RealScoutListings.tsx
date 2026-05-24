type RealScoutListingsProps = {
  priceMin?: string;
  priceMax?: string;
  title?: string;
  subtitle?: string;
};

/** RealScout office listings — custom element via dangerouslySetInnerHTML (no React state). */
export function RealScoutListings({
  priceMin = '500000',
  priceMax,
  title,
  subtitle,
}: RealScoutListingsProps) {
  const attrs = [
    `agent-encoded-id="QWdlbnQtMjI1MDUw"`,
    `sort-order="NEWEST"`,
    `listing-status="For Sale"`,
    `property-types=",SFR"`,
    `price-min="${priceMin}"`,
  ];
  if (priceMax) {
    attrs.push(`price-max="${priceMax}"`);
  }

  const widgetHtml = `<realscout-office-listings ${attrs.join(' ')}></realscout-office-listings>`;

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-8 text-center">
          {title && (
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{subtitle}</p>
          )}
        </div>
      )}
      <div className="realscout-wrapper" dangerouslySetInnerHTML={{ __html: widgetHtml }} />
    </div>
  );
}
