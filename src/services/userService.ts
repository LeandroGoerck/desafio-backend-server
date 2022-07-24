import * as bcryptjs from 'bcryptjs';
import Playlists from '../database/models/PlaylistModel';
import IUser from '../interfaces/IUser';
import UserModel from '../database/models/UserModel';
import ERR from './errors';

export default class UserService {
  public getAll = async () => {
    const include = { model: Playlists, as: 'playlists', through: { attributes: [] } };
    const userData = await UserModel.findAll({ include, attributes: { exclude: ['password'] } });
    return { userData };
  };

  public getByName = async (name: string) => {
    const userGotByName = await UserModel.findOne({ where: { name } });
    if (!userGotByName) throw ERR.thisUserDoesNotExist;
    return { userGotByName };
  };

  public getById = async (id: string) => {
    const userData = await UserModel.findByPk(id);
    if (!userData) throw ERR.thisIdDoesNotExist;
    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role,
    };
  };

  public create = async (user: IUser) => {
    const { name, email, password } = user;

    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(password, salt);

    const userFound = await UserModel.findOne({ where: { email } });
    if (userFound) throw ERR.thisUserAlreadyExists;

    const userObj = { name, email, password: hash, role: 'USER' };
    const createdMatch = await UserModel.create(userObj);
    return createdMatch;
  };

  public update = async (id: string, user: IUser) => {
    const userData = await UserModel.findByPk(id);
    if (!userData) throw ERR.thisIdDoesNotExist;
    await UserModel.update(user, { where: { id } });
  };

  public delete = async (id: string) => {
    const userData = await UserModel.findByPk(id);
    if (!userData) throw ERR.thisIdDoesNotExist;
    await UserModel.destroy({ where: { id } });
  };

  public isAdmin = async (username: string) => {
    const { userGotByName } = await this.getByName(username);
    if (!userGotByName) throw ERR.thisUserDoesNotExist;
    if (userGotByName.role !== 'ADMIN') throw ERR.thisResourceIsOnlyForAdmins;
    console.log('role', userGotByName.role);
  };

  public getAuthData = async (username: string) => {
    const { userGotByName } = await this.getByName(username);
    console.log('getting auth data from ', username);
    if (!userGotByName) throw ERR.thisUserDoesNotExist;
    return {
      userId: userGotByName.id,
      role: userGotByName.role };
  };
}
