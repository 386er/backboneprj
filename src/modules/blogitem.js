/*global backboneprj*/

define(['backbone'], function( Backbone ) {

	BlogItem =  Backbone.Model.extend({
			resetEmpty: function() {
				this.set({title:'', description:'', author:'', id:'emptyform'})
			}
		})

	return BlogItem

});
