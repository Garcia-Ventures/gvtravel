'use client';

import { useForm as useFormspree } from '@formspree/react';
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Textarea,
} from '@gv-tech/ui-web';
import React from 'react';
import { useForm } from 'react-hook-form';

import { useIsMounted } from '@/lib/hooks';
import { trackEvent } from '@/lib/plausible';

type TripInquiryValues = {
  name: string;
  email: string;
  tripType: string;
  budget: string;
  details: string;
  consent: boolean;
};

export function TripInquiryForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'missing-form-id';
  const [state, handleFormspreeSubmit] = useFormspree(formId);
  const isMounted = useIsMounted();
  const form = useForm<TripInquiryValues>({
    defaultValues: {
      name: '',
      email: '',
      tripType: 'cruise',
      budget: '2k-5k',
      details: '',
      consent: false,
    },
  });

  const onSubmit = async (values: TripInquiryValues) => {
    await handleFormspreeSubmit({
      name: values.name,
      email: values.email,
      details: values.details,
      'trip-type': values.tripType,
      budget: values.budget,
      consent: values.consent ? 'yes' : 'no',
    });
  };

  React.useEffect(() => {
    if (formId === 'missing-form-id' && process.env.NODE_ENV === 'development') {
      console.warn('Formspree ID is missing. Please set NEXT_PUBLIC_FORMSPREE_ID in your .env file.');
    }
  }, [formId]);

  React.useEffect(() => {
    if (state.succeeded) {
      const { tripType, budget } = form.getValues();
      trackEvent('TripInquirySubmitted', { tripType, budget });
    }
  }, [state.succeeded, form]);

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

        <Form {...form}>
          <form name="trip-inquiry" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" noValidate>
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-sm font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: 'Please enter your full name.' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-[var(--color-text-main-hex)] opacity-90">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] focus-visible:ring-[var(--color-accent-magic-hex)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: 'Please enter your email.',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address.',
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-[var(--color-text-main-hex)] opacity-90">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] focus-visible:ring-[var(--color-accent-magic-hex)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator className="bg-[var(--color-primary-teal)]/10" />

            <div className="space-y-4">
              <h3 className="font-serif text-lg text-sm font-bold tracking-widest text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
                Trip Basics
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="tripType"
                  rules={{ required: 'Please select a trip type.' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-[var(--color-text-main)] opacity-90">Trip Type</FormLabel>
                      <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  rules={{ required: 'Please select your budget range.' }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-[var(--color-text-main-hex)] opacity-90">
                        Budget Range
                      </FormLabel>
                      <FormControl>
                        <Select value={field.value} onValueChange={field.onChange}>
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold text-[var(--color-text-main-hex)] opacity-90">
                      What does your ideal trip look like?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        {...field}
                        className="border-[var(--color-primary-teal-hex)]/20 bg-[var(--color-background-hex)] focus-visible:ring-[var(--color-accent-magic-hex)]"
                        placeholder="Share destination ideas, who is traveling, timing, and anything important for comfort or budget."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator className="bg-[var(--color-primary-teal)]/10" />

            <FormField
              control={form.control}
              name="consent"
              rules={{ validate: (value) => value || 'Please agree to be contacted to continue.' }}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked === true)}
                        className="h-5 w-5 rounded-sm border-2 border-[var(--color-primary-teal-hex)]/40 transition-all data-[state=checked]:border-[var(--color-primary-teal-hex)] data-[state=checked]:bg-[var(--color-primary-teal-hex)]"
                      />
                    </FormControl>
                    <FormLabel className="cursor-pointer text-sm leading-6 font-medium text-[var(--color-text-main-hex)] opacity-80">
                      I agree to be contacted about my trip inquiry.
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

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
        </Form>
      </CardContent>
    </Card>
  );
}
