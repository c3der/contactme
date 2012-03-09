define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/contact',
  'collections/contacts',
  'views/contacts/contactView'

], function($, _, Backbone, ContactModel, ContactCollection, ContactView){

  var CreateContactView = Backbone.View.extend({
    el: $( "#page" ),

    events : {
      'click #addContactBtn' : 'submitContactForm',
      'click #updateContactBtn' : 'updateContact',
      'click #backBtn' : 'render',
      'keyup #searchContact' : 'search',
      'keypress .inputField' : 'enterSave',
      'keypress .inputFieldEdit' : 'enterEdit'

    },

    initialize: function() {
      this.template = _.template( $( '#main-home-template' ).html() );

      this.collection.bind('add', this.render, this );
    },

    enterSave : function( e ) {
      if ( e.keyCode == 13) {
        this.submitContactForm( e );
        return false;
      }
    },

    enterEdit : function( e ) {
      if ( e.keyCode == 13) {
        this.updateContact( e );
        return false;
      }
    },


    submitContactForm :function( e ) {
      e.preventDefault();

      $('#nameValidation').css('visibility', 'hidden');
      $('#streetValidation').css('visibility', 'hidden');
      $('#zipValidation').css('visibility', 'hidden');
      $('#cityValidation').css('visibility', 'hidden');

      try {
        this.collection.create( {
          profilePic : "img/profilePic.png",
          name: $( '#name' ).val(),
          street: $( '#street' ).val(),
          zip: this.$( '#zip' ).val(),
          city: $( '#city' ).val(),
          category : $("input[name='categoryGroup']:checked").val()
        } ); 
      } catch( error ) {
          console.log( error.message );
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
          category : $("input[name='categoryGroup']:checked").val()
        });

        model.save();
        this.render();

      } catch( error ) {
        console.log( error.message );
      }
    },

    search: function( e ) {
      var letters = $( "#searchContact" ).val();
      this.renderList(this.collection.search( letters ) );
    },

    renderList : function( contacts ){
      $("#contactWrapper").html("");

      contacts.each( function(contact) {
        var view = new ContactView( { model : contact } );
        $("#contactWrapper").append(view.render().el);
      });

      return this;

    },

    render: function() {
      $(this.el).html( this.template );
    }
  
  });
  
  return CreateContactView;

});
