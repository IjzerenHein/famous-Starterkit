/**
 * This is the main entry point for the web-app.
 *
 * Add any global initialisation like FastClick, wait for cordova
 * load event, and such to this main file.
 */
define(function(require) {

	// import dependencies
	require('./index.html');
	require('famous-polyfills');
	require('famous/core/famous.css');
	require('famous-flex/widgets/styles.css');
	require('./assets/favicon.ico');
	require('styles/styles.less');
	var Engine = require('famous/core/Engine');
	var FastClick = require('fastclick/lib/fastclick');
	var AppView = require('./src/AppView');

	// Enable fast-click
	FastClick.attach(document.body);

	// Create root context and show initial entrance view
	var mainContext = Engine.createContext();
	var appView = new AppView();
	mainContext.add(appView);
});
