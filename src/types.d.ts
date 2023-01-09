import {Form} from '@payloadcms/plugin-form-builder/dist/types';

import {Media} from './payload-types';

export type GenerateURL = {slug: {value: string}};

export type GenerateTitle = {title: {value: string}};

export type GenerateDescription = {excerpt: {value: string}};

export type Listing = {
  relationTo: string;
  value: {
    slug: string;
    [key: string]: any;
  };
};

export type MediaSize = {
  url?: string;
  width?: number;
  height?: number;
  mimeType?: string;
  filesize?: number;
  filename?: string;
};

export type TransformedImageField = {
  title: string;
  mimeType: string;
  sizes?:
    | {
        small: MediaSize;
        medium: MediaSize;
        large: MediaSize;
        xlarge: MediaSize;
        xxlarge: MediaSize;
      }
    | {};
  [key: string]: unknown;
};

export type TransformedFormField = Partial<Form>;

export type TransformedLinkField = {
  name: string;
  action: string;
  blockType: string;
  url?: string;
  file?: {[key: string]: unknown};
  reference?: LinkReference;
  isPrimary: boolean;
  isExternal?: boolean;
};

export type TransformedFileField = Pick<
  Media,
  'title' | 'filename' | 'mimeType' | 'filesize' | 'url'
>;

export type LinkAction = 'download' | 'reference' | 'file' | 'link';

export type LinkReference = {
  relationTo: string;
  value: {
    title: string;
    slug: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type Link = {
  name: string;
  action: LinkAction;
  isPrimary: boolean;
  blockType: string;
  file?: Media;
  isExternal?: boolean;
  reference?: LinkReference;
  [key: string]: unknown;
};
