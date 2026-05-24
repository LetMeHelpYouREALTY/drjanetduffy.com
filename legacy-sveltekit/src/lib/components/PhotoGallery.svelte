<script lang="ts">
	export type PhotoItem = {
		src: string;
		alt: string;
		caption?: string;
		tagline?: string;
	};

	export let title: string | undefined;
	export let subtitle: string | undefined;
	export let photos: PhotoItem[] = [];
</script>

<section class="w-full">
	{#if title || subtitle}
		<div class="text-center mb-8">
			{#if title}
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
			{/if}
			{#if subtitle}
				<p class="mt-2 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
					{subtitle}
				</p>
			{/if}
		</div>
	{/if}

	{#if photos.length > 0}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each photos as photo (photo.src)}
				<figure class="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
					<a href={photo.src} target="_blank" rel="noopener noreferrer">
						<img
							src={photo.src}
							alt={photo.alt}
							loading="lazy"
							decoding="async"
							class="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
						/>
					</a>
					{#if photo.caption || photo.tagline}
						<figcaption class="p-4 space-y-1">
							{#if photo.caption}
								<p class="text-sm font-medium text-gray-900">{photo.caption}</p>
							{/if}
							{#if photo.tagline}
								<p class="text-xs text-gray-500">{photo.tagline}</p>
							{/if}
						</figcaption>
					{/if}
				</figure>
			{/each}
		</div>
	{:else}
		<p class="text-center text-gray-500 text-sm">
			No photos have been added yet. Provide a <code>photos</code> array to display your gallery.
		</p>
	{/if}
</section>


