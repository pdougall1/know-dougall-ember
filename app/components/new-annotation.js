import Ember from 'ember';

export default Ember.Component.extend({

	resetForm: function () {
		// this.$().find('.annotation-form').focus();
		this.$().find('.link-name').val('');
	},

	actions: {
		submitAnnotation: function () {
			this.sendAction('action', this.get('annotation'));
			this.resetForm();
		}
	}

});
