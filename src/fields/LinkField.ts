import {Option} from 'payload/dist/fields/config/types';
import {Field} from 'payload/types';

import {slugifyOnValidate} from '../hooks';
import {FILE_MIME_TYPES} from '../utils/enums';

const createLinkField = (additionalActionOptions: Option[] = []): Field[] => {
  let defaultOptions: Option[] = [
    ...[
      {label: 'Link', value: 'link'},
      {label: 'Reference', value: 'reference'},
      {label: 'File', value: 'file'},
    ],
    ...additionalActionOptions,
  ];

  return [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
    {
      name: 'action',
      type: 'select',
      hasMany: false,
      options: defaultOptions,
      admin: {isClearable: true, isSortable: false},
    },
    {
      name: 'url',
      type: 'text',
      localized: true,
      hooks: {beforeValidate: [args => slugifyOnValidate(args)]},
      admin: {condition: (_, siblingData) => siblingData.action === 'link'},
    },
    {
      name: 'reference',
      type: 'relationship',
      relationTo: ['pages', 'categories', 'tags'],
      localized: true,
      maxDepth: 1,
      admin: {
        condition: (_, siblingData) => siblingData.action === 'reference',
      },
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      maxDepth: 1,
      required: true,
      localized: true,
      filterOptions: {mimeType: {in: FILE_MIME_TYPES}},
      admin: {condition: (_, siblingData) => siblingData.action === 'file'},
    },
    {
      name: 'isExternal',
      type: 'checkbox',
    },
    {
      name: 'isPrimary',
      type: 'checkbox',
    },
  ];
};

export default createLinkField;
