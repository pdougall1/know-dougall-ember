import Ember from 'ember';

export default Ember.ObjectController.extend({
	navLinks: function () {
		return [
			{
				name: 'Friends Graph',
				route: 'friends-graph.index'
			},
			{
				name: 'New',
				route: 'posts.new'
			}, {
				name: 'Index',
				route: 'posts.index'
			}
		]
	}.property(),

	newAnnotation: function () {
		var annotation = this.store.createRecord('annotation');
		annotation.set('post', this.get('content'))
		return annotation;
	}.property(),

	resetNewAnnotation: function () {
		var annotation = this.store.createRecord('annotation');
		annotation.set('post', this.get('content'))
		this.set('newAnnotation', annotation);
	},

	actions: {
		submitAnnotation: function (annotation) {
			var _this = this
			annotation.save().then(function (annotation) {
				_this.get('annotations').then(function (annotations) {
					annotations.pushObject(annotation);
					_this.resetNewAnnotation();
				});
			});
		}
	}

});
