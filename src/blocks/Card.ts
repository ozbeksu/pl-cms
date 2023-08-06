import {Block} from 'payload/types';

import {CallToAction} from './index';

const CardBlock: Block = {
  slug: 'Card',
  labels: {singular: 'Card Block', plural: 'Card Blocks'},
  fields: [
    {
      name: 'cards',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'size',
          type: 'select',
          localized: true,
          hasMany: false,
          admin: {
            isClearable: true,
            isSortable: false,
          },
          options: [
            {
              label: 'Full',
              value: 'full',
            },
            {
              label: 'Half',
              value: 'half',
            },
            {
              label: 'One Third',
              value: 'oneThird',
            },
            {
              label: 'One Fourth',
              value: 'oneFourth',
            },
            {
              label: 'One Fifth',
              value: 'oneFifth',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          localized: true,
          filterOptions: {mimeType: {contains: 'image'}},
        },
        {
          name: 'links',
          type: 'blocks',
          minRows: 0,
          maxRows: 6,
          blocks: [CallToAction],
          localized: true,
        },
      ],
    },
  ],
};

export default CardBlock;
