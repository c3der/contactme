define([
	'Underscore',
	'Backbone'
], function(_, Backbone) {
	var contactModel = Backbone.Model.extend ({
		defaults: {
			contactID : 0,
			name : null,
			street : null, 
			zip : null, 
			city : null, 
			categoryID : 0
		},

		initialize: function() {
		}
	});
	return contactModel;

});