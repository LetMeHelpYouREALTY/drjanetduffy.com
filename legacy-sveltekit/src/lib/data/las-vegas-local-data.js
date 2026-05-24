// Centralized Las Vegas hyper-local data for Dr. Janet Duffy's website
// This data structure provides specific community information for AI-optimized content

export const lasVegasLocalData = {
	// Primary Market Focus Areas
	primaryAreas: ['Summerlin', 'Skye Canyon', 'Centennial Hills', 'North Las Vegas'],
	secondaryAreas: ['Henderson', 'Spring Valley', 'Mountains Edge', 'Southwest Las Vegas'],
	luxuryCommunities: ['The Ridges', 'Red Rock Country Club', 'MacDonald Highlands', 'The Summit'],

	// Summerlin Village Data
	summerlin: {
		masterHOA: {
			annualFee: 160,
			includes: [
				'150+ miles of trails maintenance',
				'40+ parks upkeep',
				'Community events (parades, concerts)',
				'Architectural review services'
			]
		},
		villages: {
			paseos: {
				name: 'The Paseos',
				priceRange: { min: 425000, max: 575000 },
				description: 'Located near Boca Park, perfect for first-time buyers',
				propertyTypes: ['Townhomes', 'Condos'],
				hoaFee: { min: 150, max: 250 },
				features: ['Walk to shopping and restaurants', 'Great for young professionals', 'Low maintenance'],
				zipCode: '89138'
			},
			willows: {
				name: 'Willows Village',
				priceRange: { min: 550000, max: 750000 },
				description: 'Family-focused with top schools',
				propertyTypes: ['Single-family homes'],
				hoaFee: { min: 200, max: 300 },
				features: ['Arbor View High School (9/10 rated)', 'Willows Park and Pool', 'Single-family homes with yards'],
				schools: ['Arbor View High School'],
				zipCode: '89138'
			},
			trails: {
				name: 'Trails Village',
				priceRange: { min: 650000, max: 850000 },
				description: 'For active lifestyles near trails',
				propertyTypes: ['Single-family homes'],
				hoaFee: { min: 250, max: 350 },
				features: ['Direct access to Red Rock trails', 'Larger lots with mountain views', 'Near TPC Las Vegas golf'],
				zipCode: '89135'
			},
			canyons: {
				name: 'Canyons Village',
				priceRange: { min: 750000, max: 1200000 },
				description: 'Premium location with views',
				propertyTypes: ['Single-family homes', 'Gated communities'],
				hoaFee: { min: 300, max: 450 },
				features: ['Closest to Red Rock Canyon', 'Gated neighborhoods available', 'Near Downtown Summerlin'],
				zipCode: '89135'
			},
			ridges: {
				name: 'The Ridges',
				priceRange: { min: 2000000, max: 8000000 },
				description: 'Exclusive guard-gated luxury community',
				propertyTypes: ['Custom estates'],
				hoaFee: { min: 500, max: 1000 },
				features: ['Guard-gated security', 'Jack Nicklaus golf course', 'Mountain views', 'Custom estates'],
				golfCourse: 'Jack Nicklaus',
				zipCode: '89144'
			},
			summit: {
				name: 'The Summit',
				priceRange: { min: 1500000, max: 5000000 },
				description: 'Guard-gated luxury community',
				propertyTypes: ['Luxury homes', 'Custom estates'],
				hoaFee: { min: 400, max: 800 },
				features: ['Guard-gated security', 'Mountain views', 'Luxury amenities'],
				zipCode: '89144'
			}
		},
		distances: {
			toStrip: { min: 12, max: 18, unit: 'minutes' },
			toAirport: { min: 20, max: 25, unit: 'minutes' },
			toDowntownLV: { min: 15, max: 20, unit: 'minutes' },
			toRedRockCasino: { min: 3, max: 8, unit: 'minutes' },
			toDowntownSummerlin: { min: 0, max: 10, unit: 'minutes' }
		},
		hoaRules: [
			'RV/boat parking restrictions (no street parking)',
			'Landscaping requirements (approved plants list)',
			'Home color palettes (must use approved colors)',
			'Solar panel guidelines (HOA approval required)',
			'Pet restrictions (usually 3 pets maximum)'
		]
	},

	// Skye Canyon Data
	skyeCanyon: {
		priceRange: { min: 425000, max: 1500000 },
		hoaFee: { min: 90, max: 150, comparison: '40% lower than comparable Summerlin' },
		amenities: [
			'Skye Center: 10-acre park with events and fitness',
			'New schools with latest technology',
			'Growing value as community develops',
			'Easy access to Mount Charleston and Lee Canyon'
		],
		builders: {
			richmondAmerican: {
				name: 'Richmond American',
				priceRange: { min: 450000, max: 650000 },
				features: ['Best value pricing', 'Good standard features', 'Quick move-in homes available', '10-year warranty', 'Design center in Las Vegas']
			},
			centuryCommunities: {
				name: 'Century Communities',
				priceRange: { min: 425000, max: 575000 },
				features: ['Most affordable options', 'Online design center', 'Smart home features standard', 'Energy efficient designs']
			},
			lennar: {
				name: 'Lennar',
				priceRange: { min: 475000, max: 750000 },
				features: ["Everything's Included® pricing", 'Next Gen® suites for multigenerational', 'Smart home technology standard', 'Solar panels included']
			},
			tollBrothers: {
				name: 'Toll Brothers',
				priceRange: { min: 650000, max: 1100000 },
				features: ['Luxury finishes standard', 'Larger lots available', 'Extensive customization options', 'Premium locations in Skye Canyon']
			},
			christopherHomes: {
				name: 'Christopher Homes',
				priceRange: { min: 850000, max: 1500000 },
				features: ['Semi-custom options', 'Largest floor plans', 'Premium mountain views', 'Gated neighborhood sections']
			}
		},
		appreciationTrends: {
			'2020': 380000,
			'2023': 485000,
			'2025': 525000,
			'2027': 600000
		},
		distances: {
			toStrip: { value: 20, unit: 'minutes', via: 'US-95' },
			toMountCharleston: { value: 30, unit: 'minutes' },
			toLeeCanyon: { value: 35, unit: 'minutes' }
		},
		phase2: {
			launchYear: 2026,
			additionalHomes: 5000
		}
	},

	// Centennial Hills Data
	centennialHills: {
		priceRange: { min: 475000, max: 650000 },
		description: 'Newer master-planned communities with amenities and HOAs',
		appreciationRate: { min: 7, max: 9, unit: 'annually' },
		schools: [
			{ name: 'Decker Elementary', rating: 'A' },
			{ name: 'Escobedo Middle School', rating: 'A-' }
		],
		features: [
			'Newer construction (most built after 2000)',
			'Master-planned with parks and trails',
			'Strong appreciation (7-9% annually)',
			'Excellent schools',
			'Close to shopping and dining'
		],
		comparison: {
			vsNorthLasVegas: {
				centennialHills: 'Master-planned communities with amenities and HOAs',
				northLasVegas: 'More affordable options, larger lots, homes without HOA restrictions'
			}
		}
	},

	// North Las Vegas Data
	northLasVegas: {
		priceRange: { min: 350000, max: 450000 },
		description: 'More affordable options, larger lots, and homes without HOA restrictions',
		features: [
			'More house for your money',
			'Many no-HOA neighborhoods',
			'Larger lots (up to half-acre)',
			'Growing area with new development',
			'VA loan-friendly options'
		],
		comparison: {
			vsCentennialHills: {
				northLasVegas: 'More affordable, larger lots, no-HOA options',
				centennialHills: 'Master-planned with amenities, newer construction'
			}
		}
	},

	// Henderson Data
	henderson: {
		neighborhoods: {
			greenValleyRanch: {
				name: 'Green Valley Ranch',
				priceRange: { min: 500000, max: 800000 },
				features: ['Tree-lined streets', 'Established schools', 'Family-friendly']
			},
			sevenHills: {
				name: 'Seven Hills',
				priceRange: { min: 750000, max: 2000000 },
				features: ['Custom homes', 'Mountain views', 'Upscale living']
			},
			macDonaldHighlands: {
				name: 'MacDonald Highlands',
				priceRange: { min: 1000000, max: 5000000 },
				features: ['City views', 'DragonRidge Country Club', 'Luxury estates'],
				golfCourse: 'DragonRidge Country Club'
			}
		},
		distances: {
			toStrip: { value: 15, unit: 'minutes' },
			toAirport: { value: 18, unit: 'minutes' }
		}
	},

	// Property Tax Information
	propertyTax: {
		clarkCountyRate: 0.0074, // 0.74% of assessed value
		example: {
			homePrice: 650000,
			annualTax: 4800,
			note: 'Special districts may add $200-$500'
		}
	},

	// Desert Living Considerations
	desertLiving: {
		pool: {
			valueAdd: { min: 5, max: 10, unit: 'percent' },
			usageMonths: { min: 7, max: 8 },
			maintenanceCost: { min: 150, max: 200, unit: 'monthly' },
			prevalence: { over500k: 65, unit: 'percent' }
		},
		garage: {
			summerTemp: { min: 120, max: 140, unit: 'Fahrenheit' },
			solutions: [
				'Insulation',
				'Ventilation fans',
				'Mini-split AC units ($2,000-$4,000 installed)'
			]
		},
		utilities: {
			acHeating: 'Varies by home size',
			landscaping: 'Restrictions and costs vary by HOA',
			energyEfficiency: 'Important in desert climate'
		}
	},

	// Golf Course Premiums
	golfCourse: {
		premium: { min: 15, max: 25, unit: 'percent' },
		considerations: [
			'Early morning noise',
			'Restricted backyard modifications',
			'Cart path proximity'
		]
	},

	// Best Time to Move
	bestMovingTime: {
		season: 'October through April',
		bestMonths: ['October', 'November'],
		reason: 'Best selection and motivated sellers before holidays'
	},

	// School Districts
	schoolDistricts: {
		clarkCounty: {
			name: 'Clark County School District',
			serves: 'Most of Las Vegas area',
			topSchools: [
				{ name: 'Coronado High School', rating: 'A+' },
				{ name: 'Palo Verde High School', rating: 'A+' },
				{ name: 'Green Valley High School', rating: 'A' },
				{ name: 'Sig Rogich Middle School', rating: 'A+' },
				{ name: 'Vanderburg Elementary', rating: 'A+' }
			]
		},
		henderson: {
			name: 'Henderson Area Schools',
			rating: 'A+ rated district'
		},
		summerlin: {
			name: 'Summerlin Schools',
			topSchools: ['Arbor View High School (9/10 rated)']
		}
	},

	// Shopping Centers
	shoppingCenters: {
		downtownSummerlin: {
			name: 'Downtown Summerlin',
			shops: 125,
			description: '125+ shops and restaurants'
		},
		bocaPark: {
			name: 'Boca Park',
			location: 'Near The Paseos village'
		}
	},

	// Concierge Services
	conciergeServices: [
		'Pool inspection coordination',
		'HOA document management',
		'Builder relationship benefits',
		'Personalized neighborhood tours',
		'Architectural review coordination',
		'Virtual home tours',
		'Pre-move research',
		'Streamlined home buying'
	]
};

