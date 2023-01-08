import {CollectionConfig} from 'payload/types';

const IndexedContent: CollectionConfig = {
  slug: 'indexedContents',
  access: {read: () => true},
  admin: {
    useAsTitle: 'slug',
    group: 'Admin',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      index: true,
    },
    {
      name: 'content',
      type: 'text',
    },
  ],
};

export default IndexedContent;
