import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("home", { path: '/'} );
  this.resource('posts', function() {
    this.route('index');
  });
  this.resource('post', function() {
    this.resource('post.new', { path: '/new'}, function() {
      this.resource('annotations', function() {
        this.route('new');
      });
    });
    this.resource('post.show', { path: '/:post_id'}, function() {
      this.resource('annotations', function() {
        this.route('index');
      });
    });
    this.resource('post.edit', { path: '/:post_id/edit'}, function() {
      this.resource('annotations', function() {
        this.route('edit');
      });
    });
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
  this.route('annotations/new');
});

export default Router;
