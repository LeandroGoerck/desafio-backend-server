import express from 'express';
import registerRoutes from './routes/registerRoutes';
import errorMiddleware from './middlewares/errorMiddleware';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());

    this.app.use('/register', registerRoutes);

    this.app.use(errorMiddleware);
  }
  public start(PORT: string | number):void {
    this.app.listen(PORT);
    console.log(`Playlist server running in port ${PORT}`);
  }
}

export { App };

export const { app } = new App();