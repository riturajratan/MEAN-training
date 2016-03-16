'use strict';
var express = require('express'),
 	path = require('path'),
	config = require('./lib/config/config'),
	mongoose = require('mongoose'),
	fs= require('fs'),
	app = express();

	// Routing
 	app.use(express.static(path.join(__dirname, '/app')));
 	app.set('views', config.root + '/app/views');
    app.engine('html', require('ejs').renderFile); 
    app.set('view engine', 'html'); // set default engine
    console.log(config.mongo.uri);
    console.log(config.mongo.options);
    var db = mongoose.connect(config.mongo.uri);
	//  Bootstrap models-- to load all model files
	var modelsPath = path.join(__dirname, 'lib/model');
	fs.readdirSync(modelsPath).forEach(function (file) {
	  if (/(.*)\.(js$|coffee$)/.test(file)) {
	  	console.log(modelsPath + '/' + file);
	    require(modelsPath + '/' + file);
	  }
	});
	require('./lib/routes')(app);



	app.listen(config.port, function () {
	  console.log('Example app listening on port'+config.port);
	});

