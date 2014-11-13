import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['linkedin-login'],

	href: "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=77g0bc95ranwgc&state=DCEEFWF45453sdffef424&redirect_uri=https://know-dougall-friends-graph.herokuapp.com/sessions/linkedin",

	click: function () {
		window.location = this.get('href');
	}

});
