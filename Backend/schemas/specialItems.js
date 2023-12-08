export default {
  name: 'special_items',
  title: 'Special Items',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'largetext',
      title: 'Large Text',
      type: 'string',
    },
    {
      name: 'smalltext',
      title: 'Small Text',
      type: 'string',
    },
  ],
}
