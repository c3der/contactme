define([
	'Backbone'
], function( Backbone ) {
	var contactModel = Backbone.Model.extend ({
		defaults: {
			profilePic : "img/profilePic.png",
			name : null,
			street : null, 
			zip : null, 
			city : null, 
			category : "none"
		},

		validate : function(attrs) {
			if ( !attrs.profilePic ) {
				throw new Error( 'No profilePic.' );
			}

			if ( !attrs.name ) {
				throw new Error( 'name.' );
			}

			if ( !attrs.street ) {
				throw new Error( 'No street.' );
			}

			if ( !attrs.zip ) {
				throw new Error( 'No zip.' );
			}

			if ( !attrs.city ) {
				throw new Error( 'No city.' );
			}

			if ( !attrs.category ) {
				throw new Error( 'No category.' );
			}
		}
	});

	return contactModel;
});