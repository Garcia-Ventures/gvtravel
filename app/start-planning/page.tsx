import { Metadata } from 'next';
import { TripInquiryForm } from '@/components/TripInquiryForm';

export const metadata: Metadata = {
  title: 'Start Planning - GV Travel',
  description: 'Tell us about your dream trip and let us handle the details.',
};

export default function StartPlanningPage() {
  return (
    <div className="bg-[var(--color-background)] py-24 sm:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-serif font-bold text-[var(--color-primary-teal)] dark:text-[var(--color-accent-magic)] uppercase tracking-[0.3em] mb-4">
            Concierge Services
          </h2>
          <h1 className="text-4xl font-serif font-bold tracking-tight text-[var(--color-text-main)] sm:text-5xl">
            Chart Your Next Voyage
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--color-text-main)] opacity-80 font-medium">
            Share your vision with our crew. We&apos;ll handle the navigation, ensuring every detail of your magical
            odyssey is perfectly aligned.
          </p>
        </div>
        <TripInquiryForm />
      </div>
    </div>
  );
}
