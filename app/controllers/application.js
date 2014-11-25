import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['game-of-life', 'home/summary', 'friends-graph/show', 
	        'friends-graph/index', 'posts/index', 'posts/show', 
	        'posts/new', 'posts/edit', 'application', 'home/summary',
	        'home/personal-projects'
	       ],

	getPropertyValue: function (propertyName) {
		var currentPath = this.get('currentPath').replace(".", "/")
		return this.get('controllers.' + currentPath +  '.' + propertyName)
	},

	controllerSpecificProperties: ['navLinks', 'leftSidebarClass'],

	setControllerSpecificProperties: function () {
		var context = this
		this.get('controllerSpecificProperties').forEach( function (prop) {
			var val = context.getPropertyValue(prop)
			context.set(prop, val);
		});
	}.observes('currentPath')

});
