import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'img',
	attributeBindings: ['src'],
	src: '/assets/images/orange_robot_2.svg',
	classNames: ['personal-logo']
});
