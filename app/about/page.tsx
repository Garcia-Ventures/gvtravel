import { AboutContent } from '@/components/AboutContent';
import { client } from '@/sanity/lib/client';
import { ABOUT_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - GV Travel',
  description:
    'Meet your travel advisor and learn how we plan family trips with value, care, and real-world experience.',
};

export default async function AboutPage() {
  const data = await client.fetch(ABOUT_QUERY);

  // Fallback defaults if no data in Sanity yet
  const title = data?.title || 'Meet Your Travel Advisor';
  const imageUrl =
    data?.imageUrl || 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200';
  const content = data?.content;

  return <AboutContent title={title} imageUrl={imageUrl} content={content} />;
}
