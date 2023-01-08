import formBuilder from '@payloadcms/plugin-form-builder';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import search from '@payloadcms/plugin-search';
import seo from '@payloadcms/plugin-seo';
import path from 'path';
import {buildConfig} from 'payload/config';

import {
  Categories,
  Media,
  Navigations,
  Pages,
  Tags,
  Users,
} from './collections';
import Settings from './globals/Settings';
import formBuilderPluginConfig from './payload-form-builder.config';
import nestedDocsPluginConfig from './payload-nested-docs';
import searchPluginConfig from './payload-search.config';
import seoPluginConfig from './payload-seo.config';

export default buildConfig({
  serverURL: 'http://localhost:5000',

  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, './admin/scss/custom.scss'),
  },

  collections: [Users, Categories, Tags, Pages, Media, Navigations],

  globals: [Settings],

  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    disablePlaygroundInProduction: true,
  },

  routes: {
    api: '/api',
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
    seo(seoPluginConfig),
    search(searchPluginConfig),
    formBuilder(formBuilderPluginConfig),
    nestedDocs(nestedDocsPluginConfig),
  ],
});
