/*global backboneprj*/

	backboneprj.BlogItem = Backbone.Model.extend({
		resetEmpty: function() {
			this.set({title:'', description:'', author:'', id:'emptyform'})
		}
	});
