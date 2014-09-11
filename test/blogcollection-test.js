/*global buster*/

define([
	'modules/blogcollection'

], function(BlogCollection) {

	var assert = buster.assert;

	buster.testCase('A test case', {
		'for BlogCollection': function() {
			var collection = new BlogCollection();
			assert.isObject(collection);

		}
	});
});
