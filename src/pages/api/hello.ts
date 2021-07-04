import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import { resolveHttpError } from '~/middlewares/resolveHttpError';
import { resolveNoMatch } from '~/middlewares/resolveNoMatch';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: resolveHttpError,
  onNoMatch: resolveNoMatch,
}).get(async (req, res) => {
  res.json({
    hello: 'API',
  });
});

export default handler;
