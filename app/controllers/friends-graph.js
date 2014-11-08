import Ember from 'ember';

export default Ember.ObjectController.extend({

	chosenConnection: null,

	connectionBeingViewed: function () {
		return this.get('chosenConnection') || 
		       this.get('content')
	}.property('chosenConnection'),

});
