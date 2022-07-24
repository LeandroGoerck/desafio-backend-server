import { DataTypes, Model } from 'sequelize';
import db from '.';
import Musics from './MusicsModel';
import Users from './UserModel';

class Playlists extends Model {
  public id: number;
  public name: string;
  public genre: string;
}

Playlists.init({
  musicId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  playlistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'UserHasPlaylist',
  tableName: 'user_has_playlist',
  timestamps: false,
});

export default Playlists;
