import Ember from 'ember';

export default Ember.Component.extend({

	closed: false,

	click: function () {
		var el = $('.menu-container');
		if (this.get('closed')) {
			el.find('.close').addClass('hidden');
			setTimeout( function () { el.find('.full').removeClass('hidden') }, 100);
			this.set('closed', false);
			this.sendAction('close');
		} else {
			el.find('.full').addClass('hidden')
			setTimeout( function () { el.find('.close').removeClass('hidden') }, 100);
			this.set('closed', true);
			this.sendAction('open');
		}
	}

});
