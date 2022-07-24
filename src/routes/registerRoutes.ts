import * as express from 'express';
import RegisterController from '../controllers/registerController';

const registerController = new RegisterController();

const router = express.Router();

router.post('/', registerController.register);

export default router;
