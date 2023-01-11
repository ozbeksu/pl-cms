import createBreadcrumbsField from '@payloadcms/plugin-nested-docs/dist/fields/breadcrumbs';
import createParentField from '@payloadcms/plugin-nested-docs/dist/fields/parent';
import {CollectionConfig} from 'payload/types';

import {
  CallToAction,
  Card,
  Content,
  Expandable,
  Form,
  Hero,
  Listing,
  Slider,
} from '../blocks';
import {findBySlug} from '../endpoints/pages';
import {slugifyOnValidate} from '../hooks';
// import {STATUS_TYPES} from '../utils/enums';
import {isLoggedInUser} from '../utils/helpers';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {useAsTitle: 'title', group: 'Content'},
  // access: {read: ({req: {user}}) => isLoggedInUser(user)},
  access: {read: () => true},
  versions: {drafts: true},
  endpoints: [{path: '/content/:slug', method: 'get', handler: findBySlug}],
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Page',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'slug',
                  type: 'text',
                  index: true,
                  localized: true,
                  admin: {width: '50%', readOnly: true},
                  hooks: {
                    beforeValidate: [args => slugifyOnValidate(args, 'title')],
                  },
                },
              ],
            },
            {
              name: 'excerpt',
              type: 'textarea',
              localized: true,
            },
            {
              name: 'coverImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              localized: true,
              filterOptions: {mimeType: {contains: 'image'}},
            },
          ],
        },
        {
          label: 'Meta',
          fields: [
            {
              type: 'row',
              fields: [
                createParentField('pages', {admin: {width: '50%'}}),
                {
                  name: 'author',
                  type: 'relationship',
                  relationTo: 'users',
                  admin: {width: '50%'},
                  defaultValue: ({user}) => user.id,
                },
                {
                  name: 'category',
                  type: 'relationship',
                  relationTo: 'categories',
                  localized: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'tags',
                  type: 'relationship',
                  relationTo: 'tags',
                  localized: true,
                  hasMany: true,
                  admin: {width: '50%'},
                },
                {
                  name: 'status',
                  type: 'select',
                  defaultValue: 'draft',
                  options: [
                    {
                      value: 'draft',
                      label: 'Draft',
                    },
                    {
                      value: 'published',
                      label: 'Published',
                    },
                  ],
                  admin: {width: '50%'},
                },
                {
                  name: 'publishedAt',
                  type: 'date',
                  admin: {width: '50%'},
                  defaultValue: () => new Date(),
                },
              ],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              localized: true,
              minRows: 1,
              maxRows: 20,
              blocks: [
                CallToAction,
                Card,
                Content,
                Expandable,
                Form,
                Hero,
                Listing,
                Slider,
              ],
            },
          ],
        },
        {
          label: 'Breadcrumbs',
          fields: [createBreadcrumbsField('pages')],
        },
      ],
    },
  ],
};

export default Pages;
