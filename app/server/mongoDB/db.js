var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/angularPetProjectDB');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;


var thumbnailPluginLib = require('mongoose-thumbnail');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;

var GallerySchema = new Schema({
	size: Number,
	name: String,
	path: String
});

//GallerySchema.plugin(thumbnailPlugin, {
//	name: "photo",
//	inline: false
//});

var MainSliderSchema = new Schema({
	index: Number,
	image: String,
	current: Boolean,
	description: String
});



// You can optionally add a method to schema.methods that is executed based
// on the type of HTTP request with the names "query", "get", "put", "post", and "delete"
// The callback receives the affected entities as it's parameter.
//GallerySchema.methods.query = function(entities) {
//	console.log("Queried:");
//	console.log(entities);
//};
//
//GallerySchema.methods.get = function(entity) {
//	console.log("Got:");
//	console.log(entity);
//};
//
//GallerySchema.methods.put = function(entity) {
//	console.log("Put:");
//	console.log(entity);
//};
//
GallerySchema.methods.post = function(entity) {
	console.log("Posted:");
	console.log(entity);
};
////
//GallerySchema.methods.delete = function(entity) {
//	console.log("Deleted:");
//	console.log(entity);
//};

exports.GalleryItems = mongoose.model('galleryItems', GallerySchema);
exports.MainSliderItems = mongoose.model('mainSliderItems', MainSliderSchema);
