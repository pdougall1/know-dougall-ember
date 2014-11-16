import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement: function () {
		var _this = this
		// TODO: this should be handled without jquery using the controller system
		$('.annotation-link').on('click', function () {
			var id = $(this).data('annotation-id');
			_this.get("controller").send('showAnnotation', id);
		});
	}

});
