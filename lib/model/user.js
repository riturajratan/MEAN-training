'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    mongoose.set('debug', true);

/**
 * User Schema
 */
var UserSchema = new Schema({
  name: String,
  lastname: String,
  });

module.exports = mongoose.model('User', UserSchema);
