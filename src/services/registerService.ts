import bcryptjs from 'bcryptjs';
import UserModel from '../database/models/UserModel';
import IUser from '../interfaces/IUser';
import ERR from './errors';

export default class RegisterService {
  public register = async (register: IUser) => {
    const { name, email, password } = register;
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(password, salt);

    const userFound = await UserModel.findOne({ where: { email } });
    console.log(userFound);
    if (userFound) throw ERR.thisUserAlreadyExists;

    const registerObj = { name, email, password: hash, role: 'USER' };
    const createdUser = await UserModel.create(registerObj);
    return {
      id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      role: createdUser.role,
    } as IUser;
  };
}
