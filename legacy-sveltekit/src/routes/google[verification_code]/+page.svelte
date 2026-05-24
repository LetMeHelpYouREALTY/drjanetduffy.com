<!--
	Google Search Console Verification Page
	This page is used to verify ownership of the website in Google Search Console.
	
	To use this page:
	1. Go to Google Search Console: https://search.google.com/search-console
	2. Add your property (www.drjanetduffy.com)
	3. Choose "HTML tag" verification method
	4. Copy the content attribute value from the meta tag (e.g., "abc123xyz")
	5. Update the route parameter in the URL: /google[abc123xyz]
	6. Or update the meta tag below with your verification code
-->

<svelte:head>
	<!-- Google Search Console Verification -->
	<!-- Replace YOUR_VERIFICATION_CODE with the code from Google Search Console -->
	<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
	
	<title>Google Search Console Verification</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="container mx-auto px-4 py-16 text-center">
	<h1 class="text-2xl font-bold mb-4">Google Search Console Verification</h1>
	<p class="text-gray-600">This page is used for Google Search Console verification.</p>
	<p class="text-sm text-gray-500 mt-4">If you can see this page, verification is set up correctly.</p>
</div>

