import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { XMLParser } from 'fast-xml-parser';

interface RSSItem {
	title: string;
	link: string;
	description: string;
	pubDate: string;
	author?: string;
	guid?: string;
}

interface RSSFeed {
	title: string;
	link: string;
	description: string;
	items: RSSItem[];
}

/**
 * Parse RSS XML into structured data
 */
function parseRSS(xmlText: string): RSSFeed {
	const parser = new XMLParser({
		ignoreAttributes: false,
		attributeNamePrefix: '@_',
		textNodeName: '#text',
		parseAttributeValue: true,
		trimValues: true,
	});
	
	const result = parser.parse(xmlText);
	const rss = result.rss || result.feed;
	const channel = rss?.channel || rss;
	
	if (!channel) {
		throw new Error('Invalid RSS feed format');
	}
	
	const title = channel.title || '';
	const link = channel.link || '';
	const description = channel.description || '';
	
	const items: RSSItem[] = [];
	const rawItems = Array.isArray(channel.item) ? channel.item : channel.item ? [channel.item] : [];
	
	rawItems.forEach((item: any) => {
		items.push({
			title: item.title || '',
			link: item.link || '',
			description: item.description || '',
			pubDate: item.pubDate || item['dc:date'] || '',
			author: item.author || item['dc:creator'] || undefined,
			guid: typeof item.guid === 'string' ? item.guid : item.guid?.['#text'] || item.guid?.['@_isPermaLink'] || undefined,
		});
	});
	
	return {
		title,
		link,
		description,
		items,
	};
}

export const GET: RequestHandler = async ({ url }) => {
	const feedUrl = url.searchParams.get('url');
	
	if (!feedUrl) {
		return json({ error: 'URL parameter is required' }, { status: 400 });
	}
	
	try {
		// Fetch RSS feed
		const response = await fetch(feedUrl, {
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; RSS Reader)',
			},
		});
		
		if (!response.ok) {
			return json(
				{ error: `Failed to fetch RSS feed: ${response.statusText}` },
				{ status: response.status }
			);
		}
		
		const xmlText = await response.text();
		const feed = parseRSS(xmlText);
		
		return json(feed);
	} catch (error) {
		console.error('RSS fetch error:', error);
		return json(
			{ error: error instanceof Error ? error.message : 'Unknown error' },
			{ status: 500 }
		);
	}
};

