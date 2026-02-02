'use client';

import React from 'react';
import { useForm } from '@formspree/react';

export function TripInquiryForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'missing-form-id';
  const [state, handleSubmit] = useForm(formId);

  React.useEffect(() => {
    if (formId === 'missing-form-id' && process.env.NODE_ENV === 'development') {
      console.warn('Formspree ID is missing. Please set NEXT_PUBLIC_FORMSPREE_ID in your .env file.');
    }
  }, [formId]);

  if (state.succeeded) {
    return (
      <div className="mx-auto max-w-2xl rounded-xl bg-[var(--color-primary-teal)]/10 p-8 text-center border border-[var(--color-primary-teal)]/20">
        <h3 className="text-xl font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
          Magic in the works!
        </h3>
        <p className="mt-2 text-[var(--color-text-main)] opacity-80">
          Thank you for trusting GV Travel. Our concierge team is already charting your personalized course.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 text-sm font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] underline hover:opacity-80 transition-opacity"
        >
          Send another bit of magic
        </button>
      </div>
    );
  }

  return (
    <form name="trip-inquiry" onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-8">
      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] border-b border-[var(--color-primary-teal)]/10 pb-2 uppercase tracking-widest">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-[var(--color-text-main)] opacity-90">
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-[var(--color-text-main)] shadow-sm ring-1 ring-inset ring-[var(--color-primary-teal)]/20 placeholder:text-[var(--color-text-main)]/30 focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent-magic)] sm:text-sm sm:leading-6 bg-[var(--color-background)] dark:ring-[var(--color-primary-teal)]/40"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[var(--color-text-main)] opacity-90">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-[var(--color-text-main)] shadow-sm ring-1 ring-inset ring-[var(--color-primary-teal)]/20 placeholder:text-[var(--color-text-main)]/30 focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent-magic)] sm:text-sm sm:leading-6 bg-[var(--color-background)] dark:ring-[var(--color-primary-teal)]/40"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trip Basics */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] border-b border-[var(--color-primary-teal)]/10 pb-2 uppercase tracking-widest">
          The Journey Vision
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="trip-type" className="block text-sm font-bold text-[var(--color-text-main)] opacity-90">
              Type of Experience
            </label>
            <div className="mt-2">
              <select
                id="trip-type"
                name="trip-type"
                className="block w-full rounded-md border-0 py-1.5 text-[var(--color-text-main)] shadow-sm ring-1 ring-inset ring-[var(--color-primary-teal)]/20 focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent-magic)] sm:text-sm sm:leading-6 bg-[var(--color-background)]"
              >
                <option value="cruise">Cruise</option>
                <option value="resort">All-Inclusive Resort</option>
                <option value="tour">Guided Land Tour</option>
                <option value="combo">Combo / Custom</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-bold text-[var(--color-text-main)] opacity-90">
              Investment Range
            </label>
            <div className="mt-2">
              <select
                id="budget"
                name="budget"
                className="block w-full rounded-md border-0 py-1.5 text-[var(--color-text-main)] shadow-sm ring-1 ring-inset ring-[var(--color-primary-teal)]/20 focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent-magic)] sm:text-sm sm:leading-6 bg-[var(--color-background)]"
              >
                <option value="under-2k">Under $2,000</option>
                <option value="2k-5k">$2,000 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-plus">$10,000+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-bold text-[var(--color-text-main)] opacity-90">
            Describe Your Magical Destination
          </label>
          <div className="mt-2">
            <textarea
              id="details"
              name="details"
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 text-[var(--color-text-main)] shadow-sm ring-1 ring-inset ring-[var(--color-primary-teal)]/20 placeholder:text-[var(--color-text-main)]/30 focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent-magic)] sm:text-sm sm:leading-6 bg-[var(--color-background)]"
              placeholder="Where do you hear the sea calling? Who is part of your crew? Share your dream dates."
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="h-4 w-4 rounded border-[var(--color-primary-teal)]/30 text-[var(--color-primary-teal)] focus:ring-[var(--color-accent-magic)] bg-[var(--color-background)]"
        />
        <label
          htmlFor="consent"
          className="block text-sm font-medium leading-6 text-[var(--color-text-main)] opacity-80"
        >
          I trust GV Travel to guide my inquiry with care.
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="flex w-full justify-center rounded-full bg-[var(--color-accent-magic)] px-6 py-3 text-base font-bold leading-6 text-[var(--color-cta-text)] shadow-xl transition-all hover:scale-[1.02] hover:bg-[var(--color-secondary-coral)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? 'Submitting...' : 'Send Inquiry'}
        </button>
        {state.errors && (
          <p className="mt-2 text-center text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
}
