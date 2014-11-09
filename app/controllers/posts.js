import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['posts/index', 'posts/show', 'posts/new', 'posts/edit', 'application'],

	navLinks: function () {
		var currentPath = this.get('controllers.application.currentPath').replace(".", "/")
		return this.get('controllers.' + currentPath +  '.navLinks')
	}.property('controllers.application.currentPath')

});
