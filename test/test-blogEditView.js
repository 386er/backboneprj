/*global buster*/

define([
	'modules/blogItem',
	'modules/blogEditView'
], function( BlogItem, BlogEditView) {

	var assert = buster.assert;

	buster.testCase('A blogEditView test case', {
		'setUp': function() {
			var item = new BlogItem();
			this.view = new BlogEditView({model: item});
		},

		'for initialize function': function() {
			assert.isFunction(this.view.initialize);
		},

		'for render function': function() {
			var spy = this.spy(this.view.model, 'toJSON');
			this.view.render();
			assert.called(spy);
		}
	});
});

