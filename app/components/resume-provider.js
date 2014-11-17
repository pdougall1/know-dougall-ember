import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attributeBindings: ['href'],
	href: 'https://know-dougall-rails.herokuapp.com' + '/resume',
	classNames: ['resume-provider']

});
