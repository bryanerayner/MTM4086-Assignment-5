


Store.Router.map(function() {
	// // When we're at .html#/, go to 'shop' template.
 //  this.resource('shop', { path: '/' }, function(){
 //  	this.route("new");
 //  });


  this.resource('promos', function(){
  	
  });

  this.resource('games');

  this.resource('game', {path: "/game/:game_id"} );

});


Store.IndexRoute = Em.Route.extend({
  model: function(){

    // return {
    //   games: this.store.find('game'),
    //   promos: this.store.find('promo')
    // };
  },
  

  // Hook that runs when the controllers are being set up.
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
  },

  displayedPromosCount:9,

  displayedPromos:Em.computed(function()
  {
    var counter = 0;
    var promosCount = this.get('displayedPromosCount');

    if (!this.get('arrangedContent')){return this.get('content');}

    return this.get("arrangedContent").filter(function(promo, index){
      if (index < promosCount)
      {
        return true;
      }
      return false;
    });
  }).property('arrangedContent.[]', 'displayedPromosCount')
  
});

Store.PromoController = Em.ObjectController.extend({
  needs:['game'],

  proxime:function()
  {
    var names = ["steam", "drmFree", "linux", "windows", "mac"];
    var stuff = {};
    var game = this.get("game");
    for (var i = 0, ii = names.length; i < ii; i++)
    {
      stuff[names[i]] = game.get(names[i]);
    }
    
    return stuff;
  }.property("game.steam", "game.drmFree", "game.linux", "game.windows", "game.mac"),

});

Store.GamesRoute = Em.Route.extend({
  setupController: function(controller, model) {

    this.controllerFor('promos').set('model', this.store.find('promo'));
    this.controllerFor('games').set('model', this.store.find('game'));

    
    controller.set('content', model);
  },




  model:function(params){
    return this.store.find('game');
  }
});

Store.GameRoute = Em.Route.extend({
  setupController: function(controller, model) {

    this.controllerFor('promos').set('model', this.store.find('promo'));
    this.controllerFor('games').set('model', this.store.find('game'));

    
    controller.set('content', model);
  },
  
  model:function(params){
    return this.store.find('game', (params) ? params.game_id : null);
  }
})

Store.GamesController = Em.ArrayController.extend(Store.PaginatableMixin, {
  itemController:'game',
  page:1,
  perPage:10,

  platformChoices:[
    {
      name:"All",
      property:null
    },
    {
      name:"Windows",
      property:"windows"
    },
    {
      name:"Mac",
      property:"mac"
    },
    {
      name:"Steam",
      property:"steam"
    },
    {
      name:"Linux",
      property:"linux"
    }
  ],
  selectedPlatform:0,

  selectedPlatformChoice:function()
  {
    return this.get('platformChoices')[this.get('selectedPlatform')];
  }.property('platformChoices.@each', 'selectedPlatform'),

  filterText:"",

  filteredContent: Em.computed(function() {
    var content = this.get('content');

    // Prepare to match on names
    var filterText = this.get('filterText').toLowerCase();

    var filterRegexString = "";

    for (var i = 0, ii = filterText.length; i < ii; i++)
    {
      filterRegexString += filterText[i]+ "[\\s\\w]*";
    }

    var filterRegex = new RegExp(filterRegexString);

    // Prepare to match on system
    
    var selectedProperty = this.get('selectedPlatformChoice').property;

    return Em.ArrayProxy.create( {
      content: Ember.A(content.filter(function(item) {

        var nameMatch = (!!item.get("name").toLowerCase().match(filterRegex));

        var systemMatch = true;
        if (selectedProperty)
        {
          systemMatch = !!item.get(selectedProperty);
        }

        return nameMatch && systemMatch;
      })),
      lookupItemController: this.lookupItemController
    });
  }).property('content.@each', 'filterText', 'selectedPlatformChoice'),

  paginatedSource:Em.computed(function()
  {
    return this.get('filteredContent');
  }).property('filteredContent')


});

Store.GameController = Em.ObjectController.extend({

  proxime:function()
  {
    var names = ["steam", "drmFree", "linux", "windows", "mac"];
    var stuff = {};
    for (var i = 0, ii = names.length; i < ii; i++)
    {
      stuff[names[i]] = this.get(names[i]);
    }
    
    return stuff;
  }.property("steam", "drmFree", "linux", "windows", "mac"),

  nameLower:function()
  {
    return this.get("name").toLowerCase();
  }.property("name")
});

Store.GameView = Em.View.extend({
  templateName: 'game',

  didInsertElement: function()
  {
    // this.$('.reveal-modal').foundation('reveal', 'open');
    this.send('openModal');
  },

  actions:{
    openModal:function(){
      jQuery(this.$('[data-reveal]')).addClass('open').css({
        visibility:'visible',
        display:'block',
        top:'88px',
        opacity:1
      });

    },
    closeModal:function(){
      jQuery(this.$('[data-reveal]')).removeClass('open').css({
        visibility:'',
        display:'',
        top:'',
        opacity:''
      });
      this.get('controller').transitionToRoute('index');
    }
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



Store.GamePromotionComponent = Ember.Component.extend({
  tagName: 'div',
  classNames: ['promo', 'clearfix'],
  classNameBindings: ['promo.featured:promo-featured']
});

Store.GamePreviewComponent = Ember.Component.extend({
  tagName: 'div',
  classNames: ['game', 'clearfix'],
  showDetails:false,
  actions:
  {
    showDetails:function()
    {
      this.setProperties({
        showDetails:true
      });
    },
    hideDetails:function()
    {
      this.setProperties({
        showDetails:false
      });
    },
    toggleDetails:function()
    {
      this.toggleProperty('showDetails');
    }
  }
});