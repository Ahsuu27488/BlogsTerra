import { defineField, defineType } from 'sanity'

export interface PostType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'excerpt',
      type: 'string',
      validation: (rule: { required: () => any; }) => rule.required()
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'author',
      title: 'author',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date Published',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'string'
    }),
  ],
})