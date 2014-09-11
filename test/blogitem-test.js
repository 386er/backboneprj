/*global buster*/
define([
	'modules/blogitem',
], function(BlogItem) {

	var assert = buster.assert;

	buster.testCase('A test case', {
		'for BlogItem': function() {
			var blogitem =  new BlogItem();
			assert.isFunction(blogitem.resetEmpty);
		}
	});
});
