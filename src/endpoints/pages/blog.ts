import {errorMessage} from '../../utils/helpers';
import {blockReducer} from '../../utils/reducers';
import {transformDoc} from '../../utils/transformers';

export default async (req, res) => {
  const query = {slug: {equals: 'blog'}};

  const data = await req.payload
    .find({collection: 'pages', pagination: false, where: query})
    .catch(err => {
      console.log(err);

      res.status(404).send(errorMessage);
    });

  if (!data?.docs?.length) {
    res.status(404).send(errorMessage);

    return;
  }

  const doc = await blockReducer(data.docs[0], req.payload);

  res.status(200).send(transformDoc(doc));
};
