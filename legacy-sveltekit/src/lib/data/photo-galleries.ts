import type { PhotoItem } from '$lib/components/PhotoGallery.svelte';

/**
 * Central place to register reusable photo sets.
 * Add image files under `static/images/...` and reference them here.
 */

export const luxuryHighlights: PhotoItem[] = [
	{
		src: '/images/luxury/living-room-1.jpg',
		alt: 'Modern Las Vegas luxury living room with strip views at dusk',
		caption: 'Great rooms that frame Strip and mountain views',
		tagline: 'Perfect for entertaining, with indoor / outdoor flow.'
	},
	{
		src: '/images/luxury/pool-1.jpg',
		alt: 'Resort-style backyard with pool and fire features in Summerlin',
		caption: 'Resort-style pools built for 7–8 months of desert sunshine',
		tagline: 'Common across luxury homes in Summerlin and Henderson.'
	},
	{
		src: '/images/luxury/kitchen-1.jpg',
		alt: 'Chef’s kitchen with waterfall island and double ovens',
		caption: 'Chef-inspired kitchens with oversized islands',
		tagline: 'A priority for both everyday life and hosting.'
	}
];

export const relocationScenes: PhotoItem[] = [
	{
		src: '/images/relocation/summerlin-trails.jpg',
		alt: 'Mature trails and parks in a Summerlin neighborhood',
		caption: 'Trail networks that make daily walks part of your routine'
	},
	{
		src: '/images/relocation/henderson-sunset.jpg',
		alt: 'Henderson neighborhood at sunset with city and mountain views',
		caption: 'Henderson sunsets that remind you why you moved'
	}
];

export const seniorLivingJoy: PhotoItem[] = [
	// Hero image already wired on the Senior Housing page
	{
		src: '/images/senior/senior-friends-laughing.jpg',
		alt: 'Group of joyful senior women laughing together in a garden courtyard',
		caption: 'Active, social 55+ living in Las Vegas',
		tagline: 'The goal is not just a house that fits — it is a community that feels like home.'
	},
	{
		src: '/images/senior/senior-coffee-courtyard.jpg',
		alt: 'Group of seniors enjoying coffee together outdoors in a sunny courtyard',
		caption: 'Morning coffee with neighbors who feel like family'
	},
	{
		src: '/images/senior/senior-garden-club.jpg',
		alt: 'Senior woman gardening in a raised bed while a friend works in the background',
		caption: 'Community gardens and outdoor spaces that make wellness feel natural'
	},
	{
		src: '/images/senior/senior-park-walks.jpg',
		alt: 'Group of seniors smiling together in a shaded park',
		caption: 'Tree-lined paths and parks that make daily walks part of the routine'
	},
	{
		src: '/images/senior/senior-waterfront-day-trip.jpg',
		alt: 'Three senior women smiling for a photo by the waterfront on a day trip',
		caption: 'Day trips, outings, and adventures built into your social calendar'
	},
	{
		src: '/images/senior/senior-backyard-gathering.jpg',
		alt: 'Seniors gathered in a backyard with string lights and party decorations',
		caption: 'Backyard gatherings that keep friendships and family close'
	},
	{
		src: '/images/senior/senior-fitness-tennis.jpg',
		alt: 'Senior man smiling while holding a tennis racket on a court',
		caption: 'Pickleball, tennis, and fitness amenities designed for every pace'
	},
	{
		src: '/images/senior/senior-community-dining.jpg',
		alt: 'Group of seniors sharing a meal together around a dining table',
		caption: 'Thoughtful community dining that makes meals social again'
	},
	{
		src: '/images/senior/senior-book-club.jpg',
		alt: 'Group of seniors sitting around a table with books and coffee',
		caption: 'Book clubs, interest groups, and activities that keep your mind engaged'
	},
	{
		src: '/images/senior/senior-pool-fitness.jpg',
		alt: 'Senior man smiling while resting at the edge of an indoor swimming pool',
		caption: 'Low-impact pool time that supports joint health and staying active'
	},
	{
		src: '/images/senior/senior-game-night.jpg',
		alt: 'Group of seniors laughing together around a game table',
		caption: 'Game nights that turn neighbors into long-term friends'
	}
];

export const drDuffyHeadshots: PhotoItem[] = [
	{
		src: '/svelte-welcome.png',
		alt: 'Dr. Janet Duffy smiling and ready to speak with a client',
		caption: 'Dr. Janet Duffy, Las Vegas Luxury & Relocation REALTOR®',
		tagline: 'Direct, concierge-level guidance for your next Las Vegas move.'
	}
];

