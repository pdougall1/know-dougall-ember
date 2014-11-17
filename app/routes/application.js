import Ember from 'ember';

export default Ember.Route.extend({

	actions: {
		openMenu: function () {
			$('.nav-menu').addClass('shown');
		},
		closeMenu: function () {
			$('.nav-menu').removeClass('shown');
		}
	}

});
