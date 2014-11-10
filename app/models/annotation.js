import DS from 'ember-data';

export default DS.Model.extend({
  entry: DS.attr('string'),
  name: DS.attr('string'),
  post: DS.belongsTo('post'),
  formattedEntry: DS.attr('string'),

  link: function () {
  	return "BBB  " + this.get('id') + "  || " + this.get('name') + "   EEE"
  }.property('id', 'name')

});
