define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/home/main',
  'views/contacts/list'
], function($, _, Backbone, mainHomeView, contactListView) {
      
  var AppRouter = Backbone.Router.extend( {
      
    routes: {
      //Defines URL routs
      '/contacts': 'showContacts',

      '*actions': 'defaultAction'
    },
    showContacts: function() {
      contactListView.render();
    },

    defaultAction: function( actions ) {
        mainHomeView.render(); 
    }
  });

  var initialize = function() {
    
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
