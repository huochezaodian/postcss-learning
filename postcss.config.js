const path = require('path');
const fs = require('fs');

module.exports = {
	plugins: [
		require('postcss-cssnext')({
			browsers: ['last 5 versions', '> 10%']
		}),
		require('postcss-assets')({
		   loadPaths: ['./src/images/sprite']
		}),
		require('postcss-sprites')({
			//stylesheetPath: './dist',
			spritePath: './dist/images/'
		}),
		// require('postcss-modules')({
		//    	getJSON: function(cssFileName, json) {
		//      	var cssName = path.basename(cssFileName, '.css');
		//      	var dirName = path.resolve('./dist/', 'cssModules');
		//      	var jsonFileName = path.resolve(dirName, 'styles.js');
		// 		if(!fs.existsSync(dirName)){
		// 			fs.mkdirSync(dirName);
		// 		}
		//      	fs.writeFileSync(jsonFileName, "module.exports = " + JSON.stringify(json) + ";");
		//    	}
		// }),
	]
}