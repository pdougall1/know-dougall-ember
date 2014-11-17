import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['friends-graph'],

	navLinks: function () {
		return [
			{
				name: 'Friends Graph',
				route: 'friends-graph.index'
			},
			{
				name: 'New',
				route: 'posts.new'
			}, {
				name: 'Index',
				route: 'posts.index'
			}, {
				name: 'Home',
				route: 'home'
			}
		]
	}.property(),

	leftSidebarClass: 'friends-graph',

	setupDefaultShownConnection: function () {
		this.set('controllers.friends-graph.defaultShownConnection', this.get('content'));
	}

});
