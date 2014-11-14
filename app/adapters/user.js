import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
	host: window.KnowDougallENV.APP.FRIENDS_GRAPH_DOMAIN
});
