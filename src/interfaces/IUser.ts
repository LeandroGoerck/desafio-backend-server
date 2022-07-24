import { Model } from 'sequelize/types';

export default interface IUser extends Model{
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
