// import cors from 'cors';
import express, { Application } from 'express';
import logger from 'morgan';

import { DEBUG, LOGGER } from '../global';

class Express {
  public server: Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // this.server.use(cors());
    // this.server.set('trust proxy', 1);
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    if (DEBUG) this.server.use(logger('dev'));
    else this.server.use(logger(LOGGER));
  }

  routes() {
    // this.server.use('/v1/account', accountRouter);
  }
}

export default new Express().server;
