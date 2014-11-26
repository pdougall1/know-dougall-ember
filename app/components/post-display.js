import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'a',

	click: function () {
		this.sendAction('action', this.get('post'));
	},

	actions: {
		showPostDetails: function () {
		},
		hidePostDetails: function () {
		}
	}
});
