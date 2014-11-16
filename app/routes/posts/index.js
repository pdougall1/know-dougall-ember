import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function () {
		return this.store.find('post');
	},

	actions: {
		choosePost: function (post) {
			this.transitionTo('post.show', post)
		}
	}

});
