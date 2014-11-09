import Ember from 'ember';

export default Ember.ObjectController.extend({
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
	}.property()
});
