import DS from 'ember-data';

export default DS.Model.extend({
	entry: DS.attr('string'),
	topic: DS.attr('string'),
	title: DS.attr('string'),
	createdAt: DS.attr('date'),
	formattedEntry: DS.attr('string'),
	summary: DS.attr('string'),
	viewable: DS.attr('boolean'),
	annotations: DS.hasMany('annotation')
});
