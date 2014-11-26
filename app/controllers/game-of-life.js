import Ember from 'ember';

export default Ember.ObjectController.extend({


	navLinks: function () {
		return [
			{
				name: 'Index',
				route: 'posts.index'
			}, {
				name: 'Home',
				route: 'home'
			}
		];
	}.property(),

	gameOfLifeOptions: {
		maxRand: 10,
		seedCount: 1000
	}

});
