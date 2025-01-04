import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { commentType } from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, commentType],
}
