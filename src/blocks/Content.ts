import {Block} from 'payload/types';

const ContentBlock: Block = {
  slug: 'Content',
  labels: {singular: 'Content Block', plural: 'Content Blocks'},
  fields: [
    {
      name: 'content',
      type: 'richText',
      localized: true,
      admin: {hideGutter: true},
    },
  ],
};

export default ContentBlock;
