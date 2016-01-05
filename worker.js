'use strict';

const debug = require('debug')('node-docker-compose:worker');
const queue = require('./config/kue');

debug('stated worker process');

queue.process('process_stats', function(job, done){
  debug('doing some long stuffs for stats');
  done();
});
