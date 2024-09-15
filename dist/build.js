/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie-parser */ "cookie-parser");
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-rate-limit */ "express-rate-limit");
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/middleware/base-response.middleware */ "./src/core/middleware/base-response.middleware.js");
/* harmony import */ var _core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/middleware/error-handler-middleware */ "./src/core/middleware/error-handler-middleware.js");






var app = express__WEBPACK_IMPORTED_MODULE_2___default()();
app.use((0,express_rate_limit__WEBPACK_IMPORTED_MODULE_3__.rateLimit)({
  windowMs: 10 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-6",
  legacyHeaders: false,
  message: "Too many requests"
}));
app.set("trust proxy", 1);
app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_0___default()());
app.use(express__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({
  extended: true
}));
app.use(express__WEBPACK_IMPORTED_MODULE_2___default().json());
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.disable("x-powered-by");
app.use(_core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use(_core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/core/config/db.config.js":
/*!**************************************!*\
  !*** ./src/core/config/db.config.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_5__);






var Database = /*#__PURE__*/function () {
  function Database() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Database);
    // If an instance already exists, prevent creating a new one
    if (Database.instance) {
      throw new Error("Database instance already exists. Use Database.getInstance() instead.");
    }
  }

  // Method to get the Singleton instance of Sequelize
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Database, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!Database.instance) {
        Database.instance = new sequelize__WEBPACK_IMPORTED_MODULE_5__.Sequelize({
          database: process.env.DB_DATABASE,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          dialect: process.env.DB_DIALECT
        });
      }
      return Database.instance;
    }

    // Method to open the database connection
  }, {
    key: "connect",
    value: function () {
      var _connect = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var sequelize;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              sequelize = Database.getInstance();
              _context.next = 4;
              return sequelize.authenticate();
            case 4:
              console.log("Successfully connected to the database.");
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error("Error connecting to the database:", _context.t0);
              throw new Error("Unable to connect to the database");
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }));
      function connect() {
        return _connect.apply(this, arguments);
      }
      return connect;
    }() // Method to close the database connection
  }, {
    key: "close",
    value: function () {
      var _close = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              if (!Database.instance) {
                _context2.next = 5;
                break;
              }
              _context2.next = 4;
              return Database.instance.close();
            case 4:
              console.log("Database connection successfully closed.");
            case 5:
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("Error closing the database connection:", _context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }));
      function close() {
        return _close.apply(this, arguments);
      }
      return close;
    }()
  }]);
}();
_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Database, "instance", null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);

/***/ }),

/***/ "./src/core/config/env.config.js":
/*!***************************************!*\
  !*** ./src/core/config/env.config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);

(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();
(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)({
  path:  true ? ".env.local" : 0,
  override: true
});

/***/ }),

/***/ "./src/core/middleware/base-response.middleware.js":
/*!*********************************************************!*\
  !*** ./src/core/middleware/base-response.middleware.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ baseResponseMiddleware)
/* harmony export */ });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _response_base_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../response/base-response */ "./src/core/response/base-response.js");


function baseResponseMiddleware(req, res, next) {
  res.success = function (props) {
    res.status(props.status || http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.OK).json(_response_base_response__WEBPACK_IMPORTED_MODULE_1__.BaseResponse.success(props));
  };
  res.error = function (props) {
    res.status(props.status || http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.BAD_REQUEST).json(_response_base_response__WEBPACK_IMPORTED_MODULE_1__.BaseResponse.error(props));
  };
  next();
}

/***/ }),

/***/ "./src/core/middleware/error-handler-middleware.js":
/*!*********************************************************!*\
  !*** ./src/core/middleware/error-handler-middleware.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/error-response/error-response */ "./src/shared/error-response/error-response.js");


var errorHandlerMiddleware = function errorHandlerMiddleware(error, request, response, next) {
  if (error instanceof _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_1__.APIError) {
    return response.status(error.statusCode || 400).json({
      success: false,
      message: error.message
    });
  }
  next();
  if (error instanceof _core_response_base_response__WEBPACK_IMPORTED_MODULE_0__.BaseResponse) {
    return response.error(error);
  }
  return response.status(500).json({
    success: false,
    message: error.message || "Internal Server Error!"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorHandlerMiddleware);

/***/ }),

/***/ "./src/core/response/base-response.js":
/*!********************************************!*\
  !*** ./src/core/response/base-response.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseResponse: () => (/* binding */ BaseResponse)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);



var BaseResponse = /*#__PURE__*/function () {
  function BaseResponse(data) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseResponse);
    this.success = data.success;
    this.status = data.status;
    this.message = data.message;
    this.data = data.data;
    this.details = data.details;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseResponse, null, [{
    key: "success",
    value: function success(_ref) {
      var _ref$status = _ref.status,
        status = _ref$status === void 0 ? http_status_codes__WEBPACK_IMPORTED_MODULE_2__.StatusCodes.OK : _ref$status,
        message = _ref.message,
        data = _ref.data;
      return new BaseResponse({
        success: true,
        status: status,
        message: message || (0,http_status_codes__WEBPACK_IMPORTED_MODULE_2__.getReasonPhrase)(status),
        data: data
      });
    }
  }, {
    key: "error",
    value: function error(_ref2) {
      var message = _ref2.message,
        _ref2$status = _ref2.status,
        status = _ref2$status === void 0 ? http_status_codes__WEBPACK_IMPORTED_MODULE_2__.StatusCodes.BAD_REQUEST : _ref2$status,
        _ref2$details = _ref2.details,
        details = _ref2$details === void 0 ? null : _ref2$details;
      return new BaseResponse({
        success: false,
        status: status,
        message: message || (0,http_status_codes__WEBPACK_IMPORTED_MODULE_2__.getReasonPhrase)(status),
        details: details
      });
    }
  }]);
}();

/***/ }),

/***/ "./src/shared/error-response/error-response.js":
/*!*****************************************************!*\
  !*** ./src/shared/error-response/error-response.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIError: () => (/* binding */ APIError)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "@babel/runtime/helpers/wrapNativeSuper");
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5__);






function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var APIError = /*#__PURE__*/function (_Error) {
  function APIError(message, statusCode) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, APIError);
    _this = _callSuper(this, APIError, [message]);
    _this.statusCode = statusCode;
    return _this;
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(APIError, _Error);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(APIError);
}(/*#__PURE__*/_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_5___default()(Error));

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/wrapNativeSuper":
/*!*********************************************************!*\
  !*** external "@babel/runtime/helpers/wrapNativeSuper" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-async-errors":
/*!***************************************!*\
  !*** external "express-async-errors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("express-async-errors");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-rate-limit");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_config_env_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/config/env.config */ "./src/core/config/env.config.js");
/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-async-errors */ "express-async-errors");
/* harmony import */ var express_async_errors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_async_errors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/config/db.config */ "./src/core/config/db.config.js");







var server = (0,http__WEBPACK_IMPORTED_MODULE_4__.createServer)(_app__WEBPACK_IMPORTED_MODULE_5__["default"]);
var PORT = process.env.PORT;
_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.prev = 0;
        _context3.next = 3;
        return _core_config_db_config__WEBPACK_IMPORTED_MODULE_6__["default"].connect();
      case 3:
        // Connect to the database
        console.log("Application started...");
        server.listen(PORT, function () {
          console.log("Server is running on port ".concat(PORT));
        });
        _context3.next = 11;
        break;
      case 7:
        _context3.prev = 7;
        _context3.t0 = _context3["catch"](0);
        console.error("Application failed to start:", _context3.t0.message);
        process.exit(1); // Exit with failure code
      case 11:
        // Gracefully handle shutdown signals
        process.on("SIGINT", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _core_config_db_config__WEBPACK_IMPORTED_MODULE_6__["default"].close();
              case 2:
                // Close the database connection
                process.exit(0);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })));
        process.on("SIGTERM", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _core_config_db_config__WEBPACK_IMPORTED_MODULE_6__["default"].close();
              case 2:
                // Close the database connection
                process.exit(0);
              case 3:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })));
      case 13:
      case "end":
        return _context3.stop();
    }
  }, _callee3, null, [[0, 7]]);
}))();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sQ0FBQzZFLElBQUksQ0FBQyxDQUFDLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUF4RCxRQUFBLENBQUFRLElBQUE7WUFBQTtVQUFBLEdBQUFaLE9BQUE7UUFBQSxDQUNqQixHQUFDO1FBRUZqQixPQUFPLENBQUM4RSxFQUFFLENBQUMsU0FBUyxlQUFBaEUsOEVBQUEsY0FBQUMsc0VBQUEsQ0FBRSxTQUFBbUIsU0FBQTtVQUFBLE9BQUFuQixzRUFBQSxVQUFBb0IsVUFBQUMsU0FBQTtZQUFBLGtCQUFBQSxTQUFBLENBQUFkLElBQUEsR0FBQWMsU0FBQSxDQUFBYixJQUFBO2NBQUE7Z0JBQUFhLFNBQUEsQ0FBQWIsSUFBQTtnQkFBQSxPQUNkaEMsOERBQVEsQ0FBQzhDLEtBQUssQ0FBQyxDQUFDO2NBQUE7Z0JBQUU7Z0JBQ3hCckMsT0FBTyxDQUFDNkUsSUFBSSxDQUFDLENBQUMsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQXpDLFNBQUEsQ0FBQVAsSUFBQTtZQUFBO1VBQUEsR0FBQUssUUFBQTtRQUFBLENBQ2pCLEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQXdDLFNBQUEsQ0FBQTdDLElBQUE7SUFBQTtFQUFBLEdBQUEyQyxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2NvbmZpZy9kYi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9jb25maWcvZW52LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtcmF0ZS1saW1pdFwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1zdGF0dXMtY29kZXNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuYXBwLnVzZShleHByZXNzLmpzb24oKSk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcbmFwcC51c2UoYmFzZVJlc3BvbnNlTWlkZGxld2FyZSk7XG5cbmFwcC51c2UoZXJyb3JIYW5kbGVyTWlkZGxld2FyZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuY2xhc3MgRGF0YWJhc2Uge1xuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIElmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCBwcmV2ZW50IGNyZWF0aW5nIGEgbmV3IG9uZVxuICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkRhdGFiYXNlIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLiBVc2UgRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkLlwiLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gZ2V0IHRoZSBTaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2VxdWVsaXplXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XG4gICAgICBEYXRhYmFzZS5pbnN0YW5jZSA9IG5ldyBTZXF1ZWxpemUoe1xuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfREFUQUJBU0UsXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSTkFNRSxcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxuICAgICAgICBkaWFsZWN0OiBwcm9jZXNzLmVudi5EQl9ESUFMRUNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERhdGFiYXNlLmluc3RhbmNlO1xuICB9XG5cbiAgLy8gTWV0aG9kIHRvIG9wZW4gdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgc3RhdGljIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcXVlbGl6ZSA9IERhdGFiYXNlLmdldEluc3RhbmNlKCk7XG4gICAgICBhd2FpdCBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLlwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2VcIik7XG4gICAgfVxuICB9XG5cbiAgLy8gTWV0aG9kIHRvIGNsb3NlIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXG4gIHN0YXRpYyBhc3luYyBjbG9zZSgpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKERhdGFiYXNlLmluc3RhbmNlKSB7XG4gICAgICAgIGF3YWl0IERhdGFiYXNlLmluc3RhbmNlLmNsb3NlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgY29ubmVjdGlvbiBzdWNjZXNzZnVsbHkgY2xvc2VkLlwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNsb3NpbmcgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb246XCIsIGVycm9yKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0YWJhc2U7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5cbmNvbmZpZygpO1xuXG5jb25maWcoe1xuICBwYXRoOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gXCIuZW52LmxvY2FsXCIgOiBcIi5lbnZcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59KTtcbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2VSZXNwb25zZU1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnN1Y2Nlc3MgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLk9LKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLnN1Y2Nlc3MocHJvcHMpKTtcbiAgfTtcblxuICByZXMuZXJyb3IgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLmVycm9yKHByb3BzKSk7XG4gIH07XG5cbiAgbmV4dCgpO1xufVxuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCJAL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuXG5jb25zdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlID0gKGVycm9yLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBUElFcnJvcikge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA0MDApLmpzb24oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpO1xuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEJhc2VSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5lcnJvcihlcnJvcik7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkludGVybmFsIFNlcnZlciBFcnJvciFcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlO1xuIiwiaW1wb3J0IHsgZ2V0UmVhc29uUGhyYXNlLCBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcbiAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG4gICAgdGhpcy5kZXRhaWxzID0gZGF0YS5kZXRhaWxzO1xuICB9XG5cbiAgc3RhdGljIHN1Y2Nlc3MoeyBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5PSywgbWVzc2FnZSwgZGF0YSB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGVycm9yKHsgbWVzc2FnZSwgc3RhdHVzID0gU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsIGRldGFpbHMgPSBudWxsIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkZXRhaWxzLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQVBJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtc3RhdHVzLWNvZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoYXBwKTtcbmNvbnN0IHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbihhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY29ubmVjdCgpOyAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gc3RhcnRlZC4uLlwiKTtcbiAgICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQXBwbGljYXRpb24gZmFpbGVkIHRvIHN0YXJ0OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7IC8vIEV4aXQgd2l0aCBmYWlsdXJlIGNvZGVcbiAgfVxuXG4gIC8vIEdyYWNlZnVsbHkgaGFuZGxlIHNodXRkb3duIHNpZ25hbHNcbiAgcHJvY2Vzcy5vbihcIlNJR0lOVFwiLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0pO1xuXG4gIHByb2Nlc3Mub24oXCJTSUdURVJNXCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbImNvb2tpZVBhcnNlciIsImNvcnMiLCJleHByZXNzIiwicmF0ZUxpbWl0IiwiYmFzZVJlc3BvbnNlTWlkZGxld2FyZSIsImVycm9ySGFuZGxlck1pZGRsZXdhcmUiLCJhcHAiLCJ1c2UiLCJ3aW5kb3dNcyIsImxpbWl0Iiwic3RhbmRhcmRIZWFkZXJzIiwibGVnYWN5SGVhZGVycyIsIm1lc3NhZ2UiLCJzZXQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwiZGlzYWJsZSIsIlNlcXVlbGl6ZSIsIkRhdGFiYXNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJFcnJvciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0SW5zdGFuY2UiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiaG9zdCIsIkRCX0hPU1QiLCJwb3J0IiwiREJfUE9SVCIsImRpYWxlY3QiLCJEQl9ESUFMRUNUIiwiX2Nvbm5lY3QiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInNlcXVlbGl6ZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJhdXRoZW50aWNhdGUiLCJjb25zb2xlIiwibG9nIiwidDAiLCJlcnJvciIsInN0b3AiLCJjb25uZWN0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY2xvc2UiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNsb3NlIiwiX2RlZmluZVByb3BlcnR5IiwiY29uZmlnIiwicGF0aCIsIk5PREVfRU5WIiwib3ZlcnJpZGUiLCJTdGF0dXNDb2RlcyIsIkJhc2VSZXNwb25zZSIsInJlcSIsInJlcyIsInN1Y2Nlc3MiLCJwcm9wcyIsInN0YXR1cyIsIk9LIiwiQkFEX1JFUVVFU1QiLCJBUElFcnJvciIsInJlcXVlc3QiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJnZXRSZWFzb25QaHJhc2UiLCJkYXRhIiwiZGV0YWlscyIsIl9yZWYiLCJfcmVmJHN0YXR1cyIsIl9yZWYyIiwiX3JlZjIkc3RhdHVzIiwiX3JlZjIkZGV0YWlscyIsIl9FcnJvciIsIl90aGlzIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl93cmFwTmF0aXZlU3VwZXIiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXIiLCJQT1JUIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJsaXN0ZW4iLCJjb25jYXQiLCJleGl0Iiwib24iXSwic291cmNlUm9vdCI6IiJ9