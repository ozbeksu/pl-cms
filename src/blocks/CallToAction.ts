import {Block} from 'payload/types';

import createLinkField from '../fields/LinkField';

const CallToActionBlock: Block = {
  slug: 'CallToAction',
  labels: {singular: 'CTA Block', plural: 'CTA Blocks'},
  fields: createLinkField([{label: 'Download', value: 'download'}]),
};

export default CallToActionBlock;
