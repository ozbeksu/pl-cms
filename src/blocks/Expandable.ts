import {Block} from 'payload/types';

const ExpandableBlock: Block = {
  slug: 'Expandable',
  labels: {singular: 'Expandable Block', plural: 'Expandable Blocks'},
  fields: [
    {
      name: 'contents',
      type: 'array',
      localized: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
        },
        {
          name: 'content',
          type: 'richText',
          localized: true,
          admin: {
            hideGutter: true,
          },
        },
      ],
    },
  ],
};

export default ExpandableBlock;
