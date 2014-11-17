import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attributeBindings: ['href'],
	href: KnowDougall.KNOW_DOUGALL_RAILS_DOMAIN + '/resume',
	classNames: ['resume-provider']

});
