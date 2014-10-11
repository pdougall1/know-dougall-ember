import Ember from 'ember';

export default Ember.Route.extend({

	model: function () {
		return this.store.createRecord('post');
	},


	actions: {
		submitPost: function (post) {
			var _this = this;
			var onSuccess = function() { _this.transitionTo('posts.show', post); };
			var onFail    = function() { _this.get('controller').set('unsuccessfulPost', true); };
			post.save().then(onSuccess, onFail);
		}
	}

});
