import {SearchConfig} from '@payloadcms/plugin-search/dist/types';

const searchPluginConfig: SearchConfig = {
  collections: ['pages'],
  searchOverrides: {admin: {group: 'Admin'}},
  defaultPriorities: {pages: 10, posts: 20},
};

export default searchPluginConfig;
