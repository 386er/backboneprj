/*global buster*/

define([
	'modules/blogcollection',
	'modules/blogcollectionview'
], function(BlogCollection, BlogCollectionView) {

	var assert = buster.assert;

	buster.testCase('A test case', {
		'for BlogCollectionView': function() {
			var view = new BlogCollectionView({collection: new BlogCollection()});
			assert.isObject(view);
		}
	});
});
