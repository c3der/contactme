define([
	'Underscore',
	'Backbone'
], function(_, Backbone) {
	var contactModel = Backbone.Model.extend ({
		defaults: {
			profilePic : "img/profilePic.png",
			name : null,
			street : null, 
			zip : null, 
			city : null, 
			category : "none"
		}
	});

	return contactModel;
});