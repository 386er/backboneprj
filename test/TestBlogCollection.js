/*global buster*/

define([
	'modules/blogCollection'

], function(BlogCollection) {

	var assert = buster.assert;

	buster.testCase('A blogCollection test case', {
		'setUp': function() {
			this.collection = new BlogCollection();
		},

		'for general setup': function() {
			assert.isObject(this.collection);
		}
	});
});
