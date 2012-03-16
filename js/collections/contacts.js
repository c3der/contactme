// contacts.js
define([
	'Backbone',
	'models/contact'
], 	function( Backbone, contactModel ) {
	
	var ContactsCollection = Backbone.Collection.extend({
		model : contactModel,

		localStorage : new Store('Contacts'),

		initialize : function() {
			this.fetch();
		},

		// Retrieve the model corresponding to the search on name, street, zip or city.
		search : function( letters ){
			if( letters == "" ) {
				return this;
	 		}

			var pattern = new RegExp( letters, "i" );
				return _( this.filter( function( data ) {
			  		return pattern.test( data.get( "name" ) + data.get("street") + data.get("zip") + data.get("city"));
				}));
		},

		// Sort in alphabetic order.
		comparator : function( model ) {
			return model.get( 'name' );
		}
	});

	return ContactsCollection;
});