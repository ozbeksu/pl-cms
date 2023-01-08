import {Block} from 'payload/types';

const FormBlock: Block = {
  slug: 'FormBlock',
  labels: {singular: 'Form Block', plural: 'Form Blocks'},
  fields: [
    {
      name: 'form',
      label: 'Form',
      type: 'relationship',
      relationTo: 'forms',
    },
  ],
};

export default FormBlock;
