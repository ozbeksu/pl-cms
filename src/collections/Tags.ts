import {CollectionConfig} from 'payload/types';

import {slugifyOnValidate} from '../hooks';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {useAsTitle: 'name', group: 'Content'},
  access: {read: () => true},
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      index: true,
      localized: true,
      admin: {readOnly: true},
      hooks: {
        beforeValidate: [args => slugifyOnValidate(args)],
      },
    },
  ],
  timestamps: false,
};

export default Tags;
