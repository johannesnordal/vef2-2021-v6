import { NextApiRequest, NextApiResponse } from 'next';

import { fetchCharacters } from '../../lib/swapi';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const after = req.query?.after as string | null;

  const data = await fetchCharacters(after ?? '');

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(200).json(null);
  }
};
