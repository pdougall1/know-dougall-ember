import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
	host: KnowDougall.FRIENDS_GRAPH_DOMAIN
});
