import DS from 'ember-data';

export default DS.Model.extend({
  entry: DS.attr('string'),
  name: DS.attr('string'),
  post: DS.belongsTo('post', { async: true }),
  formattedEntry: DS.attr('string'),

  link: function () {
  	return "<a class='annotation-link' data-annotation-id='" +
  	this.get('id') + "'>" + 
  	this.get('name') + "</a>"
  }.property('id', 'name')

});
