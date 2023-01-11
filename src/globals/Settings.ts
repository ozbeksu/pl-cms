import {GlobalConfig} from 'payload/types';

import {getPageMetaBySlug, getGlobalSettings} from '../endpoints/globals';

const Settings: GlobalConfig = {
  slug: 'settings',
  label: {singular: 'Setting', plural: 'Settings'},
  access: {read: () => true},
  admin: {group: 'Globals'},
  endpoints: [
    {path: '/', method: 'get', handler: getGlobalSettings},
    {path: '/meta/:slug', method: 'get', handler: getPageMetaBySlug}
  ],
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'mainMenu',
                  type: 'relationship',
                  relationTo: 'navigations',
                  localized: true,
                  admin: {width: '50%'},
                },

                {
                  name: 'mobileMenu',
                  type: 'relationship',
                  relationTo: 'navigations',
                  localized: true,
                  admin: {width: '50%'},
                },
              ],
            },
            {
              name: 'enableLogin',
              label: 'Enable website Login and Register',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
        {
          label: 'Meta',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'siteTitle',
                  type: 'text',
                  localized: true,
                  required: true,
                  admin: {width: '50%'},
                  minLength: 50,
                  maxLength: 60,
                },
                {
                  name: 'siteKeywords',
                  type: 'text',
                  localized: true,
                  required: true,
                  admin: {width: '50%'},
                  minLength: 50,
                  maxLength: 60,
                },
                {
                  name: 'siteDescription',
                  type: 'textarea',
                  localized: true,
                  required: true,
                  admin: {width: '50%', className: 'site-description'},
                  minLength: 100,
                  maxLength: 150,
                },
                {
                  name: 'siteImage',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  localized: true,
                  filterOptions: {mimeType: {contains: 'image'}},
                  admin: {width: '50%'},
                },
              ],
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'facebook',
                  type: 'text',
                  localized: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'twitter',
                  type: 'text',
                  localized: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'instagram',
                  type: 'text',
                  localized: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'discord',
                  type: 'text',
                  localized: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'youtube',
                  type: 'text',
                  localized: true,
                  admin: {width: '50%'},
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Settings;
