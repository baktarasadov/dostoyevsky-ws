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
/* harmony import */ var _common_constant_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/constant/api */ "./src/common/constant/api.js");
/* harmony import */ var _core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/middleware/base-response.middleware */ "./src/core/middleware/base-response.middleware.js");
/* harmony import */ var _core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/middleware/error-handler-middleware */ "./src/core/middleware/error-handler-middleware.js");










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
app.use(_core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_7__.apiPrefix, _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_7__.apiPrefix, _api_author_author_route__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_7__.apiPrefix, _api_genre_genre_route__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use(_core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_9__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQUEsQ0FDakIsR0FBQztRQUVGbVIsT0FBTyxDQUFDMEUsRUFBRSxDQUFDLFNBQVMsZUFBQWhXLDhFQUFBLGNBQUFDLHNFQUFBLENBQUUsU0FBQXdCLFNBQUE7VUFBQSxPQUFBeEIsc0VBQUEsVUFBQTBCLFVBQUFDLFNBQUE7WUFBQSxrQkFBQUEsU0FBQSxDQUFBbEIsSUFBQSxHQUFBa0IsU0FBQSxDQUFBakIsSUFBQTtjQUFBO2dCQUFBaUIsU0FBQSxDQUFBakIsSUFBQTtnQkFBQSxPQUNkc1EsNERBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDO2NBQUE7Z0JBQUU7Z0JBQ3hCbkIsT0FBTyxDQUFDeUUsSUFBSSxDQUFDLENBQUMsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQW5VLFNBQUEsQ0FBQVQsSUFBQTtZQUFBO1VBQUEsR0FBQU0sUUFBQTtRQUFBLENBQ2pCLEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQWdFLFNBQUEsQ0FBQXRFLElBQUE7SUFBQTtFQUFBLEdBQUFnRSxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2F1dGgucm91dGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2R0by9hdXRoLmR0by5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aG9yL2F1dGhvci5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvYXV0aG9yLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvYXV0aG9yLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGhvci9hdXRob3Iucm91dGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGhvci9hdXRob3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aG9yL2R0by9hdXRob3IuZHRvLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvbW9kZWwvYXV0aG9yLm1vZGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2dlbnJlL2R0by9nZW5yZS5kdG8uanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2dlbnJlL2dlbnJlLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2dlbnJlL2dlbnJlLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9nZW5yZS9nZW5yZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9nZW5yZS9nZW5yZS5yb3V0ZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvZ2VucmUvZ2VucmUuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvZ2VucmUvbW9kZWwvZ2VucmUubW9kZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9tb2RlbC9yb2xlLm1vZGVsLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUuZGkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvcm9sZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUuc2VlZGVyLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS91c2VyL2R0by91c2VyLmR0by5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci9tb2RlbC91c2VyLm1vZGVsLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS91c2VyL3VzZXIuZGkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3VzZXIvdXNlci5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS91c2VyL3VzZXIuc2VlZGVyLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS91c2VyL3VzZXIuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29tbW9uL2NvbnN0YW50L2FwaS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb21tb24vY29uc3RhbnQvcm9sZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb21tb24vaGVscGVyL2hhc2gtcGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29tbW9uL2hlbHBlci9qd3QtdG9rZW4uanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9kdG8vY29udGFjdC5kdG8uanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2NvbmZpZy9kYi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9jb25maWcvZW52LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2NvbmZpZy9qd3QuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvZGIvc2VlZC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2RpL2RpLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2RpL2RpLWdsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Jhc2UtcmVzcG9uc2UubWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci1taWRkbGV3YXJlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5LmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImNvcnNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtcmF0ZS1saW1pdFwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiaHR0cC1zdGF0dXMtY29kZXNcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwic2VxdWVsaXplXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImh0dHBcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBBdXRoRHRvIH0gZnJvbSBcIi4vZHRvL2F1dGguZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGF1dGhTZXJ2aWNlKSB7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5yZWdpc3RlcihyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsLiBQbGVhc2UgdmVyaWZ5IHlvdXIgZW1haWwuXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkNSRUFURUQsXG4gICAgICBkYXRhOiBuZXcgQXV0aER0byhkYXRhKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGxvZ2luKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UubG9naW4ocmVxdWVzdC5ib2R5KTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJVc2VyIExvZ2luIHN1Y2Nlc3NmdWxcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgQXV0aER0byh1c2VyKSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCIuLi91c2VyL3VzZXIuZGlcIjtcbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSBcIi4vYXV0aC5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgYXV0aERJS2V5cyA9IHtcbiAgY29udHJvbGxlcjogXCJhdXRoLWNvbnRyb2xsZXJcIixcbiAgc2VydmljZTogXCJhdXRoLXNlcnZpY2VcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgYXV0aERJS2V5cy5zZXJ2aWNlLFxuICBbdXNlckRJS2V5cy5zZXJ2aWNlXSxcbiAgKHVzZXJTZXJ2aWNlKSA9PiBuZXcgQXV0aFNlcnZpY2UodXNlclNlcnZpY2UpLFxuKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBhdXRoRElLZXlzLmNvbnRyb2xsZXIsXG4gIFthdXRoRElLZXlzLnNlcnZpY2VdLFxuICAoYXV0aFNlcnZpY2UpID0+IG5ldyBBdXRoQ29udHJvbGxlcihhdXRoU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGF1dGhESUtleXMgfSBmcm9tIFwiLi9hdXRoLmRpXCI7XG5cbmNvbnN0IGF1dGhSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBwcmVmaXggPSBcIi9hdXRoXCI7XG5cbmNvbnN0IGF1dGhDb250cm9sbGVyID0gY29udGFpbmVyLmdldChhdXRoRElLZXlzLmNvbnRyb2xsZXIpO1xuXG5hdXRoUm91dGVyLnBvc3QoYCR7cHJlZml4fS9sb2dpbmAsIChyZXEsIHJlcykgPT5cbiAgYXV0aENvbnRyb2xsZXIubG9naW4ocmVxLCByZXMpLFxuKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vcmVnaXN0ZXJgLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLnJlZ2lzdGVyKHJlcSwgcmVzKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhSb3V0ZXI7XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiQC9jb3JlL2NvbmZpZy9qd3QuY29uZmlnXCI7XG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9jb21tb24vaGVscGVyL2hhc2gtcGFzc3dvcmRcIjtcbmltcG9ydCB7IGdlbmVyYXRlVG9rZW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2hlbHBlci9qd3QtdG9rZW5cIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi8uLi9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hXCI7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2VcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IodXNlclNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyByZWdpc3RlcihhdXRoUmVnaXN0ZXJEdG8pIHtcbiAgICBjb25zdCB7IGZ1bGxOYW1lIH0gPSBhdXRoUmVnaXN0ZXJEdG87XG5cbiAgICBjb25zdCB7IGVtYWlsIH0gPSBhdXRoUmVnaXN0ZXJEdG8uY29udGFjdDtcbiAgICBjb25zb2xlLmxvZyhhdXRoUmVnaXN0ZXJEdG8pO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IGZ1bGxOYW1lLCBjb250YWN0OiB7IGVtYWlsIH0gfSxcbiAgICAgIGluY2x1ZGU6IFtDb250YWN0XSxcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgIHRocm93IG5ldyBBUElFcnJvcihcbiAgICAgICAgYEEgdXNlciB3aXRoIHRoZSBuYW1lIFwiJHtmdWxsTmFtZX1cIiBhbmQgZW1haWwgXCIke2VtYWlsfVwiIGFscmVhZHkgZXhpc3RzLmAsXG4gICAgICAgIFN0YXR1c0NvZGVzLkNPTkZMSUNULFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBhdXRoUmVnaXN0ZXJEdG8ucm9sZSA9IDI7XG5cbiAgICBjb25zdCBzYXZlZFVzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZShhdXRoUmVnaXN0ZXJEdG8pO1xuXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIHN1Yjogc2F2ZWRVc2VyLl9pZCxcbiAgICAgIGVtYWlsOiBzYXZlZFVzZXIuZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5jcmVhdGVUb2tlbihwYXlsb2FkKTtcblxuICAgIHJldHVybiB7IHVzZXI6IHNhdmVkVXNlciwgdG9rZW4gfTtcbiAgfVxuXG4gIGFzeW5jIGxvZ2luKGF1dGhsb2dpbkR0bykge1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBhdXRobG9naW5EdG87XG5cbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRCeUVtYWlsKGVtYWlsKTtcblxuICAgIGlmIChcbiAgICAgICFleGlzdGluZ1VzZXIgfHxcbiAgICAgICEoYXdhaXQgY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkLCBleGlzdGluZ1VzZXIucGFzc3dvcmQpKVxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIG1lc3NhZ2U6IFwiRW1haWwgb3IgUGFzc3dvcmQgaXMgaW5jb3JyZWN0LlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLlVOQVVUSE9SSVpFRCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBzdWI6IGV4aXN0aW5nVXNlci5faWQsXG4gICAgICBlbWFpbCxcbiAgICB9O1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmNyZWF0ZVRva2VuKHBheWxvYWQpO1xuXG4gICAgcmV0dXJuIHsgdXNlcjogZXhpc3RpbmdVc2VyLCB0b2tlbiB9O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlVG9rZW4ocGF5bG9hZCkge1xuICAgIGNvbnN0IHsgYWNjZXNzU2VjcmV0LCBhY2Nlc3NFeHBpcmVzSW4gfSA9IGNvbmZpZy5qd3Q7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IGdlbmVyYXRlVG9rZW4oXG4gICAgICBwYXlsb2FkLFxuICAgICAgYWNjZXNzU2VjcmV0LFxuICAgICAgYWNjZXNzRXhwaXJlc0luLFxuICAgICk7XG5cbiAgICByZXR1cm4geyBhY2Nlc3NUb2tlbiB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBVc2VyRHRvIH0gZnJvbSBcIkAvYXBpL3VzZXIvZHRvL3VzZXIuZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoRHRvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMudG9rZW4gPSBkYXRhLnRva2VuLmFjY2VzcyB8fCBudWxsO1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyRHRvKGRhdGEudXNlcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IEF1dGhvckR0byB9IGZyb20gXCIuL2R0by9hdXRob3IuZHRvLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoYXV0aG9yU2VydmljZSkge1xuICAgIHRoaXMuYXV0aG9yU2VydmljZSA9IGF1dGhvclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCB0aGlzLmF1dGhvclNlcnZpY2UuY3JlYXRlKHJlcXVlc3QuYm9keSk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiQXV0aG9yIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkNSRUFURUQsXG4gICAgICBkYXRhOiBuZXcgQXV0aG9yRHRvKGF1dGhvciksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgdGhpcy5hdXRob3JTZXJ2aWNlLmZpbmRBbGwoKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJBdXRob3IgbGlzdCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBhdXRob3IubWFwKChhKSA9PiBuZXcgQXV0aG9yRHRvKGEpKSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgdGhpcy5hdXRob3JTZXJ2aWNlLmZpbmRCeUlkKHJlcXVlc3QucGFyYW1zLmF1dGhvcklkKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJBdXRob3IgZmluZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgQXV0aG9yRHRvKGF1dGhvciksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCB0aGlzLmF1dGhvclNlcnZpY2UudXBkYXRlKFxuICAgICAgcmVxdWVzdC5wYXJhbXMuYXV0aG9ySWQsXG4gICAgICByZXF1ZXN0LmJvZHksXG4gICAgKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJBdXRob3IgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgQXV0aG9yRHRvKGF1dGhvciksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBkZWxldGUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCB0aGlzLmF1dGhvclNlcnZpY2UuZGVsZXRlKHJlcXVlc3QucGFyYW1zLmF1dGhvcklkKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJBdXRob3IgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgQXV0aG9yRHRvKGF1dGhvciksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IEF1dGhvckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9hdXRob3IuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgQXV0aG9yUmVwb3NpdG9yeSB9IGZyb20gXCIuL2F1dGhvci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBBdXRob3JTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aG9yLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhvckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJhdXRob3Itc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcImF1dGhvci1yZXBvc2l0b3J5XCIsXG4gIGNvbnRyb2xsZXI6IFwiYXV0aG9yLWNvbnRyb2xsZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3RlcihhdXRob3JESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBBdXRob3JSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhvckRJS2V5cy5zZXJ2aWNlLFxuICBbYXV0aG9yRElLZXlzLnJlcG9zaXRvcnldLFxuICAoYXV0aG9yUmVwb3NpdG9yeSkgPT4gbmV3IEF1dGhvclNlcnZpY2UoYXV0aG9yUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhvckRJS2V5cy5jb250cm9sbGVyLFxuICBbYXV0aG9yRElLZXlzLnNlcnZpY2VdLFxuICAoYXV0aG9yU2VydmljZSkgPT4gbmV3IEF1dGhvckNvbnRyb2xsZXIoYXV0aG9yU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi9tb2RlbC9hdXRob3IubW9kZVwiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG9yUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQXV0aG9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGF1dGhvckRJS2V5cyB9IGZyb20gXCIuL2F1dGhvci5kaVwiO1xuXG5jb25zdCBhdXRob3JSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBwcmVmaXggPSBcIi9hdXRob3JzXCI7XG5cbmNvbnN0IGF1dGhvckNvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGF1dGhvckRJS2V5cy5jb250cm9sbGVyKTtcblxuYXV0aG9yUm91dGVyLnBvc3QoYCR7cHJlZml4fWAsIChyZXEsIHJlcykgPT4gYXV0aG9yQ29udHJvbGxlci5jcmVhdGUocmVxLCByZXMpKTtcblxuYXV0aG9yUm91dGVyLmdldChgJHtwcmVmaXh9YCwgKHJlcSwgcmVzKSA9PiBhdXRob3JDb250cm9sbGVyLmZpbmRBbGwocmVxLCByZXMpKTtcblxuYXV0aG9yUm91dGVyLmdldChgJHtwcmVmaXh9LzphdXRob3JJZGAsIChyZXEsIHJlcykgPT5cbiAgYXV0aG9yQ29udHJvbGxlci5maW5kQnlJZChyZXEsIHJlcyksXG4pO1xuXG5hdXRob3JSb3V0ZXIuZGVsZXRlKGAke3ByZWZpeH0vOmF1dGhvcklkYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRob3JDb250cm9sbGVyLmRlbGV0ZShyZXEsIHJlcyksXG4pO1xuYXV0aG9yUm91dGVyLnBhdGNoKGAke3ByZWZpeH0vOmF1dGhvcklkYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRob3JDb250cm9sbGVyLnVwZGF0ZShyZXEsIHJlcyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRob3JSb3V0ZXI7XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoYXV0aG9yUmVwb3NpdG9yeSkge1xuICAgIHRoaXMuYXV0aG9yUmVwb3NpdG9yeSA9IGF1dGhvclJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGUoY3JlYXRlQXV0aG9yRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yUmVwb3NpdG9yeS5jcmVhdGUoY3JlYXRlQXV0aG9yRHRvKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yUmVwb3NpdG9yeS5maW5kQWxsKCk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChhdXRob3JJZCkge1xuICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IHRoaXMuYXV0aG9yUmVwb3NpdG9yeS5maW5kQnlJZChhdXRob3JJZCk7XG5cbiAgICBpZiAoIWF1dGhvcikge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICAgIG1lc3NhZ2U6IFwiQXV0aG9yIG5vdCBmb3VuZCFcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhdXRob3I7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoYXV0aG9ySWQsIHVwZGF0ZUF1dGhvckR0bykge1xuICAgIGF3YWl0IHRoaXMuZmluZEJ5SWQoYXV0aG9ySWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yUmVwb3NpdG9yeS51cGRhdGUoYXV0aG9ySWQsIHVwZGF0ZUF1dGhvckR0byk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoYXV0aG9ySWQpIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGF1dGhvcklkKTtcblxuICAgIHJldHVybiB0aGlzLmF1dGhvclJlcG9zaXRvcnkuZGVsZXRlKGF1dGhvcklkKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEF1dGhvckR0byB7XG4gIGNvbnN0cnVjdG9yKHsgaWQsIG5hbWUsIGJpb2dyYXBoeSwgZGF0ZU9mQmlydGgsIG5hdGlvbmFsaXR5IH0pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGJpb2dyYXBoeSxcbiAgICAgIGRhdGVPZkJpcnRoLFxuICAgICAgbmF0aW9uYWxpdHksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBBdXRob3IgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIkF1dGhvclwiLFxuICB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBiaW9ncmFwaHk6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5URVhULFxuICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgIH0sXG4gICAgZGF0ZU9mQmlydGg6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5EQVRFT05MWSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICAgIG5hdGlvbmFsaXR5OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgIHRhYmxlTmFtZTogXCJhdXRob3JzXCIsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBdXRob3I7XG4iLCJleHBvcnQgY2xhc3MgR2VucmVEdG8ge1xuICBjb25zdHJ1Y3Rvcih7IGlkLCBuYW1lIH0pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgR2VucmVEdG8gfSBmcm9tIFwiLi9kdG8vZ2VucmUuZHRvLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBHZW5yZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihnZW5yZVNlcnZpY2UpIHtcbiAgICB0aGlzLmdlbnJlU2VydmljZSA9IGdlbnJlU2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGdlbnJlID0gYXdhaXQgdGhpcy5nZW5yZVNlcnZpY2UuY3JlYXRlKHJlcXVlc3QuYm9keSk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiR2VucmUgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQ1JFQVRFRCxcbiAgICAgIGRhdGE6IG5ldyBHZW5yZUR0byhnZW5yZSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQWxsKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgZ2VucmUgPSBhd2FpdCB0aGlzLmdlbnJlU2VydmljZS5maW5kQWxsKCk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiR2VucmUgbGlzdCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBnZW5yZS5tYXAoKGcpID0+IG5ldyBHZW5yZUR0byhnKSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGdlbnJlID0gYXdhaXQgdGhpcy5nZW5yZVNlcnZpY2UuZmluZEJ5SWQocmVxdWVzdC5wYXJhbXMuZ2VucmVJZCk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiR2VucmUgZmluZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgR2VucmVEdG8oZ2VucmUpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgZ2VucmUgPSBhd2FpdCB0aGlzLmdlbnJlU2VydmljZS51cGRhdGUoXG4gICAgICByZXF1ZXN0LnBhcmFtcy5nZW5yZUlkLFxuICAgICAgcmVxdWVzdC5ib2R5LFxuICAgICk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiR2VucmUgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgR2VucmVEdG8oZ2VucmUpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgZ2VucmUgPSBhd2FpdCB0aGlzLmdlbnJlU2VydmljZS5kZWxldGUocmVxdWVzdC5wYXJhbXMuZ2VucmVJZCk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiR2VucmUgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgR2VucmVEdG8oZ2VucmUpLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBHZW5yZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9nZW5yZS5jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBHZW5yZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9nZW5yZS5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBHZW5yZVNlcnZpY2UgfSBmcm9tIFwiLi9nZW5yZS5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5yZURJS2V5cyA9IHtcbiAgc2VydmljZTogXCJnZW5yZS1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwiZ2VucmUtcmVwb3NpdG9yeVwiLFxuICBjb250cm9sbGVyOiBcImdlbnJlLWNvbnRyb2xsZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3RlcihnZW5yZURJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IEdlbnJlUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICBnZW5yZURJS2V5cy5zZXJ2aWNlLFxuICBbZ2VucmVESUtleXMucmVwb3NpdG9yeV0sXG4gIChnZW5yZVJlcG9zaXRvcnkpID0+IG5ldyBHZW5yZVNlcnZpY2UoZ2VucmVSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgZ2VucmVESUtleXMuY29udHJvbGxlcixcbiAgW2dlbnJlRElLZXlzLnNlcnZpY2VdLFxuICAoZ2VucmVTZXJ2aWNlKSA9PiBuZXcgR2VucmVDb250cm9sbGVyKGdlbnJlU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IEdlbnJlIGZyb20gXCIuL21vZGVsL2dlbnJlLm1vZGVcIjtcblxuZXhwb3J0IGNsYXNzIEdlbnJlUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoR2VucmUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IHsgZ2VucmVESUtleXMgfSBmcm9tIFwiLi9nZW5yZS5kaVwiO1xuXG5jb25zdCBnZW5yZVJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmNvbnN0IHByZWZpeCA9IFwiL2dlbnJlc1wiO1xuXG5jb25zdCBnZW5yZUNvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGdlbnJlRElLZXlzLmNvbnRyb2xsZXIpO1xuXG5nZW5yZVJvdXRlci5wb3N0KGAke3ByZWZpeH1gLCAocmVxLCByZXMpID0+IGdlbnJlQ29udHJvbGxlci5jcmVhdGUocmVxLCByZXMpKTtcblxuZ2VucmVSb3V0ZXIuZ2V0KGAke3ByZWZpeH1gLCAocmVxLCByZXMpID0+IGdlbnJlQ29udHJvbGxlci5maW5kQWxsKHJlcSwgcmVzKSk7XG5cbmdlbnJlUm91dGVyLmdldChgJHtwcmVmaXh9LzpnZW5yZUlkYCwgKHJlcSwgcmVzKSA9PlxuICBnZW5yZUNvbnRyb2xsZXIuZmluZEJ5SWQocmVxLCByZXMpLFxuKTtcblxuZ2VucmVSb3V0ZXIuZGVsZXRlKGAke3ByZWZpeH0vOmdlbnJlSWRgLCAocmVxLCByZXMpID0+XG4gIGdlbnJlQ29udHJvbGxlci5kZWxldGUocmVxLCByZXMpLFxuKTtcbmdlbnJlUm91dGVyLnBhdGNoKGAke3ByZWZpeH0vOmdlbnJlSWRgLCAocmVxLCByZXMpID0+XG4gIGdlbnJlQ29udHJvbGxlci51cGRhdGUocmVxLCByZXMpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2VucmVSb3V0ZXI7XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBHZW5yZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihnZW5yZVJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLmdlbnJlUmVwb3NpdG9yeSA9IGdlbnJlUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShjcmVhdGVHZW5yZUR0bykge1xuICAgIHJldHVybiB0aGlzLmdlbnJlUmVwb3NpdG9yeS5jcmVhdGUoY3JlYXRlR2VucmVEdG8pO1xuICB9XG5cbiAgYXN5bmMgZmluZEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZW5yZVJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoZ2VucmVJZCkge1xuICAgIGNvbnN0IGdlbnJlID0gYXdhaXQgdGhpcy5nZW5yZVJlcG9zaXRvcnkuZmluZEJ5SWQoZ2VucmVJZCk7XG5cbiAgICBpZiAoIWdlbnJlKSB7XG4gICAgICB0aHJvdyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgICAgbWVzc2FnZTogXCJHZW5yZSBub3QgZm91bmQhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2VucmU7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoZ2VucmVJZCwgdXBkYXRlR2VucmVEdG8pIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGdlbnJlSWQpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2VucmVSZXBvc2l0b3J5LnVwZGF0ZShnZW5yZUlkLCB1cGRhdGVHZW5yZUR0byk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoZ2VucmVJZCkge1xuICAgIGF3YWl0IHRoaXMuZmluZEJ5SWQoZ2VucmVJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5nZW5yZVJlcG9zaXRvcnkuZGVsZXRlKGdlbnJlSWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmltcG9ydCB7IHNlcXVlbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3QgR2VucmUgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIkdlbnJlXCIsXG4gIHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICB0YWJsZU5hbWU6IFwiZ2VucmVzXCIsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHZW5yZTtcbiIsImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBSb2xlID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJSb2xlXCIsXG4gIHtcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIHRhYmxlTmFtZTogXCJyb2xlc1wiLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUm9sZTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IFJvbGVSZXBvc2l0b3J5IH0gZnJvbSBcIi4vcm9sZS5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIi4vcm9sZS5zZWVkZXJcIjtcblxuZXhwb3J0IGNvbnN0IHJvbGVESUtleXMgPSB7XG4gIHJlcG9zaXRvcnk6IFwicm9sZS1yZXBvc2l0b3J5XCIsXG4gIHNlZWRlcjogXCJyb2xlLXNlZWRlclwiLFxuICBzZXJ2aWNlOiBcInJvbGUtc2VydmljZVwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKHJvbGVESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBSb2xlUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICByb2xlRElLZXlzLnNlZWRlcixcbiAgW3JvbGVESUtleXMucmVwb3NpdG9yeV0sXG4gIChyb2xlUmVwb3NpdG9yeSkgPT4gbmV3IFJvbGVTZWVkZXIocm9sZVJlcG9zaXRvcnkpLFxuKTtcbiIsImltcG9ydCB7IEJhc2VSZXBvc2l0b3J5IH0gZnJvbSBcIkAvc2hhcmVkL3JlcG9zaXRvcnkvYmFzZS5yZXBvc2l0b3J5XCI7XG5cbmltcG9ydCBSb2xlIGZyb20gXCIuL21vZGVsL3JvbGUubW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIFJvbGVSZXBvc2l0b3J5IGV4dGVuZHMgQmFzZVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihSb2xlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcm9sZXMgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnQvcm9sZVwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHJvbGVSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5yb2xlUmVwb3NpdG9yeSA9IHJvbGVSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlUm9sZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm9sZXMgPSBhd2FpdCB0aGlzLnJvbGVSZXBvc2l0b3J5LmZpbmRBbGwoKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nUm9sZU5hbWVzID0gbmV3IFNldChleGlzdGluZ1JvbGVzLm1hcCgocm9sZSkgPT4gcm9sZS5yb2xlKSk7XG5cbiAgICAgIGNvbnN0IHJvbGVzVG9DcmVhdGUgPSByb2xlcy5maWx0ZXIoXG4gICAgICAgIChyb2xlKSA9PiAhZXhpc3RpbmdSb2xlTmFtZXMuaGFzKHJvbGUucm9sZSksXG4gICAgICApO1xuXG4gICAgICBpZiAocm9sZXNUb0NyZWF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucm9sZVJlcG9zaXRvcnkuY3JlYXRlTWFueShyb2xlc1RvQ3JlYXRlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHJvbGVzOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIC8vIE9wdGlvbmFsOiBIYW5kbGUgb3IgcHJvcGFnYXRlIHRoZSBlcnJvciBhcyBuZWVkZWRcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnRhY3REdG8gfSBmcm9tIFwiQC9jb21tb24vc2NoZW1hL2R0by9jb250YWN0LmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlckR0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmZ1bGxOYW1lID0gZGF0YS5mdWxsTmFtZTtcbiAgICB0aGlzLnByb2ZpbGVJbWFnZSA9IGRhdGEucHJvZmlsZUltYWdlO1xuICAgIHRoaXMucm9sZSA9IGRhdGEucm9sZTtcbiAgICB0aGlzLmNvbnRhY3QgPSBuZXcgQ29udGFjdER0byhkYXRhLmNvbnRhY3QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmltcG9ydCB7IHNlcXVlbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3QgVXNlciA9IHNlcXVlbGl6ZS5kZWZpbmUoXG4gIFwiVXNlclwiLFxuICB7XG4gICAgZnVsbE5hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgcm9sZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcmVmZXJlbmNlczoge1xuICAgICAgICBtb2RlbDogXCJyb2xlc1wiLFxuICAgICAgICBrZXk6IFwiaWRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb250YWN0OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiBcImNvbnRhY3RzXCIsXG4gICAgICAgIGtleTogXCJpZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGFibGVOYW1lOiBcInVzZXJzXCIsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tIFwiLi91c2VyLnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFVzZXJTZWVkZXIgfSBmcm9tIFwiLi91c2VyLnNlZWRlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi91c2VyLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IHVzZXJESUtleXMgPSB7XG4gIHNlcnZpY2U6IFwidXNlci1zZXJ2aWNlXCIsXG4gIHJlcG9zaXRvcnk6IFwidXNlci1yZXBvc2l0b3J5XCIsXG4gIHNlZWRlcjogXCJ1c2VyLXNlZWRlclwiLFxufTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKHVzZXJESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBVc2VyUmVwb3NpdG9yeSgpKTtcblxuY29udGFpbmVyLnJlZ2lzdGVyKFxuICB1c2VyRElLZXlzLnNlcnZpY2UsXG4gIFt1c2VyRElLZXlzLnJlcG9zaXRvcnldLFxuICAodXNlclJlcG9zaXRvcnkpID0+IG5ldyBVc2VyU2VydmljZSh1c2VyUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VlZGVyLFxuICBbdXNlckRJS2V5cy5zZXJ2aWNlXSxcbiAgKHVzZXJTZXJ2aWNlKSA9PiBuZXcgVXNlclNlZWRlcih1c2VyU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IFVzZXIgZnJvbSBcIi4vbW9kZWwvdXNlci5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgVXNlclJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFVzZXIpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVXNlclNlZWRlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlQWRtaW4oKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZCh7IHJvbGU6IDEgfSk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5jcmVhdGUoe1xuICAgICAgICBjb250YWN0OiB7IGVtYWlsOiBcImJha3RhcmFkbWluQGdtYWlsLmNvbVwiIH0sXG4gICAgICAgIGZ1bGxOYW1lOiBcImJha3RhciBhZG1pblwiLFxuICAgICAgICBwYXNzd29yZDogXCJiYWt0YXJhZG1pblwiLFxuICAgICAgICByb2xlOiAxLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBhZG1pbjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2hlbHBlci9oYXNoLXBhc3N3b3JkXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vLi4vY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1c2VyUmVwb3NpdG9yeSkge1xuICAgIHRoaXMudXNlclJlcG9zaXRvcnkgPSB1c2VyUmVwb3NpdG9yeTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZSh1c2VyRHRvKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gdXNlckR0bztcblxuICAgIGNvbnN0IHsgZW1haWwsIHBob25lTnVtYmVyIH0gPSB1c2VyRHRvLmNvbnRhY3Q7XG5cbiAgICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBoYXNoUGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBzZXF1ZWxpemUudHJhbnNhY3Rpb24oKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXdDb250YWN0ID0gYXdhaXQgQ29udGFjdC5jcmVhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgfSxcbiAgICAgICAgeyB0cmFuc2FjdGlvbiB9LFxuICAgICAgKTtcblxuICAgICAgYXdhaXQgdHJhbnNhY3Rpb24uY29tbWl0KCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmNyZWF0ZSh7XG4gICAgICAgIC4uLnVzZXJEdG8sXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZEhhc2gsXG4gICAgICAgIHJvbGU6IDEsXG4gICAgICAgIGNvbnRhY3Q6IG5ld0NvbnRhY3QuaWQsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi5yb2xsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUVtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7IFwiY29udGFjdC5lbWFpbFwiOiBlbWFpbCB9KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHF1ZXJ5KTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRCeUlkKGlkKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZEJ5SWQoaWQpO1xuXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIG5vdCBmb3VuZCFcIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGlkLCB1c2VyRHRvKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS51cGRhdGUoaWQsIHVzZXJEdG8pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5kZWxldGUoaWQpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5RW1haWxPclRocm93KGVtYWlsKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZmluZEJ5RW1haWwoZW1haWwpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgbWVzc2FnZTogXCJVc2VyIHdpdGggdGhpcyBlbWFpbCBkb2VzIG5vdCBleGlzdC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQC9jb3JlL2RpL2RpLWdsb2JhbHNcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgcmF0ZUxpbWl0IH0gZnJvbSBcImV4cHJlc3MtcmF0ZS1saW1pdFwiO1xuXG5pbXBvcnQgYXV0aFJvdXRlciBmcm9tIFwiLi9hcGkvYXV0aC9hdXRoLnJvdXRlXCI7XG5pbXBvcnQgYXV0aG9yUm91dGVyIGZyb20gXCIuL2FwaS9hdXRob3IvYXV0aG9yLnJvdXRlXCI7XG5pbXBvcnQgZ2VucmVSb3V0ZXIgZnJvbSBcIi4vYXBpL2dlbnJlL2dlbnJlLnJvdXRlXCI7XG5pbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tIFwiLi9jb21tb24vY29uc3RhbnQvYXBpXCI7XG5pbXBvcnQgYmFzZVJlc3BvbnNlTWlkZGxld2FyZSBmcm9tIFwiLi9jb3JlL21pZGRsZXdhcmUvYmFzZS1yZXNwb25zZS5taWRkbGV3YXJlXCI7XG5pbXBvcnQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSBmcm9tIFwiLi9jb3JlL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci1taWRkbGV3YXJlXCI7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShcbiAgcmF0ZUxpbWl0KHtcbiAgICB3aW5kb3dNczogMTAgKiA2MCAqIDEwMDAsXG4gICAgbGltaXQ6IDEwMCxcbiAgICBzdGFuZGFyZEhlYWRlcnM6IFwiZHJhZnQtNlwiLFxuICAgIGxlZ2FjeUhlYWRlcnM6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IFwiVG9vIG1hbnkgcmVxdWVzdHNcIixcbiAgfSksXG4pO1xuYXBwLnNldChcInRydXN0IHByb3h5XCIsIDEpO1xuYXBwLnVzZShleHByZXNzLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC5kaXNhYmxlKFwieC1wb3dlcmVkLWJ5XCIpO1xuYXBwLnVzZShiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKTtcbmFwcC51c2UoYXBpUHJlZml4LCBhdXRoUm91dGVyKTtcbmFwcC51c2UoYXBpUHJlZml4LCBhdXRob3JSb3V0ZXIpO1xuYXBwLnVzZShhcGlQcmVmaXgsIGdlbnJlUm91dGVyKTtcblxuYXBwLnVzZShlcnJvckhhbmRsZXJNaWRkbGV3YXJlKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuIiwiZXhwb3J0IGNvbnN0IGFwaVByZWZpeCA9IFwiL2FwaS92MVwiO1xuIiwiZXhwb3J0IGNvbnN0IHJvbGVzID0gW3sgcm9sZTogXCJhZG1pblwiIH0sIHsgcm9sZTogXCJ1c2VyXCIgfV07XG4iLCJpbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcblxuICByZXR1cm4gYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb21wYXJlUGFzc3dvcmQocGxhaW5UZXh0UGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKSB7XG4gIHJldHVybiBiY3J5cHQuY29tcGFyZShwbGFpblRleHRQYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xufVxuXG5leHBvcnQgeyBjb21wYXJlUGFzc3dvcmQsIGhhc2hQYXNzd29yZCB9O1xuIiwiaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAocGF5bG9hZCwgc2VjcmV0LCB0aW1lKSA9PlxuICBqd3Quc2lnbihwYXlsb2FkLCBzZWNyZXQsIHtcbiAgICBleHBpcmVzSW46IHRpbWUsXG4gICAgYWxnb3JpdGhtOiBcIkhTNTEyXCIsXG4gIH0pO1xuXG5jb25zdCBkZWNvZGVkVG9rZW4gPSBhc3luYyAodG9rZW4sIHNlY3JldCkgPT4ge1xuICBpZiAoIXRva2VuKSB7XG4gICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICBtZXNzYWdlOiBcIk5vIHRva2VuIHByb3ZpZGVkXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgW3NjaGVtZSwgYXV0aFRva2VuXSA9IHRva2VuLnNwbGl0KFwiIFwiKTtcblxuICBpZiAoc2NoZW1lICE9PSBcIkJlYXJlclwiIHx8ICFhdXRoVG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCB0b2tlbiBmb3JtYXRcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuQkFEX1JFUVVFU1QsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGp3dC52ZXJpZnkoYXV0aFRva2VuLCBzZWNyZXQsIHsgYWxnb3JpdGhtczogW1wiSFM1MTJcIl0gfSwgKGVyciwgZGVjb2RlZCkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoXG4gICAgICAgICAgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIlRva2VuIHZlcmlmaWNhdGlvbiBmYWlsZWRcIixcbiAgICAgICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuVU5BVVRIT1JJWkVELFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShkZWNvZGVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkZWNvZGVkVG9rZW4sIGdlbmVyYXRlVG9rZW4gfTtcbiIsImV4cG9ydCBjbGFzcyBDb250YWN0RHRvIHtcbiAgY29uc3RydWN0b3IoeyBlbWFpbCwgcGhvbmVOdW1iZXIgfSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgZW1haWwsXG4gICAgICBwaG9uZU51bWJlcixcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmNvbnN0IENvbnRhY3QgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIkNvbnRhY3RcIixcbiAge1xuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHRyaW06IHRydWUsXG4gICAgICB2YWxpZGF0ZToge1xuICAgICAgICBpc0VtYWlsOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBob25lTnVtYmVyOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6IFwiY29udGFjdHNcIixcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iLCJpbXBvcnQgeyBTZXF1ZWxpemUgfSBmcm9tIFwic2VxdWVsaXplXCI7XHJcblxyXG5jbGFzcyBEYXRhYmFzZSB7XHJcbiAgc3RhdGljIGluc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyBJZiBhbiBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0cywgcHJldmVudCBjcmVhdGluZyBhIG5ldyBvbmVcclxuICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgXCJEYXRhYmFzZSBpbnN0YW5jZSBhbHJlYWR5IGV4aXN0cy4gVXNlIERhdGFiYXNlLmdldEluc3RhbmNlKCkgaW5zdGVhZC5cIixcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCB0byBnZXQgdGhlIFNpbmdsZXRvbiBpbnN0YW5jZSBvZiBTZXF1ZWxpemVcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIURhdGFiYXNlLmluc3RhbmNlKSB7XHJcbiAgICAgIERhdGFiYXNlLmluc3RhbmNlID0gbmV3IFNlcXVlbGl6ZSh7XHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX0RBVEFCQVNFLFxyXG4gICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSTkFNRSxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXHJcbiAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgICAgICBwb3J0OiBwcm9jZXNzLmVudi5EQl9QT1JULFxyXG4gICAgICAgIGRpYWxlY3Q6IHByb2Nlc3MuZW52LkRCX0RJQUxFQ1QsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBEYXRhYmFzZS5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCB0byBvcGVuIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uXHJcbiAgc3RhdGljIGFzeW5jIGNvbm5lY3QoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzZXF1ZWxpemUgPSBEYXRhYmFzZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICBhd2FpdCBzZXF1ZWxpemUuYXV0aGVudGljYXRlKCk7XHJcbiAgICAgIGF3YWl0IHNlcXVlbGl6ZS5zeW5jKHsgZm9yY2U6IHRydWUgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNvbm5lY3RlZCB0byB0aGUgZGF0YWJhc2UuXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIGRhdGFiYXNlOlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCB0byBjbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxyXG4gIHN0YXRpYyBhc3luYyBjbG9zZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChEYXRhYmFzZS5pbnN0YW5jZSkge1xyXG4gICAgICAgIGF3YWl0IERhdGFiYXNlLmluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBjb25uZWN0aW9uIHN1Y2Nlc3NmdWxseSBjbG9zZWQuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2xvc2luZyB0aGUgZGF0YWJhc2UgY29ubmVjdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2VxdWVsaXplID0gRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKTtcclxuXHJcbmV4cG9ydCB7IERhdGFiYXNlLCBzZXF1ZWxpemUgfTtcclxuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcImRvdGVudlwiO1xuXG5jb25maWcoKTtcblxuY29uZmlnKHtcbiAgcGF0aDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFwiLmVudi5sb2NhbFwiIDogXCIuZW52XCIsXG4gIG92ZXJyaWRlOiB0cnVlLFxufSk7XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBqd3Q6IHtcbiAgICBhbGdvcml0aG06IHByb2Nlc3MuZW52LkpXVF9BTEdPUklUSE0sXG4gICAgYWNjZXNzU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfQUNDRVNTX1NFQ1JFVCxcbiAgICBhY2Nlc3NFeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9BQ0NFU1NfRVhQSVJFU19JTixcbiAgICByZWZyZXNoU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfUkVGUkVTSF9TRUNSRVQsXG4gICAgcmVmcmVzaEV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfRVhQSVJFU19JTixcbiAgICB2ZXJpZmljYXRpb25TZWNyZXQ6IHByb2Nlc3MuZW52LkpXVF9WRVJJRklDQVRJT05fU0VDUkVULFxuICAgIHZlcmlmaWNhdGlvbkV4cGlyZXNJbjogcHJvY2Vzcy5lbnYuSldUX1ZFUklGSUNBVElPTl9FWFBJUkVTX0lOLFxuICB9LFxufTtcbiIsImltcG9ydCB7IHJvbGVESUtleXMgfSBmcm9tIFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgeyBSb2xlU2VlZGVyIH0gZnJvbSBcIkAvYXBpL3JvbGUvcm9sZS5zZWVkZXJcIjtcblxuaW1wb3J0IHsgdXNlckRJS2V5cyB9IGZyb20gXCIuLi8uLi9hcGkvdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgeyBVc2VyU2VlZGVyIH0gZnJvbSBcIi4uLy4uL2FwaS91c2VyL3VzZXIuc2VlZGVyXCI7XG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vZGkvZGktY29udGFpbmVyXCI7XG5cbmV4cG9ydCBjb25zdCBzZWVkID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByb2xlU2VlZGVyID0gbmV3IFJvbGVTZWVkZXIoY29udGFpbmVyLmdldChyb2xlRElLZXlzLnJlcG9zaXRvcnkpKTtcbiAgY29uc3QgdXNlclNlZWRlciA9IG5ldyBVc2VyU2VlZGVyKGNvbnRhaW5lci5nZXQodXNlckRJS2V5cy5zZXJ2aWNlKSk7XG5cbiAgYXdhaXQgcm9sZVNlZWRlci5jcmVhdGVSb2xlcygpO1xuICBhd2FpdCB1c2VyU2VlZGVyLmNyZWF0ZUFkbWluKCk7XG59O1xuIiwiLyoqXG4gKiBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXJcbiAqIEBjbGFzcyBEaUNvbnRhaW5lclxuICogQGRlc2NyaXB0aW9uIEEgc2ltcGxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciB0aGF0IGFsbG93cyB5b3UgdG8gcmVnaXN0ZXJcbiAqIGFuZCBnZXQgZGVwZW5kZW5jaWVzXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udGFpbmVyID0gbmV3IERpQ29udGFpbmVyKCk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIiwgW10sICgpID0+IG5ldyBMYW5kaW5nUGFnZVJlcG9zaXRvcnkoKSk7XG4gKiBjb250YWluZXIucmVnaXN0ZXIoXG4gKiAgXCJMYW5kaW5nUGFnZVNlcnZpY2VcIixcbiAqICBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0sXG4gKiAgKGxhbmRpbmdQYWdlUmVwb3NpdG9yeSkgPT4gbmV3IExhbmRpbmdQYWdlU2VydmljZShsYW5kaW5nUGFnZVJlcG9zaXRvcnkpLFxuICogKTtcbiAqXG4gKiBjb25zdCBsYW5kaW5nUGFnZVNlcnZpY2UgPSBjb250YWluZXIuZ2V0KFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIpO1xuICovXG5jbGFzcyBEaUNvbnRhaW5lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0ge307XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEBwYXJhbSBkZXBlbmRlbmNpZXMgLSBBcnJheSBvZiBkZXBlbmRlbmNpZXMgKGV4OiBbXCJMYW5kaW5nUGFnZVJlcG9zaXRvcnlcIl0pXG4gICAqIEBwYXJhbSBmdW5jIC0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBkZXBlbmRlbmN5XG4gICAqL1xuICByZWdpc3RlcihuYW1lLCBkZXBlbmRlbmNpZXMsIGZ1bmMpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgbmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgIUFycmF5LmlzQXJyYXkoZGVwZW5kZW5jaWVzKSB8fFxuICAgICAgdHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIlxuICAgICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcbiAgICB9XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llc1tuYW1lXSA9IHtcbiAgICAgIGRlcGVuZGVuY2llcyxcbiAgICAgIGZ1bmMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBkZXBlbmRlbmN5XG4gICAqIEBwYXJhbSBuYW1lIC0gTmFtZSBvZiB0aGUgZGVwZW5kZW5jeSAoZXg6IFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIpXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXQobmFtZSkge1xuICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRGVwZW5kZW5jeSBub3QgZm91bmQ6ICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGRlcGVuZGVuY2llcywgZnVuYyB9ID0gdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV07XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNJbnN0YW5jZXMgPSBkZXBlbmRlbmNpZXMubWFwKChkZXBlbmRlbmN5KSA9PlxuICAgICAgdGhpcy5nZXQoZGVwZW5kZW5jeSksXG4gICAgKTtcblxuICAgIHJldHVybiBmdW5jKC4uLmRlcGVuZGVuY2llc0luc3RhbmNlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuIiwiaW1wb3J0IFwiQC9hcGkvcm9sZS9yb2xlLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9hdXRoL2F1dGguZGlcIjtcbmltcG9ydCBcIkAvYXBpL2F1dGhvci9hdXRob3IuZGlcIjtcbmltcG9ydCBcIkAvYXBpL2dlbnJlL2dlbnJlLmRpXCI7XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiLi4vcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHJlcy5zdWNjZXNzID0gKHByb3BzKSA9PiB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKHByb3BzLnN0YXR1cyB8fCBTdGF0dXNDb2Rlcy5PSylcbiAgICAgIC5qc29uKEJhc2VSZXNwb25zZS5zdWNjZXNzKHByb3BzKSk7XG4gIH07XG5cbiAgcmVzLmVycm9yID0gKHByb3BzKSA9PiB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKHByb3BzLnN0YXR1cyB8fCBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVClcbiAgICAgIC5qc29uKEJhc2VSZXNwb25zZS5lcnJvcihwcm9wcykpO1xuICB9O1xuXG4gIG5leHQoKTtcbn1cbiIsImltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tIFwiQC9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2VcIjtcblxuY29uc3QgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSA9IChlcnJvciwgcmVxdWVzdCwgcmVzcG9uc2UsIG5leHQpID0+IHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQVBJRXJyb3IpIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNDAwKS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5leHQoKTtcblxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBCYXNlUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZTtcbiIsImltcG9ydCB7IGdldFJlYXNvblBocmFzZSwgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBkYXRhLnN1Y2Nlc3M7XG4gICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgdGhpcy5kYXRhID0gZGF0YS5kYXRhO1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscztcbiAgfVxuXG4gIHN0YXRpYyBzdWNjZXNzKHsgc3RhdHVzID0gU3RhdHVzQ29kZXMuT0ssIG1lc3NhZ2UsIGRhdGEgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBzdGF0dXMsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldFJlYXNvblBocmFzZShzdGF0dXMpLFxuICAgICAgZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcih7IG1lc3NhZ2UsIHN0YXR1cyA9IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULCBkZXRhaWxzID0gbnVsbCB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBzdGF0dXMsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldFJlYXNvblBocmFzZShzdGF0dXMpLFxuICAgICAgZGV0YWlscyxcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFQSUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIGNvbnN0IFssIHVwZGF0ZWRBdXRob3JdID0gYXdhaXQgdGhpcy5tb2RlbC51cGRhdGUoZGF0YSwge1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIHJldHVybmluZzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB1cGRhdGVkQXV0aG9yWzBdO1xuICB9XG5cbiAgZGVsZXRlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZGVzdHJveSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgIH0pO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgfSk7XG4gIH1cblxuICBmaW5kQWxsKCkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya2luZyBGaW5kQWxsXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEFsbCgpO1xuICB9XG5cbiAgZmluZE9uZShxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG5cbiAgZmluZChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gS2F5xLF0bGFyxLEgc2F5bWFcbiAgY291bnQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jb3VudCh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNYW55KGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5idWxrQ3JlYXRlKGRhdGEpO1xuICB9XG5cbiAgdXBkYXRlTWFueShxdWVyeSwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnVwZGF0ZShkYXRhLCB7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB1cHNlcnQocXVlcnksIGRhdGEpIHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCB0aGlzLmZpbmRPbmUocXVlcnkpO1xuXG4gICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUocmVjb3JkLmlkLCBkYXRhKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtc3RhdHVzLWNvZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiQC9jb3JlL2NvbmZpZy9lbnYuY29uZmlnXCI7XG5pbXBvcnQgXCJleHByZXNzLWFzeW5jLWVycm9yc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSBcImh0dHBcIjtcblxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5pbXBvcnQgeyBzZWVkIH0gZnJvbSBcIi4vY29yZS9kYi9zZWVkXCI7XG5cbmNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcblxuKGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jb25uZWN0KCk7IC8vIENvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXG4gICAgYXdhaXQgc2VlZCgpO1xuICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gc3RhcnRlZC4uLlwiKTtcbiAgICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQXBwbGljYXRpb24gZmFpbGVkIHRvIHN0YXJ0OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7IC8vIEV4aXQgd2l0aCBmYWlsdXJlIGNvZGVcbiAgfVxuXG4gIC8vIEdyYWNlZnVsbHkgaGFuZGxlIHNodXRkb3duIHNpZ25hbHNcbiAgcHJvY2Vzcy5vbihcIlNJR0lOVFwiLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0pO1xuXG4gIHByb2Nlc3Mub24oXCJTSUdURVJNXCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIlN0YXR1c0NvZGVzIiwiQXV0aER0byIsIkF1dGhDb250cm9sbGVyIiwiYXV0aFNlcnZpY2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9yZWdpc3RlciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJyZWdpc3RlciIsImJvZHkiLCJzZW50Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJDUkVBVEVEIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfbG9naW4iLCJfY2FsbGVlMiIsInVzZXIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJsb2dpbiIsIk9LIiwiX3gzIiwiX3g0IiwiY29udGFpbmVyIiwidXNlckRJS2V5cyIsIkF1dGhTZXJ2aWNlIiwiYXV0aERJS2V5cyIsImNvbnRyb2xsZXIiLCJzZXJ2aWNlIiwidXNlclNlcnZpY2UiLCJleHByZXNzIiwiYXV0aFJvdXRlciIsIlJvdXRlciIsInByZWZpeCIsImF1dGhDb250cm9sbGVyIiwiZ2V0IiwicG9zdCIsImNvbmNhdCIsInJlcSIsInJlcyIsImNvbmZpZyIsIkJhc2VSZXNwb25zZSIsImNvbXBhcmVQYXNzd29yZCIsImdlbmVyYXRlVG9rZW4iLCJDb250YWN0IiwiQVBJRXJyb3IiLCJhdXRoUmVnaXN0ZXJEdG8iLCJmdWxsTmFtZSIsImVtYWlsIiwiZXhpc3RpbmdVc2VyIiwic2F2ZWRVc2VyIiwicGF5bG9hZCIsInRva2VuIiwiY29udGFjdCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kT25lIiwid2hlcmUiLCJpbmNsdWRlIiwiQ09ORkxJQ1QiLCJyb2xlIiwiY3JlYXRlIiwic3ViIiwiX2lkIiwiY3JlYXRlVG9rZW4iLCJhYnJ1cHQiLCJhdXRobG9naW5EdG8iLCJwYXNzd29yZCIsImZpbmRCeUVtYWlsIiwidDAiLCJlcnJvciIsIlVOQVVUSE9SSVpFRCIsIl9jcmVhdGVUb2tlbiIsIl9jYWxsZWUzIiwiX2NvbmZpZyRqd3QiLCJhY2Nlc3NTZWNyZXQiLCJhY2Nlc3NFeHBpcmVzSW4iLCJhY2Nlc3NUb2tlbiIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImp3dCIsIlVzZXJEdG8iLCJhY2Nlc3MiLCJBdXRob3JEdG8iLCJBdXRob3JDb250cm9sbGVyIiwiYXV0aG9yU2VydmljZSIsIl9jcmVhdGUiLCJhdXRob3IiLCJfZmluZEFsbCIsImZpbmRBbGwiLCJtYXAiLCJhIiwiX2ZpbmRCeUlkIiwiZmluZEJ5SWQiLCJwYXJhbXMiLCJhdXRob3JJZCIsIl94NSIsIl94NiIsIl91cGRhdGUiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInVwZGF0ZSIsIl94NyIsIl94OCIsIl9kZWxldGUyIiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJkZWxldGUiLCJfeDkiLCJfeDEwIiwiQXV0aG9yUmVwb3NpdG9yeSIsIkF1dGhvclNlcnZpY2UiLCJhdXRob3JESUtleXMiLCJyZXBvc2l0b3J5IiwiYXV0aG9yUmVwb3NpdG9yeSIsIkJhc2VSZXBvc2l0b3J5IiwiQXV0aG9yIiwiX0Jhc2VSZXBvc2l0b3J5IiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsImF1dGhvclJvdXRlciIsImF1dGhvckNvbnRyb2xsZXIiLCJwYXRjaCIsImNyZWF0ZUF1dGhvckR0byIsIk5PVF9GT1VORCIsInVwZGF0ZUF1dGhvckR0byIsIl9yZWYiLCJpZCIsIm5hbWUiLCJiaW9ncmFwaHkiLCJkYXRlT2ZCaXJ0aCIsIm5hdGlvbmFsaXR5IiwiT2JqZWN0IiwiYXNzaWduIiwiRGF0YVR5cGVzIiwic2VxdWVsaXplIiwiZGVmaW5lIiwidHlwZSIsIlNUUklORyIsImFsbG93TnVsbCIsIlRFWFQiLCJEQVRFT05MWSIsInRpbWVzdGFtcHMiLCJ0YWJsZU5hbWUiLCJHZW5yZUR0byIsIkdlbnJlQ29udHJvbGxlciIsImdlbnJlU2VydmljZSIsImdlbnJlIiwiZyIsImdlbnJlSWQiLCJHZW5yZVJlcG9zaXRvcnkiLCJHZW5yZVNlcnZpY2UiLCJnZW5yZURJS2V5cyIsImdlbnJlUmVwb3NpdG9yeSIsIkdlbnJlIiwiZ2VucmVSb3V0ZXIiLCJnZW5yZUNvbnRyb2xsZXIiLCJjcmVhdGVHZW5yZUR0byIsInVwZGF0ZUdlbnJlRHRvIiwiUm9sZSIsInVuaXF1ZSIsInRyaW0iLCJSb2xlUmVwb3NpdG9yeSIsIlJvbGVTZWVkZXIiLCJyb2xlRElLZXlzIiwic2VlZGVyIiwicm9sZVJlcG9zaXRvcnkiLCJyb2xlcyIsIl9jcmVhdGVSb2xlcyIsImV4aXN0aW5nUm9sZXMiLCJleGlzdGluZ1JvbGVOYW1lcyIsInJvbGVzVG9DcmVhdGUiLCJTZXQiLCJmaWx0ZXIiLCJoYXMiLCJsZW5ndGgiLCJjcmVhdGVNYW55IiwiY3JlYXRlUm9sZXMiLCJDb250YWN0RHRvIiwicHJvZmlsZUltYWdlIiwiVXNlciIsIklOVEVHRVIiLCJyZWZlcmVuY2VzIiwibW9kZWwiLCJVc2VyUmVwb3NpdG9yeSIsIlVzZXJTZWVkZXIiLCJVc2VyU2VydmljZSIsInVzZXJSZXBvc2l0b3J5IiwiX2NyZWF0ZUFkbWluIiwiYWRtaW4iLCJmaW5kIiwiY3JlYXRlQWRtaW4iLCJoYXNoUGFzc3dvcmQiLCJ1c2VyRHRvIiwiX3VzZXJEdG8kY29udGFjdCIsInBob25lTnVtYmVyIiwicGFzc3dvcmRIYXNoIiwidHJhbnNhY3Rpb24iLCJuZXdDb250YWN0IiwiY29tbWl0IiwiX29iamVjdFNwcmVhZCIsInJvbGxiYWNrIiwiX2ZpbmRCeUVtYWlsIiwiX2ZpbmQiLCJxdWVyeSIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX2ZpbmRCeUVtYWlsT3JUaHJvdyIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiZmluZEJ5RW1haWxPclRocm93IiwiY29ycyIsInJhdGVMaW1pdCIsImFwaVByZWZpeCIsImJhc2VSZXNwb25zZU1pZGRsZXdhcmUiLCJlcnJvckhhbmRsZXJNaWRkbGV3YXJlIiwiYXBwIiwidXNlIiwid2luZG93TXMiLCJsaW1pdCIsInN0YW5kYXJkSGVhZGVycyIsImxlZ2FjeUhlYWRlcnMiLCJzZXQiLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJqc29uIiwiZGlzYWJsZSIsImJjcnlwdCIsIl9oYXNoUGFzc3dvcmQiLCJzYWx0IiwiZ2VuU2FsdCIsImhhc2giLCJfY29tcGFyZVBhc3N3b3JkIiwicGxhaW5UZXh0UGFzc3dvcmQiLCJoYXNoZWRQYXNzd29yZCIsImNvbXBhcmUiLCJzZWNyZXQiLCJ0aW1lIiwic2lnbiIsImV4cGlyZXNJbiIsImFsZ29yaXRobSIsImRlY29kZWRUb2tlbiIsIl90b2tlbiRzcGxpdCIsIl90b2tlbiRzcGxpdDIiLCJzY2hlbWUiLCJhdXRoVG9rZW4iLCJCQURfUkVRVUVTVCIsInNwbGl0IiwiX3NsaWNlZFRvQXJyYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInZlcmlmeSIsImFsZ29yaXRobXMiLCJlcnIiLCJkZWNvZGVkIiwidmFsaWRhdGUiLCJpc0VtYWlsIiwiU2VxdWVsaXplIiwiRGF0YWJhc2UiLCJpbnN0YW5jZSIsIkVycm9yIiwiZ2V0SW5zdGFuY2UiLCJkYXRhYmFzZSIsInByb2Nlc3MiLCJlbnYiLCJEQl9EQVRBQkFTRSIsInVzZXJuYW1lIiwiREJfVVNFUk5BTUUiLCJEQl9QQVNTV09SRCIsImhvc3QiLCJEQl9IT1NUIiwicG9ydCIsIkRCX1BPUlQiLCJkaWFsZWN0IiwiREJfRElBTEVDVCIsIl9jb25uZWN0IiwiX3NlcXVlbGl6ZSIsImF1dGhlbnRpY2F0ZSIsInN5bmMiLCJmb3JjZSIsImNvbm5lY3QiLCJfY2xvc2UiLCJjbG9zZSIsIl9kZWZpbmVQcm9wZXJ0eSIsInBhdGgiLCJOT0RFX0VOViIsIm92ZXJyaWRlIiwiSldUX0FMR09SSVRITSIsIkpXVF9BQ0NFU1NfU0VDUkVUIiwiSldUX0FDQ0VTU19FWFBJUkVTX0lOIiwicmVmcmVzaFNlY3JldCIsIkpXVF9SRUZSRVNIX1NFQ1JFVCIsInJlZnJlc2hFeHBpcmVzSW4iLCJKV1RfUkVGUkVTSF9FWFBJUkVTX0lOIiwidmVyaWZpY2F0aW9uU2VjcmV0IiwiSldUX1ZFUklGSUNBVElPTl9TRUNSRVQiLCJ2ZXJpZmljYXRpb25FeHBpcmVzSW4iLCJKV1RfVkVSSUZJQ0FUSU9OX0VYUElSRVNfSU4iLCJzZWVkIiwicm9sZVNlZWRlciIsInVzZXJTZWVkZXIiLCJEaUNvbnRhaW5lciIsImRlcGVuZGVuY2llcyIsImZ1bmMiLCJBcnJheSIsImlzQXJyYXkiLCJfdGhpcyIsIl90aGlzJGRlcGVuZGVuY2llcyRuYSIsImRlcGVuZGVuY2llc0luc3RhbmNlcyIsImRlcGVuZGVuY3kiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwcm9wcyIsInN0YXR1c0NvZGUiLCJnZXRSZWFzb25QaHJhc2UiLCJkZXRhaWxzIiwiX3JlZiRzdGF0dXMiLCJfcmVmMiIsIl9yZWYyJHN0YXR1cyIsIl9yZWYyJGRldGFpbHMiLCJfRXJyb3IiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiX3lpZWxkJHRoaXMkbW9kZWwkdXBkIiwiX3lpZWxkJHRoaXMkbW9kZWwkdXBkMiIsInVwZGF0ZWRBdXRob3IiLCJyZXR1cm5pbmciLCJkZXN0cm95IiwiY291bnQiLCJidWxrQ3JlYXRlIiwidXBkYXRlTWFueSIsIl91cHNlcnQiLCJyZWNvcmQiLCJ1cHNlcnQiLCJjcmVhdGVTZXJ2ZXIiLCJzZXJ2ZXIiLCJQT1JUIiwibGlzdGVuIiwiZXhpdCIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==