// router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/contacts',
  'views/contacts/contactCollectionView',
  'views/contacts/createContactView',
  'collections/categories',
  'views/categories/categoryCollectionView'
], function( $, _, Backbone, ContactsCollection, ContactCollectionView, CreateContactView, CategoriesCollection, CategoryCollectionView ) {
      
  var AppRouter = Backbone.Router.extend( {
      
    initialize : function() {
      this.collection = new ContactsCollection();
      this.categoriesCollection = new CategoriesCollection();
    },

    routes: {
      '' : 'home',
      '/category/*type' : 'category',
      '*actions' : 'defaultRoute'

    },
    
    home: function() {
      var createContactView = new CreateContactView( { collection : this.collection } );
      createContactView.render();

      var categoryCollectionView = new CategoryCollectionView( { collection : this.categoriesCollection } );
      categoryCollectionView.render();
      
      var contactCollectionView = new ContactCollectionView( { collection : this.collection } );
      contactCollectionView.render();
      
    },

    category : function( type ) {
      console.log( 'Category: ', type );
    },

    defaultRoute : function( actions ) {
     console.log( actions ); 
    }
  });

  return AppRouter;

});
