import { Model } from 'sequelize/types';
import IMusicSimple from './IMusicSimple';

interface IPlaylist extends Model{
  id: number;
  name: string;
  genre: number;
  musics: IMusicSimple[];
}

export default IPlaylist;
