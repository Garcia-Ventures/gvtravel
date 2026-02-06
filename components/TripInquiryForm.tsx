'use client';

import React from 'react';
import { useForm } from '@formspree/react';
import {
  Button,
  Input,
  Label,
  Textarea,
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@gv-tech/design-system';

import { useIsMounted } from '@/lib/hooks';

export function TripInquiryForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'missing-form-id';
  const [state, handleSubmit] = useForm(formId);
  const [tripType, setTripType] = React.useState('cruise');
  const [budget, setBudget] = React.useState('2k-5k');
  const [consent, setConsent] = React.useState(false);
  const isMounted = useIsMounted();

  React.useEffect(() => {
    if (formId === 'missing-form-id' && process.env.NODE_ENV === 'development') {
      console.warn('Formspree ID is missing. Please set NEXT_PUBLIC_FORMSPREE_ID in your .env file.');
    }
  }, [formId]);

  if (!isMounted) {
    return null;
  }

  if (state.succeeded) {
    return (
      <div className="mx-auto max-w-2xl rounded-xl bg-[var(--color-primary-teal)]/10 p-8 text-center border border-[var(--color-primary-teal)]/20">
        <h3 className="text-xl font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
          Magic in the works!
        </h3>
        <p className="mt-2 text-[var(--color-text-main)] opacity-80">
          Thank you for trusting GV Travel. Our concierge team is already charting your personalized course.
        </p>
        <Button
          variant="link"
          onClick={() => window.location.reload()}
          className="mt-6 text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]"
        >
          Send another bit of magic
        </Button>
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
          <div className="space-y-2">
            <Label htmlFor="name" className="font-bold text-[var(--color-text-main-hex)] opacity-90">
              Full Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              required
              className="bg-[var(--color-background-hex)] border-[var(--color-primary-teal-hex)]/20 focus-visible:ring-[var(--color-accent-magic-hex)]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold text-[var(--color-text-main-hex)] opacity-90">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              required
              className="bg-[var(--color-background-hex)] border-[var(--color-primary-teal-hex)]/20 focus-visible:ring-[var(--color-accent-magic-hex)]"
            />
          </div>
        </div>
      </div>

      {/* Trip Basics */}
      <div className="space-y-4">
        <h3 className="text-lg font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] border-b border-[var(--color-primary-teal)]/10 pb-2 uppercase tracking-widest">
          The Journey Vision
        </h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="trip-type" className="font-bold text-[var(--color-text-main)] opacity-90">
              Type of Experience
            </Label>
            <Select value={tripType} onValueChange={setTripType} name="trip-type">
              <SelectTrigger className="bg-[var(--color-background-hex)] border-[var(--color-primary-teal-hex)]/20 focus:ring-[var(--color-accent-magic-hex)]">
                <SelectValue placeholder="Select experience type" />
              </SelectTrigger>
              <SelectContent className="bg-[var(--color-background-hex)] border-[var(--color-primary-teal-hex)]/20 text-[var(--color-text-main-hex)]">
                <SelectItem value="cruise">Cruise</SelectItem>
                <SelectItem value="resort">All-Inclusive Resort</SelectItem>
                <SelectItem value="tour">Guided Land Tour</SelectItem>
                <SelectItem value="combo">Combo / Custom</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="trip-type" value={tripType} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget" className="font-bold text-[var(--color-text-main-hex)] opacity-90">
              Investment Range
            </Label>
            <Select value={budget} onValueChange={setBudget} name="budget">
              <SelectTrigger className="bg-[var(--color-background-hex)] border-[var(--color-primary-teal-hex)]/20 focus:ring-[var(--color-accent-magic-hex)]">
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent className="bg-[var(--color-background-hex)] border-[var(--color-primary-teal-hex)]/20 text-[var(--color-text-main-hex)]">
                <SelectItem value="under-2k">Under $2,000</SelectItem>
                <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                <SelectItem value="10k-plus">$10,000+</SelectItem>
                <SelectItem value="not-sure">Not sure yet</SelectItem>
              </SelectContent>
            </Select>
            <input type="hidden" name="budget" value={budget} />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="details" className="font-bold text-[var(--color-text-main-hex)] opacity-90">
            Describe Your Magical Destination
          </Label>
          <Textarea
            id="details"
            name="details"
            rows={4}
            className="bg-[var(--color-background-hex)] border-[var(--color-primary-teal-hex)]/20 focus-visible:ring-[var(--color-accent-magic-hex)]"
            placeholder="Where do you hear the sea calling? Who is part of your crew? Share your dream dates."
          />
        </div>
      </div>

      <div className="flex items-center gap-x-3">
        <Checkbox
          id="consent"
          name="consent"
          required
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked === true)}
          className="h-5 w-5 border-2 border-[var(--color-primary-teal-hex)]/40 rounded-sm data-[state=checked]:bg-[var(--color-primary-teal-hex)] data-[state=checked]:border-[var(--color-primary-teal-hex)] transition-all"
        />
        <input type="hidden" name="consent" value={consent ? 'yes' : 'no'} />
        <Label
          htmlFor="consent"
          className="text-sm font-medium leading-6 text-[var(--color-text-main-hex)] opacity-80 cursor-pointer"
        >
          I trust GV Travel to guide my inquiry with care.
        </Label>
      </div>

      <div>
        <Button
          type="submit"
          disabled={state.submitting}
          className="w-full rounded-full bg-[var(--color-accent-magic-hex)] px-6 py-3 text-base font-bold text-[var(--color-cta-text-hex)] shadow-xl hover:bg-[var(--color-secondary-coral-hex)] disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
        >
          {state.submitting ? 'Submitting...' : 'Send Inquiry'}
        </Button>

        {state.errors && (
          <p className="mt-2 text-center text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </form>
  );
}
