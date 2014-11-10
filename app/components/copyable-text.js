import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['copyable', 'copyable-text'],
	classNameBindings: ['justCoppied'],
	tagName: 'div',
	attributeBindings: ['text:data-clipboard-text'],

	justCoppied: false,

	click: function () {
		var _this = this
		this.set('justCoppied', true);
		setTimeout(function () {
			_this.set('justCoppied', false);
		}, 400);
	},

	text: function () {
		return this.get('text');
	}.property('text'),

	didInsertElement: function () {
		var client = new ZeroClipboard( document.getElementsByClassName("copyable") );

		client.on( "ready", function( readyEvent ) {

		  client.on( "aftercopy", function( event ) {

		  } );
		} );
	}

});
