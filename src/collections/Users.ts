import {Access, CollectionConfig} from 'payload/types';

const demoUserAccess: Access = ({req: {user}}) => {
  if (!user) return false;

  return {id: {not_equals: user.id}};
};

const Users: CollectionConfig = {
  slug: 'users',
  admin: {useAsTitle: 'email', group: 'Admin'},
  auth: {useAPIKey: true},
  access: {
    read: () => true,
    update: demoUserAccess,
    delete: demoUserAccess,
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
      name: 'role',
      type: 'select',
      options: ['user', 'editor', 'manager', 'admin'],
      required: true,
      saveToJWT: true,
    },
  ],
};

export default Users;
