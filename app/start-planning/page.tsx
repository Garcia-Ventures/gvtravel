import { Metadata } from 'next';
import { TripInquiryForm } from '@/components/TripInquiryForm';

export const metadata: Metadata = {
  title: 'Start Planning - GV Travel',
  description: 'Tell us about your dream trip and let us handle the details.',
};

export default function StartPlanningPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Start Planning Your Trip
          </h2>
          <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Fill out the form below to get started. We&apos;ll be in touch soon to discuss your options!
          </p>
        </div>
        <TripInquiryForm />
      </div>
    </div>
  );
}
