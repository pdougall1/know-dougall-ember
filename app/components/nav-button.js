import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	classNames: ['nav-button'],
	classNameBindings: ['hovering'],
	hovering: false,

	click: function () {
		this.sendAction('action', this.get('button'));
	},

	mouseEnter: function () {
		this.set('hovering', true)
	},

	mouseLeave: function () {
		this.set('hovering', false)
	}

});