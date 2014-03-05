Store.Game = DS.Model.extend({
			sales: DS.attr('number'),

			 name: DS.attr('string'),
		developer: DS.attr('string'),
	  description: DS.attr('string'),
	 requirements: DS.attr('string'),

	       img_Lg: DS.attr('string'),
		   img_Sm: DS.attr('string'),
		url_video: DS.attr('string'),
	url_developer: DS.attr('string'),
		   
			price: DS.attr('number'),
	price_regular: DS.attr('number'),

		  windows: DS.attr('boolean'),
			  mac: DS.attr('boolean'),
			linux: DS.attr('boolean'),
		  drmFree: DS.attr('boolean'),
			steam: DS.attr('boolean')




			// Relationships
			

});



Store.Game.FIXTURES = [
	{
		id:1,
		sales:400000,
		name:'Trine 2 Complete Story',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/a099174f72/images/storefront/small_featured_images/trine2complete_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/eb29d7a424/images/storefront/icons/trine2complete_storefront.jpg',
		price_regular: 2.99,
		price:19.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=yQQNNhCLIrM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:2,
		sales:50000,
		name:'Planetary Annihilation Gamma',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/b2e4baa16b/images/storefront/small_featured_images/planetaryannihilation_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/ea319147ad/images/storefront/icons/planetaryannihilation_storefront.jpg',
		price_regular: 49.99,
		price: 29.99,
		developer:'Uber Entertainment',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=ZE8QgqCiV8Q',
		url_developer:'http://www.uberent.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			steam:true
		}
	},
	{
		id:3,
		sales:30,
		name:'Tower of Guns',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/a0a137d8bb45266138f2f847584f0aa547187ce7.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/6f1499328844be5fa61ee0aeb577cf2f07260591.jpg',
		price_regular: 14.99,
		price: 9.99,
		developer:'Terrible Posture Games',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=lE8dfwSRsW0',
		url_developer:'http://blankslatejoe.tumblr.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:4,
		sales:600000,
		name:'Trine',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/96721b04bb/images/storefront/small_featured_images/trine_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/2479bfde8c/images/storefront/icons/trine_storefront.jpg',
		price_regular: 9.99,
		price: 0.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=2bx76Oj54mM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:5,
		sales:560,
		name:'Luftrausers (Pre-Order)',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/e9634c6e9c/images/storefront/small_featured_images/luftrausers_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/73bec0c6707c2b4bc4166454fd54f006676853c7.jpg',
		price_regular: 9.99,
		price: 8.99,
		developer:'Vlambeer',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=VauCrcG2wIU',
		url_developer:'http://www.vlambeer.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:6,
		sales:400000,
		name:'Trine 2 Complete Story',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/a099174f72/images/storefront/small_featured_images/trine2complete_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/eb29d7a424/images/storefront/icons/trine2complete_storefront.jpg',
		price_regular: 2.99,
		price:19.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=yQQNNhCLIrM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:7,
		sales:50000,
		name:'Planetary Annihilation Gamma',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/b2e4baa16b/images/storefront/small_featured_images/planetaryannihilation_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/ea319147ad/images/storefront/icons/planetaryannihilation_storefront.jpg',
		price_regular: 49.99,
		price: 29.99,
		developer:'Uber Entertainment',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=ZE8QgqCiV8Q',
		url_developer:'http://www.uberent.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			steam:true
		}
	},
	{
		id:8,
		sales:30,
		name:'Tower of Guns',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/a0a137d8bb45266138f2f847584f0aa547187ce7.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/6f1499328844be5fa61ee0aeb577cf2f07260591.jpg',
		price_regular: 14.99,
		price: 9.99,
		developer:'Terrible Posture Games',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=lE8dfwSRsW0',
		url_developer:'http://blankslatejoe.tumblr.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:9,
		sales:600000,
		name:'Trine',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/96721b04bb/images/storefront/small_featured_images/trine_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/2479bfde8c/images/storefront/icons/trine_storefront.jpg',
		price_regular: 9.99,
		price: 0.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=2bx76Oj54mM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:10,
		sales:560,
		name:'Luftrausers (Pre-Order)',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/e9634c6e9c/images/storefront/small_featured_images/luftrausers_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/73bec0c6707c2b4bc4166454fd54f006676853c7.jpg',
		price_regular: 9.99,
		price: 8.99,
		developer:'Vlambeer',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=VauCrcG2wIU',
		url_developer:'http://www.vlambeer.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:11,
		sales:400000,
		name:'Trine 2 Complete Story',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/a099174f72/images/storefront/small_featured_images/trine2complete_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/eb29d7a424/images/storefront/icons/trine2complete_storefront.jpg',
		price_regular: 2.99,
		price:19.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=yQQNNhCLIrM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:12,
		sales:50000,
		name:'Planetary Annihilation Gamma',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/b2e4baa16b/images/storefront/small_featured_images/planetaryannihilation_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/ea319147ad/images/storefront/icons/planetaryannihilation_storefront.jpg',
		price_regular: 49.99,
		price: 29.99,
		developer:'Uber Entertainment',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=ZE8QgqCiV8Q',
		url_developer:'http://www.uberent.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			steam:true
		}
	},
	{
		id:13,
		sales:30,
		name:'Tower of Guns',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/a0a137d8bb45266138f2f847584f0aa547187ce7.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/6f1499328844be5fa61ee0aeb577cf2f07260591.jpg',
		price_regular: 14.99,
		price: 9.99,
		developer:'Terrible Posture Games',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=lE8dfwSRsW0',
		url_developer:'http://blankslatejoe.tumblr.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:14,
		sales:600000,
		name:'Trine',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/96721b04bb/images/storefront/small_featured_images/trine_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/2479bfde8c/images/storefront/icons/trine_storefront.jpg',
		price_regular: 9.99,
		price: 0.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=2bx76Oj54mM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:15,
		sales:560,
		name:'Luftrausers (Pre-Order)',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/e9634c6e9c/images/storefront/small_featured_images/luftrausers_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/73bec0c6707c2b4bc4166454fd54f006676853c7.jpg',
		price_regular: 9.99,
		price: 8.99,
		developer:'Vlambeer',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=VauCrcG2wIU',
		url_developer:'http://www.vlambeer.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:16,
		sales:400000,
		name:'Trine 2 Complete Story',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/a099174f72/images/storefront/small_featured_images/trine2complete_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/eb29d7a424/images/storefront/icons/trine2complete_storefront.jpg',
		price_regular: 2.99,
		price:19.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=yQQNNhCLIrM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:17,
		sales:50000,
		name:'Planetary Annihilation Gamma',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/b2e4baa16b/images/storefront/small_featured_images/planetaryannihilation_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/ea319147ad/images/storefront/icons/planetaryannihilation_storefront.jpg',
		price_regular: 49.99,
		price: 29.99,
		developer:'Uber Entertainment',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=ZE8QgqCiV8Q',
		url_developer:'http://www.uberent.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			steam:true
		}
	},
	{
		id:18,
		sales:30,
		name:'Tower of Guns',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/a0a137d8bb45266138f2f847584f0aa547187ce7.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/6f1499328844be5fa61ee0aeb577cf2f07260591.jpg',
		price_regular: 14.99,
		price: 9.99,
		developer:'Terrible Posture Games',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=lE8dfwSRsW0',
		url_developer:'http://blankslatejoe.tumblr.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:19,
		sales:600000,
		name:'Trine',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/96721b04bb/images/storefront/small_featured_images/trine_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/2479bfde8c/images/storefront/icons/trine_storefront.jpg',
		price_regular: 9.99,
		price: 0.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=2bx76Oj54mM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:20,
		sales:560,
		name:'Luftrausers (Pre-Order)',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/e9634c6e9c/images/storefront/small_featured_images/luftrausers_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/73bec0c6707c2b4bc4166454fd54f006676853c7.jpg',
		price_regular: 9.99,
		price: 8.99,
		developer:'Vlambeer',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=VauCrcG2wIU',
		url_developer:'http://www.vlambeer.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:21,
		sales:400000,
		name:'Trine 2 Complete Story',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/a099174f72/images/storefront/small_featured_images/trine2complete_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/eb29d7a424/images/storefront/icons/trine2complete_storefront.jpg',
		price_regular: 2.99,
		price:19.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=yQQNNhCLIrM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:22,
		sales:50000,
		name:'Planetary Annihilation Gamma',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/b2e4baa16b/images/storefront/small_featured_images/planetaryannihilation_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/ea319147ad/images/storefront/icons/planetaryannihilation_storefront.jpg',
		price_regular: 49.99,
		price: 29.99,
		developer:'Uber Entertainment',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=ZE8QgqCiV8Q',
		url_developer:'http://www.uberent.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			steam:true
		}
	},
	{
		id:23,
		sales:30,
		name:'Tower of Guns',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/a0a137d8bb45266138f2f847584f0aa547187ce7.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/6f1499328844be5fa61ee0aeb577cf2f07260591.jpg',
		price_regular: 14.99,
		price: 9.99,
		developer:'Terrible Posture Games',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=lE8dfwSRsW0',
		url_developer:'http://blankslatejoe.tumblr.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:24,
		sales:600000,
		name:'Trine',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/96721b04bb/images/storefront/small_featured_images/trine_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/2479bfde8c/images/storefront/icons/trine_storefront.jpg',
		price_regular: 9.99,
		price: 0.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=2bx76Oj54mM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:25,
		sales:560,
		name:'Luftrausers (Pre-Order)',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/e9634c6e9c/images/storefront/small_featured_images/luftrausers_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/73bec0c6707c2b4bc4166454fd54f006676853c7.jpg',
		price_regular: 9.99,
		price: 8.99,
		developer:'Vlambeer',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=VauCrcG2wIU',
		url_developer:'http://www.vlambeer.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:26,
		sales:400000,
		name:'Trine 2 Complete Story',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/a099174f72/images/storefront/small_featured_images/trine2complete_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/eb29d7a424/images/storefront/icons/trine2complete_storefront.jpg',
		price_regular: 2.99,
		price:19.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=yQQNNhCLIrM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:27,
		sales:50000,
		name:'Planetary Annihilation Gamma',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/b2e4baa16b/images/storefront/small_featured_images/planetaryannihilation_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/ea319147ad/images/storefront/icons/planetaryannihilation_storefront.jpg',
		price_regular: 49.99,
		price: 29.99,
		developer:'Uber Entertainment',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=ZE8QgqCiV8Q',
		url_developer:'http://www.uberent.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			steam:true
		}
	},
	{
		id:28,
		sales:30,
		name:'Tower of Guns',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/a0a137d8bb45266138f2f847584f0aa547187ce7.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/6f1499328844be5fa61ee0aeb577cf2f07260591.jpg',
		price_regular: 14.99,
		price: 9.99,
		developer:'Terrible Posture Games',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=lE8dfwSRsW0',
		url_developer:'http://blankslatejoe.tumblr.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:29,
		sales:600000,
		name:'Trine',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/96721b04bb/images/storefront/small_featured_images/trine_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/2479bfde8c/images/storefront/icons/trine_storefront.jpg',
		price_regular: 9.99,
		price: 0.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=2bx76Oj54mM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:30,
		sales:560,
		name:'Luftrausers (Pre-Order)',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/e9634c6e9c/images/storefront/small_featured_images/luftrausers_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/73bec0c6707c2b4bc4166454fd54f006676853c7.jpg',
		price_regular: 9.99,
		price: 8.99,
		developer:'Vlambeer',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=VauCrcG2wIU',
		url_developer:'http://www.vlambeer.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:31,
		sales:400000,
		name:'Trine 2 Complete Story',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/a099174f72/images/storefront/small_featured_images/trine2complete_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/eb29d7a424/images/storefront/icons/trine2complete_storefront.jpg',
		price_regular: 2.99,
		price:19.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=yQQNNhCLIrM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:32,
		sales:50000,
		name:'Planetary Annihilation Gamma',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/b2e4baa16b/images/storefront/small_featured_images/planetaryannihilation_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/ea319147ad/images/storefront/icons/planetaryannihilation_storefront.jpg',
		price_regular: 49.99,
		price: 29.99,
		developer:'Uber Entertainment',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=ZE8QgqCiV8Q',
		url_developer:'http://www.uberent.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			steam:true
		}
	},
	{
		id:33,
		sales:30,
		name:'Tower of Guns',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/a0a137d8bb45266138f2f847584f0aa547187ce7.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/6f1499328844be5fa61ee0aeb577cf2f07260591.jpg',
		price_regular: 14.99,
		price: 9.99,
		developer:'Terrible Posture Games',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=lE8dfwSRsW0',
		url_developer:'http://blankslatejoe.tumblr.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:34,
		sales:600000,
		name:'Trine',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/96721b04bb/images/storefront/small_featured_images/trine_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/2479bfde8c/images/storefront/icons/trine_storefront.jpg',
		price_regular: 9.99,
		price: 0.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=2bx76Oj54mM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:35,
		sales:560,
		name:'Luftrausers (Pre-Order)',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/e9634c6e9c/images/storefront/small_featured_images/luftrausers_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/73bec0c6707c2b4bc4166454fd54f006676853c7.jpg',
		price_regular: 9.99,
		price: 8.99,
		developer:'Vlambeer',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=VauCrcG2wIU',
		url_developer:'http://www.vlambeer.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:36,
		sales:400000,
		name:'Trine 2 Complete Story',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/a099174f72/images/storefront/small_featured_images/trine2complete_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/eb29d7a424/images/storefront/icons/trine2complete_storefront.jpg',
		price_regular: 2.99,
		price:19.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=yQQNNhCLIrM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:37,
		sales:50000,
		name:'Planetary Annihilation Gamma',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/b2e4baa16b/images/storefront/small_featured_images/planetaryannihilation_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/ea319147ad/images/storefront/icons/planetaryannihilation_storefront.jpg',
		price_regular: 49.99,
		price: 29.99,
		developer:'Uber Entertainment',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=ZE8QgqCiV8Q',
		url_developer:'http://www.uberent.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			steam:true
		}
	},
	{
		id:38,
		sales:30,
		name:'Tower of Guns',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/a0a137d8bb45266138f2f847584f0aa547187ce7.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/6f1499328844be5fa61ee0aeb577cf2f07260591.jpg',
		price_regular: 14.99,
		price: 9.99,
		developer:'Terrible Posture Games',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=lE8dfwSRsW0',
		url_developer:'http://blankslatejoe.tumblr.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:39,
		sales:600000,
		name:'Trine',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/96721b04bb/images/storefront/small_featured_images/trine_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/2479bfde8c/images/storefront/icons/trine_storefront.jpg',
		price_regular: 9.99,
		price: 0.99,
		developer:'Frozenbyte',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=2bx76Oj54mM',
		url_developer:'http://frozenbyte.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	},
	{
		id:40,
		sales:560,
		name:'Luftrausers (Pre-Order)',
		img_Lg: 'https://humblebundle-a.akamaihd.net/misc/files/e9634c6e9c/images/storefront/small_featured_images/luftrausers_storefront.jpg',
		img_Sm: 'https://humblebundle-a.akamaihd.net/misc/files/hashed/73bec0c6707c2b4bc4166454fd54f006676853c7.jpg',
		price_regular: 9.99,
		price: 8.99,
		developer:'Vlambeer',
		url_video:'https://www.youtube.com/watch?feature=player_embedded&v=VauCrcG2wIU',
		url_developer:'http://www.vlambeer.com/',
		description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, maiores, recusandae quisquam qui autem adipisci incidunt modi! Eius, delectus, pariatur, neque omnis repellendus quidem at veniam architecto a voluptas voluptatem.',
		requirements:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, dolorum, mollitia repellendus impedit enim repudiandae harum odio laudantium nostrum qui excepturi aperiam iusto eum nulla provident a vero. Numquam, aliquam.',
		specs:
		{
			windows:true,
			mac:true,
			linux:true,
			drmFree:true,
			steam:true
		}
	}

];