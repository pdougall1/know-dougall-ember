import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.store.find('user', 1);
	},

	setupController: function (controller, model) {
		controller.set('model', model);
		controller.setupDefaultShownConnection() ;
	},

	actions: {
		setChosenConnection: function (connection) {
			this.get('controller').set('chosenConnection', connection);
		}
	}

});
