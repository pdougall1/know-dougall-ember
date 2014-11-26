import Ember from 'ember';

export default Ember.ObjectController.extend({

	navLinks: function () {

		return [
			{
				name: 'Friends Graph',
				route: 'friends-graph.index'
			}, {
				name: 'Index',
				route: 'posts.index'
			}, {
				name: 'Home',
				route: 'home'
			}
		]

	}.property(),

	actions: {
		showAnnotation: function (id) {
			var ann = this.store.find('annotation', id);
			this.set('currentAnnotation', ann);
		}
	}

});
