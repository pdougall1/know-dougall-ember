import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
	namespace: 'api',
	host: window.KnowDougallENV.APP.KNOW_DOUGALL_RAILS_DOMAIN
});
