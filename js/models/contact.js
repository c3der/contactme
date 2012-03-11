// contact.js
define([
	'jQuery',
	'Backbone'
], function( $, Backbone ) {
	var contactModel = Backbone.Model.extend ({
		defaults: {
			profilePic : "img/profilePic.png",
			name : null,
			street : null, 
			zip : null, 
			city : null, 
			category : "none"
		},

		// Validate the input fields when try to submit.
		validate : function( attrs ) {
			
			if ( !attrs.name || !attrs.street || !attrs.zip || !attrs.city || !attrs.category ) {
				
				if( !attrs.name)
				{
					$('#nameValidation').css('visibility', 'visible');
				}

				if( !attrs.street )
				{
					$('#streetValidation').css('visibility', 'visible');
				}

				if( !attrs.zip )
				{
					$('#zipValidation').css('visibility', 'visible');
				}

				if( !attrs.city )
				{
					$('#cityValidation').css('visibility', 'visible');
				}

				throw new Error( 'Could not save contact.' );
			}
		}
	});

	return contactModel;
});