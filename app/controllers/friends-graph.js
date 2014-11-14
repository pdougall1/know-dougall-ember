import Ember from 'ember';

export default Ember.ObjectController.extend({
	needs: ['friends-graph/show'],

	augmentLeftSidebarStyle: 'friends-graph',

	chosenConnection: function () {
		var showCont = this.get('controllers.friends-graph/show');
		return showCont.get('content');
	}.property(),

	defaultShownConnection: null,

	connectionBeingViewed: function () {
		var thing =  this.get('chosenConnection') || 
		       this.get('defaultShownConnection');
		return thing;
	}.property('chosenConnection'),

	setupDefaultShownConnection: function () {
		this.set('defaultShownConnection', this.get('content'));
	}

});
