/*global buster*/
define([
	'modules/blogView',
	'modules/blogItem'
], function(BlogView, BlogItem) {

	var assert = buster.assert;

	buster.testCase('A blogView test case', {
		'setUp': function() {
			var item = new BlogItem();
			this.view =  new BlogView({model: item});
		},

		'for general setup': function() {
			assert.equals('blogpost', this.view.className);
		},

		'for render function': function() {
			var spy = this.spy(this.view.$el, 'html');
			this.view.render();
			assert.called(spy);
		}
	});
});
