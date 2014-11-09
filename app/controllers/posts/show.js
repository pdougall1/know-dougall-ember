import Ember from 'ember';

export default Ember.ObjectController.extend({

	navLinks: function () {

		return [
			{
				name: 'Edit',
				route: 'posts.edit',
				model: this
			}, {
				name: 'New',
				route: 'posts.new'
			}, {
				name: 'Index',
				route: 'posts.index'
			}
		]

	}.property()

});
