define([
	'jQuery',
	'Underscore',
	'Backbone',
	'models/contact'
], 	function($, _, Backbone, contactModel){
		var contactsCollection = Backbone.Collection.extend({
			model : contactModel,
			initialize : function(){
				
			}
	});

	return new contactsCollection;
});