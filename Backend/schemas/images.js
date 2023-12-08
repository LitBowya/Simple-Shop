export default {
  name: 'images',
  title: 'Images',
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
        source: 'title',
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
