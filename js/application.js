window.Store = Ember.Application.create({
	ready:function(){
		$(document).foundation();
	}
});


Store.ApplicationAdapter = DS.FixtureAdapter.extend();


Store.ApplicationView = Ember.View.extend({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, function(){
    	// perform your jQuery logic here
    	$(document).foundation();
    });
  }

});

// Store.store = DS.Store.extend({
// 	revision:13,
// 	adapter:DS.FixtureAdapter
// });