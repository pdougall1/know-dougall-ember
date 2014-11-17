import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
	namespace: 'api',
	host: KnowDougall.KNOW_DOUGALL_RAILS_DOMAIN
});
