import {STATUS_TYPES} from '../../utils/enums';
import {
  errorMessage,
  isLoggedInUser,
  unauthorizedMessage,
} from '../../utils/helpers';
import {blockReducer} from '../../utils/reducers';
import {transformDoc} from '../../utils/transformers';

export default async ({user, params, payload}, res) => {
  if (!isLoggedInUser(user)) {
    res.status(401).send(unauthorizedMessage);

    return;
  }

  const slug = params?.slug;
  if (!slug) {
    res.status(404).send(errorMessage);

    return;
  }

  const query = {
    slug: {equals: slug},
    publishedAt: {less_than: new Date().toJSON()},
    status: {equals: STATUS_TYPES.published},
  };

  const data = await payload
    .find({collection: 'pages', pagination: false, where: query})
    .catch(err => {
      res.status(404).send(errorMessage);

      console.log(err);
    });

  if (!data?.docs?.length) {
    res.status(404).send(errorMessage);

    return;
  }

  const doc = await blockReducer(data.docs[0], payload);
  res.status(200).send(transformDoc(doc));
};
