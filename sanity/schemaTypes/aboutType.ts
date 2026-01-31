import { InfoOutlineIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
    }),
  ],
});
