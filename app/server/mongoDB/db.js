var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/angularPetProjectDB');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var filePluginLib = require('mongoose-file');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;


var thumbnailPluginLib = require('mongoose-thumbnail');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;

var GallerySchema = new Schema({
	size: Number,
	name: String,
	path: String
});

var MainSliderSchema = new Schema({
	index: Number,
	image: String,
	current: Boolean,
	description: String
});

var UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	password: String
});

UserSchema.pre('save', function(next) {
	var user = this;

// only hash the password if it has been modified (or is new)
	if (!user.isModified('password')) return next();

// generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if (err) return next(err);

// hash the password using our new salt
		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if (err) return next(err);

// override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};




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
//GallerySchema.methods.post = function(entity) {
//	console.log("Posted:");
//	console.log(entity);
//};
////
//GallerySchema.methods.delete = function(entity) {
//	console.log("Deleted:");
//	console.log(entity);
//};

exports.GalleryItems = mongoose.model('galleryItems', GallerySchema);
exports.MainSliderItems = mongoose.model('mainSliderItems', MainSliderSchema);
exports.User = mongoose.model('user', UserSchema);
