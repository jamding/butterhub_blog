var fs = require('fs');
var src_dir = 'C:/Users/jamdi_000/Dropbox/IFTTT/Instagram';


var dirents = fs.readdirSync(src_dir);
for(var i in dirents) {
	var old_path = src_dir + '/' + dirents[i];
	var regex = new RegExp('_', 'g');
	var new_path = src_dir + '/' + dirents[i].replace(regex, ' ');
	console.log(new_path);
	fs.renameSync(old_path, new_path);
}

