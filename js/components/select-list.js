Store.SelectListItemComponent = Em.Component.extend({
	selected:function(){
		return (this.get('index') === this.get('selectedIndex'));
	}.property('index','selectedIndex'),

	actions:
	{
		select:function()
		{
			this.set('selectedIndex', this.get('index'));
		}
	},

	  _yield: function(context, options) {      
    var get = Ember.get, 
    view = options.data.view,
    parentView = this._parentView,
    template = get(this, 'template');

    if (template) {
      Ember.assert("A Component must have a parent view in order to yield.", parentView);      
      view.appendChild(Ember.View, {
        isVirtual: true,
        tagName: '',
        _contextView: parentView,
        template: template,
        context: get(view, 'context'), // the default is get(parentView, 'context'),
        controller: get(parentView, 'controller'),
        templateData: { keywords: parentView.cloneKeywords() }
      });
    }
  }
});


Store.SelectListComponent = Em.Component.extend({
	selectedIndex:0,

	  _yield: function(context, options) {      
    var get = Ember.get, 
    view = options.data.view,
    parentView = this._parentView,
    template = get(this, 'template');

    if (template) {
      Ember.assert("A Component must have a parent view in order to yield.", parentView);      
      view.appendChild(Ember.View, {
        isVirtual: true,
        tagName: '',
        _contextView: parentView,
        template: template,
        context: get(view, 'context'), // the default is get(parentView, 'context'),
        controller: get(parentView, 'controller'),
        templateData: { keywords: parentView.cloneKeywords() }
      });
    }
  }
});