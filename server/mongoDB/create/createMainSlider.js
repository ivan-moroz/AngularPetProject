var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/angularPetProjectDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection to angularPetProjectDB error:'));
db.once('open', function (callback) {
	console.log('Connected to angularPetProjectDB!');
});

var MainSliderItem = mongoose.model('MainSliderItem', {
	index: Number,
	image: String,
	current: Boolean,
	description: String
});

var item1 = new MainSliderItem({
	"index": 0,
	"image": "http://placehold.it/1900x1080&text=Slide One",
	"current": true,
	"description": "First slide"
});

var item2 = new MainSliderItem({
	"index": 1,
	"image": "http://placehold.it/1900x1080&text=Slide Two",
	"current": false,
	"description": "Second slide"
});

var item3 = new MainSliderItem({
	"index": 2,
	"image": "http://placehold.it/1900x1080&text=Slide Three",
	"current": false,
	"description": "Third slide"
});

item1.save(function (err) {
	if (err) console.log('Some problem with saving Slider Item');
});

item2.save(function (err) {
	if (err) console.log('Some problem with saving Slider Item');
});

item3.save(function (err) {
	if (err) console.log('Some problem with saving Slider Item');
});
