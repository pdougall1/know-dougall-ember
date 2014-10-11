import Ember from 'ember';
import TestingMixin from 'know-dougall/mixins/testing';

module('TestingMixin');

// Replace this with your real tests.
test('it works', function() {
  var TestingObject = Ember.Object.extend(TestingMixin);
  var subject = TestingObject.create();
  ok(subject);
});
