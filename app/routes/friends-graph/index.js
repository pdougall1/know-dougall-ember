import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		didTransition: function () {
			this.set('controller.controllers.friends-graph.chosenConnection', this.get('controller.content'));
		}
	}
});
