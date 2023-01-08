import {CollectionConfig} from 'payload/types';

import {Link} from '../blocks';
import {slugifyOnValidate} from '../hooks';

const Navigations: CollectionConfig = {
  slug: 'navigations',
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
      hooks: {beforeValidate: [args => slugifyOnValidate(args)]},
    },
    {
      name: 'links',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [Link],
    },
  ],
};

export default Navigations;
