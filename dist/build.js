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

/***/ "./src/api/author/author.controller.js":
/*!*********************************************!*\
  !*** ./src/api/author/author.controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorController: () => (/* binding */ AuthorController)
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
/* harmony import */ var _dto_author_dto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto/author.dto.js */ "./src/api/author/dto/author.dto.js");






var AuthorController = /*#__PURE__*/function () {
  function AuthorController(authorService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthorController);
    this.authorService = authorService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthorController, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(request, response) {
        var author;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.authorService.create(request.body);
            case 2:
              author = _context.sent;
              response.success({
                message: "Author created successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.CREATED,
                data: new _dto_author_dto_js__WEBPACK_IMPORTED_MODULE_5__.AuthorDto(author)
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(request, response) {
        var author;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.authorService.findAll();
            case 2:
              author = _context2.sent;
              response.success({
                message: "Author list successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: author.map(function (a) {
                  return new _dto_author_dto_js__WEBPACK_IMPORTED_MODULE_5__.AuthorDto(a);
                })
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findAll(_x3, _x4) {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(request, response) {
        var author;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.authorService.findById(request.params.authorId);
            case 2:
              author = _context3.sent;
              response.success({
                message: "Author find successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_author_dto_js__WEBPACK_IMPORTED_MODULE_5__.AuthorDto(author)
              });
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function findById(_x5, _x6) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(request, response) {
        var author;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.authorService.update(request.params.authorId, request.body);
            case 2:
              author = _context4.sent;
              response.success({
                message: "Author updated successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_author_dto_js__WEBPACK_IMPORTED_MODULE_5__.AuthorDto(author)
              });
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(request, response) {
        var author;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.authorService["delete"](request.params.authorId);
            case 2:
              author = _context5.sent;
              response.success({
                message: "Author deleted successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_author_dto_js__WEBPACK_IMPORTED_MODULE_5__.AuthorDto(author)
              });
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/author/author.di.js":
/*!*************************************!*\
  !*** ./src/api/author/author.di.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authorDIKeys: () => (/* binding */ authorDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _author_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./author.controller */ "./src/api/author/author.controller.js");
/* harmony import */ var _author_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author.repository */ "./src/api/author/author.repository.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./author.service */ "./src/api/author/author.service.js");




var authorDIKeys = {
  service: "author-service",
  repository: "author-repository",
  controller: "author-controller"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authorDIKeys.repository, [], function () {
  return new _author_repository__WEBPACK_IMPORTED_MODULE_2__.AuthorRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authorDIKeys.service, [authorDIKeys.repository], function (authorRepository) {
  return new _author_service__WEBPACK_IMPORTED_MODULE_3__.AuthorService(authorRepository);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(authorDIKeys.controller, [authorDIKeys.service], function (authorService) {
  return new _author_controller__WEBPACK_IMPORTED_MODULE_1__.AuthorController(authorService);
});

/***/ }),

/***/ "./src/api/author/author.repository.js":
/*!*********************************************!*\
  !*** ./src/api/author/author.repository.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorRepository: () => (/* binding */ AuthorRepository)
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
/* harmony import */ var _model_author_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/author.mode */ "./src/api/author/model/author.mode.js");





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var AuthorRepository = /*#__PURE__*/function (_BaseRepository) {
  function AuthorRepository() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthorRepository);
    return _callSuper(this, AuthorRepository, [_model_author_mode__WEBPACK_IMPORTED_MODULE_6__["default"]]);
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AuthorRepository, _BaseRepository);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(AuthorRepository);
}(_shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__.BaseRepository);

/***/ }),

/***/ "./src/api/author/author.route.js":
/*!****************************************!*\
  !*** ./src/api/author/author.route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _author_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author.di */ "./src/api/author/author.di.js");



var authorRouter = express__WEBPACK_IMPORTED_MODULE_1___default().Router();
var prefix = "/authors";
var authorController = _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.get(_author_di__WEBPACK_IMPORTED_MODULE_2__.authorDIKeys.controller);
authorRouter.post("".concat(prefix), function (req, res) {
  return authorController.create(req, res);
});
authorRouter.get("".concat(prefix), function (req, res) {
  return authorController.findAll(req, res);
});
authorRouter.get("".concat(prefix, "/:authorId"), function (req, res) {
  return authorController.findById(req, res);
});
authorRouter["delete"]("".concat(prefix, "/:authorId"), function (req, res) {
  return authorController["delete"](req, res);
});
authorRouter.patch("".concat(prefix, "/:authorId"), function (req, res) {
  return authorController.update(req, res);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authorRouter);

/***/ }),

/***/ "./src/api/author/author.service.js":
/*!******************************************!*\
  !*** ./src/api/author/author.service.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorService: () => (/* binding */ AuthorService)
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
/* harmony import */ var _core_response_base_response_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/response/base-response.js */ "./src/core/response/base-response.js");






var AuthorService = /*#__PURE__*/function () {
  function AuthorService(authorRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthorService);
    this.authorRepository = authorRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AuthorService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(createAuthorDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.authorRepository.create(createAuthorDto));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.authorRepository.findAll());
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findAll() {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(authorId) {
        var author;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.authorRepository.findById(authorId);
            case 2:
              author = _context3.sent;
              if (author) {
                _context3.next = 5;
                break;
              }
              throw _core_response_base_response_js__WEBPACK_IMPORTED_MODULE_5__.BaseResponse.error({
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.NOT_FOUND,
                message: "Author not found!"
              });
            case 5:
              return _context3.abrupt("return", author);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function findById(_x2) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(authorId, updateAuthorDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.findById(authorId);
            case 2:
              return _context4.abrupt("return", this.authorRepository.update(authorId, updateAuthorDto));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(authorId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.findById(authorId);
            case 2:
              return _context5.abrupt("return", this.authorRepository["delete"](authorId));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/author/dto/author.dto.js":
/*!******************************************!*\
  !*** ./src/api/author/dto/author.dto.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthorDto: () => (/* binding */ AuthorDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);


var AuthorDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function AuthorDto(_ref) {
  var id = _ref.id,
    name = _ref.name,
    biography = _ref.biography,
    dateOfBirth = _ref.dateOfBirth,
    nationality = _ref.nationality;
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AuthorDto);
  Object.assign(this, {
    id: id,
    name: name,
    biography: biography,
    dateOfBirth: dateOfBirth,
    nationality: nationality
  });
});

/***/ }),

/***/ "./src/api/author/model/author.mode.js":
/*!*********************************************!*\
  !*** ./src/api/author/model/author.mode.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/db.config */ "./src/core/config/db.config.js");


var Author = _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__.sequelize.define("Author", {
  name: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: false
  },
  biography: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.TEXT,
    allowNull: true
  },
  dateOfBirth: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.DATEONLY,
    allowNull: true
  },
  nationality: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true,
  tableName: "authors"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Author);

/***/ }),

/***/ "./src/api/genre/dto/genre.dto.js":
/*!****************************************!*\
  !*** ./src/api/genre/dto/genre.dto.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenreDto: () => (/* binding */ GenreDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);


var GenreDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function GenreDto(_ref) {
  var id = _ref.id,
    name = _ref.name;
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenreDto);
  Object.assign(this, {
    id: id,
    name: name
  });
});

/***/ }),

/***/ "./src/api/genre/genre.controller.js":
/*!*******************************************!*\
  !*** ./src/api/genre/genre.controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenreController: () => (/* binding */ GenreController)
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
/* harmony import */ var _dto_genre_dto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto/genre.dto.js */ "./src/api/genre/dto/genre.dto.js");






var GenreController = /*#__PURE__*/function () {
  function GenreController(genreService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenreController);
    this.genreService = genreService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GenreController, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(request, response) {
        var genre;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.genreService.create(request.body);
            case 2:
              genre = _context.sent;
              response.success({
                message: "Genre created successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.CREATED,
                data: new _dto_genre_dto_js__WEBPACK_IMPORTED_MODULE_5__.GenreDto(genre)
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(request, response) {
        var genre;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.genreService.findAll();
            case 2:
              genre = _context2.sent;
              response.success({
                message: "Genre list successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: genre.map(function (g) {
                  return new _dto_genre_dto_js__WEBPACK_IMPORTED_MODULE_5__.GenreDto(g);
                })
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findAll(_x3, _x4) {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(request, response) {
        var genre;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.genreService.findById(request.params.genreId);
            case 2:
              genre = _context3.sent;
              response.success({
                message: "Genre find successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_genre_dto_js__WEBPACK_IMPORTED_MODULE_5__.GenreDto(genre)
              });
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function findById(_x5, _x6) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(request, response) {
        var genre;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.genreService.update(request.params.genreId, request.body);
            case 2:
              genre = _context4.sent;
              response.success({
                message: "Genre updated successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_genre_dto_js__WEBPACK_IMPORTED_MODULE_5__.GenreDto(genre)
              });
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(request, response) {
        var genre;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.genreService["delete"](request.params.genreId);
            case 2:
              genre = _context5.sent;
              response.success({
                message: "Genre deleted successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_genre_dto_js__WEBPACK_IMPORTED_MODULE_5__.GenreDto(genre)
              });
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/genre/genre.di.js":
/*!***********************************!*\
  !*** ./src/api/genre/genre.di.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   genreDIKeys: () => (/* binding */ genreDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _genre_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genre.controller */ "./src/api/genre/genre.controller.js");
/* harmony import */ var _genre_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genre.repository */ "./src/api/genre/genre.repository.js");
/* harmony import */ var _genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genre.service */ "./src/api/genre/genre.service.js");




var genreDIKeys = {
  service: "genre-service",
  repository: "genre-repository",
  controller: "genre-controller"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(genreDIKeys.repository, [], function () {
  return new _genre_repository__WEBPACK_IMPORTED_MODULE_2__.GenreRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(genreDIKeys.service, [genreDIKeys.repository], function (genreRepository) {
  return new _genre_service__WEBPACK_IMPORTED_MODULE_3__.GenreService(genreRepository);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(genreDIKeys.controller, [genreDIKeys.service], function (genreService) {
  return new _genre_controller__WEBPACK_IMPORTED_MODULE_1__.GenreController(genreService);
});

/***/ }),

/***/ "./src/api/genre/genre.repository.js":
/*!*******************************************!*\
  !*** ./src/api/genre/genre.repository.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenreRepository: () => (/* binding */ GenreRepository)
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
/* harmony import */ var _model_genre_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/genre.mode */ "./src/api/genre/model/genre.mode.js");





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var GenreRepository = /*#__PURE__*/function (_BaseRepository) {
  function GenreRepository() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenreRepository);
    return _callSuper(this, GenreRepository, [_model_genre_mode__WEBPACK_IMPORTED_MODULE_6__["default"]]);
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(GenreRepository, _BaseRepository);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(GenreRepository);
}(_shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__.BaseRepository);

/***/ }),

/***/ "./src/api/genre/genre.route.js":
/*!**************************************!*\
  !*** ./src/api/genre/genre.route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _genre_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genre.di */ "./src/api/genre/genre.di.js");



var genreRouter = express__WEBPACK_IMPORTED_MODULE_1___default().Router();
var prefix = "/genres";
var genreController = _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.get(_genre_di__WEBPACK_IMPORTED_MODULE_2__.genreDIKeys.controller);
genreRouter.post("".concat(prefix), function (req, res) {
  return genreController.create(req, res);
});
genreRouter.get("".concat(prefix), function (req, res) {
  return genreController.findAll(req, res);
});
genreRouter.get("".concat(prefix, "/:genreId"), function (req, res) {
  return genreController.findById(req, res);
});
genreRouter["delete"]("".concat(prefix, "/:genreId"), function (req, res) {
  return genreController["delete"](req, res);
});
genreRouter.patch("".concat(prefix, "/:genreId"), function (req, res) {
  return genreController.update(req, res);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genreRouter);

/***/ }),

/***/ "./src/api/genre/genre.service.js":
/*!****************************************!*\
  !*** ./src/api/genre/genre.service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenreService: () => (/* binding */ GenreService)
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
/* harmony import */ var _core_response_base_response_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/response/base-response.js */ "./src/core/response/base-response.js");






var GenreService = /*#__PURE__*/function () {
  function GenreService(genreRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenreService);
    this.genreRepository = genreRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GenreService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(createGenreDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.genreRepository.create(createGenreDto));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.genreRepository.findAll());
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findAll() {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(genreId) {
        var genre;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.genreRepository.findById(genreId);
            case 2:
              genre = _context3.sent;
              if (genre) {
                _context3.next = 5;
                break;
              }
              throw _core_response_base_response_js__WEBPACK_IMPORTED_MODULE_5__.BaseResponse.error({
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.NOT_FOUND,
                message: "Genre not found!"
              });
            case 5:
              return _context3.abrupt("return", genre);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function findById(_x2) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(genreId, updateGenreDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.findById(genreId);
            case 2:
              return _context4.abrupt("return", this.genreRepository.update(genreId, updateGenreDto));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(genreId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.findById(genreId);
            case 2:
              return _context5.abrupt("return", this.genreRepository["delete"](genreId));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/genre/model/genre.mode.js":
/*!*******************************************!*\
  !*** ./src/api/genre/model/genre.mode.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/db.config */ "./src/core/config/db.config.js");


var Genre = _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__.sequelize.define("Genre", {
  name: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: "genres"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Genre);

/***/ }),

/***/ "./src/api/publisher/dto/publisher.dto.js":
/*!************************************************!*\
  !*** ./src/api/publisher/dto/publisher.dto.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublisherDto: () => (/* binding */ PublisherDto)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);


var PublisherDto = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(function PublisherDto(_ref) {
  var id = _ref.id,
    name = _ref.name;
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PublisherDto);
  Object.assign(this, {
    id: id,
    name: name
  });
});

/***/ }),

/***/ "./src/api/publisher/model/publisher.mode.js":
/*!***************************************************!*\
  !*** ./src/api/publisher/model/publisher.mode.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ "sequelize");
/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/db.config */ "./src/core/config/db.config.js");


var Publisher = _core_config_db_config__WEBPACK_IMPORTED_MODULE_1__.sequelize.define("Publisher", {
  name: {
    type: sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: "publishers"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Publisher);

/***/ }),

/***/ "./src/api/publisher/publisher.controller.js":
/*!***************************************************!*\
  !*** ./src/api/publisher/publisher.controller.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publisherController: () => (/* binding */ publisherController)
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
/* harmony import */ var _dto_publisher_dto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto/publisher.dto.js */ "./src/api/publisher/dto/publisher.dto.js");






var publisherController = /*#__PURE__*/function () {
  function publisherController(publisherService) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, publisherController);
    this.publisherService = publisherService;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(publisherController, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(request, response) {
        var publisher;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.publisherService.create(request.body);
            case 2:
              publisher = _context.sent;
              response.success({
                message: "Publisher created successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.CREATED,
                data: new _dto_publisher_dto_js__WEBPACK_IMPORTED_MODULE_5__.PublisherDto(publisher)
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(request, response) {
        var publisher;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.publisherService.findAll();
            case 2:
              publisher = _context2.sent;
              response.success({
                message: "Publisher list successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: publisher.map(function (g) {
                  return new _dto_publisher_dto_js__WEBPACK_IMPORTED_MODULE_5__.PublisherDto(g);
                })
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findAll(_x3, _x4) {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(request, response) {
        var publisher;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.publisherService.findById(request.params.publisherId);
            case 2:
              publisher = _context3.sent;
              response.success({
                message: "Publisher find successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_publisher_dto_js__WEBPACK_IMPORTED_MODULE_5__.PublisherDto(publisher)
              });
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function findById(_x5, _x6) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(request, response) {
        var publisher;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.publisherService.update(request.params.publisherId, request.body);
            case 2:
              publisher = _context4.sent;
              response.success({
                message: "Publisher updated successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_publisher_dto_js__WEBPACK_IMPORTED_MODULE_5__.PublisherDto(publisher)
              });
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x7, _x8) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(request, response) {
        var publisher;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.publisherService["delete"](request.params.publisherId);
            case 2:
              publisher = _context5.sent;
              response.success({
                message: "publisher deleted successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_publisher_dto_js__WEBPACK_IMPORTED_MODULE_5__.PublisherDto(publisher)
              });
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
}();

/***/ }),

/***/ "./src/api/publisher/publisher.di.js":
/*!*******************************************!*\
  !*** ./src/api/publisher/publisher.di.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publisherDIKeys: () => (/* binding */ publisherDIKeys)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var _publisher_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publisher.controller */ "./src/api/publisher/publisher.controller.js");
/* harmony import */ var _publisher_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher.repository */ "./src/api/publisher/publisher.repository.js");
/* harmony import */ var _publisher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publisher.service */ "./src/api/publisher/publisher.service.js");




var publisherDIKeys = {
  service: "publisher-service",
  repository: "publisher-repository",
  controller: "publisher-controller"
};
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(publisherDIKeys.repository, [], function () {
  return new _publisher_repository__WEBPACK_IMPORTED_MODULE_2__.PublisherRepository();
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(publisherDIKeys.service, [publisherDIKeys.repository], function (publisherRepository) {
  return new _publisher_service__WEBPACK_IMPORTED_MODULE_3__.PublisherService(publisherRepository);
});
_core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.register(publisherDIKeys.controller, [publisherDIKeys.service], function (publisherService) {
  return new _publisher_controller__WEBPACK_IMPORTED_MODULE_1__.publisherController(publisherService);
});

/***/ }),

/***/ "./src/api/publisher/publisher.repository.js":
/*!***************************************************!*\
  !*** ./src/api/publisher/publisher.repository.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublisherRepository: () => (/* binding */ PublisherRepository)
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
/* harmony import */ var _model_publisher_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/publisher.mode */ "./src/api/publisher/model/publisher.mode.js");





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var PublisherRepository = /*#__PURE__*/function (_BaseRepository) {
  function PublisherRepository() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PublisherRepository);
    return _callSuper(this, PublisherRepository, [_model_publisher_mode__WEBPACK_IMPORTED_MODULE_6__["default"]]);
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PublisherRepository, _BaseRepository);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(PublisherRepository);
}(_shared_repository_base_repository__WEBPACK_IMPORTED_MODULE_5__.BaseRepository);

/***/ }),

/***/ "./src/api/publisher/publisher.route.js":
/*!**********************************************!*\
  !*** ./src/api/publisher/publisher.route.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/di/di-container */ "./src/core/di/di-container.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _publisher_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publisher.di */ "./src/api/publisher/publisher.di.js");



var publisherRouter = express__WEBPACK_IMPORTED_MODULE_1___default().Router();
var prefix = "/publishers";
var publisherController = _core_di_di_container__WEBPACK_IMPORTED_MODULE_0__.container.get(_publisher_di__WEBPACK_IMPORTED_MODULE_2__.publisherDIKeys.controller);
publisherRouter.post("".concat(prefix), function (req, res) {
  return publisherController.create(req, res);
});
publisherRouter.get("".concat(prefix), function (req, res) {
  return publisherController.findAll(req, res);
});
publisherRouter.get("".concat(prefix, "/:publisherId"), function (req, res) {
  return publisherController.findById(req, res);
});
publisherRouter["delete"]("".concat(prefix, "/:publisherId"), function (req, res) {
  return publisherController["delete"](req, res);
});
publisherRouter.patch("".concat(prefix, "/:publisherId"), function (req, res) {
  return publisherController.update(req, res);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publisherRouter);

/***/ }),

/***/ "./src/api/publisher/publisher.service.js":
/*!************************************************!*\
  !*** ./src/api/publisher/publisher.service.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublisherService: () => (/* binding */ PublisherService)
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
/* harmony import */ var _core_response_base_response_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/response/base-response.js */ "./src/core/response/base-response.js");






var PublisherService = /*#__PURE__*/function () {
  function PublisherService(publisherRepository) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PublisherService);
    this.publisherRepository = publisherRepository;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PublisherService, [{
    key: "create",
    value: function () {
      var _create = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(createPublisherDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.publisherRepository.create(createPublisherDto));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function create(_x) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findAll",
    value: function () {
      var _findAll = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.publisherRepository.findAll());
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findAll() {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(publisherId) {
        var publisher;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.publisherRepository.findById(publisherId);
            case 2:
              publisher = _context3.sent;
              if (publisher) {
                _context3.next = 5;
                break;
              }
              throw _core_response_base_response_js__WEBPACK_IMPORTED_MODULE_5__.BaseResponse.error({
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.NOT_FOUND,
                message: "Publisher not found!"
              });
            case 5:
              return _context3.abrupt("return", publisher);
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function findById(_x2) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4(publisherId, updatePublisherDto) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.findById(publisherId);
            case 2:
              return _context4.abrupt("return", this.publisherRepository.update(publisherId, updatePublisherDto));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5(publisherId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.findById(publisherId);
            case 2:
              return _context5.abrupt("return", this.publisherRepository["delete"](publisherId));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _delete(_x5) {
        return _delete2.apply(this, arguments);
      }
      return _delete;
    }()
  }]);
}();

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
/* harmony import */ var _api_author_author_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/author/author.route */ "./src/api/author/author.route.js");
/* harmony import */ var _api_genre_genre_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/genre/genre.route */ "./src/api/genre/genre.route.js");
/* harmony import */ var _api_publisher_publisher_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/publisher/publisher.route */ "./src/api/publisher/publisher.route.js");
/* harmony import */ var _common_constant_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/constant/api */ "./src/common/constant/api.js");
/* harmony import */ var _core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/middleware/base-response.middleware */ "./src/core/middleware/base-response.middleware.js");
/* harmony import */ var _core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/middleware/error-handler-middleware */ "./src/core/middleware/error-handler-middleware.js");











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
app.use(_core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_8__.apiPrefix, _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_8__.apiPrefix, _api_author_author_route__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_8__.apiPrefix, _api_genre_genre_route__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_8__.apiPrefix, _api_publisher_publisher_route__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.use(_core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_10__["default"]);
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
/* harmony import */ var _api_author_author_di__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/author/author.di */ "./src/api/author/author.di.js");
/* harmony import */ var _api_genre_genre_di__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/genre/genre.di */ "./src/api/genre/genre.di.js");
/* harmony import */ var _api_publisher_publisher_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/publisher/publisher.di */ "./src/api/publisher/publisher.di.js");






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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);





var BaseRepository = /*#__PURE__*/function () {
  function BaseRepository(model) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BaseRepository);
    this.model = model;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BaseRepository, [{
    key: "create",
    value: function create(data) {
      return this.model.create(data);
    }
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(id, data) {
        var _yield$this$model$upd, _yield$this$model$upd2, updatedAuthor;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.model.update(data, {
                where: {
                  id: id
                },
                returning: true
              });
            case 2:
              _yield$this$model$upd = _context.sent;
              _yield$this$model$upd2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_yield$this$model$upd, 2);
              updatedAuthor = _yield$this$model$upd2[1];
              return _context.abrupt("return", updatedAuthor[0]);
            case 6:
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
      var _upsert = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(query, data) {
        var record;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBakIsSUFBQTtjQUFBO2dCQUFBaUIsU0FBQSxDQUFBakIsSUFBQTtnQkFBQSxPQUNkbVIsNERBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDO2NBQUE7Z0JBQUU7Z0JBQ3hCbkIsT0FBTyxDQUFDeUUsSUFBSSxDQUFDLENBQUMsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQWhWLFNBQUEsQ0FBQVQsSUFBQTtZQUFBO1VBQUEsR0FBQU0sUUFBQTtRQUFBLENBQ2pCLEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQWdFLFNBQUEsQ0FBQXRFLElBQUE7SUFBQTtFQUFBLEdBQUFnRSxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2F1dGgucm91dGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2R0by9hdXRoLmR0by5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aG9yL2F1dGhvci5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvYXV0aG9yLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvYXV0aG9yLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGhvci9hdXRob3Iucm91dGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGhvci9hdXRob3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aG9yL2R0by9hdXRob3IuZHRvLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvbW9kZWwvYXV0aG9yLm1vZGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2dlbnJlL2R0by9nZW5yZS5kdG8uanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2dlbnJlL2dlbnJlLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2dlbnJlL2dlbnJlLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9nZW5yZS9nZW5yZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9nZW5yZS9nZW5yZS5yb3V0ZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvZ2VucmUvZ2VucmUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvZ2VucmUvbW9kZWwvZ2VucmUubW9kZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcHVibGlzaGVyL2R0by9wdWJsaXNoZXIuZHRvLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9wdWJsaXNoZXIvbW9kZWwvcHVibGlzaGVyLm1vZGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3B1Ymxpc2hlci9wdWJsaXNoZXIuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcHVibGlzaGVyL3B1Ymxpc2hlci5kaS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcHVibGlzaGVyL3B1Ymxpc2hlci5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9wdWJsaXNoZXIvcHVibGlzaGVyLnJvdXRlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9wdWJsaXNoZXIvcHVibGlzaGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvbW9kZWwvcm9sZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci9kdG8vdXNlci5kdG8uanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvdXNlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS91c2VyL3VzZXIucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudC9hcGkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29tbW9uL2NvbnN0YW50L3JvbGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29tbW9uL2hlbHBlci9oYXNoLXBhc3N3b3JkLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9oZWxwZXIvand0LXRva2VuLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9jb25maWcvZGIuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2Vudi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9jb25maWcvand0LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2RiL3NlZWQuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9kaS9kaS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9kaS9kaS1nbG9iYWxzLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXItbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXJhdGUtbGltaXRcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImh0dHAtc3RhdHVzLWNvZGVzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQXV0aER0byB9IGZyb20gXCIuL2R0by9hdXRoLmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZSkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIHJlZ2lzdGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIocmVxdWVzdC5ib2R5KTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bC4gUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsLlwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DUkVBVEVELFxuICAgICAgZGF0YTogbmV3IEF1dGhEdG8oZGF0YSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBsb2dpbihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHJlcXVlc3QuYm9keSk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiVXNlciBMb2dpbiBzdWNjZXNzZnVsXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEF1dGhEdG8odXNlciksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IHVzZXJESUtleXMgfSBmcm9tIFwiLi4vdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gXCIuL2F1dGguY29udHJvbGxlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhESUtleXMgPSB7XG4gIGNvbnRyb2xsZXI6IFwiYXV0aC1jb250cm9sbGVyXCIsXG4gIHNlcnZpY2U6IFwiYXV0aC1zZXJ2aWNlXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhESUtleXMuc2VydmljZSxcbiAgW3VzZXJESUtleXMuc2VydmljZV0sXG4gICh1c2VyU2VydmljZSkgPT4gbmV3IEF1dGhTZXJ2aWNlKHVzZXJTZXJ2aWNlKSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgYXV0aERJS2V5cy5jb250cm9sbGVyLFxuICBbYXV0aERJS2V5cy5zZXJ2aWNlXSxcbiAgKGF1dGhTZXJ2aWNlKSA9PiBuZXcgQXV0aENvbnRyb2xsZXIoYXV0aFNlcnZpY2UpLFxuKTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBhdXRoRElLZXlzIH0gZnJvbSBcIi4vYXV0aC5kaVwiO1xuXG5jb25zdCBhdXRoUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY29uc3QgcHJlZml4ID0gXCIvYXV0aFwiO1xuXG5jb25zdCBhdXRoQ29udHJvbGxlciA9IGNvbnRhaW5lci5nZXQoYXV0aERJS2V5cy5jb250cm9sbGVyKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vbG9naW5gLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLmxvZ2luKHJlcSwgcmVzKSxcbik7XG5cbmF1dGhSb3V0ZXIucG9zdChgJHtwcmVmaXh9L3JlZ2lzdGVyYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRoQ29udHJvbGxlci5yZWdpc3RlcihyZXEsIHJlcyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoUm91dGVyO1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkAvY29yZS9jb25maWcvand0LmNvbmZpZ1wiO1xuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBjb21wYXJlUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2hlbHBlci9oYXNoLXBhc3N3b3JkXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9oZWxwZXIvand0LXRva2VuXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vLi4vY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXIoYXV0aFJlZ2lzdGVyRHRvKSB7XG4gICAgY29uc3QgeyBmdWxsTmFtZSB9ID0gYXV0aFJlZ2lzdGVyRHRvO1xuXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gYXV0aFJlZ2lzdGVyRHRvLmNvbnRhY3Q7XG4gICAgY29uc29sZS5sb2coYXV0aFJlZ2lzdGVyRHRvKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyBmdWxsTmFtZSwgY29udGFjdDogeyBlbWFpbCB9IH0sXG4gICAgICBpbmNsdWRlOiBbQ29udGFjdF0sXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICB0aHJvdyBuZXcgQVBJRXJyb3IoXG4gICAgICAgIGBBIHVzZXIgd2l0aCB0aGUgbmFtZSBcIiR7ZnVsbE5hbWV9XCIgYW5kIGVtYWlsIFwiJHtlbWFpbH1cIiBhbHJlYWR5IGV4aXN0cy5gLFxuICAgICAgICBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXV0aFJlZ2lzdGVyRHRvLnJvbGUgPSAyO1xuXG4gICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5jcmVhdGUoYXV0aFJlZ2lzdGVyRHRvKTtcblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBzdWI6IHNhdmVkVXNlci5faWQsXG4gICAgICBlbWFpbDogc2F2ZWRVc2VyLmVtYWlsLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuY3JlYXRlVG9rZW4ocGF5bG9hZCk7XG5cbiAgICByZXR1cm4geyB1c2VyOiBzYXZlZFVzZXIsIHRva2VuIH07XG4gIH1cblxuICBhc3luYyBsb2dpbihhdXRobG9naW5EdG8pIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXV0aGxvZ2luRHRvO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kQnlFbWFpbChlbWFpbCk7XG5cbiAgICBpZiAoXG4gICAgICAhZXhpc3RpbmdVc2VyIHx8XG4gICAgICAhKGF3YWl0IGNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgZXhpc3RpbmdVc2VyLnBhc3N3b3JkKSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIkVtYWlsIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5VTkFVVEhPUklaRUQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgc3ViOiBleGlzdGluZ1VzZXIuX2lkLFxuICAgICAgZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5jcmVhdGVUb2tlbihwYXlsb2FkKTtcblxuICAgIHJldHVybiB7IHVzZXI6IGV4aXN0aW5nVXNlciwgdG9rZW4gfTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVRva2VuKHBheWxvYWQpIHtcbiAgICBjb25zdCB7IGFjY2Vzc1NlY3JldCwgYWNjZXNzRXhwaXJlc0luIH0gPSBjb25maWcuand0O1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZVRva2VuKFxuICAgICAgcGF5bG9hZCxcbiAgICAgIGFjY2Vzc1NlY3JldCxcbiAgICAgIGFjY2Vzc0V4cGlyZXNJbixcbiAgICApO1xuXG4gICAgcmV0dXJuIHsgYWNjZXNzVG9rZW4gfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlckR0byB9IGZyb20gXCJAL2FwaS91c2VyL2R0by91c2VyLmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aER0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnRva2VuID0gZGF0YS50b2tlbi5hY2Nlc3MgfHwgbnVsbDtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckR0byhkYXRhLnVzZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBBdXRob3JEdG8gfSBmcm9tIFwiLi9kdG8vYXV0aG9yLmR0by5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG9yQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGF1dGhvclNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGhvclNlcnZpY2UgPSBhdXRob3JTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgdGhpcy5hdXRob3JTZXJ2aWNlLmNyZWF0ZShyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkF1dGhvciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DUkVBVEVELFxuICAgICAgZGF0YTogbmV3IEF1dGhvckR0byhhdXRob3IpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZmluZEFsbChyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IHRoaXMuYXV0aG9yU2VydmljZS5maW5kQWxsKCk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiQXV0aG9yIGxpc3Qgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogYXV0aG9yLm1hcCgoYSkgPT4gbmV3IEF1dGhvckR0byhhKSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IHRoaXMuYXV0aG9yU2VydmljZS5maW5kQnlJZChyZXF1ZXN0LnBhcmFtcy5hdXRob3JJZCk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiQXV0aG9yIGZpbmQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEF1dGhvckR0byhhdXRob3IpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgdGhpcy5hdXRob3JTZXJ2aWNlLnVwZGF0ZShcbiAgICAgIHJlcXVlc3QucGFyYW1zLmF1dGhvcklkLFxuICAgICAgcmVxdWVzdC5ib2R5LFxuICAgICk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiQXV0aG9yIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEF1dGhvckR0byhhdXRob3IpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgdGhpcy5hdXRob3JTZXJ2aWNlLmRlbGV0ZShyZXF1ZXN0LnBhcmFtcy5hdXRob3JJZCk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiQXV0aG9yIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEF1dGhvckR0byhhdXRob3IpLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBBdXRob3JDb250cm9sbGVyIH0gZnJvbSBcIi4vYXV0aG9yLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEF1dGhvclJlcG9zaXRvcnkgfSBmcm9tIFwiLi9hdXRob3IucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgQXV0aG9yU2VydmljZSB9IGZyb20gXCIuL2F1dGhvci5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRob3JESUtleXMgPSB7XG4gIHNlcnZpY2U6IFwiYXV0aG9yLXNlcnZpY2VcIixcbiAgcmVwb3NpdG9yeTogXCJhdXRob3ItcmVwb3NpdG9yeVwiLFxuICBjb250cm9sbGVyOiBcImF1dGhvci1jb250cm9sbGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIoYXV0aG9yRElLZXlzLnJlcG9zaXRvcnksIFtdLCAoKSA9PiBuZXcgQXV0aG9yUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBhdXRob3JESUtleXMuc2VydmljZSxcbiAgW2F1dGhvckRJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKGF1dGhvclJlcG9zaXRvcnkpID0+IG5ldyBBdXRob3JTZXJ2aWNlKGF1dGhvclJlcG9zaXRvcnkpLFxuKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBhdXRob3JESUtleXMuY29udHJvbGxlcixcbiAgW2F1dGhvckRJS2V5cy5zZXJ2aWNlXSxcbiAgKGF1dGhvclNlcnZpY2UpID0+IG5ldyBBdXRob3JDb250cm9sbGVyKGF1dGhvclNlcnZpY2UpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vbW9kZWwvYXV0aG9yLm1vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhvclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEF1dGhvcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBhdXRob3JESUtleXMgfSBmcm9tIFwiLi9hdXRob3IuZGlcIjtcblxuY29uc3QgYXV0aG9yUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY29uc3QgcHJlZml4ID0gXCIvYXV0aG9yc1wiO1xuXG5jb25zdCBhdXRob3JDb250cm9sbGVyID0gY29udGFpbmVyLmdldChhdXRob3JESUtleXMuY29udHJvbGxlcik7XG5cbmF1dGhvclJvdXRlci5wb3N0KGAke3ByZWZpeH1gLCAocmVxLCByZXMpID0+IGF1dGhvckNvbnRyb2xsZXIuY3JlYXRlKHJlcSwgcmVzKSk7XG5cbmF1dGhvclJvdXRlci5nZXQoYCR7cHJlZml4fWAsIChyZXEsIHJlcykgPT4gYXV0aG9yQ29udHJvbGxlci5maW5kQWxsKHJlcSwgcmVzKSk7XG5cbmF1dGhvclJvdXRlci5nZXQoYCR7cHJlZml4fS86YXV0aG9ySWRgLCAocmVxLCByZXMpID0+XG4gIGF1dGhvckNvbnRyb2xsZXIuZmluZEJ5SWQocmVxLCByZXMpLFxuKTtcblxuYXV0aG9yUm91dGVyLmRlbGV0ZShgJHtwcmVmaXh9LzphdXRob3JJZGAsIChyZXEsIHJlcykgPT5cbiAgYXV0aG9yQ29udHJvbGxlci5kZWxldGUocmVxLCByZXMpLFxuKTtcbmF1dGhvclJvdXRlci5wYXRjaChgJHtwcmVmaXh9LzphdXRob3JJZGAsIChyZXEsIHJlcykgPT5cbiAgYXV0aG9yQ29udHJvbGxlci51cGRhdGUocmVxLCByZXMpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aG9yUm91dGVyO1xuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG9yU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGF1dGhvclJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLmF1dGhvclJlcG9zaXRvcnkgPSBhdXRob3JSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGNyZWF0ZUF1dGhvckR0bykge1xuICAgIHJldHVybiB0aGlzLmF1dGhvclJlcG9zaXRvcnkuY3JlYXRlKGNyZWF0ZUF1dGhvckR0byk7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsKCkge1xuICAgIHJldHVybiB0aGlzLmF1dGhvclJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoYXV0aG9ySWQpIHtcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCB0aGlzLmF1dGhvclJlcG9zaXRvcnkuZmluZEJ5SWQoYXV0aG9ySWQpO1xuXG4gICAgaWYgKCFhdXRob3IpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIkF1dGhvciBub3QgZm91bmQhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXV0aG9yO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGF1dGhvcklkLCB1cGRhdGVBdXRob3JEdG8pIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGF1dGhvcklkKTtcblxuICAgIHJldHVybiB0aGlzLmF1dGhvclJlcG9zaXRvcnkudXBkYXRlKGF1dGhvcklkLCB1cGRhdGVBdXRob3JEdG8pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGF1dGhvcklkKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChhdXRob3JJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5hdXRob3JSZXBvc2l0b3J5LmRlbGV0ZShhdXRob3JJZCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBdXRob3JEdG8ge1xuICBjb25zdHJ1Y3Rvcih7IGlkLCBuYW1lLCBiaW9ncmFwaHksIGRhdGVPZkJpcnRoLCBuYXRpb25hbGl0eSB9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBiaW9ncmFwaHksXG4gICAgICBkYXRlT2ZCaXJ0aCxcbiAgICAgIG5hdGlvbmFsaXR5LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmltcG9ydCB7IHNlcXVlbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3QgQXV0aG9yID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJBdXRob3JcIixcbiAge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgYmlvZ3JhcGh5OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuVEVYVCxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICAgIGRhdGVPZkJpcnRoOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURU9OTFksXG4gICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgfSxcbiAgICBuYXRpb25hbGl0eToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICB0YWJsZU5hbWU6IFwiYXV0aG9yc1wiLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yO1xuIiwiZXhwb3J0IGNsYXNzIEdlbnJlRHRvIHtcbiAgY29uc3RydWN0b3IoeyBpZCwgbmFtZSB9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEdlbnJlRHRvIH0gZnJvbSBcIi4vZHRvL2dlbnJlLmR0by5qc1wiO1xuXG5leHBvcnQgY2xhc3MgR2VucmVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoZ2VucmVTZXJ2aWNlKSB7XG4gICAgdGhpcy5nZW5yZVNlcnZpY2UgPSBnZW5yZVNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IHRoaXMuZ2VucmVTZXJ2aWNlLmNyZWF0ZShyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkdlbnJlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkNSRUFURUQsXG4gICAgICBkYXRhOiBuZXcgR2VucmVEdG8oZ2VucmUpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZmluZEFsbChyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGdlbnJlID0gYXdhaXQgdGhpcy5nZW5yZVNlcnZpY2UuZmluZEFsbCgpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkdlbnJlIGxpc3Qgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogZ2VucmUubWFwKChnKSA9PiBuZXcgR2VucmVEdG8oZykpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IHRoaXMuZ2VucmVTZXJ2aWNlLmZpbmRCeUlkKHJlcXVlc3QucGFyYW1zLmdlbnJlSWQpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkdlbnJlIGZpbmQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEdlbnJlRHRvKGdlbnJlKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGdlbnJlID0gYXdhaXQgdGhpcy5nZW5yZVNlcnZpY2UudXBkYXRlKFxuICAgICAgcmVxdWVzdC5wYXJhbXMuZ2VucmVJZCxcbiAgICAgIHJlcXVlc3QuYm9keSxcbiAgICApO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkdlbnJlIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEdlbnJlRHRvKGdlbnJlKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZShyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGdlbnJlID0gYXdhaXQgdGhpcy5nZW5yZVNlcnZpY2UuZGVsZXRlKHJlcXVlc3QucGFyYW1zLmdlbnJlSWQpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkdlbnJlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEdlbnJlRHRvKGdlbnJlKSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgR2VucmVDb250cm9sbGVyIH0gZnJvbSBcIi4vZ2VucmUuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgR2VucmVSZXBvc2l0b3J5IH0gZnJvbSBcIi4vZ2VucmUucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgR2VucmVTZXJ2aWNlIH0gZnJvbSBcIi4vZ2VucmUuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgZ2VucmVESUtleXMgPSB7XG4gIHNlcnZpY2U6IFwiZ2VucmUtc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcImdlbnJlLXJlcG9zaXRvcnlcIixcbiAgY29udHJvbGxlcjogXCJnZW5yZS1jb250cm9sbGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIoZ2VucmVESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBHZW5yZVJlcG9zaXRvcnkoKSk7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZ2VucmVESUtleXMuc2VydmljZSxcbiAgW2dlbnJlRElLZXlzLnJlcG9zaXRvcnldLFxuICAoZ2VucmVSZXBvc2l0b3J5KSA9PiBuZXcgR2VucmVTZXJ2aWNlKGdlbnJlUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGdlbnJlRElLZXlzLmNvbnRyb2xsZXIsXG4gIFtnZW5yZURJS2V5cy5zZXJ2aWNlXSxcbiAgKGdlbnJlU2VydmljZSkgPT4gbmV3IEdlbnJlQ29udHJvbGxlcihnZW5yZVNlcnZpY2UpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBHZW5yZSBmcm9tIFwiLi9tb2RlbC9nZW5yZS5tb2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBHZW5yZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKEdlbnJlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGdlbnJlRElLZXlzIH0gZnJvbSBcIi4vZ2VucmUuZGlcIjtcblxuY29uc3QgZ2VucmVSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBwcmVmaXggPSBcIi9nZW5yZXNcIjtcblxuY29uc3QgZ2VucmVDb250cm9sbGVyID0gY29udGFpbmVyLmdldChnZW5yZURJS2V5cy5jb250cm9sbGVyKTtcblxuZ2VucmVSb3V0ZXIucG9zdChgJHtwcmVmaXh9YCwgKHJlcSwgcmVzKSA9PiBnZW5yZUNvbnRyb2xsZXIuY3JlYXRlKHJlcSwgcmVzKSk7XG5cbmdlbnJlUm91dGVyLmdldChgJHtwcmVmaXh9YCwgKHJlcSwgcmVzKSA9PiBnZW5yZUNvbnRyb2xsZXIuZmluZEFsbChyZXEsIHJlcykpO1xuXG5nZW5yZVJvdXRlci5nZXQoYCR7cHJlZml4fS86Z2VucmVJZGAsIChyZXEsIHJlcykgPT5cbiAgZ2VucmVDb250cm9sbGVyLmZpbmRCeUlkKHJlcSwgcmVzKSxcbik7XG5cbmdlbnJlUm91dGVyLmRlbGV0ZShgJHtwcmVmaXh9LzpnZW5yZUlkYCwgKHJlcSwgcmVzKSA9PlxuICBnZW5yZUNvbnRyb2xsZXIuZGVsZXRlKHJlcSwgcmVzKSxcbik7XG5nZW5yZVJvdXRlci5wYXRjaChgJHtwcmVmaXh9LzpnZW5yZUlkYCwgKHJlcSwgcmVzKSA9PlxuICBnZW5yZUNvbnRyb2xsZXIudXBkYXRlKHJlcSwgcmVzKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGdlbnJlUm91dGVyO1xuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgR2VucmVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoZ2VucmVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5nZW5yZVJlcG9zaXRvcnkgPSBnZW5yZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGUoY3JlYXRlR2VucmVEdG8pIHtcbiAgICByZXR1cm4gdGhpcy5nZW5yZVJlcG9zaXRvcnkuY3JlYXRlKGNyZWF0ZUdlbnJlRHRvKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2VucmVSZXBvc2l0b3J5LmZpbmRBbGwoKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGdlbnJlSWQpIHtcbiAgICBjb25zdCBnZW5yZSA9IGF3YWl0IHRoaXMuZ2VucmVSZXBvc2l0b3J5LmZpbmRCeUlkKGdlbnJlSWQpO1xuXG4gICAgaWYgKCFnZW5yZSkge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICAgIG1lc3NhZ2U6IFwiR2VucmUgbm90IGZvdW5kIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdlbnJlO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGdlbnJlSWQsIHVwZGF0ZUdlbnJlRHRvKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChnZW5yZUlkKTtcblxuICAgIHJldHVybiB0aGlzLmdlbnJlUmVwb3NpdG9yeS51cGRhdGUoZ2VucmVJZCwgdXBkYXRlR2VucmVEdG8pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGdlbnJlSWQpIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGdlbnJlSWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2VucmVSZXBvc2l0b3J5LmRlbGV0ZShnZW5yZUlkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmNvbnN0IEdlbnJlID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJHZW5yZVwiLFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgdGFibGVOYW1lOiBcImdlbnJlc1wiLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgR2VucmU7XG4iLCJleHBvcnQgY2xhc3MgUHVibGlzaGVyRHRvIHtcbiAgY29uc3RydWN0b3IoeyBpZCwgbmFtZSB9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBQdWJsaXNoZXIgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIlB1Ymxpc2hlclwiLFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgdGFibGVOYW1lOiBcInB1Ymxpc2hlcnNcIixcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFB1Ymxpc2hlcjtcbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IFB1Ymxpc2hlckR0byB9IGZyb20gXCIuL2R0by9wdWJsaXNoZXIuZHRvLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBwdWJsaXNoZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHVibGlzaGVyU2VydmljZSkge1xuICAgIHRoaXMucHVibGlzaGVyU2VydmljZSA9IHB1Ymxpc2hlclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBwdWJsaXNoZXIgPSBhd2FpdCB0aGlzLnB1Ymxpc2hlclNlcnZpY2UuY3JlYXRlKHJlcXVlc3QuYm9keSk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiUHVibGlzaGVyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkNSRUFURUQsXG4gICAgICBkYXRhOiBuZXcgUHVibGlzaGVyRHRvKHB1Ymxpc2hlciksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgcHVibGlzaGVyID0gYXdhaXQgdGhpcy5wdWJsaXNoZXJTZXJ2aWNlLmZpbmRBbGwoKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJQdWJsaXNoZXIgbGlzdCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBwdWJsaXNoZXIubWFwKChnKSA9PiBuZXcgUHVibGlzaGVyRHRvKGcpKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgcHVibGlzaGVyID0gYXdhaXQgdGhpcy5wdWJsaXNoZXJTZXJ2aWNlLmZpbmRCeUlkKFxuICAgICAgcmVxdWVzdC5wYXJhbXMucHVibGlzaGVySWQsXG4gICAgKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJQdWJsaXNoZXIgZmluZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgUHVibGlzaGVyRHRvKHB1Ymxpc2hlciksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBwdWJsaXNoZXIgPSBhd2FpdCB0aGlzLnB1Ymxpc2hlclNlcnZpY2UudXBkYXRlKFxuICAgICAgcmVxdWVzdC5wYXJhbXMucHVibGlzaGVySWQsXG4gICAgICByZXF1ZXN0LmJvZHksXG4gICAgKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJQdWJsaXNoZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgUHVibGlzaGVyRHRvKHB1Ymxpc2hlciksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBkZWxldGUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBwdWJsaXNoZXIgPSBhd2FpdCB0aGlzLnB1Ymxpc2hlclNlcnZpY2UuZGVsZXRlKFxuICAgICAgcmVxdWVzdC5wYXJhbXMucHVibGlzaGVySWQsXG4gICAgKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJwdWJsaXNoZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgUHVibGlzaGVyRHRvKHB1Ymxpc2hlciksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IHB1Ymxpc2hlckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9wdWJsaXNoZXIuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUHVibGlzaGVyUmVwb3NpdG9yeSB9IGZyb20gXCIuL3B1Ymxpc2hlci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBQdWJsaXNoZXJTZXJ2aWNlIH0gZnJvbSBcIi4vcHVibGlzaGVyLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IHB1Ymxpc2hlckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJwdWJsaXNoZXItc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcInB1Ymxpc2hlci1yZXBvc2l0b3J5XCIsXG4gIGNvbnRyb2xsZXI6IFwicHVibGlzaGVyLWNvbnRyb2xsZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgcHVibGlzaGVyRElLZXlzLnJlcG9zaXRvcnksXG4gIFtdLFxuICAoKSA9PiBuZXcgUHVibGlzaGVyUmVwb3NpdG9yeSgpLFxuKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBwdWJsaXNoZXJESUtleXMuc2VydmljZSxcbiAgW3B1Ymxpc2hlckRJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHB1Ymxpc2hlclJlcG9zaXRvcnkpID0+IG5ldyBQdWJsaXNoZXJTZXJ2aWNlKHB1Ymxpc2hlclJlcG9zaXRvcnkpLFxuKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBwdWJsaXNoZXJESUtleXMuY29udHJvbGxlcixcbiAgW3B1Ymxpc2hlckRJS2V5cy5zZXJ2aWNlXSxcbiAgKHB1Ymxpc2hlclNlcnZpY2UpID0+IG5ldyBwdWJsaXNoZXJDb250cm9sbGVyKHB1Ymxpc2hlclNlcnZpY2UpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBQdWJsaXNoZXIgZnJvbSBcIi4vbW9kZWwvcHVibGlzaGVyLm1vZGVcIjtcblxuZXhwb3J0IGNsYXNzIFB1Ymxpc2hlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFB1Ymxpc2hlcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBwdWJsaXNoZXJESUtleXMgfSBmcm9tIFwiLi9wdWJsaXNoZXIuZGlcIjtcblxuY29uc3QgcHVibGlzaGVyUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY29uc3QgcHJlZml4ID0gXCIvcHVibGlzaGVyc1wiO1xuXG5jb25zdCBwdWJsaXNoZXJDb250cm9sbGVyID0gY29udGFpbmVyLmdldChwdWJsaXNoZXJESUtleXMuY29udHJvbGxlcik7XG5cbnB1Ymxpc2hlclJvdXRlci5wb3N0KGAke3ByZWZpeH1gLCAocmVxLCByZXMpID0+XG4gIHB1Ymxpc2hlckNvbnRyb2xsZXIuY3JlYXRlKHJlcSwgcmVzKSxcbik7XG5cbnB1Ymxpc2hlclJvdXRlci5nZXQoYCR7cHJlZml4fWAsIChyZXEsIHJlcykgPT5cbiAgcHVibGlzaGVyQ29udHJvbGxlci5maW5kQWxsKHJlcSwgcmVzKSxcbik7XG5cbnB1Ymxpc2hlclJvdXRlci5nZXQoYCR7cHJlZml4fS86cHVibGlzaGVySWRgLCAocmVxLCByZXMpID0+XG4gIHB1Ymxpc2hlckNvbnRyb2xsZXIuZmluZEJ5SWQocmVxLCByZXMpLFxuKTtcblxucHVibGlzaGVyUm91dGVyLmRlbGV0ZShgJHtwcmVmaXh9LzpwdWJsaXNoZXJJZGAsIChyZXEsIHJlcykgPT5cbiAgcHVibGlzaGVyQ29udHJvbGxlci5kZWxldGUocmVxLCByZXMpLFxuKTtcbnB1Ymxpc2hlclJvdXRlci5wYXRjaChgJHtwcmVmaXh9LzpwdWJsaXNoZXJJZGAsIChyZXEsIHJlcykgPT5cbiAgcHVibGlzaGVyQ29udHJvbGxlci51cGRhdGUocmVxLCByZXMpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgcHVibGlzaGVyUm91dGVyO1xuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUHVibGlzaGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHB1Ymxpc2hlclJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLnB1Ymxpc2hlclJlcG9zaXRvcnkgPSBwdWJsaXNoZXJSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKGNyZWF0ZVB1Ymxpc2hlckR0bykge1xuICAgIHJldHVybiB0aGlzLnB1Ymxpc2hlclJlcG9zaXRvcnkuY3JlYXRlKGNyZWF0ZVB1Ymxpc2hlckR0byk7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsKCkge1xuICAgIHJldHVybiB0aGlzLnB1Ymxpc2hlclJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQocHVibGlzaGVySWQpIHtcbiAgICBjb25zdCBwdWJsaXNoZXIgPSBhd2FpdCB0aGlzLnB1Ymxpc2hlclJlcG9zaXRvcnkuZmluZEJ5SWQocHVibGlzaGVySWQpO1xuXG4gICAgaWYgKCFwdWJsaXNoZXIpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIlB1Ymxpc2hlciBub3QgZm91bmQhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHVibGlzaGVyO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKHB1Ymxpc2hlcklkLCB1cGRhdGVQdWJsaXNoZXJEdG8pIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKHB1Ymxpc2hlcklkKTtcblxuICAgIHJldHVybiB0aGlzLnB1Ymxpc2hlclJlcG9zaXRvcnkudXBkYXRlKHB1Ymxpc2hlcklkLCB1cGRhdGVQdWJsaXNoZXJEdG8pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKHB1Ymxpc2hlcklkKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChwdWJsaXNoZXJJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5wdWJsaXNoZXJSZXBvc2l0b3J5LmRlbGV0ZShwdWJsaXNoZXJJZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBSb2xlID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJSb2xlXCIsXG4gIHtcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRhYmxlTmFtZTogXCJyb2xlc1wiLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUm9sZTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IFJvbGVSZXBvc2l0b3J5IH0gZnJvbSBcIi4vcm9sZS5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIi4vcm9sZS5zZWVkZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvbGVESUtleXMgPSB7XG4gIHJlcG9zaXRvcnk6IFwicm9sZS1yZXBvc2l0b3J5XCIsXG4gIHNlZWRlcjogXCJyb2xlLXNlZWRlclwiLFxuICBzZXJ2aWNlOiBcInJvbGUtc2VydmljZVwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKHJvbGVESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBSb2xlUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICByb2xlRElLZXlzLnNlZWRlcixcbiAgW3JvbGVESUtleXMucmVwb3NpdG9yeV0sXG4gIChyb2xlUmVwb3NpdG9yeSkgPT4gbmV3IFJvbGVTZWVkZXIocm9sZVJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBSb2xlIGZyb20gXCIuL21vZGVsL3JvbGUubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFJvbGVSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihSb2xlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcm9sZXMgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnQvcm9sZVwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHJvbGVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5yb2xlUmVwb3NpdG9yeSA9IHJvbGVSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUm9sZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmZpbmRBbGwoKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm9sZU5hbWVzID0gbmV3IFNldChleGlzdGluZ1JvbGVzLm1hcCgocm9sZSkgPT4gcm9sZS5yb2xlKSk7XG5cbiAgICAgIGNvbnN0IHJvbGVzVG9DcmVhdGUgPSByb2xlcy5maWx0ZXIoXG4gICAgICAgIChyb2xlKSA9PiAhZXhpc3RpbmdSb2xlTmFtZXMuaGFzKHJvbGUucm9sZSksXG4gICAgICApO1xuXG4gICAgICBpZiAocm9sZXNUb0NyZWF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucm9sZVJlcG9zaXRvcnkuY3JlYXRlTWFueShyb2xlc1RvQ3JlYXRlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHJvbGVzOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIC8vIE9wdGlvbmFsOiBIYW5kbGUgb3IgcHJvcGFnYXRlIHRoZSBlcnJvciBhcyBuZWVkZWRcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRhY3REdG8gfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL2R0by9jb250YWN0LmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlckR0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZGF0YS5mdWxsTmFtZTtcbiAgICB0aGlzLnByb2ZpbGVJbWFnZSA9IGRhdGEucHJvZmlsZUltYWdlO1xuICAgIHRoaXMucm9sZSA9IGRhdGEucm9sZTtcbiAgICB0aGlzLmNvbnRhY3QgPSBuZXcgQ29udGFjdER0byhkYXRhLmNvbnRhY3QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmltcG9ydCB7IHNlcXVlbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3QgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoXG4gIFwiVXNlclwiLFxuICB7XG4gICAgZnVsbE5hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogXCJyb2xlc1wiLFxuICAgICAgICBrZXk6IFwiaWRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiBcImNvbnRhY3RzXCIsXG4gICAgICAgIGtleTogXCJpZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGFibGVOYW1lOiBcInVzZXJzXCIsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tIFwiLi91c2VyLnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiLi91c2VyLnNlZWRlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJESUtleXMgPSB7XG4gIHNlcnZpY2U6IFwidXNlci1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwidXNlci1yZXBvc2l0b3J5XCIsXG4gIHNlZWRlcjogXCJ1c2VyLXNlZWRlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKHVzZXJESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBVc2VyUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICB1c2VyRElLZXlzLnNlcnZpY2UsXG4gIFt1c2VyRElLZXlzLnJlcG9zaXRvcnldLFxuICAodXNlclJlcG9zaXRvcnkpID0+IG5ldyBVc2VyU2VydmljZSh1c2VyUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VlZGVyLFxuICBbdXNlckRJS2V5cy5zZXJ2aWNlXSxcbiAgKHVzZXJTZXJ2aWNlKSA9PiBuZXcgVXNlclNlZWRlcih1c2VyU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vbW9kZWwvdXNlci5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgVXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFVzZXIpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVXNlclNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlQWRtaW4oKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZCh7IHJvbGU6IDEgfSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5jcmVhdGUoe1xuICAgICAgICBjb250YWN0OiB7IGVtYWlsOiBcImJha3RhcmFkbWluQGdtYWlsLmNvbVwiIH0sXG4gICAgICAgIGZ1bGxOYW1lOiBcImJha3RhciBhZG1pblwiLFxuICAgICAgICBwYXNzd29yZDogXCJiYWt0YXJhZG1pblwiLFxuICAgICAgICByb2xlOiAxLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhZG1pbjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2hlbHBlci9oYXNoLXBhc3N3b3JkXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vLi4vY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyUmVwb3NpdG9yeSkge1xuICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZSh1c2VyRHRvKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gdXNlckR0bztcblxuICAgIGNvbnN0IHsgZW1haWwsIHBob25lTnVtYmVyIH0gPSB1c2VyRHRvLmNvbnRhY3Q7XG5cbiAgICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBoYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBzZXF1ZWxpemUudHJhbnNhY3Rpb24oKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXdDb250YWN0ID0gYXdhaXQgQ29udGFjdC5jcmVhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgfSxcbiAgICAgICAgeyB0cmFuc2FjdGlvbiB9LFxuICAgICAgKTtcblxuICAgICAgYXdhaXQgdHJhbnNhY3Rpb24uY29tbWl0KCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmNyZWF0ZSh7XG4gICAgICAgIC4uLnVzZXJEdG8sXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZEhhc2gsXG4gICAgICAgIHJvbGU6IDEsXG4gICAgICAgIGNvbnRhY3Q6IG5ld0NvbnRhY3QuaWQsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi5yb2xsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUVtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7IFwiY29udGFjdC5lbWFpbFwiOiBlbWFpbCB9KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHF1ZXJ5KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGlkKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZEJ5SWQoaWQpO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZCFcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkLCB1c2VyRHRvKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS51cGRhdGUoaWQsIHVzZXJEdG8pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5kZWxldGUoaWQpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5RW1haWxPclRocm93KGVtYWlsKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZmluZEJ5RW1haWwoZW1haWwpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIHdpdGggdGhpcyBlbWFpbCBkb2VzIG5vdCBleGlzdC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQC9jb3JlL2RpL2RpLWdsb2JhbHNcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcmF0ZUxpbWl0IH0gZnJvbSBcImV4cHJlc3MtcmF0ZS1saW1pdFwiO1xuXG5pbXBvcnQgYXV0aFJvdXRlciBmcm9tIFwiLi9hcGkvYXV0aC9hdXRoLnJvdXRlXCI7XG5pbXBvcnQgYXV0aG9yUm91dGVyIGZyb20gXCIuL2FwaS9hdXRob3IvYXV0aG9yLnJvdXRlXCI7XG5pbXBvcnQgZ2VucmVSb3V0ZXIgZnJvbSBcIi4vYXBpL2dlbnJlL2dlbnJlLnJvdXRlXCI7XG5pbXBvcnQgcHVibGlzaGVyUm91dGVyIGZyb20gXCIuL2FwaS9wdWJsaXNoZXIvcHVibGlzaGVyLnJvdXRlXCI7XG5pbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tIFwiLi9jb21tb24vY29uc3RhbnQvYXBpXCI7XG5pbXBvcnQgYmFzZVJlc3BvbnNlTWlkZGxld2FyZSBmcm9tIFwiLi9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSBmcm9tIFwiLi9jb3JlL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci1taWRkbGV3YXJlXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcbiAgcmF0ZUxpbWl0KHtcbiAgICB3aW5kb3dNczogMTAgKiA2MCAqIDEwMDAsXG4gICAgbGltaXQ6IDEwMCxcbiAgICBzdGFuZGFyZEhlYWRlcnM6IFwiZHJhZnQtNlwiLFxuICAgIGxlZ2FjeUhlYWRlcnM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgcmVxdWVzdHNcIixcbiAgfSksXG4pO1xuYXBwLnNldChcInRydXN0IHByb3h5XCIsIDEpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuYXBwLnVzZShiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKTtcbmFwcC51c2UoYXBpUHJlZml4LCBhdXRoUm91dGVyKTtcbmFwcC51c2UoYXBpUHJlZml4LCBhdXRob3JSb3V0ZXIpO1xuYXBwLnVzZShhcGlQcmVmaXgsIGdlbnJlUm91dGVyKTtcbmFwcC51c2UoYXBpUHJlZml4LCBwdWJsaXNoZXJSb3V0ZXIpO1xuXG5hcHAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHA7XG4iLCJleHBvcnQgY29uc3QgYXBpUHJlZml4ID0gXCIvYXBpL3YxXCI7XG4iLCJleHBvcnQgY29uc3Qgcm9sZXMgPSBbeyByb2xlOiBcImFkbWluXCIgfSwgeyByb2xlOiBcInVzZXJcIiB9XTtcbiIsImltcG9ydCAqIGFzIGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc2hQYXNzd29yZChwYXNzd29yZCkge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoMTApO1xuXG4gIHJldHVybiBiY3J5cHQuaGFzaChwYXNzd29yZCwgc2FsdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZChwbGFpblRleHRQYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpIHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHBsYWluVGV4dFBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XG59XG5cbmV4cG9ydCB7IGNvbXBhcmVQYXNzd29yZCwgaGFzaFBhc3N3b3JkIH07XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcblxuY29uc3QgZ2VuZXJhdGVUb2tlbiA9IChwYXlsb2FkLCBzZWNyZXQsIHRpbWUpID0+XG4gIGp3dC5zaWduKHBheWxvYWQsIHNlY3JldCwge1xuICAgIGV4cGlyZXNJbjogdGltZSxcbiAgICBhbGdvcml0aG06IFwiSFM1MTJcIixcbiAgfSk7XG5cbmNvbnN0IGRlY29kZWRUb2tlbiA9IGFzeW5jICh0b2tlbiwgc2VjcmV0KSA9PiB7XG4gIGlmICghdG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgIG1lc3NhZ2U6IFwiTm8gdG9rZW4gcHJvdmlkZWRcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBbc2NoZW1lLCBhdXRoVG9rZW5dID0gdG9rZW4uc3BsaXQoXCIgXCIpO1xuXG4gIGlmIChzY2hlbWUgIT09IFwiQmVhcmVyXCIgfHwgIWF1dGhUb2tlbikge1xuICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHRva2VuIGZvcm1hdFwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgand0LnZlcmlmeShhdXRoVG9rZW4sIHNlY3JldCwgeyBhbGdvcml0aG1zOiBbXCJIUzUxMlwiXSB9LCAoZXJyLCBkZWNvZGVkKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJlamVjdChcbiAgICAgICAgICBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiVG9rZW4gdmVyaWZpY2F0aW9uIGZhaWxlZFwiLFxuICAgICAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5VTkFVVEhPUklaRUQsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGRlY29kZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGRlY29kZWRUb2tlbiwgZ2VuZXJhdGVUb2tlbiB9O1xuIiwiZXhwb3J0IGNsYXNzIENvbnRhY3REdG8ge1xuICBjb25zdHJ1Y3Rvcih7IGVtYWlsLCBwaG9uZU51bWJlciB9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBob25lTnVtYmVyLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmltcG9ydCB7IHNlcXVlbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3QgQ29udGFjdCA9IHNlcXVlbGl6ZS5kZWZpbmUoXG4gIFwiQ29udGFjdFwiLFxuICB7XG4gICAgZW1haWw6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgIGlzRW1haWw6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGhvbmVOdW1iZXI6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRhYmxlTmFtZTogXCJjb250YWN0c1wiLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiIsImltcG9ydCB7IFNlcXVlbGl6ZSB9IGZyb20gXCJzZXF1ZWxpemVcIjtcclxuXHJcbmNsYXNzIERhdGFiYXNlIHtcclxuICBzdGF0aWMgaW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIElmIGFuIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLCBwcmV2ZW50IGNyZWF0aW5nIGEgbmV3IG9uZVxyXG4gICAgaWYgKERhdGFiYXNlLmluc3RhbmNlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBcIkRhdGFiYXNlIGluc3RhbmNlIGFscmVhZHkgZXhpc3RzLiBVc2UgRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKSBpbnN0ZWFkLlwiLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWV0aG9kIHRvIGdldCB0aGUgU2luZ2xldG9uIGluc3RhbmNlIG9mIFNlcXVlbGl6ZVxyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghRGF0YWJhc2UuaW5zdGFuY2UpIHtcclxuICAgICAgRGF0YWJhc2UuaW5zdGFuY2UgPSBuZXcgU2VxdWVsaXplKHtcclxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfREFUQUJBU0UsXHJcbiAgICAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVJOQU1FLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQsXHJcbiAgICAgICAgZGlhbGVjdDogcHJvY2Vzcy5lbnYuREJfRElBTEVDVCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIERhdGFiYXNlLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLy8gTWV0aG9kIHRvIG9wZW4gdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cclxuICBzdGF0aWMgYXN5bmMgY29ubmVjdCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHNlcXVlbGl6ZSA9IERhdGFiYXNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgIGF3YWl0IHNlcXVlbGl6ZS5hdXRoZW50aWNhdGUoKTtcclxuICAgICAgYXdhaXQgc2VxdWVsaXplLnN5bmMoeyBmb3JjZTogdHJ1ZSB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZS5cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byB0aGUgZGF0YWJhc2U6XCIsIGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gTWV0aG9kIHRvIGNsb3NlIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXHJcbiAgc3RhdGljIGFzeW5jIGNsb3NlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKERhdGFiYXNlLmluc3RhbmNlKSB7XHJcbiAgICAgICAgYXdhaXQgRGF0YWJhc2UuaW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFiYXNlIGNvbm5lY3Rpb24gc3VjY2Vzc2Z1bGx5IGNsb3NlZC5cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjbG9zaW5nIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzZXF1ZWxpemUgPSBEYXRhYmFzZS5nZXRJbnN0YW5jZSgpO1xyXG5cclxuZXhwb3J0IHsgRGF0YWJhc2UsIHNlcXVlbGl6ZSB9O1xyXG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiZG90ZW52XCI7XG5cbmNvbmZpZygpO1xuXG5jb25maWcoe1xuICBwYXRoOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gXCIuZW52LmxvY2FsXCIgOiBcIi5lbnZcIixcbiAgb3ZlcnJpZGU6IHRydWUsXG59KTtcbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGp3dDoge1xuICAgIGFsZ29yaXRobTogcHJvY2Vzcy5lbnYuSldUX0FMR09SSVRITSxcbiAgICBhY2Nlc3NTZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9BQ0NFU1NfU0VDUkVULFxuICAgIGFjY2Vzc0V4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19FWFBJUkVTX0lOLFxuICAgIHJlZnJlc2hTZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9SRUZSRVNIX1NFQ1JFVCxcbiAgICByZWZyZXNoRXhwaXJlc0luOiBwcm9jZXNzLmVudi5KV1RfUkVGUkVTSF9FWFBJUkVTX0lOLFxuICAgIHZlcmlmaWNhdGlvblNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1ZFUklGSUNBVElPTl9TRUNSRVQsXG4gICAgdmVyaWZpY2F0aW9uRXhwaXJlc0luOiBwcm9jZXNzLmVudi5KV1RfVkVSSUZJQ0FUSU9OX0VYUElSRVNfSU4sXG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgcm9sZURJS2V5cyB9IGZyb20gXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLnNlZWRlclwiO1xuXG5pbXBvcnQgeyB1c2VyRElLZXlzIH0gZnJvbSBcIi4uLy4uL2FwaS91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiLi4vLi4vYXBpL3VzZXIvdXNlci5zZWVkZXJcIjtcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi9kaS9kaS1jb250YWluZXJcIjtcblxuZXhwb3J0IGNvbnN0IHNlZWQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJvbGVTZWVkZXIgPSBuZXcgUm9sZVNlZWRlcihjb250YWluZXIuZ2V0KHJvbGVESUtleXMucmVwb3NpdG9yeSkpO1xuICBjb25zdCB1c2VyU2VlZGVyID0gbmV3IFVzZXJTZWVkZXIoY29udGFpbmVyLmdldCh1c2VyRElLZXlzLnNlcnZpY2UpKTtcblxuICBhd2FpdCByb2xlU2VlZGVyLmNyZWF0ZVJvbGVzKCk7XG4gIGF3YWl0IHVzZXJTZWVkZXIuY3JlYXRlQWRtaW4oKTtcbn07XG4iLCIvKipcbiAqIERlcGVuZGVuY3kgSW5qZWN0aW9uIENvbnRhaW5lclxuICogQGNsYXNzIERpQ29udGFpbmVyXG4gKiBAZGVzY3JpcHRpb24gQSBzaW1wbGUgZGVwZW5kZW5jeSBpbmplY3Rpb24gY29udGFpbmVyIHRoYXQgYWxsb3dzIHlvdSB0byByZWdpc3RlclxuICogYW5kIGdldCBkZXBlbmRlbmNpZXNcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBjb250YWluZXIgPSBuZXcgRGlDb250YWluZXIoKTtcbiAqIGNvbnRhaW5lci5yZWdpc3RlcihcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiLCBbXSwgKCkgPT4gbmV3IExhbmRpbmdQYWdlUmVwb3NpdG9yeSgpKTtcbiAqIGNvbnRhaW5lci5yZWdpc3RlcihcbiAqICBcIkxhbmRpbmdQYWdlU2VydmljZVwiLFxuICogIFtcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiXSxcbiAqICAobGFuZGluZ1BhZ2VSZXBvc2l0b3J5KSA9PiBuZXcgTGFuZGluZ1BhZ2VTZXJ2aWNlKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSksXG4gKiApO1xuICpcbiAqIGNvbnN0IGxhbmRpbmdQYWdlU2VydmljZSA9IGNvbnRhaW5lci5nZXQoXCJMYW5kaW5nUGFnZVNlcnZpY2VcIik7XG4gKi9cbmNsYXNzIERpQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kZXBlbmRlbmNpZXMgPSB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGRlcGVuZGVuY3lcbiAgICogQHBhcmFtIG5hbWUgLSBOYW1lIG9mIHRoZSBkZXBlbmRlbmN5IChleDogXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIilcbiAgICogQHBhcmFtIGRlcGVuZGVuY2llcyAtIEFycmF5IG9mIGRlcGVuZGVuY2llcyAoZXg6IFtcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiXSlcbiAgICogQHBhcmFtIGZ1bmMgLSBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGRlcGVuZGVuY3lcbiAgICovXG4gIHJlZ2lzdGVyKG5hbWUsIGRlcGVuZGVuY2llcywgZnVuYykge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBuYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAhQXJyYXkuaXNBcnJheShkZXBlbmRlbmNpZXMpIHx8XG4gICAgICB0eXBlb2YgZnVuYyAhPT0gXCJmdW5jdGlvblwiXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50XCIpO1xuICAgIH1cblxuICAgIHRoaXMuZGVwZW5kZW5jaWVzW25hbWVdID0ge1xuICAgICAgZGVwZW5kZW5jaWVzLFxuICAgICAgZnVuYyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGRlcGVuZGVuY3lcbiAgICogQHBhcmFtIG5hbWUgLSBOYW1lIG9mIHRoZSBkZXBlbmRlbmN5IChleDogXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIilcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZXBlbmRlbmN5IG5vdCBmb3VuZDogJHtuYW1lfWApO1xuICAgIH1cblxuICAgIGNvbnN0IHsgZGVwZW5kZW5jaWVzLCBmdW5jIH0gPSB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llc0luc3RhbmNlcyA9IGRlcGVuZGVuY2llcy5tYXAoKGRlcGVuZGVuY3kpID0+XG4gICAgICB0aGlzLmdldChkZXBlbmRlbmN5KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIGZ1bmMoLi4uZGVwZW5kZW5jaWVzSW5zdGFuY2VzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4iLCJpbXBvcnQgXCJAL2FwaS9yb2xlL3JvbGUuZGlcIjtcbmltcG9ydCBcIkAvYXBpL2F1dGgvYXV0aC5kaVwiO1xuaW1wb3J0IFwiQC9hcGkvYXV0aG9yL2F1dGhvci5kaVwiO1xuaW1wb3J0IFwiQC9hcGkvZ2VucmUvZ2VucmUuZGlcIjtcbmltcG9ydCBcIkAvYXBpL3B1Ymxpc2hlci9wdWJsaXNoZXIuZGlcIjtcbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCIuLi9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhc2VSZXNwb25zZU1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgcmVzLnN1Y2Nlc3MgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLk9LKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLnN1Y2Nlc3MocHJvcHMpKTtcbiAgfTtcblxuICByZXMuZXJyb3IgPSAocHJvcHMpID0+IHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMocHJvcHMuc3RhdHVzIHx8IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNUKVxuICAgICAgLmpzb24oQmFzZVJlc3BvbnNlLmVycm9yKHByb3BzKSk7XG4gIH07XG5cbiAgbmV4dCgpO1xufVxuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCJAL3NoYXJlZC9lcnJvci1yZXNwb25zZS9lcnJvci1yZXNwb25zZVwiO1xuXG5jb25zdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlID0gKGVycm9yLCByZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBUElFcnJvcikge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoZXJyb3Iuc3RhdHVzQ29kZSB8fCA0MDApLmpzb24oe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIH0pO1xuICB9XG5cbiAgbmV4dCgpO1xuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEJhc2VSZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5lcnJvcihlcnJvcik7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkludGVybmFsIFNlcnZlciBFcnJvciFcIixcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlO1xuIiwiaW1wb3J0IHsgZ2V0UmVhc29uUGhyYXNlLCBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFzZVJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuc3VjY2VzcyA9IGRhdGEuc3VjY2VzcztcbiAgICB0aGlzLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgIHRoaXMubWVzc2FnZSA9IGRhdGEubWVzc2FnZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhLmRhdGE7XG4gICAgdGhpcy5kZXRhaWxzID0gZGF0YS5kZXRhaWxzO1xuICB9XG5cbiAgc3RhdGljIHN1Y2Nlc3MoeyBzdGF0dXMgPSBTdGF0dXNDb2Rlcy5PSywgbWVzc2FnZSwgZGF0YSB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGVycm9yKHsgbWVzc2FnZSwgc3RhdHVzID0gU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsIGRldGFpbHMgPSBudWxsIH0pIHtcbiAgICByZXR1cm4gbmV3IEJhc2VSZXNwb25zZSh7XG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgZ2V0UmVhc29uUGhyYXNlKHN0YXR1cyksXG4gICAgICBkZXRhaWxzLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQVBJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcihtb2RlbCkge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGNyZWF0ZShkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuY3JlYXRlKGRhdGEpO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkLCBkYXRhKSB7XG4gICAgY29uc3QgWywgdXBkYXRlZEF1dGhvcl0gPSBhd2FpdCB0aGlzLm1vZGVsLnVwZGF0ZShkYXRhLCB7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgcmV0dXJuaW5nOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZWRBdXRob3JbMF07XG4gIH1cblxuICBkZWxldGUoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5kZXN0cm95KHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgfSk7XG4gIH1cblxuICBmaW5kQnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRBbGwoKSB7XG4gICAgY29uc29sZS5sb2coXCJ3b3JraW5nIEZpbmRBbGxcIik7XG5cbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kQWxsKCk7XG4gIH1cblxuICBmaW5kT25lKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZE9uZSh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBmaW5kKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEFsbCh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICAvLyBLYXnEsXRsYXLEsSBzYXltYVxuICBjb3VudChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNvdW50KHtcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1hbnkoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmJ1bGtDcmVhdGUoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVNYW55KHF1ZXJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwudXBkYXRlKGRhdGEsIHtcbiAgICAgIHdoZXJlOiBxdWVyeSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwc2VydChxdWVyeSwgZGF0YSkge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHRoaXMuZmluZE9uZShxdWVyeSk7XG5cbiAgICBpZiAoIXJlY29yZCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZShyZWNvcmQuaWQsIGRhdGEpO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3dyYXBOYXRpdmVTdXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLWFzeW5jLWVycm9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXJhdGUtbGltaXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cC1zdGF0dXMtY29kZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCJAL2NvcmUvY29uZmlnL2Vudi5jb25maWdcIjtcbmltcG9ydCBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCI7XG5pbXBvcnQgeyBjcmVhdGVTZXJ2ZXIgfSBmcm9tIFwiaHR0cFwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgRGF0YWJhc2UgfSBmcm9tIFwiLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcbmltcG9ydCB7IHNlZWQgfSBmcm9tIFwiLi9jb3JlL2RiL3NlZWRcIjtcblxuY29uc3Qgc2VydmVyID0gY3JlYXRlU2VydmVyKGFwcCk7XG5jb25zdCB7IFBPUlQgfSA9IHByb2Nlc3MuZW52O1xuXG4oYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IERhdGFiYXNlLmNvbm5lY3QoKTsgLy8gQ29ubmVjdCB0byB0aGUgZGF0YWJhc2VcbiAgICBhd2FpdCBzZWVkKCk7XG4gICAgY29uc29sZS5sb2coXCJBcHBsaWNhdGlvbiBzdGFydGVkLi4uXCIpO1xuICAgIHNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgJHtQT1JUfWApO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBcHBsaWNhdGlvbiBmYWlsZWQgdG8gc3RhcnQ6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTsgLy8gRXhpdCB3aXRoIGZhaWx1cmUgY29kZVxuICB9XG5cbiAgLy8gR3JhY2VmdWxseSBoYW5kbGUgc2h1dGRvd24gc2lnbmFsc1xuICBwcm9jZXNzLm9uKFwiU0lHSU5UXCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG5cbiAgcHJvY2Vzcy5vbihcIlNJR1RFUk1cIiwgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IERhdGFiYXNlLmNsb3NlKCk7IC8vIENsb3NlIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiU3RhdHVzQ29kZXMiLCJBdXRoRHRvIiwiQXV0aENvbnRyb2xsZXIiLCJhdXRoU2VydmljZSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3JlZ2lzdGVyIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJkYXRhIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsInJlZ2lzdGVyIiwiYm9keSIsInNlbnQiLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsIkNSRUFURUQiLCJzdG9wIiwiX3giLCJfeDIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9sb2dpbiIsIl9jYWxsZWUyIiwidXNlciIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxvZ2luIiwiT0siLCJfeDMiLCJfeDQiLCJjb250YWluZXIiLCJ1c2VyRElLZXlzIiwiQXV0aFNlcnZpY2UiLCJhdXRoRElLZXlzIiwiY29udHJvbGxlciIsInNlcnZpY2UiLCJ1c2VyU2VydmljZSIsImV4cHJlc3MiLCJhdXRoUm91dGVyIiwiUm91dGVyIiwicHJlZml4IiwiYXV0aENvbnRyb2xsZXIiLCJnZXQiLCJwb3N0IiwiY29uY2F0IiwicmVxIiwicmVzIiwiY29uZmlnIiwiQmFzZVJlc3BvbnNlIiwiY29tcGFyZVBhc3N3b3JkIiwiZ2VuZXJhdGVUb2tlbiIsIkNvbnRhY3QiLCJBUElFcnJvciIsImF1dGhSZWdpc3RlckR0byIsImZ1bGxOYW1lIiwiZW1haWwiLCJleGlzdGluZ1VzZXIiLCJzYXZlZFVzZXIiLCJwYXlsb2FkIiwidG9rZW4iLCJjb250YWN0IiwiY29uc29sZSIsImxvZyIsImZpbmRPbmUiLCJ3aGVyZSIsImluY2x1ZGUiLCJDT05GTElDVCIsInJvbGUiLCJjcmVhdGUiLCJzdWIiLCJfaWQiLCJjcmVhdGVUb2tlbiIsImFicnVwdCIsImF1dGhsb2dpbkR0byIsInBhc3N3b3JkIiwiZmluZEJ5RW1haWwiLCJ0MCIsImVycm9yIiwiVU5BVVRIT1JJWkVEIiwiX2NyZWF0ZVRva2VuIiwiX2NhbGxlZTMiLCJfY29uZmlnJGp3dCIsImFjY2Vzc1NlY3JldCIsImFjY2Vzc0V4cGlyZXNJbiIsImFjY2Vzc1Rva2VuIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiand0IiwiVXNlckR0byIsImFjY2VzcyIsIkF1dGhvckR0byIsIkF1dGhvckNvbnRyb2xsZXIiLCJhdXRob3JTZXJ2aWNlIiwiX2NyZWF0ZSIsImF1dGhvciIsIl9maW5kQWxsIiwiZmluZEFsbCIsIm1hcCIsImEiLCJfZmluZEJ5SWQiLCJmaW5kQnlJZCIsInBhcmFtcyIsImF1dGhvcklkIiwiX3g1IiwiX3g2IiwiX3VwZGF0ZSIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwidXBkYXRlIiwiX3g3IiwiX3g4IiwiX2RlbGV0ZTIiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImRlbGV0ZSIsIl94OSIsIl94MTAiLCJBdXRob3JSZXBvc2l0b3J5IiwiQXV0aG9yU2VydmljZSIsImF1dGhvckRJS2V5cyIsInJlcG9zaXRvcnkiLCJhdXRob3JSZXBvc2l0b3J5IiwiQmFzZVJlcG9zaXRvcnkiLCJBdXRob3IiLCJfQmFzZVJlcG9zaXRvcnkiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiYXV0aG9yUm91dGVyIiwiYXV0aG9yQ29udHJvbGxlciIsInBhdGNoIiwiY3JlYXRlQXV0aG9yRHRvIiwiTk9UX0ZPVU5EIiwidXBkYXRlQXV0aG9yRHRvIiwiX3JlZiIsImlkIiwibmFtZSIsImJpb2dyYXBoeSIsImRhdGVPZkJpcnRoIiwibmF0aW9uYWxpdHkiLCJPYmplY3QiLCJhc3NpZ24iLCJEYXRhVHlwZXMiLCJzZXF1ZWxpemUiLCJkZWZpbmUiLCJ0eXBlIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwiVEVYVCIsIkRBVEVPTkxZIiwidGltZXN0YW1wcyIsInRhYmxlTmFtZSIsIkdlbnJlRHRvIiwiR2VucmVDb250cm9sbGVyIiwiZ2VucmVTZXJ2aWNlIiwiZ2VucmUiLCJnIiwiZ2VucmVJZCIsIkdlbnJlUmVwb3NpdG9yeSIsIkdlbnJlU2VydmljZSIsImdlbnJlRElLZXlzIiwiZ2VucmVSZXBvc2l0b3J5IiwiR2VucmUiLCJnZW5yZVJvdXRlciIsImdlbnJlQ29udHJvbGxlciIsImNyZWF0ZUdlbnJlRHRvIiwidXBkYXRlR2VucmVEdG8iLCJQdWJsaXNoZXJEdG8iLCJQdWJsaXNoZXIiLCJwdWJsaXNoZXJDb250cm9sbGVyIiwicHVibGlzaGVyU2VydmljZSIsInB1Ymxpc2hlciIsInB1Ymxpc2hlcklkIiwiUHVibGlzaGVyUmVwb3NpdG9yeSIsIlB1Ymxpc2hlclNlcnZpY2UiLCJwdWJsaXNoZXJESUtleXMiLCJwdWJsaXNoZXJSZXBvc2l0b3J5IiwicHVibGlzaGVyUm91dGVyIiwiY3JlYXRlUHVibGlzaGVyRHRvIiwidXBkYXRlUHVibGlzaGVyRHRvIiwiUm9sZSIsInVuaXF1ZSIsInRyaW0iLCJSb2xlUmVwb3NpdG9yeSIsIlJvbGVTZWVkZXIiLCJyb2xlRElLZXlzIiwic2VlZGVyIiwicm9sZVJlcG9zaXRvcnkiLCJyb2xlcyIsIl9jcmVhdGVSb2xlcyIsImV4aXN0aW5nUm9sZXMiLCJleGlzdGluZ1JvbGVOYW1lcyIsInJvbGVzVG9DcmVhdGUiLCJTZXQiLCJmaWx0ZXIiLCJoYXMiLCJsZW5ndGgiLCJjcmVhdGVNYW55IiwiY3JlYXRlUm9sZXMiLCJDb250YWN0RHRvIiwicHJvZmlsZUltYWdlIiwiVXNlciIsIklOVEVHRVIiLCJyZWZlcmVuY2VzIiwibW9kZWwiLCJVc2VyUmVwb3NpdG9yeSIsIlVzZXJTZWVkZXIiLCJVc2VyU2VydmljZSIsInVzZXJSZXBvc2l0b3J5IiwiX2NyZWF0ZUFkbWluIiwiYWRtaW4iLCJmaW5kIiwiY3JlYXRlQWRtaW4iLCJoYXNoUGFzc3dvcmQiLCJ1c2VyRHRvIiwiX3VzZXJEdG8kY29udGFjdCIsInBob25lTnVtYmVyIiwicGFzc3dvcmRIYXNoIiwidHJhbnNhY3Rpb24iLCJuZXdDb250YWN0IiwiY29tbWl0IiwiX29iamVjdFNwcmVhZCIsInJvbGxiYWNrIiwiX2ZpbmRCeUVtYWlsIiwiX2ZpbmQiLCJxdWVyeSIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX2ZpbmRCeUVtYWlsT3JUaHJvdyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZmluZEJ5RW1haWxPclRocm93IiwiY29ycyIsInJhdGVMaW1pdCIsImFwaVByZWZpeCIsImJhc2VSZXNwb25zZU1pZGRsZXdhcmUiLCJlcnJvckhhbmRsZXJNaWRkbGV3YXJlIiwiYXBwIiwidXNlIiwid2luZG93TXMiLCJsaW1pdCIsInN0YW5kYXJkSGVhZGVycyIsImxlZ2FjeUhlYWRlcnMiLCJzZXQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwiZGlzYWJsZSIsImJjcnlwdCIsIl9oYXNoUGFzc3dvcmQiLCJzYWx0IiwiZ2VuU2FsdCIsImhhc2giLCJfY29tcGFyZVBhc3N3b3JkIiwicGxhaW5UZXh0UGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImNvbXBhcmUiLCJzZWNyZXQiLCJ0aW1lIiwic2lnbiIsImV4cGlyZXNJbiIsImFsZ29yaXRobSIsImRlY29kZWRUb2tlbiIsIl90b2tlbiRzcGxpdCIsIl90b2tlbiRzcGxpdDIiLCJzY2hlbWUiLCJhdXRoVG9rZW4iLCJCQURfUkVRVUVTVCIsInNwbGl0IiwiX3NsaWNlZFRvQXJyYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInZlcmlmeSIsImFsZ29yaXRobXMiLCJlcnIiLCJkZWNvZGVkIiwidmFsaWRhdGUiLCJpc0VtYWlsIiwiU2VxdWVsaXplIiwiRGF0YWJhc2UiLCJpbnN0YW5jZSIsIkVycm9yIiwiZ2V0SW5zdGFuY2UiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJEQl9QQVNTV09SRCIsImhvc3QiLCJEQl9IT1NUIiwicG9ydCIsIkRCX1BPUlQiLCJkaWFsZWN0IiwiREJfRElBTEVDVCIsIl9jb25uZWN0IiwiX3NlcXVlbGl6ZSIsImF1dGhlbnRpY2F0ZSIsInN5bmMiLCJmb3JjZSIsImNvbm5lY3QiLCJfY2xvc2UiLCJjbG9zZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhdGgiLCJOT0RFX0VOViIsIm92ZXJyaWRlIiwiSldUX0FMR09SSVRITSIsIkpXVF9BQ0NFU1NfU0VDUkVUIiwiSldUX0FDQ0VTU19FWFBJUkVTX0lOIiwicmVmcmVzaFNlY3JldCIsIkpXVF9SRUZSRVNIX1NFQ1JFVCIsInJlZnJlc2hFeHBpcmVzSW4iLCJKV1RfUkVGUkVTSF9FWFBJUkVTX0lOIiwidmVyaWZpY2F0aW9uU2VjcmV0IiwiSldUX1ZFUklGSUNBVElPTl9TRUNSRVQiLCJ2ZXJpZmljYXRpb25FeHBpcmVzSW4iLCJKV1RfVkVSSUZJQ0FUSU9OX0VYUElSRVNfSU4iLCJzZWVkIiwicm9sZVNlZWRlciIsInVzZXJTZWVkZXIiLCJEaUNvbnRhaW5lciIsImRlcGVuZGVuY2llcyIsImZ1bmMiLCJBcnJheSIsImlzQXJyYXkiLCJfdGhpcyIsIl90aGlzJGRlcGVuZGVuY2llcyRuYSIsImRlcGVuZGVuY2llc0luc3RhbmNlcyIsImRlcGVuZGVuY3kiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwcm9wcyIsInN0YXR1c0NvZGUiLCJnZXRSZWFzb25QaHJhc2UiLCJkZXRhaWxzIiwiX3JlZiRzdGF0dXMiLCJfcmVmMiIsIl9yZWYyJHN0YXR1cyIsIl9yZWYyJGRldGFpbHMiLCJfRXJyb3IiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiX3lpZWxkJHRoaXMkbW9kZWwkdXBkIiwiX3lpZWxkJHRoaXMkbW9kZWwkdXBkMiIsInVwZGF0ZWRBdXRob3IiLCJyZXR1cm5pbmciLCJkZXN0cm95IiwiY291bnQiLCJidWxrQ3JlYXRlIiwidXBkYXRlTWFueSIsIl91cHNlcnQiLCJyZWNvcmQiLCJ1cHNlcnQiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXIiLCJQT1JUIiwibGlzdGVuIiwiZXhpdCIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==