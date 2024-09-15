/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_di_di_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-globals */ "./src/core/di/di-globals.js");
/* harmony import */ var _core_di_di_globals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_di_di_globals__WEBPACK_IMPORTED_MODULE_0__);
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);

(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)();
(0,dotenv__WEBPACK_IMPORTED_MODULE_0__.config)({
  path:  true ? ".env.local" : 0,
  override: true
});

/***/ }),

/***/ "./src/core/di/di-globals.js":
/*!***********************************!*\
  !*** ./src/core/di/di-globals.js ***!
  \***********************************/
/***/ (() => {

//imports module

/***/ }),

/***/ "./src/core/middleware/base-response.middleware.js":
/*!*********************************************************!*\
  !*** ./src/core/middleware/base-response.middleware.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/wrapNativeSuper":
/*!*********************************************************!*\
  !*** external "@babel/runtime/helpers/wrapNativeSuper" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/wrapNativeSuper");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-async-errors":
/*!***************************************!*\
  !*** external "express-async-errors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-async-errors");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-rate-limit");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("http-status-codes");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQXhELFFBQUEsQ0FBQVEsSUFBQTtZQUFBO1VBQUEsR0FBQVosT0FBQTtRQUFBLENBQ2pCLEdBQUM7UUFFRmpCLE9BQU8sQ0FBQzhFLEVBQUUsQ0FBQyxTQUFTLGVBQUFoRSw4RUFBQSxjQUFBQyxzRUFBQSxDQUFFLFNBQUFtQixTQUFBO1VBQUEsT0FBQW5CLHNFQUFBLFVBQUFvQixVQUFBQyxTQUFBO1lBQUEsa0JBQUFBLFNBQUEsQ0FBQWQsSUFBQSxHQUFBYyxTQUFBLENBQUFiLElBQUE7Y0FBQTtnQkFBQWEsU0FBQSxDQUFBYixJQUFBO2dCQUFBLE9BQ2RoQyw4REFBUSxDQUFDOEMsS0FBSyxDQUFDLENBQUM7Y0FBQTtnQkFBRTtnQkFDeEJyQyxPQUFPLENBQUM2RSxJQUFJLENBQUMsQ0FBQyxDQUFDO2NBQUM7Y0FBQTtnQkFBQSxPQUFBekMsU0FBQSxDQUFBUCxJQUFBO1lBQUE7VUFBQSxHQUFBSyxRQUFBO1FBQUEsQ0FDakIsR0FBQztNQUFDO01BQUE7UUFBQSxPQUFBd0MsU0FBQSxDQUFBN0MsSUFBQTtJQUFBO0VBQUEsR0FBQTJDLFFBQUE7QUFBQSxDQUNKLEdBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2RiLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2NvbmZpZy9lbnYuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvZGkvZGktZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtcmF0ZS1saW1pdFwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1zdGF0dXMtY29kZXNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9jb3JlL2RpL2RpLWdsb2JhbHNcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcmF0ZUxpbWl0IH0gZnJvbSBcImV4cHJlc3MtcmF0ZS1saW1pdFwiO1xuXG5pbXBvcnQgYmFzZVJlc3BvbnNlTWlkZGxld2FyZSBmcm9tIFwiLi9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSBmcm9tIFwiLi9jb3JlL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci1taWRkbGV3YXJlXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcbiAgcmF0ZUxpbWl0KHtcbiAgICB3aW5kb3dNczogMTAgKiA2MCAqIDEwMDAsXG4gICAgbGltaXQ6IDEwMCxcbiAgICBzdGFuZGFyZEhlYWRlcnM6IFwiZHJhZnQtNlwiLFxuICAgIGxlZ2FjeUhlYWRlcnM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgcmVxdWVzdHNcIixcbiAgfSksXG4pO1xuYXBwLnNldChcInRydXN0IHByb3h5XCIsIDEpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuYXBwLnVzZShiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKTtcblxuYXBwLnVzZShlcnJvckhhbmRsZXJNaWRkbGV3YXJlKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5jbGFzcyBEYXRhYmFzZSB7XG4gIHN0YXRpYyBpbnN0YW5jZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gSWYgYW4gaW5zdGFuY2UgYWxyZWFkeSBleGlzdHMsIHByZXZlbnQgY3JlYXRpbmcgYSBuZXcgb25lXG4gICAgaWYgKERhdGFiYXNlLmluc3RhbmNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiRGF0YWJhc2UgaW5zdGFuY2UgYWxyZWFkeSBleGlzdHMuIFVzZSBEYXRhYmFzZS5nZXRJbnN0YW5jZSgpIGluc3RlYWQuXCIsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byBnZXQgdGhlIFNpbmdsZXRvbiBpbnN0YW5jZSBvZiBTZXF1ZWxpemVcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmICghRGF0YWJhc2UuaW5zdGFuY2UpIHtcbiAgICAgIERhdGFiYXNlLmluc3RhbmNlID0gbmV3IFNlcXVlbGl6ZSh7XG4gICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9EQVRBQkFTRSxcbiAgICAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVJOQU1FLFxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQsXG4gICAgICAgIGRpYWxlY3Q6IHByb2Nlc3MuZW52LkRCX0RJQUxFQ1QsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gRGF0YWJhc2UuaW5zdGFuY2U7XG4gIH1cblxuICAvLyBNZXRob2QgdG8gb3BlbiB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICBzdGF0aWMgYXN5bmMgY29ubmVjdCgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VxdWVsaXplID0gRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgIGF3YWl0IHNlcXVlbGl6ZS5hdXRoZW50aWNhdGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVwiKTtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gY2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgc3RhdGljIGFzeW5jIGNsb3NlKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoRGF0YWJhc2UuaW5zdGFuY2UpIHtcbiAgICAgICAgYXdhaXQgRGF0YWJhc2UuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBjbG9zZWQuXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2xvc2luZyB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcblxuY29uZmlnKCk7XG5cbmNvbmZpZyh7XG4gIHBhdGg6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcIi5lbnYubG9jYWxcIiA6IFwiLmVudlwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn0pO1xuIiwiLy9pbXBvcnRzIG1vZHVsZVxuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZVJlc3BvbnNlTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc3VjY2VzcyA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuT0spXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2Uuc3VjY2Vzcyhwcm9wcykpO1xuICB9O1xuXG4gIHJlcy5lcnJvciA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QpXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2UuZXJyb3IocHJvcHMpKTtcbiAgfTtcblxuICBuZXh0KCk7XG59XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIkAvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5cbmNvbnN0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgPSAoZXJyb3IsIHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEFQSUVycm9yKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXNDb2RlIHx8IDQwMCkuanNvbih7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBuZXh0KCk7XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQmFzZVJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yIVwiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9ySGFuZGxlck1pZGRsZXdhcmU7XG4iLCJpbXBvcnQgeyBnZXRSZWFzb25QaHJhc2UsIFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5zdWNjZXNzID0gZGF0YS5zdWNjZXNzO1xuICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHM7XG4gIH1cblxuICBzdGF0aWMgc3VjY2Vzcyh7IHN0YXR1cyA9IFN0YXR1c0NvZGVzLk9LLCBtZXNzYWdlLCBkYXRhIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZXJyb3IoeyBtZXNzYWdlLCBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCwgZGV0YWlscyA9IG51bGwgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRldGFpbHMsXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBUElFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzQ29kZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtc3RhdHVzLWNvZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoYXBwKTtcbmNvbnN0IHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbihhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY29ubmVjdCgpOyAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gc3RhcnRlZC4uLlwiKTtcbiAgICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQXBwbGljYXRpb24gZmFpbGVkIHRvIHN0YXJ0OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7IC8vIEV4aXQgd2l0aCBmYWlsdXJlIGNvZGVcbiAgfVxuXG4gIC8vIEdyYWNlZnVsbHkgaGFuZGxlIHNodXRkb3duIHNpZ25hbHNcbiAgcHJvY2Vzcy5vbihcIlNJR0lOVFwiLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0pO1xuXG4gIHByb2Nlc3Mub24oXCJTSUdURVJNXCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbImNvcnMiLCJleHByZXNzIiwicmF0ZUxpbWl0IiwiYmFzZVJlc3BvbnNlTWlkZGxld2FyZSIsImVycm9ySGFuZGxlck1pZGRsZXdhcmUiLCJhcHAiLCJ1c2UiLCJ3aW5kb3dNcyIsImxpbWl0Iiwic3RhbmRhcmRIZWFkZXJzIiwibGVnYWN5SGVhZGVycyIsIm1lc3NhZ2UiLCJzZXQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwiZGlzYWJsZSIsIlNlcXVlbGl6ZSIsIkRhdGFiYXNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJFcnJvciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0SW5zdGFuY2UiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiaG9zdCIsIkRCX0hPU1QiLCJwb3J0IiwiREJfUE9SVCIsImRpYWxlY3QiLCJEQl9ESUFMRUNUIiwiX2Nvbm5lY3QiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInNlcXVlbGl6ZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJhdXRoZW50aWNhdGUiLCJjb25zb2xlIiwibG9nIiwidDAiLCJlcnJvciIsInN0b3AiLCJjb25uZWN0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY2xvc2UiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNsb3NlIiwiX2RlZmluZVByb3BlcnR5IiwiY29uZmlnIiwicGF0aCIsIk5PREVfRU5WIiwib3ZlcnJpZGUiLCJTdGF0dXNDb2RlcyIsIkJhc2VSZXNwb25zZSIsInJlcSIsInJlcyIsInN1Y2Nlc3MiLCJwcm9wcyIsInN0YXR1cyIsIk9LIiwiQkFEX1JFUVVFU1QiLCJBUElFcnJvciIsInJlcXVlc3QiLCJyZXNwb25zZSIsInN0YXR1c0NvZGUiLCJnZXRSZWFzb25QaHJhc2UiLCJkYXRhIiwiZGV0YWlscyIsIl9yZWYiLCJfcmVmJHN0YXR1cyIsIl9yZWYyIiwiX3JlZjIkc3RhdHVzIiwiX3JlZjIkZGV0YWlscyIsIl9FcnJvciIsIl90aGlzIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl93cmFwTmF0aXZlU3VwZXIiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXIiLCJQT1JUIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJsaXN0ZW4iLCJjb25jYXQiLCJleGl0Iiwib24iXSwic291cmNlUm9vdCI6IiJ9