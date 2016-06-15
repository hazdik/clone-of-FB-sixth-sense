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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getUserId = __webpack_require__(54);

	var _getUserId2 = _interopRequireDefault(_getUserId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	requireLazy(['MercuryTypingReceiver', 'MercuryThreads', 'ShortProfiles'], function (MercuryTypingReceiver, MercuryThreads, ShortProfiles) {
	  MercuryTypingReceiver.get().addRetroactiveListener('state-changed', function (state) {
	    var threadIds = Object.keys(state);
	    var userIds = threadIds.reduce(function (res, threadId) {
	      return res.concat(state[threadId].map(_getUserId2.default));
	    }, []);
	    MercuryThreads.get().getMultiThreadMeta(threadIds, function (threads) {
	      ShortProfiles.getMulti(userIds, function (users) {
	        window.postMessage({
	          type: 'update',
	          threads: threads,
	          users: users,
	          state: state
	        }, '*');
	      });
	    });
	  });
	});

/***/ },

/***/ 54:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getUserId;
	function getUserId(fbid) {
	  return fbid.split(':')[1];
	}

/***/ }

/******/ });