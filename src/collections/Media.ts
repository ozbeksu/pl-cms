import {CollectionConfig} from 'payload/types';

import {FILE_MIME_TYPES} from '../utils/enums';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  admin: {useAsTitle: 'title', group: 'Content'},
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
  ],
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*', ...FILE_MIME_TYPES],
    imageSizes: [
      {
        name: 'small',
        width: 576,
        height: 432,
      },
      {
        name: 'medium',
        width: 768,
        height: 576,
      },
      {
        name: 'large',
        width: 992,
        height: 768,
      },
      {
        name: 'xlarge',
        width: 1440,
        height: 860,
      },
      {
        name: 'xxlarge',
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default Media;
