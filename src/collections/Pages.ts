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
import {blog, blogSingle} from '../endpoints/pages';
import {slugifyOnValidate} from '../hooks';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {useAsTitle: 'title', group: 'Content'},
  access: {read: () => true},
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
  endpoints: [
    {
      path: '/blog',
      method: 'get',
      handler: blog,
    },
    {
      path: '/blog/:slug',
      method: 'get',
      handler: blogSingle,
    },
  ],
};

export default Pages;
