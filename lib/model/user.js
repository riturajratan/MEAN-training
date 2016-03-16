'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    mongoose.set('debug', true);

/**
 * User Schema
 */
var UserSchema = new Schema({
  name: String,
  fullname: String,
  alias: String,
  address: {
    street:String,
    city:String,
    country: {type:String, default: 'India'}
  },
  email: { type: String,required:true,unique:true },
  phone:String,
  });

module.exports = mongoose.model('User', UserSchema);
