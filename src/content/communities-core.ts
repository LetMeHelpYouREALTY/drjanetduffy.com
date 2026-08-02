import type { GeoArea } from './geo-types';

/** Hyperlocal enrichment for the original 11 community pages. */
export const coreCommunitites: GeoArea[] = [
  {
    path: 'communities/summerlin',
    name: 'Summerlin',
    heading: 'Summerlin Real Estate — Las Vegas Master-Planned Living',
    title: 'Summerlin Homes for Sale | 89135, 89138, 89144 REALTOR® | Dr. Janet Duffy',
    description:
      'Summerlin real estate with Dr. Janet Duffy, REALTOR®. Homes in The Ridges, Red Rock Country Club, Stonebridge, The Paseos, and Sun City Summerlin. Zip codes 89134, 89135, 89138, 89144, 89145. Call (702) 766-7668.',
    lead: 'Summerlin is a 22,500-acre master-planned community on the western rim of the Las Vegas valley, bordered by the Red Rock Canyon National Conservation Area. Dr. Janet Duffy represents buyers and sellers across its villages — from Downtown Summerlin high-rise condos to custom estates in The Ridges.',
    hero: {
      src: '/images/communities/summerlin.jpg',
      alt: 'Desert-modern homes in Summerlin, Las Vegas with the Red Rock Canyon escarpment in the background',
    },
    mapQuery: 'Downtown Summerlin, Las Vegas, NV',
    zips: ['89134', '89135', '89138', '89144', '89145'],
    facts: [
      { label: 'Zip codes', value: '89134, 89135, 89138, 89144, 89145' },
      { label: 'Land area', value: '22,500-acre master plan by Howard Hughes Holdings' },
      { label: 'Trails', value: '150+ miles of connected walking and cycling trails' },
      { label: 'Golf', value: 'TPC Summerlin, Bear’s Best, Red Rock Country Club, and more' },
      { label: 'Retail hub', value: 'Downtown Summerlin — 125+ stores, Las Vegas Ballpark, City National Arena' },
      { label: 'Airport drive', value: 'About 25–35 minutes to Harry Reid International via the 215 Beltway' },
    ],
    sections: [
      {
        title: 'Summerlin villages at a glance',
        paragraphs: [
          'Summerlin is organized into villages, each with its own parks, schools, and architectural character. West of the 215 Beltway, newer villages such as Stonebridge, Redpoint, and Reverence (zip 89138) feature current-generation floor plans with two-story great rooms and multi-generational suites. Closer to Town Center, The Trails and The Willows (89144) offer mature landscaping and quick access to Summerlin Hospital Medical Center.',
          'South of Charleston Boulevard, zip 89135 holds Downtown Summerlin, Red Rock Casino Resort, and guard-gated luxury enclaves including The Ridges and Red Rock Country Club. Sun City Summerlin (89134) remains one of the country’s best-known Del Webb 55+ communities, with three golf courses and four recreation centers.',
        ],
      },
      {
        title: 'Parks, trails, and daily life',
        paragraphs: [
          'The community’s trail system links neighborhood parks like Fox Hill Park in The Vistas and The Paseos Park to village cores, so many residents bike or walk to Downtown Summerlin for Aviators games at Las Vegas Ballpark or Golden Knights practices at City National Arena. Red Rock Canyon’s 13-mile scenic loop starts roughly 15 minutes from most west-side villages.',
          'Zoned campuses include Palo Verde High School and West Career & Technical Academy, along with private options such as The Meadows School and Bishop Gorman High School nearby. Always confirm current attendance zoning directly with the Clark County School District before writing an offer.',
        ],
      },
      {
        title: 'Housing stock and architecture',
        paragraphs: [
          'Inventory spans production single-family homes, courtyard townhomes, high-rise and mid-rise condos near Downtown Summerlin, and custom homesites with Red Rock or Strip views. Lot sizes range from low-maintenance cluster products to half-acre-plus custom parcels in The Ridges. Most villages carry a Summerlin master association fee plus sub-association dues — Dr. Duffy reviews both, along with SID/LID assessments, on every Summerlin transaction.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Summerlin with Dr. Janet Duffy',
        paragraphs: [
          'Village selection drives everything in Summerlin — commute pattern, trail access, school zoning, and resale trajectory. Dr. Duffy tours buyers village by village, pulls same-day MLS data for each micro-market, and coordinates new-construction visits at Stonebridge, Redpoint, and Kestrel so builder incentives are compared against resale value on equal footing.',
        ],
      },
      {
        title: 'Selling a Summerlin home',
        paragraphs: [
          'Summerlin buyers shop by village and amenity set, so listings are positioned against hyper-local comparables — not valley-wide averages. Expect a room-by-room prep plan, professional photography that captures Red Rock backdrops, and syndication to relocation networks through Berkshire Hathaway HomeServices Nevada Properties.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which Summerlin zip codes should I search?',
        a: 'Summerlin spans 89134, 89135, 89138, 89144, and 89145, with parts of 89117 and 89128 along its eastern edge. West-side new construction concentrates in 89138; Downtown Summerlin and The Ridges sit in 89135.',
      },
      {
        q: 'Does Summerlin have age-qualified communities?',
        a: 'Yes. Sun City Summerlin (89134) is a Del Webb 55+ community with roughly 7,800 homes, three golf courses, and four recreation centers. Newer age-qualified options exist nearby in the northwest valley — ask Dr. Duffy for a current list.',
      },
      {
        q: 'What HOA fees apply in Summerlin?',
        a: 'Most homes pay a Summerlin master association fee plus a village or sub-association fee; guard-gated enclaves add more. Dr. Duffy provides the full fee stack and resale-package review before you commit.',
      },
      {
        q: 'How far is Summerlin from the Strip and the airport?',
        a: 'Downtown Summerlin to the Strip runs about 20–25 minutes via Charleston or the 215/I-15; Harry Reid International Airport is typically 25–35 minutes depending on the village.',
      },
    ],
    nearby: [
      { href: '/communities/the-ridges', label: 'Luxury estates in The Ridges Summerlin' },
      { href: '/communities/sun-city-summerlin', label: 'Sun City Summerlin 55+ homes (89134)' },
      { href: '/las-vegas-zip-codes/89138', label: 'Homes for sale in zip code 89138' },
      { href: '/communities/lone-mountain', label: 'Lone Mountain homes minutes north of Summerlin' },
    ],
  },
  {
    path: 'communities/skye-canyon',
    name: 'Skye Canyon',
    heading: 'Skye Canyon Real Estate — Northwest Las Vegas 89166',
    title: 'Skye Canyon Homes for Sale | 89166 REALTOR® | Dr. Janet Duffy',
    description:
      'Skye Canyon real estate in northwest Las Vegas (89166) with Dr. Janet Duffy, REALTOR®. New construction and resale homes near Skye Canyon Park, US-95, and the Mount Charleston corridor. Call (702) 766-7668.',
    lead: 'Skye Canyon is a 1,700-acre master-planned community at US-95 and Skye Canyon Park Drive in northwest Las Vegas, built around an active-outdoor identity: a 15-acre central park, community fitness center, and the shortest drive of any Las Vegas master plan to Mount Charleston and Lee Canyon.',
    hero: {
      src: '/images/communities/skye-canyon.jpg',
      alt: 'New two-story homes in Skye Canyon, northwest Las Vegas, with the Spring Mountains on the horizon',
    },
    mapQuery: 'Skye Canyon Park, Las Vegas, NV 89166',
    zips: ['89166'],
    facts: [
      { label: 'Zip code', value: '89166' },
      { label: 'Land area', value: '1,700-acre master plan in the northwest valley' },
      { label: 'Signature amenity', value: 'Skye Canyon Park + Skye Fitness community center' },
      { label: 'Mountain access', value: 'About 35–45 minutes to Lee Canyon ski area via US-95 and SR-156' },
      { label: 'Builders', value: 'Toll Brothers, Century Communities, Woodside Homes, and others' },
      { label: 'Elevation', value: 'Higher valley elevation — typically a few degrees cooler in summer' },
    ],
    sections: [
      {
        title: 'Why buyers choose Skye Canyon',
        paragraphs: [
          'Skye Canyon was planned around outdoor living: the central Skye Canyon Park hosts a splash pad, sports fields, and year-round community events, while Skye Fitness anchors the resident amenity core. Trails and pocket parks thread through each neighborhood, and the community sits at one of the valley’s higher elevations along the US-95 corridor.',
          'The location is the fastest of any Las Vegas master plan to the Spring Mountains — Mount Charleston trailheads and Lee Canyon’s winter runs are reachable without crossing town. Commuters use US-95 south toward the 215 Beltway, with Centennial Center’s big-box retail about 10 minutes away.',
        ],
      },
      {
        title: 'New construction and resale mix',
        paragraphs: [
          'Skye Canyon still has active builder programs alongside a growing resale market, which gives buyers real leverage: builder incentives can be weighed against slightly older resales that already include landscaping, window treatments, and solar. Dr. Duffy tracks each builder’s current releases, lot premiums, and design-center pricing so you can compare total cost of ownership rather than base price.',
          'Zoned schools include newer northwest campuses; confirm current attendance boundaries with the Clark County School District, since fast-growing areas re-zone as new schools open.',
        ],
      },
    ],
    services: [
      {
        title: 'Buyer representation in Skye Canyon',
        paragraphs: [
          'On new construction, the builder’s sales office represents the builder — not you. Dr. Duffy attends your first visit, negotiates incentives and closing-cost credits, reviews the purchase agreement’s escalation and completion clauses, and coordinates independent inspections at pre-drywall and final walk-through. Her representation costs Skye Canyon buyers nothing; builders compensate the buyer’s agent.',
        ],
      },
      {
        title: 'Selling in Skye Canyon',
        paragraphs: [
          'Resale sellers here compete with builder marketing budgets. The answer is positioning: completed landscaping, owned solar, upgraded flooring, and immediate occupancy are quantified and marketed against the true all-in price of a comparable new build. See the dedicated Skye Canyon buyer’s guide for the flip side of that analysis.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What zip code is Skye Canyon?',
        a: 'Skye Canyon is in zip code 89166, at US-95 and Skye Canyon Park Drive in northwest Las Vegas.',
      },
      {
        q: 'Is there an HOA in Skye Canyon?',
        a: 'Yes — a master association covers parks, Skye Fitness access, and common-area maintenance, and some neighborhoods add sub-association fees. Dr. Duffy provides the current fee schedule for any home you consider.',
      },
      {
        q: 'How long is the commute from Skye Canyon to the Strip?',
        a: 'Plan on roughly 30–40 minutes to the Strip or Downtown via US-95, depending on time of day. The 215 Beltway connector puts Summerlin about 20 minutes away.',
      },
    ],
    nearby: [
      { href: '/communities/skye-canyon/buyers-guide', label: 'Skye Canyon new-construction buyer’s guide' },
      { href: '/communities/providence', label: 'Providence master-planned homes (89166)' },
      { href: '/communities/centennial-hills', label: 'Centennial Hills real estate nearby' },
      { href: '/las-vegas-zip-codes/89166', label: 'Zip code 89166 home guide' },
    ],
  },
  {
    path: 'communities/centennial-hills',
    name: 'Centennial Hills',
    heading: 'Centennial Hills Real Estate — Northwest Las Vegas',
    title: 'Centennial Hills Homes for Sale | 89149 & 89131 REALTOR® | Dr. Janet Duffy',
    description:
      'Centennial Hills real estate with Dr. Janet Duffy, REALTOR®. Homes near Centennial Hills Park, Centennial Center, and the 215 Beltway in zip codes 89149, 89131, and 89143. Call (702) 766-7668.',
    lead: 'Centennial Hills anchors the northwest valley where US-95 meets the 215 Beltway — a retail and medical hub surrounded by single-family neighborhoods, half-acre equestrian pockets, and quick routes to both Summerlin and the Mount Charleston corridor.',
    hero: {
      src: '/images/communities/centennial-hills.jpg',
      alt: 'Single-family homes in Centennial Hills, northwest Las Vegas, with desert landscaping and mountain views',
    },
    mapQuery: 'Centennial Hills Park, Las Vegas, NV',
    zips: ['89149', '89131', '89143'],
    facts: [
      { label: 'Zip codes', value: '89149, 89131, 89143' },
      { label: 'Signature park', value: 'Centennial Hills Park — 120+ acres with amphitheater and splash pad' },
      { label: 'Retail', value: 'Centennial Center and Montecito Marketplace corridors' },
      { label: 'Medical', value: 'Centennial Hills Hospital Medical Center' },
      { label: 'Freeways', value: 'US-95 × CC-215 interchange; Summerlin in ~15 minutes' },
      { label: 'Nearby landmark', value: 'Ice Age Fossils State Park and Tule Springs Fossil Beds' },
    ],
    sections: [
      {
        title: 'Neighborhood character',
        paragraphs: [
          'Centennial Hills blends conventional suburban tracts with RNP (Rural Neighborhood Preservation) parcels — half-acre-plus lots that allow horses, RV garages, and casitas, especially south of Grand Teton Drive and in pockets of 89131. That mix means two very different buyer searches can succeed in the same square mile: a low-maintenance production home near Centennial Center, or acreage with no HOA a few streets away.',
          'Centennial Hills Park hosts the amphitheater concert series and one of the valley’s largest playgrounds, while the YMCA, Centennial Hills Hospital, and the Centennial Center retail corridor cover daily needs without leaving the 89149/89131 area.',
        ],
      },
      {
        title: 'Schools and commuting',
        paragraphs: [
          'Zoned campuses include Centennial High School and Arbor View High School depending on the parcel — attendance boundaries shift as the northwest grows, so verify with the Clark County School District for any specific address. Commuters reach Downtown Las Vegas in about 20 minutes on US-95 and the Strip corridor in 25–35; the 215 Beltway loops west to Summerlin’s employment core in about 15.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Centennial Hills',
        paragraphs: [
          'The RNP/no-HOA pockets, well-and-septic parcels, and standard tract homes each carry different due-diligence lists. Dr. Duffy verifies zoning overlays, utility connections, and easements before you write, and structures offers to compete in a sub-market where inventory is tight below the valley median.',
        ],
      },
      {
        title: 'Selling in Centennial Hills',
        paragraphs: [
          'Equestrian-zoned lots, RV garages, and casitas command premiums only when marketed to the buyers hunting for them. Listings get targeted exposure to those niche searches plus the relocation pipeline coming to Centennial Hills Hospital and the northwest medical corridor.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is an RNP lot in Centennial Hills?',
        a: 'Rural Neighborhood Preservation parcels are half-acre-or-larger lots protected by county/city overlay that permit horses, larger accessory structures, and often have no HOA. They cluster in 89131 and parts of 89149.',
      },
      {
        q: 'Which hospitals serve Centennial Hills?',
        a: 'Centennial Hills Hospital Medical Center anchors the area at US-95 and Durango; Summerlin Hospital and MountainView Hospital are each roughly 15 minutes away.',
      },
      {
        q: 'How close is Centennial Hills to Mount Charleston?',
        a: 'Kyle Canyon Road (SR-157) is minutes up US-95 — most Centennial Hills homes reach Mount Charleston trailheads in about 30–40 minutes.',
      },
    ],
    nearby: [
      { href: '/communities/providence', label: 'Providence homes near Knickerbocker Park' },
      { href: '/communities/lone-mountain', label: 'Lone Mountain equestrian-friendly lots' },
      { href: '/communities/tule-springs', label: 'New construction at Villages at Tule Springs' },
      { href: '/las-vegas-zip-codes/89149', label: 'Zip code 89149 home guide' },
    ],
  },
  {
    path: 'communities/henderson',
    name: 'Henderson',
    heading: 'Henderson NV Real Estate — Nevada’s Second-Largest City',
    title: 'Henderson NV Homes for Sale | Green Valley to Lake Las Vegas | Dr. Janet Duffy',
    description:
      'Henderson NV real estate with Dr. Janet Duffy, REALTOR®. Green Valley Ranch, Inspirada, Anthem, Seven Hills, Cadence, MacDonald Highlands, and Lake Las Vegas. Call (702) 766-7668.',
    lead: 'Henderson is Nevada’s second-largest city and the southeast valley’s master-plan capital — from the revitalized Water Street District to Green Valley Ranch, Inspirada, Anthem, MacDonald Highlands, and the resort shoreline of Lake Las Vegas.',
    hero: {
      src: '/images/communities/henderson.jpg',
      alt: 'Hillside homes in Henderson, Nevada overlooking the Las Vegas valley at dusk',
    },
    mapQuery: 'Water Street District, Henderson, NV',
    zips: ['89002', '89011', '89012', '89014', '89015', '89044', '89052', '89074'],
    facts: [
      { label: 'Population', value: '340,000+ — second-largest city in Nevada' },
      { label: 'Key zip codes', value: '89011, 89012, 89044, 89052, 89074, 89002, 89014, 89015' },
      { label: 'Master plans', value: 'Green Valley, Inspirada, Anthem, Cadence, Lake Las Vegas' },
      { label: 'Downtown', value: 'Water Street District — dining, breweries, civic core' },
      { label: 'Airport drive', value: 'About 15–25 minutes to Harry Reid International' },
      { label: 'Recreation', value: 'River Mountains Loop Trail, Lake Mead NRA, Sloan Canyon NCA' },
    ],
    sections: [
      {
        title: 'Henderson’s sub-markets',
        paragraphs: [
          'Henderson is really a collection of distinct markets. Green Valley and Green Valley Ranch (89014, 89074, 89052) offer mature neighborhoods around The District’s shops and Green Valley Ranch Resort. The western hills hold Anthem, Seven Hills, and guard-gated MacDonald Highlands with elevated Strip views. To the east, Cadence (89011 and 89015) delivers new construction near the Water Street District, and Lake Las Vegas wraps a 320-acre private lake in resort living.',
          'Inspirada (89044) in the far southwest corner stacks pool complexes and parks into a walkable grid beneath the Sloan Canyon National Conservation Area, with the new West Henderson employment corridor — including the Raiders’ headquarters and Lifeguard Arena’s sister facilities — minutes away.',
        ],
      },
      {
        title: 'Commutes, schools, and amenities',
        paragraphs: [
          'The I-215/I-515 interchange network puts most Henderson addresses 15–25 minutes from Harry Reid International Airport and 20–30 from the Strip. Campuses include Coronado, Green Valley, Foothill, and Liberty high schools plus a deep charter and private bench; confirm zoning per address with the Clark County School District.',
          'Outdoor access is a Henderson signature: the 34-mile River Mountains Loop Trail, Lake Mead National Recreation Area, and petroglyph canyons of Sloan Canyon NCA all start at the city’s edge.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Henderson',
        paragraphs: [
          'With eight-plus distinct sub-markets, the first job is narrowing by commute, HOA appetite, and product type — then Dr. Duffy runs micro-comps for that specific village. Relocating buyers get a guided day covering Green Valley, Anthem/Seven Hills, Inspirada, and Lake Las Vegas with live MLS data on each stop.',
        ],
      },
      {
        title: 'Selling in Henderson',
        paragraphs: [
          'Henderson listings are positioned against their own master plan’s comparables and marketed to the specific buyer pool that plan attracts — golf-course buyers at Anthem Country Club shop differently than Cadence new-build shoppers. Pricing strategy, prep, and photography follow the sub-market, not the citywide average.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which Henderson master plan fits a lock-and-leave lifestyle?',
        a: 'Lake Las Vegas condos, Inspirada townhomes, and guard-gated sections of Seven Hills and Anthem offer strong lock-and-leave options with association-maintained exteriors. Dr. Duffy matches the fee structure to how often you’ll be away.',
      },
      {
        q: 'How far is Henderson from the Las Vegas Strip?',
        a: 'Most Henderson neighborhoods reach the south Strip in 20–30 minutes via I-215 or I-15; Green Valley addresses closest to the airport can be 15 minutes.',
      },
      {
        q: 'Does Henderson have 55+ communities?',
        a: 'Yes — Sun City Anthem (89044) and Del Webb communities at Lake Las Vegas among them. Solera and Heritage collections add more age-qualified inventory.',
      },
    ],
    nearby: [
      { href: '/communities/green-valley', label: 'Green Valley homes near The District' },
      { href: '/communities/inspirada', label: 'Inspirada new homes in 89044' },
      { href: '/communities/lake-las-vegas', label: 'Lake Las Vegas waterfront living' },
      { href: '/communities/anthem', label: 'Anthem and Sun City Anthem real estate' },
    ],
  },
  {
    path: 'communities/green-valley',
    name: 'Green Valley',
    heading: 'Green Valley Real Estate — Henderson’s Original Master Plan',
    title: 'Green Valley Homes for Sale | Henderson 89014, 89074, 89052 | Dr. Janet Duffy',
    description:
      'Green Valley and Green Valley Ranch real estate with Dr. Janet Duffy, REALTOR®. Homes near The District, Green Valley Ranch Resort, and Pecos legacy neighborhoods in 89014, 89074, and 89052. Call (702) 766-7668.',
    lead: 'Green Valley was Henderson’s first master-planned community and remains its most central — mature tree canopies, parks every few blocks, and The District at Green Valley Ranch as its dining-and-retail living room.',
    hero: {
      src: '/images/communities/green-valley.jpg',
      alt: 'Tree-lined residential street in Green Valley, Henderson, Nevada with mountain backdrop',
    },
    mapQuery: 'The District at Green Valley Ranch, Henderson, NV',
    zips: ['89014', '89074', '89052', '89012'],
    facts: [
      { label: 'Zip codes', value: '89014, 89074, plus Green Valley Ranch in 89052/89012' },
      { label: 'Retail core', value: 'The District at Green Valley Ranch; Green Valley Ranch Resort & Spa' },
      { label: 'Founded', value: 'American Nevada Corporation master plan, est. 1978' },
      { label: 'Airport drive', value: 'About 15 minutes to Harry Reid International' },
      { label: 'Parks', value: 'Paseo Verde, Discovery Park, and a dense pocket-park network' },
    ],
    sections: [
      {
        title: 'Legacy neighborhoods and Green Valley Ranch',
        paragraphs: [
          'Original Green Valley (89014/89074) offers 1980s–1990s single-story floor plans on lots that predate today’s tighter setbacks — many with mature shade trees, RV gates, and no-or-low HOA fees. Green Valley Ranch, the newer western phase, climbs toward the 215 with gated enclaves, paseos, and walkability to The District’s restaurants and Whole Foods.',
          'The area’s connective tissue is its paseo trail system: landscaped walking corridors linking schools, parks, and shopping without arterial crossings — a planning feature buyers coming from older Las Vegas neighborhoods notice immediately.',
        ],
      },
      {
        title: 'Location economics',
        paragraphs: [
          'Green Valley’s center-of-everything position — 15 minutes to the airport, 20 to the Strip, minutes to St. Rose Dominican Hospital’s Siena campus — keeps resale demand steady. Zoned campuses include Green Valley High School and Coronado High School by section; confirm current boundaries with the Clark County School District.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Green Valley',
        paragraphs: [
          'Older Green Valley homes reward careful inspection — original galvanized plumbing, aging HVAC, and pool equipment are negotiation points Dr. Duffy prices into every offer. In Green Valley Ranch’s gated sections, she tracks off-market and coming-soon inventory through the Berkshire Hathaway HomeServices network.',
        ],
      },
      {
        title: 'Selling in Green Valley',
        paragraphs: [
          'Updated single-stories on mature lots are among the valley’s most in-demand products. Strategic pre-listing improvements — often under a few thousand dollars — routinely change the comp bracket. Dr. Duffy provides a room-by-room ROI plan before any money is spent.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between Green Valley and Green Valley Ranch?',
        a: 'Green Valley is the original 1980s master plan centered on Green Valley Parkway (89014/89074). Green Valley Ranch is its newer western expansion toward the 215 (89052/89012), home to The District and the resort of the same name.',
      },
      {
        q: 'Are there single-story homes in Green Valley?',
        a: 'Yes — original Green Valley has one of the valley’s deepest benches of true single-story floor plans, many on 7,000+ sq ft lots with mature landscaping.',
      },
      {
        q: 'How walkable is Green Valley Ranch?',
        a: 'Neighborhoods around The District and Paseo Verde Parkway rank among Henderson’s most walkable, with the paseo trail system linking homes to shops, the library, and parks.',
      },
    ],
    nearby: [
      { href: '/communities/henderson', label: 'All Henderson master-planned communities' },
      { href: '/communities/seven-hills', label: 'Seven Hills homes above Green Valley' },
      { href: '/las-vegas-zip-codes/89052', label: 'Zip code 89052 home guide' },
      { href: '/communities/anthem', label: 'Anthem real estate in the Henderson hills' },
    ],
  },
  {
    path: 'communities/north-las-vegas',
    name: 'North Las Vegas',
    heading: 'North Las Vegas Real Estate — Value and New Construction',
    title: 'North Las Vegas Homes for Sale | Aliante, Eldorado, Tule Springs | Dr. Janet Duffy',
    description:
      'North Las Vegas real estate with Dr. Janet Duffy, REALTOR®. New construction at Villages at Tule Springs, Aliante golf-course living, and Craig Ranch area homes. Call (702) 766-7668.',
    lead: 'North Las Vegas pairs the valley’s strongest new-construction pipeline with its most accessible pricing — anchored by Craig Ranch Regional Park, the Aliante master plan, and the fast-growing Villages at Tule Springs.',
    hero: {
      src: '/images/communities/north-las-vegas.jpg',
      alt: 'New single-family homes in North Las Vegas near Craig Ranch Regional Park',
    },
    mapQuery: 'Craig Ranch Regional Park, North Las Vegas, NV',
    zips: ['89030', '89031', '89032', '89081', '89084', '89085', '89086'],
    facts: [
      { label: 'Zip codes', value: '89030, 89031, 89032, 89081, 89084, 89085, 89086' },
      { label: 'Signature park', value: 'Craig Ranch Regional Park — 170 acres, amphitheater, skate park' },
      { label: 'Master plans', value: 'Aliante, Eldorado, Villages at Tule Springs' },
      { label: 'Employment', value: 'VA Medical Center, Nellis AFB corridor, Apex industrial growth' },
      { label: 'Higher ed', value: 'College of Southern Nevada — Cheyenne campus' },
    ],
    sections: [
      {
        title: 'Where the growth is',
        paragraphs: [
          'The city’s northern tier (89084–89086) is the story: Villages at Tule Springs adds phased neighborhoods from national builders beside Floyd Lamb Park, while Aliante contributes golf-course lots around Aliante Golf Club and the Nature Discovery Park. The Deer Springs/US-95 corridor gives these areas direct freeway access to the whole valley.',
          'Closer in, Eldorado and the Craig Ranch corridor (89031/89032) offer 2000s-era production homes at approachable price points, minutes from the regional park’s amphitheater, sports complexes, and the North Las Vegas VA Medical Center.',
        ],
      },
      {
        title: 'Military and commuter notes',
        paragraphs: [
          'Nellis Air Force Base sits on the city’s east side — Dr. Duffy regularly represents PCSing military families and understands VA-loan offer strategy, BAH-aligned budgets, and quick-close timelines. Downtown Las Vegas is 15 minutes from most North Las Vegas addresses via I-15 or US-95, and the airport 25–35.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in North Las Vegas',
        paragraphs: [
          'New-construction buyers get builder-contract review, incentive negotiation, and independent inspections; VA buyers get offer terms structured so sellers see them as strong as conventional. Investors get honest rent-band analysis by sub-neighborhood before writing.',
        ],
      },
      {
        title: 'Selling in North Las Vegas',
        paragraphs: [
          'With builders marketing hard in 89084–89086, resale listings win on move-in readiness: completed backyards, solar economics made transparent, and immediate availability. Dr. Duffy packages those advantages against the true delivered price of competing new builds.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where is new construction concentrated in North Las Vegas?',
        a: 'Primarily the northern zips 89084, 89085, and 89086 — Villages at Tule Springs and the Deer Springs corridor — plus scattered infill elsewhere.',
      },
      {
        q: 'Is North Las Vegas good for VA buyers?',
        a: 'Proximity to Nellis AFB and the VA Medical Center makes it a natural fit, and pricing aligns well with BAH. Dr. Duffy holds military-relocation experience and structures VA offers to compete.',
      },
      {
        q: 'What is Craig Ranch Regional Park?',
        a: 'A 170-acre regional park on the former Craig Ranch golf course — amphitheater concerts, skate park, dog parks, and sports fields — anchoring the 89031/89032 neighborhoods.',
      },
    ],
    nearby: [
      { href: '/communities/aliante', label: 'Aliante golf-course homes (89084)' },
      { href: '/communities/tule-springs', label: 'Villages at Tule Springs new construction' },
      { href: '/services/military-relocation', label: 'Military relocation to Nellis AFB' },
      { href: '/communities/centennial-hills', label: 'Centennial Hills homes to the west' },
    ],
  },
  {
    path: 'communities/boulder-city',
    name: 'Boulder City',
    heading: 'Boulder City Real Estate — Small-Town Nevada by Lake Mead',
    title: 'Boulder City NV Homes for Sale | 89005 REALTOR® | Dr. Janet Duffy',
    description:
      'Boulder City real estate with Dr. Janet Duffy, REALTOR®. Historic-district homes, Lake Mead access, and controlled-growth small-town living in 89005. Call (702) 766-7668.',
    lead: 'Boulder City is the valley’s outlier by design: a controlled-growth, no-gaming town of about 15,000 residents beside Lake Mead National Recreation Area, with a walkable historic district built for the crews who raised Hoover Dam.',
    hero: {
      src: '/images/communities/boulder-city.jpg',
      alt: 'Historic downtown Boulder City, Nevada with vintage storefronts and desert hills',
    },
    mapQuery: 'Boulder City, NV 89005',
    zips: ['89005'],
    facts: [
      { label: 'Zip code', value: '89005' },
      { label: 'Growth control', value: 'City ordinance caps annual new-home permits — scarce new supply' },
      { label: 'Recreation', value: 'Lake Mead NRA, Bootleg Canyon mountain-bike trails, zipline' },
      { label: 'Historic core', value: '1930s dam-era homes and storefronts on the National Register' },
      { label: 'Drive times', value: '~25 minutes to Harry Reid Airport; Hoover Dam in 15' },
    ],
    sections: [
      {
        title: 'A market unlike the rest of the valley',
        paragraphs: [
          'Boulder City’s growth-control ordinance strictly limits new residential permits, so supply stays scarce and character stays intact. Inventory ranges from restored 1930s–40s bungalows in the historic district to custom view homes on Lake Mead-facing slopes and mid-century ranches near the golf courses.',
          'Bootleg Canyon delivers internationally known downhill mountain-bike trails and a zipline above town; Lake Mead’s marinas and the River Mountains Loop Trail start at the city limit. Hemenway Park’s resident bighorn sheep are the town’s unofficial mascots.',
        ],
      },
      {
        title: 'What buyers should know',
        paragraphs: [
          'Historic-district purchases can involve preservation guidelines; hillside homes warrant slope, drainage, and view-corridor review. Boulder City operates its own utilities, and its schools — including Boulder City High School — sit within the Clark County School District; verify zoning for any address.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Boulder City',
        paragraphs: [
          'Scarce inventory means preparation wins: Dr. Duffy sets up instant alerts, previews homes the day they list, and leans on appraisal-gap and inspection strategies suited to older housing stock and custom hillside builds.',
        ],
      },
      {
        title: 'Selling in Boulder City',
        paragraphs: [
          'Boulder City attracts a specific buyer — lake recreation, small-town rhythm, no-gaming charter — and listings are marketed to exactly that profile across the valley and out-of-state retiree and remote-work pipelines.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is there so little new construction in Boulder City?',
        a: 'A voter-backed controlled-growth ordinance limits annual residential permits, preserving the town’s scale. It also supports long-term value for existing homes.',
      },
      {
        q: 'How far is Boulder City from Las Vegas?',
        a: 'About 25 minutes to Harry Reid International Airport and 30–35 to the Strip via I-11/US-93.',
      },
      {
        q: 'Is Lake Mead access easy from town?',
        a: 'Yes — the Lake Mead NRA entrance and Boulder Harbor are minutes away, and the River Mountains Loop Trail connects the town to the lake by bike.',
      },
    ],
    nearby: [
      { href: '/communities/henderson', label: 'Henderson master plans 20 minutes west' },
      { href: '/communities/lake-las-vegas', label: 'Lake Las Vegas resort homes' },
      { href: '/property-types/single-family', label: 'Single-family homes across the valley' },
      { href: '/services/luxury-homes', label: 'Luxury and view-home representation' },
    ],
  },
  {
    path: 'communities/seven-hills',
    name: 'Seven Hills',
    heading: 'Seven Hills Real Estate — Henderson Hillside Living',
    title: 'Seven Hills Homes for Sale | Henderson 89052 | Dr. Janet Duffy REALTOR®',
    description:
      'Seven Hills real estate in Henderson (89052) with Dr. Janet Duffy, REALTOR®. Guard-gated enclaves, Rio Secco Golf Club homes, and Strip-view hillside lots along St. Rose Parkway. Call (702) 766-7668.',
    lead: 'Seven Hills climbs the McCullough foothills above St. Rose Parkway in Henderson — a 1,300-acre master plan wrapped around Rio Secco Golf Club, where elevated lots trade on their city-light views.',
    hero: {
      src: '/images/communities/seven-hills.jpg',
      alt: 'Mediterranean-style homes on a hillside in Seven Hills, Henderson with Las Vegas Strip views',
    },
    mapQuery: 'Seven Hills, Henderson, NV 89052',
    zips: ['89052'],
    facts: [
      { label: 'Zip code', value: '89052' },
      { label: 'Golf', value: 'Rio Secco Golf Club — Rees Jones design, Butch Harmon academy heritage' },
      { label: 'Gated enclaves', value: 'Estates at Seven Hills and other guard-gated sections' },
      { label: 'Medical', value: 'St. Rose Dominican — Siena campus minutes away' },
      { label: 'Airport drive', value: 'About 15–20 minutes via St. Rose Pkwy and I-15' },
    ],
    sections: [
      {
        title: 'The lay of the hills',
        paragraphs: [
          'Neighborhoods step up the hillside from St. Rose Parkway, so view quality — and pricing — changes street by street. Guard-gated sections like the Estates at Seven Hills hold custom and semi-custom homes on elevated lots; non-gated villages offer production homes that share the same parks, trails, and central location.',
          'Rio Secco Golf Club threads the community’s canyons, and Seven Hills Park plus a linked trail system serve day-to-day recreation. The Siena campus of St. Rose Dominican Hospital, The District at Green Valley Ranch, and the M Resort corridor are each within about ten minutes.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Seven Hills',
        paragraphs: [
          'View premiums here are real but uneven — two similar floor plans can differ meaningfully on lot elevation alone. Dr. Duffy walks lots at different times of day, checks sightline protection against future rooftops, and prices offers against true view-adjusted comps.',
        ],
      },
      {
        title: 'Selling in Seven Hills',
        paragraphs: [
          'Twilight photography that captures Strip-light views, drone elevation context, and golf-frontage framing materially change buyer perception. Listings are also fed to luxury and golf-community buyer networks through Berkshire Hathaway HomeServices.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Seven Hills guard-gated?',
        a: 'Portions are — including the Estates at Seven Hills — while other villages are non-gated or card-gated. Fee structures differ accordingly; Dr. Duffy provides the breakdown per neighborhood.',
      },
      {
        q: 'What golf course runs through Seven Hills?',
        a: 'Rio Secco Golf Club, a Rees Jones design long associated with the Butch Harmon School of Golf.',
      },
      {
        q: 'How are the Strip views from Seven Hills?',
        a: 'Elevated northern-facing lots look across the valley to the Strip skyline; view quality varies lot by lot, which is exactly how Dr. Duffy evaluates them with buyers.',
      },
    ],
    nearby: [
      { href: '/communities/anthem', label: 'Anthem Country Club and Sun City Anthem' },
      { href: '/communities/green-valley', label: 'Green Valley Ranch below the hills' },
      { href: '/las-vegas-zip-codes/89052', label: 'Zip code 89052 home guide' },
      { href: '/property-types/golf-communities', label: 'Las Vegas golf-community homes' },
    ],
  },
  {
    path: 'communities/southern-highlands',
    name: 'Southern Highlands',
    heading: 'Southern Highlands Real Estate — South Las Vegas Master Plan',
    title: 'Southern Highlands Homes for Sale | 89141 REALTOR® | Dr. Janet Duffy',
    description:
      'Southern Highlands real estate (89141) with Dr. Janet Duffy, REALTOR®. Guard-gated golf estates, family parks, and I-15/St. Rose access in south Las Vegas. Call (702) 766-7668.',
    lead: 'Southern Highlands pairs a private Robert Trent Jones Sr./Jr. golf club with 2,700 acres of parks and paseos at the valley’s southern gateway — minutes from the I-15/St. Rose interchange and the south Strip.',
    hero: {
      src: '/images/communities/southern-highlands.jpg',
      alt: 'Golf course fairway lined with luxury homes in Southern Highlands, Las Vegas',
    },
    mapQuery: 'Southern Highlands Golf Club, Las Vegas, NV',
    zips: ['89141'],
    facts: [
      { label: 'Zip code', value: '89141' },
      { label: 'Golf', value: 'Southern Highlands Golf Club — private RTJ Sr./Jr. co-design' },
      { label: 'Parks', value: 'Goett Family Park and a paseo-linked park network' },
      { label: 'Access', value: 'I-15 at St. Rose Pkwy/Cactus; south Strip in ~15 minutes' },
      { label: 'Product mix', value: 'Production villages to guard-gated custom estates' },
    ],
    sections: [
      {
        title: 'Community structure',
        paragraphs: [
          'The master plan descends from the guard-gated golf core — where custom estates line the private club — through semi-custom enclaves to production villages threaded with paseos and pocket parks. Goett Family Park and the community’s trail spine keep most homes within a short walk of green space.',
          'The location trades on speed: I-15 access at St. Rose and Cactus puts the south Strip, Allegiant Stadium corridor, and Harry Reid International within 15–20 minutes, while the mountain-ringed southern edge keeps through-traffic out.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Southern Highlands',
        paragraphs: [
          'Golf-membership structures, guard-gate fee stacks, and SID balances differ sharply between villages here. Dr. Duffy clarifies total carrying cost per address and tracks the off-market estate inventory that never hits public portals.',
        ],
      },
      {
        title: 'Selling in Southern Highlands',
        paragraphs: [
          'Estate listings get luxury-tier media — twilight, drone, and lifestyle video — and placement in front of golf and relocation buyer pools; production homes get positioning against the village’s own turnover pattern to price at the top of what the micro-market supports.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Southern Highlands golf club private?',
        a: 'Yes — Southern Highlands Golf Club is private and by-invitation; membership is separate from home ownership. Dr. Duffy can outline current pathways for buyers who want both.',
      },
      {
        q: 'How far is Southern Highlands from the airport?',
        a: 'Roughly 15 minutes to Harry Reid International via I-15 or Las Vegas Boulevard south.',
      },
      {
        q: 'Are there non-gated neighborhoods in Southern Highlands?',
        a: 'Yes — much of the community is non-gated production housing with access to the same parks and paseos; the custom golf core is guard-gated.',
      },
    ],
    nearby: [
      { href: '/communities/mountains-edge', label: 'Mountain’s Edge homes to the west' },
      { href: '/communities/silverado-ranch', label: 'Silverado Ranch value nearby' },
      { href: '/property-types/luxury-homes', label: 'Las Vegas luxury estates' },
      { href: '/property-types/golf-communities', label: 'Golf-course homes across the valley' },
    ],
  },
  {
    path: 'communities/mountains-edge',
    name: 'Mountain’s Edge',
    heading: 'Mountain’s Edge Real Estate — Southwest Las Vegas',
    title: 'Mountain’s Edge Homes for Sale | 89178 & 89179 | Dr. Janet Duffy REALTOR®',
    description:
      'Mountain’s Edge real estate (89178, 89179) with Dr. Janet Duffy, REALTOR®. Homes near Exploration Peak Park, Nathaniel Jones Park, and the 215 in southwest Las Vegas. Call (702) 766-7668.',
    lead: 'Mountain’s Edge spreads across the southwest valley’s high ground around Exploration Peak — a 3,500-acre master plan known for its desert-conscious landscaping, big park investment, and 2005-era-to-current housing stock.',
    hero: {
      src: '/images/communities/mountains-edge.jpg',
      alt: 'Homes at the base of Exploration Peak in Mountain’s Edge, southwest Las Vegas',
    },
    mapQuery: 'Exploration Peak Park, Las Vegas, NV',
    zips: ['89178', '89179'],
    facts: [
      { label: 'Zip codes', value: '89178, 89179' },
      { label: 'Signature park', value: 'Exploration Peak Park — 80 acres with a 2,846-ft summit trail' },
      { label: 'Second anchor', value: 'Nathaniel Jones Park and paseo trail network' },
      { label: 'Design ethos', value: 'Drought-conscious desert landscaping standards' },
      { label: 'Access', value: 'Blue Diamond Rd (SR-160) and the 215 Beltway' },
    ],
    sections: [
      {
        title: 'Living at the edge of the Mojave',
        paragraphs: [
          'Exploration Peak Park is the community’s icon — a summit trail with valley-wide views, a western-themed playground, and event lawns at the base. The master plan mandated desert-adapted landscaping before it was fashionable, so streetscapes read cohesive and water-smart.',
          'Housing is largely 2005-and-newer production stock: single- and two-story plans, gated and non-gated villages, and a strong bench of three-car-garage homes. Red Rock Canyon and the Blue Diamond/Late Night trailheads are minutes west on SR-160.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Mountain’s Edge',
        paragraphs: [
          'Villages differ on HOA scope, gate status, and SID/LID balances — Dr. Duffy itemizes each before you write, and screens for the floor plans (single-story, next-gen suites, RV garages) that turn over rarely here.',
        ],
      },
      {
        title: 'Selling in Mountain’s Edge',
        paragraphs: [
          'With steady turnover in production villages, differentiation is everything: owned solar, pool/spa packages, and premium view lots against the peak get quantified and marketed rather than mentioned in passing.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What are the main parks in Mountain’s Edge?',
        a: 'Exploration Peak Park (with its summit trail and western-themed playground) and Nathaniel Jones Park anchor the system, linked by paseos through most villages.',
      },
      {
        q: 'How is the commute from Mountain’s Edge?',
        a: 'Blue Diamond Road and the 215 Beltway put the southwest employment corridor 10–15 minutes away; the Strip and airport typically run 20–30 minutes.',
      },
      {
        q: 'Does Mountain’s Edge have gated neighborhoods?',
        a: 'Yes — a mix of gated and non-gated villages share the master plan’s parks and trails. Gate status affects fees and, often, days-on-market patterns.',
      },
    ],
    nearby: [
      { href: '/communities/southern-highlands', label: 'Southern Highlands golf estates' },
      { href: '/communities/rhodes-ranch', label: 'Rhodes Ranch golf community nearby' },
      { href: '/property-types/new-construction', label: 'Southwest valley new construction' },
      { href: '/property-types/single-family', label: 'Single-family homes with three-car garages' },
    ],
  },
  {
    path: 'communities/anthem',
    name: 'Anthem',
    heading: 'Anthem Real Estate — Henderson’s Hilltop Master Plan',
    title: 'Anthem Homes for Sale | Anthem Country Club & Sun City Anthem | Dr. Janet Duffy',
    description:
      'Anthem real estate in Henderson with Dr. Janet Duffy, REALTOR®. Anthem Country Club guard-gated golf homes, Sun City Anthem 55+ living, and Anthem Highlands. Zip codes 89052 and 89044. Call (702) 766-7668.',
    lead: 'Anthem rises along the McCullough Range at Henderson’s southern rim — a collection of villages from guard-gated Anthem Country Club to Sun City Anthem, one of Nevada’s largest 55+ communities, all trading on elevation and valley views.',
    hero: {
      src: '/images/communities/anthem.jpg',
      alt: 'Hilltop homes in Anthem, Henderson, Nevada overlooking the valley at sunset',
    },
    mapQuery: 'Anthem Hills Park, Henderson, NV',
    zips: ['89052', '89044'],
    facts: [
      { label: 'Zip codes', value: '89052, 89044' },
      { label: 'Golf', value: 'Anthem Country Club (Hale Irwin design); Revere Golf Club adjacent' },
      { label: '55+ anchor', value: 'Sun City Anthem — 7,000+ homes, three rec centers' },
      { label: 'Signature park', value: 'Anthem Hills Park — terraced fields and valley views' },
      { label: 'Elevation', value: 'Among the valley’s highest master plans — cooler evenings, big views' },
    ],
    sections: [
      {
        title: 'Anthem’s villages',
        paragraphs: [
          'Anthem Country Club is the guard-gated centerpiece: custom and semi-custom homes around a Hale Irwin course with a private clubhouse. Anthem Highlands and non-gated Anthem villages step down the hillside with production homes and paseo-linked parks. Sun City Anthem (primarily 89044) runs its own 55+ amenity world — recreation centers, clubs, and the adjacent Revere Golf Club.',
          'Elevation is the shared asset. Homes sit hundreds of feet above the valley floor, delivering city-light views from many lots and measurably cooler summer evenings than central Las Vegas.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Anthem',
        paragraphs: [
          'Country-club membership terms, 55+ occupancy rules, and view-lot premiums each require specific diligence. Dr. Duffy confirms age-qualification requirements at Sun City Anthem, walks view corridors at multiple times of day, and prices golf frontage against course-side comps only.',
        ],
      },
      {
        title: 'Selling in Anthem',
        paragraphs: [
          'Anthem sellers benefit from two deep buyer pools — golf/club buyers and active-adult relocators. Listings are marketed to both with elevation photography, amenity storytelling, and Berkshire Hathaway HomeServices’ national relocation reach.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Sun City Anthem age-restricted?',
        a: 'Yes — it is an age-qualified 55+ community under HOPA rules; at least one resident must generally be 55 or older. Dr. Duffy verifies current occupancy requirements during escrow.',
      },
      {
        q: 'What is the difference between Anthem and Anthem Country Club?',
        a: 'Anthem is the overall master plan; Anthem Country Club is its guard-gated golf village with a private Hale Irwin course and separate club fee structure.',
      },
      {
        q: 'How far is Anthem from the airport?',
        a: 'Typically 20–25 minutes to Harry Reid International via I-15 or Las Vegas Boulevard from the St. Rose corridor.',
      },
    ],
    nearby: [
      { href: '/communities/seven-hills', label: 'Seven Hills homes across St. Rose' },
      { href: '/communities/inspirada', label: 'Inspirada new construction below the hills' },
      { href: '/property-types/55-plus-communities', label: '55+ communities across Las Vegas' },
      { href: '/las-vegas-zip-codes/89044', label: 'Zip code 89044 home guide' },
    ],
  },
];
