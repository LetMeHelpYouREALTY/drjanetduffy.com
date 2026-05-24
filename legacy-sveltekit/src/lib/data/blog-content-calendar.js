// Blog content calendar structure for Dr. Janet Duffy
// Used to organize future blog topics by theme and publishing cadence

export const blogContentCalendar = {
	frequency: {
		perWeek: 3,
		days: ['Monday', 'Wednesday', 'Friday']
	},
	slots: [
		{
			day: 'Monday',
			theme: 'Market Updates',
			description:
				'Weekly Las Vegas housing market snapshots, interest-rate commentary, absorption trends, and community-level pricing updates for Summerlin, Skye Canyon, Centennial Hills, Henderson, and North Las Vegas.'
		},
		{
			day: 'Wednesday',
			theme: 'Neighborhood Spotlights',
			description:
				'Deep dives into specific villages and communities, including pricing ranges, HOA structures, school notes, commute insights, and hyper-local lifestyle details.'
		},
		{
			day: 'Friday',
			theme: 'Local Lifestyle',
			description:
				'Content focused on Las Vegas living: desert home maintenance tips, pool ownership, golf-course considerations, garage cooling ideas, amenity guides, and concierge-level move planning.'
		}
	],
	exampleTopics: {
		marketUpdates: [
			'Summerlin vs. Skye Canyon: Q2 2025 Inventory & Pricing Trends',
			'What Rising Rates Really Mean for Las Vegas Move-Up Buyers',
			'North Las Vegas and Centennial Hills Investor Snapshot'
		],
		neighborhoodSpotlights: [
			'Paseos vs. Willows: Which Summerlin Village Fits Your Lifestyle?',
			'Skye Canyon Phase 2: Builder Releases and Appreciation Outlook',
			'Centennial Hills vs. North Las Vegas: HOA vs. No-HOA Living'
		],
		localLifestyle: [
			'Do You Really Need a Pool in Las Vegas? Cost, Value, and Enjoyment',
			'How to Keep Your Las Vegas Garage Usable All Summer',
			'Best Time of Year to Move to Las Vegas (and How to Plan It)'
		]
	}
};


