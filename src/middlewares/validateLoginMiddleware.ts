import { Request, Response, NextFunction } from 'express';
import ERR from '../services/errors';

const validateLoginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username || !password) throw ERR.allFieldsMustBeFilled;
  next();
};

export default validateLoginMiddleware;
