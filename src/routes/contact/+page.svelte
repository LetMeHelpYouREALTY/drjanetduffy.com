<script lang="ts">
import ContactForm from '$lib/components/ContactForm.svelte';
import SEO from '$lib/components/SEO.svelte';
import { createBreadcrumbSchema } from '$lib/utils/schema';

// Breadcrumb and ContactPage schema
const breadcrumbSchema = createBreadcrumbSchema([
	{ name: 'Home', url: 'https://drjanduffy.com' },
	{ name: 'Contact' }
]);

const contactPageSchema = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	mainEntity: {
		'@type': 'RealEstateAgent',
		name: 'Dr. Janet Duffy',
		telephone: '+1-702-222-1964',
		email: 'drduffy@bhhsnv.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Las Vegas',
			addressRegion: 'NV',
			postalCode: '89144',
			addressCountry: 'US'
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '09:00',
				closes: '18:00'
			},
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: 'Saturday',
				opens: '10:00',
				closes: '16:00'
			}
		]
	}
};

const pageSchema = {
	'@context': 'https://schema.org',
	'@graph': [breadcrumbSchema, contactPageSchema]
};

const seoData = {
	title: 'Contact Dr. Janet Duffy, REALTOR® | 702-222-1964 | West Summerlin Expert',
	description: 'Contact Dr. Janet Duffy for luxury Las Vegas real estate expertise. Direct: 702-222-1964 | drduffy@bhhsnv.com. West Summerlin specialist for executives and California relocations. Available 7 days a week.',
	keywords: 'Dr. Janet Duffy REALTOR, contact, Berkshire Hathaway Nevada Properties, luxury Las Vegas real estate, West Summerlin, executive relocation, 702-222-1964',
	canonical: 'https://drjanduffy.com/contact',
	schema: pageSchema
};
</script>

<SEO {...seoData} />

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4 text-vegas-deep-900">Contact Dr. Janet Duffy, REALTOR<sup>®</sup></h1>
			<p class="text-xl text-vegas-deep-700">
				Ready to discover your next Summerlin address? Let's discuss your luxury real estate needs.
			</p>
		</div>
		
		<div class="grid md:grid-cols-2 gap-12">
			<!-- Contact Form -->
			<div>
				<ContactForm 
					title="Send a Message" 
					subtitle="Ready to start your real estate journey? Contact me today!"
					showPhone={true}
				/>
			</div>
			
			<!-- Contact Information -->
			<div>
				<h2 class="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
				
				<div class="space-y-6">
					<div>
						<h3 class="font-semibold text-gray-800">Phone</h3>
						<a href="tel:+17022221964" class="text-vegas-gold-600 hover:text-vegas-gold-700 font-semibold text-lg">702-222-1964</a>
						<p class="text-sm text-gray-500">Available 7 days a week</p>
					</div>
					
					<div>
						<h3 class="font-semibold text-gray-800">Email</h3>
						<a href="mailto:drduffy@bhhsnv.com" class="text-vegas-gold-600 hover:text-vegas-gold-700">drduffy@bhhsnv.com</a>
						<p class="text-sm text-gray-500">Response within 24 hours</p>
					</div>
					
					<div>
						<h3 class="font-semibold text-gray-800">Office Location</h3>
						<p class="text-gray-600">Berkshire Hathaway Nevada Properties</p>
						<p class="text-sm text-gray-500">Serving West Summerlin (89138, 89144, 89135)</p>
					</div>
					
					<div>
						<h3 class="font-semibold text-gray-800">Office Hours</h3>
						<div class="text-sm text-gray-600 space-y-1">
							<p>Monday - Friday: 9:00 AM - 6:00 PM</p>
							<p>Saturday: 10:00 AM - 4:00 PM</p>
							<p>Sunday: By Appointment</p>
						</div>
					</div>
				</div>
				
				<div class="mt-8 p-6 bg-gray-50 rounded-lg">
					<h3 class="font-semibold text-gray-800 mb-3">Why Choose Dr. Jan Duffy?</h3>
					<ul class="space-y-2 text-sm text-gray-600">
						<li>Local market expertise</li>
						<li>Proven track record</li>
						<li>Personalized service</li>
						<li>Free consultation</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
