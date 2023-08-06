import formBuilder from '@payloadcms/plugin-form-builder';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import search from '@payloadcms/plugin-search';
import seo from '@payloadcms/plugin-seo';
import path from 'path';
import {selectPlugin} from 'payload-query';
import rbac from 'payload-rbac';
import {swagger} from 'payload-swagger';
import {tenancy} from 'payload-tenancy';
import {buildConfig} from 'payload/config';

import {
  Categories,
  Media,
  Navigations,
  Pages,
  Tags,
  Tenants,
} from './collections';
import Users from './collections/Users';
import Settings from './globals/Settings';
import formBuilderPluginConfig from './payload-form-builder.config';
import nestedDocsPluginConfig from './payload-nested-docs';
import searchPluginConfig from './payload-search.config';
import seoPluginConfig from './payload-seo.config';

export default buildConfig({
  telemetry: false,

  debug: true,

  serverURL: 'http://localhost:3000',

  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, './admin/scss/custom.scss'),
  },

  collections: [Users, Tenants, Categories, Media, Navigations, Pages, Tags],

  globals: [Settings],

  rateLimit: {trustProxy: true, window: 2 * 60 * 1000, max: 2400},

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },

  routes: {
    api: '/api/v1',
    admin: '/admin',
    graphQL: '/graphql',
    graphQLPlayground: '/graphql-playground',
  },

  localization: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    fallback: true,
  },

  plugins: [
    rbac({roles: ['guest', 'editor', 'manager', 'admin', 'master']}),
    tenancy(),
    selectPlugin(),
    swagger(),
    search(searchPluginConfig),
    formBuilder(formBuilderPluginConfig),
    nestedDocs(nestedDocsPluginConfig),
    seo(seoPluginConfig),
  ],
});
