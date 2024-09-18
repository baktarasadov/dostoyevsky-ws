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
              console.log(author);
              response.success({
                message: "Author updated successfully",
                status: http_status_codes__WEBPACK_IMPORTED_MODULE_4__.StatusCodes.OK,
                data: new _dto_author_dto_js__WEBPACK_IMPORTED_MODULE_5__.AuthorDto(author)
              });
            case 5:
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
                message: "User not found!"
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
/* harmony import */ var _common_constant_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/constant/api */ "./src/common/constant/api.js");
/* harmony import */ var _core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/middleware/base-response.middleware */ "./src/core/middleware/base-response.middleware.js");
/* harmony import */ var _core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/middleware/error-handler-middleware */ "./src/core/middleware/error-handler-middleware.js");









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
app.use(_core_middleware_base_response_middleware__WEBPACK_IMPORTED_MODULE_7__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_6__.apiPrefix, _api_auth_auth_route__WEBPACK_IMPORTED_MODULE_4__["default"]);
app.use(_common_constant_api__WEBPACK_IMPORTED_MODULE_6__.apiPrefix, _api_author_author_route__WEBPACK_IMPORTED_MODULE_5__["default"]);
app.use(_core_middleware_error_handler_middleware__WEBPACK_IMPORTED_MODULE_8__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxDQUFDLFFBQVEsZUFBQWpWLDhFQUFBLGNBQUFDLHNFQUFBLENBQUUsU0FBQUUsUUFBQTtVQUFBLE9BQUFGLHNFQUFBLFVBQUFPLFNBQUFDLFFBQUE7WUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtjQUFBO2dCQUFBRixRQUFBLENBQUFFLElBQUE7Z0JBQUEsT0FDYnVQLDREQUFRLENBQUN3QixLQUFLLENBQUMsQ0FBQztjQUFBO2dCQUFFO2dCQUN4Qm5CLE9BQU8sQ0FBQ3lFLElBQUksQ0FBQyxDQUFDLENBQUM7Y0FBQztjQUFBO2dCQUFBLE9BQUF2VSxRQUFBLENBQUFVLElBQUE7WUFBQTtVQUFBLEdBQUFoQixPQUFBO1FBQUEsQ0FDakIsR0FBQztRQUVGb1EsT0FBTyxDQUFDMEUsRUFBRSxDQUFDLFNBQVMsZUFBQWpWLDhFQUFBLGNBQUFDLHNFQUFBLENBQUUsU0FBQXdCLFNBQUE7VUFBQSxPQUFBeEIsc0VBQUEsVUFBQTBCLFVBQUFDLFNBQUE7WUFBQSxrQkFBQUEsU0FBQSxDQUFBbEIsSUFBQSxHQUFBa0IsU0FBQSxDQUFBakIsSUFBQTtjQUFBO2dCQUFBaUIsU0FBQSxDQUFBakIsSUFBQTtnQkFBQSxPQUNkdVAsNERBQVEsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDO2NBQUE7Z0JBQUU7Z0JBQ3hCbkIsT0FBTyxDQUFDeUUsSUFBSSxDQUFDLENBQUMsQ0FBQztjQUFDO2NBQUE7Z0JBQUEsT0FBQXBULFNBQUEsQ0FBQVQsSUFBQTtZQUFBO1VBQUEsR0FBQU0sUUFBQTtRQUFBLENBQ2pCLEdBQUM7TUFBQztNQUFBO1FBQUEsT0FBQWdFLFNBQUEsQ0FBQXRFLElBQUE7SUFBQTtFQUFBLEdBQUFnRSxRQUFBO0FBQUEsQ0FDSixHQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2F1dGguY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aC9hdXRoLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2F1dGgucm91dGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGgvYXV0aC5zZXJ2aWNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRoL2R0by9hdXRoLmR0by5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aG9yL2F1dGhvci5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvYXV0aG9yLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvYXV0aG9yLnJlcG9zaXRvcnkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGhvci9hdXRob3Iucm91dGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL2F1dGhvci9hdXRob3Iuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvYXV0aG9yL2R0by9hdXRob3IuZHRvLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9hdXRob3IvbW9kZWwvYXV0aG9yLm1vZGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3JvbGUvbW9kZWwvcm9sZS5tb2RlbC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS9yb2xlL3JvbGUucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvcm9sZS9yb2xlLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci9kdG8vdXNlci5kdG8uanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBpL3VzZXIvbW9kZWwvdXNlci5tb2RlbC5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLmRpLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2FwaS91c2VyL3VzZXIucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlZWRlci5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9hcGkvdXNlci91c2VyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9jb25zdGFudC9hcGkuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29tbW9uL2NvbnN0YW50L3JvbGUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29tbW9uL2hlbHBlci9oYXNoLXBhc3N3b3JkLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9oZWxwZXIvand0LXRva2VuLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvbW1vbi9zY2hlbWEvbW9kZWwvY29udGFjdC1tb2RlbC5zY2hlbWEuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9jb25maWcvZGIuY29uZmlnLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvY29uZmlnL2Vudi5jb25maWcuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9jb25maWcvand0LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL2RiL3NlZWQuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9kaS9kaS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9kaS9kaS1nbG9iYWxzLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvY29yZS9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXItbWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvLi9zcmMvc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlLmpzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzLy4vc3JjL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvd3JhcE5hdGl2ZVN1cGVyXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3MtYXN5bmMtZXJyb3JzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzLXJhdGUtbGltaXRcIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcImh0dHAtc3RhdHVzLWNvZGVzXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3MvZXh0ZXJuYWwgY29tbW9uanMgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy9leHRlcm5hbCBjb21tb25qcyBcInNlcXVlbGl6ZVwiIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rvc3RveWV2c2t5LXdzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZG9zdG95ZXZza3ktd3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kb3N0b3lldnNreS13cy8uL3NyYy9zZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuaW1wb3J0IHsgQXV0aER0byB9IGZyb20gXCIuL2R0by9hdXRoLmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZSkge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcbiAgfVxuXG4gIGFzeW5jIHJlZ2lzdGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIocmVxdWVzdC5ib2R5KTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bC4gUGxlYXNlIHZlcmlmeSB5b3VyIGVtYWlsLlwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DUkVBVEVELFxuICAgICAgZGF0YTogbmV3IEF1dGhEdG8oZGF0YSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBsb2dpbihyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKHJlcXVlc3QuYm9keSk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiVXNlciBMb2dpbiBzdWNjZXNzZnVsXCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEF1dGhEdG8odXNlciksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IHVzZXJESUtleXMgfSBmcm9tIFwiLi4vdXNlci91c2VyLmRpXCI7XG5pbXBvcnQgeyBBdXRoQ29udHJvbGxlciB9IGZyb20gXCIuL2F1dGguY29udHJvbGxlclwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhESUtleXMgPSB7XG4gIGNvbnRyb2xsZXI6IFwiYXV0aC1jb250cm9sbGVyXCIsXG4gIHNlcnZpY2U6IFwiYXV0aC1zZXJ2aWNlXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhESUtleXMuc2VydmljZSxcbiAgW3VzZXJESUtleXMuc2VydmljZV0sXG4gICh1c2VyU2VydmljZSkgPT4gbmV3IEF1dGhTZXJ2aWNlKHVzZXJTZXJ2aWNlKSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgYXV0aERJS2V5cy5jb250cm9sbGVyLFxuICBbYXV0aERJS2V5cy5zZXJ2aWNlXSxcbiAgKGF1dGhTZXJ2aWNlKSA9PiBuZXcgQXV0aENvbnRyb2xsZXIoYXV0aFNlcnZpY2UpLFxuKTtcbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuXG5pbXBvcnQgeyBhdXRoRElLZXlzIH0gZnJvbSBcIi4vYXV0aC5kaVwiO1xuXG5jb25zdCBhdXRoUm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuY29uc3QgcHJlZml4ID0gXCIvYXV0aFwiO1xuXG5jb25zdCBhdXRoQ29udHJvbGxlciA9IGNvbnRhaW5lci5nZXQoYXV0aERJS2V5cy5jb250cm9sbGVyKTtcblxuYXV0aFJvdXRlci5wb3N0KGAke3ByZWZpeH0vbG9naW5gLCAocmVxLCByZXMpID0+XG4gIGF1dGhDb250cm9sbGVyLmxvZ2luKHJlcSwgcmVzKSxcbik7XG5cbmF1dGhSb3V0ZXIucG9zdChgJHtwcmVmaXh9L3JlZ2lzdGVyYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRoQ29udHJvbGxlci5yZWdpc3RlcihyZXEsIHJlcyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoUm91dGVyO1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkAvY29yZS9jb25maWcvand0LmNvbmZpZ1wiO1xuaW1wb3J0IHsgQmFzZVJlc3BvbnNlIH0gZnJvbSBcIkAvY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBjb21wYXJlUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2hlbHBlci9oYXNoLXBhc3N3b3JkXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVRva2VuIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9oZWxwZXIvand0LXRva2VuXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vLi4vY29tbW9uL3NjaGVtYS9tb2RlbC9jb250YWN0LW1vZGVsLnNjaGVtYVwiO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2Vycm9yLXJlc3BvbnNlL2Vycm9yLXJlc3BvbnNlXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyU2VydmljZSA9IHVzZXJTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgcmVnaXN0ZXIoYXV0aFJlZ2lzdGVyRHRvKSB7XG4gICAgY29uc3QgeyBmdWxsTmFtZSB9ID0gYXV0aFJlZ2lzdGVyRHRvO1xuXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gYXV0aFJlZ2lzdGVyRHRvLmNvbnRhY3Q7XG4gICAgY29uc29sZS5sb2coYXV0aFJlZ2lzdGVyRHRvKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZE9uZSh7XG4gICAgICB3aGVyZTogeyBmdWxsTmFtZSwgY29udGFjdDogeyBlbWFpbCB9IH0sXG4gICAgICBpbmNsdWRlOiBbQ29udGFjdF0sXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgICB0aHJvdyBuZXcgQVBJRXJyb3IoXG4gICAgICAgIGBBIHVzZXIgd2l0aCB0aGUgbmFtZSBcIiR7ZnVsbE5hbWV9XCIgYW5kIGVtYWlsIFwiJHtlbWFpbH1cIiBhbHJlYWR5IGV4aXN0cy5gLFxuICAgICAgICBTdGF0dXNDb2Rlcy5DT05GTElDVCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXV0aFJlZ2lzdGVyRHRvLnJvbGUgPSAyO1xuXG4gICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5jcmVhdGUoYXV0aFJlZ2lzdGVyRHRvKTtcblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBzdWI6IHNhdmVkVXNlci5faWQsXG4gICAgICBlbWFpbDogc2F2ZWRVc2VyLmVtYWlsLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuY3JlYXRlVG9rZW4ocGF5bG9hZCk7XG5cbiAgICByZXR1cm4geyB1c2VyOiBzYXZlZFVzZXIsIHRva2VuIH07XG4gIH1cblxuICBhc3luYyBsb2dpbihhdXRobG9naW5EdG8pIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXV0aGxvZ2luRHRvO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kQnlFbWFpbChlbWFpbCk7XG5cbiAgICBpZiAoXG4gICAgICAhZXhpc3RpbmdVc2VyIHx8XG4gICAgICAhKGF3YWl0IGNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgZXhpc3RpbmdVc2VyLnBhc3N3b3JkKSlcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIkVtYWlsIG9yIFBhc3N3b3JkIGlzIGluY29ycmVjdC5cIixcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5VTkFVVEhPUklaRUQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgc3ViOiBleGlzdGluZ1VzZXIuX2lkLFxuICAgICAgZW1haWwsXG4gICAgfTtcblxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5jcmVhdGVUb2tlbihwYXlsb2FkKTtcblxuICAgIHJldHVybiB7IHVzZXI6IGV4aXN0aW5nVXNlciwgdG9rZW4gfTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVRva2VuKHBheWxvYWQpIHtcbiAgICBjb25zdCB7IGFjY2Vzc1NlY3JldCwgYWNjZXNzRXhwaXJlc0luIH0gPSBjb25maWcuand0O1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZVRva2VuKFxuICAgICAgcGF5bG9hZCxcbiAgICAgIGFjY2Vzc1NlY3JldCxcbiAgICAgIGFjY2Vzc0V4cGlyZXNJbixcbiAgICApO1xuXG4gICAgcmV0dXJuIHsgYWNjZXNzVG9rZW4gfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlckR0byB9IGZyb20gXCJAL2FwaS91c2VyL2R0by91c2VyLmR0b1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aER0byB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnRva2VuID0gZGF0YS50b2tlbi5hY2Nlc3MgfHwgbnVsbDtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlckR0byhkYXRhLnVzZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBBdXRob3JEdG8gfSBmcm9tIFwiLi9kdG8vYXV0aG9yLmR0by5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG9yQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGF1dGhvclNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGhvclNlcnZpY2UgPSBhdXRob3JTZXJ2aWNlO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgdGhpcy5hdXRob3JTZXJ2aWNlLmNyZWF0ZShyZXF1ZXN0LmJvZHkpO1xuXG4gICAgcmVzcG9uc2Uuc3VjY2Vzcyh7XG4gICAgICBtZXNzYWdlOiBcIkF1dGhvciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5DUkVBVEVELFxuICAgICAgZGF0YTogbmV3IEF1dGhvckR0byhhdXRob3IpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZmluZEFsbChyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IHRoaXMuYXV0aG9yU2VydmljZS5maW5kQWxsKCk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiQXV0aG9yIGxpc3Qgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogYXV0aG9yLm1hcCgoYSkgPT4gbmV3IEF1dGhvckR0byhhKSksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChyZXF1ZXN0LCByZXNwb25zZSkge1xuICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IHRoaXMuYXV0aG9yU2VydmljZS5maW5kQnlJZChyZXF1ZXN0LnBhcmFtcy5hdXRob3JJZCk7XG5cbiAgICByZXNwb25zZS5zdWNjZXNzKHtcbiAgICAgIG1lc3NhZ2U6IFwiQXV0aG9yIGZpbmQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk9LLFxuICAgICAgZGF0YTogbmV3IEF1dGhvckR0byhhdXRob3IpLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYXV0aG9yID0gYXdhaXQgdGhpcy5hdXRob3JTZXJ2aWNlLnVwZGF0ZShcbiAgICAgIHJlcXVlc3QucGFyYW1zLmF1dGhvcklkLFxuICAgICAgcmVxdWVzdC5ib2R5LFxuICAgICk7XG4gICAgY29uc29sZS5sb2coYXV0aG9yKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJBdXRob3IgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgQXV0aG9yRHRvKGF1dGhvciksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBkZWxldGUocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgICBjb25zdCBhdXRob3IgPSBhd2FpdCB0aGlzLmF1dGhvclNlcnZpY2UuZGVsZXRlKHJlcXVlc3QucGFyYW1zLmF1dGhvcklkKTtcblxuICAgIHJlc3BvbnNlLnN1Y2Nlc3Moe1xuICAgICAgbWVzc2FnZTogXCJBdXRob3IgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuT0ssXG4gICAgICBkYXRhOiBuZXcgQXV0aG9yRHRvKGF1dGhvciksXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCJAL2NvcmUvZGkvZGktY29udGFpbmVyXCI7XG5cbmltcG9ydCB7IEF1dGhvckNvbnRyb2xsZXIgfSBmcm9tIFwiLi9hdXRob3IuY29udHJvbGxlclwiO1xuaW1wb3J0IHsgQXV0aG9yUmVwb3NpdG9yeSB9IGZyb20gXCIuL2F1dGhvci5yZXBvc2l0b3J5XCI7XG5pbXBvcnQgeyBBdXRob3JTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aG9yLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhvckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJhdXRob3Itc2VydmljZVwiLFxuICByZXBvc2l0b3J5OiBcImF1dGhvci1yZXBvc2l0b3J5XCIsXG4gIGNvbnRyb2xsZXI6IFwiYXV0aG9yLWNvbnRyb2xsZXJcIixcbn07XG5cbmNvbnRhaW5lci5yZWdpc3RlcihhdXRob3JESUtleXMucmVwb3NpdG9yeSwgW10sICgpID0+IG5ldyBBdXRob3JSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhvckRJS2V5cy5zZXJ2aWNlLFxuICBbYXV0aG9yRElLZXlzLnJlcG9zaXRvcnldLFxuICAoYXV0aG9yUmVwb3NpdG9yeSkgPT4gbmV3IEF1dGhvclNlcnZpY2UoYXV0aG9yUmVwb3NpdG9yeSksXG4pO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIGF1dGhvckRJS2V5cy5jb250cm9sbGVyLFxuICBbYXV0aG9yRElLZXlzLnNlcnZpY2VdLFxuICAoYXV0aG9yU2VydmljZSkgPT4gbmV3IEF1dGhvckNvbnRyb2xsZXIoYXV0aG9yU2VydmljZSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi9tb2RlbC9hdXRob3IubW9kZVwiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG9yUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQXV0aG9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IGF1dGhvckRJS2V5cyB9IGZyb20gXCIuL2F1dGhvci5kaVwiO1xuXG5jb25zdCBhdXRob3JSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5jb25zdCBwcmVmaXggPSBcIi9hdXRob3JzXCI7XG5cbmNvbnN0IGF1dGhvckNvbnRyb2xsZXIgPSBjb250YWluZXIuZ2V0KGF1dGhvckRJS2V5cy5jb250cm9sbGVyKTtcblxuYXV0aG9yUm91dGVyLnBvc3QoYCR7cHJlZml4fWAsIChyZXEsIHJlcykgPT4gYXV0aG9yQ29udHJvbGxlci5jcmVhdGUocmVxLCByZXMpKTtcblxuYXV0aG9yUm91dGVyLmdldChgJHtwcmVmaXh9YCwgKHJlcSwgcmVzKSA9PiBhdXRob3JDb250cm9sbGVyLmZpbmRBbGwocmVxLCByZXMpKTtcblxuYXV0aG9yUm91dGVyLmdldChgJHtwcmVmaXh9LzphdXRob3JJZGAsIChyZXEsIHJlcykgPT5cbiAgYXV0aG9yQ29udHJvbGxlci5maW5kQnlJZChyZXEsIHJlcyksXG4pO1xuXG5hdXRob3JSb3V0ZXIuZGVsZXRlKGAke3ByZWZpeH0vOmF1dGhvcklkYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRob3JDb250cm9sbGVyLmRlbGV0ZShyZXEsIHJlcyksXG4pO1xuYXV0aG9yUm91dGVyLnBhdGNoKGAke3ByZWZpeH0vOmF1dGhvcklkYCwgKHJlcSwgcmVzKSA9PlxuICBhdXRob3JDb250cm9sbGVyLnVwZGF0ZShyZXEsIHJlcyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRob3JSb3V0ZXI7XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vY29yZS9yZXNwb25zZS9iYXNlLXJlc3BvbnNlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoYXV0aG9yUmVwb3NpdG9yeSkge1xuICAgIHRoaXMuYXV0aG9yUmVwb3NpdG9yeSA9IGF1dGhvclJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGUoY3JlYXRlQXV0aG9yRHRvKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yUmVwb3NpdG9yeS5jcmVhdGUoY3JlYXRlQXV0aG9yRHRvKTtcbiAgfVxuXG4gIGFzeW5jIGZpbmRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aG9yUmVwb3NpdG9yeS5maW5kQWxsKCk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChhdXRob3JJZCkge1xuICAgIGNvbnN0IGF1dGhvciA9IGF3YWl0IHRoaXMuYXV0aG9yUmVwb3NpdG9yeS5maW5kQnlJZChhdXRob3JJZCk7XG5cbiAgICBpZiAoIWF1dGhvcikge1xuICAgICAgdGhyb3cgQmFzZVJlc3BvbnNlLmVycm9yKHtcbiAgICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5OT1RfRk9VTkQsXG4gICAgICAgIG1lc3NhZ2U6IFwiVXNlciBub3QgZm91bmQhXCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXV0aG9yO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlKGF1dGhvcklkLCB1cGRhdGVBdXRob3JEdG8pIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGF1dGhvcklkKTtcblxuICAgIHJldHVybiB0aGlzLmF1dGhvclJlcG9zaXRvcnkudXBkYXRlKGF1dGhvcklkLCB1cGRhdGVBdXRob3JEdG8pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGF1dGhvcklkKSB7XG4gICAgYXdhaXQgdGhpcy5maW5kQnlJZChhdXRob3JJZCk7XG5cbiAgICByZXR1cm4gdGhpcy5hdXRob3JSZXBvc2l0b3J5LmRlbGV0ZShhdXRob3JJZCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBdXRob3JEdG8ge1xuICBjb25zdHJ1Y3Rvcih7IGlkLCBuYW1lLCBiaW9ncmFwaHksIGRhdGVPZkJpcnRoLCBuYXRpb25hbGl0eSB9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBiaW9ncmFwaHksXG4gICAgICBkYXRlT2ZCaXJ0aCxcbiAgICAgIG5hdGlvbmFsaXR5LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhVHlwZXMgfSBmcm9tIFwic2VxdWVsaXplXCI7XG5cbmltcG9ydCB7IHNlcXVlbGl6ZSB9IGZyb20gXCIuLi8uLi8uLi9jb3JlL2NvbmZpZy9kYi5jb25maWdcIjtcblxuY29uc3QgQXV0aG9yID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJBdXRob3JcIixcbiAge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgYmlvZ3JhcGh5OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuVEVYVCxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICAgIGRhdGVPZkJpcnRoOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuREFURU9OTFksXG4gICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgfSxcbiAgICBuYXRpb25hbGl0eToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgICB0YWJsZU5hbWU6IFwiYXV0aG9yc1wiLFxuICB9LFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aG9yO1xuIiwiaW1wb3J0IHsgRGF0YVR5cGVzIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmNvbnN0IFJvbGUgPSBzZXF1ZWxpemUuZGVmaW5lKFxuICBcIlJvbGVcIixcbiAge1xuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgdHJpbTogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGFibGVOYW1lOiBcInJvbGVzXCIsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb2xlO1xuIiwiaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIkAvY29yZS9kaS9kaS1jb250YWluZXJcIjtcblxuaW1wb3J0IHsgUm9sZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi9yb2xlLnJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IFJvbGVTZWVkZXIgfSBmcm9tIFwiLi9yb2xlLnNlZWRlclwiO1xuXG5leHBvcnQgY29uc3Qgcm9sZURJS2V5cyA9IHtcbiAgcmVwb3NpdG9yeTogXCJyb2xlLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInJvbGUtc2VlZGVyXCIsXG4gIHNlcnZpY2U6IFwicm9sZS1zZXJ2aWNlXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIocm9sZURJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFJvbGVSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHJvbGVESUtleXMuc2VlZGVyLFxuICBbcm9sZURJS2V5cy5yZXBvc2l0b3J5XSxcbiAgKHJvbGVSZXBvc2l0b3J5KSA9PiBuZXcgUm9sZVNlZWRlcihyb2xlUmVwb3NpdG9yeSksXG4pO1xuIiwiaW1wb3J0IHsgQmFzZVJlcG9zaXRvcnkgfSBmcm9tIFwiQC9zaGFyZWQvcmVwb3NpdG9yeS9iYXNlLnJlcG9zaXRvcnlcIjtcblxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vbW9kZWwvcm9sZS5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZVJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFJvbGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByb2xlcyB9IGZyb20gXCJAL2NvbW1vbi9jb25zdGFudC9yb2xlXCI7XG5cbmV4cG9ydCBjbGFzcyBSb2xlU2VlZGVyIHtcbiAgY29uc3RydWN0b3Iocm9sZVJlcG9zaXRvcnkpIHtcbiAgICB0aGlzLnJvbGVSZXBvc2l0b3J5ID0gcm9sZVJlcG9zaXRvcnk7XG4gIH1cblxuICBhc3luYyBjcmVhdGVSb2xlcygpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb2xlcyA9IGF3YWl0IHRoaXMucm9sZVJlcG9zaXRvcnkuZmluZEFsbCgpO1xuICAgICAgY29uc3QgZXhpc3RpbmdSb2xlTmFtZXMgPSBuZXcgU2V0KGV4aXN0aW5nUm9sZXMubWFwKChyb2xlKSA9PiByb2xlLnJvbGUpKTtcblxuICAgICAgY29uc3Qgcm9sZXNUb0NyZWF0ZSA9IHJvbGVzLmZpbHRlcihcbiAgICAgICAgKHJvbGUpID0+ICFleGlzdGluZ1JvbGVOYW1lcy5oYXMocm9sZS5yb2xlKSxcbiAgICAgICk7XG5cbiAgICAgIGlmIChyb2xlc1RvQ3JlYXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYXdhaXQgdGhpcy5yb2xlUmVwb3NpdG9yeS5jcmVhdGVNYW55KHJvbGVzVG9DcmVhdGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcm9sZXM6XCIsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgLy8gT3B0aW9uYWw6IEhhbmRsZSBvciBwcm9wYWdhdGUgdGhlIGVycm9yIGFzIG5lZWRlZFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29udGFjdER0byB9IGZyb20gXCJAL2NvbW1vbi9zY2hlbWEvZHRvL2NvbnRhY3QuZHRvXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyRHRvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZnVsbE5hbWUgPSBkYXRhLmZ1bGxOYW1lO1xuICAgIHRoaXMucHJvZmlsZUltYWdlID0gZGF0YS5wcm9maWxlSW1hZ2U7XG4gICAgdGhpcy5yb2xlID0gZGF0YS5yb2xlO1xuICAgIHRoaXMuY29udGFjdCA9IG5ldyBDb250YWN0RHRvKGRhdGEuY29udGFjdCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBVc2VyID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJVc2VyXCIsXG4gIHtcbiAgICBmdWxsTmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICByZWZlcmVuY2VzOiB7XG4gICAgICAgIG1vZGVsOiBcInJvbGVzXCIsXG4gICAgICAgIGtleTogXCJpZFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbnRhY3Q6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHJlZmVyZW5jZXM6IHtcbiAgICAgICAgbW9kZWw6IFwiY29udGFjdHNcIixcbiAgICAgICAga2V5OiBcImlkXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICB0YWJsZU5hbWU6IFwidXNlcnNcIixcbiAgfSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iLCJpbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiQC9jb3JlL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gXCIuL3VzZXIucmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgVXNlclNlZWRlciB9IGZyb20gXCIuL3VzZXIuc2VlZGVyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlckRJS2V5cyA9IHtcbiAgc2VydmljZTogXCJ1c2VyLXNlcnZpY2VcIixcbiAgcmVwb3NpdG9yeTogXCJ1c2VyLXJlcG9zaXRvcnlcIixcbiAgc2VlZGVyOiBcInVzZXItc2VlZGVyXCIsXG59O1xuXG5jb250YWluZXIucmVnaXN0ZXIodXNlckRJS2V5cy5yZXBvc2l0b3J5LCBbXSwgKCkgPT4gbmV3IFVzZXJSZXBvc2l0b3J5KCkpO1xuXG5jb250YWluZXIucmVnaXN0ZXIoXG4gIHVzZXJESUtleXMuc2VydmljZSxcbiAgW3VzZXJESUtleXMucmVwb3NpdG9yeV0sXG4gICh1c2VyUmVwb3NpdG9yeSkgPT4gbmV3IFVzZXJTZXJ2aWNlKHVzZXJSZXBvc2l0b3J5KSxcbik7XG5cbmNvbnRhaW5lci5yZWdpc3RlcihcbiAgdXNlckRJS2V5cy5zZWVkZXIsXG4gIFt1c2VyRElLZXlzLnNlcnZpY2VdLFxuICAodXNlclNlcnZpY2UpID0+IG5ldyBVc2VyU2VlZGVyKHVzZXJTZXJ2aWNlKSxcbik7XG4iLCJpbXBvcnQgeyBCYXNlUmVwb3NpdG9yeSB9IGZyb20gXCJAL3NoYXJlZC9yZXBvc2l0b3J5L2Jhc2UucmVwb3NpdG9yeVwiO1xuXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9tb2RlbC91c2VyLm1vZGVsXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUmVwb3NpdG9yeSBleHRlbmRzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoVXNlcik7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVc2VyU2VlZGVyIHtcbiAgY29uc3RydWN0b3IodXNlclNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlID0gdXNlclNlcnZpY2U7XG4gIH1cblxuICBhc3luYyBjcmVhdGVBZG1pbigpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kKHsgcm9sZTogMSB9KTtcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgY29uc3QgYWRtaW4gPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmNyZWF0ZSh7XG4gICAgICAgIGNvbnRhY3Q6IHsgZW1haWw6IFwiYmFrdGFyYWRtaW5AZ21haWwuY29tXCIgfSxcbiAgICAgICAgZnVsbE5hbWU6IFwiYmFrdGFyIGFkbWluXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcImJha3RhcmFkbWluXCIsXG4gICAgICAgIHJvbGU6IDEsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGFkbWluO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiQC9jb3JlL3Jlc3BvbnNlL2Jhc2UtcmVzcG9uc2VcIjtcbmltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5cbmltcG9ydCB7IGhhc2hQYXNzd29yZCB9IGZyb20gXCIuLi8uLi9jb21tb24vaGVscGVyL2hhc2gtcGFzc3dvcmRcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi8uLi9jb21tb24vc2NoZW1hL21vZGVsL2NvbnRhY3QtbW9kZWwuc2NoZW1hXCI7XG5pbXBvcnQgeyBzZXF1ZWxpemUgfSBmcm9tIFwiLi4vLi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy51c2VyUmVwb3NpdG9yeSA9IHVzZXJSZXBvc2l0b3J5O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKHVzZXJEdG8pIHtcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSB1c2VyRHRvO1xuXG4gICAgY29uc3QgeyBlbWFpbCwgcGhvbmVOdW1iZXIgfSA9IHVzZXJEdG8uY29udGFjdDtcblxuICAgIGNvbnN0IHBhc3N3b3JkSGFzaCA9IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHNlcXVlbGl6ZS50cmFuc2FjdGlvbigpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5ld0NvbnRhY3QgPSBhd2FpdCBDb250YWN0LmNyZWF0ZShcbiAgICAgICAge1xuICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgIHBob25lTnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICB7IHRyYW5zYWN0aW9uIH0sXG4gICAgICApO1xuXG4gICAgICBhd2FpdCB0cmFuc2FjdGlvbi5jb21taXQoKTtcblxuICAgICAgcmV0dXJuIHRoaXMudXNlclJlcG9zaXRvcnkuY3JlYXRlKHtcbiAgICAgICAgLi4udXNlckR0byxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkSGFzaCxcbiAgICAgICAgcm9sZTogMSxcbiAgICAgICAgY29udGFjdDogbmV3Q29udGFjdC5pZCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIGF3YWl0IHRyYW5zYWN0aW9uLnJvbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmluZEJ5RW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHsgXCJjb250YWN0LmVtYWlsXCI6IGVtYWlsIH0pO1xuICB9XG5cbiAgYXN5bmMgZmluZChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUocXVlcnkpO1xuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICAgIHN0YXR1czogU3RhdHVzQ29kZXMuTk9UX0ZPVU5ELFxuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kIVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyB1cGRhdGUoaWQsIHVzZXJEdG8pIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LnVwZGF0ZShpZCwgdXNlckR0byk7XG4gIH1cblxuICBhc3luYyBkZWxldGUoaWQpIHtcbiAgICBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmRlbGV0ZShpZCk7XG4gIH1cblxuICBhc3luYyBmaW5kQnlFbWFpbE9yVGhyb3coZW1haWwpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5maW5kQnlFbWFpbChlbWFpbCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICBtZXNzYWdlOiBcIlVzZXIgd2l0aCB0aGlzIGVtYWlsIGRvZXMgbm90IGV4aXN0LlwiLFxuICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLk5PVF9GT1VORCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAL2NvcmUvZGkvZGktZ2xvYmFsc1wiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByYXRlTGltaXQgfSBmcm9tIFwiZXhwcmVzcy1yYXRlLWxpbWl0XCI7XG5cbmltcG9ydCBhdXRoUm91dGVyIGZyb20gXCIuL2FwaS9hdXRoL2F1dGgucm91dGVcIjtcbmltcG9ydCBhdXRob3JSb3V0ZXIgZnJvbSBcIi4vYXBpL2F1dGhvci9hdXRob3Iucm91dGVcIjtcbmltcG9ydCB7IGFwaVByZWZpeCB9IGZyb20gXCIuL2NvbW1vbi9jb25zdGFudC9hcGlcIjtcbmltcG9ydCBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9iYXNlLXJlc3BvbnNlLm1pZGRsZXdhcmVcIjtcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gXCIuL2NvcmUvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLW1pZGRsZXdhcmVcIjtcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKFxuICByYXRlTGltaXQoe1xuICAgIHdpbmRvd01zOiAxMCAqIDYwICogMTAwMCxcbiAgICBsaW1pdDogMTAwLFxuICAgIHN0YW5kYXJkSGVhZGVyczogXCJkcmFmdC02XCIsXG4gICAgbGVnYWN5SGVhZGVyczogZmFsc2UsXG4gICAgbWVzc2FnZTogXCJUb28gbWFueSByZXF1ZXN0c1wiLFxuICB9KSxcbik7XG5hcHAuc2V0KFwidHJ1c3QgcHJveHlcIiwgMSk7XG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XG5hcHAudXNlKGJhc2VSZXNwb25zZU1pZGRsZXdhcmUpO1xuYXBwLnVzZShhcGlQcmVmaXgsIGF1dGhSb3V0ZXIpO1xuYXBwLnVzZShhcGlQcmVmaXgsIGF1dGhvclJvdXRlcik7XG5cbmFwcC51c2UoZXJyb3JIYW5kbGVyTWlkZGxld2FyZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcbiIsImV4cG9ydCBjb25zdCBhcGlQcmVmaXggPSBcIi9hcGkvdjFcIjtcbiIsImV4cG9ydCBjb25zdCByb2xlcyA9IFt7IHJvbGU6IFwiYWRtaW5cIiB9LCB7IHJvbGU6IFwidXNlclwiIH1dO1xuIiwiaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcblxuYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IHNhbHQgPSBhd2FpdCBiY3J5cHQuZ2VuU2FsdCgxMCk7XG5cbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY29tcGFyZVBhc3N3b3JkKHBsYWluVGV4dFBhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCkge1xuICByZXR1cm4gYmNyeXB0LmNvbXBhcmUocGxhaW5UZXh0UGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcbn1cblxuZXhwb3J0IHsgY29tcGFyZVBhc3N3b3JkLCBoYXNoUGFzc3dvcmQgfTtcbiIsImltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHBheWxvYWQsIHNlY3JldCwgdGltZSkgPT5cbiAgand0LnNpZ24ocGF5bG9hZCwgc2VjcmV0LCB7XG4gICAgZXhwaXJlc0luOiB0aW1lLFxuICAgIGFsZ29yaXRobTogXCJIUzUxMlwiLFxuICB9KTtcblxuY29uc3QgZGVjb2RlZFRva2VuID0gYXN5bmMgKHRva2VuLCBzZWNyZXQpID0+IHtcbiAgaWYgKCF0b2tlbikge1xuICAgIHRocm93IG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgbWVzc2FnZTogXCJObyB0b2tlbiBwcm92aWRlZFwiLFxuICAgICAgc3RhdHVzOiBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IFtzY2hlbWUsIGF1dGhUb2tlbl0gPSB0b2tlbi5zcGxpdChcIiBcIik7XG5cbiAgaWYgKHNjaGVtZSAhPT0gXCJCZWFyZXJcIiB8fCAhYXV0aFRva2VuKSB7XG4gICAgdGhyb3cgbmV3IEJhc2VSZXNwb25zZS5lcnJvcih7XG4gICAgICBtZXNzYWdlOiBcIkludmFsaWQgdG9rZW4gZm9ybWF0XCIsXG4gICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBqd3QudmVyaWZ5KGF1dGhUb2tlbiwgc2VjcmV0LCB7IGFsZ29yaXRobXM6IFtcIkhTNTEyXCJdIH0sIChlcnIsIGRlY29kZWQpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KFxuICAgICAgICAgIG5ldyBCYXNlUmVzcG9uc2UuZXJyb3Ioe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJUb2tlbiB2ZXJpZmljYXRpb24gZmFpbGVkXCIsXG4gICAgICAgICAgICBzdGF0dXM6IFN0YXR1c0NvZGVzLlVOQVVUSE9SSVpFRCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZGVjb2RlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZGVjb2RlZFRva2VuLCBnZW5lcmF0ZVRva2VuIH07XG4iLCJleHBvcnQgY2xhc3MgQ29udGFjdER0byB7XG4gIGNvbnN0cnVjdG9yKHsgZW1haWwsIHBob25lTnVtYmVyIH0pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGVtYWlsLFxuICAgICAgcGhvbmVOdW1iZXIsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFUeXBlcyB9IGZyb20gXCJzZXF1ZWxpemVcIjtcblxuaW1wb3J0IHsgc2VxdWVsaXplIH0gZnJvbSBcIi4uLy4uLy4uL2NvcmUvY29uZmlnL2RiLmNvbmZpZ1wiO1xuXG5jb25zdCBDb250YWN0ID0gc2VxdWVsaXplLmRlZmluZShcbiAgXCJDb250YWN0XCIsXG4gIHtcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgaXNFbWFpbDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwaG9uZU51bWJlcjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgdGFibGVOYW1lOiBcImNvbnRhY3RzXCIsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gIH0sXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIiwiaW1wb3J0IHsgU2VxdWVsaXplIH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xyXG5cclxuY2xhc3MgRGF0YWJhc2Uge1xyXG4gIHN0YXRpYyBpbnN0YW5jZSA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gSWYgYW4gaW5zdGFuY2UgYWxyZWFkeSBleGlzdHMsIHByZXZlbnQgY3JlYXRpbmcgYSBuZXcgb25lXHJcbiAgICBpZiAoRGF0YWJhc2UuaW5zdGFuY2UpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIFwiRGF0YWJhc2UgaW5zdGFuY2UgYWxyZWFkeSBleGlzdHMuIFVzZSBEYXRhYmFzZS5nZXRJbnN0YW5jZSgpIGluc3RlYWQuXCIsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNZXRob2QgdG8gZ2V0IHRoZSBTaW5nbGV0b24gaW5zdGFuY2Ugb2YgU2VxdWVsaXplXHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCFEYXRhYmFzZS5pbnN0YW5jZSkge1xyXG4gICAgICBEYXRhYmFzZS5pbnN0YW5jZSA9IG5ldyBTZXF1ZWxpemUoe1xyXG4gICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9EQVRBQkFTRSxcclxuICAgICAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUk5BTUUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELFxyXG4gICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuREJfUE9SVCxcclxuICAgICAgICBkaWFsZWN0OiBwcm9jZXNzLmVudi5EQl9ESUFMRUNULFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gRGF0YWJhc2UuaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICAvLyBNZXRob2QgdG8gb3BlbiB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxyXG4gIHN0YXRpYyBhc3luYyBjb25uZWN0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3Qgc2VxdWVsaXplID0gRGF0YWJhc2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgYXdhaXQgc2VxdWVsaXplLmF1dGhlbnRpY2F0ZSgpO1xyXG4gICAgICBhd2FpdCBzZXF1ZWxpemUuc3luYyh7IGZvcmNlOiB0cnVlIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gdGhlIGRhdGFiYXNlLlwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBkYXRhYmFzZTpcIiwgZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2VcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBNZXRob2QgdG8gY2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cclxuICBzdGF0aWMgYXN5bmMgY2xvc2UoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoRGF0YWJhc2UuaW5zdGFuY2UpIHtcclxuICAgICAgICBhd2FpdCBEYXRhYmFzZS5pbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgY29ubmVjdGlvbiBzdWNjZXNzZnVsbHkgY2xvc2VkLlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNsb3NpbmcgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb246XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNlcXVlbGl6ZSA9IERhdGFiYXNlLmdldEluc3RhbmNlKCk7XHJcblxyXG5leHBvcnQgeyBEYXRhYmFzZSwgc2VxdWVsaXplIH07XHJcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJkb3RlbnZcIjtcblxuY29uZmlnKCk7XG5cbmNvbmZpZyh7XG4gIHBhdGg6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBcIi5lbnYubG9jYWxcIiA6IFwiLmVudlwiLFxuICBvdmVycmlkZTogdHJ1ZSxcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgand0OiB7XG4gICAgYWxnb3JpdGhtOiBwcm9jZXNzLmVudi5KV1RfQUxHT1JJVEhNLFxuICAgIGFjY2Vzc1NlY3JldDogcHJvY2Vzcy5lbnYuSldUX0FDQ0VTU19TRUNSRVQsXG4gICAgYWNjZXNzRXhwaXJlc0luOiBwcm9jZXNzLmVudi5KV1RfQUNDRVNTX0VYUElSRVNfSU4sXG4gICAgcmVmcmVzaFNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1JFRlJFU0hfU0VDUkVULFxuICAgIHJlZnJlc2hFeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9SRUZSRVNIX0VYUElSRVNfSU4sXG4gICAgdmVyaWZpY2F0aW9uU2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfVkVSSUZJQ0FUSU9OX1NFQ1JFVCxcbiAgICB2ZXJpZmljYXRpb25FeHBpcmVzSW46IHByb2Nlc3MuZW52LkpXVF9WRVJJRklDQVRJT05fRVhQSVJFU19JTixcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyByb2xlRElLZXlzIH0gZnJvbSBcIkAvYXBpL3JvbGUvcm9sZS5kaVwiO1xuaW1wb3J0IHsgUm9sZVNlZWRlciB9IGZyb20gXCJAL2FwaS9yb2xlL3JvbGUuc2VlZGVyXCI7XG5cbmltcG9ydCB7IHVzZXJESUtleXMgfSBmcm9tIFwiLi4vLi4vYXBpL3VzZXIvdXNlci5kaVwiO1xuaW1wb3J0IHsgVXNlclNlZWRlciB9IGZyb20gXCIuLi8uLi9hcGkvdXNlci91c2VyLnNlZWRlclwiO1xuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4uL2RpL2RpLWNvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3Qgc2VlZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgcm9sZVNlZWRlciA9IG5ldyBSb2xlU2VlZGVyKGNvbnRhaW5lci5nZXQocm9sZURJS2V5cy5yZXBvc2l0b3J5KSk7XG4gIGNvbnN0IHVzZXJTZWVkZXIgPSBuZXcgVXNlclNlZWRlcihjb250YWluZXIuZ2V0KHVzZXJESUtleXMuc2VydmljZSkpO1xuXG4gIGF3YWl0IHJvbGVTZWVkZXIuY3JlYXRlUm9sZXMoKTtcbiAgYXdhaXQgdXNlclNlZWRlci5jcmVhdGVBZG1pbigpO1xufTtcbiIsIi8qKlxuICogRGVwZW5kZW5jeSBJbmplY3Rpb24gQ29udGFpbmVyXG4gKiBAY2xhc3MgRGlDb250YWluZXJcbiAqIEBkZXNjcmlwdGlvbiBBIHNpbXBsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgdGhhdCBhbGxvd3MgeW91IHRvIHJlZ2lzdGVyXG4gKiBhbmQgZ2V0IGRlcGVuZGVuY2llc1xuICogQGV4YW1wbGVcbiAqIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBEaUNvbnRhaW5lcigpO1xuICogY29udGFpbmVyLnJlZ2lzdGVyKFwiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCIsIFtdLCAoKSA9PiBuZXcgTGFuZGluZ1BhZ2VSZXBvc2l0b3J5KCkpO1xuICogY29udGFpbmVyLnJlZ2lzdGVyKFxuICogIFwiTGFuZGluZ1BhZ2VTZXJ2aWNlXCIsXG4gKiAgW1wiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCJdLFxuICogIChsYW5kaW5nUGFnZVJlcG9zaXRvcnkpID0+IG5ldyBMYW5kaW5nUGFnZVNlcnZpY2UobGFuZGluZ1BhZ2VSZXBvc2l0b3J5KSxcbiAqICk7XG4gKlxuICogY29uc3QgbGFuZGluZ1BhZ2VTZXJ2aWNlID0gY29udGFpbmVyLmdldChcIkxhbmRpbmdQYWdlU2VydmljZVwiKTtcbiAqL1xuY2xhc3MgRGlDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRlcGVuZGVuY2llcyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgZGVwZW5kZW5jeVxuICAgKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRlcGVuZGVuY3kgKGV4OiBcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiKVxuICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIC0gQXJyYXkgb2YgZGVwZW5kZW5jaWVzIChleDogW1wiTGFuZGluZ1BhZ2VSZXBvc2l0b3J5XCJdKVxuICAgKiBAcGFyYW0gZnVuYyAtIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZGVwZW5kZW5jeVxuICAgKi9cbiAgcmVnaXN0ZXIobmFtZSwgZGVwZW5kZW5jaWVzLCBmdW5jKSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICFBcnJheS5pc0FycmF5KGRlcGVuZGVuY2llcykgfHxcbiAgICAgIHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCJcbiAgICApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRcIik7XG4gICAgfVxuXG4gICAgdGhpcy5kZXBlbmRlbmNpZXNbbmFtZV0gPSB7XG4gICAgICBkZXBlbmRlbmNpZXMsXG4gICAgICBmdW5jLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgZGVwZW5kZW5jeVxuICAgKiBAcGFyYW0gbmFtZSAtIE5hbWUgb2YgdGhlIGRlcGVuZGVuY3kgKGV4OiBcIkxhbmRpbmdQYWdlUmVwb3NpdG9yeVwiKVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZ2V0KG5hbWUpIHtcbiAgICBpZiAoIXRoaXMuZGVwZW5kZW5jaWVzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERlcGVuZGVuY3kgbm90IGZvdW5kOiAke25hbWV9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBkZXBlbmRlbmNpZXMsIGZ1bmMgfSA9IHRoaXMuZGVwZW5kZW5jaWVzW25hbWVdO1xuXG4gICAgY29uc3QgZGVwZW5kZW5jaWVzSW5zdGFuY2VzID0gZGVwZW5kZW5jaWVzLm1hcCgoZGVwZW5kZW5jeSkgPT5cbiAgICAgIHRoaXMuZ2V0KGRlcGVuZGVuY3kpLFxuICAgICk7XG5cbiAgICByZXR1cm4gZnVuYyguLi5kZXBlbmRlbmNpZXNJbnN0YW5jZXMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSBuZXcgRGlDb250YWluZXIoKTtcbiIsImltcG9ydCBcIkAvYXBpL3JvbGUvcm9sZS5kaVwiO1xuaW1wb3J0IFwiQC9hcGkvYXV0aC9hdXRoLmRpXCI7XG5pbXBvcnQgXCJAL2FwaS9hdXRob3IvYXV0aG9yLmRpXCI7XG4iLCJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5pbXBvcnQgeyBCYXNlUmVzcG9uc2UgfSBmcm9tIFwiLi4vcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYXNlUmVzcG9uc2VNaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHJlcy5zdWNjZXNzID0gKHByb3BzKSA9PiB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKHByb3BzLnN0YXR1cyB8fCBTdGF0dXNDb2Rlcy5PSylcbiAgICAgIC5qc29uKEJhc2VSZXNwb25zZS5zdWNjZXNzKHByb3BzKSk7XG4gIH07XG5cbiAgcmVzLmVycm9yID0gKHByb3BzKSA9PiB7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKHByb3BzLnN0YXR1cyB8fCBTdGF0dXNDb2Rlcy5CQURfUkVRVUVTVClcbiAgICAgIC5qc29uKEJhc2VSZXNwb25zZS5lcnJvcihwcm9wcykpO1xuICB9O1xuXG4gIG5leHQoKTtcbn1cbiIsImltcG9ydCB7IEJhc2VSZXNwb25zZSB9IGZyb20gXCJAL2NvcmUvcmVzcG9uc2UvYmFzZS1yZXNwb25zZVwiO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tIFwiQC9zaGFyZWQvZXJyb3ItcmVzcG9uc2UvZXJyb3ItcmVzcG9uc2VcIjtcblxuY29uc3QgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSA9IChlcnJvciwgcmVxdWVzdCwgcmVzcG9uc2UsIG5leHQpID0+IHtcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgQVBJRXJyb3IpIHtcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKGVycm9yLnN0YXR1c0NvZGUgfHwgNDAwKS5qc29uKHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5leHQoKTtcblxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBCYXNlUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UuZXJyb3IoZXJyb3IpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3IhXCIsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZTtcbiIsImltcG9ydCB7IGdldFJlYXNvblBocmFzZSwgU3RhdHVzQ29kZXMgfSBmcm9tIFwiaHR0cC1zdGF0dXMtY29kZXNcIjtcblxuZXhwb3J0IGNsYXNzIEJhc2VSZXNwb25zZSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBkYXRhLnN1Y2Nlc3M7XG4gICAgdGhpcy5zdGF0dXMgPSBkYXRhLnN0YXR1cztcbiAgICB0aGlzLm1lc3NhZ2UgPSBkYXRhLm1lc3NhZ2U7XG4gICAgdGhpcy5kYXRhID0gZGF0YS5kYXRhO1xuICAgIHRoaXMuZGV0YWlscyA9IGRhdGEuZGV0YWlscztcbiAgfVxuXG4gIHN0YXRpYyBzdWNjZXNzKHsgc3RhdHVzID0gU3RhdHVzQ29kZXMuT0ssIG1lc3NhZ2UsIGRhdGEgfSkge1xuICAgIHJldHVybiBuZXcgQmFzZVJlc3BvbnNlKHtcbiAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICBzdGF0dXMsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldFJlYXNvblBocmFzZShzdGF0dXMpLFxuICAgICAgZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBlcnJvcih7IG1lc3NhZ2UsIHN0YXR1cyA9IFN0YXR1c0NvZGVzLkJBRF9SRVFVRVNULCBkZXRhaWxzID0gbnVsbCB9KSB7XG4gICAgcmV0dXJuIG5ldyBCYXNlUmVzcG9uc2Uoe1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBzdGF0dXMsXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IGdldFJlYXNvblBocmFzZShzdGF0dXMpLFxuICAgICAgZGV0YWlscyxcbiAgICB9KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEFQSUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5zdGF0dXNDb2RlID0gc3RhdHVzQ29kZTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEJhc2VSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IobW9kZWwpIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmNyZWF0ZShkYXRhKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIGNvbnN0IFssIHVwZGF0ZWRBdXRob3JdID0gYXdhaXQgdGhpcy5tb2RlbC51cGRhdGUoZGF0YSwge1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIHJldHVybmluZzogdHJ1ZSxcbiAgICB9KTtcblxuICAgIHJldHVybiB1cGRhdGVkQXV0aG9yWzBdO1xuICB9XG5cbiAgZGVsZXRlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZGVzdHJveSh7XG4gICAgICB3aGVyZTogeyBpZCB9LFxuICAgIH0pO1xuICB9XG5cbiAgZmluZEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgfSk7XG4gIH1cblxuICBmaW5kQWxsKCkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya2luZyBGaW5kQWxsXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZmluZEFsbCgpO1xuICB9XG5cbiAgZmluZE9uZShxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRPbmUoe1xuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG5cbiAgZmluZChxdWVyeSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmRBbGwoe1xuICAgICAgd2hlcmU6IHF1ZXJ5LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gS2F5xLF0bGFyxLEgc2F5bWFcbiAgY291bnQocXVlcnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5jb3VudCh7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNYW55KGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5idWxrQ3JlYXRlKGRhdGEpO1xuICB9XG5cbiAgdXBkYXRlTWFueShxdWVyeSwgZGF0YSkge1xuICAgIHJldHVybiB0aGlzLm1vZGVsLnVwZGF0ZShkYXRhLCB7XG4gICAgICB3aGVyZTogcXVlcnksXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyB1cHNlcnQocXVlcnksIGRhdGEpIHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCB0aGlzLmZpbmRPbmUocXVlcnkpO1xuXG4gICAgaWYgKCFyZWNvcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGUocmVjb3JkLmlkLCBkYXRhKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy93cmFwTmF0aXZlU3VwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1hc3luYy1lcnJvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1yYXRlLWxpbWl0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHAtc3RhdHVzLWNvZGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiQC9jb3JlL2NvbmZpZy9lbnYuY29uZmlnXCI7XG5pbXBvcnQgXCJleHByZXNzLWFzeW5jLWVycm9yc1wiO1xuaW1wb3J0IHsgY3JlYXRlU2VydmVyIH0gZnJvbSBcImh0dHBcIjtcblxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4vY29yZS9jb25maWcvZGIuY29uZmlnXCI7XG5pbXBvcnQgeyBzZWVkIH0gZnJvbSBcIi4vY29yZS9kYi9zZWVkXCI7XG5cbmNvbnN0IHNlcnZlciA9IGNyZWF0ZVNlcnZlcihhcHApO1xuY29uc3QgeyBQT1JUIH0gPSBwcm9jZXNzLmVudjtcblxuKGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jb25uZWN0KCk7IC8vIENvbm5lY3QgdG8gdGhlIGRhdGFiYXNlXG4gICAgYXdhaXQgc2VlZCgpO1xuICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gc3RhcnRlZC4uLlwiKTtcbiAgICBzZXJ2ZXIubGlzdGVuKFBPUlQsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7UE9SVH1gKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQXBwbGljYXRpb24gZmFpbGVkIHRvIHN0YXJ0OlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICBwcm9jZXNzLmV4aXQoMSk7IC8vIEV4aXQgd2l0aCBmYWlsdXJlIGNvZGVcbiAgfVxuXG4gIC8vIEdyYWNlZnVsbHkgaGFuZGxlIHNodXRkb3duIHNpZ25hbHNcbiAgcHJvY2Vzcy5vbihcIlNJR0lOVFwiLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgRGF0YWJhc2UuY2xvc2UoKTsgLy8gQ2xvc2UgdGhlIGRhdGFiYXNlIGNvbm5lY3Rpb25cbiAgICBwcm9jZXNzLmV4aXQoMCk7XG4gIH0pO1xuXG4gIHByb2Nlc3Mub24oXCJTSUdURVJNXCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBEYXRhYmFzZS5jbG9zZSgpOyAvLyBDbG9zZSB0aGUgZGF0YWJhc2UgY29ubmVjdGlvblxuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIlN0YXR1c0NvZGVzIiwiQXV0aER0byIsIkF1dGhDb250cm9sbGVyIiwiYXV0aFNlcnZpY2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9yZWdpc3RlciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJyZWdpc3RlciIsImJvZHkiLCJzZW50Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJDUkVBVEVEIiwic3RvcCIsIl94IiwiX3gyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfbG9naW4iLCJfY2FsbGVlMiIsInVzZXIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJsb2dpbiIsIk9LIiwiX3gzIiwiX3g0IiwiY29udGFpbmVyIiwidXNlckRJS2V5cyIsIkF1dGhTZXJ2aWNlIiwiYXV0aERJS2V5cyIsImNvbnRyb2xsZXIiLCJzZXJ2aWNlIiwidXNlclNlcnZpY2UiLCJleHByZXNzIiwiYXV0aFJvdXRlciIsIlJvdXRlciIsInByZWZpeCIsImF1dGhDb250cm9sbGVyIiwiZ2V0IiwicG9zdCIsImNvbmNhdCIsInJlcSIsInJlcyIsImNvbmZpZyIsIkJhc2VSZXNwb25zZSIsImNvbXBhcmVQYXNzd29yZCIsImdlbmVyYXRlVG9rZW4iLCJDb250YWN0IiwiQVBJRXJyb3IiLCJhdXRoUmVnaXN0ZXJEdG8iLCJmdWxsTmFtZSIsImVtYWlsIiwiZXhpc3RpbmdVc2VyIiwic2F2ZWRVc2VyIiwicGF5bG9hZCIsInRva2VuIiwiY29udGFjdCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kT25lIiwid2hlcmUiLCJpbmNsdWRlIiwiQ09ORkxJQ1QiLCJyb2xlIiwiY3JlYXRlIiwic3ViIiwiX2lkIiwiY3JlYXRlVG9rZW4iLCJhYnJ1cHQiLCJhdXRobG9naW5EdG8iLCJwYXNzd29yZCIsImZpbmRCeUVtYWlsIiwidDAiLCJlcnJvciIsIlVOQVVUSE9SSVpFRCIsIl9jcmVhdGVUb2tlbiIsIl9jYWxsZWUzIiwiX2NvbmZpZyRqd3QiLCJhY2Nlc3NTZWNyZXQiLCJhY2Nlc3NFeHBpcmVzSW4iLCJhY2Nlc3NUb2tlbiIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImp3dCIsIlVzZXJEdG8iLCJhY2Nlc3MiLCJBdXRob3JEdG8iLCJBdXRob3JDb250cm9sbGVyIiwiYXV0aG9yU2VydmljZSIsIl9jcmVhdGUiLCJhdXRob3IiLCJfZmluZEFsbCIsImZpbmRBbGwiLCJtYXAiLCJhIiwiX2ZpbmRCeUlkIiwiZmluZEJ5SWQiLCJwYXJhbXMiLCJhdXRob3JJZCIsIl94NSIsIl94NiIsIl91cGRhdGUiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInVwZGF0ZSIsIl94NyIsIl94OCIsIl9kZWxldGUyIiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJkZWxldGUiLCJfeDkiLCJfeDEwIiwiQXV0aG9yUmVwb3NpdG9yeSIsIkF1dGhvclNlcnZpY2UiLCJhdXRob3JESUtleXMiLCJyZXBvc2l0b3J5IiwiYXV0aG9yUmVwb3NpdG9yeSIsIkJhc2VSZXBvc2l0b3J5IiwiQXV0aG9yIiwiX0Jhc2VSZXBvc2l0b3J5IiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsImF1dGhvclJvdXRlciIsImF1dGhvckNvbnRyb2xsZXIiLCJwYXRjaCIsImNyZWF0ZUF1dGhvckR0byIsIk5PVF9GT1VORCIsInVwZGF0ZUF1dGhvckR0byIsIl9yZWYiLCJpZCIsIm5hbWUiLCJiaW9ncmFwaHkiLCJkYXRlT2ZCaXJ0aCIsIm5hdGlvbmFsaXR5IiwiT2JqZWN0IiwiYXNzaWduIiwiRGF0YVR5cGVzIiwic2VxdWVsaXplIiwiZGVmaW5lIiwidHlwZSIsIlNUUklORyIsImFsbG93TnVsbCIsIlRFWFQiLCJEQVRFT05MWSIsInRpbWVzdGFtcHMiLCJ0YWJsZU5hbWUiLCJSb2xlIiwidW5pcXVlIiwidHJpbSIsIlJvbGVSZXBvc2l0b3J5IiwiUm9sZVNlZWRlciIsInJvbGVESUtleXMiLCJzZWVkZXIiLCJyb2xlUmVwb3NpdG9yeSIsInJvbGVzIiwiX2NyZWF0ZVJvbGVzIiwiZXhpc3RpbmdSb2xlcyIsImV4aXN0aW5nUm9sZU5hbWVzIiwicm9sZXNUb0NyZWF0ZSIsIlNldCIsImZpbHRlciIsImhhcyIsImxlbmd0aCIsImNyZWF0ZU1hbnkiLCJjcmVhdGVSb2xlcyIsIkNvbnRhY3REdG8iLCJwcm9maWxlSW1hZ2UiLCJVc2VyIiwiSU5URUdFUiIsInJlZmVyZW5jZXMiLCJtb2RlbCIsIlVzZXJSZXBvc2l0b3J5IiwiVXNlclNlZWRlciIsIlVzZXJTZXJ2aWNlIiwidXNlclJlcG9zaXRvcnkiLCJfY3JlYXRlQWRtaW4iLCJhZG1pbiIsImZpbmQiLCJjcmVhdGVBZG1pbiIsImhhc2hQYXNzd29yZCIsInVzZXJEdG8iLCJfdXNlckR0byRjb250YWN0IiwicGhvbmVOdW1iZXIiLCJwYXNzd29yZEhhc2giLCJ0cmFuc2FjdGlvbiIsIm5ld0NvbnRhY3QiLCJjb21taXQiLCJfb2JqZWN0U3ByZWFkIiwicm9sbGJhY2siLCJfZmluZEJ5RW1haWwiLCJfZmluZCIsInF1ZXJ5IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJfZmluZEJ5RW1haWxPclRocm93IiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJmaW5kQnlFbWFpbE9yVGhyb3ciLCJjb3JzIiwicmF0ZUxpbWl0IiwiYXBpUHJlZml4IiwiYmFzZVJlc3BvbnNlTWlkZGxld2FyZSIsImVycm9ySGFuZGxlck1pZGRsZXdhcmUiLCJhcHAiLCJ1c2UiLCJ3aW5kb3dNcyIsImxpbWl0Iiwic3RhbmRhcmRIZWFkZXJzIiwibGVnYWN5SGVhZGVycyIsInNldCIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImpzb24iLCJkaXNhYmxlIiwiYmNyeXB0IiwiX2hhc2hQYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsIl9jb21wYXJlUGFzc3dvcmQiLCJwbGFpblRleHRQYXNzd29yZCIsImhhc2hlZFBhc3N3b3JkIiwiY29tcGFyZSIsInNlY3JldCIsInRpbWUiLCJzaWduIiwiZXhwaXJlc0luIiwiYWxnb3JpdGhtIiwiZGVjb2RlZFRva2VuIiwiX3Rva2VuJHNwbGl0IiwiX3Rva2VuJHNwbGl0MiIsInNjaGVtZSIsImF1dGhUb2tlbiIsIkJBRF9SRVFVRVNUIiwic3BsaXQiLCJfc2xpY2VkVG9BcnJheSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidmVyaWZ5IiwiYWxnb3JpdGhtcyIsImVyciIsImRlY29kZWQiLCJ2YWxpZGF0ZSIsImlzRW1haWwiLCJTZXF1ZWxpemUiLCJEYXRhYmFzZSIsImluc3RhbmNlIiwiRXJyb3IiLCJnZXRJbnN0YW5jZSIsImRhdGFiYXNlIiwicHJvY2VzcyIsImVudiIsIkRCX0RBVEFCQVNFIiwidXNlcm5hbWUiLCJEQl9VU0VSTkFNRSIsIkRCX1BBU1NXT1JEIiwiaG9zdCIsIkRCX0hPU1QiLCJwb3J0IiwiREJfUE9SVCIsImRpYWxlY3QiLCJEQl9ESUFMRUNUIiwiX2Nvbm5lY3QiLCJfc2VxdWVsaXplIiwiYXV0aGVudGljYXRlIiwic3luYyIsImZvcmNlIiwiY29ubmVjdCIsIl9jbG9zZSIsImNsb3NlIiwiX2RlZmluZVByb3BlcnR5IiwicGF0aCIsIk5PREVfRU5WIiwib3ZlcnJpZGUiLCJKV1RfQUxHT1JJVEhNIiwiSldUX0FDQ0VTU19TRUNSRVQiLCJKV1RfQUNDRVNTX0VYUElSRVNfSU4iLCJyZWZyZXNoU2VjcmV0IiwiSldUX1JFRlJFU0hfU0VDUkVUIiwicmVmcmVzaEV4cGlyZXNJbiIsIkpXVF9SRUZSRVNIX0VYUElSRVNfSU4iLCJ2ZXJpZmljYXRpb25TZWNyZXQiLCJKV1RfVkVSSUZJQ0FUSU9OX1NFQ1JFVCIsInZlcmlmaWNhdGlvbkV4cGlyZXNJbiIsIkpXVF9WRVJJRklDQVRJT05fRVhQSVJFU19JTiIsInNlZWQiLCJyb2xlU2VlZGVyIiwidXNlclNlZWRlciIsIkRpQ29udGFpbmVyIiwiZGVwZW5kZW5jaWVzIiwiZnVuYyIsIkFycmF5IiwiaXNBcnJheSIsIl90aGlzIiwiX3RoaXMkZGVwZW5kZW5jaWVzJG5hIiwiZGVwZW5kZW5jaWVzSW5zdGFuY2VzIiwiZGVwZW5kZW5jeSIsIl90b0NvbnN1bWFibGVBcnJheSIsInByb3BzIiwic3RhdHVzQ29kZSIsImdldFJlYXNvblBocmFzZSIsImRldGFpbHMiLCJfcmVmJHN0YXR1cyIsIl9yZWYyIiwiX3JlZjIkc3RhdHVzIiwiX3JlZjIkZGV0YWlscyIsIl9FcnJvciIsIl93cmFwTmF0aXZlU3VwZXIiLCJfeWllbGQkdGhpcyRtb2RlbCR1cGQiLCJfeWllbGQkdGhpcyRtb2RlbCR1cGQyIiwidXBkYXRlZEF1dGhvciIsInJldHVybmluZyIsImRlc3Ryb3kiLCJjb3VudCIsImJ1bGtDcmVhdGUiLCJ1cGRhdGVNYW55IiwiX3Vwc2VydCIsInJlY29yZCIsInVwc2VydCIsImNyZWF0ZVNlcnZlciIsInNlcnZlciIsIlBPUlQiLCJsaXN0ZW4iLCJleGl0Iiwib24iXSwic291cmNlUm9vdCI6IiJ9