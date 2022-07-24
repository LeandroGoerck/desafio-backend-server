import * as bcryptjs from 'bcryptjs';
import ILogin from '../interfaces/ILogin';
import UserModel from '../database/models/UserModel';
import auth from './auth';
import ERR from './errors';

export default class LoginService {
  public login = async (data: ILogin) => {
    const { username, password } = data;

    const userData = await UserModel.findOne({ where: { name: username } });
    if (!userData) throw ERR.incorrectUsernameOrPassword;

    const bcryptVerify = await bcryptjs.compare(password, userData.password);
    if (!bcryptVerify) throw ERR.incorrectUsernameOrPassword;

    const { token } = auth.generateToken(username, password);
    return {
      user: {
        id: userData.id,
        username: userData.name,
      },
      token,
    };
  };

  public validate = async (authorization: string) => {
    const role = await auth.checkToken(authorization);
    if (!role) throw ERR.jwtCheckError;
    return { role };
  };
}
