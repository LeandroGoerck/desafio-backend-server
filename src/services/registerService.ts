import bcryptjs from 'bcryptjs';
import UserModel from '../database/models/UserModel';
import IUser from '../interfaces/IUser';
import ERR from './errors';
import zod from 'zod';

const registerShema = zod.object({
  email: zod.string().email(),
  name: zod.string().min(2).max(15),
  password: zod.string().min(6),
});

export default class RegisterService {
  public register = async (register: IUser) => {
    const { name, email, password } = registerShema.parse(register);

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
