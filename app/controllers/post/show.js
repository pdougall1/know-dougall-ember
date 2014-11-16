import Ember from 'ember';

export default Ember.ObjectController.extend({

	navLinks: function () {

		return [
			{
				name: 'Friends Graph',
				route: 'friends-graph.index'
			},
			{
				name: 'Edit',
				route: 'post.edit',
				model: this
			}, {
				name: 'New',
				route: 'post.new'
			}, {
				name: 'Index',
				route: 'posts.index'
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
