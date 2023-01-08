import {CollectionConfig} from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {useAsTitle: 'email', group: 'Admin'},
  access: {read: () => true},
  fields: [
    // Email added by default
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'username',
      type: 'text',
    },
  ],
};

export default Users;
