import { defineField, defineType } from 'sanity'

export const menuItemSchema = defineType({
  name: 'menuItem',
  title: 'Menyrett',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Navn',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Pris (kr)',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Sushi of Life Meny', value: 'sushi-meny' },
          { title: 'Sushi Pakke', value: 'sushi-pakke' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Rekkefølge',
      type: 'number',
      description: 'Lavere tall vises først',
    }),
  ],
  orderings: [
    {
      title: 'Kategori, deretter rekkefølge',
      name: 'categoryThenOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Pris, lavest først',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      price: 'price',
    },
    prepare({ title, subtitle, price }) {
      return {
        title,
        subtitle: `${subtitle === 'sushi-meny' ? 'Sushi Meny' : 'Sushi Pakke'} – ${price},- kr`,
      }
    },
  },
})
