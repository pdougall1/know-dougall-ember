import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'img',
	attributeBindings: ['src'],
	src: '/assets/images/resume_icon.svg',
	classNames: ['resume-provider'],

	click: function () {
		this.sendAction('chooseResume')
	}

});
