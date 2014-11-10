import Ember from 'ember';

export default Ember.ObjectController.extend({

	augmentLeftSidebarStyle: 'friends-graph',

	chosenConnection: null,

	connectionBeingViewed: function () {
		return this.get('chosenConnection') || 
		       this.get('content')
	}.property('chosenConnection'),

});
