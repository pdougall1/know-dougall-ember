import Ember from 'ember';

export default Ember.ObjectController.extend({
	navLinks: function () {
		return [
			{
				name: 'Friends Graph',
				route: 'friends-graph.index'
			}, {
				name: 'Index',
				route: 'posts.index'
			}
		]
	}.property()
});
