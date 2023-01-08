import {PluginConfig} from '@payloadcms/plugin-seo/dist/types';

const seoPluginConfig: PluginConfig = {
  tabbedUI: true,
  collections: ['pages', 'settings'],
  uploadsCollection: 'media',
  generateURL: <GenerateURL>({doc}) => `https://zed.com/${doc?.slug?.value}`,
  generateTitle: <GenerateTitle>({doc}) => `Zed — ${doc?.title?.value}`,
  generateDescription: <GenerateDescription>({doc}) => doc?.excerpt,
};

export default seoPluginConfig;
