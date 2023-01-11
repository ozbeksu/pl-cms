import {errorMessage} from '../../utils/helpers';
import {transformGlobals} from '../../utils/transformers';

export default async ({payload}, res) => {
  const data = await payload.findGlobal({slug: 'settings'}).catch(err => {
    console.log(err);

    res.status(404).send(errorMessage);
  });

  if (!data) {
    res.status(404).send(errorMessage);

    return;
  }

  res.status(200).send(transformGlobals(data));
};
