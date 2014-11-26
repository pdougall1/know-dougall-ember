import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['linkedin-login'],

	href: function () {
		return "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=77g0bc95ranwgc&state=DCEEFWF45453sdffef424&redirect_uri=" +
		this.get('friendsGraphDomain') + "/sessions/linkedin"
	}.property(),

	friendsGraphDomain: KnowDougall.FRIENDS_GRAPH_DOMAIN,

	click: function () {
		window.location = this.get('href');
	}

});
