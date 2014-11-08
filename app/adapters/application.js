import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
	namespace: 'api',
	host: 'https://localhost:3000'
});
