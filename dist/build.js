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


var Role = _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__.sequelize.define("Role", {
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
  seeder: "role-seeder",
  service: "role-service"
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

/***/ "./src/api/user/model/user.model.js":
/*!******************************************!*\
  !*** ./src/api/user/model/user.model.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/db.config */ "./src/core/config/db.config.js");


var User = _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__.sequelize.define("User", {
  fullName: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "roles",
      key: "id"
    }
  },
  contact: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "contacts",
      key: "id"
    }
  }
}, {
  tableName: "users"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./src/api/user/user.di.js":
/*!*********************************!*\
  !*** ./src/api/user/user.di.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userDIKeys: () => (/* binding */ userDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _user_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.repository */ "./src/api/user/user.repository.js");
/* harmony import */ var _user_seeder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.seeder */ "./src/api/user/user.seeder.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/api/user/user.service.js");




var userDIKeys = {
  service: "user-service",
  repository: "user-repository",
  seeder: "user-seeder"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(userDIKeys.repository, [], function () {
  return new _user_repository__WEBPACK_IMPORTED_MODULE_1__.UserRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(userDIKeys.service, [userDIKeys.repository], function (userRepository) {
  return new _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService(userRepository);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(userDIKeys.seeder, [userDIKeys.service], function (userService) {
  return new _user_seeder__WEBPACK_IMPORTED_MODULE_2__.UserSeeder(userService);
});

/***/ }),

/***/ "./src/api/user/user.repository.js":
/*!*****************************************!*\
  !*** ./src/api/user/user.repository.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRepository: () => (/* binding */ UserRepository)
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
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/user.model */ "./src/api/user/model/user.model.js");





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var UserRepository = /*#__PURE__*/function (_BaseRepository) {
  function UserRepository() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserRepository);
    return _callSuper(this, UserRepository, [_model_user_model__WEBPACK_IMPORTED_MODULE_6__["default"]]);
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(UserRepository, _BaseRepository);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(UserRepository);
}(_shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__.BaseRepository);

/***/ }),

/***/ "./src/api/user/user.seeder.js":
/*!*************************************!*\
  !*** ./src/api/user/user.seeder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSeeder: () => (/* binding */ UserSeeder)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




var UserSeeder = /*#__PURE__*/function () {
  function UserSeeder(userService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserSeeder);
    this.userService = userService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(UserSeeder, [{
    key: "createAdmin",
    value: function () {
      var _createAdmin = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var data, admin;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.userService.find({
                role: 1
              });
            case 2:
              data = _context.sent;
              if (data) {
                _context.next = 8;
                break;
              }
              _context.next = 6;
              return this.userService.create({
                contact: {
                  email: "baktaradmin@gmail.com"
                },
                fullName: "baktar admin",
                password: "baktaradmin",
                role: 1
              });
            case 6:
              admin = _context.sent;
              return _context.abrupt("return", admin);
            case 8:
              return _context.abrupt("return", null);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createAdmin() {
        return _createAdmin.apply(this, arguments);
      }
      return createAdmin;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/user/user.service.js":
/*!**************************************!*\
  !*** ./src/api/user/user.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_helper_hash_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helper/hash-password */ "./src/common/helper/hash-password.js");
/* harmony import */ var _common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/schema/model/contact-model.schema */ "./src/common/schema/model/contact-model.schema.js");
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/config/db.config */ "./src/core/config/db.config.js");





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





var UserService = /*#__PURE__*/function () {
  function UserService(userRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, UserService);
    this.userRepository = userRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(UserService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(userDto) {
        var password, _userDto$contact, email, phoneNumber, transaction, newContact;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              password = userDto.password;
              _userDto$contact = userDto.contact, email = _userDto$contact.email, phoneNumber = _userDto$contact.phoneNumber; // eslint-disable-next-line no-unused-vars
              _context.next = 4;
              return (0,_common_helper_hash_password__WEBPACK_IMPORTED_MODULE_7__.hashPassword)(password);
            case 4:
              password = _context.sent;
              _context.next = 7;
              return _core_config_db_config__WEBPACK_IMPORTED_MODULE_9__.sequelize.transaction();
            case 7:
              transaction = _context.sent;
              _context.prev = 8;
              _context.next = 11;
              return _common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_8__["default"].create({
                email: email,
                phoneNumber: phoneNumber
              }, {
                transaction: transaction
              });
            case 11:
              newContact = _context.sent;
              _context.next = 14;
              return transaction.commit();
            case 14:
              return _context.abrupt("return", this.userRepository.create(_objectSpread(_objectSpread({}, userDto), {}, {
                role: 1,
                contact: newContact.id
              })));
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](8);
              console.log(_context.t0);
              _context.next = 22;
              return transaction.rollback();
            case 22:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[8, 17]]);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findByEmail",
    value: function () {
      var _findByEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(email) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.userRepository.findOne({
                "contact.email": email
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findByEmail(_x2) {
        return _findByEmail.apply(this, arguments);
      }
      return findByEmail;
    }()
  }, {
    key: "find",
    value: function () {
      var _find = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(query) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", this.userRepository.findOne(query));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function find(_x3) {
        return _find.apply(this, arguments);
      }
      return find;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4(id) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.userRepository.findById(id);
            case 2:
              data = _context4.sent;
              if (data) {
                _context4.next = 5;
                break;
              }
              throw _core_response_base_response__WEBPACK_IMPORTED_MODULE_5__.BaseResponse.error({
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_6__.StatusCodes.NOT_FOUND,
                message: "User not found!"
              });
            case 5:
              return _context4.abrupt("return", data);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function findById(_x4) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5(id, userDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.findById(id);
            case 2:
              return _context5.abrupt("return", this.userRepository.update(id, userDto));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function update(_x5, _x6) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.findById(id);
            case 2:
              return _context6.abrupt("return", this.userRepository["delete"](id));
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function _delete(_x7) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }, {
    key: "findByEmailOrThrow",
    value: function () {
      var _findByEmailOrThrow = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7(email) {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.findByEmail(email);
            case 2:
              user = _context7.sent;
              if (user) {
                _context7.next = 5;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_5__.BaseResponse.error({
                message: "User with this email does not exist.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_6__.StatusCodes.NOT_FOUND
              });
            case 5:
              return _context7.abrupt("return", user);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function findByEmailOrThrow(_x8) {
        return _findByEmailOrThrow.apply(this, arguments);
      }
      return findByEmailOrThrow;
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

/***/ "./src/common/helper/hash-password.js":
/*!********************************************!*\
  !*** ./src/common/helper/hash-password.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comparePassword: () => (/* binding */ comparePassword),
/* harmony export */   hashPassword: () => (/* binding */ hashPassword)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);



function hashPassword(_x) {
  return _hashPassword.apply(this, arguments);
}
function _hashPassword() {
  _hashPassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(password) {
    var salt;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return bcrypt__WEBPACK_IMPORTED_MODULE_2__.genSalt(10);
        case 2:
          salt = _context.sent;
          return _context.abrupt("return", bcrypt__WEBPACK_IMPORTED_MODULE_2__.hash(password, salt));
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _hashPassword.apply(this, arguments);
}
function comparePassword(_x2, _x3) {
  return _comparePassword.apply(this, arguments);
}
function _comparePassword() {
  _comparePassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(plainTextPassword, hashedPassword) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", bcrypt__WEBPACK_IMPORTED_MODULE_2__.compare(plainTextPassword, hashedPassword));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _comparePassword.apply(this, arguments);
}


/***/ }),

/***/ "./src/common/schema/model/contact-model.schema.js":
/*!*********************************************************!*\
  !*** ./src/common/schema/model/contact-model.schema.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/db.config */ "./src/core/config/db.config.js");


var Contact = _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__.sequelize.define("Contact", {
  email: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: false,
    trim: true,
    validate: {
      isEmail: true
    }
  },
  phoneNumber: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: "contacts",
  timestamps: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

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
                force: true
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
/* harmony import */ var _api_user_user_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/user/user.di */ "./src/api/user/user.di.js");
/* harmony import */ var _api_user_user_seeder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/user/user.seeder */ "./src/api/user/user.seeder.js");
/* harmony import */ var _di_di_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../di/di-container */ "./src/core/di/di-container.js");







var seed = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var roleSeeder, userSeeder;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          roleSeeder = new _api_role_role_seeder__WEBPACK_IMPORTED_MODULE_3__.RoleSeeder(_di_di_container__WEBPACK_IMPORTED_MODULE_6__.container.get(_api_role_role_di__WEBPACK_IMPORTED_MODULE_2__.roleDIKeys.repository));
          userSeeder = new _api_user_user_seeder__WEBPACK_IMPORTED_MODULE_5__.UserSeeder(_di_di_container__WEBPACK_IMPORTED_MODULE_6__.container.get(_api_user_user_di__WEBPACK_IMPORTED_MODULE_4__.userDIKeys.service));
          _context.next = 4;
          return roleSeeder.createRoles();
        case 4:
          _context.next = 6;
          return userSeeder.createAdmin();
        case 6:
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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

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
        return _core_config_db_config__WEBPACK_IMPORTED_MODULE_6__.Database.connect();
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
                return _core_config_db_config__WEBPACK_IMPORTED_MODULE_6__.Database.close();
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
                return _core_config_db_config__WEBPACK_IMPORTED_MODULE_6__.Database.close();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEwRCxTQUFBLENBQUF6RCxJQUFBO2NBQUE7Z0JBQUF5RCxTQUFBLENBQUF6RCxJQUFBO2dCQUFBLE9BQ2Q0SCw0REFBUSxDQUFDd0IsS0FBSyxDQUFDLENBQUM7Y0FBQTtnQkFBRTtnQkFDeEJuQixPQUFPLENBQUN5RSxJQUFJLENBQUMsQ0FBQyxDQUFDO2NBQUM7Y0FBQTtnQkFBQSxPQUFBakosU0FBQSxDQUFBNUMsSUFBQTtZQUFBO1VBQUEsR0FBQTBDLFFBQUE7UUFBQSxDQUNqQixHQUFDO01BQUM7TUFBQTtRQUFBLE9BQUFVLFNBQUEsQ0FBQXBELElBQUE7SUFBQTtFQUFBLEdBQUFpRCxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9yb2xlL21vZGVsL3JvbGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5kaS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5zZWVkZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvdXNlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS91c2VyL3VzZXIucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudC9yb2xlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9oZWxwZXIvaGFzaC1wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2RiLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2NvbmZpZy9lbnYuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvZGIvc2VlZC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2RpL2RpLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtcmF0ZS1saW1pdFwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1zdGF0dXMtY29kZXNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmNvbnN0IFJvbGUgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIlJvbGVcIixcbiAge1xuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGFibGVOYW1lOiBcInJvbGVzXCIsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgUm9sZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9yb2xlLnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiLi9yb2xlLnNlZWRlclwiO1xuXG5leHBvcnQgY29uc3Qgcm9sZURJS2V5cyA9IHtcbiAgcmVwb3NpdG9yeTogXCJyb2xlLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInJvbGUtc2VlZGVyXCIsXG4gIHNlcnZpY2U6IFwicm9sZS1zZXJ2aWNlXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIocm9sZURJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFJvbGVSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHJvbGVESUtleXMuc2VlZGVyLFxuICBbcm9sZURJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHJvbGVSZXBvc2l0b3J5KSA9PiBuZXcgUm9sZVNlZWRlcihyb2xlUmVwb3NpdG9yeSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vbW9kZWwvcm9sZS5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFJvbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByb2xlcyB9IGZyb20gXCJAL2NvbW1vbi9jb25zdGFudC9yb2xlXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlU2VlZGVyIHtcbiAgY29uc3RydWN0b3Iocm9sZVJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLnJvbGVSZXBvc2l0b3J5ID0gcm9sZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVSb2xlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IGF3YWl0IHRoaXMucm9sZVJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICAgICAgY29uc3QgZXhpc3RpbmdSb2xlTmFtZXMgPSBuZXcgU2V0KGV4aXN0aW5nUm9sZXMubWFwKChyb2xlKSA9PiByb2xlLnJvbGUpKTtcblxuICAgICAgY29uc3Qgcm9sZXNUb0NyZWF0ZSA9IHJvbGVzLmZpbHRlcihcbiAgICAgICAgKHJvbGUpID0+ICFleGlzdGluZ1JvbGVOYW1lcy5oYXMocm9sZS5yb2xlKSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChyb2xlc1RvQ3JlYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5jcmVhdGVNYW55KHJvbGVzVG9DcmVhdGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcm9sZXM6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgLy8gT3B0aW9uYWw6IEhhbmRsZSBvciBwcm9wYWdhdGUgdGhlIGVycm9yIGFzIG5lZWRlZFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBVc2VyID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJVc2VyXCIsXG4gIHtcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiBcInJvbGVzXCIsXG4gICAgICAgIGtleTogXCJpZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6IFwiY29udGFjdHNcIixcbiAgICAgICAga2V5OiBcImlkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6IFwidXNlcnNcIixcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gXCIuL3VzZXIucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlclNlZWRlciB9IGZyb20gXCIuL3VzZXIuc2VlZGVyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJ1c2VyLXNlcnZpY2VcIixcbiAgcmVwb3NpdG9yeTogXCJ1c2VyLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInVzZXItc2VlZGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIodXNlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFVzZXJSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VydmljZSxcbiAgW3VzZXJESUtleXMucmVwb3NpdG9yeV0sXG4gICh1c2VyUmVwb3NpdG9yeSkgPT4gbmV3IFVzZXJTZXJ2aWNlKHVzZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZWVkZXIsXG4gIFt1c2VyRElLZXlzLnNlcnZpY2VdLFxuICAodXNlclNlcnZpY2UpID0+IG5ldyBVc2VyU2VlZGVyKHVzZXJTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9tb2RlbC91c2VyLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoVXNlcik7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVc2VyU2VlZGVyIHtcbiAgY29uc3RydWN0b3IodXNlclNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGVBZG1pbigpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kKHsgcm9sZTogMSB9KTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgY29uc3QgYWRtaW4gPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICAgIGNvbnRhY3Q6IHsgZW1haWw6IFwiYmFrdGFyYWRtaW5AZ21haWwuY29tXCIgfSxcbiAgICAgICAgZnVsbE5hbWU6IFwiYmFrdGFyIGFkbWluXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcImJha3RhcmFkbWluXCIsXG4gICAgICAgIHJvbGU6IDEsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFkbWluO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IGhhc2hQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9jb21tb24vaGVscGVyL2hhc2gtcGFzc3dvcmRcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi8uLi9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hXCI7XG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy51c2VyUmVwb3NpdG9yeSA9IHVzZXJSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKHVzZXJEdG8pIHtcbiAgICBsZXQgeyBwYXNzd29yZCB9ID0gdXNlckR0bztcblxuICAgIGNvbnN0IHsgZW1haWwsIHBob25lTnVtYmVyIH0gPSB1c2VyRHRvLmNvbnRhY3Q7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBwYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcXVlbGl6ZS50cmFuc2FjdGlvbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhY3QgPSBhd2FpdCBDb250YWN0LmNyZWF0ZShcbiAgICAgICAge1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBob25lTnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICB7IHRyYW5zYWN0aW9uIH0sXG4gICAgICApO1xuXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi5jb21taXQoKTtcblxuICAgICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlKHtcbiAgICAgICAgLi4udXNlckR0byxcbiAgICAgICAgcm9sZTogMSxcbiAgICAgICAgY29udGFjdDogbmV3Q29udGFjdC5pZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLnJvbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmluZEJ5RW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHsgXCJjb250YWN0LmVtYWlsXCI6IGVtYWlsIH0pO1xuICB9XG5cbiAgYXN5bmMgZmluZChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUocXVlcnkpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQsIHVzZXJEdG8pIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LnVwZGF0ZShpZCwgdXNlckR0byk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWQpIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmRlbGV0ZShpZCk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlFbWFpbE9yVGhyb3coZW1haWwpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5maW5kQnlFbWFpbChlbWFpbCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIGRvZXMgbm90IGV4aXN0LlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAL2NvcmUvZGkvZGktZ2xvYmFsc1wiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5hcHAudXNlKGJhc2VSZXNwb25zZU1pZGRsZXdhcmUpO1xuXG5hcHAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJleHBvcnQgY29uc3Qgcm9sZXMgPSBbeyByb2xlOiBcImFkbWluXCIgfSwgeyByb2xlOiBcInVzZXJcIiB9XTtcbiIsImltcG9ydCAqIGFzIGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd29yZChwYXNzd29yZCkge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTApO1xuXG4gIHJldHVybiBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZChwbGFpblRleHRQYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpIHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHBsYWluVGV4dFBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XG59XG5cbmV4cG9ydCB7IGNvbXBhcmVQYXNzd29yZCwgaGFzaFBhc3N3b3JkIH07XG4iLCJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmltcG9ydCB7IHNlcXVlbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3QgQ29udGFjdCA9IHNlcXVlbGl6ZS5kZWZpbmUoXG4gIFwiQ29udGFjdFwiLFxuICB7XG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGhvbmVOdW1iZXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRhYmxlTmFtZTogXCJjb250YWN0c1wiLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuY2xhc3MgRGF0YWJhc2Uge1xuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIElmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCBwcmV2ZW50IGNyZWF0aW5nIGEgbmV3IG9uZVxuICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkRhdGFiYXNlIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLiBVc2UgRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkLlwiLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyBNZXRob2QgdG8gZ2V0IHRoZSBTaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2VxdWVsaXplXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XG4gICAgICBEYXRhYmFzZS5pbnN0YW5jZSA9IG5ldyBTZXF1ZWxpemUoe1xuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfREFUQUJBU0UsXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSTkFNRSxcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxuICAgICAgICBkaWFsZWN0OiBwcm9jZXNzLmVudi5EQl9ESUFMRUNULFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERhdGFiYXNlLmluc3RhbmNlO1xuICB9XG5cbiAgLy8gTWV0aG9kIHRvIG9wZW4gdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgc3RhdGljIGFzeW5jIGNvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcXVlbGl6ZSA9IERhdGFiYXNlLmdldEluc3RhbmNlKCk7XG4gICAgICBhd2FpdCBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCk7XG4gICAgICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZS5cIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTpcIiwgZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byBjbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICBzdGF0aWMgYXN5bmMgY2xvc2UoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xuICAgICAgICBhd2FpdCBEYXRhYmFzZS5pbnN0YW5jZS5jbG9zZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5IGNsb3NlZC5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjbG9zaW5nIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uOlwiLCBlcnJvcik7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNlcXVlbGl6ZSA9IERhdGFiYXNlLmdldEluc3RhbmNlKCk7XG5cbmV4cG9ydCB7IERhdGFiYXNlLCBzZXF1ZWxpemUgfTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcblxuY29uZmlnKCk7XG5cbmNvbmZpZyh7XG4gIHBhdGg6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcIi5lbnYubG9jYWxcIiA6IFwiLmVudlwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn0pO1xuIiwiaW1wb3J0IHsgcm9sZURJS2V5cyB9IGZyb20gXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLnNlZWRlclwiO1xuXG5pbXBvcnQgeyB1c2VyRElLZXlzIH0gZnJvbSBcIi4uLy4uL2FwaS91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiLi4vLi4vYXBpL3VzZXIvdXNlci5zZWVkZXJcIjtcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi9kaS9kaS1jb250YWluZXJcIjtcblxuZXhwb3J0IGNvbnN0IHNlZWQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJvbGVTZWVkZXIgPSBuZXcgUm9sZVNlZWRlcihjb250YWluZXIuZ2V0KHJvbGVESUtleXMucmVwb3NpdG9yeSkpO1xuICBjb25zdCB1c2VyU2VlZGVyID0gbmV3IFVzZXJTZWVkZXIoY29udGFpbmVyLmdldCh1c2VyRElLZXlzLnNlcnZpY2UpKTtcblxuICBhd2FpdCByb2xlU2VlZGVyLmNyZWF0ZVJvbGVzKCk7XG4gIGF3YWl0IHVzZXJTZWVkZXIuY3JlYXRlQWRtaW4oKTtcbn07XG4iLCIvKipcbiAqIERlcGVuZGVuY3kgSW5qZWN0aW9uIENvbnRhaW5lclxuICogQGNsYXNzIERpQ29udGFpbmVyXG4gKiBAZGVzY3JpcHRpb24gQSBzaW1wbGUgZGVwZW5kZW5jeSBpbmplY3Rpb24gY29udGFpbmVyIHRoYXQgYWxsb3dzIHlvdSB0byByZWdpc3RlclxuICogYW5kIGdldCBkZXBlbmRlbmNpZXNcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBjb250YWluZXIgPSBuZXcgRGlDb250YWluZXIoKTtcbiAqIGNvbnRhaW5lci5yZWdpc3RlcihcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiLCBbXSwgKCkgPT4gbmV3IExhbmRpbmdQYWdlUmVwb3NpdG9yeSgpKTtcbiAqIGNvbnRhaW5lci5yZWdpc3RlcihcbiAqICBcIkxhbmRpbmdQYWdlU2VydmljZVwiLFxuICogIFtcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiXSxcbiAqICAobGFuZGluZ1BhZ2VSZXBvc2l0b3J5KSA9PiBuZXcgTGFuZGluZ1BhZ2VTZXJ2aWNlKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSksXG4gKiApO1xuICpcbiAqIGNvbnN0IGxhbmRpbmdQYWdlU2VydmljZSA9IGNvbnRhaW5lci5nZXQoXCJMYW5kaW5nUGFnZVNlcnZpY2VcIik7XG4gKi9cbmNsYXNzIERpQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kZXBlbmRlbmNpZXMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGRlcGVuZGVuY3lcbiAgICogQHBhcmFtIG5hbWUgLSBOYW1lIG9mIHRoZSBkZXBlbmRlbmN5IChleDogXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIilcbiAgICogQHBhcmFtIGRlcGVuZGVuY2llcyAtIEFycmF5IG9mIGRlcGVuZGVuY2llcyAoZXg6IFtcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiXSlcbiAgICogQHBhcmFtIGZ1bmMgLSBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGRlcGVuZGVuY3lcbiAgICovXG4gIHJlZ2lzdGVyKG5hbWUsIGRlcGVuZGVuY2llcywgZnVuYykge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAhQXJyYXkuaXNBcnJheShkZXBlbmRlbmNpZXMpIHx8XG4gICAgICB0eXBlb2YgZnVuYyAhPT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICAgIH1cblxuICAgIHRoaXMuZGVwZW5kZW5jaWVzW25hbWVdID0ge1xuICAgICAgZGVwZW5kZW5jaWVzLFxuICAgICAgZnVuYyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGRlcGVuZGVuY3lcbiAgICogQHBhcmFtIG5hbWUgLSBOYW1lIG9mIHRoZSBkZXBlbmRlbmN5IChleDogXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIilcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZXBlbmRlbmN5IG5vdCBmb3VuZDogJHtuYW1lfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGVwZW5kZW5jaWVzLCBmdW5jIH0gPSB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llc0luc3RhbmNlcyA9IGRlcGVuZGVuY2llcy5tYXAoKGRlcGVuZGVuY3kpID0+XG4gICAgICB0aGlzLmdldChkZXBlbmRlbmN5KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIGZ1bmMoLi4uZGVwZW5kZW5jaWVzSW5zdGFuY2VzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiLi4vcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHJlcy5zdWNjZXNzID0gKHByb3BzKSA9PiB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKHByb3BzLnN0YXR1cyB8fCBTdGF0dXNDb2Rlcy5PSylcbiAgICAgIC5qc29uKEJhc2VSZXNwb25zZS5zdWNjZXNzKHByb3BzKSk7XG4gIH07XG5cbiAgcmVzLmVycm9yID0gKHByb3BzKSA9PiB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKHByb3BzLnN0YXR1cyB8fCBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVClcbiAgICAgIC5qc29uKEJhc2VSZXNwb25zZS5lcnJvcihwcm9wcykpO1xuICB9O1xuXG4gIG5leHQoKTtcbn1cbiIsImltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tIFwiQC9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2VcIjtcblxuY29uc3QgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSA9IChlcnJvciwgcmVxdWVzdCwgcmVzcG9uc2UsIG5leHQpID0+IHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQVBJRXJyb3IpIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNDAwKS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5leHQoKTtcblxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBCYXNlUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZTtcbiIsImltcG9ydCB7IGdldFJlYXNvblBocmFzZSwgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBkYXRhLnN1Y2Nlc3M7XG4gICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgdGhpcy5kYXRhID0gZGF0YS5kYXRhO1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscztcbiAgfVxuXG4gIHN0YXRpYyBzdWNjZXNzKHsgc3RhdHVzID0gU3RhdHVzQ29kZXMuT0ssIG1lc3NhZ2UsIGRhdGEgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBzdGF0dXMsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldFJlYXNvblBocmFzZShzdGF0dXMpLFxuICAgICAgZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcih7IG1lc3NhZ2UsIHN0YXR1cyA9IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULCBkZXRhaWxzID0gbnVsbCB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBzdGF0dXMsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldFJlYXNvblBocmFzZShzdGF0dXMpLFxuICAgICAgZGV0YWlscyxcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFQSUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnVwZGF0ZShkYXRhLCB7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgcmV0dXJuaW5nOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZGVzdHJveSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgIH0pO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgfSk7XG4gIH1cblxuICBmaW5kQWxsKCkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya2luZyBGaW5kQWxsXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEFsbCgpO1xuICB9XG5cbiAgZmluZE9uZShxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG5cbiAgZmluZChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gS2F5xLF0bGFyxLEgc2F5bWFcbiAgY291bnQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jb3VudCh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNYW55KGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5idWxrQ3JlYXRlKGRhdGEpO1xuICB9XG5cbiAgdXBkYXRlTWFueShxdWVyeSwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnVwZGF0ZShkYXRhLCB7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB1cHNlcnQocXVlcnksIGRhdGEpIHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCB0aGlzLmZpbmRPbmUocXVlcnkpO1xuXG4gICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUocmVjb3JkLmlkLCBkYXRhKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWFzeW5jLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXJhdGUtbGltaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1zdGF0dXMtY29kZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIkAvY29yZS9jb25maWcvZW52LmNvbmZpZ1wiO1xuaW1wb3J0IFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVNlcnZlciB9IGZyb20gXCJodHRwXCI7XG5cbmltcG9ydCBhcHAgZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuaW1wb3J0IHsgc2VlZCB9IGZyb20gXCIuL2NvcmUvZGIvc2VlZFwiO1xuXG5jb25zdCBzZXJ2ZXIgPSBjcmVhdGVTZXJ2ZXIoYXBwKTtcbmNvbnN0IHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnY7XG5cbihhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY29ubmVjdCgpOyAvLyBDb25uZWN0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGF3YWl0IHNlZWQoKTtcbiAgICBjb25zb2xlLmxvZyhcIkFwcGxpY2F0aW9uIHN0YXJ0ZWQuLi5cIik7XG4gICAgc2VydmVyLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAke1BPUlR9YCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkFwcGxpY2F0aW9uIGZhaWxlZCB0byBzdGFydDpcIiwgZXJyb3IubWVzc2FnZSk7XG4gICAgcHJvY2Vzcy5leGl0KDEpOyAvLyBFeGl0IHdpdGggZmFpbHVyZSBjb2RlXG4gIH1cblxuICAvLyBHcmFjZWZ1bGx5IGhhbmRsZSBzaHV0ZG93biBzaWduYWxzXG4gIHByb2Nlc3Mub24oXCJTSUdJTlRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IERhdGFiYXNlLmNsb3NlKCk7IC8vIENsb3NlIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9KTtcblxuICBwcm9jZXNzLm9uKFwiU0lHVEVSTVwiLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJEYXRhVHlwZXMiLCJzZXF1ZWxpemUiLCJSb2xlIiwiZGVmaW5lIiwicm9sZSIsInR5cGUiLCJTVFJJTkciLCJhbGxvd051bGwiLCJ1bmlxdWUiLCJ0cmltIiwidGFibGVOYW1lIiwidGltZXN0YW1wcyIsImNvbnRhaW5lciIsIlJvbGVSZXBvc2l0b3J5IiwiUm9sZVNlZWRlciIsInJvbGVESUtleXMiLCJyZXBvc2l0b3J5Iiwic2VlZGVyIiwic2VydmljZSIsInJlZ2lzdGVyIiwicm9sZVJlcG9zaXRvcnkiLCJCYXNlUmVwb3NpdG9yeSIsIl9CYXNlUmVwb3NpdG9yeSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJyb2xlcyIsImtleSIsInZhbHVlIiwiX2NyZWF0ZVJvbGVzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJleGlzdGluZ1JvbGVzIiwiZXhpc3RpbmdSb2xlTmFtZXMiLCJyb2xlc1RvQ3JlYXRlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImZpbmRBbGwiLCJzZW50IiwiU2V0IiwibWFwIiwiZmlsdGVyIiwiaGFzIiwibGVuZ3RoIiwiY3JlYXRlTWFueSIsInQwIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsInN0b3AiLCJjcmVhdGVSb2xlcyIsImFwcGx5IiwiYXJndW1lbnRzIiwiVXNlciIsImZ1bGxOYW1lIiwicGFzc3dvcmQiLCJJTlRFR0VSIiwicmVmZXJlbmNlcyIsIm1vZGVsIiwiY29udGFjdCIsIlVzZXJSZXBvc2l0b3J5IiwiVXNlclNlZWRlciIsIlVzZXJTZXJ2aWNlIiwidXNlckRJS2V5cyIsInVzZXJSZXBvc2l0b3J5IiwidXNlclNlcnZpY2UiLCJfY3JlYXRlQWRtaW4iLCJkYXRhIiwiYWRtaW4iLCJmaW5kIiwiY3JlYXRlIiwiZW1haWwiLCJhYnJ1cHQiLCJjcmVhdGVBZG1pbiIsIkJhc2VSZXNwb25zZSIsIlN0YXR1c0NvZGVzIiwiaGFzaFBhc3N3b3JkIiwiQ29udGFjdCIsIl9jcmVhdGUiLCJ1c2VyRHRvIiwiX3VzZXJEdG8kY29udGFjdCIsInBob25lTnVtYmVyIiwidHJhbnNhY3Rpb24iLCJuZXdDb250YWN0IiwiY29tbWl0IiwiX29iamVjdFNwcmVhZCIsImlkIiwibG9nIiwicm9sbGJhY2siLCJfeCIsIl9maW5kQnlFbWFpbCIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZmluZE9uZSIsImZpbmRCeUVtYWlsIiwiX3gyIiwiX2ZpbmQiLCJfY2FsbGVlMyIsInF1ZXJ5IiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3gzIiwiX2ZpbmRCeUlkIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJmaW5kQnlJZCIsInN0YXR1cyIsIk5PVF9GT1VORCIsIl94NCIsIl91cGRhdGUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInVwZGF0ZSIsIl94NSIsIl94NiIsIl9kZWxldGUyIiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJkZWxldGUiLCJfeDciLCJfZmluZEJ5RW1haWxPclRocm93IiwiX2NhbGxlZTciLCJ1c2VyIiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZmluZEJ5RW1haWxPclRocm93IiwiX3g4IiwiY29ycyIsImV4cHJlc3MiLCJyYXRlTGltaXQiLCJiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIiwiZXJyb3JIYW5kbGVyTWlkZGxld2FyZSIsImFwcCIsInVzZSIsIndpbmRvd01zIiwibGltaXQiLCJzdGFuZGFyZEhlYWRlcnMiLCJsZWdhY3lIZWFkZXJzIiwic2V0IiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwianNvbiIsImRpc2FibGUiLCJiY3J5cHQiLCJfaGFzaFBhc3N3b3JkIiwic2FsdCIsImdlblNhbHQiLCJoYXNoIiwiY29tcGFyZVBhc3N3b3JkIiwiX2NvbXBhcmVQYXNzd29yZCIsInBsYWluVGV4dFBhc3N3b3JkIiwiaGFzaGVkUGFzc3dvcmQiLCJjb21wYXJlIiwidmFsaWRhdGUiLCJpc0VtYWlsIiwiU2VxdWVsaXplIiwiRGF0YWJhc2UiLCJpbnN0YW5jZSIsIkVycm9yIiwiZ2V0SW5zdGFuY2UiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJEQl9QQVNTV09SRCIsImhvc3QiLCJEQl9IT1NUIiwicG9ydCIsIkRCX1BPUlQiLCJkaWFsZWN0IiwiREJfRElBTEVDVCIsIl9jb25uZWN0IiwiX3NlcXVlbGl6ZSIsImF1dGhlbnRpY2F0ZSIsInN5bmMiLCJmb3JjZSIsImNvbm5lY3QiLCJfY2xvc2UiLCJjbG9zZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbmZpZyIsInBhdGgiLCJOT0RFX0VOViIsIm92ZXJyaWRlIiwic2VlZCIsIl9yZWYiLCJyb2xlU2VlZGVyIiwidXNlclNlZWRlciIsImdldCIsIkRpQ29udGFpbmVyIiwiZGVwZW5kZW5jaWVzIiwibmFtZSIsImZ1bmMiLCJBcnJheSIsImlzQXJyYXkiLCJfdGhpcyIsImNvbmNhdCIsIl90aGlzJGRlcGVuZGVuY2llcyRuYSIsImRlcGVuZGVuY2llc0luc3RhbmNlcyIsImRlcGVuZGVuY3kiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJyZXEiLCJyZXMiLCJzdWNjZXNzIiwicHJvcHMiLCJPSyIsIkJBRF9SRVFVRVNUIiwiQVBJRXJyb3IiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwiZ2V0UmVhc29uUGhyYXNlIiwiZGV0YWlscyIsIl9yZWYkc3RhdHVzIiwiX3JlZjIiLCJfcmVmMiRzdGF0dXMiLCJfcmVmMiRkZXRhaWxzIiwiX0Vycm9yIiwiX3dyYXBOYXRpdmVTdXBlciIsIndoZXJlIiwicmV0dXJuaW5nIiwiZGVzdHJveSIsImNvdW50IiwiYnVsa0NyZWF0ZSIsInVwZGF0ZU1hbnkiLCJfdXBzZXJ0IiwicmVjb3JkIiwidXBzZXJ0IiwiY3JlYXRlU2VydmVyIiwic2VydmVyIiwiUE9SVCIsImxpc3RlbiIsImV4aXQiLCJvbiJdLCJzb3VyY2VSb290IjoiIn0=