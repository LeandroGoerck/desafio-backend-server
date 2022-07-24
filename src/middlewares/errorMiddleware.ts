import { Request, Response, NextFunction } from 'express';
import CustomError from '../services/CustomError';
import { ZodError } from 'zod';

function isMyError(err: Error) {
  return err instanceof CustomError;
}

function isError(err: Error) {
  return (err).message !== undefined;
}

function isZod(err: Error) {
  return err instanceof ZodError;
}

export default (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
  if (isMyError(err)) return res.status(err.status).json({ message: err.message });
  if (isZod(err)) return res.status(403).json({ message: "Bad Request" });

  const msg = isError(err) ? err.message : JSON.stringify(err);
  console.log(`error: ${msg}`);

  res.status(500).json({ message: 'Internal server Error' });
};
