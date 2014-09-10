/*global backboneprj*/

define(['jquery',
		'backbone',
		'modules/blogview'], function($, Backbone, BlogView) {

	BlogCollectionView =  Backbone.View.extend({

			initialize: function() {
				this.collection.on('add', this.addOne, this);
				this.collection.on('sort', this.render, this);
			},

			render: function() {
				this.$el.html('');
				this.collection.forEach(this.addOne, this);
			},


			addOne: function(blogItem) {
				var blogView  = new BlogView({model: blogItem, collection: this.collection}); 
				blogView.setEditFnc(this.editFnc);
				blogView.render();
				this.$el.append(blogView.el);
			},

			setEditFnc: function(editFnc) {
				this.editFnc = editFnc;
			}

		})

	return BlogCollectionView

});