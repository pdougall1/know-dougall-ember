import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['hovering'],
	hovering: false,

	mouseEnter: function () {
		this.set('hovering', true);
		this.sendAction('enter');
	},

	mouseLeave: function () {
		this.set('hovering', false);
		this.sendAction('leave');
	}

});
