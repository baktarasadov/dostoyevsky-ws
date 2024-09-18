/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/auth/auth.controller.js":
/*!*****************************************!*\
  !*** ./src/api/auth/auth.controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthController: () => (/* binding */ AuthController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto/auth.dto */ "./src/api/auth/dto/auth.dto.js");






var AuthController = /*#__PURE__*/function () {
  function AuthController(authService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthController);
    this.authService = authService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthController, [{
    key: "register",
    value: function () {
      var _register = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(request, response) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.authService.register(request.body);
            case 2:
              data = _context.sent;
              response.success({
                message: "Registration successful. Please verify your email.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.CREATED,
                data: new _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__.AuthDto(data)
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function register(_x, _x2) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(request, response) {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.authService.login(request.body);
            case 2:
              user = _context2.sent;
              response.success({
                message: "User Login successful",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_auth_dto__WEBPACK_IMPORTED_MODULE_5__.AuthDto(user)
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/auth/auth.di.js":
/*!*********************************!*\
  !*** ./src/api/auth/auth.di.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authDIKeys: () => (/* binding */ authDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _user_user_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/user.di */ "./src/api/user/user.di.js");
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.controller */ "./src/api/auth/auth.controller.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/api/auth/auth.service.js");




var authDIKeys = {
  controller: "auth-controller",
  service: "auth-service"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authDIKeys.service, [_user_user_di__WEBPACK_IMPORTED_MODULE_1__.userDIKeys.service], function (userService) {
  return new _auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService(userService);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authDIKeys.controller, [authDIKeys.service], function (authService) {
  return new _auth_controller__WEBPACK_IMPORTED_MODULE_2__.AuthController(authService);
});

/***/ }),

/***/ "./src/api/auth/auth.route.js":
/*!************************************!*\
  !*** ./src/api/auth/auth.route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.di */ "./src/api/auth/auth.di.js");



var authRouter = express__WEBPACK_IMPORTED_MODULE_1___default().Router();
var prefix = "/auth";
var authController = _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.get(_auth_di__WEBPACK_IMPORTED_MODULE_2__.authDIKeys.controller);
authRouter.post("".concat(prefix, "/login"), function (req, res) {
  return authController.login(req, res);
});
authRouter.post("".concat(prefix, "/register"), function (req, res) {
  return authController.register(req, res);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authRouter);

/***/ }),

/***/ "./src/api/auth/auth.service.js":
/*!**************************************!*\
  !*** ./src/api/auth/auth.service.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/config/jwt.config */ "./src/core/config/jwt.config.js");
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_helper_hash_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/helper/hash-password */ "./src/common/helper/hash-password.js");
/* harmony import */ var _common_helper_jwt_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/helper/jwt-token */ "./src/common/helper/jwt-token.js");
/* harmony import */ var _common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/schema/model/contact-model.schema */ "./src/common/schema/model/contact-model.schema.js");
/* harmony import */ var _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/error-response/error-response */ "./src/shared/error-response/error-response.js");











var AuthService = /*#__PURE__*/function () {
  function AuthService(userService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthService);
    this.userService = userService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthService, [{
    key: "register",
    value: function () {
      var _register = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(authRegisterDto) {
        var fullName, email, existingUser, savedUser, payload, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              fullName = authRegisterDto.fullName;
              email = authRegisterDto.contact.email;
              console.log(authRegisterDto);
              _context.next = 5;
              return this.userService.findOne({
                where: {
                  fullName: fullName,
                  contact: {
                    email: email
                  }
                },
                include: [_common_schema_model_contact_model_schema__WEBPACK_IMPORTED_MODULE_9__["default"]]
              });
            case 5:
              existingUser = _context.sent;
              if (!existingUser) {
                _context.next = 8;
                break;
              }
              throw new _shared_error_response_error_response__WEBPACK_IMPORTED_MODULE_10__.APIError("A user with the name \"".concat(fullName, "\" and email \"").concat(email, "\" already exists."), http_status_codes__WEBPACK_IMPORTED_MODULE_6__.StatusCodes.CONFLICT);
            case 8:
              authRegisterDto.role = 2;
              _context.next = 11;
              return this.userService.create(authRegisterDto);
            case 11:
              savedUser = _context.sent;
              payload = {
                sub: savedUser._id,
                email: savedUser.email
              };
              _context.next = 15;
              return this.createToken(payload);
            case 15:
              token = _context.sent;
              return _context.abrupt("return", {
                user: savedUser,
                token: token
              });
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function register(_x) {
        return _register.apply(this, arguments);
      }
      return register;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(authloginDto) {
        var email, password, existingUser, payload, token;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              email = authloginDto.email, password = authloginDto.password;
              _context2.next = 3;
              return this.userService.findByEmail(email);
            case 3:
              existingUser = _context2.sent;
              _context2.t0 = !existingUser;
              if (_context2.t0) {
                _context2.next = 9;
                break;
              }
              _context2.next = 8;
              return (0,_common_helper_hash_password__WEBPACK_IMPORTED_MODULE_7__.comparePassword)(password, existingUser.password);
            case 8:
              _context2.t0 = !_context2.sent;
            case 9:
              if (!_context2.t0) {
                _context2.next = 11;
                break;
              }
              throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_5__.BaseResponse.error({
                message: "Email or Password is incorrect.",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_6__.StatusCodes.UNAUTHORIZED
              });
            case 11:
              payload = {
                sub: existingUser._id,
                email: email
              };
              _context2.next = 14;
              return this.createToken(payload);
            case 14:
              token = _context2.sent;
              return _context2.abrupt("return", {
                user: existingUser,
                token: token
              });
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function login(_x2) {
        return _login.apply(this, arguments);
      }
      return login;
    }()
  }, {
    key: "createToken",
    value: function () {
      var _createToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(payload) {
        var _config$jwt, accessSecret, accessExpiresIn, accessToken;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _config$jwt = _core_config_jwt_config__WEBPACK_IMPORTED_MODULE_4__.config.jwt, accessSecret = _config$jwt.accessSecret, accessExpiresIn = _config$jwt.accessExpiresIn;
              _context3.next = 3;
              return (0,_common_helper_jwt_token__WEBPACK_IMPORTED_MODULE_8__.generateToken)(payload, accessSecret, accessExpiresIn);
            case 3:
              accessToken = _context3.sent;
              return _context3.abrupt("return", {
                accessToken: accessToken
              });
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function createToken(_x3) {
        return _createToken.apply(this, arguments);
      }
      return createToken;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/auth/dto/auth.dto.js":
/*!**************************************!*\
  !*** ./src/api/auth/dto/auth.dto.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthDto: () => (/* binding */ AuthDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_user_dto_user_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/user/dto/user.dto */ "./src/api/user/dto/user.dto.js");



var AuthDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function AuthDto(data) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthDto);
  this.token = data.token.access || null;
  this.user = new _api_user_dto_user_dto__WEBPACK_IMPORTED_MODULE_2__.UserDto(data.user);
});

/***/ }),

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

/***/ "./src/api/user/dto/user.dto.js":
/*!**************************************!*\
  !*** ./src/api/user/dto/user.dto.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDto: () => (/* binding */ UserDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_schema_dto_contact_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/schema/dto/contact.dto */ "./src/common/schema/dto/contact.dto.js");



var UserDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function UserDto(data) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, UserDto);
  this.fullName = data.fullName;
  this.profileImage = data.profileImage;
  this.role = data.role;
  this.contact = new _common_schema_dto_contact_dto__WEBPACK_IMPORTED_MODULE_2__.ContactDto(data.contact);
});

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
        var password, _userDto$contact, email, phoneNumber, passwordHash, transaction, newContact;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              password = userDto.password;
              _userDto$contact = userDto.contact, email = _userDto$contact.email, phoneNumber = _userDto$contact.phoneNumber;
              _context.next = 4;
              return (0,_common_helper_hash_password__WEBPACK_IMPORTED_MODULE_7__.hashPassword)(password);
            case 4:
              passwordHash = _context.sent;
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
                password: passwordHash,
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
/* harmony import */ var _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/auth/auth.route */ "./src/api/auth/auth.route.js");
/* harmony import */ var _common_constant_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/constant/api */ "./src/common/constant/api.js");
/* harmony import */ var _core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/middleware/base-response.middleware */ "./src/core/middleware/base-response.middleware.js");
/* harmony import */ var _core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/middleware/error-handler-middleware */ "./src/core/middleware/error-handler-middleware.js");








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
app.use(_core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_5__.apiPrefix, _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use(_core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/common/constant/api.js":
/*!************************************!*\
  !*** ./src/common/constant/api.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiPrefix: () => (/* binding */ apiPrefix)
/* harmony export */ });
var apiPrefix = "/api/v1";

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

/***/ "./src/common/helper/jwt-token.js":
/*!****************************************!*\
  !*** ./src/common/helper/jwt-token.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodedToken: () => (/* binding */ decodedToken),
/* harmony export */   generateToken: () => (/* binding */ generateToken)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_response_base_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/response/base-response */ "./src/core/response/base-response.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);






var generateToken = function generateToken(payload, secret, time) {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default().sign(payload, secret, {
    expiresIn: time,
    algorithm: "HS512"
  });
};
var decodedToken = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(token, secret) {
    var _token$split, _token$split2, scheme, authToken;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (token) {
            _context.next = 2;
            break;
          }
          throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_3__.BaseResponse.error({
            message: "No token provided",
            status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.BAD_REQUEST
          });
        case 2:
          _token$split = token.split(" "), _token$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_token$split, 2), scheme = _token$split2[0], authToken = _token$split2[1];
          if (!(scheme !== "Bearer" || !authToken)) {
            _context.next = 5;
            break;
          }
          throw new _core_response_base_response__WEBPACK_IMPORTED_MODULE_3__.BaseResponse.error({
            message: "Invalid token format",
            status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.BAD_REQUEST
          });
        case 5:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default().verify(authToken, secret, {
              algorithms: ["HS512"]
            }, function (err, decoded) {
              if (err) {
                reject(new _core_response_base_response__WEBPACK_IMPORTED_MODULE_3__.BaseResponse.error({
                  message: "Token verification failed",
                  status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.UNAUTHORIZED
                }));
              } else {
                resolve(decoded);
              }
            });
          }));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function decodedToken(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ "./src/common/schema/dto/contact.dto.js":
/*!**********************************************!*\
  !*** ./src/common/schema/dto/contact.dto.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactDto: () => (/* binding */ ContactDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);


var ContactDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function ContactDto(_ref) {
  var email = _ref.email,
    phoneNumber = _ref.phoneNumber;
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ContactDto);
  Object.assign(this, {
    email: email,
    phoneNumber: phoneNumber
  });
});

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

/***/ "./src/core/config/jwt.config.js":
/*!***************************************!*\
  !*** ./src/core/config/jwt.config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
var config = {
  jwt: {
    algorithm: process.env.JWT_ALGORITHM,
    accessSecret: process.env.JWT_ACCESS_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    verificationSecret: process.env.JWT_VERIFICATION_SECRET,
    verificationExpiresIn: process.env.JWT_VERIFICATION_EXPIRES_IN
  }
};

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
/* harmony import */ var _api_auth_auth_di__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/auth/auth.di */ "./src/api/auth/auth.di.js");



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

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF4QixzRUFBQSxVQUFBMEIsVUFBQUMsU0FBQTtZQUFBLGtCQUFBQSxTQUFBLENBQUFsQixJQUFBLEdBQUFrQixTQUFBLENBQUFqQixJQUFBO2NBQUE7Z0JBQUFpQixTQUFBLENBQUFqQixJQUFBO2dCQUFBLE9BQ2Q2Tiw0REFBUSxDQUFDd0IsS0FBSyxDQUFDLENBQUM7Y0FBQTtnQkFBRTtnQkFDeEJuQixPQUFPLENBQUN1RSxJQUFJLENBQUMsQ0FBQyxDQUFDO2NBQUM7Y0FBQTtnQkFBQSxPQUFBeFIsU0FBQSxDQUFBVCxJQUFBO1lBQUE7VUFBQSxHQUFBTSxRQUFBO1FBQUEsQ0FDakIsR0FBQztNQUFDO01BQUE7UUFBQSxPQUFBZ0UsU0FBQSxDQUFBdEUsSUFBQTtJQUFBO0VBQUEsR0FBQWdFLFFBQUE7QUFBQSxDQUNKLEdBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguZGkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5yb3V0ZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGgvZHRvL2F1dGguZHRvLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9yb2xlL21vZGVsL3JvbGUubW9kZWwuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5kaS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5zZWVkZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3VzZXIvZHRvL3VzZXIuZHRvLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS91c2VyL21vZGVsL3VzZXIubW9kZWwuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5kaS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5zZWVkZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5zZXJ2aWNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb21tb24vY29uc3RhbnQvYXBpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudC9yb2xlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9oZWxwZXIvaGFzaC1wYXNzd29yZC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb21tb24vaGVscGVyL2p3dC10b2tlbi5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb21tb24vc2NoZW1hL2R0by9jb250YWN0LmR0by5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2RiLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2NvbmZpZy9lbnYuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2p3dC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9kYi9zZWVkLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvZGkvZGktY29udGFpbmVyLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvZGkvZGktZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImJjcnlwdFwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLWFzeW5jLWVycm9yc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJodHRwLXN0YXR1cy1jb2Rlc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJzZXF1ZWxpemVcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiaHR0cFwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEF1dGhEdG8gfSBmcm9tIFwiLi9kdG8vYXV0aC5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnJlZ2lzdGVyKHJlcXVlc3QuYm9keSk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwuIFBsZWFzZSB2ZXJpZnkgeW91ciBlbWFpbC5cIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQ1JFQVRFRCxcbiAgICAgIGRhdGE6IG5ldyBBdXRoRHRvKGRhdGEpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9naW4ocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbihyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIlVzZXIgTG9naW4gc3VjY2Vzc2Z1bFwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5PSyxcbiAgICAgIGRhdGE6IG5ldyBBdXRoRHRvKHVzZXIpLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyB1c2VyRElLZXlzIH0gZnJvbSBcIi4uL3VzZXIvdXNlci5kaVwiO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tIFwiLi9hdXRoLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoRElLZXlzID0ge1xuICBjb250cm9sbGVyOiBcImF1dGgtY29udHJvbGxlclwiLFxuICBzZXJ2aWNlOiBcImF1dGgtc2VydmljZVwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBhdXRoRElLZXlzLnNlcnZpY2UsXG4gIFt1c2VyRElLZXlzLnNlcnZpY2VdLFxuICAodXNlclNlcnZpY2UpID0+IG5ldyBBdXRoU2VydmljZSh1c2VyU2VydmljZSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhESUtleXMuY29udHJvbGxlcixcbiAgW2F1dGhESUtleXMuc2VydmljZV0sXG4gIChhdXRoU2VydmljZSkgPT4gbmV3IEF1dGhDb250cm9sbGVyKGF1dGhTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHsgYXV0aERJS2V5cyB9IGZyb20gXCIuL2F1dGguZGlcIjtcblxuY29uc3QgYXV0aFJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IHByZWZpeCA9IFwiL2F1dGhcIjtcblxuY29uc3QgYXV0aENvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGF1dGhESUtleXMuY29udHJvbGxlcik7XG5cbmF1dGhSb3V0ZXIucG9zdChgJHtwcmVmaXh9L2xvZ2luYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRoQ29udHJvbGxlci5sb2dpbihyZXEsIHJlcyksXG4pO1xuXG5hdXRoUm91dGVyLnBvc3QoYCR7cHJlZml4fS9yZWdpc3RlcmAsIChyZXEsIHJlcykgPT5cbiAgYXV0aENvbnRyb2xsZXIucmVnaXN0ZXIocmVxLCByZXMpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFJvdXRlcjtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJAL2NvcmUvY29uZmlnL2p3dC5jb25maWdcIjtcbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgY29tcGFyZVBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9oZWxwZXIvaGFzaC1wYXNzd29yZFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVUb2tlbiB9IGZyb20gXCIuLi8uLi9jb21tb24vaGVscGVyL2p3dC10b2tlblwiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uLy4uL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWFcIjtcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyU2VydmljZSkge1xuICAgIHRoaXMudXNlclNlcnZpY2UgPSB1c2VyU2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIHJlZ2lzdGVyKGF1dGhSZWdpc3RlckR0bykge1xuICAgIGNvbnN0IHsgZnVsbE5hbWUgfSA9IGF1dGhSZWdpc3RlckR0bztcblxuICAgIGNvbnN0IHsgZW1haWwgfSA9IGF1dGhSZWdpc3RlckR0by5jb250YWN0O1xuICAgIGNvbnNvbGUubG9nKGF1dGhSZWdpc3RlckR0byk7XG5cbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgZnVsbE5hbWUsIGNvbnRhY3Q6IHsgZW1haWwgfSB9LFxuICAgICAgaW5jbHVkZTogW0NvbnRhY3RdLFxuICAgIH0pO1xuXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgdGhyb3cgbmV3IEFQSUVycm9yKFxuICAgICAgICBgQSB1c2VyIHdpdGggdGhlIG5hbWUgXCIke2Z1bGxOYW1lfVwiIGFuZCBlbWFpbCBcIiR7ZW1haWx9XCIgYWxyZWFkeSBleGlzdHMuYCxcbiAgICAgICAgU3RhdHVzQ29kZXMuQ09ORkxJQ1QsXG4gICAgICApO1xuICAgIH1cblxuICAgIGF1dGhSZWdpc3RlckR0by5yb2xlID0gMjtcblxuICAgIGNvbnN0IHNhdmVkVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY3JlYXRlKGF1dGhSZWdpc3RlckR0byk7XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgc3ViOiBzYXZlZFVzZXIuX2lkLFxuICAgICAgZW1haWw6IHNhdmVkVXNlci5lbWFpbCxcbiAgICB9O1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmNyZWF0ZVRva2VuKHBheWxvYWQpO1xuXG4gICAgcmV0dXJuIHsgdXNlcjogc2F2ZWRVc2VyLCB0b2tlbiB9O1xuICB9XG5cbiAgYXN5bmMgbG9naW4oYXV0aGxvZ2luRHRvKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF1dGhsb2dpbkR0bztcblxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZEJ5RW1haWwoZW1haWwpO1xuXG4gICAgaWYgKFxuICAgICAgIWV4aXN0aW5nVXNlciB8fFxuICAgICAgIShhd2FpdCBjb21wYXJlUGFzc3dvcmQocGFzc3dvcmQsIGV4aXN0aW5nVXNlci5wYXNzd29yZCkpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJFbWFpbCBvciBQYXNzd29yZCBpcyBpbmNvcnJlY3QuXCIsXG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVELFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHN1YjogZXhpc3RpbmdVc2VyLl9pZCxcbiAgICAgIGVtYWlsLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuY3JlYXRlVG9rZW4ocGF5bG9hZCk7XG5cbiAgICByZXR1cm4geyB1c2VyOiBleGlzdGluZ1VzZXIsIHRva2VuIH07XG4gIH1cblxuICBhc3luYyBjcmVhdGVUb2tlbihwYXlsb2FkKSB7XG4gICAgY29uc3QgeyBhY2Nlc3NTZWNyZXQsIGFjY2Vzc0V4cGlyZXNJbiB9ID0gY29uZmlnLmp3dDtcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYXdhaXQgZ2VuZXJhdGVUb2tlbihcbiAgICAgIHBheWxvYWQsXG4gICAgICBhY2Nlc3NTZWNyZXQsXG4gICAgICBhY2Nlc3NFeHBpcmVzSW4sXG4gICAgKTtcblxuICAgIHJldHVybiB7IGFjY2Vzc1Rva2VuIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXJEdG8gfSBmcm9tIFwiQC9hcGkvdXNlci9kdG8vdXNlci5kdG9cIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhEdG8ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy50b2tlbiA9IGRhdGEudG9rZW4uYWNjZXNzIHx8IG51bGw7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXJEdG8oZGF0YS51c2VyKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmNvbnN0IFJvbGUgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIlJvbGVcIixcbiAge1xuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGFibGVOYW1lOiBcInJvbGVzXCIsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgUm9sZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9yb2xlLnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiLi9yb2xlLnNlZWRlclwiO1xuXG5leHBvcnQgY29uc3Qgcm9sZURJS2V5cyA9IHtcbiAgcmVwb3NpdG9yeTogXCJyb2xlLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInJvbGUtc2VlZGVyXCIsXG4gIHNlcnZpY2U6IFwicm9sZS1zZXJ2aWNlXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIocm9sZURJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFJvbGVSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHJvbGVESUtleXMuc2VlZGVyLFxuICBbcm9sZURJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHJvbGVSZXBvc2l0b3J5KSA9PiBuZXcgUm9sZVNlZWRlcihyb2xlUmVwb3NpdG9yeSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vbW9kZWwvcm9sZS5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFJvbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByb2xlcyB9IGZyb20gXCJAL2NvbW1vbi9jb25zdGFudC9yb2xlXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlU2VlZGVyIHtcbiAgY29uc3RydWN0b3Iocm9sZVJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLnJvbGVSZXBvc2l0b3J5ID0gcm9sZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVSb2xlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IGF3YWl0IHRoaXMucm9sZVJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICAgICAgY29uc3QgZXhpc3RpbmdSb2xlTmFtZXMgPSBuZXcgU2V0KGV4aXN0aW5nUm9sZXMubWFwKChyb2xlKSA9PiByb2xlLnJvbGUpKTtcblxuICAgICAgY29uc3Qgcm9sZXNUb0NyZWF0ZSA9IHJvbGVzLmZpbHRlcihcbiAgICAgICAgKHJvbGUpID0+ICFleGlzdGluZ1JvbGVOYW1lcy5oYXMocm9sZS5yb2xlKSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChyb2xlc1RvQ3JlYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5jcmVhdGVNYW55KHJvbGVzVG9DcmVhdGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcm9sZXM6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgLy8gT3B0aW9uYWw6IEhhbmRsZSBvciBwcm9wYWdhdGUgdGhlIGVycm9yIGFzIG5lZWRlZFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFjdER0byB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyRHRvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZ1bGxOYW1lO1xuICAgIHRoaXMucHJvZmlsZUltYWdlID0gZGF0YS5wcm9maWxlSW1hZ2U7XG4gICAgdGhpcy5yb2xlID0gZGF0YS5yb2xlO1xuICAgIHRoaXMuY29udGFjdCA9IG5ldyBDb250YWN0RHRvKGRhdGEuY29udGFjdCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBVc2VyID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJVc2VyXCIsXG4gIHtcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiBcInJvbGVzXCIsXG4gICAgICAgIGtleTogXCJpZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6IFwiY29udGFjdHNcIixcbiAgICAgICAga2V5OiBcImlkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6IFwidXNlcnNcIixcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gXCIuL3VzZXIucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlclNlZWRlciB9IGZyb20gXCIuL3VzZXIuc2VlZGVyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJ1c2VyLXNlcnZpY2VcIixcbiAgcmVwb3NpdG9yeTogXCJ1c2VyLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInVzZXItc2VlZGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIodXNlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFVzZXJSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VydmljZSxcbiAgW3VzZXJESUtleXMucmVwb3NpdG9yeV0sXG4gICh1c2VyUmVwb3NpdG9yeSkgPT4gbmV3IFVzZXJTZXJ2aWNlKHVzZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZWVkZXIsXG4gIFt1c2VyRElLZXlzLnNlcnZpY2VdLFxuICAodXNlclNlcnZpY2UpID0+IG5ldyBVc2VyU2VlZGVyKHVzZXJTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9tb2RlbC91c2VyLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoVXNlcik7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVc2VyU2VlZGVyIHtcbiAgY29uc3RydWN0b3IodXNlclNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGVBZG1pbigpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kKHsgcm9sZTogMSB9KTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgY29uc3QgYWRtaW4gPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICAgIGNvbnRhY3Q6IHsgZW1haWw6IFwiYmFrdGFyYWRtaW5AZ21haWwuY29tXCIgfSxcbiAgICAgICAgZnVsbE5hbWU6IFwiYmFrdGFyIGFkbWluXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcImJha3RhcmFkbWluXCIsXG4gICAgICAgIHJvbGU6IDEsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFkbWluO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IGhhc2hQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9jb21tb24vaGVscGVyL2hhc2gtcGFzc3dvcmRcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi8uLi9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hXCI7XG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy51c2VyUmVwb3NpdG9yeSA9IHVzZXJSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKHVzZXJEdG8pIHtcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSB1c2VyRHRvO1xuXG4gICAgY29uc3QgeyBlbWFpbCwgcGhvbmVOdW1iZXIgfSA9IHVzZXJEdG8uY29udGFjdDtcblxuICAgIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcXVlbGl6ZS50cmFuc2FjdGlvbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhY3QgPSBhd2FpdCBDb250YWN0LmNyZWF0ZShcbiAgICAgICAge1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBob25lTnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICB7IHRyYW5zYWN0aW9uIH0sXG4gICAgICApO1xuXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi5jb21taXQoKTtcblxuICAgICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlKHtcbiAgICAgICAgLi4udXNlckR0byxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkSGFzaCxcbiAgICAgICAgcm9sZTogMSxcbiAgICAgICAgY29udGFjdDogbmV3Q29udGFjdC5pZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLnJvbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmluZEJ5RW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHsgXCJjb250YWN0LmVtYWlsXCI6IGVtYWlsIH0pO1xuICB9XG5cbiAgYXN5bmMgZmluZChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUocXVlcnkpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQsIHVzZXJEdG8pIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LnVwZGF0ZShpZCwgdXNlckR0byk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWQpIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmRlbGV0ZShpZCk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlFbWFpbE9yVGhyb3coZW1haWwpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5maW5kQnlFbWFpbChlbWFpbCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIGRvZXMgbm90IGV4aXN0LlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAL2NvcmUvZGkvZGktZ2xvYmFsc1wiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmltcG9ydCBhdXRoUm91dGVyIGZyb20gXCIuL2FwaS9hdXRoL2F1dGgucm91dGVcIjtcbmltcG9ydCB7IGFwaVByZWZpeCB9IGZyb20gXCIuL2NvbW1vbi9jb25zdGFudC9hcGlcIjtcbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5hcHAudXNlKGJhc2VSZXNwb25zZU1pZGRsZXdhcmUpO1xuYXBwLnVzZShhcGlQcmVmaXgsIGF1dGhSb3V0ZXIpO1xuYXBwLnVzZShlcnJvckhhbmRsZXJNaWRkbGV3YXJlKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVByZWZpeCA9IFwiL2FwaS92MVwiO1xuIiwiZXhwb3J0IGNvbnN0IHJvbGVzID0gW3sgcm9sZTogXCJhZG1pblwiIH0sIHsgcm9sZTogXCJ1c2VyXCIgfV07XG4iLCJpbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcblxuICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21wYXJlUGFzc3dvcmQocGxhaW5UZXh0UGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XG4gIHJldHVybiBiY3J5cHQuY29tcGFyZShwbGFpblRleHRQYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xufVxuXG5leHBvcnQgeyBjb21wYXJlUGFzc3dvcmQsIGhhc2hQYXNzd29yZCB9O1xuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAocGF5bG9hZCwgc2VjcmV0LCB0aW1lKSA9PlxuICBqd3Quc2lnbihwYXlsb2FkLCBzZWNyZXQsIHtcbiAgICBleHBpcmVzSW46IHRpbWUsXG4gICAgYWxnb3JpdGhtOiBcIkhTNTEyXCIsXG4gIH0pO1xuXG5jb25zdCBkZWNvZGVkVG9rZW4gPSBhc3luYyAodG9rZW4sIHNlY3JldCkgPT4ge1xuICBpZiAoIXRva2VuKSB7XG4gICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICBtZXNzYWdlOiBcIk5vIHRva2VuIHByb3ZpZGVkXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgW3NjaGVtZSwgYXV0aFRva2VuXSA9IHRva2VuLnNwbGl0KFwiIFwiKTtcblxuICBpZiAoc2NoZW1lICE9PSBcIkJlYXJlclwiIHx8ICFhdXRoVG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB0b2tlbiBmb3JtYXRcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGp3dC52ZXJpZnkoYXV0aFRva2VuLCBzZWNyZXQsIHsgYWxnb3JpdGhtczogW1wiSFM1MTJcIl0gfSwgKGVyciwgZGVjb2RlZCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoXG4gICAgICAgICAgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRva2VuIHZlcmlmaWNhdGlvbiBmYWlsZWRcIixcbiAgICAgICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVELFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShkZWNvZGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkZWNvZGVkVG9rZW4sIGdlbmVyYXRlVG9rZW4gfTtcbiIsImV4cG9ydCBjbGFzcyBDb250YWN0RHRvIHtcbiAgY29uc3RydWN0b3IoeyBlbWFpbCwgcGhvbmVOdW1iZXIgfSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgZW1haWwsXG4gICAgICBwaG9uZU51bWJlcixcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmNvbnN0IENvbnRhY3QgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIkNvbnRhY3RcIixcbiAge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICB2YWxpZGF0ZToge1xuICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBob25lTnVtYmVyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6IFwiY29udGFjdHNcIixcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tIFwic2VxdWVsaXplXCI7XHJcblxyXG5jbGFzcyBEYXRhYmFzZSB7XHJcbiAgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBJZiBhbiBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0cywgcHJldmVudCBjcmVhdGluZyBhIG5ldyBvbmVcclxuICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgXCJEYXRhYmFzZSBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0cy4gVXNlIERhdGFiYXNlLmdldEluc3RhbmNlKCkgaW5zdGVhZC5cIixcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCB0byBnZXQgdGhlIFNpbmdsZXRvbiBpbnN0YW5jZSBvZiBTZXF1ZWxpemVcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XHJcbiAgICAgIERhdGFiYXNlLmluc3RhbmNlID0gbmV3IFNlcXVlbGl6ZSh7XHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX0RBVEFCQVNFLFxyXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSTkFNRSxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxyXG4gICAgICAgIGRpYWxlY3Q6IHByb2Nlc3MuZW52LkRCX0RJQUxFQ1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBEYXRhYmFzZS5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCB0byBvcGVuIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXHJcbiAgc3RhdGljIGFzeW5jIGNvbm5lY3QoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZXF1ZWxpemUgPSBEYXRhYmFzZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICBhd2FpdCBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCk7XHJcbiAgICAgIGF3YWl0IHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCB0byBjbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxyXG4gIHN0YXRpYyBhc3luYyBjbG9zZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xyXG4gICAgICAgIGF3YWl0IERhdGFiYXNlLmluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBjbG9zZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2xvc2luZyB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2VxdWVsaXplID0gRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbmV4cG9ydCB7IERhdGFiYXNlLCBzZXF1ZWxpemUgfTtcclxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25maWcoKTtcblxuY29uZmlnKHtcbiAgcGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiLmVudi5sb2NhbFwiIDogXCIuZW52XCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufSk7XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBqd3Q6IHtcbiAgICBhbGdvcml0aG06IHByb2Nlc3MuZW52LkpXVF9BTEdPUklUSE0sXG4gICAgYWNjZXNzU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfQUNDRVNTX1NFQ1JFVCxcbiAgICBhY2Nlc3NFeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9BQ0NFU1NfRVhQSVJFU19JTixcbiAgICByZWZyZXNoU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfUkVGUkVTSF9TRUNSRVQsXG4gICAgcmVmcmVzaEV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfRVhQSVJFU19JTixcbiAgICB2ZXJpZmljYXRpb25TZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9WRVJJRklDQVRJT05fU0VDUkVULFxuICAgIHZlcmlmaWNhdGlvbkV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1ZFUklGSUNBVElPTl9FWFBJUkVTX0lOLFxuICB9LFxufTtcbiIsImltcG9ydCB7IHJvbGVESUtleXMgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIkAvYXBpL3JvbGUvcm9sZS5zZWVkZXJcIjtcblxuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCIuLi8uLi9hcGkvdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIi4uLy4uL2FwaS91c2VyL3VzZXIuc2VlZGVyXCI7XG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGkvZGktY29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBzZWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByb2xlU2VlZGVyID0gbmV3IFJvbGVTZWVkZXIoY29udGFpbmVyLmdldChyb2xlRElLZXlzLnJlcG9zaXRvcnkpKTtcbiAgY29uc3QgdXNlclNlZWRlciA9IG5ldyBVc2VyU2VlZGVyKGNvbnRhaW5lci5nZXQodXNlckRJS2V5cy5zZXJ2aWNlKSk7XG5cbiAgYXdhaXQgcm9sZVNlZWRlci5jcmVhdGVSb2xlcygpO1xuICBhd2FpdCB1c2VyU2VlZGVyLmNyZWF0ZUFkbWluKCk7XG59O1xuIiwiLyoqXG4gKiBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXJcbiAqIEBjbGFzcyBEaUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIEEgc2ltcGxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciB0aGF0IGFsbG93cyB5b3UgdG8gcmVnaXN0ZXJcbiAqIGFuZCBnZXQgZGVwZW5kZW5jaWVzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIiwgW10sICgpID0+IG5ldyBMYW5kaW5nUGFnZVJlcG9zaXRvcnkoKSk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXG4gKiAgXCJMYW5kaW5nUGFnZVNlcnZpY2VcIixcbiAqICBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0sXG4gKiAgKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSkgPT4gbmV3IExhbmRpbmdQYWdlU2VydmljZShsYW5kaW5nUGFnZVJlcG9zaXRvcnkpLFxuICogKTtcbiAqXG4gKiBjb25zdCBsYW5kaW5nUGFnZVNlcnZpY2UgPSBjb250YWluZXIuZ2V0KFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIpO1xuICovXG5jbGFzcyBEaUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBBcnJheSBvZiBkZXBlbmRlbmNpZXMgKGV4OiBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0pXG4gICAqIEBwYXJhbSBmdW5jIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWdpc3RlcihuYW1lLCBkZXBlbmRlbmNpZXMsIGZ1bmMpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSB8fFxuICAgICAgdHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSA9IHtcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIGZ1bmMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVwZW5kZW5jeSBub3QgZm91bmQ6ICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZnVuYyB9ID0gdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV07XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNJbnN0YW5jZXMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PlxuICAgICAgdGhpcy5nZXQoZGVwZW5kZW5jeSksXG4gICAgKTtcblxuICAgIHJldHVybiBmdW5jKC4uLmRlcGVuZGVuY2llc0luc3RhbmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuIiwiaW1wb3J0IFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9hdXRoL2F1dGguZGlcIjtcbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2VSZXNwb25zZU1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnN1Y2Nlc3MgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLk9LKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLnN1Y2Nlc3MocHJvcHMpKTtcbiAgfTtcblxuICByZXMuZXJyb3IgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLmVycm9yKHByb3BzKSk7XG4gIH07XG5cbiAgbmV4dCgpO1xufVxuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCJAL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuXG5jb25zdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlID0gKGVycm9yLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBUElFcnJvcikge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA0MDApLmpzb24oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpO1xuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEJhc2VSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5lcnJvcihlcnJvcik7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkludGVybmFsIFNlcnZlciBFcnJvciFcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlO1xuIiwiaW1wb3J0IHsgZ2V0UmVhc29uUGhyYXNlLCBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcbiAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG4gICAgdGhpcy5kZXRhaWxzID0gZGF0YS5kZXRhaWxzO1xuICB9XG5cbiAgc3RhdGljIHN1Y2Nlc3MoeyBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5PSywgbWVzc2FnZSwgZGF0YSB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGVycm9yKHsgbWVzc2FnZSwgc3RhdHVzID0gU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsIGRldGFpbHMgPSBudWxsIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkZXRhaWxzLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQVBJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudXBkYXRlKGRhdGEsIHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICByZXR1cm5pbmc6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5kZXN0cm95KHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgfSk7XG4gIH1cblxuICBmaW5kQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRBbGwoKSB7XG4gICAgY29uc29sZS5sb2coXCJ3b3JraW5nIEZpbmRBbGxcIik7XG5cbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQWxsKCk7XG4gIH1cblxuICBmaW5kT25lKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZE9uZSh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBmaW5kKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEFsbCh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICAvLyBLYXnEsXRsYXLEsSBzYXltYVxuICBjb3VudChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNvdW50KHtcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1hbnkoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmJ1bGtDcmVhdGUoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVNYW55KHF1ZXJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudXBkYXRlKGRhdGEsIHtcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwc2VydChxdWVyeSwgZGF0YSkge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHRoaXMuZmluZE9uZShxdWVyeSk7XG5cbiAgICBpZiAoIXJlY29yZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZShyZWNvcmQuaWQsIGRhdGEpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWFzeW5jLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXJhdGUtbGltaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1zdGF0dXMtY29kZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcbmltcG9ydCB7IHNlZWQgfSBmcm9tIFwiLi9jb3JlL2RiL3NlZWRcIjtcblxuY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKGFwcCk7XG5jb25zdCB7IFBPUlQgfSA9IHByb2Nlc3MuZW52O1xuXG4oYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IERhdGFiYXNlLmNvbm5lY3QoKTsgLy8gQ29ubmVjdCB0byB0aGUgZGF0YWJhc2VcbiAgICBhd2FpdCBzZWVkKCk7XG4gICAgY29uc29sZS5sb2coXCJBcHBsaWNhdGlvbiBzdGFydGVkLi4uXCIpO1xuICAgIHNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgJHtQT1JUfWApO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBcHBsaWNhdGlvbiBmYWlsZWQgdG8gc3RhcnQ6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTsgLy8gRXhpdCB3aXRoIGZhaWx1cmUgY29kZVxuICB9XG5cbiAgLy8gR3JhY2VmdWxseSBoYW5kbGUgc2h1dGRvd24gc2lnbmFsc1xuICBwcm9jZXNzLm9uKFwiU0lHSU5UXCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG5cbiAgcHJvY2Vzcy5vbihcIlNJR1RFUk1cIiwgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IERhdGFiYXNlLmNsb3NlKCk7IC8vIENsb3NlIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiU3RhdHVzQ29kZXMiLCJBdXRoRHRvIiwiQXV0aENvbnRyb2xsZXIiLCJhdXRoU2VydmljZSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3JlZ2lzdGVyIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInJlZ2lzdGVyIiwiYm9keSIsInNlbnQiLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsIkNSRUFURUQiLCJzdG9wIiwiX3giLCJfeDIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9sb2dpbiIsIl9jYWxsZWUyIiwidXNlciIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxvZ2luIiwiT0siLCJfeDMiLCJfeDQiLCJjb250YWluZXIiLCJ1c2VyRElLZXlzIiwiQXV0aFNlcnZpY2UiLCJhdXRoRElLZXlzIiwiY29udHJvbGxlciIsInNlcnZpY2UiLCJ1c2VyU2VydmljZSIsImV4cHJlc3MiLCJhdXRoUm91dGVyIiwiUm91dGVyIiwicHJlZml4IiwiYXV0aENvbnRyb2xsZXIiLCJnZXQiLCJwb3N0IiwiY29uY2F0IiwicmVxIiwicmVzIiwiY29uZmlnIiwiQmFzZVJlc3BvbnNlIiwiY29tcGFyZVBhc3N3b3JkIiwiZ2VuZXJhdGVUb2tlbiIsIkNvbnRhY3QiLCJBUElFcnJvciIsImF1dGhSZWdpc3RlckR0byIsImZ1bGxOYW1lIiwiZW1haWwiLCJleGlzdGluZ1VzZXIiLCJzYXZlZFVzZXIiLCJwYXlsb2FkIiwidG9rZW4iLCJjb250YWN0IiwiY29uc29sZSIsImxvZyIsImZpbmRPbmUiLCJ3aGVyZSIsImluY2x1ZGUiLCJDT05GTElDVCIsInJvbGUiLCJjcmVhdGUiLCJzdWIiLCJfaWQiLCJjcmVhdGVUb2tlbiIsImFicnVwdCIsImF1dGhsb2dpbkR0byIsInBhc3N3b3JkIiwiZmluZEJ5RW1haWwiLCJ0MCIsImVycm9yIiwiVU5BVVRIT1JJWkVEIiwiX2NyZWF0ZVRva2VuIiwiX2NhbGxlZTMiLCJfY29uZmlnJGp3dCIsImFjY2Vzc1NlY3JldCIsImFjY2Vzc0V4cGlyZXNJbiIsImFjY2Vzc1Rva2VuIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiand0IiwiVXNlckR0byIsImFjY2VzcyIsIkRhdGFUeXBlcyIsInNlcXVlbGl6ZSIsIlJvbGUiLCJkZWZpbmUiLCJ0eXBlIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwidW5pcXVlIiwidHJpbSIsInRhYmxlTmFtZSIsInRpbWVzdGFtcHMiLCJSb2xlUmVwb3NpdG9yeSIsIlJvbGVTZWVkZXIiLCJyb2xlRElLZXlzIiwicmVwb3NpdG9yeSIsInNlZWRlciIsInJvbGVSZXBvc2l0b3J5IiwiQmFzZVJlcG9zaXRvcnkiLCJfQmFzZVJlcG9zaXRvcnkiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwicm9sZXMiLCJfY3JlYXRlUm9sZXMiLCJleGlzdGluZ1JvbGVzIiwiZXhpc3RpbmdSb2xlTmFtZXMiLCJyb2xlc1RvQ3JlYXRlIiwiZmluZEFsbCIsIlNldCIsIm1hcCIsImZpbHRlciIsImhhcyIsImxlbmd0aCIsImNyZWF0ZU1hbnkiLCJjcmVhdGVSb2xlcyIsIkNvbnRhY3REdG8iLCJwcm9maWxlSW1hZ2UiLCJVc2VyIiwiSU5URUdFUiIsInJlZmVyZW5jZXMiLCJtb2RlbCIsIlVzZXJSZXBvc2l0b3J5IiwiVXNlclNlZWRlciIsIlVzZXJTZXJ2aWNlIiwidXNlclJlcG9zaXRvcnkiLCJfY3JlYXRlQWRtaW4iLCJhZG1pbiIsImZpbmQiLCJjcmVhdGVBZG1pbiIsImhhc2hQYXNzd29yZCIsIl9jcmVhdGUiLCJ1c2VyRHRvIiwiX3VzZXJEdG8kY29udGFjdCIsInBob25lTnVtYmVyIiwicGFzc3dvcmRIYXNoIiwidHJhbnNhY3Rpb24iLCJuZXdDb250YWN0IiwiY29tbWl0IiwiX29iamVjdFNwcmVhZCIsImlkIiwicm9sbGJhY2siLCJfZmluZEJ5RW1haWwiLCJfZmluZCIsInF1ZXJ5IiwiX2ZpbmRCeUlkIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJmaW5kQnlJZCIsIk5PVF9GT1VORCIsIl91cGRhdGUiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInVwZGF0ZSIsIl94NSIsIl94NiIsIl9kZWxldGUyIiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJkZWxldGUiLCJfeDciLCJfZmluZEJ5RW1haWxPclRocm93IiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJmaW5kQnlFbWFpbE9yVGhyb3ciLCJfeDgiLCJjb3JzIiwicmF0ZUxpbWl0IiwiYXBpUHJlZml4IiwiYmFzZVJlc3BvbnNlTWlkZGxld2FyZSIsImVycm9ySGFuZGxlck1pZGRsZXdhcmUiLCJhcHAiLCJ1c2UiLCJ3aW5kb3dNcyIsImxpbWl0Iiwic3RhbmRhcmRIZWFkZXJzIiwibGVnYWN5SGVhZGVycyIsInNldCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJkaXNhYmxlIiwiYmNyeXB0IiwiX2hhc2hQYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsIl9jb21wYXJlUGFzc3dvcmQiLCJwbGFpblRleHRQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwiY29tcGFyZSIsInNlY3JldCIsInRpbWUiLCJzaWduIiwiZXhwaXJlc0luIiwiYWxnb3JpdGhtIiwiZGVjb2RlZFRva2VuIiwiX3JlZiIsIl90b2tlbiRzcGxpdCIsIl90b2tlbiRzcGxpdDIiLCJzY2hlbWUiLCJhdXRoVG9rZW4iLCJCQURfUkVRVUVTVCIsInNwbGl0IiwiX3NsaWNlZFRvQXJyYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInZlcmlmeSIsImFsZ29yaXRobXMiLCJlcnIiLCJkZWNvZGVkIiwiT2JqZWN0IiwiYXNzaWduIiwidmFsaWRhdGUiLCJpc0VtYWlsIiwiU2VxdWVsaXplIiwiRGF0YWJhc2UiLCJpbnN0YW5jZSIsIkVycm9yIiwiZ2V0SW5zdGFuY2UiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJEQl9QQVNTV09SRCIsImhvc3QiLCJEQl9IT1NUIiwicG9ydCIsIkRCX1BPUlQiLCJkaWFsZWN0IiwiREJfRElBTEVDVCIsIl9jb25uZWN0IiwiX3NlcXVlbGl6ZSIsImF1dGhlbnRpY2F0ZSIsInN5bmMiLCJmb3JjZSIsImNvbm5lY3QiLCJfY2xvc2UiLCJjbG9zZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhdGgiLCJOT0RFX0VOViIsIm92ZXJyaWRlIiwiSldUX0FMR09SSVRITSIsIkpXVF9BQ0NFU1NfU0VDUkVUIiwiSldUX0FDQ0VTU19FWFBJUkVTX0lOIiwicmVmcmVzaFNlY3JldCIsIkpXVF9SRUZSRVNIX1NFQ1JFVCIsInJlZnJlc2hFeHBpcmVzSW4iLCJKV1RfUkVGUkVTSF9FWFBJUkVTX0lOIiwidmVyaWZpY2F0aW9uU2VjcmV0IiwiSldUX1ZFUklGSUNBVElPTl9TRUNSRVQiLCJ2ZXJpZmljYXRpb25FeHBpcmVzSW4iLCJKV1RfVkVSSUZJQ0FUSU9OX0VYUElSRVNfSU4iLCJzZWVkIiwicm9sZVNlZWRlciIsInVzZXJTZWVkZXIiLCJEaUNvbnRhaW5lciIsImRlcGVuZGVuY2llcyIsIm5hbWUiLCJmdW5jIiwiQXJyYXkiLCJpc0FycmF5IiwiX3RoaXMiLCJfdGhpcyRkZXBlbmRlbmNpZXMkbmEiLCJkZXBlbmRlbmNpZXNJbnN0YW5jZXMiLCJkZXBlbmRlbmN5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHJvcHMiLCJzdGF0dXNDb2RlIiwiZ2V0UmVhc29uUGhyYXNlIiwiZGV0YWlscyIsIl9yZWYkc3RhdHVzIiwiX3JlZjIiLCJfcmVmMiRzdGF0dXMiLCJfcmVmMiRkZXRhaWxzIiwiX0Vycm9yIiwiX3dyYXBOYXRpdmVTdXBlciIsInJldHVybmluZyIsImRlc3Ryb3kiLCJjb3VudCIsImJ1bGtDcmVhdGUiLCJ1cGRhdGVNYW55IiwiX3Vwc2VydCIsInJlY29yZCIsInVwc2VydCIsImNyZWF0ZVNlcnZlciIsInNlcnZlciIsIlBPUlQiLCJsaXN0ZW4iLCJleGl0Iiwib24iXSwic291cmNlUm9vdCI6IiJ9