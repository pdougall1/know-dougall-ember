import Ember from 'ember';

export default Ember.View.extend({

	didInsertElement: function () {
		var _this = this
		$('.annotation-link').on('click', function () {
			var id = $(this).data('annotation-id');
			_this.get("controller").send('showAnnotation', id);
		});
	}

});
