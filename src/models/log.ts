import { Column, Model, Table } from 'sequelize-typescript';

import { ELogType } from '../interfaces/log';

@Table({ timestamps: true })
export class Log extends Model {
  @Column
  declare message: string;

  @Column({ defaultValue: ELogType.INFO })
  declare type: ELogType;

  @Column
  declare error: string;
}
