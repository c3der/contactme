define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/contacts',
  'models/contact'

], function($, _, Backbone, contactsCollection, contactModel){

  var mainHomeView = Backbone.View.extend({
    el: $("#page"),

    events : {
      'click #addContactBtn' : 'submitContactForm',
    },

    initialize: function() {
      this.template = _.template( $('#main-home-template').html() );
      this.collection.bind('add', this.createContact, this);
    },

    createContact: function( model ) {
      console.log('Körs innan');
      console.log(model);
      model.save();

      console.log('körs efter');
    },

    submitContactForm :function( e ) {
      
      var nameInput = this.$('#name').val();
      var streetInput = this.$('#street').val();
      var zipInput = this.$('#zip').val();
      var cityInput = this.$('#city').val();

      this.collection.create( { name: nameInput, street: streetInput, zip: zipInput, city: cityInput } ); 
    },


    render: function(){
      $(this.el).html( this.template );
    }
  
  });
  
  return mainHomeView;

});
