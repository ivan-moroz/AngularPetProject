var http = require("http");
var url = require("url");
var express = require('express');
var app = express();
var db = require('./../mongoDB/db.js');

var angularBridge = new (require('angular-bridge'))(app, {
	urlPrefix : '/api/'
});

angularBridge.addResource('galleryItems', db.GalleryItems);


function start() {
	app.use(express.static('../app'));
	var server = app.listen(8888);
}

exports.start = start;

