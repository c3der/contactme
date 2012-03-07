define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/contact',
  'collections/contacts'

], function($, _, Backbone, ContactModel, ContactCollection){

  var IndexView = Backbone.View.extend({
    el: $( "#page" ),

    events : {
      'click #addContactBtn' : 'submitContactForm',
      'click #updateContactBtn' : 'updateContact',
    },

    initialize: function() {
      this.template = _.template( $( '#main-home-template' ).html() );

      this.collection.bind('add', this.render, this );
    },

    submitContactForm :function( e ) {
      e.preventDefault();

      try {
        this.collection.create( {
          profilePic : "img/profilePic.png",
          name: $( '#name' ).val(),
          street: $( '#street' ).val(),
          zip: this.$( '#zip' ).val(),
          city: $( '#city' ).val(),
          category : "none"
        } ); 
      } catch( error ) {
          console.log( "error:", error.message, error );
      } 
    },

    updateContact : function( e ) {
      e.preventDefault();

      var model = this.collection.get( this.$('#contactID').val() );

      try {
        model.set( {
          profilePic : "img/profilePic.png",
          name: $( '#name' ).val(),
          street: $( '#street' ).val(),
          zip: this.$( '#zip' ).val(),
          city: $( '#city' ).val(),
          category : "none"
        });

        model.save();
        this.render();

      } catch( error ) {
        console.log( 'error: ', error.message, error);
      }
    },


    render: function() {
      $(this.el).html( this.template );
    }
  
  });
  
  return IndexView;

});
