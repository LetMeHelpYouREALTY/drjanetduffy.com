<script>
import ContactForm from '$lib/components/ContactForm.svelte';
import { Mail, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy</title>
	<meta name="description" content="Contact Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy for concierge-level guidance on buying, selling, or relocating to Las Vegas. Call (702) 766-7668 or email info@DrJanetDuffy.com." />
	<meta name="keywords" content="Dr. Jan Duffy REALTOR, luxury Las Vegas real estate, West Summerlin, executive relocation, (702) 766-7668" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.drjanetduffy.com/contact" />
	<meta property="og:title" content="Contact Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy" />
	<meta property="og:description" content="Direct line to Las Vegas Luxury & Relocation REALTOR Dr. Janet Duffy for luxury moves, executive relocation, and local home sales." />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://www.drjanetduffy.com/contact" />
	<meta property="twitter:title" content="Contact Las Vegas Luxury &amp; Relocation REALTOR | Dr. Janet Duffy" />
	<meta property="twitter:description" content="Contact Las Vegas Luxury & Relocation REALTOR for expert guidance on your Las Vegas move." />
	
	<!-- Schema.org structured data -->
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "ContactPage",
		"mainEntity": {
			"@type": "RealEstateAgent",
			"name": "Dr. Jan Duffy",
			"telephone": "(702) 766-7668",
			"email": "info@DrJanetDuffy.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "1980 Festival Plaza Drive, Suite 300",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"postalCode": "89135",
				"addressCountry": "US"
			}
		}
	}
	</script>
</svelte:head>

<section class="section relative overflow-hidden" style="background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);">
	<!-- Decorative background elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
		<div class="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
	</div>
	
	<div class="container-premium relative z-10">
		<div class="grid lg:grid-cols-5 gap-10 items-center mb-16">
			<div class="lg:col-span-3 text-center lg:text-left">
				<div class="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
					<MessageCircle class="w-4 h-4" />
					<span>Let's Connect</span>
				</div>
				<h1 class="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900" style="letter-spacing: -0.03em;">
					Contact Your Las Vegas Luxury &amp; Relocation REALTOR®
				</h1>
				<div class="w-24 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent lg:mx-0 mx-auto mb-6"></div>
				<p class="text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
					Your questions, timelines, and goals deserve more than a portal contact form. This page is your direct line to a seasoned Las Vegas REALTOR® who will listen carefully, translate concerns into clear next steps, and protect your interests at every stage of the process. Whether you are exploring a possible move in the next year, preparing to list a luxury estate, relocating from another state, or simply wondering how today’s market affects your equity, reach out and we will build a plan together—no pressure, no scripts, just honest guidance tailored to you.
				</p>
			</div>
			<div class="lg:col-span-2">
				<figure class="overflow-hidden rounded-2xl shadow-xl border border-gray-100">
					<img
						src="/images/contact/dr-duffy-consultation.jpg"
						alt="Dr. Janet Duffy meeting with clients in a modern Las Vegas office"
						class="h-64 w-full object-cover md:h-80"
						loading="lazy"
					/>
				</figure>
			</div>
		</div>
		
		<div class="grid-premium md:grid-cols-2 gap-8 lg:gap-12">
			<!-- Enhanced Contact Form -->
			<div class="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-200/50 transform transition-all duration-300 hover:shadow-3xl">
				<ContactForm 
					title="Send a Message" 
					subtitle="Tell me a bit about your goals, timing, and preferred neighborhoods so I can prepare thoughtful answers before we talk."
					showPhone={true}
				/>
			</div>
			
			<!-- Enhanced Contact Information -->
			<div class="space-y-10">
				<div class="bg-gradient-to-br from-white via-primary-50/20 to-white rounded-3xl shadow-xl p-8 border border-gray-200/50 backdrop-blur-sm">
					<h2 class="font-display text-3xl font-bold mb-4 text-gray-900" style="letter-spacing: -0.02em;">How Can You Get in Touch With Dr. Janet Duffy?</h2>
					<p class="text-gray-700 mb-8 leading-relaxed">
						Get in touch with Dr. Janet Duffy by phone at (702) 766-7668 (available 7 days a week), email at info@DrJanetDuffy.com (response within 24 hours), visiting the office at 1980 Festival Plaza Drive Suite 300 in Las Vegas, or using the contact form to discuss your Las Vegas real estate needs.
					</p>
					
					<div class="space-y-6">
						<a href="tel:+17027667668" class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-md">
							<div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
							</div>
							<div class="flex-1">
								<h3 class="font-display text-xl font-bold mb-1 text-gray-900">Phone</h3>
								<p class="text-primary-600 hover:text-primary-700 font-bold text-xl transition-colors">(702) 766-7668</p>
								<p class="text-sm text-gray-600 mt-1">Available 7 days a week</p>
							</div>
						</a>
						
						<a href="mailto:info@DrJanetDuffy.com" class="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-md">
							<div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
								<Mail class="w-7 h-7 text-white" />
							</div>
							<div class="flex-1">
								<h3 class="font-display text-xl font-bold mb-1 text-gray-900">Email</h3>
								<p class="text-primary-600 hover:text-primary-700 font-semibold transition-colors break-all">info@DrJanetDuffy.com</p>
								<p class="text-sm text-gray-600 mt-1">Response within 24 hours</p>
							</div>
						</a>
						
						<div class="flex items-start gap-4 p-4 rounded-2xl">
							<div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
								<MapPin class="w-7 h-7 text-white" />
							</div>
							<div class="flex-1">
								<h3 class="font-display text-xl font-bold mb-1 text-gray-900">Office Location</h3>
								<p class="text-gray-700 font-semibold">1980 Festival Plaza Drive, Suite 300</p>
								<p class="text-sm text-gray-600 mt-1">Las Vegas, NV 89135</p>
							</div>
						</div>
						
						<div class="flex items-start gap-4 p-4 rounded-2xl">
							<div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
								<Clock class="w-7 h-7 text-white" />
							</div>
							<div class="flex-1">
								<h3 class="font-display text-xl font-bold mb-2 text-gray-900">Office Hours</h3>
								<div class="text-gray-700 space-y-1.5">
									<p class="font-medium flex items-center gap-2">
										<span class="w-2 h-2 bg-green-500 rounded-full"></span>
										Monday - Friday: 9:00 AM - 6:00 PM
									</p>
									<p class="font-medium flex items-center gap-2">
										<span class="w-2 h-2 bg-green-500 rounded-full"></span>
										Saturday: 10:00 AM - 4:00 PM
									</p>
									<p class="font-medium flex items-center gap-2">
										<span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
										Sunday: By Appointment
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Why Work With Dr. Duffy -->
				<div class="bg-gradient-to-br from-white via-primary-50/20 to-white rounded-3xl shadow-xl p-8 border border-gray-200/50 backdrop-blur-sm">
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">Why Should You Choose Dr. Janet Duffy?</h3>
					<p class="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
						Choose Dr. Janet Duffy for local market expertise, a proven negotiation track record, and a concierge-style approach that treats your move like a project with clear milestones and proactive communication. I have helped executives, medical professionals, military families, first-time buyers, and seasoned investors navigate complex transactions in every corner of the valley—from Summerlin and Skye Canyon to Henderson and North Las Vegas. When you reach out, you are not dropped into a generic team queue; you work directly with a trusted advisor who will keep you informed and advocated for at every step.
					</p>
					<ul class="space-y-4">
						<li class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
								<CheckCircle class="w-6 h-6 text-green-600" />
							</div>
							<span class="text-gray-700 font-semibold">Local market expertise across Summerlin, Skye Canyon, Henderson, and North Las Vegas</span>
						</li>
						<li class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
								<CheckCircle class="w-6 h-6 text-green-600" />
							</div>
							<span class="text-gray-700 font-semibold">Proven track record of multiple-offer wins and top-dollar sales</span>
						</li>
						<li class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
								<CheckCircle class="w-6 h-6 text-green-600" />
							</div>
							<span class="text-gray-700 font-semibold">Personalized service for buyers, sellers, investors, and relocation clients</span>
						</li>
						<li class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
							<div class="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
								<CheckCircle class="w-6 h-6 text-green-600" />
							</div>
							<span class="text-gray-700 font-semibold">Complimentary, no-pressure consultation to explore your options</span>
						</li>
					</ul>
				</div>

				<!-- What to Expect When You Reach Out -->
				<div class="bg-gradient-to-br from-white via-primary-50/10 to-white rounded-3xl shadow-xl p-8 border border-gray-200/60 backdrop-blur-sm">
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">What Happens After You Reach Out?</h3>
					<p class="text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
						When you contact me, you can expect a calm, structured process—not a sales pitch. I typically reply within a few business hours (often sooner), and our first conversation focuses on listening. We will talk through your timeline, budget range, communities of interest, and any non-negotiables such as school districts, commute times, or accessibility needs. From there, I outline next steps customized to your situation: a preliminary home search, a home-value estimate, a staging walkthrough, or a relocation planning call.
					</p>
					<p class="text-gray-700 leading-relaxed text-sm md:text-base">
						You will leave that initial conversation with a clear sense of whether now is the right time to move, what preparation work (if any) is needed, and what to expect from me in terms of follow up. Many clients simply want a professional second opinion before making a big decision; you are always welcome to reach out even if you are still in the early “what if?” stage.
					</p>
				</div>

				<!-- FAQs -->
				<div class="bg-gradient-to-br from-white via-primary-50/15 to-white rounded-3xl shadow-xl p-8 border border-gray-200/60 backdrop-blur-sm">
					<h3 class="font-display text-2xl font-bold mb-4 text-gray-900">Contact FAQs</h3>
					<ul class="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
						<li>
							<h4 class="font-semibold text-gray-900 mb-1">Do I need to be ready to buy or sell right away to contact you?</h4>
							<p>
								No. Many of my best client relationships begin 6–18 months before a move. Early conversations give us time to organize financing, decluttering, repairs, or neighborhood research at a relaxed pace.
							</p>
						</li>
						<li>
							<h4 class="font-semibold text-gray-900 mb-1">Is there a fee for an initial consultation?</h4>
							<p>
								Initial consultations are complimentary. My goal is to provide clarity and value up front so you can decide if we are a good fit to work together.
							</p>
						</li>
						<li>
							<h4 class="font-semibold text-gray-900 mb-1">Can we meet via Zoom if I am out of state?</h4>
							<p>
								Yes. I frequently meet with clients via Zoom, FaceTime, or phone before they ever visit Las Vegas in person. We can review maps, listings, and market data together on screen.
							</p>
						</li>
						<li>
							<h4 class="font-semibold text-gray-900 mb-1">What information should I include in the contact form?</h4>
							<p>
								If possible, share your ideal timeframe, price range, preferred communities, and whether you need to sell before you buy. The more context you provide, the more tailored and useful my initial recommendations will be.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Who I Serve -->
<section class="section bg-white">
	<div class="container-premium max-w-5xl mx-auto">
		<h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">Who Typically Reaches Out to Dr. Janet Duffy?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			People contact me at many different stages of life and business. Some are first-time buyers who have been renting in Las Vegas for years and want to understand what homeownership really looks like. Others are West Coast executives exploring a tax-friendly move, medical professionals interviewing with local hospitals, or families associated with Nellis and Creech who need reliable timelines and clear expectations. I also hear from long-time local homeowners who simply want an honest opinion about downsizing, investing in a second home, or helping adult children purchase their first property.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			Investors and second-home buyers reach out with a different set of questions: cap rates, rent ceilings, HOA rental policies, and long-term appreciation prospects for specific communities. I welcome those conversations and can loop in trusted lenders or tax professionals when the discussion touches financing structures or 1031 exchanges. No matter which category you fall into, the throughline is the same—you want a calm, prepared professional who will handle the details and tell you the truth, even when that means recommending that you wait, adjust your plan, or explore a different neighborhood.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed">
			If you do not see your situation reflected on this list, that is okay. Use the form or call directly to describe what you are considering, and I will let you know how I can help—or introduce you to another specialist if that would serve you better.
		</p>
	</div>
</section>

<!-- Virtual & Out-of-State Support -->
<section class="section bg-gray-50">
	<div class="container-premium max-w-5xl mx-auto">
		<h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">How Do Virtual and Out-of-State Consultations Work?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			Many of my clients begin their Las Vegas real estate journey from another city or state. If you are not local, we will schedule a Zoom or video call where I can share my screen, walk you through maps, show you driving distances, and pull up live listings or market stats in real time. You can invite spouses, parents, relocation reps, or financial advisors to join the call so everyone hears the same information and can ask questions on the spot.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			After our initial virtual consultation, I typically create a personalized “Las Vegas orientation kit” for you. This may include neighborhood guides, video drives through communities that match your criteria, sample properties with notes about why they work or do not work, and a timeline laying out what needs to happen before your first in-person trip. When you are ready to visit, we can compress neighborhood tours, property showings, and lender meetings into a focused one- or two-day schedule so you use your travel time efficiently.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed">
			If you need to buy remotely, I provide detailed video tours, measure spaces on camera, listen for ambient noise, and point out both the highlights and the flaws of each property so you can make a fully informed decision from a distance.
		</p>
	</div>
</section>

<!-- Preparing for Our Conversation -->
<section class="section bg-white">
	<div class="container-premium max-w-5xl mx-auto">
		<h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">What Should You Prepare Before Our First Conversation?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			You do not need a perfectly polished plan before you reach out, but a few details will help us move quickly. If you are buying, think about your comfortable monthly payment range, ideal move-in date, preferred areas or school zones, and any absolute must-haves such as single-story living, a pool, or multi-gen space. If you are selling, having a rough idea of your remaining loan balance, recent upgrades, and any known repairs can help us estimate net proceeds and timeline more accurately.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			It can also be helpful to list your top three worries in advance—perhaps timing, affordability, or navigating an interstate move. When I know what is keeping you up at night, I can address those concerns directly and prioritize solutions that bring immediate relief. You are welcome to attach notes in the contact form or email them ahead of our call so I can review before we speak.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed">
			If you prefer to simply start with a conversation and figure things out together, that is perfectly fine as well. My role is to meet you where you are and move at a pace that feels comfortable and respectful.
		</p>
	</div>
</section>

<!-- Urgent Timelines -->
<section class="section bg-gray-50">
	<div class="container-premium max-w-5xl mx-auto">
		<h2 class="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-900 text-center">What If You Have an Urgent Timeline or Complex Situation?</h2>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			Life does not always operate on a relaxed schedule. Sometimes you receive a job offer that requires a fast relocation, a deployment order with specific reporting dates, or a life event that makes your current home no longer practical. If you are on a tight timeline, please mention that in the subject line or opening line of your message so I know to prioritize your response. I will quickly outline what is realistic, which steps must happen immediately, and where we can build in flexibility.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-6">
			For complex situations—such as selling an inherited property, coordinating with multiple decision makers, or balancing a 1031 exchange window—I work closely with attorneys, CPAs, and other professionals as needed. Clear communication and careful calendar planning become even more important in these scenarios, and I will make sure everyone involved understands their role and deadlines.
		</p>
		<p class="text-lg text-gray-700 leading-relaxed mb-2">
			However straightforward or complicated your situation feels today, there is almost always a structured way forward. Reaching out is the first step toward clarity.
		</p>
	</div>
</section>
