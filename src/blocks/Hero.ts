import {Block} from 'payload/types';

import {CallToAction} from '.';

const HeroBlock: Block = {
  slug: 'Hero',
  labels: {singular: 'Hero Block', plural: 'Hero Blocks'},
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
};

export default HeroBlock;
