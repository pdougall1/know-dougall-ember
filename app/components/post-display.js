import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'a',

	click: function () {
		this.sendAction('action', this.get('post'));
	},

	actions: {
		showPostDetails: function () {
			console.log('dougs');
		},
		hidePostDetails: function () {
			console.log('other dougs');
		}
	}
});
