import axios, { type AxiosInstance } from 'axios';

// Follow Up Boss API Configuration
const FUB_API_BASE_URL = 'https://api.followupboss.com/v1';
const FUB_API_KEY = process.env.FOLLOWUPBOSS_API_KEY || 'fka_0N4mnNMa9KbIcCVPq5OVypkoG7P3VWGz1q';
const FUB_SYSTEM_NAME = 'DrJanDuffyWebsite';
const FUB_SYSTEM_KEY = process.env.FOLLOWUPBOSS_SYSTEM_KEY || '';

// Types for Follow Up Boss API
export interface FUBContact {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  source?: string;
  tags?: string[];
  notes?: string;
  customFields?: Record<string, any>;
  createdAt?: string;
  updatedAt?: string;
}

export interface FUBProperty {
  id?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  propertyType?: string;
  status?: string;
  mlsNumber?: string;
  description?: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface FUBEvent {
  id?: string;
  contactId: string;
  type: 'form_submission' | 'property_view' | 'phone_call' | 'email_open' | 'website_visit';
  source: string;
  data?: Record<string, any>;
  timestamp?: string;
}

export interface FUBResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

// Follow Up Boss API Service Class
class FollowUpBossService {
  private api: AxiosInstance;
  private cache: Map<string, { data: any; timestamp: number; ttl: number }> = new Map();

  constructor() {
    this.api = axios.create({
      baseURL: FUB_API_BASE_URL,
      headers: {
        Authorization: `Bearer ${FUB_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Custom system headers for higher rate limits
        'X-System': FUB_SYSTEM_NAME,
        'X-System-Key': FUB_SYSTEM_KEY,
      },
      timeout: 10000, // 10 second timeout
    });

    // Request interceptor for logging and error handling
    this.api.interceptors.request.use(
      (config) => {
        console.log(`[FUB API] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error('[FUB API] Request error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor for error handling and caching
    this.api.interceptors.response.use(
      (response) => {
        // Cache successful GET requests
        if (response.config.method === 'get' && response.status === 200) {
          this.setCache(response.config.url || '', response.data, 300); // 5 minutes
        }
        return response;
      },
      (error) => {
        console.error('[FUB API] Response error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  // Cache management
  private setCache(key: string, data: any, ttl = 300): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl * 1000, // Convert to milliseconds
    });
  }

  private getCache(key: string): any | null {
    const cached = this.cache.get(key);
    if (!cached) return null;

    const now = Date.now();
    if (now - cached.timestamp > cached.ttl) {
      this.cache.delete(key);
      return null;
    }

    return cached.data;
  }

  // Contact Management
  async createContact(contact: FUBContact): Promise<FUBResponse<FUBContact>> {
    try {
      const response = await this.api.post('/contacts', {
        ...contact,
        source: contact.source || 'Website',
        tags: [...(contact.tags || []), 'Website Lead', 'Dr. Jan Duffy'],
      });

      return {
        data: response.data,
        success: true,
        message: 'Contact created successfully',
      };
    } catch (error: any) {
      console.error('Error creating contact:', error);
      return {
        data: contact,
        success: false,
        message: 'Failed to create contact',
        errors: [error.response?.data?.message || error.message],
      };
    }
  }

  async getContact(contactId: string): Promise<FUBResponse<FUBContact>> {
    const cacheKey = `contact_${contactId}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return { data: cached, success: true };
    }

    try {
      const response = await this.api.get(`/contacts/${contactId}`);
      return {
        data: response.data,
        success: true,
      };
    } catch (error: any) {
      console.error('Error fetching contact:', error);
      return {
        data: {} as FUBContact,
        success: false,
        message: 'Failed to fetch contact',
        errors: [error.response?.data?.message || error.message],
      };
    }
  }

  async updateContact(
    contactId: string,
    updates: Partial<FUBContact>
  ): Promise<FUBResponse<FUBContact>> {
    try {
      const response = await this.api.put(`/contacts/${contactId}`, updates);

      // Clear cache for this contact
      this.cache.delete(`contact_${contactId}`);

      return {
        data: response.data,
        success: true,
        message: 'Contact updated successfully',
      };
    } catch (error: any) {
      console.error('Error updating contact:', error);
      return {
        data: {} as FUBContact,
        success: false,
        message: 'Failed to update contact',
        errors: [error.response?.data?.message || error.message],
      };
    }
  }

  async searchContacts(query: string): Promise<FUBResponse<FUBContact[]>> {
    const cacheKey = `contacts_search_${query}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return { data: cached, success: true };
    }

    try {
      const response = await this.api.get('/contacts', {
        params: { search: query },
      });

      return {
        data: response.data,
        success: true,
      };
    } catch (error: any) {
      console.error('Error searching contacts:', error);
      return {
        data: [],
        success: false,
        message: 'Failed to search contacts',
        errors: [error.response?.data?.message || error.message],
      };
    }
  }

  // Event Tracking
  async trackEvent(event: FUBEvent): Promise<FUBResponse<FUBEvent>> {
    try {
      const response = await this.api.post('/events', {
        ...event,
        timestamp: event.timestamp || new Date().toISOString(),
      });

      return {
        data: response.data,
        success: true,
        message: 'Event tracked successfully',
      };
    } catch (error: any) {
      console.error('Error tracking event:', error);
      return {
        data: event,
        success: false,
        message: 'Failed to track event',
        errors: [error.response?.data?.message || error.message],
      };
    }
  }

  // Property Management
  async createProperty(property: FUBProperty): Promise<FUBResponse<FUBProperty>> {
    try {
      const response = await this.api.post('/properties', property);

      return {
        data: response.data,
        success: true,
        message: 'Property created successfully',
      };
    } catch (error: any) {
      console.error('Error creating property:', error);
      return {
        data: property,
        success: false,
        message: 'Failed to create property',
        errors: [error.response?.data?.message || error.message],
      };
    }
  }

  async getProperties(filters?: {
    city?: string;
    state?: string;
    priceMin?: number;
    priceMax?: number;
    bedrooms?: number;
    propertyType?: string;
  }): Promise<FUBResponse<FUBProperty[]>> {
    const cacheKey = `properties_${JSON.stringify(filters || {})}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return { data: cached, success: true };
    }

    try {
      const response = await this.api.get('/properties', {
        params: filters,
      });

      return {
        data: response.data,
        success: true,
      };
    } catch (error: any) {
      console.error('Error fetching properties:', error);
      return {
        data: [],
        success: false,
        message: 'Failed to fetch properties',
        errors: [error.response?.data?.message || error.message],
      };
    }
  }

  // Lead Scoring and Analytics
  async getContactAnalytics(contactId: string): Promise<FUBResponse<any>> {
    const cacheKey = `analytics_${contactId}`;
    const cached = this.getCache(cacheKey);
    if (cached) {
      return { data: cached, success: true };
    }

    try {
      const response = await this.api.get(`/contacts/${contactId}/analytics`);
      return {
        data: response.data,
        success: true,
      };
    } catch (error: any) {
      console.error('Error fetching contact analytics:', error);
      return {
        data: {},
        success: false,
        message: 'Failed to fetch contact analytics',
        errors: [error.response?.data?.message || error.message],
      };
    }
  }

  // Utility Methods
  async healthCheck(): Promise<boolean> {
    try {
      await this.api.get('/health');
      return true;
    } catch (error) {
      console.error('Follow Up Boss API health check failed:', error);
      return false;
    }
  }

  // Clear cache (useful for testing or manual cache invalidation)
  clearCache(): void {
    this.cache.clear();
  }

  // Get cache statistics
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys()),
    };
  }
}

// Export singleton instance
export const followUpBossService = new FollowUpBossService();

// Export utility functions for common operations
export const createWebsiteLead = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;
  source?: string;
  propertyInterest?: string;
}) => {
  const contact: FUBContact = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    ...(formData.phone && { phone: formData.phone }),
    source: formData.source || 'Website Contact Form',
    ...(formData.message && { notes: formData.message }),
    tags: ['Website Lead', 'Dr. Jan Duffy', 'Las Vegas Real Estate'],
    customFields: {
      ...(formData.propertyInterest && { propertyInterest: formData.propertyInterest }),
      leadSource: 'Website',
      timestamp: new Date().toISOString(),
    },
  };

  const result = await followUpBossService.createContact(contact);

  // Track the form submission event
  if (result.success && result.data.id) {
    await followUpBossService.trackEvent({
      contactId: result.data.id,
      type: 'form_submission',
      source: 'Website Contact Form',
      data: {
        formType: 'contact',
        propertyInterest: formData.propertyInterest,
      },
    });
  }

  return result;
};

export const trackPropertyView = async (
  contactId: string,
  propertyId: string,
  propertyAddress: string
) => {
  return await followUpBossService.trackEvent({
    contactId,
    type: 'property_view',
    source: 'Website Property Listing',
    data: {
      propertyId,
      propertyAddress,
      timestamp: new Date().toISOString(),
    },
  });
};

export const trackPhoneCall = async (contactId: string, phoneNumber: string) => {
  return await followUpBossService.trackEvent({
    contactId,
    type: 'phone_call',
    source: 'Website Click-to-Call',
    data: {
      phoneNumber,
      timestamp: new Date().toISOString(),
    },
  });
};

export default followUpBossService;
