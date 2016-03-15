'use strict';
var express = require('express'),
 	path = require('path'),
	config = require('./lib/config/config'),
	app = express();

// Routing
require('./lib/routes')(app);

	app.use(express.static(path.join(config.root, 'app/')));
	app.set('views', config.root + '/app/views');
    app.engine('html', require('ejs').renderFile); 
    app.set('view engine', 'html'); // set default engine


app.listen(config.port, function () {
  console.log('Example app listening on port'+config.port);
});

