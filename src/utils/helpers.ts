import {STATUS_TYPES} from './enums';
import {transformImageField} from './transformers';

/**
 * 404 Response
 */
export const errorMessage = {
  message: 'Not Found',
  error: 404,
};

type Listing = {
  relationTo: string;
  value: {
    slug: string;
    [key: string]: any;
  };
};

const listingMap = {
  categories: 'category',
  tags: 'tag',
};

export const getItemsByListing = async (payload: any, listing: Listing) => {
  const where = {
    and:
      listing && listing.relationTo
        ? [
            {
              [`${listingMap[listing.relationTo]}.slug`]: {
                equals: listing.value.slug,
              },
            },
            {status: {equals: STATUS_TYPES.published}},
          ]
        : [{status: {equals: STATUS_TYPES.published}}],
  };

  const {docs} = await payload
    .find({collection: 'pages', pagination: false, sort: '-createdAt', where})
    .catch(err => console.log(err));

  return docs && docs.length
    ? docs.map(({title, slug, excerpt, coverImage}) => {
        return {
          title,
          slug,
          description: excerpt,
          image: coverImage ? transformImageField(coverImage) : null,
        };
      })
    : [];
};
