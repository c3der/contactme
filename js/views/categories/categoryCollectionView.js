// categoryCollectionView.js
define(
	[
		'Backbone', 
		'views/categories/categoryView'
	],

	function( Backbone, CategoryView )  {
		var CategoryCollectionView = Backbone.View.extend({
			el: $( "#categoriesWrapper" ),

			render : function() {
				// Clear the element.
				this.$el.empty();

				// Create a separate view for each model.
				for( var i = 0; i < this.collection.length; i++ ) {
					var categoryView = new CategoryView( { model : this.collection.at( i ) } );
					this.$el.append( categoryView.render().$el );
				}

				return this;
			}
		});

		return CategoryCollectionView;
	}
);