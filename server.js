'use strict';
var express = require('express'),
 	path = require('path'),
	config = require('./lib/config/config'),
	mongoose = require('mongoose'),
	app = express();

	// Routing
 	app.use(express.static(path.join(__dirname, '/app')));
 	app.set('views', config.root + '/app/views');
    app.engine('html', require('ejs').renderFile); 
    app.set('view engine', 'html'); // set default engine
    var db = mongoose.connect(config.mongo.uri, config.mongo.options);

	require('./lib/routes')(app);


	app.listen(config.port, function () {
	  console.log('Example app listening on port'+config.port);
	});

