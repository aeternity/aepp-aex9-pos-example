/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Client.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Client.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_aeternity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/aeternity */ \"./src/utils/aeternity.js\");\n/* harmony import */ var vue3_qrcode_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue3-qrcode-reader */ \"./node_modules/vue3-qrcode-reader/dist/VueQrcodeReader.umd.min.js\");\n/* harmony import */ var vue3_qrcode_reader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue3_qrcode_reader__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Client',\n  components: {\n    QrcodeStream: vue3_qrcode_reader__WEBPACK_IMPORTED_MODULE_3__[\"QrcodeStream\"]\n  },\n  data: function data() {\n    return {\n      state: 'NOT_READY'\n    };\n  },\n  methods: {\n    onDecode: function onDecode(decodedString) {\n      var _this = this;\n\n      return Object(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var invoiceData;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _this.state = '⌛';\n                invoiceData = JSON.parse(decodedString);\n                _context.next = 4;\n                return _utils_aeternity__WEBPACK_IMPORTED_MODULE_2__[\"default\"].token.methods.burn_trigger_pos(invoiceData.price, _utils_aeternity__WEBPACK_IMPORTED_MODULE_2__[\"default\"].posContractAddress, invoiceData.id);\n\n              case 4:\n                _this.state = '✅';\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n\n    return Object(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _utils_aeternity__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n\n            case 2:\n              _this2.state = 'READY';\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }))();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Client.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PoS.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/PoS.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_aeternity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/aeternity */ \"./src/utils/aeternity.js\");\n/* harmony import */ var qrcode_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! qrcode.vue */ \"./node_modules/qrcode.vue/dist/qrcode.vue.browser.js\");\n/* harmony import */ var qrcode_vue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(qrcode_vue__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_items_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/items.json */ \"./src/utils/items.json\");\nvar _utils_items_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../utils/items.json */ \"./src/utils/items.json\", 1);\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'PoS',\n  components: {\n    QrcodeVue: qrcode_vue__WEBPACK_IMPORTED_MODULE_8___default.a\n  },\n  data: function data() {\n    return {\n      pricePerToken: 3,\n      cart: [],\n      filter: 'ALL',\n      invoiceId: null,\n      qrdata: null,\n      checkPaidInterval: null,\n      checkFundedInterval: null,\n      state: 'SETUP',\n      publicKey: null\n    };\n  },\n  computed: {\n    filteredItems: function filteredItems() {\n      var _this = this;\n\n      return this.filter === 'ALL' ? _utils_items_json__WEBPACK_IMPORTED_MODULE_9__ : _utils_items_json__WEBPACK_IMPORTED_MODULE_9__.filter(function (item) {\n        return item.type === _this.filter;\n      });\n    },\n    cartItems: function cartItems() {\n      var cartIds = this.cart.map(function (item) {\n        return item.id;\n      });\n      return _utils_items_json__WEBPACK_IMPORTED_MODULE_9__.filter(function (item) {\n        return cartIds.includes(item.id);\n      });\n    },\n    totalPrice: function totalPrice() {\n      var _this2 = this;\n\n      return this.cart.reduce(function (acc, item) {\n        return acc + item.price * _this2.pricePerToken;\n      }, 0);\n    },\n    totalTokens: function totalTokens() {\n      return this.cart.reduce(function (acc, item) {\n        return acc + item.price;\n      }, 0);\n    }\n  },\n  methods: {\n    reset: function reset() {\n      this.state = 'SELECT_ITEMS';\n      this.cart = [];\n      this.invoiceId = null;\n      this.qrdata = null;\n    },\n    removeItem: function removeItem(item) {\n      var thisItems = this.cart.filter(function (i) {\n        return i.id === item.id;\n      });\n      var otherItems = this.cart.filter(function (i) {\n        return i.id !== item.id;\n      });\n      thisItems.shift();\n      this.cart = otherItems.concat(thisItems);\n    },\n    addItem: function addItem(item) {\n      this.cart.push(item);\n    },\n    newInvoice: function newInvoice(price) {\n      var _this3 = this;\n\n      return Object(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _this3.state = 'REQUEST_PAYMENT';\n                _context.next = 3;\n                return _utils_aeternity__WEBPACK_IMPORTED_MODULE_7__[\"default\"].pos.methods.new_invoice(price).then(function (r) {\n                  return r.decodedResult;\n                });\n\n              case 3:\n                _this3.invoiceId = _context.sent;\n                _this3.qrdata = {\n                  invoiceId: _this3.invoiceId,\n                  amount: price\n                };\n                if (_this3.checkPaidInterval) _this3.clearIntervalVariable(_this3.checkPaidInterval);\n                _this3.checkPaidInterval = setInterval(_this3.checkPaid, 1000);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    clearIntervalVariable: function clearIntervalVariable(interval) {\n      if (interval) clearInterval(interval);\n      interval = null;\n    },\n    checkPaid: function checkPaid() {\n      var _this4 = this;\n\n      return Object(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var hasPaid;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                if (!(_this4.state === 'REQUEST_PAYMENT')) {\n                  _context2.next = 5;\n                  break;\n                }\n\n                _context2.next = 3;\n                return _utils_aeternity__WEBPACK_IMPORTED_MODULE_7__[\"default\"].pos.methods.has_paid(_this4.invoiceId).then(function (r) {\n                  return r.decodedResult;\n                }).catch(console.error);\n\n              case 3:\n                hasPaid = _context2.sent;\n\n                if (hasPaid) {\n                  _this4.state = 'PAID';\n\n                  _this4.clearIntervalVariable(_this4.checkPaidInterval);\n                }\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    checkFunded: function checkFunded() {\n      var _this5 = this;\n\n      return Object(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        var balance;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                if (!(_this5.state === 'REQUEST_FUNDING')) {\n                  _context3.next = 5;\n                  break;\n                }\n\n                _context3.next = 3;\n                return _utils_aeternity__WEBPACK_IMPORTED_MODULE_7__[\"default\"].checkBalance().catch(console.error);\n\n              case 3:\n                balance = _context3.sent;\n\n                if (balance > 0) {\n                  _this5.state = 'SELECT_ITEMS';\n\n                  _this5.clearIntervalVariable(_this5.checkFundedInterval);\n                }\n\n              case 5:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    }\n  },\n  mounted: function mounted() {\n    var _this6 = this;\n\n    return Object(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n      var keypairString, keypair, balance;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              keypairString = localStorage.getItem('keypair');\n              keypair = null;\n\n              try {\n                keypair = JSON.parse(keypairString);\n                console.log(keypairString);\n              } catch (e) {\n                console.error(e);\n              }\n\n              if (!keypair) {\n                keypair = _utils_aeternity__WEBPACK_IMPORTED_MODULE_7__[\"default\"].generateAccount();\n                localStorage.setItem('keypair', JSON.stringify(keypair));\n              }\n\n              console.log(keypair);\n              _context4.next = 7;\n              return _utils_aeternity__WEBPACK_IMPORTED_MODULE_7__[\"default\"].init(keypair);\n\n            case 7:\n              _this6.publicKey = keypair.publicKey;\n              _context4.next = 10;\n              return _utils_aeternity__WEBPACK_IMPORTED_MODULE_7__[\"default\"].checkBalance();\n\n            case 10:\n              balance = _context4.sent;\n              console.log(balance);\n\n              if (balance > 0) {\n                _this6.state = 'SELECT_ITEMS';\n              } else {\n                _this6.state = 'REQUEST_FUNDING';\n                if (_this6.checkFundedInterval) _this6.clearIntervalVariable(_this6.checkFundedInterval);\n                _this6.checkFundedInterval = setInterval(_this6.checkFunded, 1000);\n              }\n\n            case 13:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }))();\n  }\n});\n\n//# sourceURL=webpack:///./src/views/PoS.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Client.vue?vue&type=template&id=5f002905":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Client.vue?vue&type=template&id=5f002905 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nvar _hoisted_1 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"h1\", null, \"Client Example\", -1\n/* HOISTED */\n);\n\nvar _hoisted_2 = {\n  class: \"icon\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_qrcode_stream = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"qrcode-stream\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, [_hoisted_1, $data.state === 'READY' ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_qrcode_stream, {\n    key: 0,\n    onDecode: $options.onDecode\n  }, null, 8\n  /* PROPS */\n  , [\"onDecode\"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(\"span\", _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($data.state), 1\n  /* TEXT */\n  )], 64\n  /* STABLE_FRAGMENT */\n  );\n}\n\n//# sourceURL=webpack:///./src/views/Client.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PoS.vue?vue&type=template&id=bcc0e42c":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/PoS.vue?vue&type=template&id=bcc0e42c ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _assets_img_back_arrow_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/img/back-arrow.svg */ \"./src/assets/img/back-arrow.svg\");\n/* harmony import */ var _assets_img_back_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_back_arrow_svg__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _hoisted_1 = {\n  id: \"content\"\n};\nvar _hoisted_2 = {\n  key: 0,\n  class: \"select-items\"\n};\n\nvar _hoisted_3 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"item-heading\"\n}, \"Select Items\", -1\n/* HOISTED */\n);\n\nvar _hoisted_4 = {\n  class: \"item-description\"\n};\nvar _hoisted_5 = {\n  class: \"item-price\"\n};\nvar _hoisted_6 = {\n  class: \"item-buttons\"\n};\nvar _hoisted_7 = {\n  class: \"bottom\"\n};\n\nvar _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"bottom-divider\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_9 = {\n  class: \"bottom-summary\"\n};\n\nvar _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createTextVNode\"])(\"Items \");\n\nvar _hoisted_11 = {\n  class: \"bottom-summary-right\"\n};\nvar _hoisted_12 = {\n  key: 1,\n  class: \"select-items\"\n};\nvar _hoisted_13 = {\n  class: \"back-button\"\n};\n\nvar _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"img\", {\n  src: _assets_img_back_arrow_svg__WEBPACK_IMPORTED_MODULE_4___default.a\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"checkout-heading\"\n}, \"Order Details\", -1\n/* HOISTED */\n);\n\nvar _hoisted_16 = {\n  class: \"item-description\"\n};\nvar _hoisted_17 = {\n  class: \"item-price\"\n};\nvar _hoisted_18 = {\n  class: \"item-total\"\n};\nvar _hoisted_19 = {\n  class: \"item-buttons\"\n};\nvar _hoisted_20 = {\n  class: \"bottom\"\n};\n\nvar _hoisted_21 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"bottom-divider\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_22 = {\n  class: \"bottom-summary\"\n};\n\nvar _hoisted_23 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createTextVNode\"])(\"Total \");\n\nvar _hoisted_24 = {\n  class: \"bottom-summary-right\"\n};\nvar _hoisted_25 = {\n  key: 2,\n  class: \"select-items\"\n};\n\nvar _hoisted_26 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"payment-request-heading-1\"\n}, \"Payment Request\", -1\n/* HOISTED */\n);\n\nvar _hoisted_27 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"payment-request-heading-2\"\n}, \"Scan the QR Code\", -1\n/* HOISTED */\n);\n\nvar _hoisted_28 = {\n  key: 0,\n  class: \"spinner\"\n};\nvar _hoisted_29 = {\n  class: \"bottom\"\n};\n\nvar _hoisted_30 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"bottom-divider\"\n}, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_31 = {\n  class: \"bottom-summary\"\n};\n\nvar _hoisted_32 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createTextVNode\"])(\"Total \");\n\nvar _hoisted_33 = {\n  class: \"bottom-summary-right\"\n};\nvar _hoisted_34 = {\n  key: 3,\n  class: \"select-items\"\n};\n\nvar _hoisted_35 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"payment-request-heading-1\"\n}, \"Please fund this Point of Sales with 1 AE\", -1\n/* HOISTED */\n);\n\nvar _hoisted_36 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"payment-request-heading-2\"\n}, \"Scan the QR Code\", -1\n/* HOISTED */\n);\n\nvar _hoisted_37 = {\n  key: 0,\n  class: \"spinner\"\n};\nvar _hoisted_38 = {\n  key: 4,\n  class: \"select-items\"\n};\n\nvar _hoisted_39 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"payment-request-heading-1\"\n}, \"Loading, please wait\", -1\n/* HOISTED */\n);\n\nvar _hoisted_40 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"qr-container\"\n}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"spinner\"\n})], -1\n/* HOISTED */\n);\n\nvar _hoisted_41 = {\n  key: 5,\n  class: \"select-items\"\n};\n\nvar _hoisted_42 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"payment-request-heading-1\"\n}, \"Payment Successful\", -1\n/* HOISTED */\n);\n\nvar _hoisted_43 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n  class: \"success-container\"\n}, \"✅\", -1\n/* HOISTED */\n);\n\nvar _hoisted_44 = {\n  class: \"bottom\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_qrcode_vue = Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"resolveComponent\"])(\"qrcode-vue\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_1, [$data.state === 'SELECT_ITEMS' ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n    class: [\"filter-button\", $data.filter === 'ALL' ? 'selected' : null],\n    onClick: _cache[1] || (_cache[1] = function ($event) {\n      return $data.filter = 'ALL';\n    })\n  }, \" All \", 2\n  /* CLASS */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n    class: [\"filter-button\", $data.filter === 'DRINKS' ? 'selected' : null],\n    onClick: _cache[2] || (_cache[2] = function ($event) {\n      return $data.filter = 'DRINKS';\n    })\n  }, \" 🍹 Drinks \", 2\n  /* CLASS */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n    class: [\"filter-button\", $data.filter === 'FOOD' ? 'selected' : null],\n    onClick: _cache[3] || (_cache[3] = function ($event) {\n      return $data.filter = 'FOOD';\n    })\n  }, \" 🍔 Food \", 2\n  /* CLASS */\n  ), _hoisted_3, (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"renderList\"])($options.filteredItems, function (item) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", {\n      class: \"item\",\n      key: item.id\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(item.description), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_5, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(item.price) + \" Token\" + Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(item.price > 1 ? 's' : ''), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n      class: \"item-add-button\",\n      onClick: function onClick($event) {\n        return $options.addItem(item);\n      }\n    }, \"+\", 8\n    /* PROPS */\n    , [\"onClick\"])])]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  )), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_7, [_hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_9, [_hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])($data.cart.length), 1\n  /* TEXT */\n  )]), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n    class: \"bottom-button\",\n    onClick: _cache[4] || (_cache[4] = function ($event) {\n      return $data.state = 'CHECKOUT';\n    })\n  }, \" 🛒 Checkout \")])])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true), $data.state === 'CHECKOUT' ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_12, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n    onClick: _cache[5] || (_cache[5] = function ($event) {\n      return $data.state = 'SELECT_ITEMS';\n    })\n  }, [_hoisted_14]), _hoisted_15]), (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(vue__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"renderList\"])($options.cartItems, function (item) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", {\n      class: \"item\",\n      key: item.id\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_16, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(item.description), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_17, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(item.price) + \" Token\" + Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(item.price > 1 ? 's' : ''), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_18, \"€ \" + Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])(item.price * $data.cart.filter(function (i) {\n      return i.id === item.id;\n    }).length), 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_19, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n      class: \"item-remove-button\",\n      onClick: function onClick($event) {\n        return $options.removeItem(item);\n      }\n    }, \"-\", 8\n    /* PROPS */\n    , [\"onClick\"]), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createTextVNode\"])(\" \" + Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])($data.cart.filter(function (i) {\n      return i.id === item.id;\n    }).length) + \" \", 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n      class: \"item-add-button\",\n      onClick: function onClick($event) {\n        return $options.addItem(item);\n      }\n    }, \"+\", 8\n    /* PROPS */\n    , [\"onClick\"])])]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  )), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_20, [_hoisted_21, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_22, [_hoisted_23, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_24, \" € \" + Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])($options.totalPrice) + \" (\" + Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])($options.totalTokens) + \" Tokens) \", 1\n  /* TEXT */\n  )]), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n    class: \"bottom-button\",\n    onClick: _cache[6] || (_cache[6] = function ($event) {\n      return $options.newInvoice($options.totalTokens);\n    })\n  }, \" 💸 Request Payment \")])])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true), $data.state === 'REQUEST_PAYMENT' ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_25, [_hoisted_26, _hoisted_27, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n    class: [\"qr-container\", $data.qrdata ? 'has-qr' : null]\n  }, [$data.qrdata === null ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_28)) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true), $data.qrdata ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(_component_qrcode_vue, {\n    key: 1,\n    value: 'ZEITFESTIVAL' + JSON.stringify($data.qrdata),\n    size: 200\n  }, null, 8\n  /* PROPS */\n  , [\"value\"])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true)], 2\n  /* CLASS */\n  ), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_29, [_hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_31, [_hoisted_32, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_33, \" € \" + Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])($options.totalPrice) + \" (\" + Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"toDisplayString\"])($options.totalTokens) + \" Tokens) \", 1\n  /* TEXT */\n  )]), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n    class: \"bottom-button cancel\",\n    onClick: _cache[7] || (_cache[7] = function ($event) {\n      $data.state = 'CHECKOUT';\n      $data.qrdata = null;\n    })\n  }, \" Cancel Request \")])])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true), $data.state === 'REQUEST_FUNDING' ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_34, [_hoisted_35, _hoisted_36, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", {\n    class: [\"qr-container\", $data.publicKey ? 'has-qr' : null]\n  }, [$data.publicKey === null ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_37)) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true), $data.publicKey ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(_component_qrcode_vue, {\n    key: 1,\n    value: $data.publicKey,\n    size: 200\n  }, null, 8\n  /* PROPS */\n  , [\"value\"])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true)], 2\n  /* CLASS */\n  )])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true), $data.state === 'SETUP' ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_38, [_hoisted_39, _hoisted_40])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true), $data.state === 'PAID' ? (Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createBlock\"])(\"div\", _hoisted_41, [_hoisted_42, _hoisted_43, Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"div\", _hoisted_44, [Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createVNode\"])(\"button\", {\n    class: \"bottom-button\",\n    onClick: _cache[8] || (_cache[8] = function ($event) {\n      return $options.reset();\n    })\n  }, \" Continue \")])])) : Object(vue__WEBPACK_IMPORTED_MODULE_3__[\"createCommentVNode\"])(\"v-if\", true)]);\n}\n\n//# sourceURL=webpack:///./src/views/PoS.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../assets/fonts/Rubik-Regular.ttf */ \"./src/assets/fonts/Rubik-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"\\n#app {\\n  src: local(\\\"Rubik\\\"),\\n   url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n  font-family: Rubik, Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n  color: #2c3e50;\\n  margin-top: 60px;\\n}\\n.icon {\\n  display: block;\\n  font-size: 4rem;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/Client.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"#app {\\n  font-family: \\\"Rubik\\\", Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: #181818;\\n  letter-spacing: 0.03rem;\\n}\\n#content {\\n  max-width: 400px;\\n  margin: auto;\\n}\\nbutton {\\n  border: none;\\n}\\n.filter-button {\\n  cursor: pointer;\\n  border-radius: 1rem;\\n  color: #d12754;\\n  background: rgba(209, 39, 84, 0.1);\\n  padding: 0.5rem;\\n  margin: 1rem 0.5rem;\\n  min-width: 4rem;\\n  outline: none;\\n}\\n.filter-button.selected {\\n  color: #fff;\\n  background: #d12754;\\n}\\n.back-button {\\n  position: relative;\\n  margin: 1rem 0;\\n}\\n.back-button button {\\n  padding: 0.5rem;\\n  border-radius: 0.6rem;\\n  min-width: 2.5rem;\\n  color: #fff;\\n  background: #d12754;\\n}\\n.back-button .checkout-heading {\\n  position: absolute;\\n  top: 0.5rem;\\n  font-size: 1.4rem;\\n  right: 0;\\n  opacity: 0.3;\\n  font-weight: bold;\\n}\\n.item-heading {\\n  color: #181818;\\n  margin: 1rem 0;\\n  font-weight: bold;\\n}\\n.payment-request-heading-1 {\\n  margin-top: 2rem;\\n  font-size: 1.5rem;\\n  font-weight: bold;\\n  text-align: center;\\n}\\n.payment-request-heading-2 {\\n  text-align: center;\\n  opacity: 0.5;\\n}\\n\\n/* pixels as qr result is in pixels */\\n.qr-container {\\n  margin: 4rem auto 6rem auto;\\n  background: #FFFFFF;\\n  border-radius: 2rem;\\n  text-align: center;\\n  width: 250px;\\n  height: 250px;\\n}\\n.qr-container.has-qr {\\n  box-shadow: 0 10px 20px 3px rgba(0, 0, 0, 0.1);\\n}\\n.qr-container canvas {\\n  margin-top: 25px;\\n}\\n.qr-container .spinner {\\n  transform: scale(5);\\n}\\n.success-container {\\n  font-size: 6rem;\\n  text-align: center;\\n  margin: 6rem 0;\\n}\\n.item {\\n  padding: 0.5rem;\\n  position: relative;\\n}\\n.item .item-description {\\n  font-weight: bold;\\n}\\n.item .item-price {\\n  color: #3B3B3B;\\n  opacity: 0.3;\\n  font-size: 0.9rem;\\n}\\n.item .item-total {\\n  margin-top: 0.4rem;\\n}\\n.item .item-buttons {\\n  position: absolute;\\n  top: 1rem;\\n  right: 0;\\n}\\n.item .item-buttons button {\\n  cursor: pointer;\\n  border-radius: 0.4rem;\\n  width: 1.5rem;\\n  height: 1.5rem;\\n  text-align: center;\\n  margin: 0 0.4rem;\\n  transition: transform 150ms ease-in-out;\\n}\\n.item .item-buttons :hover {\\n  transform: scale3d(1.25, 1.25, 1);\\n}\\n.item .item-buttons .item-remove-button {\\n  color: #161616;\\n  background: rgba(22, 22, 22, 0.1);\\n}\\n.item .item-buttons .item-add-button {\\n  color: #fff;\\n  background: #161616;\\n}\\n.bottom {\\n  width: 100%;\\n  margin: 0.8rem 0;\\n}\\n.bottom .bottom-divider {\\n  opacity: 0.2;\\n  border: 1px dashed #181818;\\n  margin: 0.8rem 0;\\n}\\n.bottom .bottom-summary {\\n  position: relative;\\n  font-weight: bold;\\n  margin: 0.8rem 0;\\n}\\n.bottom .bottom-summary .bottom-summary-right {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  color: #161616;\\n  opacity: 0.5;\\n}\\n.bottom .bottom-button {\\n  cursor: pointer;\\n  background: #161616;\\n  color: #fff;\\n  padding: 0.8rem;\\n  border-radius: 1rem;\\n  font-weight: bold;\\n  width: 100%;\\n}\\n.bottom .bottom-button.cancel {\\n  color: #161616;\\n  background: #fff;\\n}\\n.spinner {\\n  width: 100px;\\n  height: 100px;\\n  background-color: #333;\\n  opacity: 0.3;\\n  margin: 100px auto;\\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\\n}\\n@-webkit-keyframes sk-rotateplane {\\n0% {\\n    -webkit-transform: perspective(120px);\\n}\\n50% {\\n    -webkit-transform: perspective(120px) rotateY(180deg);\\n}\\n100% {\\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);\\n}\\n}\\n@keyframes sk-rotateplane {\\n0% {\\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\\n}\\n50% {\\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\\n}\\n100% {\\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\\n}\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/PoS.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Client.vue?vue&type=style&index=0&id=5f002905&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"20955e95\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/Client.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"1424ee69\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/PoS.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/assets/fonts/Rubik-Regular.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/Rubik-Regular.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Rubik-Regular.4b3f0681.ttf\";\n\n//# sourceURL=webpack:///./src/assets/fonts/Rubik-Regular.ttf?");

/***/ }),

/***/ "./src/assets/img/back-arrow.svg":
/*!***************************************!*\
  !*** ./src/assets/img/back-arrow.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/back-arrow.fdecefbb.svg\";\n\n//# sourceURL=webpack:///./src/assets/img/back-arrow.svg?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! page */ \"./node_modules/page/page.js\");\n/* harmony import */ var page__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(page__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\nvar DefaultComponent = Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"markRaw\"])({\n  render: function render() {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])('div', 'Loading…');\n  }\n});\nvar SimpleRouterApp = {\n  data: function data() {\n    return {\n      ViewComponent: null\n    };\n  },\n  render: function render() {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"h\"])(this.ViewComponent || DefaultComponent);\n  },\n  created: function created() {\n    var _this = this;\n\n    var _loop = function _loop(route) {\n      page__WEBPACK_IMPORTED_MODULE_5___default()(route, function () {\n        _this.ViewComponent = Object(vue__WEBPACK_IMPORTED_MODULE_4__[\"markRaw\"])(__webpack_require__(\"./src/views sync recursive ^\\\\.\\\\/.*\\\\.vue$\")(\"./\" + _routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"][route] + \".vue\").default);\n      });\n    };\n\n    for (var route in _routes__WEBPACK_IMPORTED_MODULE_6__[\"default\"]) {\n      _loop(route);\n    }\n\n    page__WEBPACK_IMPORTED_MODULE_5___default()();\n  }\n};\nObject(vue__WEBPACK_IMPORTED_MODULE_4__[\"createApp\"])(SimpleRouterApp).mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  '/pos': 'PoS',\n  '/client': 'Client',\n  '*': 'PoS'\n});\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/utils/aeternity.js":
/*!********************************!*\
  !*** ./src/utils/aeternity.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _aeternity_aepp_sdk_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aeternity/aepp-sdk/es */ \"./node_modules/@aeternity/aepp-sdk/es/index.js\");\n/* harmony import */ var _fungible_token_custom_interface_aes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fungible-token-custom-interface.aes */ \"./src/utils/fungible-token-custom-interface.aes.js\");\n/* harmony import */ var _fungible_token_custom_interface_aes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fungible_token_custom_interface_aes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pos_contract_interface_aes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos-contract-interface.aes */ \"./src/utils/pos-contract-interface.aes.js\");\n/* harmony import */ var _pos_contract_interface_aes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pos_contract_interface_aes__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar TESTNET_URL = 'https://testnet.aeternity.io';\nvar COMPILER_URL = 'https://compiler.aepps.com';\nvar TOKEN_CONTRACT_ADDRESS = 'ct_45FezzKwHQyenzW8SZxFJUKVWtZ4UMgVG4kAbeKcAAqsA91K3';\nvar POS_CONTRACT_ADDRESS = 'ct_2ndDv1QzkrgXfr1UJ2pnpjMZpTJDB4GuytH143bjNMTGRbBkL7';\nvar aeternity = {\n  client: null,\n  token: null,\n  pos: null,\n  ready: false,\n  posContractAddress: POS_CONTRACT_ADDRESS\n};\n\naeternity.generateAccount = function () {\n  return _aeternity_aepp_sdk_es__WEBPACK_IMPORTED_MODULE_2__[\"Crypto\"].generateKeyPair();\n};\n\naeternity.checkBalance = /*#__PURE__*/Object(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n  var address;\n  return regeneratorRuntime.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return aeternity.client.address();\n\n        case 2:\n          address = _context.sent;\n          return _context.abrupt(\"return\", aeternity.client.getBalance(address));\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n\naeternity.init = /*#__PURE__*/function () {\n  var _ref3 = Object(_home_philipp_Develop_aepp_aex9_pos_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref2) {\n    var publicKey, secretKey;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            publicKey = _ref2.publicKey, secretKey = _ref2.secretKey;\n            _context2.t0 = _aeternity_aepp_sdk_es__WEBPACK_IMPORTED_MODULE_2__[\"Universal\"];\n            _context2.t1 = COMPILER_URL;\n            _context2.next = 5;\n            return Object(_aeternity_aepp_sdk_es__WEBPACK_IMPORTED_MODULE_2__[\"Node\"])({\n              url: TESTNET_URL\n            });\n\n          case 5:\n            _context2.t2 = _context2.sent;\n            _context2.t3 = {\n              name: 'testnet',\n              instance: _context2.t2\n            };\n            _context2.t4 = [_context2.t3];\n            _context2.t5 = [Object(_aeternity_aepp_sdk_es__WEBPACK_IMPORTED_MODULE_2__[\"MemoryAccount\"])({\n              keypair: {\n                secretKey: secretKey,\n                publicKey: publicKey\n              }\n            })];\n            _context2.t6 = {\n              compilerUrl: _context2.t1,\n              nodes: _context2.t4,\n              accounts: _context2.t5\n            };\n            _context2.next = 12;\n            return (0, _context2.t0)(_context2.t6);\n\n          case 12:\n            aeternity.client = _context2.sent;\n            _context2.next = 15;\n            return aeternity.client.getContractInstance(_fungible_token_custom_interface_aes__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              contractAddress: TOKEN_CONTRACT_ADDRESS\n            });\n\n          case 15:\n            aeternity.token = _context2.sent;\n            _context2.next = 18;\n            return aeternity.client.getContractInstance(_pos_contract_interface_aes__WEBPACK_IMPORTED_MODULE_4___default.a, {\n              contractAddress: POS_CONTRACT_ADDRESS\n            });\n\n          case 18:\n            aeternity.pos = _context2.sent;\n            aeternity.ready = true;\n\n          case 20:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (aeternity);\n\n//# sourceURL=webpack:///./src/utils/aeternity.js?");

/***/ }),

/***/ "./src/utils/fungible-token-custom-interface.aes.js":
/*!**********************************************************!*\
  !*** ./src/utils/fungible-token-custom-interface.aes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\n@compiler >= 6\\n\\ncontract interface PoS =\\n  stateful entrypoint set_paid : (int, int) => unit\\n\\nmain contract FungibleTokenFull =\\n  stateful entrypoint burn_trigger_pos : (int, PoS, int) => unit\\n\";\n\n//# sourceURL=webpack:///./src/utils/fungible-token-custom-interface.aes.js?");

/***/ }),

/***/ "./src/utils/items.json":
/*!******************************!*\
  !*** ./src/utils/items.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":1,\\\"type\\\":\\\"FOOD\\\",\\\"description\\\":\\\"Burger\\\",\\\"price\\\":3},{\\\"id\\\":2,\\\"type\\\":\\\"FOOD\\\",\\\"description\\\":\\\"Chips\\\",\\\"price\\\":1},{\\\"id\\\":3,\\\"type\\\":\\\"DRINKS\\\",\\\"description\\\":\\\"Coke\\\",\\\"price\\\":1},{\\\"id\\\":4,\\\"type\\\":\\\"DRINKS\\\",\\\"description\\\":\\\"Gin & Tonic\\\",\\\"price\\\":2}]\");\n\n//# sourceURL=webpack:///./src/utils/items.json?");

/***/ }),

/***/ "./src/utils/pos-contract-interface.aes.js":
/*!*************************************************!*\
  !*** ./src/utils/pos-contract-interface.aes.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"\\n@compiler >= 6\\n\\nmain contract PoS =\\n  stateful entrypoint new_invoice : (int) => int\\n  entrypoint has_paid : (int) => bool\\n\";\n\n//# sourceURL=webpack:///./src/utils/pos-contract-interface.aes.js?");

/***/ }),

/***/ "./src/views sync recursive ^\\.\\/.*\\.vue$":
/*!**************************************!*\
  !*** ./src/views sync ^\.\/.*\.vue$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Client.vue\": \"./src/views/Client.vue\",\n\t\"./PoS.vue\": \"./src/views/PoS.vue\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/views sync recursive ^\\\\.\\\\/.*\\\\.vue$\";\n\n//# sourceURL=webpack:///./src/views_sync_^\\.\\/.*\\.vue$?");

/***/ }),

/***/ "./src/views/Client.vue":
/*!******************************!*\
  !*** ./src/views/Client.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Client_vue_vue_type_template_id_5f002905__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Client.vue?vue&type=template&id=5f002905 */ \"./src/views/Client.vue?vue&type=template&id=5f002905\");\n/* harmony import */ var _Client_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Client.vue?vue&type=script&lang=js */ \"./src/views/Client.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Client_vue_vue_type_style_index_0_id_5f002905_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Client.vue?vue&type=style&index=0&id=5f002905&lang=css */ \"./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css\");\n\n\n\n\n\n_Client_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _Client_vue_vue_type_template_id_5f002905__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_Client_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/views/Client.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Client_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/views/Client.vue?");

/***/ }),

/***/ "./src/views/Client.vue?vue&type=script&lang=js":
/*!******************************************************!*\
  !*** ./src/views/Client.vue?vue&type=script&lang=js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Client.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Client.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/Client.vue?");

/***/ }),

/***/ "./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css":
/*!**************************************************************************!*\
  !*** ./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_style_index_0_id_5f002905_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Client.vue?vue&type=style&index=0&id=5f002905&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Client.vue?vue&type=style&index=0&id=5f002905&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_style_index_0_id_5f002905_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_style_index_0_id_5f002905_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_style_index_0_id_5f002905_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_style_index_0_id_5f002905_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/Client.vue?");

/***/ }),

/***/ "./src/views/Client.vue?vue&type=template&id=5f002905":
/*!************************************************************!*\
  !*** ./src/views/Client.vue?vue&type=template&id=5f002905 ***!
  \************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_template_id_5f002905__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./Client.vue?vue&type=template&id=5f002905 */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/Client.vue?vue&type=template&id=5f002905\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_Client_vue_vue_type_template_id_5f002905__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Client.vue?");

/***/ }),

/***/ "./src/views/PoS.vue":
/*!***************************!*\
  !*** ./src/views/PoS.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PoS_vue_vue_type_template_id_bcc0e42c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PoS.vue?vue&type=template&id=bcc0e42c */ \"./src/views/PoS.vue?vue&type=template&id=bcc0e42c\");\n/* harmony import */ var _PoS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PoS.vue?vue&type=script&lang=js */ \"./src/views/PoS.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _PoS_vue_vue_type_style_index_0_id_bcc0e42c_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss */ \"./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss\");\n\n\n\n\n\n_PoS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].render = _PoS_vue_vue_type_template_id_bcc0e42c__WEBPACK_IMPORTED_MODULE_0__[\"render\"]\n/* hot reload */\nif (false) {}\n\n_PoS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].__file = \"src/views/PoS.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_PoS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/views/PoS.vue?");

/***/ }),

/***/ "./src/views/PoS.vue?vue&type=script&lang=js":
/*!***************************************************!*\
  !*** ./src/views/PoS.vue?vue&type=script&lang=js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./PoS.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PoS.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/views/PoS.vue?");

/***/ }),

/***/ "./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss":
/*!************************************************************************!*\
  !*** ./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_style_index_0_id_bcc0e42c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PoS.vue?vue&type=style&index=0&id=bcc0e42c&lang=scss\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_style_index_0_id_bcc0e42c_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_style_index_0_id_bcc0e42c_lang_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_style_index_0_id_bcc0e42c_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_style_index_0_id_bcc0e42c_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/PoS.vue?");

/***/ }),

/***/ "./src/views/PoS.vue?vue&type=template&id=bcc0e42c":
/*!*********************************************************!*\
  !*** ./src/views/PoS.vue?vue&type=template&id=bcc0e42c ***!
  \*********************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_template_id_bcc0e42c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader-v16/dist??ref--0-1!./PoS.vue?vue&type=template&id=bcc0e42c */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/views/PoS.vue?vue&type=template&id=bcc0e42c\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_PoS_vue_vue_type_template_id_bcc0e42c__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/PoS.vue?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 10:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 11:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 12:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 14:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 15:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 16:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 17:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 18:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 19:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 20:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///./util.inspect_(ignored)?");

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 7:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ })

/******/ });