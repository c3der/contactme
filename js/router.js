define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/home/main',
  'collections/contacts'
], function($, _, Backbone, MainHomeView, ContactsCollection) {
      
  var AppRouter = Backbone.Router.extend( {
      
    initialize : function() {
      this.collection = new ContactsCollection();
    },

    routes: {
      '' : 'home'
    },
    
    home: function() {
        var mainHomeView = new MainHomeView( { collection : this.collection } );
        mainHomeView.render();
    }
  });

  return AppRouter;

});
