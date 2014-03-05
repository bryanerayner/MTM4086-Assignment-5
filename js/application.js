window.Store = Ember.Application.create();


Store.ApplicationAdapter = DS.FixtureAdapter.extend();


// Store.store = DS.Store.extend({
// 	revision:13,
// 	adapter:DS.FixtureAdapter
// });