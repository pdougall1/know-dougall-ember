import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['style'],
	style: "z-index:10;" +
	       "position: absolute;" +
           "top: 20px;" +
           "left: 20px;"
});
