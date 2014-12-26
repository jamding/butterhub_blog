var Photo = require('./models/photo');

module.exports = function(app, api_key) {
	app.get('/api/photos/:last', function(req, res) {
		Photo.find({})
		.where('epoch').lt(req.params.last)
		.sort('-epoch')
		.limit(12)
		.exec(function(err, photos) {
			if(err) res.send(err);
			res.json(photos);
		});
	});
	
	app.post('/api/photos', function(req, res) {
		var timestamp = Date.now();
		if(req.body.api_string === undefined) {
			res.send('not authorized (1)');
			return;
		}
		var given_key = new Buffer(req.body.api_string, 'base64').toString('ascii');
		if(given_key !== api_key) {
			res.send('not authorized (2)');
			return;
		}
		Photo.create({
			name: req.body.name,
			path: req.body.path,
			epoch: timestamp
		}, function(err, photo) {
			if(err) res.send(err);
			res.json(photo);
		});
	});
	
	/*
	app.delete('/api/photos/:phodo_id', function(req, res) {
		Photo.remove({
			_id: req.params.photo_id
		}, function(err, todo) {
			if(err) res.send(err);
			Photo.find(function(err, photos) {
				if(err) res.send(err);
				res.send(photos);
			});
		});
	});
	*/

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};
