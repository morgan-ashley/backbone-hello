(function($){

	var AppView = Backbone.View.extend({
		el: $('body'),

		events: {
			'click button#add': 'addItem'
		},

		initialize: function(){
			_.bindAll(this, 'render', 'addItem');
			this.counter = 0;
			this.render();
		},

		render: function(){
			$(this.el).append("<button id='add'>Add a hello</button>");
			$(this.el).append("<ul></ul>");
		},

		addItem : function(){
			this.counter++;
			$('ul', this.el).append("<li>Hello there! " + this.counter+"</li>");
		}
	});

var appView = new AppView();
})(jQuery)