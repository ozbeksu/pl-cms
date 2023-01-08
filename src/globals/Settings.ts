import {GlobalConfig} from 'payload/types';

const Settings: GlobalConfig = {
  slug: 'settings',
  label: {singular: 'Setting', plural: 'Settings'},
  admin: {group: 'Globals'},
  fields: [
    {
      type: 'tabs',
      tabs: [
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
                },
                {
                  name: 'siteKeywords',
                  type: 'text',
                  localized: true,
                  required: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'siteDescription',
                  type: 'textarea',
                  localized: true,
                  required: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'siteImage',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  localized: true,
                  filterOptions: {mimeType: {contains: 'image'}},
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
                  required: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'twitter',
                  type: 'text',
                  localized: true,
                  required: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'instagram',
                  type: 'text',
                  localized: true,
                  required: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'discord',
                  type: 'text',
                  localized: true,
                  required: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'youtube',
                  type: 'text',
                  localized: true,
                  required: true,
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
