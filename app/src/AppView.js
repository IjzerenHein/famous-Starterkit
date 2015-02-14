/**
 * Main application view.
 */
define(function(require) {

	// import dependencies
	var View = require('famous/core/View');
	var Modifier = require('famous/core/Modifier');
	var ImageSurface = require('famous/surfaces/ImageSurface');
	var Transform = require('famous/core/Transform');

	function AppView() {
		View.apply(this, arguments);

		// Show sample famo.us logo
		var logo = new ImageSurface({
				size: [200, 200],
				content: require('assets/images/famous_logo.png'),
				classes: ['double-sided']
		});
		var initialTime = Date.now();
		var centerSpinModifier = new Modifier({
				origin: [0.5, 0.5],
				align: [0.5, 0.5],
				transform: function() {
						return Transform.rotateY(.002 * (Date.now() - initialTime));
				}
		});
		this.add(centerSpinModifier).add(logo);
	}
	AppView.prototype = Object.create(View.prototype);
	AppView.prototype.constructor = AppView;

	return AppView;
});
