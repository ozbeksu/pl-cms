import {errorMessage} from '../../utils/helpers';
import {transformImageField} from '../../utils/transformers';

export default async (req, res) => {
  const slug = req.params?.slug;
  const query = {slug: {equals: slug}};

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

  res.status(200).send({
    title: data.docs[0]?.title,
    slug,
    meta: {
      ...data.docs[0]?.meta,
      image: transformImageField(data.docs[0]?.meta?.image),
    },
  });
};
