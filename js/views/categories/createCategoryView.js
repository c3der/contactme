define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/category',
  'collections/categories'

], function($, _, Backbone, CategoryModel, CategoryCollection){

  var CreateCategoryView = Backbone.View.extend({
    el: $( "#categoriesWrapper" ),

    initialize: function() {
      this.template = _.template( $( '#category-template' ).html() );
    },

    render: function() {
      $(this.el).html( this.template );
    }
  
  });
  
  return CreateCategoryView;

});
