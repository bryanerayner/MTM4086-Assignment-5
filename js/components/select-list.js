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
	}
});


Store.SelectListComponent = Em.Component.extend({
	selectedIndex:0
});