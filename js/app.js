(function($){

	//The model acts as our JS object
	var Words = Backbone.Model.extend({
		defaults: {
			word1: 'Hello',
			word2: 'there!'
		},
	});

	//A collection is an array of models
	var WordList = Backbone.Collection.extend({
		model: Words
	});

	//The main view for our application
	var AppView = Backbone.View.extend({
		el: $('body'),

		//Where DOM events are bound to the View methods
		events: {
			'click button#add': 'addHello'
		},

		//Where binding happen, excluding events
		initialize: function(){
			_.bindAll(this, 'render', 'addHello', 'appendHellos');

			this.collection = new WordList();
			this.collection.bind('add', this.appendHellos) //collection event binder
			this.counter = 0;
			this.render();
		},

		//Renders the view
		render: function(){

			var self = this;
			$(this.el).append("<button id='add'>Add a Hello</button>");
			$(this.el).append("<ul></ul>");
			_(this.collection.models).each(function(word){
				self.appendHellos(word);
			}, this);
		},

		//addHello() deals only with the model/collections
		//View updates are delegated to the 'add' event listener appendHellos() below
		addHello: function(){
			this.counter++;
			var words = new Words();
			words.set({
				word2: words.get('word2') + this.counter
			});

			this.collection.add(words);
		},
 		
 		//Triggeres by collection event 'add', and handles visual update
 		appendHellos: function(words){
      		$('ul', this.el).append("<li>"+words.get('word1')+" "+words.get('word2')+"</li>");
    }
  });
			
//instantiate the main applicaion view
var appView = new AppView();
})(jQuery)
