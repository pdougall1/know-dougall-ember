import Ember from 'ember';

export default Ember.Route.extend({
	model: function () {
		return this.store.find('user', 1)
	},

	actions: {
		setChosenConnection: function (connection) {
			this.get('controller').set('chosenConnection', connection);
		}
	}

});
