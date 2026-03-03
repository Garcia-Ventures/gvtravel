import { TripInquiryForm } from '@/components/TripInquiryForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start Planning - GV Travel',
  description: 'Share your trip goals and budget to get personalized, family-friendly travel guidance.',
};

export default function StartPlanningPage() {
  return (
    <div className="bg-[var(--color-background)] py-24 transition-colors duration-300 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-serif text-sm font-bold tracking-[0.3em] text-[var(--color-primary-teal)] uppercase dark:text-[var(--color-accent-magic)]">
            Let&apos;s Plan Together
          </h2>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--color-text-main)] sm:text-5xl">
            Start Your Family Trip Plan
          </h1>
          <p className="mt-6 text-lg leading-8 font-medium text-[var(--color-text-main)] opacity-80">
            Tell us where you want to go, who&apos;s traveling, and your budget comfort zone. We&apos;ll help you turn
            your ideas into a trip that feels exciting, realistic, and well organized.
          </p>
        </div>
        <TripInquiryForm />
      </div>
    </div>
  );
}
