import IPlaylist from '../interfaces/IPlaylist';
import PlaylistModel from '../database/models/PlaylistModel';
import MusicsModel from '../database/models/MusicsModel';
import UserModel from '../database/models/UserModel';
import ERR from './errors';

export default class PlaylistService {
  public getAllWithUserId = async (userId: number) => {
    const musics = { model: MusicsModel,
      as: 'musics',
      attributes: ['id', 'name'],
      through: { attributes: [] } };
    const listenersWithUserId = { model: UserModel,
      where: { id: userId  },
      as: 'listeners',
      attributes: ['id'],
      through: { attributes: [] } };
    const playlistData = await PlaylistModel
      .findAll({ include: [musics, listenersWithUserId] });
    return { playlistData };
  };

  public getAllAdmin = async () => {
    const musics = { model: MusicsModel,
      as: 'musics',
      attributes: ['id', 'name'],
      through: { attributes: [] } };
    const listenersWithUserId = { model: UserModel,
      as: 'listeners',
      attributes: [],
      through: { attributes: [] } };
    const playlistData = await PlaylistModel
      .findAll({ include: [musics, listenersWithUserId] });
    return { playlistData };
  };

  public getById = async (id: string) => {
    const playlistData = await PlaylistModel.findByPk(id);
    if (!playlistData) throw ERR.thisIdDoesNotExist;
    return { playlistData };
  };

  public create = async (playlist: IPlaylist) => {
    const { id, name, genre, musics } = playlist;
    const createdPlaylist = await PlaylistModel.create({ id, name, genre, musics });
    // console.log(musics)
    // await MusicsModel.bulkCreate(musics);
    return createdPlaylist;
  };

  public update = async (id: string, playlist: IPlaylist) => {
    const { name, genre } = playlist;
    const playlistData = await PlaylistModel.findByPk(id);
    if (!playlistData) throw ERR.thisIdDoesNotExist;
    await PlaylistModel.update({ name, genre }, { where: { id } });
  };

  public delete = async (id: string) => {
    const playlistData = await PlaylistModel.findByPk(id);
    if (!playlistData) throw ERR.thisIdDoesNotExist;
    await PlaylistModel.destroy({ where: { id } });
  };
}
