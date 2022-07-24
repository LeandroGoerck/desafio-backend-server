import { NextFunction, Request, Response } from 'express';
import ERR from '../services/errors';
import auth from '../services/auth';

const passAuthDataToLocals = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  try {
    if (!authorization || authorization === 'null') throw ERR.emptyAuthorization;
    const authData = await auth.checkToken(authorization);
    if (!authData) throw ERR.jwtCheckError;
    res.locals.authData = authData;
    next();
  } catch (error) {
    next(error);
  }
};

export default passAuthDataToLocals;
