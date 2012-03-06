define([
	'Backbone',
	'models/category'
], 	function( Backbone, categoryModel ) {
	
	var CategoriesCollection = Backbone.Collection.extend({
		model : categoryModel,

		localStorage : new Store('Categories'),

		initialize : function() {
			this.fetch();

			if( this.models.length === 0 )
			{
				this.create( { categoryType : 'Family' } );
				this.create( { categoryType : 'Friends' } );
				this.create( { categoryType : 'Work' } );
			}
		}
	});

	return CategoriesCollection;
});