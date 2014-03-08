Store.Promo = DS.Model.extend({
	priority: DS.attr('number'),
	featured: DS.attr('boolean'),
	 created: DS.attr('date'),
	// Relationships
		game: DS.belongsTo('game')
});




Store.Promo.FIXTURES = [
	{
		id: 1,
		priority:1,
		created:new Date(2013, 11 , 23, 4, 34, 3, 34),
		featured:true,
		game:1
	},
	{
		id: 2,
		priority:1,
		created:new Date(2013, 2 , 23, 4, 34, 3, 34),
		featured:false,
		game:2
	},
	{
		id: 3,
		priority:3,
		created:new Date(2013, 4 , 23, 4, 34, 3, 34),
		featured:false,
		game:3
	},
	{
		id: 4,
		priority:5,
		created:new Date(2013, 5 , 23, 4, 34, 3, 34),
		featured:false,
		game:4
	},
	{
		id: 5,
		priority:1,
		created:new Date(2013, 6 , 3, 4, 34, 3, 34),
		featured:false,
		game:5
	},
	{
		id: 6,
		priority:1,
		created:new Date(2013, 11 , 3, 4, 34, 3, 34),
		featured:false,
		game:6
	},
	{
		id: 7,
		priority:1,
		created:new Date(2013, 12 , 23, 4, 34, 3, 34),
		featured:false,
		game:7
	},
	{
		id: 8,
		priority:1,
		created:new Date(2013, 8 , 11, 4, 34, 3, 34),
		featured:false,
		game:8
	},
	{
		id: 9,
		priority:1,
		created:new Date(2013, 11 , 15, 4, 34, 3, 34),
		featured:false,
		game:9
	},
	{
		id: 10,
		priority:2,
		created:new Date(2013, 6 , 30, 4, 34, 3, 34),
		featured:false,
		game:10
	},
	{
		id: 11,
		priority:3,
		created:new Date(2013, 9 , 20, 4, 34, 3, 34),
		featured:false,
		game:11
	},
	{
		id: 12,
		priority:4,
		created:new Date(2013, 1, 12, 4, 34, 3, 34),
		featured:false,
		game:14
	}
];