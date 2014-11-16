import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function (params) {
		return this.store.find('post', params['post_id']);
	},

	actions: {
		choosePost: function (post) {
			this.transitionTo('posts.show', post)
		},

		willTransition: function () {
		  	this.set('controller.currentAnnotation', null);
		}
	}

});
