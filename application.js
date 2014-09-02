/*global Backbone*/

window.init = function() {

	var blogCollection = new BlogCollection();

	var blogEditView = new backboneprj.BlogEditView({
		model: new backboneprj.BlogItem, collection: blogCollection});

	blogEditView.render();
	$('#form').html(blogEditView.el);

	blogCollection.reset(backboneprj.data);

	var blogCollectionView = new backboneprj.BlogCollectionView({
		collection: blogCollection});

	blogCollectionView.setEditFnc(function(model) {
		blogEditView.model = model;
		blogEditView.render();
	});


	blogCollectionView.render();
	$('#blogroll').html(blogCollectionView.el);

};
