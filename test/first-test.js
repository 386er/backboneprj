/*global buster*/
define([
	'modules/blogview',
	'modules/blogitem'
], function(BlogView, BlogItem) {

	var assert = buster.assert;

	buster.testCase('A test case', {
		'test the module': function() {
			assert.equals('blogpost', (new BlogView({model: new BlogItem()})).className);
		}
	});
});
