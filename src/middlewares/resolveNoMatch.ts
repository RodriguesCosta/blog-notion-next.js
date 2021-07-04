import { NextApiRequest, NextApiResponse } from 'next';

export const resolveNoMatch = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(404).send('This page could not be found.');
};
