define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/contacts',
  'views/contacts/contactCollectionView',
  'views/home/indexView'
], function( $, _, Backbone, ContactsCollection, ContactCollectionView, IndexView ) {
      
  var AppRouter = Backbone.Router.extend( {
      
    initialize : function() {
      this.collection = new ContactsCollection();
    },

    routes: {
      '' : 'home'
    },
    
    home: function() {
      var indexView = new IndexView( { collection : this.collection } );
      indexView.render();
      
      var contactCollectionView = new ContactCollectionView( { collection : this.collection } );
      contactCollectionView.render();
    }
  });

  return AppRouter;

});
