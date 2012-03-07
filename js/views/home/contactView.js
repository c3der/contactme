define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/contact',
  'collections/contacts'

], function($, _, Backbone, ContactModel, ContactCollection){

  var ContactView = Backbone.View.extend({

    events : {
      'click .deleteContact' : 'deleteContact',
      'click .editContact' : 'updateContact',
    },

    initialize: function() {
      this.template = _.template( $( '#contact-template' ).html() );

      this.model.bind('add', this.render, this );
      this.model.bind( 'remove' , this.render, this);
      this.model.bind( 'change', this.render, this); 
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

    deleteContact : function() {
      
      this.model.destroy();
    },

    updateContact : function( e ) {

      console.log('Edit');

      this.editTemplate = _.template( $( '#edit-contact-template' ).html() );


      $('#page').html( this.editTemplate( { contact : this.model.attributes } ) );

    },


    render: function() {
      $(this.el).html( this.template({
          contact : this.model.attributes
        }));

        return this;
    }
  
  });
  
  return ContactView;

});
