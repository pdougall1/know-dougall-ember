import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['linkedin-login'],

	// href: function () {
	// 	_this = this
	// 	link = this.domain + '?'
	// 	['response_type', 'response_type', 'client_id', 'state', 'redirect_uri'].forEach( function (param) {
	// 		link = link + param + _this[param] + '&'
	// 	}).slice(0, -1);
	// },

	// domain: "https://www.linkedin.com/uas/oauth2/authorization",
	// response_type: "code",
	// client_id: "77g0bc95ranwgc", // should move to an env var
	// state: 'must-improve-security' // this will end up being dynamic and getting passed to the consuming server for validation
	// redirect_uri: "https://localhost:5000/auth/linkedin/callback"


	href: "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=77g0bc95ranwgc&state=DCEEFWF45453sdffef424&redirect_uri=https://localhost:5000/sessions/linkedin",



	click: function () {
		window.location = this.get('href');
	}

});
