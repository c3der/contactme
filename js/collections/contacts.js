define([
	'Backbone',
	'models/contact'
], 	function( Backbone, contactModel ) {
	
	var contactsCollection = Backbone.Collection.extend({
		model : contactModel,

		localStorage : new Store('Contacts'),

		initialize : function() {
			this.fetch();
		}
	});

	return contactsCollection;
});