define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/home/main',
  'views/contacts/list',
  'collections/contacts'
], function($, _, Backbone, MainHomeView, ContactListView, ContactsCollection) {
      
  var AppRouter = Backbone.Router.extend( {
      
    initialize : function() {
      this.collection = new ContactsCollection();
    },

    routes: {
      '' : 'home',

      '/contacts': 'showContacts'
    },
    
    home: function() {
        var mainHomeView = new MainHomeView( { collection : this.collection } );
        mainHomeView.render(); 
    },

    showContacts: function() {
        var contactListView = new ContactListView( { collection : this.collection } );
        contactListView.render();
    }
  });

  return AppRouter;

});
