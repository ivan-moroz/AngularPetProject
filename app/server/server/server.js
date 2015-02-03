var http = require("http");
var url = require("url");
var express = require('express');
var app = express();
var db = require('./../mongoDB/db.js');
var bodyParser = require('body-parser');
var fs = require("fs");
var formidable = require("formidable");

var Picture = db.GalleryItems;

app.use(bodyParser.json());

app.use(express.static('../../app'));

var angularBridge = new (require('angular-bridge'))(app, {
	urlPrefix : '/api/'
});

app.post('/api/galleryUpload', function(req, res, next){
	var form = new formidable.IncomingForm();


	form.uploadDir = "./../resources/gallery";
	form.keepExtensions = true;

	form.on('error', function(err) {
		throw err;
	})
		.on('field', function(field, value) {
			//receive form fields here
		})
		/* this is where the renaming happens */
		.on ('fileBegin', function(name, file){
			fileName = file.name;
			//rename the incoming file to the file's name
			file.path = form.uploadDir + "/" + fileName;
		})
		.on('file', function(field, file) {
			var galleryItem = new db.GalleryItems(file);
			galleryItem.save(function(err) {
				if (err) {
					return next(err);
				}
			});

		})
		.on('progress', function(bytesReceived, bytesExpected) {
			var percent = (bytesReceived / bytesExpected * 100) | 0;
			process.stdout.write('Uploading: %' + percent + '\r');
		})
		.on('end', function() {
			console.log('end');
		});

	form.parse(req);

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("success");
	res.end();
});

angularBridge.addResource('galleryItems', db.GalleryItems);
angularBridge.addResource('mainSliderItems', db.MainSliderItems);


//angularBridge.addResource('galleryUpload', db.GalleryItems);
function start() {
	var server = app.listen(8888);
}

exports.start = start;

