<script>
/**
 * FAQ Schema component for Answer Engine Optimization (AEO)
 * Provides structured Q&A data that AI engines can extract
 */

export let faqs = [];

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	"mainEntity": faqs.map(faq => ({
		"@type": "Question",
		"name": faq.question,
		"acceptedAnswer": {
			"@type": "Answer",
			"text": faq.answer
		}
	}))
};
</script>

<svelte:head>
	{#if faqs.length > 0}
		<script type="application/ld+json">
			{JSON.stringify(faqSchema)}
		</script>
	{/if}
</svelte:head>

{#if faqs.length > 0}
	<div class="faq-section">
		<h2 class="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h2>
		<div class="space-y-6">
			{#each faqs as faq, index}
				<div class="faq-item bg-white rounded-lg shadow-md p-6" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
					<h3 class="text-xl font-semibold mb-3 text-gray-800" itemprop="name">{faq.question}</h3>
					<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
						<div class="text-gray-600" itemprop="text">{@html faq.answer}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.faq-section {
		margin: 3rem 0;
	}

	.faq-item {
		transition: transform 0.2s;
	}

	.faq-item:hover {
		transform: translateY(-2px);
	}
</style>
