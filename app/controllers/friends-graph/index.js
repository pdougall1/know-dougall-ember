import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['friends-graph'],

	navLinks: function () {
		return [
			{
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
