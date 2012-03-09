define([
	'Backbone'
], function( Backbone ) {
	var categoryModel = Backbone.Model.extend ({
		defaults: {
			type : "none"
		},
	});

	return categoryModel;
});