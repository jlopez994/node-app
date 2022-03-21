import { ELogType } from '../interfaces/log';
import { Log } from '../models/log';

export function logInfo(msg: string) {
  return insertLog(msg, ELogType.INFO);
}
export function logError(msg: string, error: unknown) {
  return insertLog(msg, ELogType.ERROR, error);
}
export function logDebug(msg: string) {
  return insertLog(msg, ELogType.DEBUG);
}

function insertLog(message: string, type: ELogType, error?: unknown) {
  const err =
    error === null || error === undefined
      ? null
      : error instanceof Error
      ? error.stack
      : JSON.stringify(error);
  return Log.create({
    message,
    type,
    error: err
  });
}
