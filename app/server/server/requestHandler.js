var db = require('./../mongoDB/db.js');
var formidable = require("formidable");
var url = require("url");

function uploadToGallery(req, successCallback, errorCallback){
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
		var fileName = file.name;
		//rename the incoming file to the file's name
		file.path = form.uploadDir + "/" + fileName;
	})
	.on('file', function(field, file) {
		var galleryItem = new db.GalleryItems(file);
		galleryItem.save(function(err) {
			if (err) {
				errorCallback(err);
			} else {
				successCallback();
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
}

function authenticate(req, callback){
	var parsedUrl = url.parse(req.url, true); // true to get query as object
	var queryAsObject = parsedUrl.query;
	var user = JSON.parse(queryAsObject.user);

	if(user.email == 'ivan') {
		callback('SUCCESS');
	} else {
		callback('ERROR');
	}
}

exports.uploadToGallery = uploadToGallery;
exports.authenticate = authenticate;
