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
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Playlists',
  tableName: 'playlist',
  timestamps: false,
});
Playlists.belongsToMany(Users, { through: 'user_has_playlist', as: 'listeners' });
Users.belongsToMany(Playlists, { through: 'user_has_playlist', as: 'playlists' });

Musics.belongsToMany(Playlists, { through: 'playlist_has_music', as: 'playlists' });
Playlists.belongsToMany(Musics, { through: 'playlist_has_music', as: 'musics' });

export default Playlists;
