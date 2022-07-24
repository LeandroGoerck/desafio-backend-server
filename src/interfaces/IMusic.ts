import { Model } from 'sequelize/types';

interface IMusic extends Model{
  id: number;
  name: string;
  genreId: number;
  artistId: number;
}

export default IMusic;
