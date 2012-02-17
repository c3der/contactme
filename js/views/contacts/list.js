define ([
	'jQuery',
	'Underscore',
	'Backbone',
	'collections/contacts',
	'text!templates/contacts/list.html'

], function($, _, Backbone, contactsCollection, contactListTemplate) {
	
	var contactListView = Backbone.View.extend ({
		el: $('#page'),

		initialize: function() {
			this.collection = contactsCollection;
			this.collection.bind('add', this.exampleBind);
			this.collection = contactsCollection.add({ name: 'Martin Cedeskog', street: 'Lomvägen 33', zip: '192 56', city: 'Sollentuna' });
			this.collection = contactsCollection.add({ name: 'Max Juhlin', street: 'Lomvägen 319', zip: '192 56', city: 'Sollentuna' });
		},

		exampleBind: function( model ) {
			console.log(model);
		},

		render: function() {
			var data = {
				contacts: this.collection.models,
				_: _
			};
			var compiledTemplate = _.template( contactListTemplate, data );
			$('#page').html( compiledTemplate );
		}
	});
	return new contactListView;
});