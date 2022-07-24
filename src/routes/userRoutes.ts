import * as express from 'express';
import passAuthDataToLocals from '../middlewares/passAuthDataToLocals';
import UserController from '../controllers/userController';

const userController = new UserController();

const router = express.Router();

router.use(passAuthDataToLocals);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.put('/', userController.update);
router.delete('/', userController.delete);

export default router;
