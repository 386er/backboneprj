
define(['jquery',
	'modules/blogcollection',
	'modules/blogeditview',
	'modules/blogitem',
	'modules/blogcollectionview',
'modules/json'], function($,
	BlogCollection,
	BlogEditView,
	BlogItem,
	BlogCollectionView,
	dataJSON) {

	var pageloader = {

		init : function() {

			var blogCollection = new BlogCollection();

			var blogEditView = new BlogEditView({
				model: new BlogItem, collection: blogCollection});


			blogEditView.render();
			$('#form').html(blogEditView.el);

			blogCollection.reset(dataJSON);


			var blogCollectionView = new BlogCollectionView({
				collection: blogCollection});

			blogCollectionView.setEditFnc(function(model) {
				blogEditView.model = model;
				blogEditView.render();
			});

			blogCollectionView.render();
			$('#blogroll').html(blogCollectionView.el);

		}

	};

	return pageloader;

});
