var http = require("http");
var url = require("url");
var express = require('express');
var app = express();
var db = require('./../mongoDB/db.js');
var bodyParser = require('body-parser');
var requestHandler = require("./requestHandler.js");

app.use(bodyParser.json());

app.use(express.static('../../app'));

var angularBridge = new (require('angular-bridge'))(app, {
	urlPrefix : '/api/'
});

app.post('/api/galleryUpload', function(req, res, next){
	requestHandler.uploadToGallery(req,
	function successCallback(){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("success");
		res.end();
	}, function errorCallback(){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write("error");
		res.end();
	});
});

angularBridge.addResource('galleryItems', db.GalleryItems);
angularBridge.addResource('mainSliderItems', db.MainSliderItems);


//angularBridge.addResource('galleryUpload', db.GalleryItems);
function start() {
	var server = app.listen(8888);
}

exports.start = start;

