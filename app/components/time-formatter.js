import Ember from 'ember';

export default Ember.Component.extend({

	formattedTime: function () {
		var time = this.get('time')
		return moment(time).format('MMMM Do YYYY')
	}.property('time')

});
