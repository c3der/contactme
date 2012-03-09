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

		search : function( letters ){
			if( letters == "" ) {
				return this;
	 		}

			var pattern = new RegExp( letters, "i" );
				return _( this.filter( function( data ) {
			  		return pattern.test( data.get( "name" ) );
				}));
		}
	});

	return ContactsCollection;
});