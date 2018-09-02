module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// list here all supported plugins
	var pluginsList = ['cordova-plugin-camera', 'cordova-plugin-device', 'cordova-plugin-geolocation', 'cordova-plugin-contacts', 'cordova-plugin-chrome-apps-sockets-tcp', 'cordova-plugin-sms', 'cordova-plugin-inappbrowser', 'cordova-plugin-spinner-dialog', 'cordova-plugin-file-downloader', 'cordova-plugin-file', 'cordova-plugin-progress-notification'];

	exports.install = function (Vue, options) {

	  // declare global Vue.cordova object
	  Vue.cordova = Vue.cordova || {
	    deviceready: false,
	    plugins: []

	    // Cordova events wrapper
	  };Vue.cordova.on = function (eventName, cb) {
	    document.addEventListener(eventName, cb, false);
	  };

	  // let Vue know that deviceready has been triggered
	  document.addEventListener('deviceready', function () {
	    Vue.cordova.deviceready = true;
	  }, false);

	  // load supported plugins
	  pluginsList.forEach(function (pluginName) {
	    var plugin = __webpack_require__(1)("./" + pluginName);
	    plugin.install(Vue, options, function (pluginLoaded) {
	      if (pluginLoaded) {
	        Vue.cordova.plugins.push(pluginName);
	      }
	      if (Vue.config.debug) {
	        console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded');
	      }
	    });
	  });
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./cordova-plugin-camera": 2,
		"./cordova-plugin-camera.js": 2,
		"./cordova-plugin-chrome-apps-sockets-tcp": 3,
		"./cordova-plugin-chrome-apps-sockets-tcp.js": 3,
		"./cordova-plugin-contacts": 4,
		"./cordova-plugin-contacts.js": 4,
		"./cordova-plugin-device": 5,
		"./cordova-plugin-device.js": 5,
		"./cordova-plugin-file": 6,
		"./cordova-plugin-file-downloader": 7,
		"./cordova-plugin-file-downloader.js": 7,
		"./cordova-plugin-file.js": 6,
		"./cordova-plugin-geolocation": 8,
		"./cordova-plugin-geolocation.js": 8,
		"./cordova-plugin-inappbrowser": 9,
		"./cordova-plugin-inappbrowser.js": 9,
		"./cordova-plugin-progress-notification": 10,
		"./cordova-plugin-progress-notification.js": 10,
		"./cordova-plugin-sms": 11,
		"./cordova-plugin-sms.js": 11,
		"./cordova-plugin-spinner-dialog": 12,
		"./cordova-plugin-spinner-dialog.js": 12
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof navigator.camera === 'undefined') {
	      return cb(false);
	    }

	    // pass through the camera object
	    Vue.cordova.camera = navigator.camera;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof chrome.sockets.tcp === 'undefined') {
	      return cb(false);
	    }

	    // pass through the object
	    Vue.cordova.chromeSocketsTcp = chrome.sockets.tcp;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof navigator.contacts === 'undefined') {
	      return cb(false);
	    }

	    // pass through the contacts object
	    Vue.cordova.contacts = navigator.contacts;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof device === 'undefined' || typeof device.cordova === 'undefined') {
	      return cb(false);
	    }

	    // default values
	    Vue.cordova.device = {
	      cordova: null,
	      model: null,
	      platform: null,
	      uuid: null,
	      version: null,
	      manufacturer: null,
	      isVirtual: null,
	      serial: null
	    };

	    Object.keys(Vue.cordova.device).forEach(function (key) {
	      if (typeof device[key] !== 'undefined') {
	        Vue.cordova.device[key] = device[key];
	      }
	    });

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {
	    if (typeof window.cordova === 'undefined' || typeof window.cordova.file === 'undefined') {
	      return cb(false);
	    }

	    // pass through the file object
	    Vue.cordova.file = window.cordova.file;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {
	    if (typeof window.downloader === 'undefined') {
	      return cb(false);
	    }

	    // pass through the downloader object
	    Vue.cordova.downloader = window.downloader;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof navigator.geolocation === 'undefined') {
	      return cb(false);
	    }

	    // pass through the geolocation object
	    Vue.cordova.geolocation = navigator.geolocation;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof cordova.InAppBrowser === 'undefined') {
	      return cb(false);
	    }

	    // pass through the InAppBrowser object
	    Vue.cordova.InAppBrowser = cordova.InAppBrowser;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {
	    if (typeof window.progressNotification === 'undefined') {
	      return cb(false);
	    }

	    // pass through the progressNotification object
	    Vue.cordova.progressNotification = window.progressNotification;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {

	    if (typeof window.sms === 'undefined') {
	      return cb(false);
	    }

	    // pass through the sms object
	    Vue.cordova.sms = window.sms;

	    return cb(true);
	  }, false);
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	exports.install = function (Vue, options, cb) {
	  document.addEventListener('deviceready', function () {
	    // console.log('Window', window)
	    // console.log('Window.plugins', window.plugins)
	    // console.log('navigator', navigator)

	    if (typeof window.plugins === 'undefined' || typeof window.plugins.spinnerDialog === 'undefined') {
	      return cb(false);
	    }

	    // pass through the SpinnerDialog object
	    Vue.cordova.spinnerDialog = window.plugins.spinnerDialog;

	    return cb(true);
	  }, false);
	};

/***/ })
/******/ ]);