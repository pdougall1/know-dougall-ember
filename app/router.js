import Ember from 'ember';

var Router = Ember.Router.extend({
  location: KnowDougallENV.locationType
});

Router.map(function() {
  this.resource("home", { path: '/'} );
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

});

export default Router;
