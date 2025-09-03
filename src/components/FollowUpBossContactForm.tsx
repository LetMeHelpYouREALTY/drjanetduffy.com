import { useFollowUpBoss, useFollowUpBossTracking } from '@/hooks/useFollowUpBoss';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Mail, MapPin, MessageSquare, Phone, User } from 'lucide-react';
import { useState } from 'react';

interface FollowUpBossContactFormProps {
  title?: string;
  subtitle?: string;
  source?: string;
  propertyInterest?: string;
  className?: string;
  onSuccess?: (contactId: string) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest: string;
  source: string;
}

const FollowUpBossContactForm: React.FC<FollowUpBossContactFormProps> = ({
  title = 'Get Your Free Consultation',
  subtitle = 'Connect with Dr. Jan Duffy for expert Las Vegas real estate guidance',
  source = 'Website Contact Form',
  propertyInterest = '',
  className = '',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest,
    source,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactId, setContactId] = useState<string | null>(null);

  const { createContact, isLoading, error, clearError } = useFollowUpBoss();
  const { trackFormInteraction } = useFollowUpBossTracking(contactId || undefined);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    clearError();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Track form start
    if (contactId) {
      await trackFormInteraction('contact', 'start', {
        formType: 'contact',
        source: formData.source,
      });
    }

    try {
      const result = await createContact({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        source: formData.source,
        notes: formData.message,
        customFields: {
          propertyInterest: formData.propertyInterest,
          leadSource: 'Website',
          timestamp: new Date().toISOString(),
        },
      });

      if (result) {
        setContactId(result.id || '');
        setIsSubmitted(true);

        // Track form completion
        if (result.id) {
          await trackFormInteraction('contact', 'complete', {
            formType: 'contact',
            source: formData.source,
            contactId: result.id,
          });
        }

        // Call success callback
        if (onSuccess && result.id) {
          onSuccess(result.id);
        }

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          propertyInterest,
          source,
        });
      }
    } catch (err) {
      console.error('Error submitting form:', err);

      // Track form abandonment
      if (contactId) {
        await trackFormInteraction('contact', 'abandon', {
          formType: 'contact',
          source: formData.source,
          error: err instanceof Error ? err.message : 'Unknown error',
        });
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`bg-luxury-pearl rounded-xl p-8 text-center ${className}`}
      >
        <CheckCircle className="w-16 h-16 text-luxury-gold mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-luxury-navy mb-4">Thank You!</h3>
        <p className="text-luxury-charcoal mb-6">
          Your message has been received. Dr. Jan Duffy will contact you within 24 hours.
        </p>
        <div className="bg-luxury-gold/10 rounded-lg p-4 mb-6">
          <p className="text-luxury-navy font-semibold mb-2">What happens next?</p>
          <ul className="text-sm text-luxury-charcoal space-y-1">
            <li>• Dr. Jan will review your information</li>
            <li>• You'll receive a personalized response</li>
            <li>• Schedule a consultation if needed</li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="btn-secondary text-luxury-navy border-luxury-navy hover:bg-luxury-navy hover:text-white"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-luxury-pearl rounded-xl p-8 ${className}`}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-luxury-navy mb-2">{title}</h3>
        <p className="text-luxury-charcoal">{subtitle}</p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6 flex items-center"
        >
          <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
          <p className="text-red-700">{error}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-luxury-navy mb-2"
            >
              First Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-platinum-dark" />
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-luxury-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                placeholder="John"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-luxury-navy mb-2">
              Last Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-platinum-dark" />
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-luxury-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                placeholder="Doe"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-luxury-navy mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-platinum-dark" />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-luxury-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-luxury-navy mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-platinum-dark" />
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-luxury-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white"
                placeholder="(702) 555-0123"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="propertyInterest"
            className="block text-sm font-semibold text-luxury-navy mb-2"
          >
            Property Interest
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-luxury-platinum-dark" />
            <select
              id="propertyInterest"
              value={formData.propertyInterest}
              onChange={(e) => handleInputChange('propertyInterest', e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-luxury-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent bg-white"
            >
              <option value="">Select Area of Interest</option>
              <option value="Summerlin">Summerlin</option>
              <option value="Henderson">Henderson</option>
              <option value="Green Valley">Green Valley</option>
              <option value="Anthem">Anthem</option>
              <option value="Southern Highlands">Southern Highlands</option>
              <option value="Centennial Hills">Centennial Hills</option>
              <option value="Spring Valley">Spring Valley</option>
              <option value="General Las Vegas">General Las Vegas</option>
              <option value="Investment Properties">Investment Properties</option>
              <option value="Luxury Homes">Luxury Homes</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-luxury-navy mb-2">
            Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-luxury-platinum-dark" />
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-luxury-platinum rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white resize-none"
              placeholder="Tell us about your real estate needs..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary bg-luxury-gold text-luxury-navy hover:bg-luxury-gold/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-luxury-navy mr-2" />
              Sending Message...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </div>
          )}
        </button>

        <p className="text-xs text-luxury-platinum-dark text-center">
          By submitting this form, you agree to be contacted by Dr. Jan Duffy regarding your real
          estate needs.
        </p>
      </form>
    </motion.div>
  );
};

export default FollowUpBossContactForm;
