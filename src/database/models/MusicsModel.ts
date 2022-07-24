import { DataTypes, Model } from 'sequelize';
import db from '.';

class Musics extends Model {
  public id: number;
  public name: string;
  public genreId: number;
  public artistId: number;
}

Musics.init({
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
  genreId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Musics',
  tableName: 'music',
  timestamps: false,
});

export default Musics;
