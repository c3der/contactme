// app.js
define([
  'jQuery', 
  'Underscore', 
  'Backbone',
  'router'
], function($, _, Backbone, Router){
  return { 

      initialize : function() {

        var router = new Router();

        Backbone.history.start();
      }
}
});
