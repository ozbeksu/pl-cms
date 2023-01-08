/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  name?: string;
  slug?: string;
  parent?: string | Category;
  breadcrumbs: {
    doc?: string | Category;
    url?: string;
    label?: string;
    id?: string;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tags".
 */
export interface Tag {
  id: string;
  name?: string;
  slug?: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug?: string;
  excerpt?: string;
  coverImage: string | Media;
  parent?: string | Page;
  author?: string | User;
  category?: string | Category;
  tags?: string[] | Tag[];
  status?: 'draft' | 'published';
  publishedAt?: string;
  blocks: (
    | {
        name?: string;
        action?: 'link' | 'reference' | 'file' | 'download';
        url?: string;
        isExternal?: boolean;
        reference?:
          | {
              value: string | Page;
              relationTo: 'pages';
            }
          | {
              value: string | Category;
              relationTo: 'categories';
            }
          | {
              value: string | Tag;
              relationTo: 'tags';
            };
        file: string | Media;
        isPrimary?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'CallToAction';
      }
    | {
        cards: {
          title?: string;
          description?: string;
          size?: 'full' | 'half' | 'oneThird' | 'oneFourth' | 'oneFifth';
          image: string | Media;
          links: {
            name?: string;
            action?: 'link' | 'reference' | 'file' | 'download';
            url?: string;
            isExternal?: boolean;
            reference?:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Category;
                  relationTo: 'categories';
                }
              | {
                  value: string | Tag;
                  relationTo: 'tags';
                };
            file: string | Media;
            isPrimary?: boolean;
            id?: string;
            blockName?: string;
            blockType: 'CallToAction';
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'Card';
      }
    | {
        content?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'Content';
      }
    | {
        contents: {
          title?: string;
          content?: {
            [k: string]: unknown;
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'Expandable';
      }
    | {
        form?: string | Form;
        id?: string;
        blockName?: string;
        blockType: 'FormBlock';
      }
    | {
        title?: string;
        description?: string;
        image: string | Media;
        links: {
          name?: string;
          action?: 'link' | 'reference' | 'file' | 'download';
          url?: string;
          isExternal?: boolean;
          reference?:
            | {
                value: string | Page;
                relationTo: 'pages';
              }
            | {
                value: string | Category;
                relationTo: 'categories';
              }
            | {
                value: string | Tag;
                relationTo: 'tags';
              };
          file: string | Media;
          isPrimary?: boolean;
          id?: string;
          blockName?: string;
          blockType: 'CallToAction';
        }[];
        id?: string;
        blockName?: string;
        blockType: 'Header';
      }
    | {
        listing:
          | {
              value: string | Category;
              relationTo: 'categories';
            }
          | {
              value: string | Tag;
              relationTo: 'tags';
            };
        id?: string;
        blockName?: string;
        blockType: 'Listing';
      }
    | {
        slider: {
          title?: string;
          caption?: string;
          image: string | Media;
          links: {
            name?: string;
            action?: 'link' | 'reference' | 'file' | 'download';
            url?: string;
            isExternal?: boolean;
            reference?:
              | {
                  value: string | Page;
                  relationTo: 'pages';
                }
              | {
                  value: string | Category;
                  relationTo: 'categories';
                }
              | {
                  value: string | Tag;
                  relationTo: 'tags';
                };
            file: string | Media;
            isPrimary?: boolean;
            id?: string;
            blockName?: string;
            blockType: 'CallToAction';
          }[];
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'Slider';
      }
  )[];
  breadcrumbs: {
    doc?: string | Page;
    url?: string;
    label?: string;
    id?: string;
  }[];
  meta: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  title?: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    small: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    medium: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    large: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    xlarge: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    xxlarge: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: string;
  title: string;
  fields: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect: {
    type?: 'reference' | 'custom';
    reference: {
      value: string | Page;
      relationTo: 'pages';
    };
    url: string;
  };
  emails: {
    emailTo: string;
    bcc?: string;
    replyTo?: string;
    replyToName?: string;
    emailFrom?: string;
    emailFromName?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigations".
 */
export interface Navigation {
  id: string;
  name?: string;
  slug?: string;
  links: {
    name?: string;
    action?: 'link' | 'reference' | 'file';
    url?: string;
    isExternal?: boolean;
    reference?:
      | {
          value: string | Page;
          relationTo: 'pages';
        }
      | {
          value: string | Category;
          relationTo: 'categories';
        }
      | {
          value: string | Tag;
          relationTo: 'tags';
        };
    file: string | Media;
    isPrimary?: boolean;
    children: {
      name?: string;
      action?: 'link' | 'reference' | 'file';
      url?: string;
      isExternal?: boolean;
      reference?:
        | {
            value: string | Page;
            relationTo: 'pages';
          }
        | {
            value: string | Category;
            relationTo: 'categories';
          }
        | {
            value: string | Tag;
            relationTo: 'tags';
          };
      file: string | Media;
      isPrimary?: boolean;
      children: {
        name?: string;
        action?: 'link' | 'reference' | 'file';
        url?: string;
        isExternal?: boolean;
        reference?:
          | {
              value: string | Page;
              relationTo: 'pages';
            }
          | {
              value: string | Category;
              relationTo: 'categories';
            }
          | {
              value: string | Tag;
              relationTo: 'tags';
            };
        file: string | Media;
        isPrimary?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'Level 3';
      }[];
      id?: string;
      blockName?: string;
      blockType: 'Level 2';
    }[];
    id?: string;
    blockName?: string;
    blockType: 'Level 1';
  }[];
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "search".
 */
export interface Search {
  id: string;
  title?: string;
  priority?: number;
  doc: {
    value: string | Page;
    relationTo: 'pages';
  };
  createdAt: string;
  updatedAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData: {
    field: string;
    value: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
