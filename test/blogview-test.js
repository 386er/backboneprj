/*global buster*/
define([
	'modules/blogview',
	'modules/blogitem'
], function(BlogView, BlogItem) {

	var assert = buster.assert;

	buster.testCase('A test case', {
		'for BlogView': function() {
			assert.equals('blogpost', (new BlogView({model: new BlogItem()})).className);
		}
	});

});
