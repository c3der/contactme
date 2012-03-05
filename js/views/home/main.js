define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/contact',
  'collections/contacts'

], function($, _, Backbone, ContactModel, ContactCollection ){

  var mainHomeView = Backbone.View.extend({
    el: $("#page"),

    events : {
      'click #addContactBtn' : 'submitContactForm',
    },

    initialize: function() {
      this.template = _.template( $('#main-home-template').html() );
      
      this.collection.bind( 'add', this.createContact, this );
    },

    createContact: function( model ) {
      console.log( "Add on collection", model );
    },

    submitContactForm :function( e ) {
      e.preventDefault();

      try {
        this.collection.create( {
          profilePic : "img/profilePic.png",
          name: $('#name').val(),
          street: $('#street').val(),
          zip: this.$('#zip').val(),
          city: $('#city').val(),
          category : "none"
        } ); 
      } catch( error ) {
        console.log( "error:", error.message, error );
      } 
    },


    render: function() {
      $(this.el).html( this.template( { 
        contacts : this.collection.models
      }) );
    }
  
  });
  
  return mainHomeView;

});
