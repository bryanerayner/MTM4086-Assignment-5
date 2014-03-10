Store.GameDetailsComponent = Em.Component.extend({
	tagName: 'div',
	classNames: ['module', 'game_details'],
	showDetails:true,
	showSystemRequirements:false,

	actions:
	{
		showDetails:function()
		{
			this.setProperties({
				showDetails:true,
				showSystemRequirements:false
			});
		},
		showSystemRequirements:function()
		{
			this.setProperties({
				showDetails:false,
				showSystemRequirements:true
			});
		}
	}
});