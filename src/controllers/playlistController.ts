import { NextFunction, Request, Response } from 'express';
import UserService from '../services/userService';
import IPlaylist from '../interfaces/IPlaylist';
import PlaylistService from '../services/playlistService';

export default class PlaylistController {
  public service = new PlaylistService();
  public userService = new UserService();

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const { authData } = res.locals;
      const { userId, role } = await this.userService.getAuthData(authData.username);
      if (role === 'USER') {
        const { playlistData } = await this.service.getAllWithUserId(userId);
        return res.status(200).json(playlistData);
      }
      if (role === 'ADMIN') {
        const { playlistData } = await this.service.getAllAdmin();
        return res.status(200).json(playlistData);
      }
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const { playlistData } = await this.service.getById(id as string);
      return res.status(200).json(playlistData);
    } catch (error) {
      next(error);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, name, genre, musics } = req.body;
      const createdPlaylist = await this.service.create({ id, name, genre, musics } as IPlaylist);
      return res.status(201).json(createdPlaylist);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, name, genre } = req.body;
      await this.service.update(id, { name, genre } as IPlaylist);
      return res.status(200).json({ message: '  Updated' });
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
