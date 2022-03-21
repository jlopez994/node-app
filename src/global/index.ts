export const PORT = parseInt(process.env.PORT || '8080');
export const LOGGER = process.env.LOGGER || 'short';
export const DEBUG = process.env.NODE_ENV === 'development';

export const DB_URL = process.env.DB_URL || 'sqlite:./db.sqlite';

export const EMAIL_API = process.env.EMAIL_API === '';

export const TELEGRAM_API_URL = process.env.TELEGRAM_API_URL || '';
export const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY || '';

export const CRON_JOBS: { [taskName: string]: string } = { _default: '* * * * *' };
