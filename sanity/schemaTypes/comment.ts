// comment.ts
import { defineField, defineType, Reference, Rule } from 'sanity'

export const commentType = defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            validation: (rule: Rule) => rule.required(),
            weak: false,
            to: [{type: 'post'}]
        } as any, // temporarily use any to debug
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'text',
        }),
        defineField({
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: 'Only approved comments are visible on the website.',
            initialValue: false,
        }),
    ],
})