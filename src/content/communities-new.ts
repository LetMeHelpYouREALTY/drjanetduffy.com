import type { GeoArea } from './geo-types';

/** Hyperlocal profiles for new community pages (routes served by communities/[slug]). */
export const newCommunities: GeoArea[] = [
  {
    path: 'communities/lone-mountain',
    name: 'Lone Mountain',
    heading: 'Lone Mountain Real Estate — Northwest Las Vegas Landmark Living',
    title: 'Lone Mountain Homes for Sale | 89129 & 89149 | Dr. Janet Duffy REALTOR®',
    description:
      'Lone Mountain real estate with Dr. Janet Duffy, REALTOR®. Homes and half-acre equestrian lots around Lone Mountain Regional Park in zip codes 89129 and 89149. Call (702) 766-7668.',
    lead: 'Lone Mountain is the northwest valley’s namesake landmark — a 3,342-foot peak with its own summit trail, ringed by neighborhoods that range from gated production villages to half-acre equestrian parcels with no HOA.',
    hero: {
      src: '/images/communities/lone-mountain.jpg',
      alt: 'Lone Mountain peak rising behind desert homes in northwest Las Vegas',
    },
    mapQuery: 'Lone Mountain Regional Park, Las Vegas, NV',
    zips: ['89129', '89149'],
    facts: [
      { label: 'Zip codes', value: '89129, 89149' },
      { label: 'Landmark', value: 'Lone Mountain — 3,342-ft summit trail from the regional park' },
      { label: 'Lot variety', value: 'Standard tracts to RNP half-acre equestrian parcels' },
      { label: 'Parks', value: 'Lone Mountain Regional Park, Majestic Park ballfields' },
      { label: 'Access', value: 'CC-215 at Lone Mountain Rd; Summerlin in ~10 minutes' },
    ],
    sections: [
      {
        title: 'Two markets around one mountain',
        paragraphs: [
          'West and north of the peak, Rural Neighborhood Preservation overlays protect half-acre-minimum lots where horses, casitas, and RV garages are permitted and HOAs are often absent — the Lone Mountain West pocket is a longtime equestrian stronghold. East and south, gated and non-gated production villages from the 1990s–2010s deliver conventional suburban living with the mountain as a backdrop.',
          'Lone Mountain Regional Park’s summit trail is a daily ritual for many residents — a short, steep climb with 360-degree valley views. Majestic Park adds lighted ballfields, and the CC-215 puts Downtown Summerlin’s retail 10–12 minutes away.',
        ],
      },
      {
        title: 'Buyer diligence notes',
        paragraphs: [
          'RNP parcels can involve wells, septic systems, and easements that standard tract purchases never touch. Dr. Duffy verifies the overlay status, utility connections, and animal-keeping entitlements parcel by parcel — details that materially affect value and financing.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying near Lone Mountain',
        paragraphs: [
          'Whether you need arena space for horses or simply a three-car garage with mountain views, Dr. Duffy maps the exact streets where each product exists and sets alerts accordingly — equestrian-entitled inventory here is scarce and moves through word of mouth as often as the MLS.',
        ],
      },
      {
        title: 'Selling near Lone Mountain',
        paragraphs: [
          'No-HOA, RNP, and equestrian entitlements command premiums only when buyers hunting those features see the listing. Dr. Duffy markets to those niche searches directly and documents entitlements up front so appraisers credit them.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I keep horses near Lone Mountain?',
        a: 'On designated RNP half-acre-plus parcels, yes — animal keeping is among the protected uses. Dr. Duffy confirms the overlay and any deed restrictions for each specific parcel.',
      },
      {
        q: 'How hard is the Lone Mountain summit trail?',
        a: 'It is short but steep — most hikers reach the 3,342-ft summit from Lone Mountain Regional Park in 25–40 minutes round trip.',
      },
      {
        q: 'How close is Lone Mountain to Summerlin?',
        a: 'About 10 minutes — the CC-215 and Lone Mountain Road connect directly to Summerlin’s Town Center corridor.',
      },
    ],
    nearby: [
      { href: '/communities/centennial-hills', label: 'Centennial Hills homes and RNP lots' },
      { href: '/communities/summerlin', label: 'Summerlin villages 10 minutes south' },
      { href: '/las-vegas-zip-codes/89149', label: 'Zip code 89149 home guide' },
      { href: '/communities/providence', label: 'Providence master-planned living' },
    ],
  },
  {
    path: 'communities/providence',
    name: 'Providence',
    heading: 'Providence Real Estate — Master-Planned Northwest Las Vegas',
    title: 'Providence Las Vegas Homes for Sale | 89166 | Dr. Janet Duffy REALTOR®',
    description:
      'Providence real estate (89166) with Dr. Janet Duffy, REALTOR®. Homes near Knickerbocker Park and Huckleberry Park in this 1,200-acre northwest Las Vegas master plan. Call (702) 766-7668.',
    lead: 'Providence is a 1,200-acre master-planned community in the northwest valley, built around a spine of themed parks — Knickerbocker, Huckleberry, and a dozen pocket greens — with quick reach to the 215 Beltway and Centennial Center.',
    hero: {
      src: '/images/communities/providence.jpg',
      alt: 'Community park with playground and homes in Providence, northwest Las Vegas',
    },
    mapQuery: 'Knickerbocker Park, Las Vegas, NV 89166',
    zips: ['89166'],
    facts: [
      { label: 'Zip code', value: '89166' },
      { label: 'Land area', value: '~1,200-acre master plan' },
      { label: 'Parks', value: 'Knickerbocker Park, Huckleberry Park, and themed pocket parks' },
      { label: 'Retail', value: 'Centennial Center corridor ~10 minutes' },
      { label: 'Housing era', value: 'Mostly 2006–2020s production homes and townhomes' },
    ],
    sections: [
      {
        title: 'Park-first planning',
        paragraphs: [
          'Providence’s identity is its park chain: Knickerbocker Park’s expansive playground and Huckleberry Park’s event lawn are linked by paseos so most homes sit within a short walk of green space. Housing stock runs from townhomes and compact single-family plans to larger two-story homes in gated sections.',
          'The community sits just south of Skye Canyon along the Hualapai/Grand Teton corridor, sharing 89166’s cooler upper-valley elevation and the same fast route up US-95 toward Mount Charleston.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Providence',
        paragraphs: [
          'Providence resales compete directly with Skye Canyon new builds a few minutes north — Dr. Duffy runs that comparison honestly: total delivered price, landscaping, solar terms, and HOA fee stacks side by side so you choose on facts.',
        ],
      },
      {
        title: 'Selling in Providence',
        paragraphs: [
          'The winning positioning highlights what new construction can’t match — established parks outside the front door, completed yards, and immediate occupancy — quantified against builder pricing up the road.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Providence the same as Skye Canyon?',
        a: 'No — they are neighboring master plans in 89166. Providence began in the mid-2000s with a themed-park spine; Skye Canyon is newer with active builder programs and a fitness-anchored amenity core.',
      },
      {
        q: 'What HOA fees apply in Providence?',
        a: 'A master association maintains the parks and streetscapes, and some gated sections add sub-association fees. Dr. Duffy supplies the current schedule for any listing you consider.',
      },
      {
        q: 'How is the commute from Providence?',
        a: 'The 215 Beltway is minutes away — Summerlin in about 15 minutes, Downtown Las Vegas in 25, and the Strip corridor in roughly 30–35.',
      },
    ],
    nearby: [
      { href: '/communities/skye-canyon', label: 'Skye Canyon new homes next door' },
      { href: '/communities/centennial-hills', label: 'Centennial Hills retail and homes' },
      { href: '/las-vegas-zip-codes/89166', label: 'Zip code 89166 home guide' },
      { href: '/communities/tule-springs', label: 'Villages at Tule Springs new construction' },
    ],
  },
  {
    path: 'communities/tule-springs',
    name: 'Villages at Tule Springs',
    heading: 'Villages at Tule Springs — North Las Vegas New Construction',
    title: 'Villages at Tule Springs Homes for Sale | 89086 | Dr. Janet Duffy REALTOR®',
    description:
      'Villages at Tule Springs real estate with Dr. Janet Duffy, REALTOR®. New-construction homes beside Floyd Lamb Park and Tule Springs Fossil Beds National Monument in North Las Vegas. Call (702) 766-7668.',
    lead: 'The Villages at Tule Springs is North Las Vegas’s flagship new master plan — phased neighborhoods from national builders beside Floyd Lamb Park’s lakes and the Tule Springs Fossil Beds National Monument.',
    hero: {
      src: '/images/communities/tule-springs.jpg',
      alt: 'Brand-new homes under desert sky near Floyd Lamb Park in North Las Vegas',
    },
    mapQuery: 'Villages at Tule Springs, North Las Vegas, NV',
    zips: ['89086', '89084'],
    facts: [
      { label: 'Zip codes', value: '89086, 89084' },
      { label: 'Neighbor', value: 'Floyd Lamb Park at Tule Springs — lakes, lawns, historic ranch' },
      { label: 'Monument', value: 'Tule Springs Fossil Beds National Monument (Ice Age fossils)' },
      { label: 'Builders', value: 'D.R. Horton, KB Home, Century Communities, and more by phase' },
      { label: 'Access', value: 'US-95 at Durango/Deer Springs corridor' },
    ],
    sections: [
      {
        title: 'A master plan mid-build',
        paragraphs: [
          'Tule Springs is delivering in phases, which means multiple builders selling simultaneously — different lot premiums, incentive packages, and completion timelines within a mile of each other. Amenity buildout (parks, trails, and school sites) follows the phasing plan, so knowing which phase you’re buying into matters.',
          'The setting is genuinely unusual: Floyd Lamb Park’s spring-fed lakes and century-old Tule Springs Ranch sit across the road, and the national monument preserves Ice Age fossil beds along the community’s edge.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying at Tule Springs',
        paragraphs: [
          'Builder sales offices represent the builder. Dr. Duffy represents you — comparing spec-home discounts against to-be-built pricing across every active builder, negotiating rate buydowns and closing credits, and scheduling independent pre-drywall and final inspections. Register her on your first visit so representation is preserved.',
        ],
      },
      {
        title: 'Selling at Tule Springs',
        paragraphs: [
          'Early-phase owners reselling amid active construction need precise positioning: completed landscaping and window coverings, owned solar, and no construction wait are real advantages when priced against the builders’ true delivered cost.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need my own agent for new construction at Tule Springs?',
        a: 'Strongly recommended — and it typically costs you nothing, since builders compensate buyer agents. The on-site staff works for the builder; Dr. Duffy negotiates and inspects for you.',
      },
      {
        q: 'What is at Floyd Lamb Park?',
        a: 'Four spring-fed lakes for fishing, picnic lawns, walking paths, resident peacocks, and the historic Tule Springs Ranch buildings — one of the valley’s few green oasis parks.',
      },
      {
        q: 'How far is Tule Springs from Downtown Las Vegas?',
        a: 'About 20–25 minutes via US-95 south; Centennial Hills retail is under 10 minutes.',
      },
    ],
    nearby: [
      { href: '/communities/north-las-vegas', label: 'North Las Vegas market overview' },
      { href: '/communities/aliante', label: 'Aliante golf-course living nearby' },
      { href: '/property-types/new-construction', label: 'New-construction buyer representation' },
      { href: '/communities/centennial-hills', label: 'Centennial Hills homes minutes south' },
    ],
  },
  {
    path: 'communities/aliante',
    name: 'Aliante',
    heading: 'Aliante Real Estate — North Las Vegas Master Plan',
    title: 'Aliante Homes for Sale | North Las Vegas 89084 | Dr. Janet Duffy REALTOR®',
    description:
      'Aliante real estate (89084) with Dr. Janet Duffy, REALTOR®. Golf-course homes at Aliante Golf Club, Nature Discovery Park neighborhoods, and Sun City Aliante 55+ living. Call (702) 766-7668.',
    lead: 'Aliante is North Las Vegas’s established master plan — 1,900 acres around the Aliante Golf Club, the dinosaur-themed Nature Discovery Park, and the age-qualified Sun City Aliante neighborhood.',
    hero: {
      src: '/images/communities/aliante.jpg',
      alt: 'Golf course and homes at dusk in Aliante, North Las Vegas',
    },
    mapQuery: 'Nature Discovery Park, North Las Vegas, NV',
    zips: ['89084'],
    facts: [
      { label: 'Zip code', value: '89084' },
      { label: 'Golf', value: 'Aliante Golf Club — public championship course' },
      { label: 'Signature park', value: 'Nature Discovery Park — dinosaur playground and wetlands pond' },
      { label: '55+ option', value: 'Sun City Aliante age-qualified neighborhood' },
      { label: 'Anchor', value: 'Aliante Casino + Hotel and the Deer Springs retail corridor' },
    ],
    sections: [
      {
        title: 'The established choice in the north valley',
        paragraphs: [
          'Aliante built out through the 2000s, so buyers get mature landscaping, a complete park network, and a proven HOA track record — attributes the newer plans nearby are still growing into. Golf-frontage homes line Aliante Golf Club, while interior villages offer single- and two-story production plans.',
          'Sun City Aliante provides an age-qualified 55+ option with its own recreation center, and the Deer Springs Town Center corridor covers retail. The 215 Beltway’s northern arc connects Aliante west toward Centennial Hills in minutes.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Aliante',
        paragraphs: [
          'Golf-frontage premiums, 55+ occupancy rules at Sun City Aliante, and village-level fee differences all get verified before you write. Dr. Duffy also runs Aliante against Villages at Tule Springs new builds so you can weigh established amenities against new-construction incentives.',
        ],
      },
      {
        title: 'Selling in Aliante',
        paragraphs: [
          'Against heavy new-build competition nearby, Aliante listings win on maturity: established golf and park views, finished yards, and known HOA costs — packaged with photography that shows what a decade of landscape growth actually looks like.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Aliante Golf Club public?',
        a: 'Yes — it is a public championship course, so golf-frontage homeowners are not obligated to buy a membership.',
      },
      {
        q: 'Is there a 55+ community in Aliante?',
        a: 'Yes — Sun City Aliante is age-qualified with its own recreation center and activity calendar. Dr. Duffy verifies current occupancy requirements during escrow.',
      },
      {
        q: 'How far is Aliante from Nellis AFB?',
        a: 'Roughly 15–20 minutes via the 215 northern beltway — a common choice for military households wanting newer housing stock.',
      },
    ],
    nearby: [
      { href: '/communities/tule-springs', label: 'Villages at Tule Springs new homes' },
      { href: '/communities/north-las-vegas', label: 'North Las Vegas market guide' },
      { href: '/property-types/55-plus-communities', label: '55+ communities valley-wide' },
      { href: '/services/military-relocation', label: 'Nellis AFB relocation services' },
    ],
  },
  {
    path: 'communities/inspirada',
    name: 'Inspirada',
    heading: 'Inspirada Real Estate — West Henderson Master Plan',
    title: 'Inspirada Homes for Sale | Henderson 89044 | Dr. Janet Duffy REALTOR®',
    description:
      'Inspirada real estate (89044) with Dr. Janet Duffy, REALTOR®. New homes and pool-park villages beneath Sloan Canyon in West Henderson, minutes from the Raiders headquarters corridor. Call (702) 766-7668.',
    lead: 'Inspirada stacks pools, parks, and sports courts into a walkable West Henderson grid beneath the Sloan Canyon National Conservation Area — one of the valley’s most amenity-dense master plans, in the middle of the booming West Henderson employment corridor.',
    hero: {
      src: '/images/communities/inspirada.jpg',
      alt: 'Modern homes and community pool park in Inspirada, Henderson, Nevada',
    },
    mapQuery: 'Inspirada, Henderson, NV 89044',
    zips: ['89044'],
    facts: [
      { label: 'Zip code', value: '89044' },
      { label: 'Amenities', value: 'Multiple resident pool complexes, Aventura Park, sports courts' },
      { label: 'Backdrop', value: 'Sloan Canyon NCA — petroglyph canyon trail access' },
      { label: 'Employment', value: 'West Henderson corridor: Raiders HQ, industrial and medical growth' },
      { label: 'Builders', value: 'Multiple national builders across phased villages' },
    ],
    sections: [
      {
        title: 'Amenity density as a lifestyle',
        paragraphs: [
          'Inspirada’s villages — Solista, Aventura, and their siblings — each carry their own pool complexes, playgrounds, and event lawns, all included in the master association. The community’s grid of paseos makes daily life walkable in a way few valley master plans achieve.',
          'Sloan Canyon’s Petroglyph Canyon trailhead sits at the community’s doorstep, and the West Henderson employment corridor — including the Raiders’ headquarters and practice facility — continues to add jobs minutes away, a demand driver worth understanding whether you’re buying to live or to hold.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Inspirada',
        paragraphs: [
          'Active builder phases mean choice — and complexity. Dr. Duffy compares current builder releases against resale inventory, negotiates incentives, and explains how the master plan’s remaining phases could affect views, traffic, and value on the specific lot you’re considering.',
        ],
      },
      {
        title: 'Selling in Inspirada',
        paragraphs: [
          'Resales compete with on-site builder marketing, so listings lead with what’s already done: landscaping, window treatments, owned solar, and pool-complex proximity — priced against the builders’ true delivered cost, not their advertised base.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What does the Inspirada HOA include?',
        a: 'The master association covers the pool complexes, parks, and paseo network; some villages add sub-fees. Dr. Duffy provides the current fee stack for any address.',
      },
      {
        q: 'How far is Inspirada from the Strip and airport?',
        a: 'About 20 minutes to Harry Reid International and 25 to the south Strip via St. Rose Parkway and I-15.',
      },
      {
        q: 'What is Sloan Canyon?',
        a: 'A National Conservation Area on Inspirada’s southern edge, home to Petroglyph Canyon — over a thousand rock-art panels reachable by a moderate hike from the McCullough Hills trailhead.',
      },
    ],
    nearby: [
      { href: '/communities/anthem', label: 'Anthem hillside homes above Inspirada' },
      { href: '/communities/henderson', label: 'All Henderson communities' },
      { href: '/las-vegas-zip-codes/89044', label: 'Zip code 89044 home guide' },
      { href: '/property-types/new-construction', label: 'New-construction representation' },
    ],
  },
  {
    path: 'communities/lake-las-vegas',
    name: 'Lake Las Vegas',
    heading: 'Lake Las Vegas Real Estate — Resort Living on the Water',
    title: 'Lake Las Vegas Homes for Sale | Henderson 89011 | Dr. Janet Duffy REALTOR®',
    description:
      'Lake Las Vegas real estate (89011) with Dr. Janet Duffy, REALTOR®. Waterfront homes, MonteLago Village condos, and golf living at Reflection Bay and SouthShore. Call (702) 766-7668.',
    lead: 'Lake Las Vegas wraps a 320-acre private lake in 3,600 acres of resort living — Mediterranean-styled MonteLago Village, Jack Nicklaus golf at Reflection Bay and SouthShore, and the only true waterfront addresses in the Las Vegas valley.',
    hero: {
      src: '/images/communities/lake-las-vegas.jpg',
      alt: 'Mediterranean-style waterfront homes and marina at Lake Las Vegas, Henderson',
    },
    mapQuery: 'MonteLago Village, Henderson, NV',
    zips: ['89011'],
    facts: [
      { label: 'Zip code', value: '89011' },
      { label: 'The lake', value: '320-acre private lake — kayaking, paddleboarding, e-boats' },
      { label: 'Golf', value: 'Reflection Bay (public, Nicklaus) and SouthShore (private, Nicklaus)' },
      { label: 'Village', value: 'MonteLago Village — lakeside dining, events, boutique hotel' },
      { label: 'Resorts', value: 'Westin Lake Las Vegas and Hilton Lake Las Vegas' },
    ],
    sections: [
      {
        title: 'Waterfront product in the desert',
        paragraphs: [
          'Inventory spans MonteLago Village condos above the marina, patio and courtyard homes in guard-gated SouthShore, custom estates with private docks, and newer villages climbing the surrounding hills with lake views. Each carries a distinct fee structure — resort-area associations here do real work, from shoreline maintenance to security.',
          'Daily life is water-first: paddle mornings on glass-calm water, lakeside concerts at the village, and two Nicklaus courses. Lake Mead National Recreation Area is 10 minutes east; the Galleria retail corridor and Cadence’s new services sit just west.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying at Lake Las Vegas',
        paragraphs: [
          'Waterfront, water-view, and village products price on different logic — dock rights, view planes, and association scopes drive value as much as square footage. Dr. Duffy itemizes the fee stack and usage rights for every candidate property and tracks the off-market estate trades common in this niche.',
        ],
      },
      {
        title: 'Selling at Lake Las Vegas',
        paragraphs: [
          'This is a lifestyle purchase, and marketing has to sell the lifestyle: water-level photography, drone lake context, and placement in front of out-of-state resort-buyer pipelines through Berkshire Hathaway HomeServices’ network.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you boat on Lake Las Vegas?',
        a: 'Yes — non-gasoline watercraft: electric boats, kayaks, paddleboards, and small sail craft. Water Sports operators at the marina rent equipment; some waterfront homes include private docks.',
      },
      {
        q: 'Which golf courses are at Lake Las Vegas?',
        a: 'Reflection Bay (public, Jack Nicklaus signature, with lakeside holes) and SouthShore (private Nicklaus course inside the guard gates).',
      },
      {
        q: 'How far is Lake Las Vegas from the airport?',
        a: 'About 25–30 minutes to Harry Reid International via Lake Mead Parkway and I-215/I-515.',
      },
    ],
    nearby: [
      { href: '/communities/henderson', label: 'Henderson master plans overview' },
      { href: '/communities/boulder-city', label: 'Boulder City and Lake Mead living' },
      { href: '/las-vegas-zip-codes/89011', label: 'Zip code 89011 home guide' },
      { href: '/services/resort-properties', label: 'Resort-property representation' },
    ],
  },
  {
    path: 'communities/rhodes-ranch',
    name: 'Rhodes Ranch',
    heading: 'Rhodes Ranch Real Estate — Guard-Gated Southwest Golf Living',
    title: 'Rhodes Ranch Homes for Sale | 89148 | Dr. Janet Duffy REALTOR®',
    description:
      'Rhodes Ranch real estate (89148) with Dr. Janet Duffy, REALTOR®. Guard-gated golf-course homes around the Ted Robinson course in southwest Las Vegas. Call (702) 766-7668.',
    lead: 'Rhodes Ranch is a guard-gated, 1,300-acre golf community in the southwest valley — homes wrap a Ted Robinson-designed course, with a resident recreation center and quick access to the 215 Beltway.',
    hero: {
      src: '/images/communities/rhodes-ranch.jpg',
      alt: 'Golf fairway winding between homes in guard-gated Rhodes Ranch, southwest Las Vegas',
    },
    mapQuery: 'Rhodes Ranch Golf Club, Las Vegas, NV',
    zips: ['89148'],
    facts: [
      { label: 'Zip code', value: '89148' },
      { label: 'Golf', value: 'Rhodes Ranch Golf Club — Ted Robinson design, public play' },
      { label: 'Security', value: 'Guard-gated entries community-wide' },
      { label: 'Amenities', value: 'Resident rec center with pools, fitness, and courts' },
      { label: 'Access', value: '215 Beltway at Durango; Strip in ~20–25 minutes' },
    ],
    sections: [
      {
        title: 'Inside the gates',
        paragraphs: [
          'Unlike master plans where only an enclave is gated, all of Rhodes Ranch sits behind staffed gates — a rarity at its price band in the southwest valley. Housing runs from compact single-stories to two-story golf-frontage homes, with the recreation center’s pools and fitness included through the association.',
          'The surrounding Durango corridor has matured fast: Durango Resort, new dining, and the southwest medical district are all within about ten minutes, and IKEA-anchored retail sits just up the beltway.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Rhodes Ranch',
        paragraphs: [
          'Golf-frontage exposure differs hole by hole — errant-ball zones, morning sun, and cart-path traffic are walk-the-lot findings, not listing-sheet data. Dr. Duffy evaluates each lot in person and prices against course-side comps only.',
        ],
      },
      {
        title: 'Selling in Rhodes Ranch',
        paragraphs: [
          'Guard gates plus included rec-center amenities are quantifiable advantages against non-gated southwest comps — Dr. Duffy prices and markets that premium instead of letting the listing blend into the broader 89148 pool.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Rhodes Ranch entirely guard-gated?',
        a: 'Yes — the community operates staffed gate entries for the whole master plan, with the golf course and rec center inside.',
      },
      {
        q: 'Do homeowners have to join the golf club?',
        a: 'No — Rhodes Ranch Golf Club is open to public play; membership is optional for residents.',
      },
      {
        q: 'What is the commute like from Rhodes Ranch?',
        a: 'The 215 at Durango puts the southwest employment corridor minutes away; Strip resorts run 20–25 minutes and the airport about the same.',
      },
    ],
    nearby: [
      { href: '/communities/mountains-edge', label: 'Mountain’s Edge parks and homes' },
      { href: '/property-types/golf-communities', label: 'Golf communities across Las Vegas' },
      { href: '/property-types/gated-communities', label: 'Gated communities valley-wide' },
      { href: '/communities/southern-highlands', label: 'Southern Highlands estates' },
    ],
  },
  {
    path: 'communities/silverado-ranch',
    name: 'Silverado Ranch',
    heading: 'Silverado Ranch Real Estate — South Valley Convenience',
    title: 'Silverado Ranch Homes for Sale | 89183 & 89123 | Dr. Janet Duffy REALTOR®',
    description:
      'Silverado Ranch real estate (89183, 89123) with Dr. Janet Duffy, REALTOR®. Homes near Silverado Ranch Park, the South Point corridor, and I-15 in south Las Vegas. Call (702) 766-7668.',
    lead: 'Silverado Ranch delivers the south valley’s convenience play — established neighborhoods around Silverado Ranch Park, minutes from the I-15/St. Rose interchange, the South Point corridor, and the airport.',
    hero: {
      src: '/images/communities/silverado-ranch.jpg',
      alt: 'Suburban homes and park in Silverado Ranch, south Las Vegas',
    },
    mapQuery: 'Silverado Ranch Park, Las Vegas, NV',
    zips: ['89183', '89123'],
    facts: [
      { label: 'Zip codes', value: '89183, 89123' },
      { label: 'Signature park', value: 'Silverado Ranch Park — ballfields, playgrounds, dog park' },
      { label: 'Anchor', value: 'South Point corridor on Las Vegas Boulevard south' },
      { label: 'Airport drive', value: 'About 12–15 minutes to Harry Reid International' },
      { label: 'Housing era', value: 'Mostly late-1990s to 2010s production homes and townhomes' },
    ],
    sections: [
      {
        title: 'Position over polish',
        paragraphs: [
          'Silverado Ranch is not a formal master plan — it’s a collection of subdivisions, gated and non-gated, that share an unusually strong location: the airport in 12–15 minutes, the south Strip in under 20, and Henderson’s St. Rose medical corridor next door. That position keeps both owner-occupant and rental demand consistent.',
          'Housing stock spans townhomes and condos near Las Vegas Boulevard to larger production single-family homes east toward Bermuda Road, many in small gated enclaves with modest HOA fees.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Silverado Ranch',
        paragraphs: [
          'Subdivision-level differences — gate status, fee levels, rental caps — matter more here than area averages. Dr. Duffy screens HOAs for rental restrictions and litigation history, which affects financing and resale, before you commit.',
        ],
      },
      {
        title: 'Selling in Silverado Ranch',
        paragraphs: [
          'With commuter and investor pools both active, listings get positioned to the stronger current — owner-occupant emotional appeal or investor numbers — based on what the specific floor plan and HOA rules support.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Silverado Ranch a master-planned community?',
        a: 'No — it is an area of independent subdivisions around Silverado Ranch Boulevard and Park. That means more HOA variety and often lower fees than formal master plans.',
      },
      {
        q: 'How close is Silverado Ranch to the airport?',
        a: 'About 12–15 minutes via I-15 or Las Vegas Boulevard — among the shortest airport commutes of any south-valley residential area.',
      },
      {
        q: 'Are there gated communities in Silverado Ranch?',
        a: 'Yes — many small gated enclaves exist throughout. Dr. Duffy can filter your search to gated-only inventory with your other criteria.',
      },
    ],
    nearby: [
      { href: '/communities/southern-highlands', label: 'Southern Highlands master plan west' },
      { href: '/communities/green-valley', label: 'Green Valley homes to the east' },
      { href: '/property-types/townhomes', label: 'Townhomes across the valley' },
      { href: '/services/real-estate-investing', label: 'Investment-property guidance' },
    ],
  },
  {
    path: 'communities/sun-city-summerlin',
    name: 'Sun City Summerlin',
    heading: 'Sun City Summerlin — Las Vegas’s Flagship 55+ Community',
    title: 'Sun City Summerlin Homes for Sale | 89134 55+ | Dr. Janet Duffy REALTOR®',
    description:
      'Sun City Summerlin real estate (89134) with Dr. Janet Duffy, REALTOR®. Del Webb 55+ homes with three golf courses, four rec centers, and Summerlin amenities. Call (702) 766-7668.',
    lead: 'Sun City Summerlin is the valley’s flagship Del Webb 55+ community — roughly 7,800 homes across the high northwest corner of Summerlin, with three golf courses, four recreation centers, and a club calendar that runs deeper than most resorts.',
    hero: {
      src: '/images/communities/sun-city-summerlin.jpg',
      alt: 'Single-story homes and golf course in Sun City Summerlin, Las Vegas 55+ community',
    },
    mapQuery: 'Mountain Shadows Community Center, Las Vegas, NV 89134',
    zips: ['89134'],
    facts: [
      { label: 'Zip code', value: '89134' },
      { label: 'Scale', value: '~7,800 homes — among the largest 55+ communities in Nevada' },
      { label: 'Golf', value: 'Highland Falls, Palm Valley, and Eagle Crest courses' },
      { label: 'Rec centers', value: 'Mountain Shadows, Desert Vista, Sun Shadows, Pinnacle' },
      { label: 'Elevation', value: 'Upper Summerlin ridge — valley views and cooler evenings' },
    ],
    sections: [
      {
        title: 'What life here includes',
        paragraphs: [
          'The association operates four recreation centers — indoor and outdoor pools, fitness floors, tennis and pickleball, woodshop, and studios — plus dozens of chartered clubs. Highland Falls and Palm Valley are championship-length courses; Eagle Crest is the executive course for faster rounds.',
          'Nearly all homes are single-story Del Webb plans from the late 1980s through 1990s, from compact casitas to golf-frontage premium models. The ridge-top location means many streets carry valley or mountain views, with Summerlin’s hospitals, Downtown Summerlin retail, and Red Rock Canyon minutes away.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in Sun City Summerlin',
        paragraphs: [
          'Age-qualification (55+ under HOPA), resale-package review, and floor-plan knowledge drive smart purchases here — some plans and view streets resell at meaningful premiums. Dr. Duffy, who specializes in 55+ transitions, verifies occupancy rules and association health on every purchase.',
        ],
      },
      {
        title: 'Selling in Sun City Summerlin',
        paragraphs: [
          'Buyers are often relocating from out of state, so listings get virtual-tour-first marketing and syndication to retirement-relocation networks. Estate and downsizing sales receive coordinated support — timeline planning, estate-sale referrals, and as-is pricing strategy when appropriate.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What are the age rules in Sun City Summerlin?',
        a: 'It is an age-qualified community under federal HOPA guidelines — generally at least one resident 55+, with community-specific rules on younger residents. Dr. Duffy confirms current requirements during escrow.',
      },
      {
        q: 'Are the golf courses included in HOA dues?',
        a: 'The courses are association-owned amenities with separate play fees; rec-center access is included in dues. Dr. Duffy provides the current fee schedule.',
      },
      {
        q: 'Are all homes single-story?',
        a: 'The overwhelming majority are true single-story Del Webb plans — one of the deepest single-story inventories in the valley.',
      },
    ],
    nearby: [
      { href: '/communities/summerlin', label: 'All Summerlin villages' },
      { href: '/property-types/55-plus-communities', label: '55+ communities across Las Vegas' },
      { href: '/las-vegas-zip-codes/89134', label: 'Zip code 89134 home guide' },
      { href: '/services/senior-housing', label: 'Senior transition services' },
    ],
  },
  {
    path: 'communities/the-ridges',
    name: 'The Ridges',
    heading: 'The Ridges — Summerlin’s Premier Guard-Gated Estate Village',
    title: 'The Ridges Summerlin Homes for Sale | 89135 Luxury | Dr. Janet Duffy',
    description:
      'The Ridges real estate (89135) with Dr. Janet Duffy, REALTOR®. Custom estates and luxury homes around Bear’s Best golf course in Summerlin’s premier guard-gated village. Call (702) 766-7668.',
    lead: 'The Ridges is Summerlin’s premier guard-gated village — custom estates and designer semi-customs set along Bear’s Best golf course, where lots trade on dual exposures: Red Rock Canyon to the west, the Strip skyline to the east.',
    hero: {
      src: '/images/communities/the-ridges.jpg',
      alt: 'Modern luxury estate at dusk in The Ridges, Summerlin with Las Vegas skyline in the distance',
    },
    mapQuery: 'Bear’s Best Las Vegas, NV',
    zips: ['89135'],
    facts: [
      { label: 'Zip code', value: '89135' },
      { label: 'Golf', value: 'Bear’s Best Las Vegas — Nicklaus-selected replica holes' },
      { label: 'Club', value: 'Club Ridges — resident fitness, tennis, and pool campus' },
      { label: 'Enclaves', value: 'Promontory, Azure, Falcon Ridge, Silver Ridge, and more' },
      { label: 'Views', value: 'Dual exposure — Red Rock Canyon west, Strip skyline east' },
    ],
    sections: [
      {
        title: 'The estate market inside the gates',
        paragraphs: [
          'Enclaves within The Ridges each behave as micro-markets: Promontory’s large custom parcels, Azure’s contemporary semi-customs, Falcon Ridge’s golf frontage. Architecture skews desert-contemporary — walls of glass, disappearing sliders, negative-edge pools oriented to the view corridors.',
          'Residents get Club Ridges (fitness, tennis, pool) through the association, with Bear’s Best golf public-but-premium at the center. Downtown Summerlin’s dining and Red Rock Canyon’s trailheads are each under ten minutes.',
        ],
      },
    ],
    services: [
      {
        title: 'Buying in The Ridges',
        paragraphs: [
          'A meaningful share of Ridges inventory trades quietly. Dr. Duffy sources off-market and coming-soon estates through the Berkshire Hathaway HomeServices luxury network, engages builder and architect diligence for custom projects, and negotiates on view-corridor value — the asset that actually drives price here.',
        ],
      },
      {
        title: 'Selling in The Ridges',
        paragraphs: [
          'Estate marketing at this tier is a production: twilight and drone cinematography, architectural photography, international syndication, and qualified-buyer screening before showings. Discretion — including off-MLS strategies when appropriate — is part of the service.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Bear’s Best a private course?',
        a: 'Bear’s Best is open to public play at premium rates — homeownership in The Ridges does not require membership. Club Ridges, the resident amenity campus, is association-access.',
      },
      {
        q: 'What architecture styles dominate The Ridges?',
        a: 'Desert-contemporary leads — clean lines, glass walls, indoor-outdoor living oriented to Red Rock or Strip views — alongside earlier Tuscan-influenced customs.',
      },
      {
        q: 'Are teardowns and custom builds possible?',
        a: 'Select custom lots and value-play teardowns do appear. Design review is rigorous; Dr. Duffy coordinates architect and builder introductions and guideline review before purchase.',
      },
    ],
    nearby: [
      { href: '/communities/summerlin', label: 'Summerlin master plan overview' },
      { href: '/las-vegas-zip-codes/89135', label: 'Zip code 89135 home guide' },
      { href: '/property-types/luxury-homes', label: 'Las Vegas luxury estates' },
      { href: '/services/luxury-homes', label: 'Luxury representation services' },
    ],
  },
];
