import { type SchemaTypeDefinition } from 'sanity';

import { aboutType } from './aboutType';
import { authorType } from './authorType';
import { blockContentType } from './blockContentType';
import { categoryType } from './categoryType';
import { galleryType } from './galleryType';
import { postType } from './postType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, galleryType, aboutType],
};
