import {Block} from 'payload/types';

const ListingBlock: Block = {
  slug: 'Listing',
  labels: {singular: 'Listing Block', plural: 'Listing Blocks'},
  fields: [
    {
      name: 'listing',
      type: 'relationship',
      relationTo: ['categories', 'tags'],
      required: true,
      localized: true,
    },
  ],
};

export default ListingBlock;
