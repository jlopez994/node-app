import { Sequelize } from 'sequelize-typescript';

import { DB_URL } from '../global';
import * as models from '../models';

class DB {
  public dbConnection: Sequelize | undefined;

  async connect() {
    this.dbConnection = new Sequelize(DB_URL);
    this.addModels();
    await this.sync();
  }

  private addModels() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _models: { [file: string]: any } = models;
    this.dbConnection?.addModels(Object.keys(_models).map(k => _models[k]));
  }

  private sync() {
    return this.dbConnection?.sync();
  }
}

export default new DB();
