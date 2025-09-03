import type { Payload } from 'payload'

export const seedCustomFilterData = async (payload: Payload) => {
  await payload.create({
    collection: 'custom-filter-test',
    data: {
      title: 'Heavy Electronics',
      weight: 5.5,
      height: 200,
      category: 'electronics',
      description: 'A heavy electronic device',
      isActive: true,
    },
  })

  await payload.create({
    collection: 'custom-filter-test',
    data: {
      title: 'Light Clothing',
      weight: 0.3,
      height: 50,
      category: 'clothing',
      description: 'A light piece of clothing',
      isActive: true,
    },
  })

  await payload.create({
    collection: 'custom-filter-test',
    data: {
      title: 'Medium Book',
      weight: 1.2,
      height: 300,
      category: 'books',
      description: 'A medium-sized book',
      isActive: false,
    },
  })

  await payload.create({
    collection: 'custom-filter-test',
    data: {
      title: 'Sports Equipment',
      weight: 2.8,
      height: 150,
      category: 'sports',
      description: 'Some sports equipment',
      isActive: true,
    },
  })
}
