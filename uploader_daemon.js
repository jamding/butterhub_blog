var fs = require('fs');
var querystring = require('querystring');
var http = require('http');
var request = require('request');


var config_file = 'daemon_config.json';
if(!fs.existsSync(config_file)) {
	console.log('Missing file ./daemon_config.json');
	return;
}

var options = JSON.parse(fs.readFileSync(config_file, 'utf8'));
if(!options || !options.dropbox_url || !options.target_dir || !options.create_api) {
	console.log('Missing configuration options from ' + config_file);
	return;
}

fs.watch(config_file, function(event, filename) {
	console.log('config change detected');
	if(filename === config_file && event === 'change') {
		console.log('reloading new config');
		fs.unwatchFile(options.target_dir);
		options = JSON.parse(fs.readFileSync(config_file, 'utf8'));
		fs.watch(options.target_dir, uploadHandler);
		console.log(options);
	}
});

fs.watch(options.target_dir, uploadHandler);

function uploadHandler(event, filename) {
	console.log('trigger');
	if(event === 'change' || filename === null) {
		return;
	} else {
		var basename = filename.split('.')[0];
		console.log(basename);
		request.post(
			options.create_api,
			{ form: { name: basename.replace('_', ''), path: options.dropbox_url + filename } },
			function (error, response, body) {
				console.log('Error: ' + error);
				console.log('Response: ' + response);
				console.log('Body: ' + body);
			}
		);
	}

}