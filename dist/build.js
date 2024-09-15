/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/role/model/role.model.js":
/*!******************************************!*\
  !*** ./src/api/role/model/role.model.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/db.config */ "./src/core/config/db.config.js");


var sequelize = _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__["default"].getInstance();
var Role = sequelize.define("Role", {
  role: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true
  }
}, {
  tableName: "roles",
  timestamps: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Role);

/***/ }),

/***/ "./src/api/role/role.di.js":
/*!*********************************!*\
  !*** ./src/api/role/role.di.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roleDIKeys: () => (/* binding */ roleDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _role_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.repository */ "./src/api/role/role.repository.js");
/* harmony import */ var _role_seeder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role.seeder */ "./src/api/role/role.seeder.js");



var roleDIKeys = {
  repository: "role-repository",
  seeder: "role-seeder"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(roleDIKeys.repository, [], function () {
  return new _role_repository__WEBPACK_IMPORTED_MODULE_1__.RoleRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(roleDIKeys.seeder, [roleDIKeys.repository], function (roleRepository) {
  return new _role_seeder__WEBPACK_IMPORTED_MODULE_2__.RoleSeeder(roleRepository);
});

/***/ }),

/***/ "./src/api/role/role.repository.js":
/*!*****************************************!*\
  !*** ./src/api/role/role.repository.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleRepository: () => (/* binding */ RoleRepository)
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
/* harmony import */ var _shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/repository/base.repository */ "./src/shared/repository/base.repository.js");
/* harmony import */ var _model_role_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/role.model */ "./src/api/role/model/role.model.js");





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var RoleRepository = /*#__PURE__*/function (_BaseRepository) {
  function RoleRepository() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RoleRepository);
    return _callSuper(this, RoleRepository, [_model_role_model__WEBPACK_IMPORTED_MODULE_6__["default"]]);
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RoleRepository, _BaseRepository);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(RoleRepository);
}(_shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__.BaseRepository);

/***/ }),

/***/ "./src/api/role/role.seeder.js":
/*!*************************************!*\
  !*** ./src/api/role/role.seeder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleSeeder: () => (/* binding */ RoleSeeder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_constant_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/constant/role */ "./src/common/constant/role.js");





var RoleSeeder = /*#__PURE__*/function () {
  function RoleSeeder(roleRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RoleSeeder);
    this.roleRepository = roleRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RoleSeeder, [{
    key: "createRoles",
    value: function () {
      var _createRoles = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var existingRoles, existingRoleNames, rolesToCreate;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.roleRepository.findAll();
            case 3:
              existingRoles = _context.sent;
              existingRoleNames = new Set(existingRoles.map(function (role) {
                return role.role;
              }));
              rolesToCreate = _common_constant_role__WEBPACK_IMPORTED_MODULE_4__.roles.filter(function (role) {
                return !existingRoleNames.has(role.role);
              });
              if (!(rolesToCreate.length > 0)) {
                _context.next = 9;
                break;
              }
              _context.next = 9;
              return this.roleRepository.createMany(rolesToCreate);
            case 9:
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.error("Error creating roles:", _context.t0.message);
              // Optional: Handle or propagate the error as needed
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 11]]);
      }));
      function createRoles() {
        return _createRoles.apply(this, arguments);
      }
      return createRoles;
    }()
  }]);
}();

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_di_di_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-globals */ "./src/core/di/di-globals.js");
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

/***/ "./src/common/constant/role.js":
/*!*************************************!*\
  !*** ./src/common/constant/role.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roles: () => (/* binding */ roles)
/* harmony export */ });
var roles = [{
  role: "admin"
}, {
  role: "user"
}];

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
              _context.next = 6;
              return sequelize.sync({
                force: false
              });
            case 6:
              console.log("Successfully connected to the database.");
              _context.next = 13;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error("Error connecting to the database:", _context.t0);
              throw new Error("Unable to connect to the database");
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 9]]);
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

/***/ "./src/core/db/seed.js":
/*!*****************************!*\
  !*** ./src/core/db/seed.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   seed: () => (/* binding */ seed)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_role_role_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/role/role.di */ "./src/api/role/role.di.js");
/* harmony import */ var _api_role_role_seeder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/role/role.seeder */ "./src/api/role/role.seeder.js");
/* harmony import */ var _di_di_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../di/di-container */ "./src/core/di/di-container.js");





var seed = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var roleSeeder;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          roleSeeder = new _api_role_role_seeder__WEBPACK_IMPORTED_MODULE_3__.RoleSeeder(_di_di_container__WEBPACK_IMPORTED_MODULE_4__.container.get(_api_role_role_di__WEBPACK_IMPORTED_MODULE_2__.roleDIKeys.repository));
          _context.next = 3;
          return roleSeeder.createRoles();
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function seed() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/core/di/di-container.js":
/*!*************************************!*\
  !*** ./src/core/di/di-container.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Dependency Injection Container
 * @class DiContainer
 * @description A simple dependency injection container that allows you to register
 * and get dependencies
 * @example
 * const container = new DiContainer();
 * container.register("LandingPageRepository", [], () => new LandingPageRepository());
 * container.register(
 *  "LandingPageService",
 *  ["LandingPageRepository"],
 *  (landingPageRepository) => new LandingPageService(landingPageRepository),
 * );
 *
 * const landingPageService = container.get("LandingPageService");
 */
var DiContainer = /*#__PURE__*/function () {
  function DiContainer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DiContainer);
    this.dependencies = {};
  }

  /**
   * Register a dependency
   * @param name - Name of the dependency (ex: "LandingPageRepository")
   * @param dependencies - Array of dependencies (ex: ["LandingPageRepository"])
   * @param func - Function that returns the dependency
   */
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DiContainer, [{
    key: "register",
    value: function register(name, dependencies, func) {
      if (typeof name !== "string" || !Array.isArray(dependencies) || typeof func !== "function") {
        throw new Error("Invalid argument");
      }
      this.dependencies[name] = {
        dependencies: dependencies,
        func: func
      };
    }

    /**
     * Get a dependency
     * @param name - Name of the dependency (ex: "LandingPageRepository")
     * @return {*}
     */
  }, {
    key: "get",
    value: function get(name) {
      var _this = this;
      if (!this.dependencies[name]) {
        throw new Error("Dependency not found: ".concat(name));
      }
      var _this$dependencies$na = this.dependencies[name],
        dependencies = _this$dependencies$na.dependencies,
        func = _this$dependencies$na.func;
      var dependenciesInstances = dependencies.map(function (dependency) {
        return _this.get(dependency);
      });
      return func.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(dependenciesInstances));
    }
  }]);
}();
var container = new DiContainer();

/***/ }),

/***/ "./src/core/di/di-globals.js":
/*!***********************************!*\
  !*** ./src/core/di/di-globals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_role_role_di__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/role/role.di */ "./src/api/role/role.di.js");


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

/***/ "./src/shared/repository/base.repository.js":
/*!**************************************************!*\
  !*** ./src/shared/repository/base.repository.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseRepository: () => (/* binding */ BaseRepository)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




var BaseRepository = /*#__PURE__*/function () {
  function BaseRepository(model) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BaseRepository);
    this.model = model;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BaseRepository, [{
    key: "create",
    value: function create(data) {
      return this.model.create(data);
    }
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(id, data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.model.update(data, {
                where: {
                  id: id
                },
                returning: true
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function update(_x, _x2) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.model.destroy({
        where: {
          id: id
        }
      });
    }
  }, {
    key: "findById",
    value: function findById(id) {
      return this.model.findOne({
        where: {
          id: id
        }
      });
    }
  }, {
    key: "findAll",
    value: function findAll() {
      console.log("working FindAll");
      return this.model.findAll();
    }
  }, {
    key: "findOne",
    value: function findOne(query) {
      return this.model.findOne({
        where: query
      });
    }
  }, {
    key: "find",
    value: function find(query) {
      return this.model.findAll({
        where: query
      });
    }

    // Kayıtları sayma
  }, {
    key: "count",
    value: function count(query) {
      return this.model.count({
        where: query
      });
    }
  }, {
    key: "createMany",
    value: function createMany(data) {
      return this.model.bulkCreate(data);
    }
  }, {
    key: "updateMany",
    value: function updateMany(query, data) {
      return this.model.update(data, {
        where: query
      });
    }
  }, {
    key: "upsert",
    value: function () {
      var _upsert = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(query, data) {
        var record;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.findOne(query);
            case 2:
              record = _context2.sent;
              if (record) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return", this.create(data));
            case 5:
              return _context2.abrupt("return", this.update(record.id, data));
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function upsert(_x3, _x4) {
        return _upsert.apply(this, arguments);
      }
      return upsert;
    }()
  }]);
}();

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

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

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
/* harmony import */ var _core_db_seed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/db/seed */ "./src/core/db/seed.js");








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
        _context3.next = 5;
        return (0,_core_db_seed__WEBPACK_IMPORTED_MODULE_7__.seed)();
      case 5:
        console.log("Application started...");
        server.listen(PORT, function () {
          console.log("Server is running on port ".concat(PORT));
        });
        _context3.next = 13;
        break;
      case 9:
        _context3.prev = 9;
        _context3.t0 = _context3["catch"](0);
        console.error("Application failed to start:", _context3.t0.message);
        process.exit(1); // Exit with failure code
      case 13:
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
      case 15:
      case "end":
        return _context3.stop();
    }
  }, _callee3, null, [[0, 9]]);
}))();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUNzRyxLQUFLLENBQUMsQ0FBQztjQUFBO2dCQUFFO2dCQUN4QnZCLE9BQU8sQ0FBQ2tHLElBQUksQ0FBQyxDQUFDLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUE1RSxTQUFBLENBQUE5QyxJQUFBO1lBQUE7VUFBQSxHQUFBNEMsUUFBQTtRQUFBLENBQ2pCLEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQTRFLFNBQUEsQ0FBQXhILElBQUE7SUFBQTtFQUFBLEdBQUFzSCxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9yb2xlL21vZGVsL3JvbGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5kaS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5zZWVkZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudC9yb2xlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2RiLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2NvbmZpZy9lbnYuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvZGIvc2VlZC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2RpL2RpLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXJhdGUtbGltaXRcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImh0dHAtc3RhdHVzLWNvZGVzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3Qgc2VxdWVsaXplID0gRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3QgUm9sZSA9IHNlcXVlbGl6ZS5kZWZpbmUoXG4gIFwiUm9sZVwiLFxuICB7XG4gICAgcm9sZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6IFwicm9sZXNcIixcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJvbGU7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBSb2xlUmVwb3NpdG9yeSB9IGZyb20gXCIuL3JvbGUucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgUm9sZVNlZWRlciB9IGZyb20gXCIuL3JvbGUuc2VlZGVyXCI7XG5cbmV4cG9ydCBjb25zdCByb2xlRElLZXlzID0ge1xuICByZXBvc2l0b3J5OiBcInJvbGUtcmVwb3NpdG9yeVwiLFxuICBzZWVkZXI6IFwicm9sZS1zZWVkZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcihyb2xlRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgUm9sZVJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgcm9sZURJS2V5cy5zZWVkZXIsXG4gIFtyb2xlRElLZXlzLnJlcG9zaXRvcnldLFxuICAocm9sZVJlcG9zaXRvcnkpID0+IG5ldyBSb2xlU2VlZGVyKHJvbGVSZXBvc2l0b3J5KSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgUm9sZSBmcm9tIFwiLi9tb2RlbC9yb2xlLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUm9sZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJvbGVzIH0gZnJvbSBcIkAvY29tbW9uL2NvbnN0YW50L3JvbGVcIjtcblxuZXhwb3J0IGNsYXNzIFJvbGVTZWVkZXIge1xuICBjb25zdHJ1Y3Rvcihyb2xlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMucm9sZVJlcG9zaXRvcnkgPSByb2xlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVJvbGVzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvbGVzID0gYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5maW5kQWxsKCk7XG4gICAgICBjb25zdCBleGlzdGluZ1JvbGVOYW1lcyA9IG5ldyBTZXQoZXhpc3RpbmdSb2xlcy5tYXAoKHJvbGUpID0+IHJvbGUucm9sZSkpO1xuXG4gICAgICBjb25zdCByb2xlc1RvQ3JlYXRlID0gcm9sZXMuZmlsdGVyKFxuICAgICAgICAocm9sZSkgPT4gIWV4aXN0aW5nUm9sZU5hbWVzLmhhcyhyb2xlLnJvbGUpLFxuICAgICAgKTtcblxuICAgICAgaWYgKHJvbGVzVG9DcmVhdGUubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmNyZWF0ZU1hbnkocm9sZXNUb0NyZWF0ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyByb2xlczpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAvLyBPcHRpb25hbDogSGFuZGxlIG9yIHByb3BhZ2F0ZSB0aGUgZXJyb3IgYXMgbmVlZGVkXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgXCJAL2NvcmUvZGkvZGktZ2xvYmFsc1wiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5hcHAudXNlKGJhc2VSZXNwb25zZU1pZGRsZXdhcmUpO1xuXG5hcHAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJleHBvcnQgY29uc3Qgcm9sZXMgPSBbeyByb2xlOiBcImFkbWluXCIgfSwgeyByb2xlOiBcInVzZXJcIiB9XTtcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuY2xhc3MgRGF0YWJhc2Uge1xuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIElmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCBwcmV2ZW50IGNyZWF0aW5nIGEgbmV3IG9uZVxuICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkRhdGFiYXNlIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLiBVc2UgRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkLlwiLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gZ2V0IHRoZSBTaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2VxdWVsaXplXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XG4gICAgICBEYXRhYmFzZS5pbnN0YW5jZSA9IG5ldyBTZXF1ZWxpemUoe1xuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfREFUQUJBU0UsXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSTkFNRSxcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxuICAgICAgICBkaWFsZWN0OiBwcm9jZXNzLmVudi5EQl9ESUFMRUNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERhdGFiYXNlLmluc3RhbmNlO1xuICB9XG5cbiAgLy8gTWV0aG9kIHRvIG9wZW4gdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgc3RhdGljIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcXVlbGl6ZSA9IERhdGFiYXNlLmdldEluc3RhbmNlKCk7XG4gICAgICBhd2FpdCBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCk7XG4gICAgICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiBmYWxzZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVwiKTtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gY2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgc3RhdGljIGFzeW5jIGNsb3NlKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoRGF0YWJhc2UuaW5zdGFuY2UpIHtcbiAgICAgICAgYXdhaXQgRGF0YWJhc2UuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBjbG9zZWQuXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2xvc2luZyB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhYmFzZTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcblxuY29uZmlnKCk7XG5cbmNvbmZpZyh7XG4gIHBhdGg6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcIi5lbnYubG9jYWxcIiA6IFwiLmVudlwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn0pO1xuIiwiaW1wb3J0IHsgcm9sZURJS2V5cyB9IGZyb20gXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLnNlZWRlclwiO1xuXG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGkvZGktY29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBzZWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByb2xlU2VlZGVyID0gbmV3IFJvbGVTZWVkZXIoY29udGFpbmVyLmdldChyb2xlRElLZXlzLnJlcG9zaXRvcnkpKTtcblxuICBhd2FpdCByb2xlU2VlZGVyLmNyZWF0ZVJvbGVzKCk7XG59O1xuIiwiLyoqXG4gKiBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXJcbiAqIEBjbGFzcyBEaUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIEEgc2ltcGxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciB0aGF0IGFsbG93cyB5b3UgdG8gcmVnaXN0ZXJcbiAqIGFuZCBnZXQgZGVwZW5kZW5jaWVzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIiwgW10sICgpID0+IG5ldyBMYW5kaW5nUGFnZVJlcG9zaXRvcnkoKSk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXG4gKiAgXCJMYW5kaW5nUGFnZVNlcnZpY2VcIixcbiAqICBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0sXG4gKiAgKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSkgPT4gbmV3IExhbmRpbmdQYWdlU2VydmljZShsYW5kaW5nUGFnZVJlcG9zaXRvcnkpLFxuICogKTtcbiAqXG4gKiBjb25zdCBsYW5kaW5nUGFnZVNlcnZpY2UgPSBjb250YWluZXIuZ2V0KFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIpO1xuICovXG5jbGFzcyBEaUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBBcnJheSBvZiBkZXBlbmRlbmNpZXMgKGV4OiBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0pXG4gICAqIEBwYXJhbSBmdW5jIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWdpc3RlcihuYW1lLCBkZXBlbmRlbmNpZXMsIGZ1bmMpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSB8fFxuICAgICAgdHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSA9IHtcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIGZ1bmMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVwZW5kZW5jeSBub3QgZm91bmQ6ICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZnVuYyB9ID0gdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV07XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNJbnN0YW5jZXMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PlxuICAgICAgdGhpcy5nZXQoZGVwZW5kZW5jeSksXG4gICAgKTtcblxuICAgIHJldHVybiBmdW5jKC4uLmRlcGVuZGVuY2llc0luc3RhbmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmFzZVJlc3BvbnNlTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuICByZXMuc3VjY2VzcyA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuT0spXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2Uuc3VjY2Vzcyhwcm9wcykpO1xuICB9O1xuXG4gIHJlcy5lcnJvciA9IChwcm9wcykgPT4ge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyhwcm9wcy5zdGF0dXMgfHwgU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QpXG4gICAgICAuanNvbihCYXNlUmVzcG9uc2UuZXJyb3IocHJvcHMpKTtcbiAgfTtcblxuICBuZXh0KCk7XG59XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIkAvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5cbmNvbnN0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgPSAoZXJyb3IsIHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEFQSUVycm9yKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyhlcnJvci5zdGF0dXNDb2RlIHx8IDQwMCkuanNvbih7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBuZXh0KCk7XG5cbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQmFzZVJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmVycm9yKGVycm9yKTtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yIVwiLFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9ySGFuZGxlck1pZGRsZXdhcmU7XG4iLCJpbXBvcnQgeyBnZXRSZWFzb25QaHJhc2UsIFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYXNlUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5zdWNjZXNzID0gZGF0YS5zdWNjZXNzO1xuICAgIHRoaXMuc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgdGhpcy5tZXNzYWdlID0gZGF0YS5tZXNzYWdlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGEuZGF0YTtcbiAgICB0aGlzLmRldGFpbHMgPSBkYXRhLmRldGFpbHM7XG4gIH1cblxuICBzdGF0aWMgc3VjY2Vzcyh7IHN0YXR1cyA9IFN0YXR1c0NvZGVzLk9LLCBtZXNzYWdlLCBkYXRhIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZXJyb3IoeyBtZXNzYWdlLCBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCwgZGV0YWlscyA9IG51bGwgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgc3RhdHVzLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBnZXRSZWFzb25QaHJhc2Uoc3RhdHVzKSxcbiAgICAgIGRldGFpbHMsXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBUElFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzQ29kZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsKSB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgY3JlYXRlKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jcmVhdGUoZGF0YSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQsIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC51cGRhdGUoZGF0YSwge1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIHJldHVybmluZzogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZShpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmRlc3Ryb3koe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgIH0pO1xuICB9XG5cbiAgZmluZEFsbCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIndvcmtpbmcgRmluZEFsbFwiKTtcblxuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRBbGwoKTtcbiAgfVxuXG4gIGZpbmRPbmUocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kT25lKHtcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQWxsKHtcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEthecSxdGxhcsSxIHNheW1hXG4gIGNvdW50KHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY291bnQoe1xuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTWFueShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuYnVsa0NyZWF0ZShkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZU1hbnkocXVlcnksIGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC51cGRhdGUoZGF0YSwge1xuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdXBzZXJ0KHF1ZXJ5LCBkYXRhKSB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgdGhpcy5maW5kT25lKHF1ZXJ5KTtcblxuICAgIGlmICghcmVjb3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5jcmVhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlKHJlY29yZC5pZCwgZGF0YSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWFzeW5jLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXJhdGUtbGltaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1zdGF0dXMtY29kZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIkAvY29yZS9jb25maWcvZW52LmNvbmZpZ1wiO1xuaW1wb3J0IFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciB9IGZyb20gXCJodHRwXCI7XG5cbmltcG9ydCBhcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgRGF0YWJhc2UgZnJvbSBcIi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5pbXBvcnQgeyBzZWVkIH0gZnJvbSBcIi4vY29yZS9kYi9zZWVkXCI7XG5cbmNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcblxuKGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jb25uZWN0KCk7IC8vIENvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXG4gICAgYXdhaXQgc2VlZCgpO1xuICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gc3RhcnRlZC4uLlwiKTtcbiAgICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQXBwbGljYXRpb24gZmFpbGVkIHRvIHN0YXJ0OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7IC8vIEV4aXQgd2l0aCBmYWlsdXJlIGNvZGVcbiAgfVxuXG4gIC8vIEdyYWNlZnVsbHkgaGFuZGxlIHNodXRkb3duIHNpZ25hbHNcbiAgcHJvY2Vzcy5vbihcIlNJR0lOVFwiLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0pO1xuXG4gIHByb2Nlc3Mub24oXCJTSUdURVJNXCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIkRhdGFUeXBlcyIsIkRhdGFiYXNlIiwic2VxdWVsaXplIiwiZ2V0SW5zdGFuY2UiLCJSb2xlIiwiZGVmaW5lIiwicm9sZSIsInR5cGUiLCJTVFJJTkciLCJhbGxvd051bGwiLCJ1bmlxdWUiLCJ0cmltIiwidGFibGVOYW1lIiwidGltZXN0YW1wcyIsImNvbnRhaW5lciIsIlJvbGVSZXBvc2l0b3J5IiwiUm9sZVNlZWRlciIsInJvbGVESUtleXMiLCJyZXBvc2l0b3J5Iiwic2VlZGVyIiwicmVnaXN0ZXIiLCJyb2xlUmVwb3NpdG9yeSIsIkJhc2VSZXBvc2l0b3J5IiwiX0Jhc2VSZXBvc2l0b3J5IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsInJvbGVzIiwia2V5IiwidmFsdWUiLCJfY3JlYXRlUm9sZXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImV4aXN0aW5nUm9sZXMiLCJleGlzdGluZ1JvbGVOYW1lcyIsInJvbGVzVG9DcmVhdGUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmluZEFsbCIsInNlbnQiLCJTZXQiLCJtYXAiLCJmaWx0ZXIiLCJoYXMiLCJsZW5ndGgiLCJjcmVhdGVNYW55IiwidDAiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RvcCIsImNyZWF0ZVJvbGVzIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJjb3JzIiwiZXhwcmVzcyIsInJhdGVMaW1pdCIsImJhc2VSZXNwb25zZU1pZGRsZXdhcmUiLCJlcnJvckhhbmRsZXJNaWRkbGV3YXJlIiwiYXBwIiwidXNlIiwid2luZG93TXMiLCJsaW1pdCIsInN0YW5kYXJkSGVhZGVycyIsImxlZ2FjeUhlYWRlcnMiLCJzZXQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwiZGlzYWJsZSIsIlNlcXVlbGl6ZSIsImluc3RhbmNlIiwiRXJyb3IiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJwYXNzd29yZCIsIkRCX1BBU1NXT1JEIiwiaG9zdCIsIkRCX0hPU1QiLCJwb3J0IiwiREJfUE9SVCIsImRpYWxlY3QiLCJEQl9ESUFMRUNUIiwiX2Nvbm5lY3QiLCJhdXRoZW50aWNhdGUiLCJzeW5jIiwiZm9yY2UiLCJsb2ciLCJjb25uZWN0IiwiX2Nsb3NlIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJjbG9zZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbmZpZyIsInBhdGgiLCJOT0RFX0VOViIsIm92ZXJyaWRlIiwic2VlZCIsIl9yZWYiLCJyb2xlU2VlZGVyIiwiZ2V0IiwiRGlDb250YWluZXIiLCJkZXBlbmRlbmNpZXMiLCJuYW1lIiwiZnVuYyIsIkFycmF5IiwiaXNBcnJheSIsIl90aGlzIiwiY29uY2F0IiwiX3RoaXMkZGVwZW5kZW5jaWVzJG5hIiwiZGVwZW5kZW5jaWVzSW5zdGFuY2VzIiwiZGVwZW5kZW5jeSIsIl90b0NvbnN1bWFibGVBcnJheSIsIlN0YXR1c0NvZGVzIiwiQmFzZVJlc3BvbnNlIiwicmVxIiwicmVzIiwic3VjY2VzcyIsInByb3BzIiwic3RhdHVzIiwiT0siLCJCQURfUkVRVUVTVCIsIkFQSUVycm9yIiwicmVxdWVzdCIsInJlc3BvbnNlIiwic3RhdHVzQ29kZSIsImdldFJlYXNvblBocmFzZSIsImRhdGEiLCJkZXRhaWxzIiwiX3JlZiRzdGF0dXMiLCJfcmVmMiIsIl9yZWYyJHN0YXR1cyIsIl9yZWYyJGRldGFpbHMiLCJfRXJyb3IiLCJfd3JhcE5hdGl2ZVN1cGVyIiwibW9kZWwiLCJjcmVhdGUiLCJfdXBkYXRlIiwiaWQiLCJhYnJ1cHQiLCJ1cGRhdGUiLCJ3aGVyZSIsInJldHVybmluZyIsIl94IiwiX3gyIiwiZGVsZXRlIiwiZGVzdHJveSIsImZpbmRCeUlkIiwiZmluZE9uZSIsInF1ZXJ5IiwiZmluZCIsImNvdW50IiwiYnVsa0NyZWF0ZSIsInVwZGF0ZU1hbnkiLCJfdXBzZXJ0IiwicmVjb3JkIiwidXBzZXJ0IiwiX3gzIiwiX3g0IiwiY3JlYXRlU2VydmVyIiwic2VydmVyIiwiUE9SVCIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwibGlzdGVuIiwiZXhpdCIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==