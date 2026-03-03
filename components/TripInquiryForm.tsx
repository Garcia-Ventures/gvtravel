'use client';

import { useForm } from '@formspree/react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Textarea,
} from '@gv-tech/ui-web';
import React from 'react';

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
      <Card className="mx-auto max-w-2xl overflow-hidden rounded-2xl border-[var(--color-primary-teal)]/20 bg-[var(--color-primary-teal)]/10 shadow-xl transition-all duration-300">
        <CardHeader className="pb-0 text-center">
          <CardTitle className="font-serif text-xl text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
            Your Trip Request Was Received
          </CardTitle>
          <CardDescription className="mx-auto mt-2 max-w-xl text-[var(--color-text-main)] opacity-80">
            Thank you for reaching out. I&apos;ll review your details and follow up soon with next steps tailored to
            your family and budget.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-6 text-center">
          <Button
            variant="link"
            onClick={() => window.location.reload()}
            className="mt-6 text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]"
          >
            Send another inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto max-w-2xl overflow-hidden rounded-2xl border-[var(--color-primary-teal)]/10 bg-[var(--color-background)] shadow-2xl">
      <CardHeader className="border-b border-[var(--color-primary-teal)]/10 bg-[var(--color-primary-teal)]/5 p-8">
        <CardTitle className="font-serif text-2xl font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)]">
          Tell Me About Your Trip
        </CardTitle>
        <CardDescription className="text-sm text-[var(--color-text-main)] opacity-70">
          A few quick details help me recommend the best-fit options for your family.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        {formId === 'missing-form-id' && process.env.NODE_ENV === 'development' && (
          <Alert variant="warning" className="mb-6 border-[var(--color-primary-teal)]/20">
            <AlertTitle>Form configuration needed</AlertTitle>
            <AlertDescription>
              Set `NEXT_PUBLIC_FORMSPREE_ID` in your environment to enable inquiry submissions.
            </AlertDescription>
          </Alert>
        )}

        <form name="trip-inquiry" onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-sm font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
              Contact Information
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
                  className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] focus-visible:ring-[var(--color-accent-magic-hex)]"
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
                  className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] focus-visible:ring-[var(--color-accent-magic-hex)]"
                />
              </div>
            </div>
          </div>

          <Separator className="bg-[var(--color-primary-teal)]/10" />

          {/* Trip Basics */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-sm font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
              Trip Basics
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="trip-type" className="font-bold text-[var(--color-text-main)] opacity-90">
                  Trip Type
                </Label>
                <Select value={tripType} onValueChange={setTripType} name="trip-type">
                  <SelectTrigger className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] focus:ring-[var(--color-accent-magic-hex)]">
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                  <SelectContent className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] text-[var(--color-text-main-hex)]">
                    <SelectItem value="cruise">Cruise</SelectItem>
                    <SelectItem value="disney-cruise">Disney Cruise</SelectItem>
                    <SelectItem value="disney-park">Disney Parks</SelectItem>
                    <SelectItem value="resort">All-Inclusive Resort</SelectItem>
                    <SelectItem value="combo">Combo / Custom</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="trip-type" value={tripType} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget" className="font-bold text-[var(--color-text-main-hex)] opacity-90">
                  Budget Range
                </Label>
                <Select value={budget} onValueChange={setBudget} name="budget">
                  <SelectTrigger className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] focus:ring-[var(--color-accent-magic-hex)]">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] text-[var(--color-text-main-hex)]">
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
                What does your ideal trip look like?
              </Label>
              <Textarea
                id="details"
                name="details"
                rows={4}
                className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] focus-visible:ring-[var(--color-accent-magic-hex)]"
                placeholder="Share destination ideas, who is traveling, timing, and anything important for comfort or budget."
              />
            </div>
          </div>

          <Separator className="bg-[var(--color-primary-teal)]/10" />

          <div className="flex items-center gap-x-3">
            <Checkbox
              id="consent"
              name="consent"
              required
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked === true)}
              className="h-5 w-5 rounded-sm border-2 border-[var(--color-primary-teal-hex)]/40 transition-all data-[state=checked]:border-[var(--color-primary-teal-hex)] data-[state=checked]:bg-[var(--color-primary-teal-hex)]"
            />
            <input type="hidden" name="consent" value={consent ? 'yes' : 'no'} />
            <Label
              htmlFor="consent"
              className="cursor-pointer text-sm leading-6 font-medium text-[var(--color-text-main-hex)] opacity-80"
            >
              I agree to be contacted about my trip inquiry.
            </Label>
          </div>

          <div>
            <Button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-full bg-[var(--color-accent-magic-hex)] px-6 py-3 text-base font-bold text-[var(--color-cta-text-hex)] shadow-xl hover:bg-[var(--color-secondary-coral-hex)] disabled:cursor-not-allowed disabled:opacity-50"
              size="lg"
            >
              {state.submitting ? 'Submitting...' : 'Send My Trip Request'}
            </Button>

            {state.errors && (
              <Alert variant="destructive" className="mt-4 text-left">
                <AlertTitle>Submission failed</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again, or email lindsay@gv-travel.com.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
