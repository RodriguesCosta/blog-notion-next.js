import { NextApiRequest, NextApiResponse } from 'next';
import { ErrorHandler } from 'next-connect';

import { AppError } from '~/utils/AppError';

export const resolveHttpError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err,
  req,
  res,
  next
) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(err.message);
    console.log(err?.response?.data);
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
};
