import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    willTransition: function(transition) {
	  	this.get('controller.model').rollback();
    }
  }

});
