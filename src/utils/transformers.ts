import {Form} from '@payloadcms/plugin-form-builder/dist/types';

import {Media} from '../payload-types';
import {TransformedImageField} from '../types';

export const transformFromField = ({
  title,
  fields,
  submitButtonLabel,
  confirmationType,
  confirmationMessage,
  redirect,
}: Form): Partial<Form> => ({
  title,
  fields,
  submitButtonLabel,
  confirmationType,
  confirmationMessage,
  redirect,
});

export const transformImageField = ({
  title,
  mimeType,
  sizes,
}: Media): TransformedImageField => {
  const newSizes = {};

  for (const key in sizes) {
    if (Object.prototype.hasOwnProperty.call(sizes, key)) {
      newSizes[key] = {
        width: sizes[key].width,
        height: sizes[key].height,
        url: sizes[key].url,
      };
    }
  }

  return {title, mimeType, sizes: newSizes};
};

export const transformSlideField = ({title, caption, image, links}) => ({
  title,
  description: caption,
  image: transformImageField(image),
  links: links?.map(transformCTAField),
});

export const transformCardField = card => ({
  title: card.title,
  description: card.description,
  size: card.size,
  image: card.image && transformImageField(card.image),
  links: card.links,
});

export const transformDoc = doc => ({
  _id: doc.id,
  title: doc.title,
  slug: doc.slug,
  excerpt: doc.excerpt,
  blocks: doc.blocks,
  meta: {
    title: doc.meta.title,
    description: doc.meta.description,
    keywords: '',
    image: transformImageField(doc.meta.image),
  },
});

export const transformBreadcrumbsField = breadcrumbs =>
  breadcrumbs[breadcrumbs.length - 1].url;

export const transformReferenceField = ({relationTo, value}) => ({
  title: value.title,
  slug: value.slug,
  url: transformBreadcrumbsField(value.breadcrumbs),
  relationTo,
});

export const transformFileField = ({
  title,
  filename,
  mimeType,
  filesize,
  url,
}) => ({
  title,
  filename,
  mimeType,
  filesize,
  url,
});

export const transformCTAField = ({
  name,
  action,
  blockType,
  isPrimary,
  file,
  reference,
  url,
  isExternal,
}) => {
  const newCTA: {[key: string]: unknown} = {
    name,
    action,
    blockType,
    isPrimary,
    isExternal,
  };

  switch (action) {
    case 'file':
      newCTA.file = transformFileField(file);
      break;
    case 'reference':
      newCTA.reference = transformReferenceField(reference);
      break;
    case 'link':
      newCTA.url = url;
      break;
    default:
      break;
  }

  return newCTA;
};
