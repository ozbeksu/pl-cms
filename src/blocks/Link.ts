import {Block, Field} from 'payload/types';

import createLinkField from '../fields/LinkField';

const linkField: Field[] = createLinkField();

/**
 * Create an N depth block recuresively
 * @param {number} current
 * @param {number} maxDepth
 * @returns {Block}
 */
const createRecursiveLinksBlock = (current = 0, maxDepth = 3): Block => {
  if (current < maxDepth - 1) {
    current++;
    return {
      slug: `Level ${current}`,
      fields: [
        ...linkField,
        {
          name: 'children',
          type: 'blocks',
          localized: true,
          minRows: 0,
          maxRows: 20,
          blocks: [createRecursiveLinksBlock(current)],
        },
      ],
    };
  }

  return {
    slug: `Level ${maxDepth}`,
    fields: linkField,
  };
};

const LinkBlock: Block = createRecursiveLinksBlock();

export default LinkBlock;
