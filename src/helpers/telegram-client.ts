import axios from 'axios';

import { DEBUG, TELEGRAM_API_KEY, TELEGRAM_API_URL } from '../global';

export function sendMessage(message: string) {
  if (DEBUG) return Promise.resolve();
  return axios
    .post(TELEGRAM_API_URL, { message }, { headers: { 'x-api-key': TELEGRAM_API_KEY } })
    .then(response => {
      if (!response.data.success) throw new Error(response.data.msg);
    });
}
