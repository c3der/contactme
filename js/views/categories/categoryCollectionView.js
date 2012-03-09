define(
	[
		'Backbone', 
		'views/categories/categoryView'
	],

	function( Backbone, CategoryView )  {
		var CategoryCollectionView = Backbone.View.extend({
			el: $( "#categoriesWrapper" ),
			initialize : function() {
			},

			render : function() {
				this.$el.empty();
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