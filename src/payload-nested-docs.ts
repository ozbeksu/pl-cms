import {Options} from '@payloadcms/plugin-nested-docs/dist/types';

// @ts-ignore
const nestedDocsPluginConfig: Options = {
  collections: ['categories', 'pages'],
  parentFieldSlug: 'parent',
  breadcrumbsFieldSlug: 'breadcrumbs',
  generateLabel: <GenerateURL>(_, doc) => doc?.title,
  generateURL: <GenerateLabel>(docs) =>
    docs.reduce((url, doc) => `${url}/${doc?.slug}`, ''),
};

export default nestedDocsPluginConfig;
