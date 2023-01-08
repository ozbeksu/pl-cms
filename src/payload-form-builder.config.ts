import {PluginConfig} from '@payloadcms/plugin-form-builder/dist/types';

const formBuilderPluginConfig: PluginConfig = {
  redirectRelationships: ['pages'],
  fields: {payment: false},
  formOverrides: {admin: {group: 'Admin'}},
  formSubmissionOverrides: {admin: {group: 'Admin'}},
};

export default formBuilderPluginConfig;
