import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.json();
		
		// Validate required fields
		if (!formData.name || !formData.email) {
			return json({ error: 'Name and email are required' }, { status: 400 });
		}
		
		// Here you would typically send an email or save to a database
		// For now, we'll just log the data and return success
		console.log('Contact form submission:', {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			propertyType: formData.propertyType,
			budget: formData.budget,
			timeframe: formData.timeframe,
			message: formData.message,
			timestamp: new Date().toISOString()
		});
		
		// In a real application, you would:
		// 1. Send an email notification to Dr. Jan Duffy
		// 2. Save the lead to a CRM system (FollowUp Boss)
		// 3. Send an auto-reply to the client
		// 4. Add to email marketing list if opted in
		
		return json({ 
			success: true, 
			message: 'Thank you for your message. Dr. Jan Duffy will contact you within 24 hours.' 
		});
		
	} catch (error) {
		console.error('Contact form error:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};
