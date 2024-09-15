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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/core/config/db.config.js":
/*!**************************************!*\
  !*** ./src/core/config/db.config.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var _require = __webpack_require__(/*! sequelize */ "sequelize"),
  Sequelize = _require.Sequelize;
var sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT
});
function connectToDatabase() {
  return _connectToDatabase.apply(this, arguments);
}
function _connectToDatabase() {
  _connectToDatabase = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return sequelize.authenticate();
        case 3:
          console.log("Connection to the database has been established successfully.");
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Unable to connect to the database:", _context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _connectToDatabase.apply(this, arguments);
}


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
_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return (0,_core_config_db_config__WEBPACK_IMPORTED_MODULE_6__.connectToDatabase)();
      case 2:
        server.listen(PORT, /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                console.log("Server is running: http://localhost:".concat(PORT));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })));
      case 3:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
}))();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO1lBQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7Y0FBQTtnQkFDbEJFLE9BQU8sQ0FBQ0MsR0FBRyx3Q0FBQWUsTUFBQSxDQUF3Q0wsSUFBSSxDQUFFLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUFmLFFBQUEsQ0FBQVEsSUFBQTtZQUFBO1VBQUEsR0FBQVgsT0FBQTtRQUFBLENBQzVELEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQXFCLFNBQUEsQ0FBQVYsSUFBQTtJQUFBO0VBQUEsR0FBQVEsUUFBQTtBQUFBLENBQ0osR0FBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9jb25maWcvZGIuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2Vudi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb29raWUtcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXJhdGUtbGltaXRcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tIFwiY29va2llLXBhcnNlclwiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcbiAgcmF0ZUxpbWl0KHtcbiAgICB3aW5kb3dNczogMTAgKiA2MCAqIDEwMDAsXG4gICAgbGltaXQ6IDEwMCxcbiAgICBzdGFuZGFyZEhlYWRlcnM6IFwiZHJhZnQtNlwiLFxuICAgIGxlZ2FjeUhlYWRlcnM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgcmVxdWVzdHNcIixcbiAgfSksXG4pO1xuYXBwLnNldChcInRydXN0IHByb3h5XCIsIDEpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJjb25zdCB7IFNlcXVlbGl6ZSB9ID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcblxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZSh7XG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9EQVRBQkFTRSxcbiAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVJOQU1FLFxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXG4gIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQsXG4gIGRpYWxlY3Q6IHByb2Nlc3MuZW52LkRCX0RJQUxFQ1QsXG59KTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdFRvRGF0YWJhc2UoKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgc2VxdWVsaXplLmF1dGhlbnRpY2F0ZSgpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgXCJDb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSBoYXMgYmVlbiBlc3RhYmxpc2hlZCBzdWNjZXNzZnVsbHkuXCIsXG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcblxuY29uZmlnKCk7XG5cbmNvbmZpZyh7XG4gIHBhdGg6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcIi5lbnYubG9jYWxcIiA6IFwiLmVudlwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWFzeW5jLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXJhdGUtbGltaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIkAvY29yZS9jb25maWcvZW52LmNvbmZpZ1wiO1xuaW1wb3J0IFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciB9IGZyb20gXCJodHRwXCI7XG5cbmltcG9ydCBhcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoYXBwKTtcbmNvbnN0IHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbihhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG5cbiAgc2VydmVyLmxpc3RlbihQT1JULCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nOiBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH1gKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbImNvb2tpZVBhcnNlciIsImNvcnMiLCJleHByZXNzIiwicmF0ZUxpbWl0IiwiYXBwIiwidXNlIiwid2luZG93TXMiLCJsaW1pdCIsInN0YW5kYXJkSGVhZGVycyIsImxlZ2FjeUhlYWRlcnMiLCJtZXNzYWdlIiwic2V0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImRpc2FibGUiLCJfcmVxdWlyZSIsInJlcXVpcmUiLCJTZXF1ZWxpemUiLCJzZXF1ZWxpemUiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiaG9zdCIsIkRCX0hPU1QiLCJwb3J0IiwiREJfUE9SVCIsImRpYWxlY3QiLCJEQl9ESUFMRUNUIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJfY29ubmVjdFRvRGF0YWJhc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImF1dGhlbnRpY2F0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImVycm9yIiwic3RvcCIsImNvbmZpZyIsInBhdGgiLCJOT0RFX0VOViIsIm92ZXJyaWRlIiwiY3JlYXRlU2VydmVyIiwic2VydmVyIiwiUE9SVCIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibGlzdGVuIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==