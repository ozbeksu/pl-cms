import {BLOCK_TYPES} from './enums';
import {getItemsByListing} from './helpers';
import {
  transformCTAField,
  transformCardField,
  transformFromField,
  transformImageField,
  transformSlideField,
} from './transformers';

export const blockReducer = async (doc, payload) => {
  for (let i = 0; i < doc?.blocks?.length; i++) {
    let newBlock = {};
    const block = doc?.blocks[i];

    switch (block.blockType) {
      case BLOCK_TYPES.card:
        newBlock = {
          blockType: block.blockType,
          cards: block.cards?.map(transformCardField),
        };
        break;
      case BLOCK_TYPES.content:
        newBlock = {
          blockType: block.blockType,
          content: block.content,
        };
        break;
      case BLOCK_TYPES.form:
        newBlock = {
          blockType: block.blockType,
          form: block.form && transformFromField(block.form),
        };
        break;
      case BLOCK_TYPES.hero:
        newBlock = {
          blockType: block.blockType,
          title: block.title,
          description: block.description,
          links: block.links?.map(transformCTAField),
          image: doc?.meta?.image && transformImageField(doc.meta.image),
        };
        break;
      case BLOCK_TYPES.listing:
        newBlock = {
          blockType: block.blockType,
          listing: await getItemsByListing(payload, block.listing),
        };
        break;
      case BLOCK_TYPES.slider:
        newBlock = {
          blockType: block.blockType,
          slides: block.slider?.map(transformSlideField),
        };
        break;

      default:
        newBlock = block;
        break;
    }

    doc.blocks[i] = newBlock;
  }

  return doc;
};
