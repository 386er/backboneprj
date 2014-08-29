/*global Backbone*/

window.init = function(JSONdata, postHTML) {
	var BlogItem = Backbone.Model.extend({ });
	var BlogCollection = Backbone.Collection.extend({ model: BlogItem });
	var blogCollection = new BlogCollection();



	var BlogView = Backbone.View.extend({

		className: 'blogpost',

		events: {
			'mouseover': 'highLight',
			'mouseout' : 'unhighLight',
			'click .edit': 'editPost',
			'click .submitchange': 'changePost'
		},

		highLight: function() {
			this.el.style.backgroundColor = 'yellow';
			$(this.el).find('button')[0].style.display = 'inline';
		},

		unhighLight: function() {
			this.el.style.backgroundColor = 'transparent';
			$(this.el).find('button')[0].style.display = 'none';
		},

		editPost: function() {
			var title = '"' + this.model.get('title') + '"';
			var description = '"' + this.model.get('description') + '"';
			var author = '"' + this.model.get('author') + '"';

			$(this.el).find('h3').html(
				'Title <input type="text" class="title" style="margin:0px;' +
				'padding:0px;"  value=' + title + '>');

			$(this.el).find('.descr').html(
				'Description <input type="text" class= "description" style="margin:0px;' +
				'padding:0px;"  value=' + description + '>');

			$(this.el).find('.auth').html(
				'Author <input type="text" class="author" style="margin:0px;' +
				'padding:0px;"  value=' + author + '>');

			$(this.el).find('button').remove();
			$(this.el).append('<button class="submitchange" style="margin: 0px;' +
			'padding:0px; margin-left:10px;"> Submit Changes </button>');
		},

		changePost: function() {
			var title = $(this.el).find('.title')[0].value;
			var description = $(this.el).find('.description')[0].value;
			var author = $(this.el).find('.author')[0].value;
			this.model.set({
				title: title,
				description: description,
				author:author
			});
			this.render();

		},

		template: _.template(postHTML),

		render: function() {

			var attributes = this.model.toJSON();
			this.$el.html(this.template(attributes));
		}
	});




	var BlogEditView = Backbone.View.extend({

		template: _.template(

			'<form id="newentry">' +
			'Title: <input type="text" name="title" class="input" value= "<%=title%>" ><br>' +

			'Description: <input type="text" name="description"' +
			'size="40" value = " <%= description %> " class="input"> <br>' +

			'Author: <input type="text" name="author" value= " <%=author%> " class="input"> <br>' +

			'<input type="submit" value="Submit" id ="submit">' +
			'</form>'
		),

		render: function() {
			var attributes = this.model.toJSON();
			this.$el.html(this.template(attributes));

		}

	});

	var emptyView = new BlogItem(
		{title:'', description:'', author:'', id:'emtpyform'}
	);

	console.log(emptyView);

	var blogEditView = new BlogEditView({model: emptyView });
	blogEditView.render();

	$('#form').html(blogEditView.el);


	blogCollection.reset(JSONdata);

	console.log(blogCollection.length);


	var BlogCollectionView = Backbone.View.extend({

		initialize: function() {

			this.collection.on('add', this.addOne, this);
		},

		render: function() {
			this.collection.forEach(this.addOne, this);
		},

		addOne: function(blogItem) {
			var blogView  = new BlogView({model: blogItem});
			console.log(blogItem);
			blogView.render();
			this.$el.append(blogView.el);
		}
	});

	var blogCollectionView = new BlogCollectionView({collection: blogCollection});




	var refreshBlog = function() {

		blogCollectionView.render();

		$('#blogroll').html(blogCollectionView.el);

	};

	refreshBlog();




	$('#newentry').submit( function() {

		var title = this.elements[0].value;
		var description = this.elements[1].value;
		var author = this.elements[2].value;
		var id = blogCollection.length;

		$('.input').val('');

		var newblogItem = new BlogItem(
			{title: title, description: description, author:author, id:id});

		blogCollection.add(newblogItem);

		return false;

	});

};
