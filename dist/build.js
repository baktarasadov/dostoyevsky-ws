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
app.use(baseResponseMiddleware);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO2dCQUFBLE9BQUE5QixRQUFBLENBQUFRLElBQUE7WUFBQTtVQUFBLEdBQUFaLE9BQUE7UUFBQSxDQUNqQixHQUFDO1FBRUZqQixPQUFPLENBQUNvRCxFQUFFLENBQUMsU0FBUyxlQUFBdEMsOEVBQUEsY0FBQUMsc0VBQUEsQ0FBRSxTQUFBbUIsU0FBQTtVQUFBLE9BQUFuQixzRUFBQSxVQUFBb0IsVUFBQUMsU0FBQTtZQUFBLGtCQUFBQSxTQUFBLENBQUFkLElBQUEsR0FBQWMsU0FBQSxDQUFBYixJQUFBO2NBQUE7Z0JBQUFhLFNBQUEsQ0FBQWIsSUFBQTtnQkFBQSxPQUNkaEMsOERBQVEsQ0FBQzhDLEtBQUssQ0FBQyxDQUFDO2NBQUE7Z0JBQUU7Z0JBQ3hCckMsT0FBTyxDQUFDbUQsSUFBSSxDQUFDLENBQUMsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQWYsU0FBQSxDQUFBUCxJQUFBO1lBQUE7VUFBQSxHQUFBSyxRQUFBO1FBQUEsQ0FDakIsR0FBQztNQUFDO01BQUE7UUFBQSxPQUFBYyxTQUFBLENBQUFuQixJQUFBO0lBQUE7RUFBQSxHQUFBaUIsUUFBQTtBQUFBLENBQ0osR0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9jb25maWcvZGIuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2Vudi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXJhdGUtbGltaXRcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcbiAgcmF0ZUxpbWl0KHtcbiAgICB3aW5kb3dNczogMTAgKiA2MCAqIDEwMDAsXG4gICAgbGltaXQ6IDEwMCxcbiAgICBzdGFuZGFyZEhlYWRlcnM6IFwiZHJhZnQtNlwiLFxuICAgIGxlZ2FjeUhlYWRlcnM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgcmVxdWVzdHNcIixcbiAgfSksXG4pO1xuYXBwLnNldChcInRydXN0IHByb3h5XCIsIDEpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5hcHAudXNlKGJhc2VSZXNwb25zZU1pZGRsZXdhcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmNsYXNzIERhdGFiYXNlIHtcbiAgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBJZiBhbiBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0cywgcHJldmVudCBjcmVhdGluZyBhIG5ldyBvbmVcbiAgICBpZiAoRGF0YWJhc2UuaW5zdGFuY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJEYXRhYmFzZSBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0cy4gVXNlIERhdGFiYXNlLmdldEluc3RhbmNlKCkgaW5zdGVhZC5cIixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gTWV0aG9kIHRvIGdldCB0aGUgU2luZ2xldG9uIGluc3RhbmNlIG9mIFNlcXVlbGl6ZVxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKCFEYXRhYmFzZS5pbnN0YW5jZSkge1xuICAgICAgRGF0YWJhc2UuaW5zdGFuY2UgPSBuZXcgU2VxdWVsaXplKHtcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX0RBVEFCQVNFLFxuICAgICAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUk5BTUUsXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCxcbiAgICAgICAgZGlhbGVjdDogcHJvY2Vzcy5lbnYuREJfRElBTEVDVCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBEYXRhYmFzZS5pbnN0YW5jZTtcbiAgfVxuXG4gIC8vIE1ldGhvZCB0byBvcGVuIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXG4gIHN0YXRpYyBhc3luYyBjb25uZWN0KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXF1ZWxpemUgPSBEYXRhYmFzZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgYXdhaXQgc2VxdWVsaXplLmF1dGhlbnRpY2F0ZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZS5cIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTpcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byBjbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICBzdGF0aWMgYXN5bmMgY2xvc2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xuICAgICAgICBhd2FpdCBEYXRhYmFzZS5pbnN0YW5jZS5jbG9zZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5IGNsb3NlZC5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjbG9zaW5nIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uOlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFiYXNlO1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25maWcoKTtcblxuY29uZmlnKHtcbiAgcGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiLmVudi5sb2NhbFwiIDogXCIuZW52XCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtcmF0ZS1saW1pdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiQC9jb3JlL2NvbmZpZy9lbnYuY29uZmlnXCI7XG5pbXBvcnQgXCJleHByZXNzLWFzeW5jLWVycm9yc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSBcImh0dHBcIjtcblxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCBEYXRhYmFzZSBmcm9tIFwiLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKGFwcCk7XG5jb25zdCB7IFBPUlQgfSA9IHByb2Nlc3MuZW52O1xuXG4oYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IERhdGFiYXNlLmNvbm5lY3QoKTsgLy8gQ29ubmVjdCB0byB0aGUgZGF0YWJhc2VcbiAgICBjb25zb2xlLmxvZyhcIkFwcGxpY2F0aW9uIHN0YXJ0ZWQuLi5cIik7XG4gICAgc2VydmVyLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAke1BPUlR9YCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkFwcGxpY2F0aW9uIGZhaWxlZCB0byBzdGFydDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcHJvY2Vzcy5leGl0KDEpOyAvLyBFeGl0IHdpdGggZmFpbHVyZSBjb2RlXG4gIH1cblxuICAvLyBHcmFjZWZ1bGx5IGhhbmRsZSBzaHV0ZG93biBzaWduYWxzXG4gIHByb2Nlc3Mub24oXCJTSUdJTlRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IERhdGFiYXNlLmNsb3NlKCk7IC8vIENsb3NlIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9KTtcblxuICBwcm9jZXNzLm9uKFwiU0lHVEVSTVwiLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJjb29raWVQYXJzZXIiLCJjb3JzIiwiZXhwcmVzcyIsInJhdGVMaW1pdCIsImFwcCIsInVzZSIsIndpbmRvd01zIiwibGltaXQiLCJzdGFuZGFyZEhlYWRlcnMiLCJsZWdhY3lIZWFkZXJzIiwibWVzc2FnZSIsInNldCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJkaXNhYmxlIiwiYmFzZVJlc3BvbnNlTWlkZGxld2FyZSIsIlNlcXVlbGl6ZSIsIkRhdGFiYXNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJFcnJvciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0SW5zdGFuY2UiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiaG9zdCIsIkRCX0hPU1QiLCJwb3J0IiwiREJfUE9SVCIsImRpYWxlY3QiLCJEQl9ESUFMRUNUIiwiX2Nvbm5lY3QiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInNlcXVlbGl6ZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJhdXRoZW50aWNhdGUiLCJjb25zb2xlIiwibG9nIiwidDAiLCJlcnJvciIsInN0b3AiLCJjb25uZWN0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY2xvc2UiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNsb3NlIiwiX2RlZmluZVByb3BlcnR5IiwiY29uZmlnIiwicGF0aCIsIk5PREVfRU5WIiwib3ZlcnJpZGUiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXIiLCJQT1JUIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJsaXN0ZW4iLCJjb25jYXQiLCJleGl0Iiwib24iXSwic291cmNlUm9vdCI6IiJ9