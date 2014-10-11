import Ember from 'ember';

export default Ember.Controller.extend({

	rightNavButtons: [{
		name: 'Posts',
		route: 'posts.index'
	}, {
		name: 'New Post',
		route: 'posts.new'
	}]

});
