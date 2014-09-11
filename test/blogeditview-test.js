/*global buster*/
define([
	'modules/blogitem',
	'modules/blogeditview'
], function( BlogItem, BlogEditView) {

	var assert = buster.assert;

	buster.testCase('A test case', {
		'for BlogEditView': function() {
			var blogeditview = new BlogEditView({model: new BlogItem()});
			assert.isFunction(blogeditview.initialize);
		}
	});
});
