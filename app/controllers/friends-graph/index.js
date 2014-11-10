import Ember from 'ember';

export default Ember.Controller.extend({
	navLinks: function () {
		return [
			{
				name: 'New',
				route: 'posts.new'
			}, {
				name: 'Index',
				route: 'posts.index'
			}
		]
	}.property(),

	leftSidebarClass: 'friends-graph'
});
