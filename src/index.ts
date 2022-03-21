#!/usr/bin/env node
/* eslint-disable no-console */
import 'dotenv/config';

import db from './@core/db';
import server from './@core/express';
import job from './@core/job';
import { PORT } from './global';

(async () => {
  try {
    await db.connect();
    console.debug('DB conectada');
    job.init();
    console.debug('Tareas iniciadas');
    server.listen(PORT, () => console.debug('Server lanzado en ' + PORT));
  } catch (err) {
    console.log(err);
  }
})();
