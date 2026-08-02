import Link from 'next/link';

const communityLinks = [
  { href: '/communities/summerlin', label: 'Summerlin homes for sale (89135, 89138, 89144)' },
  { href: '/communities/the-ridges', label: 'Luxury estates in The Ridges Summerlin' },
  { href: '/communities/skye-canyon', label: 'Skye Canyon new construction (89166)' },
  { href: '/communities/centennial-hills', label: 'Centennial Hills & RNP lots (89149)' },
  { href: '/communities/lone-mountain', label: 'Lone Mountain equestrian-friendly homes' },
  { href: '/communities/henderson', label: 'Henderson master-planned communities' },
  { href: '/communities/green-valley', label: 'Green Valley homes near The District' },
  { href: '/communities/inspirada', label: 'Inspirada new homes in West Henderson' },
  { href: '/communities/lake-las-vegas', label: 'Lake Las Vegas waterfront living' },
  { href: '/communities/sun-city-summerlin', label: 'Sun City Summerlin 55+ homes (89134)' },
  { href: '/communities/mountains-edge', label: 'Mountain’s Edge in southwest Las Vegas' },
  { href: '/communities/north-las-vegas', label: 'North Las Vegas new construction' },
];

const zipLinks = [
  { href: '/las-vegas-zip-codes/89138', label: '89138 — Summerlin West' },
  { href: '/las-vegas-zip-codes/89135', label: '89135 — Downtown Summerlin & The Ridges' },
  { href: '/las-vegas-zip-codes/89134', label: '89134 — Sun City Summerlin' },
  { href: '/las-vegas-zip-codes/89166', label: '89166 — Skye Canyon & Providence' },
  { href: '/las-vegas-zip-codes/89149', label: '89149 — Centennial & Lone Mountain' },
  { href: '/las-vegas-zip-codes/89052', label: '89052 — Seven Hills & Anthem' },
  { href: '/las-vegas-zip-codes/89044', label: '89044 — Inspirada & Sun City Anthem' },
  { href: '/las-vegas-zip-codes/89011', label: '89011 — Lake Las Vegas & Cadence' },
];

/** Hyperlocal internal-linking block rendered on every migrated page. */
export function ServiceAreasSection() {
  return (
    <section className="mt-12 rounded-2xl bg-gray-50 p-6 md:p-8" aria-label="Las Vegas service areas">
      <h2 className="font-display mb-2 text-2xl font-bold text-gray-900">
        Las Vegas communities Dr. Duffy serves
      </h2>
      <p className="mb-6 max-w-3xl text-gray-600">
        Hyperlocal guidance across the valley — from Summerlin’s villages against Red Rock Canyon
        to Henderson’s hillside master plans and the northwest’s half-acre lots. Explore a
        community or zip-code guide, or call {`(702) 766-7668`} for a same-day answer.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Community guides</h3>
          <ul className="grid grid-cols-1 gap-2">
            {communityLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary-700 no-underline hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Zip-code guides</h3>
          <ul className="grid grid-cols-1 gap-2">
            {zipLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-primary-700 no-underline hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/las-vegas-zip-codes" className="font-semibold text-primary-700 no-underline hover:underline">
                All Las Vegas zip-code guides →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
