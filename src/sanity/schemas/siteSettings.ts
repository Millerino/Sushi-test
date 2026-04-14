import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Nettstedsinnstillinger',
  type: 'document',
  fields: [
    defineField({
      name: 'restaurantName',
      title: 'Restaurantnavn',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Kort beskrivelse som vises på forsiden',
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adresse',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Epost',
      type: 'string',
    }),
    defineField({
      name: 'openingHours',
      title: 'Åpningstider',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'days',
              title: 'Dager',
              type: 'string',
              description: 'F.eks. "Mandag–Fredag"',
            }),
            defineField({
              name: 'hours',
              title: 'Timer',
              type: 'string',
              description: 'F.eks. "11.00–20.00" eller "Stengt"',
            }),
          ],
          preview: {
            select: { title: 'days', subtitle: 'hours' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'restaurantName' },
  },
})
