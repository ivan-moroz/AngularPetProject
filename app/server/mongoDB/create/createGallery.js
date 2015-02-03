var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angularPetProjectDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection to angularPetProjectDB error:'));
db.once('open', function (callback) {
	console.log('Connected to angularPetProjectDB!');
});

var GalleryItem = mongoose.model('GalleryItem', {thumbUrl : String, url: String });

var item1 = new GalleryItem({
	"thumbUrl": "http://placehold.it/1900x1080&text=Slide One",
	"url": "http://placehold.it/1900x1080&text=Slide One"
});

item1.save(function (err) {
	if (err) console.log('Some problem with saving Gallery Item');
});

var item2 = new GalleryItem({
	"thumbUrl": "http://placehold.it/1900x1080&text=Slide Two",
	"url": "http://placehold.it/1900x1080&text=Slide Two"
});

item2.save(function (err) {
	if (err) console.log('Some problem with saving Gallery Item');
});

var item3 = new GalleryItem({
	"thumbUrl": "http://placehold.it/1900x1080&text=Slide Three",
	"url": "http://placehold.it/1900x1080&text=Slide Three"
});

item3.save(function (err) {
	if (err) console.log('Some problem with saving Gallery Item');
});


