import { TripInquiryForm } from '@/components/TripInquiryForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Planning - GV Travel',
  description: 'Tell us about your dream trip and let us handle the details.',
};

export default function StartPlanningPage() {
  return (
    <div className="bg-[var(--color-background)] py-24 transition-colors duration-300 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-sm font-bold tracking-[0.3em] text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
            Concierge Services
          </h2>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-5xl">
            Chart Your Next Voyage
          </h1>
          <p className="mt-6 text-lg leading-8 font-medium text-[var(--color-text-main)] opacity-80">
            Share your vision with our crew. We&apos;ll handle the navigation, ensuring every detail of your magical
            odyssey is perfectly aligned.
          </p>
        </div>
        <TripInquiryForm />
      </div>
    </div>
  );
}
