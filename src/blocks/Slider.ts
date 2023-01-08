import {Block} from 'payload/types';

import {CallToAction} from '.';

const SliderBlock: Block = {
  slug: 'Slider',
  labels: {singular: 'Slider Block', plural: 'Slider Blocks'},
  fields: [
    {
      name: 'slider',
      type: 'array',
      label: 'Image Slider',
      minRows: 1,
      maxRows: 10,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'caption',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
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
      admin: {
        components: {
          // @ts-ignore
          RowLabel: ({data, index}) => {
            return data?.title || `Slide ${String(index).padStart(2, '0')}`;
          },
        },
      },
    },
  ],
};

export default SliderBlock;
