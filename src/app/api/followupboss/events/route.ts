import { followUpBossService, trackPhoneCall, trackPropertyView } from '@/lib/followupboss';
import { type NextRequest, NextResponse } from 'next/server';

// POST /api/followupboss/events - Track events
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.contactId || !body.type) {
      return NextResponse.json(
        { success: false, message: 'Contact ID and event type are required' },
        { status: 400 }
      );
    }

    let result;

    // Handle different event types
    switch (body.type) {
      case 'property_view':
        if (!body.propertyId || !body.propertyAddress) {
          return NextResponse.json(
            {
              success: false,
              message: 'Property ID and address are required for property_view events',
            },
            { status: 400 }
          );
        }
        result = await trackPropertyView(body.contactId, body.propertyId, body.propertyAddress);
        break;

      case 'phone_call':
        if (!body.phoneNumber) {
          return NextResponse.json(
            { success: false, message: 'Phone number is required for phone_call events' },
            { status: 400 }
          );
        }
        result = await trackPhoneCall(body.contactId, body.phoneNumber);
        break;

      default:
        // Generic event tracking
        result = await followUpBossService.trackEvent({
          contactId: body.contactId,
          type: body.type,
          source: body.source || 'Website',
          data: body.data,
          timestamp: body.timestamp,
        });
        break;
    }

    if (result.success) {
      return NextResponse.json(result, { status: 201 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Error in POST /api/followupboss/events:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

// GET /api/followupboss/events - Get events for a contact
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get('contactId');

    if (!contactId) {
      return NextResponse.json(
        { success: false, message: 'Contact ID is required' },
        { status: 400 }
      );
    }

    // Get contact analytics which includes events
    const result = await followUpBossService.getContactAnalytics(contactId);

    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Error in GET /api/followupboss/events:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
