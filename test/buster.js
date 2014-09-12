/*global module*/
/*global require*/

var config = module.exports;

config['Backbone Project Test'] = {
	rootPath: '..',
	environment: 'browser',
	libs: [
		'src/library/require.js',
		'test/requireConfig.js'
	],
	sources: [
		'src/library/text.js',
		'src/library/jquery.js',
		'src/library/underscore.js',
		'src/library/backbone.js',
		'src/library/mustache.js',
		'src/modules/*.js',
		'src/modules/*.html'
	],
	tests: [
		'test/test-blogCollectionView.js',
		'test/test-blogCollection.js',
		'test/test-blogView.js',
		'test/test-blogItem.js',
		'test/test-blogEditView.js'
	],
	extensions: [require('buster-amd')],
};
