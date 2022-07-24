import { NextFunction, Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import UserService from '../services/userService';

export default class UserController {
  public service = new UserService();

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authData } = res.locals;
      await this.service.isAdmin(authData.username);

      const userData = await this.service.getAll();
      return res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authData } = res.locals;
      await this.service.isAdmin(authData.username);

      const { id } = req.params;
      const userData = await this.service.getById(id as string);
      return res.status(200).json(userData);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;
      const createdUser = await this.service.create({ name, email, password } as IUser);
      return res.status(201).json(createdUser);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, name, email, password, role } = req.body;
      await this.service.update(id, { name, email, password, role } as IUser);
      return res.status(200).json({ message: 'Updated' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.body;
      await this.service.delete(id);
      return res.status(200).json({ message: 'Destroyed' });
    } catch (error) {
      next(error);
    }
  };
}
