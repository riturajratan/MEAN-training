'use strict';
var index = require('./controllers/'),
	users =require('./controllers/user');
/**
 * Application routes
 */
module.exports = function(app) {

 app.get('/api/users',users.query);
 app.get('/api/users/:id',users.show);
 app.post('/api/users',users.create);
 app.put('/api/users/:id',users.update);
 app.delete('/api/users/:id',users.delete);

app.get('/*',index.index);

};