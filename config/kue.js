'use strict';

const kue = require('kue');
const queue = kue.createQueue({
  redis: process.env.REDIS
});

module.exports = queue;
