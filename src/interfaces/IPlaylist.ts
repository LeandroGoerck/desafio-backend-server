import { Model } from 'sequelize/types';

interface IPlaylist extends Model{
  id: number;
  name: string;
  genre: number;
  musics: number[];
}

export default IPlaylist;
