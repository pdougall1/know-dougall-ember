/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      FRIENDS_GRAPH_DOMAIN: 'here'
    }
  };

  if (environment === 'development') {
    ENV.rootURL = '/';
    ENV.routerLocation = 'hash';
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.FRIENDS_GRAPH_DOMAIN = 'https://localhost:5000';
    ENV.APP.KNOW_DOUGALL_RAILS_DOMAIN = 'https://localhost:3000'
  }

  if (environment === 'test') {

  }

  if (environment === 'production') {
    ENV.rootURL = '/';
    ENV.locationType = 'hash';
    ENV.APP.FRIENDS_GRAPH_DOMAIN = 'https://know-dougall-friends-graph.herokuapp.com';
    ENV.APP.KNOW_DOUGALL_RAILS_DOMAIN = 'https://know-dougall-rails.herokuapp.com'
  }

  return ENV;
};
