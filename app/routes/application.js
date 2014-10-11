import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		navToRoute: function (button) {
			var resource = this.get('resource')
			if (resource) {
				this.transitionTo(button.route, resource);
			} else {
				this.transitionTo(button.route);
			}
		}
	}


});
