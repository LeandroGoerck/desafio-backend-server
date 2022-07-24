import { Model } from 'sequelize/types';
import IMusic from './IMusic';

interface IPlaylist extends Model{
  id: number;
  name: string;
  genre: number;
  musics: IMusic[];
}

export default IPlaylist;
