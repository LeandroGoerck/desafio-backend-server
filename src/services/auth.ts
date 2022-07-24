import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import 'dotenv/config';
import ERR from './errors';

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

const generateToken = (username: string, password: string): { token : string } => {
  const jwtConfig = { expiresIn: '1d' };
  const token = jwt.sign({ username, password }, JWT_SECRET, jwtConfig);
  return ({ token });
};

const checkToken = async (authorization: string) : Promise<jwt.JwtPayload> => {
  const decodedToken = jwt.verify(authorization, JWT_SECRET);
  if (!decodedToken) throw ERR.jwtCheckError;
  return decodedToken as jwt.JwtPayload;
};

export default {
  generateToken,
  checkToken,
};
