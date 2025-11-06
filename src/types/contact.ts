import type { ContactFormData } from '@/lib/validations/contact-schema';

/**
 * Contact Form Types
 */

export type { ContactFormData };

export interface ContactFormResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface ContactFormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}
