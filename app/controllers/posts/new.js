import Ember from 'ember';

export default Ember.Controller.extend({

	navLinks: function () {
		return [
			{
				name: 'Index',
				route: 'posts.index'
			}
		]
	}.property()

});
