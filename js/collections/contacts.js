define([
	'Backbone',
	'models/contact'
], 	function( Backbone, contactModel ) {
	
	var ContactsCollection = Backbone.Collection.extend({
		model : contactModel,

		localStorage : new Store('Contacts'),

		initialize : function() {
			this.fetch();
		}
	});

	return ContactsCollection;
});