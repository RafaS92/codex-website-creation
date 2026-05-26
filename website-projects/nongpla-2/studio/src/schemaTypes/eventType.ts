import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'startsAt',
      title: 'Starts at',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleTh',
      title: 'Title (Thai)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descriptionTh',
      title: 'Description (Thai)',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'startsAt',
      media: 'image',
    },
  },
})

