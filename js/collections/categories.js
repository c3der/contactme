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
				this.create( { type : 'none' } );
				this.create( { type : 'family' } );
				this.create( { type : 'friends' } );
				this.create( { type : 'work' } );
			}
		},
	});

	return CategoriesCollection;
});