define ([
	'jQuery',
	'Underscore',
	'Backbone'

], function($, _, Backbone) {
	
	var contactListView = Backbone.View.extend ({
		el: $('#page'),

		initialize: function() {
			this.template = _.template( $('#list-contacts-template').html() );
		},

		events : {
			'click .deleteContact' : 'deleteContact'
		},

		deleteContact : function() {
			//console.log($(e.currentTarget));
		 	console.log($('.removeContact').val())
			this.model.destroy();
		},

		render: function() {
			$(this.el).html( this.template( { 
				contacts : this.collection.models
			}) );
		}
	});
	return contactListView;
});