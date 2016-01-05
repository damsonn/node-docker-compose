'use strict';

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const models = path.join(__dirname, '..', 'models');

// Bootstrap models
fs.readdirSync(models)
  .filter(file => ~file.indexOf('.js'))
  .forEach(file => require(path.join(models, file)));

mongoose.connect(process.env.DB);

module.exports = mongoose;
