import type { CollectionConfig } from 'payload'

export const CustomFilterCollection: CollectionConfig = {
  slug: 'custom-filter-test',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'weight',
      type: 'number',
      admin: {
        components: {
          Filter: {
            path: '/collections/CustomFilter/UnitConversionFilter.js',
            clientProps: {
              fromUnit: 'kg',
            },
          },
        },
      },
    },
    {
      name: 'height',
      type: 'number',
      admin: {
        components: {
          Filter: {
            path: '/collections/CustomFilter/UnitConversionFilter.js',
            clientProps: {
              fromUnit: 'mm',
            },
          },
        },
      },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Electronics', value: 'electronics' },
        { label: 'Clothing', value: 'clothing' },
        { label: 'Books', value: 'books' },
        { label: 'Sports', value: 'sports' },
      ],
      admin: {
        components: {
          Filter: {
            path: '/collections/CustomFilter/UnitConversionFilter.js',
            clientProps: {
              fromUnit: 'category',
            },
          },
        },
      },
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}

export default CustomFilterCollection
