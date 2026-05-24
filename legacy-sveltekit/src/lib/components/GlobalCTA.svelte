<script lang="ts">
	import { Mail, Calendar, MapPin } from 'lucide-svelte';
</script>

<section class="section bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 text-white">
	<div class="container-premium">
		<div class="max-w-4xl mx-auto text-center space-y-6">
			<h2 class="text-3xl md:text-4xl font-bold">
				Ready to Explore Summerlin, Skye Canyon, Centennial Hills, or North Las Vegas?
			</h2>
			<p class="text-lg text-white/90 leading-relaxed">
				I'll provide personalized neighborhood tours and handle every detail of your transaction. From
				showings and negotiations to inspections and HOA documents, you’ll have a concierge-level guide
				on your side.
			</p>

			<div
				class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm md:text-base text-white/95 text-left"
			>
				<div class="flex items-start gap-3 justify-center sm:justify-start">
					<div>
						<p class="font-semibold">Call / Text</p>
						<p class="font-medium">(702) 766-7668</p>
					</div>
				</div>

				<div class="flex items-start gap-3 justify-center sm:justify-start">
					<div
						class="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20"
					>
						<Mail class="w-4 h-4" />
					</div>
					<div>
						<p class="font-semibold">Email</p>
						<p class="font-medium break-all">info@DrJanetDuffy.com</p>
					</div>
				</div>

				<div class="flex items-start gap-3 justify-center sm:justify-start">
					<div
						class="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20"
					>
						<Calendar class="w-4 h-4" />
					</div>
					<div>
						<p class="font-semibold">Book Online</p>
						<p class="font-medium">
							<a
								href="https://calendly.com/drjanduffy/appointment"
								target="_blank"
								rel="noopener noreferrer"
								class="underline decoration-white/60 hover:decoration-white"
							>
								Schedule your consultation
							</a>
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3 justify-center sm:justify-start">
					<div
						class="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/20"
					>
						<MapPin class="w-4 h-4" />
					</div>
					<div>
						<p class="font-semibold">Serving</p>
						<p class="font-medium">All Las Vegas Valley communities</p>
					</div>
				</div>
			</div>

			<p class="text-lg text-white/90 leading-relaxed pt-2">
				Let me help you find your perfect Las Vegas home.
			</p>
		</div>
	</div>
</section>


