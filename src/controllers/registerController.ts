import { NextFunction, Request, Response } from 'express';
import IRegister from '../interfaces/IUser';
import RegisterService from '../services/registerService';

export default class RegisterController {
  public service = new RegisterService();

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const createdRegister = await this.service.register({ name, email, password } as IRegister);
      return res.status(201).json(createdRegister);
    } catch (error) {
      next(error);
    }
  };
}
