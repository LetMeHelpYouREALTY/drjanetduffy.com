import type { FUBContact, FUBEvent, FUBProperty } from '../lib/followupboss';
import { useCallback, useEffect, useState } from 'react';

interface UseFollowUpBossReturn {
  // Contact operations
  createContact: (contact: Omit<FUBContact, 'id'>) => Promise<FUBContact | null>;
  getContact: (contactId: string) => Promise<FUBContact | null>;
  updateContact: (contactId: string, updates: Partial<FUBContact>) => Promise<FUBContact | null>;
  searchContacts: (query: string) => Promise<FUBContact[]>;

  // Event tracking
  trackEvent: (event: Omit<FUBEvent, 'id'>) => Promise<boolean>;
  trackPropertyView: (
    contactId: string,
    propertyId: string,
    propertyAddress: string
  ) => Promise<boolean>;
  trackPhoneCall: (contactId: string, phoneNumber: string) => Promise<boolean>;

  // Property operations
  getProperties: (filters?: {
    city?: string;
    state?: string;
    priceMin?: number;
    priceMax?: number;
    bedrooms?: number;
    propertyType?: string;
  }) => Promise<FUBProperty[]>;

  // Utility
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
}

export const useFollowUpBoss = (): UseFollowUpBossReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const handleApiCall = useCallback(
    async <T>(
      apiCall: () => Promise<{ success: boolean; data: T; message?: string; errors?: string[] }>
    ): Promise<T | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await apiCall();

        if (result.success) {
          return result.data;
        }

        setError(result.message || 'API call failed');
        return null;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(errorMessage);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Contact operations
  const createContact = useCallback(
    async (contact: Omit<FUBContact, 'id'>): Promise<FUBContact | null> => {
      return handleApiCall(async () => {
        const response = await fetch('/api/followupboss/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        });

        return await response.json();
      });
    },
    [handleApiCall]
  );

  const getContact = useCallback(
    async (contactId: string): Promise<FUBContact | null> => {
      return handleApiCall(async () => {
        const response = await fetch(
          `/api/followupboss/contacts?id=${encodeURIComponent(contactId)}`
        );
        return await response.json();
      });
    },
    [handleApiCall]
  );

  const updateContact = useCallback(
    async (contactId: string, updates: Partial<FUBContact>): Promise<FUBContact | null> => {
      return handleApiCall(async () => {
        const response = await fetch(
          `/api/followupboss/contacts?id=${encodeURIComponent(contactId)}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updates),
          }
        );

        return await response.json();
      });
    },
    [handleApiCall]
  );

  const searchContacts = useCallback(
    async (query: string): Promise<FUBContact[]> => {
      const result = await handleApiCall(async () => {
        const response = await fetch(`/api/followupboss/contacts?q=${encodeURIComponent(query)}`);
        return await response.json();
      });

      return (result as FUBContact[]) || [];
    },
    [handleApiCall]
  );

  // Event tracking
  const trackEvent = useCallback(
    async (event: Omit<FUBEvent, 'id'>): Promise<boolean> => {
      const result = await handleApiCall(async () => {
        const response = await fetch('/api/followupboss/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event),
        });

        return await response.json();
      });

      return result !== null;
    },
    [handleApiCall]
  );

  const trackPropertyView = useCallback(
    async (contactId: string, propertyId: string, propertyAddress: string): Promise<boolean> => {
      return trackEvent({
        contactId,
        type: 'property_view',
        source: 'Website Property Listing',
        data: {
          propertyId,
          propertyAddress,
          timestamp: new Date().toISOString(),
        },
      });
    },
    [trackEvent]
  );

  const trackPhoneCall = useCallback(
    async (contactId: string, phoneNumber: string): Promise<boolean> => {
      return trackEvent({
        contactId,
        type: 'phone_call',
        source: 'Website Click-to-Call',
        data: {
          phoneNumber,
          timestamp: new Date().toISOString(),
        },
      });
    },
    [trackEvent]
  );

  // Property operations
  const getProperties = useCallback(
    async (filters?: {
      city?: string;
      state?: string;
      priceMin?: number;
      priceMax?: number;
      bedrooms?: number;
      propertyType?: string;
    }): Promise<FUBProperty[]> => {
      const result = await handleApiCall(async () => {
        const params = new URLSearchParams();

        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
              params.append(key, value.toString());
            }
          });
        }

        const response = await fetch(`/api/followupboss/properties?${params.toString()}`);
        return await response.json();
      });

      return (result as FUBProperty[]) || [];
    },
    [handleApiCall]
  );

  return {
    // Contact operations
    createContact,
    getContact,
    updateContact,
    searchContacts,

    // Event tracking
    trackEvent,
    trackPropertyView,
    trackPhoneCall,

    // Property operations
    getProperties,

    // Utility
    isLoading,
    error,
    clearError,
  };
};

// Hook for tracking page views and user interactions
export const useFollowUpBossTracking = (contactId?: string) => {
  const { trackEvent } = useFollowUpBoss();

  // Track page view
  useEffect(() => {
    if (contactId) {
      trackEvent({
        contactId,
        type: 'website_visit',
        source: 'Website',
        data: {
          page: window.location.pathname,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        },
      });
    }
  }, [contactId, trackEvent]);

  // Track form interactions
  const trackFormInteraction = useCallback(
    async (
      formType: string,
      action: 'start' | 'complete' | 'abandon',
      data?: Record<string, any>
    ) => {
      if (contactId) {
        await trackEvent({
          contactId,
          type: 'form_submission',
          source: 'Website Form',
          data: {
            formType,
            action,
            ...data,
            timestamp: new Date().toISOString(),
          },
        });
      }
    },
    [contactId, trackEvent]
  );

  // Track property interactions
  const trackPropertyInteraction = useCallback(
    async (
      propertyId: string,
      propertyAddress: string,
      action: 'view' | 'save' | 'share' | 'contact'
    ) => {
      if (contactId) {
        await trackEvent({
          contactId,
          type: 'property_view',
          source: 'Website Property Listing',
          data: {
            propertyId,
            propertyAddress,
            action,
            timestamp: new Date().toISOString(),
          },
        });
      }
    },
    [contactId, trackEvent]
  );

  return {
    trackFormInteraction,
    trackPropertyInteraction,
  };
};

export default useFollowUpBoss;
