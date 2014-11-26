import Ember from 'ember';

export default Ember.ArrayController.extend({
	posts: function () {
		return this.get('content').sortBy('createdAt');
	}.property('content'),

	navLinks: function () {
		return [
			{
				name: 'Friends Graph',
				route: 'friends-graph.index'
			}, {
				name: 'Home',
				route: 'home'
			}
		]
	}.property()

});
