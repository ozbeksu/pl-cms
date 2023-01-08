import createBreadcrumbsField from '@payloadcms/plugin-nested-docs/dist/fields/breadcrumbs';
import createParentField from '@payloadcms/plugin-nested-docs/dist/fields/parent';
import {CollectionConfig} from 'payload/types';

import {slugifyOnValidate} from '../hooks';

const Categories: CollectionConfig = {
  slug: 'categories',
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
    {...createParentField('categories'), admin: {}},
    createBreadcrumbsField('categories'),
  ],
  timestamps: false,
};

export default Categories;
