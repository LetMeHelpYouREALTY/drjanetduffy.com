'use client';

import { useEffect, useState } from 'react';

export default function PropertiesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Las Vegas Properties for Sale</h1>
      <p className="text-xl mb-6">Browse luxury homes in West Summerlin</p>

      {mounted && (
        <div dangerouslySetInnerHTML={{
          __html: '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="STATUS_AND_SIGNIFICANT_CHANGE" listing-status="For Sale" property-types="SFR,MF,TC"></realscout-office-listings>'
        }} />
      )}
    </div>
  );
}
