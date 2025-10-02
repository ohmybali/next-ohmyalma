import type { Rule } from '@sanity/types';

export default{
  name: 'contactsType',
  title: 'Контакты',
  type: 'document',
  fields:[
    {
      name: 'order',
      type: 'number',
      title: 'Порядок',
      validation: (Rule: Rule) => Rule.required(),
      description: "Чем меньше число — тем выше в списке",
    },
    {
      name: 'content_ru',
      title: 'Контент RU',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'content_en',
      title: 'Контент EN',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: Rule) => Rule.required(),
    }
  ]
}