'use strict';
var index = require('./controllers/')
/**
 * Application routes
 */
module.exports = function(app) {

app.get('/*',index.index);

};