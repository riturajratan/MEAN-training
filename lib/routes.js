'use strict';
var index = require('./controllers/'),
	users =require('./controllers/user');
/**
 * Application routes
 */
module.exports = function(app) {

 app.get('/api/users',users.query);

app.get('/*',index.index);

};