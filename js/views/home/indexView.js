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
      'click #updateThisContact' : 'updateContact',
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
      
      var contactToEdit = this.collection.get( e.currentTarget.id );

      $( '#name' ).val( contactToEdit.attributes.name );
      $( '#street' ).val( contactToEdit.attributes.street );
      $( '#zip' ).val( contactToEdit.attributes.zip );
      $( '#city' ).val( contactToEdit.attributes.city );

      $( '#addContactBtn' ).val( 'Update' );
      $( '#addContactBtn' ).attr( 'id', '#updateThisContact' );
    },


    render: function() {
      $(this.el).html( this.template() );
    }
  
  });
  
  return IndexView;

});
