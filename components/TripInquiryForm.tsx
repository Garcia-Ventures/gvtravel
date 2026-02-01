'use client';

import React from 'react';
import { useForm } from '@formspree/react';

export function TripInquiryForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || '');

  if (state.succeeded) {
    return (
      <div className="mx-auto max-w-2xl rounded-xl bg-green-50 p-8 text-center dark:bg-green-900/20">
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">Request Received!</h3>
        <p className="mt-2 text-green-700 dark:text-green-400">
          Thank you for reaching out. We will review your details and get back to you shortly with some ideas!
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 text-sm font-semibold text-green-800 underline dark:text-green-300"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form name="trip-inquiry" onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-8">
      {/* Contact Info */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 border-b pb-2 dark:border-zinc-800">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-50">
              Full Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-700"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-50">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trip Basics */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 border-b pb-2 dark:border-zinc-800">
          Trip Details
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="trip-type" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-50">
              Type of Trip
            </label>
            <div className="mt-2">
              <select
                id="trip-type"
                name="trip-type"
                className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-700"
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
            <label htmlFor="budget" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-50">
              Budget Range
            </label>
            <div className="mt-2">
              <select
                id="budget"
                name="budget"
                className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-700"
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
          <label htmlFor="details" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-50">
            Tell us about your ideal trip
          </label>
          <div className="mt-2">
            <textarea
              id="details"
              name="details"
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-zinc-900 dark:text-white dark:ring-zinc-700"
              placeholder="Where do you want to go? Who is traveling? Any special dates?"
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
          className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-600 dark:border-zinc-700 dark:bg-zinc-900"
        />
        <label htmlFor="consent" className="block text-sm font-medium leading-6 text-zinc-900 dark:text-zinc-50">
          I agree to be contacted by GV Travel regarding this inquiry.
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
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
