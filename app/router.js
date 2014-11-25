import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("home", { path: '/'}, function () {
    this.route('summary');
    this.route('interests');
    this.route('personal-projects');
    this.route('code');
  });
  this.resource("game-of-life");
  this.resource('posts', function() {
    this.route('index');
    this.route('new');
    this.route('show', { path: '/:post_id' });
    this.route('edit', { path: '/:post_id/edit' });
  });
  this.resource('me', function() {
    this.route('resume');
    this.route('ruby');
    this.route('ember');
    this.route('data');
  });
  this.resource('friends-graph', function () {
    this.route('show', { path: '/:linkedin_id' });
  });

  this.route('application');
});

export default Router;
