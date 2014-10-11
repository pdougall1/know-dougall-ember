import Ember from 'ember';

export default Ember.Controller.extend({
	posts: function () {
		return this.get('content').sortBy('createdAt');
	}.property('content')
});
