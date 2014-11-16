import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['friends-graph/show', 'friends-graph/index', 'posts/index', 'post/show', 'post/new', 'post/edit'],

	getPropertyValue: function (propertyName) {
		var currentPath = this.get('currentPath').replace(".", "/")
		return this.get('controllers.' + currentPath +  '.' + propertyName)
	},

	controllerSpecificProperties: ['navLinks', 'leftSidebarClass'],

	setControllerSpecificProperties: function () {
		var context = this
		if (this.get('currentPath') != 'home') {
			this.get('controllerSpecificProperties').forEach( function (prop) {
				var val = context.getPropertyValue(prop)
				context.set(prop, val);
			});
		}
	}.observes('currentPath')

});
