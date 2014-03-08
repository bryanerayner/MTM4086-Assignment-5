


Store.Router.map(function() {
	// // When we're at .html#/, go to 'shop' template.
 //  this.resource('shop', { path: '/' }, function(){
 //  	this.route("new");
 //  });
 
  this.resource('promos', function(){
  	
  });

  this.resource('games', function(){
  	
  });

});

Store.ApplicationRoute = Ember.Route.extend({
  previousRoute: 'index', //will be a variable in the real app
  

});

Store.IndexRoute = Ember.Route.extend({
	// render: function(){
	//     this.render('promos');
	// }
	// redirect:function()
	// {
	// 	this.transitionTo('promos');
	// }
});


Store.PromosRoute = Ember.Route.extend({
	render:function()
	{
		this.render('posts', {
			into:'index',
			outlet:'promos',
			controller:'promosController'
		});
	},

	setupController: function(controller, model) {
		controller.set('model', model);
	},


	model:function(){
		return this.store.find('promo');
	}
});


Store.PromosController = Ember.ArrayController.extend();

Store.GamesRoute = Ember.Route.extend({

	model:function(){
		return this.store.find('game');
	}
});


Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
 
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});
