import Ember from 'ember';

export default Ember.Route.extend({

	model: function () {
		return this.store.createRecord('post');
	},

  deactivate: function() {
  	this.resetAnnimations();
  },

  resetAnnimations: function() {
  	this.set('controller.annotations', []);
  },

	actions: {
		submitPost: function (post) {
			var _this = this;
			var onFail    = function() { _this.get('controller').set('unsuccessfulPost', true); console.log('failing'); };
			var onSuccess = function() { 
				Promise.all([
					_this.get('controller.annotations').forEach( function (annotation) {
						annotation.set('post', post);
						console.log('saving');
						annotation.save();
					})]
				).then(function () {
					_this.transitionTo('posts.show', post);
				});
			};

			post.save().then(onSuccess, onFail);

		}
	}
});
