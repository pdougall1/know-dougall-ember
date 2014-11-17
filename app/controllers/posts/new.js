import Ember from 'ember';

export default Ember.ObjectController.extend({

	navLinks: function () {
		return [
			{
				name: 'Friends Graph',
				route: 'friends-graph.index'
			},
			{
				name: 'Index',
				route: 'posts.index'
			}, {
				name: 'Home',
				route: 'home'
			}
		]
	}.property(),

	newAnnotation: function () {
		return this.store.createRecord('annotation');
	}.property(),

	annotations: [],

	actions: {
		submitAnnotation: function (annotation) {
			var _this = this
			annotation.save().then(function (annotation) {
				var annotations = _this.get('annotations');
				annotations.pushObject(annotation);
				_this.set('annotations', annotations);
				_this.set('newAnnotation', _this.store.createRecord('annotation'));			
			});
		}
	}

});
