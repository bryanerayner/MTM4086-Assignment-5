


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

Store.IndexRoute = Em.Route.extend({
  model: function(){

    // return {
    //   games: this.store.find('game'),
    //   promos: this.store.find('promo')
    // };
  },
  
  setupController: function(controller, model) {
    this.controllerFor('promos').set('model', this.store.find('promo'));
    this.controllerFor('games').set('model', this.store.find('game'));

    controller.set('content', model);
  }
  // renderTemplate:function(){
    // this.render('index', {into:'application'});
    // this.render('games', { into: 'application', outlet: 'games' });
    // this.render('promos', { into: 'application', outlet: 'promos' });
  // }
});

Store.PromosRoute = Em.Route.extend({
  
  setupController: function(controller, model) {


    controller.set('content', model);
  },

  model:function(){
    return this.store.find('promo');
  }
});

Store.PromosController = Em.ArrayController.extend({
  needs: ['games'],
  sortFunction: function(x,y) { // These are assumed to be integers
    var xFactor, yFactor;
    xFactor = x.created.value + (100000 * x.priority);
    yFactor = y.created.value + (100000 * y.priority);
    if (xFactor === yFactor)
    {
      return 0;
    }
    return xFactor < yFactor ? -1 : 1;
  }
});

Store.PromoController = Em.ObjectController.extend({

});

Store.GamesRoute = Em.Route.extend({
  setupController: function(controller, model) {
    
    controller.set('content', model);
  },

  model:function(){
    return this.store.find('game');
  }
});

Store.GamesController = Em.ArrayController.extend({

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
