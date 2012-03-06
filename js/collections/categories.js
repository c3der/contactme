define([
	'Backbone',
	'models/category'
], 	function( Backbone, categoryModel ) {
	
	var CategoriesCollection = Backbone.Collection.extend({
		model : categoryModel,

		initialize : function() {
		}
	});

	return CategoriesCollection;
});