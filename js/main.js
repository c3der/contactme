// main.js
require.config({
  paths: {
    jQuery: 'libs/jquery/jquery',
    Underscore: 'libs/underscore/underscore',
    Backbone: 'libs/backbone/backbone'
  }

});

require([
  'app',
], function(App){
  App.initialize();
});