
define(['jquery',
	'backbone',
    'modules/blogitem'], function($, Backbone, BlogItem) {

	var BlogCollection = Backbone.Collection.extend({
		model: BlogItem,
		//compareBy: 'title',
		comparator:  function(item) {
			//return item.get(this.compareBy);
			if ($('#noneSort')[0].checked === true) {
				return item.get('title');
			}
			else if ($('#descrSort')[0].checked === true) {
				return item.get('description');
			}
			else if ($('#authSort')[0].checked === true) {
				return item.get('author');
			}
		}
	});

	return BlogCollection;

});
