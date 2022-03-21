import axios from 'axios';

import { EMAIL_API } from '../global';

// export function

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _request(
  template: string,
  email: string,
  locals: unknown,
  replyTo?: string,
  attachments?: { filename: string; content: string }[]
) {
  return axios
    .post(EMAIL_API + template, {
      email,
      locals,
      replyTo,
      attachments
    })
    .then(response => {
      if (!response.data.success) throw new Error(response.data.message);
    });
}
