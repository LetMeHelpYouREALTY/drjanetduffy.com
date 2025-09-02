import { type NextRequest, NextResponse } from 'next/server';
import { followUpBossService, createWebsiteLead } from '@/lib/followupboss';

// GET /api/followupboss/contacts - Search contacts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const contactId = searchParams.get('id');

    if (contactId) {
      // Get specific contact
      const result = await followUpBossService.getContact(contactId);
      return NextResponse.json(result);
    } else if (query) {
      // Search contacts
      const result = await followUpBossService.searchContacts(query);
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { success: false, message: 'Query parameter or contact ID required' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error in GET /api/followupboss/contacts:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/followupboss/contacts - Create new contact
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { success: false, message: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    // Create contact using the utility function
    const result = await createWebsiteLead({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      phone: body.phone,
      message: body.message,
      source: body.source,
      propertyInterest: body.propertyInterest,
    });

    if (result.success) {
      return NextResponse.json(result, { status: 201 });
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Error in POST /api/followupboss/contacts:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT /api/followupboss/contacts - Update contact
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get('id');

    if (!contactId) {
      return NextResponse.json(
        { success: false, message: 'Contact ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const result = await followUpBossService.updateContact(contactId, body);

    if (result.success) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(result, { status: 400 });
    }
  } catch (error) {
    console.error('Error in PUT /api/followupboss/contacts:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
