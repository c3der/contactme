// contactCollectionView.js
define(
	[
		'Backbone', 
		'views/contacts/contactView'
	],

	function( Backbone, ContactView )  {
		var ContactCollectionView = Backbone.View.extend({
			el: $( "#contactWrapper" ),
			initialize : function() {
				this.collection.bind( 'all', this.render, this );
			},

			render : function() {
				// Clear the element.
				this.$el.empty();

				// Create a separate view for each model.
				for( var i = 0; i < this.collection.length; i++ ) {
					var contactView = new ContactView( { model : this.collection.at( i ) } );
					this.$el.append( contactView.render().$el );
				}

				return this;
			}
		});

		return ContactCollectionView;
	}
);