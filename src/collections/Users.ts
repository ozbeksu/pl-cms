import {Access, CollectionConfig} from 'payload/types';

import {CounterField} from './../components/CounterField';

const ownerAccess: Access = ({req: {user}}) => {
  if (!user) return false;

  return {id: {not_equals: user.id}};
};

const Users: CollectionConfig = {
  slug: 'users',
  admin: {useAsTitle: 'email', group: 'Admin'},
  auth: {useAPIKey: true},
  access: {
    read: () => true,
    update: ownerAccess,
    delete: ownerAccess,
  },
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
      saveToJWT: true,
    },
    {
      name: 'count',
      type: 'ui',
      label: {en: 'Counter'},
      admin: {
        components: {
          Field: CounterField,
        },
      },
    },
  ],
};

export default Users;
