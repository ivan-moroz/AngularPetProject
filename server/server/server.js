var http = require("http");
var url = require("url");
var express = require('express');
var app = express();
var db = require('./../mongoDB/db.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var angularBridge = new (require('angular-bridge'))(app, {
	urlPrefix : '/api/'
});
angularBridge.addResource('galleryItems', db.GalleryItems);
angularBridge.addResource('mainSliderItems', db.MainSliderItems);
angularBridge.addResource('galleryUpload', db.GalleryItems);


//angularBridge.addResource('galleryUpload', db.GalleryItems);
function start() {
	app.use(express.static('../app'));
	var server = app.listen(8888);
}

exports.start = start;

