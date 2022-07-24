import express from 'express';
import validateToken from '../middlewares/validateToken';
import PlaylistController from '../controllers/playlistController';
import passAuthDataToLocals from '../middlewares/passAuthDataToLocals';

const playlistController = new PlaylistController();

const router = express.Router();

router.use(passAuthDataToLocals);
router.get('/', playlistController.getAll);
router.get('/:id', playlistController.getById);
router.post('/', validateToken, playlistController.create);
router.put('/', playlistController.update);
router.delete('/', playlistController.delete);

export default router;
