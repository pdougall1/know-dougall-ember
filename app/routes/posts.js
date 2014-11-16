import Ember from 'ember';

export default Ember.Route.extend({	

	actions: {
		submitPost: function (post) {
			var _this = this;
			var onSuccess = function() { _this.transitionTo('post.show', post); };
			var onFail    = function() { _this.get('controller').set('unsuccessfulPost', true); };
			post.save().then(onSuccess, onFail);
		}
	}
	
});
