import Ember from 'ember';

export default Ember.Component.extend({

	formattedTime: function () {
		var time = this.get('time')
		return [time.getMonth() + 1, time.getDay() + 1, time.getFullYear()].join('/')
	}.property('time')

});
