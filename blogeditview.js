/*global backboneprj*/

	backboneprj.BlogEditView = Backbone.View.extend({

		events: {
			'click #submit' : 'changePost',
			'change .radio' : 'sortBlog'
		},

		initialize:  function(options) {
			this.model.resetEmpty();
			this.model.on('change', this.render, this);
			this.collection = options.collection;
		},

		render: function() {
			var attributes = this.model.toJSON();
			this.$el.html(Mustache.render(backboneprj.FormViewTemplate,
				attributes));
		},

		changePost: function() {

			if ( this.model.get('id') == 'emptyform' ) {

				var title = $('.input')[0].value;
				var description = $('.input')[1].value;
				var author = $('.input')[2].value;
				var id = this.collection.length;

				var newblogItem = new backboneprj.BlogItem(
					{title: title, description: description, author:author, id:id});

				this.model = new backboneprj.BlogItem (
					{title:'', description:'', author:'', id:'emptyform'}
				);

				this.render();
				this.collection.add(newblogItem);

			}

			else {

				var title = $('.input')[0].value;
				var description = $('.input')[1].value;
				var author = $('.input')[2].value;

				this.model.set({
					title: title,
					description: description,
					author: author
				});

				this.model = new backboneprj.BlogItem (
					{title:'', description:'', author:'', id:'emptyform'}
				);

				this.render();

			}
		},

		sortBlog: function(){

			this.collection.sort();

		}


	});
