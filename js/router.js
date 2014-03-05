


Store.Router.map(function() {
	// // When we're at .html#/, go to 'shop' template.
 //  this.resource('shop', { path: '/' }, function(){
 //  	this.route("new");
 //  });
 
  this.resource('promos', function(){
  	this.route("new");
  });

  this.resource('promo', {path:'/promo/:promo_id'});

  this.resource('games', function(){
  	this.route("new");
  })

});

Store.ApplicationRoute = Ember.Route.extend({
  previousRoute: 'index', //will be a variable in the real app
  

});

Store.IndexRoute = Ember.Route.extend({
	redirect:function()
	{
		this.transitionTo('promos');

	}
});

Store.PromosIndexRoute = Ember.Route.extend({
	model:function(){
		return this.store.find('promo');
	}
});

Store.PromoRoute = Ember.Route.extend({

	setupController:function(controller, model){
		controller.set('model', model);
	},
	model:function(params){
			return this.store.find('promo', params.promo_id);
		
	}
});


Store.GamesIndexRoute = Ember.Route.extend({
	model:function(){
		return this.store.find('game');
	}
});

Store.GamesRoute = Ember.Route.extend({

	model:function(){
		return this.store.find('game');
	}
});

Store.PromosController = Ember.ArrayController.extend({

});