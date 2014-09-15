/*global buster*/

define([
	'modules/blogCollection',
	'modules/blogCollectionView',
	'modules/blogItem'
], function(BlogCollection, BlogCollectionView, BlogItem) {

	var assert = buster.assert;

	buster.testCase('A blogCollectionView test case', {
		'setUp': function() {
			this.item = new BlogItem();
			var collection = new BlogCollection({model: this.item});
			this.view = new BlogCollectionView({collection: collection});

		},

		'general setup': function() {
			assert.isObject(this.view);
		},


		'for add event ': function() {
			var spy = this.spy(this.view, 'addOne');
			this.view.collection.add(this.item);
			assert.called(spy);
			assert.calledWith(spy, this.item);
		}
	});

});
