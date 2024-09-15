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
/* harmony export */   Database: () => (/* binding */ Database),
/* harmony export */   sequelize: () => (/* binding */ sequelize)
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
        var _sequelize;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _sequelize = Database.getInstance();
              _context.next = 4;
              return _sequelize.authenticate();
            case 4:
              _context.next = 6;
              return _sequelize.sync({
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
var sequelize = Database.getInstance();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQUEsQ0FBQTVELElBQUE7Z0JBQUEsT0FDZDFDLDhEQUFRLENBQUN1RyxLQUFLLENBQUMsQ0FBQztjQUFBO2dCQUFFO2dCQUN4QnhCLE9BQU8sQ0FBQ21HLElBQUksQ0FBQyxDQUFDLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUE1RSxTQUFBLENBQUEvQyxJQUFBO1lBQUE7VUFBQSxHQUFBNkMsUUFBQTtRQUFBLENBQ2pCLEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQTRFLFNBQUEsQ0FBQXpILElBQUE7SUFBQTtFQUFBLEdBQUF1SCxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9yb2xlL21vZGVsL3JvbGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5kaS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5zZWVkZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudC9yb2xlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2RiLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2NvbmZpZy9lbnYuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvZGIvc2VlZC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2RpL2RpLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXJhdGUtbGltaXRcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImh0dHAtc3RhdHVzLWNvZGVzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3Qgc2VxdWVsaXplID0gRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3QgUm9sZSA9IHNlcXVlbGl6ZS5kZWZpbmUoXG4gIFwiUm9sZVwiLFxuICB7XG4gICAgcm9sZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB1bmlxdWU6IHRydWUsXG4gICAgICB0cmltOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6IFwicm9sZXNcIixcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJvbGU7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBSb2xlUmVwb3NpdG9yeSB9IGZyb20gXCIuL3JvbGUucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgUm9sZVNlZWRlciB9IGZyb20gXCIuL3JvbGUuc2VlZGVyXCI7XG5cbmV4cG9ydCBjb25zdCByb2xlRElLZXlzID0ge1xuICByZXBvc2l0b3J5OiBcInJvbGUtcmVwb3NpdG9yeVwiLFxuICBzZWVkZXI6IFwicm9sZS1zZWVkZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3Rlcihyb2xlRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgUm9sZVJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgcm9sZURJS2V5cy5zZWVkZXIsXG4gIFtyb2xlRElLZXlzLnJlcG9zaXRvcnldLFxuICAocm9sZVJlcG9zaXRvcnkpID0+IG5ldyBSb2xlU2VlZGVyKHJvbGVSZXBvc2l0b3J5KSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgUm9sZSBmcm9tIFwiLi9tb2RlbC9yb2xlLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoUm9sZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJvbGVzIH0gZnJvbSBcIkAvY29tbW9uL2NvbnN0YW50L3JvbGVcIjtcblxuZXhwb3J0IGNsYXNzIFJvbGVTZWVkZXIge1xuICBjb25zdHJ1Y3Rvcihyb2xlUmVwb3NpdG9yeSkge1xuICAgIHRoaXMucm9sZVJlcG9zaXRvcnkgPSByb2xlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVJvbGVzKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvbGVzID0gYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5maW5kQWxsKCk7XG4gICAgICBjb25zdCBleGlzdGluZ1JvbGVOYW1lcyA9IG5ldyBTZXQoZXhpc3RpbmdSb2xlcy5tYXAoKHJvbGUpID0+IHJvbGUucm9sZSkpO1xuXG4gICAgICBjb25zdCByb2xlc1RvQ3JlYXRlID0gcm9sZXMuZmlsdGVyKFxuICAgICAgICAocm9sZSkgPT4gIWV4aXN0aW5nUm9sZU5hbWVzLmhhcyhyb2xlLnJvbGUpLFxuICAgICAgKTtcblxuICAgICAgaWYgKHJvbGVzVG9DcmVhdGUubGVuZ3RoID4gMCkge1xuICAgICAgICBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmNyZWF0ZU1hbnkocm9sZXNUb0NyZWF0ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyByb2xlczpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAvLyBPcHRpb25hbDogSGFuZGxlIG9yIHByb3BhZ2F0ZSB0aGUgZXJyb3IgYXMgbmVlZGVkXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgXCJAL2NvcmUvZGkvZGktZ2xvYmFsc1wiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5hcHAudXNlKGJhc2VSZXNwb25zZU1pZGRsZXdhcmUpO1xuXG5hcHAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJleHBvcnQgY29uc3Qgcm9sZXMgPSBbeyByb2xlOiBcImFkbWluXCIgfSwgeyByb2xlOiBcInVzZXJcIiB9XTtcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuY2xhc3MgRGF0YWJhc2Uge1xuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIElmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCBwcmV2ZW50IGNyZWF0aW5nIGEgbmV3IG9uZVxuICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkRhdGFiYXNlIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLiBVc2UgRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkLlwiLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gZ2V0IHRoZSBTaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2VxdWVsaXplXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XG4gICAgICBEYXRhYmFzZS5pbnN0YW5jZSA9IG5ldyBTZXF1ZWxpemUoe1xuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfREFUQUJBU0UsXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSTkFNRSxcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxuICAgICAgICBkaWFsZWN0OiBwcm9jZXNzLmVudi5EQl9ESUFMRUNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERhdGFiYXNlLmluc3RhbmNlO1xuICB9XG5cbiAgLy8gTWV0aG9kIHRvIG9wZW4gdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgc3RhdGljIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcXVlbGl6ZSA9IERhdGFiYXNlLmdldEluc3RhbmNlKCk7XG4gICAgICBhd2FpdCBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCk7XG4gICAgICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiBmYWxzZSB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVwiKTtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gY2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgc3RhdGljIGFzeW5jIGNsb3NlKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoRGF0YWJhc2UuaW5zdGFuY2UpIHtcbiAgICAgICAgYXdhaXQgRGF0YWJhc2UuaW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBjbG9zZWQuXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2xvc2luZyB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbjpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBzZXF1ZWxpemUgPSBEYXRhYmFzZS5nZXRJbnN0YW5jZSgpO1xuXG5leHBvcnQgeyBEYXRhYmFzZSwgc2VxdWVsaXplIH07XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5cbmNvbmZpZygpO1xuXG5jb25maWcoe1xuICBwYXRoOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gXCIuZW52LmxvY2FsXCIgOiBcIi5lbnZcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59KTtcbiIsImltcG9ydCB7IHJvbGVESUtleXMgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIkAvYXBpL3JvbGUvcm9sZS5zZWVkZXJcIjtcblxuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4uL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3Qgc2VlZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgcm9sZVNlZWRlciA9IG5ldyBSb2xlU2VlZGVyKGNvbnRhaW5lci5nZXQocm9sZURJS2V5cy5yZXBvc2l0b3J5KSk7XG5cbiAgYXdhaXQgcm9sZVNlZWRlci5jcmVhdGVSb2xlcygpO1xufTtcbiIsIi8qKlxuICogRGVwZW5kZW5jeSBJbmplY3Rpb24gQ29udGFpbmVyXG4gKiBAY2xhc3MgRGlDb250YWluZXJcbiAqIEBkZXNjcmlwdGlvbiBBIHNpbXBsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgdGhhdCBhbGxvd3MgeW91IHRvIHJlZ2lzdGVyXG4gKiBhbmQgZ2V0IGRlcGVuZGVuY2llc1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuICogY29udGFpbmVyLnJlZ2lzdGVyKFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIsIFtdLCAoKSA9PiBuZXcgTGFuZGluZ1BhZ2VSZXBvc2l0b3J5KCkpO1xuICogY29udGFpbmVyLnJlZ2lzdGVyKFxuICogIFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIsXG4gKiAgW1wiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCJdLFxuICogIChsYW5kaW5nUGFnZVJlcG9zaXRvcnkpID0+IG5ldyBMYW5kaW5nUGFnZVNlcnZpY2UobGFuZGluZ1BhZ2VSZXBvc2l0b3J5KSxcbiAqICk7XG4gKlxuICogY29uc3QgbGFuZGluZ1BhZ2VTZXJ2aWNlID0gY29udGFpbmVyLmdldChcIkxhbmRpbmdQYWdlU2VydmljZVwiKTtcbiAqL1xuY2xhc3MgRGlDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlcGVuZGVuY2llcyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZGVwZW5kZW5jeVxuICAgKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRlcGVuZGVuY3kgKGV4OiBcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiKVxuICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIC0gQXJyYXkgb2YgZGVwZW5kZW5jaWVzIChleDogW1wiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCJdKVxuICAgKiBAcGFyYW0gZnVuYyAtIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZGVwZW5kZW5jeVxuICAgKi9cbiAgcmVnaXN0ZXIobmFtZSwgZGVwZW5kZW5jaWVzLCBmdW5jKSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcykgfHxcbiAgICAgIHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0gPSB7XG4gICAgICBkZXBlbmRlbmNpZXMsXG4gICAgICBmdW5jLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgZGVwZW5kZW5jeVxuICAgKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRlcGVuZGVuY3kgKGV4OiBcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiKVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0KG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuZGVwZW5kZW5jaWVzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERlcGVuZGVuY3kgbm90IGZvdW5kOiAke25hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkZXBlbmRlbmNpZXMsIGZ1bmMgfSA9IHRoaXMuZGVwZW5kZW5jaWVzW25hbWVdO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSW5zdGFuY2VzID0gZGVwZW5kZW5jaWVzLm1hcCgoZGVwZW5kZW5jeSkgPT5cbiAgICAgIHRoaXMuZ2V0KGRlcGVuZGVuY3kpLFxuICAgICk7XG5cbiAgICByZXR1cm4gZnVuYyguLi5kZXBlbmRlbmNpZXNJbnN0YW5jZXMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBuZXcgRGlDb250YWluZXIoKTtcbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2VSZXNwb25zZU1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnN1Y2Nlc3MgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLk9LKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLnN1Y2Nlc3MocHJvcHMpKTtcbiAgfTtcblxuICByZXMuZXJyb3IgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLmVycm9yKHByb3BzKSk7XG4gIH07XG5cbiAgbmV4dCgpO1xufVxuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCJAL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuXG5jb25zdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlID0gKGVycm9yLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBUElFcnJvcikge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA0MDApLmpzb24oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpO1xuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEJhc2VSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5lcnJvcihlcnJvcik7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkludGVybmFsIFNlcnZlciBFcnJvciFcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlO1xuIiwiaW1wb3J0IHsgZ2V0UmVhc29uUGhyYXNlLCBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcbiAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG4gICAgdGhpcy5kZXRhaWxzID0gZGF0YS5kZXRhaWxzO1xuICB9XG5cbiAgc3RhdGljIHN1Y2Nlc3MoeyBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5PSywgbWVzc2FnZSwgZGF0YSB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGVycm9yKHsgbWVzc2FnZSwgc3RhdHVzID0gU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsIGRldGFpbHMgPSBudWxsIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkZXRhaWxzLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQVBJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudXBkYXRlKGRhdGEsIHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICByZXR1cm5pbmc6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5kZXN0cm95KHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgfSk7XG4gIH1cblxuICBmaW5kQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRBbGwoKSB7XG4gICAgY29uc29sZS5sb2coXCJ3b3JraW5nIEZpbmRBbGxcIik7XG5cbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQWxsKCk7XG4gIH1cblxuICBmaW5kT25lKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZE9uZSh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBmaW5kKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEFsbCh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICAvLyBLYXnEsXRsYXLEsSBzYXltYVxuICBjb3VudChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNvdW50KHtcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1hbnkoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmJ1bGtDcmVhdGUoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVNYW55KHF1ZXJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudXBkYXRlKGRhdGEsIHtcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwc2VydChxdWVyeSwgZGF0YSkge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHRoaXMuZmluZE9uZShxdWVyeSk7XG5cbiAgICBpZiAoIXJlY29yZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZShyZWNvcmQuaWQsIGRhdGEpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtc3RhdHVzLWNvZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IERhdGFiYXNlIGZyb20gXCIuL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuaW1wb3J0IHsgc2VlZCB9IGZyb20gXCIuL2NvcmUvZGIvc2VlZFwiO1xuXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoYXBwKTtcbmNvbnN0IHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbihhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY29ubmVjdCgpOyAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGF3YWl0IHNlZWQoKTtcbiAgICBjb25zb2xlLmxvZyhcIkFwcGxpY2F0aW9uIHN0YXJ0ZWQuLi5cIik7XG4gICAgc2VydmVyLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAke1BPUlR9YCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkFwcGxpY2F0aW9uIGZhaWxlZCB0byBzdGFydDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcHJvY2Vzcy5leGl0KDEpOyAvLyBFeGl0IHdpdGggZmFpbHVyZSBjb2RlXG4gIH1cblxuICAvLyBHcmFjZWZ1bGx5IGhhbmRsZSBzaHV0ZG93biBzaWduYWxzXG4gIHByb2Nlc3Mub24oXCJTSUdJTlRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IERhdGFiYXNlLmNsb3NlKCk7IC8vIENsb3NlIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9KTtcblxuICBwcm9jZXNzLm9uKFwiU0lHVEVSTVwiLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJEYXRhVHlwZXMiLCJEYXRhYmFzZSIsInNlcXVlbGl6ZSIsImdldEluc3RhbmNlIiwiUm9sZSIsImRlZmluZSIsInJvbGUiLCJ0eXBlIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwidW5pcXVlIiwidHJpbSIsInRhYmxlTmFtZSIsInRpbWVzdGFtcHMiLCJjb250YWluZXIiLCJSb2xlUmVwb3NpdG9yeSIsIlJvbGVTZWVkZXIiLCJyb2xlRElLZXlzIiwicmVwb3NpdG9yeSIsInNlZWRlciIsInJlZ2lzdGVyIiwicm9sZVJlcG9zaXRvcnkiLCJCYXNlUmVwb3NpdG9yeSIsIl9CYXNlUmVwb3NpdG9yeSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJyb2xlcyIsImtleSIsInZhbHVlIiwiX2NyZWF0ZVJvbGVzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJleGlzdGluZ1JvbGVzIiwiZXhpc3RpbmdSb2xlTmFtZXMiLCJyb2xlc1RvQ3JlYXRlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZpbmRBbGwiLCJzZW50IiwiU2V0IiwibWFwIiwiZmlsdGVyIiwiaGFzIiwibGVuZ3RoIiwiY3JlYXRlTWFueSIsInQwIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsInN0b3AiLCJjcmVhdGVSb2xlcyIsImFwcGx5IiwiYXJndW1lbnRzIiwiY29ycyIsImV4cHJlc3MiLCJyYXRlTGltaXQiLCJiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIiwiZXJyb3JIYW5kbGVyTWlkZGxld2FyZSIsImFwcCIsInVzZSIsIndpbmRvd01zIiwibGltaXQiLCJzdGFuZGFyZEhlYWRlcnMiLCJsZWdhY3lIZWFkZXJzIiwic2V0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImRpc2FibGUiLCJTZXF1ZWxpemUiLCJpbnN0YW5jZSIsIkVycm9yIiwiZGF0YWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiREJfREFUQUJBU0UiLCJ1c2VybmFtZSIsIkRCX1VTRVJOQU1FIiwicGFzc3dvcmQiLCJEQl9QQVNTV09SRCIsImhvc3QiLCJEQl9IT1NUIiwicG9ydCIsIkRCX1BPUlQiLCJkaWFsZWN0IiwiREJfRElBTEVDVCIsIl9jb25uZWN0IiwiX3NlcXVlbGl6ZSIsImF1dGhlbnRpY2F0ZSIsInN5bmMiLCJmb3JjZSIsImxvZyIsImNvbm5lY3QiLCJfY2xvc2UiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNsb3NlIiwiX2RlZmluZVByb3BlcnR5IiwiY29uZmlnIiwicGF0aCIsIk5PREVfRU5WIiwib3ZlcnJpZGUiLCJzZWVkIiwiX3JlZiIsInJvbGVTZWVkZXIiLCJnZXQiLCJEaUNvbnRhaW5lciIsImRlcGVuZGVuY2llcyIsIm5hbWUiLCJmdW5jIiwiQXJyYXkiLCJpc0FycmF5IiwiX3RoaXMiLCJjb25jYXQiLCJfdGhpcyRkZXBlbmRlbmNpZXMkbmEiLCJkZXBlbmRlbmNpZXNJbnN0YW5jZXMiLCJkZXBlbmRlbmN5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiU3RhdHVzQ29kZXMiLCJCYXNlUmVzcG9uc2UiLCJyZXEiLCJyZXMiLCJzdWNjZXNzIiwicHJvcHMiLCJzdGF0dXMiLCJPSyIsIkJBRF9SRVFVRVNUIiwiQVBJRXJyb3IiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiZ2V0UmVhc29uUGhyYXNlIiwiZGF0YSIsImRldGFpbHMiLCJfcmVmJHN0YXR1cyIsIl9yZWYyIiwiX3JlZjIkc3RhdHVzIiwiX3JlZjIkZGV0YWlscyIsIl9FcnJvciIsIl93cmFwTmF0aXZlU3VwZXIiLCJtb2RlbCIsImNyZWF0ZSIsIl91cGRhdGUiLCJpZCIsImFicnVwdCIsInVwZGF0ZSIsIndoZXJlIiwicmV0dXJuaW5nIiwiX3giLCJfeDIiLCJkZWxldGUiLCJkZXN0cm95IiwiZmluZEJ5SWQiLCJmaW5kT25lIiwicXVlcnkiLCJmaW5kIiwiY291bnQiLCJidWxrQ3JlYXRlIiwidXBkYXRlTWFueSIsIl91cHNlcnQiLCJyZWNvcmQiLCJ1cHNlcnQiLCJfeDMiLCJfeDQiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXIiLCJQT1JUIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJsaXN0ZW4iLCJleGl0Iiwib24iXSwic291cmNlUm9vdCI6IiJ9