/*global buster*/
define([
	'modules/blogItem',
], function(BlogItem) {

	var assert = buster.assert;

	buster.testCase('A blogItem test case', {
		'setUp': function() {
			this.item = new BlogItem();
		},

		'for general setup': function() {
			assert.isFunction(this.item.resetEmpty);
		},

		'for reset function': function() {
			var spy = this.spy(this.item, 'resetEmpty');
			this.item.resetEmpty();
			assert.called(spy);
			assert.equals('emptyform', this.item.get('id'));
		}
	});
});
