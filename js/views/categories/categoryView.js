define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/category',
  'collections/categories'

], function($, _, Backbone, CategoryModel, CategoriesCollection){

  var CategoryView = Backbone.View.extend({

    initialize: function() {
      this.template = _.template( $( '#category-template' ).html() );

      this.model.bind('add', this.render, this );
    },

    render: function() {
      $(this.el).html( this.template({
          category : this.model.attributes
        }));

        return this;
    }
  
  });
  
  return CategoryView;

});
