/* eslint-disable no-console */
import cron from 'node-cron';

import { CRON_JOBS } from '../global';
import { logError } from '../helpers/logger';
import * as JOBS from '../jobs';

class Job {
  private active: cron.ScheduledTask[] = [];

  init() {
    const tJobs: { [task: string]: () => Promise<unknown> } = JOBS;
    Object.keys(tJobs).forEach(name => {
      const jobName = name.toLowerCase().replaceAll('_', ' ');
      let working = false;
      this.active.push(
        cron.schedule(CRON_JOBS[name], async () => {
          if (working) {
            console.debug('Ignored iteration ' + jobName);
            return;
          }
          working = true;
          console.debug('New iteration ' + jobName);
          try {
            const fromTime = new Date().getTime();
            await tJobs[name]();
            console.debug(
              `Ended iteration ${jobName}; Elapsed: ${new Date().getTime() - fromTime} ms`
            );
          } catch (err) {
            await logError('Error iteration ' + jobName, err);
          } finally {
            working = false;
          }
        })
      );
    });
  }

  stop() {
    this.active.forEach(task => task.stop());
  }
}

export default new Job();
