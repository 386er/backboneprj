/*global backboneprj*/

define(['jquery',
		'backbone',
		'modules/blogitem'], function($, Backbone, BlogItem) {

	BlogCollection = Backbone.Collection.extend({
			model: BlogItem,
			comparator:  function(item) {

				if ($('#noneSort')[0].checked == true){
					return item.get('title');
				}
				else if ($('#descrSort')[0].checked == true){
					return item.get('description');
				}
				else if ($('#authSort')[0].checked == true){
					return item.get('author');
				}
			}
		})

	return BlogCollection

});
