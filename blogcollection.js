/*global backboneprj*/

	var BlogCollection = Backbone.Collection.extend({
		model: backboneprj.BlogItem,
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
	});
