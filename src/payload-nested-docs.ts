import {PluginConfig} from '@payloadcms/plugin-nested-docs/types';

const nestedDocsPluginConfig: PluginConfig = {
  collections: ['categories', 'pages'],
  parentFieldSlug: 'parent',
  breadcrumbsFieldSlug: 'breadcrumbs',
  generateLabel: (
    _: Array<Record<string, unknown>>,
    currentDoc: Record<string, string>,
  ) => currentDoc?.title,
  generateURL: (
    docs: Array<Record<string, unknown>>,
    _: Record<string, string>,
  ) => docs.reduce((url, doc) => `${url}/${doc?.slug}`, ''),
};

export default nestedDocsPluginConfig;
