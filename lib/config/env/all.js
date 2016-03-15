'use strict';

var path = require('path'); // by this we get exactley path

var rootPath = path.normalize(__dirname + '/../../..');

module.exports ={
	root : rootPath,
	port:3000
};