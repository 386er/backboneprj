

requirejs.config({

	baseURL: 'http://localhost/~intern/repos/backboneprj',
	paths: {
		text: 'library/text',
		jquery: 'library/jquery',
		underscore: 'library/underscore',
		backbone: 'library/backbone',
		mustache: 'library/mustache'
	}
});


require(['modules/application'], function(pageloader) {

	pageloader.init();

});

