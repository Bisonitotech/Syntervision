module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Blog.js":
/*!****************************!*\
  !*** ./components/Blog.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Blog.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Blog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blog, _React$Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Blog).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section bg-light pt-5",
        id: "blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 offset-lg-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "section-title text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Featured Resources"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-title-border margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row margin-t-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "blog-box margin-t-30 hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/blog/img-1.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "mt-4 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Automation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "blog-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, " The Cost of Automation in 2019"), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "She packed her seven versalia, put her initial into the belt and made herself on the way.."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "read-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Download E-Book ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-arrow-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "blog-box margin-t-30 hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/blog/img-2.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "mt-4 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Security"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "blog-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Why an Agile Security Solution is Crucial for Enterprises"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Pityful a rethoric question ran over her cheek, then she continued her way."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "read-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Read More ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-arrow-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "blog-box margin-t-30 hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/blog/img-3.jpg",
        className: "img-fluid",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "mt-4 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "Integration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "blog-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "The 80/20 Rule to Integration"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "read-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, " Download Now ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-arrow-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }))))))))));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _getPrototypeOf(Contact).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section",
        id: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 offset-lg-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "section-title text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Get In Touch"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-title-border margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "section-subtitle text-muted text-center font-secondary padding-t-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mt-4 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Corporate Headquarters:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-muted d-block mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "4800 Whitesburg Dr #30,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), " Huntsville, AL 35802, USA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "h5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Working Hours:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "text-muted d-block mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "9:00AM To 6:00PM EST")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "custom-form mt-4 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        method: "post",
        action: "home-one",
        name: "contact-form",
        id: "contact-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "name",
        id: "name",
        type: "text",
        className: "form-control",
        placeholder: "Your name*",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "email",
        id: "email",
        type: "email",
        className: "form-control",
        placeholder: "Your email*",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        name: "comments",
        id: "comments",
        rows: "4",
        className: "form-control",
        placeholder: "Your message...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        id: "submit",
        name: "send",
        className: "submitBnt btn btn-custom",
        value: "Send Message",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "simple-msg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })))))))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./components/Demo.js":
/*!****************************!*\
  !*** ./components/Demo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Demo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Demo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    _classCallCheck(this, Demo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Demo).apply(this, arguments));
  }

  _createClass(Demo, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section-lg bg-get-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 offset-lg-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "get-started-title text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Request a Demo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-title-border margin-t-20 bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 home-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "We offer a trial version that includes all advanced features - free, for 30 days. Contact us today to request a license!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/demorequest",
        className: "btn btn-bg-white waves-effect margin-t-20 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Get Started ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-arrow-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), " ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-pattern-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/bg-pattern.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })));
    }
  }]);

  return Demo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Demo);

/***/ }),

/***/ "./components/Descriptions.js":
/*!************************************!*\
  !*** ./components/Descriptions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Descriptions.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Descriptions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Descriptions, _React$Component);

  function Descriptions() {
    _classCallCheck(this, Descriptions);

    return _possibleConstructorReturn(this, _getPrototypeOf(Descriptions).apply(this, arguments));
  }

  _createClass(Descriptions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section-lg bg-web-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Why Oasis?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 home-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "With unprecedented visibility, dynamic solutions, and advanced analytics, you are able to truly understand your enterprise ecosystem. Gaining greater efficiency in identifying and implementing your initiatives. Giving you the ability to reach your digital transformation goals.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-pattern-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/bg-pattern.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })));
    }
  }]);

  return Descriptions;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Descriptions);

/***/ }),

/***/ "./components/Features.js":
/*!********************************!*\
  !*** ./components/Features.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Features.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Features =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Features, _React$Component);

  function Features() {
    _classCallCheck(this, Features);

    return _possibleConstructorReturn(this, _getPrototypeOf(Features).apply(this, arguments));
  }

  _createClass(Features, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row vertical-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "features-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Platform Features"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-muted web-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "text-muted list-unstyled margin-t-30 features-item-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Fully Scalable"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Multi vendor monitoring"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Advanced Alerting"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Performance Analytic Dashboards")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/platform",
        className: "btn btn-custom margin-t-30 waves-effect waves-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Learn More ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-arrow-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "features-img features-right text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/platform-features.gif",
        alt: "Oasis Features",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }))))));
    }
  }]);

  return Features;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _palmabit_react_cookie_law__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @palmabit/react-cookie-law */ "@palmabit/react-cookie-law");
/* harmony import */ var _palmabit_react_cookie_law__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_palmabit_react_cookie_law__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Footer.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Footer).call(this, props));
    _this.state = {
      success: false,
      email: ''
    };
    return _this;
  }

  _createClass(Footer, [{
    key: "sendEmail",
    value: function sendEmail() {
      var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email.toLowerCase())) this.setState({
        success: true
      });else {
        alert('Please input validate email!');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cookie-banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_palmabit_react_cookie_law__WEBPACK_IMPORTED_MODULE_1__["CookieBanner"], {
        message: "This site and third-party tools used by this site, make use of cookies to improve your website experience. To learn more or opt out, see the cookie policy. By accepting, you consent to the use of cookies.",
        onAccept: function onAccept() {},
        onAcceptPreferences: function onAcceptPreferences() {},
        onAcceptStatistics: function onAcceptStatistics() {},
        onAcceptMarketing: function onAcceptMarketing() {},
        styles: {
          dialog: {
            backgroundColor: 'rgba(0,0,0,0.3)',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            left: '0',
            zIndex: '1000000'
          },
          container: {
            position: 'absolute',
            width: '60%',
            minWidth: '300px',
            margin: '0 auto',
            background: 'white',
            padding: '20px'
          },
          policy: {
            cursor: 'pointer',
            textDecoration: 'underline!important',
            fontSize: '10px'
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-3 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Syntervision"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled footer-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/DemoRequest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Contact"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-3 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Solutions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled footer-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Platform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Oasis Platform")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Security",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Security")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Industries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "By Industry")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Integrations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Integrations"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-3 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled footer-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/PrivacyPolicy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Terms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Terms & Conditions"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-3 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Subscribe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-muted margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), this.state.success == false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form subscribe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        placeholder: "Email",
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        className: "form-control",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "submit",
        onClick: function onClick() {
          return _this2.sendEmail();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-paper-plane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))), this.state.success == true && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "confirmation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Thank you! Check your inbox for a confirmation message from us.")))));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/FooterLinks.js":
/*!***********************************!*\
  !*** ./components/FooterLinks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/FooterLinks.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var FooterLinks =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FooterLinks, _React$Component);

  function FooterLinks() {
    _classCallCheck(this, FooterLinks);

    return _possibleConstructorReturn(this, _getPrototypeOf(FooterLinks).apply(this, arguments));
  }

  _createClass(FooterLinks, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer-alt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-left pull-none ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "copy-rights text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, new Date().getFullYear(), " \xA9 Syntervision All rights reserved")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right pull-none ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "copy-rights",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, " Version 1.1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "float-right pull-none ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clearfix",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })))));
    }
  }]);

  return FooterLinks;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FooterLinks);

/***/ }),

/***/ "./components/Includes.js":
/*!********************************!*\
  !*** ./components/Includes.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/css/main.scss */ "./styles/css/main.scss");
/* harmony import */ var _styles_css_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css_main_scss__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Includes.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Includes =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Includes, _React$Component);

  function Includes() {
    _classCallCheck(this, Includes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Includes).apply(this, arguments));
  }

  _createClass(Includes, [{
    key: "setGoogleTags",
    value: function setGoogleTags() {
      return {
        __html: "\n          window.dataLayer = window.dataLayer || [];\n          function gtag()\n\n          {dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'UA-128652726-1');\n\n        "
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _styles_css_main_scss__WEBPACK_IMPORTED_MODULE_1___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        dangerouslySetInnerHTML: this.setGoogleTags(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/jquery.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/bootstrap.bundle.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/jquery.easing.1.3.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/scrollspy.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/jquery.sticky.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/waves.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/jquery.magnific-popup.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/switcher.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        src: "/static/js/app.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-128652726-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    }
  }]);

  return Includes;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Includes);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Navbar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    _classCallCheck(this, Navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar).call(this, props));
    _this.state = {
      megaPlatfromStatus: 0,
      modalShow: false,
      modalContent: '',
      index: 0
    };
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    _this.showProducts = _this.showProducts.bind(_assertThisInitialized(_this));
    _this.setModalContent = _this.setModalContent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Navbar, [{
    key: "showProducts",
    value: function showProducts(index) {
      console.log(window.screen.width);

      if (window.screen.width <= 768) {
        // localStorage.setItem("index", index);
        window.location.href = '/Products?index=' + index;
      } else this.setState({
        index: index,
        modalShow: true,
        modalContent: 'product'
      });
    }
  }, {
    key: "setModalContent",
    value: function setModalContent(content) {
      this.setState({
        modalContent: content
      });
      console.log(this.state.modalContent);
    }
  }, {
    key: "showPlatformOverview",
    value: function showPlatformOverview(index) {
      if (window.screen.width <= 768) {
        // localStorage.setItem("index", index);
        window.location.href = '/PlatformOverview?index=' + index;
      } else this.setState({
        index: index,
        modalShow: true,
        modalContent: 'platformOverview'
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.setState({
        index: 0,
        modalShow: false,
        modalContent: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "full-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-brand logo",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        href: "/",
        className: "logo",
        alt: "logo",
        src: "/static/images/synterweb_black_logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "navbar-toggler whole-mobile-menu",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav navbar-right mega-menu",
        id: "mySidenav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Platform"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "data-toggle": "collapse",
        "data-target": "#platformMega",
        "aria-controls": "platformMega",
        "aria-expanded": "false",
        className: "toggle-icon collapsed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-content",
        id: "platformMega",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.state.megaPlatfromStatus === 0 ? 'active' : '',
        onClick: function onClick() {
          return _this2.setState({
            megaPlatfromStatus: 0
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.state.megaPlatfromStatus === 1 ? 'active' : '',
        onClick: function onClick() {
          return _this2.setState({
            megaPlatfromStatus: 1
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Platform Overview")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, this.state.megaPlatfromStatus === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showProducts(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-refresh-2 text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Oasis Automation RPA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "If you\u2019re looking for a world class RPA, you\u2019ve found it with Syntervision."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showProducts(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-search text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Discovery Engine"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Asset and Network Discovery is quick, simple and comprehensive with Oasis."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showProducts(2);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-server text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Application & Infrastructure Monitoring"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Oasis can monitor virtually anything and everything. The Oasis platform is designed to do end-to-end service management without unnecessary complexity."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showProducts(3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-display1 text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Advanced Analytics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "Advanced Analytics and Machine Learning can be used to collect and understand how your data impacts IT Operations, leading to better business decisions."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showProducts(4);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-edit text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Oasis Event Manager"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "The Oasis Event Manager handles event notifications for any data that is in Oasis, natively or via the Rest API."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showProducts(5);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-graph3 text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Trap Adapter SNMP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showProducts(6);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-plugin text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "API Suite"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Open up your enterprise's application landscape and maximize productivity with the simple and flexible Oasis API Suite."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showProducts(7);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-lock text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "Syntervision Security"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Syntervision Security is our leading all-in-one cybersecurity service, protecting your enterprise from cybersecurity attacks and keeping you in control of your security protocols.")))), this.state.megaPlatfromStatus === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        href: "/Platform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-home text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Oasis Platform Overview"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "We leverage out-of-the-box solutions or create custom-tailored solutions for your enterprise."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "item",
        onClick: function onClick() {
          return _this2.showPlatformOverview(0);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-culture text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Architecture"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Understand The Oasis Platform architecture and key components.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bottom-part platform try-oasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/device.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "Try Oasis Now"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        color: "danger",
        className: "learnmore",
        onClick: function onClick() {
          return window.location.href = '/DemoRequest';
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Learn More")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, "Solutions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", (_React$createElement = {
        className: "navbar-toggle",
        "data-toggle": "collapse",
        "data-target": "#solutionsMega",
        "aria-controls": "solutionsMega",
        "aria-expanded": "false"
      }, _defineProperty(_React$createElement, "className", "toggle-icon collapsed"), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 199
      }), _defineProperty(_React$createElement, "__self", this), _React$createElement)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-content",
        id: "solutionsMega",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, "Solutions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Security",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, "Syntervision Security")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Industries",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "By Industry")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Integrations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "Integrations"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bottom-part platform try-oasis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/device.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, "Try Oasis Now"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, "We offer a trial version that includes all advanced features - free, for 30 days. Contact us today to request a license!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        color: "danger",
        className: "learnmore",
        href: "/DemoRequest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Learn More")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Whoweare",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        "data-toggle": "collapse",
        "data-target": "#solutionsMega",
        "aria-controls": "solutionsMega",
        "aria-expanded": "false",
        className: "toggle-icon collapsed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-content",
        id: "solutionsMega",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, "Company")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Whoweare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Who We Are"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bottom-part platform",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/device.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "right-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "Join Oasis Webinar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Discover all of your enterprise network and device data - simply and quickly. Then view that data in a logical and digestible UI. This is the first step to having massive visibility into all systems and is critical to decision making, security, and capacity management."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        color: "danger",
        className: "learnmore",
        href: "https://www.hubspot.com/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "Learn More")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mobile-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#contact",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mobile-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/DemoRequest",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "Request a Demo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mobile-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "Careers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mobile-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/PrivacyPolicy",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item mobile-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Terms",
        className: "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "Terms & Conditions")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sub-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "navbar-toggler sub-mobile-menu",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#subbarCollapse",
        "aria-controls": "subbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "subbarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "imp-menu-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "imp-menu-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/DemoRequest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Request a Demo")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/PrivacyPolicy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "Privacy Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/Terms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Terms & Conditions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-close",
        "data-toggle": "collapse",
        "data-target": "#subbarCollapse",
        "aria-controls": "subbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      })))), this.state.modalShow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "product-modal-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "product-modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Product__WEBPACK_IMPORTED_MODULE_2__["default"], {
        setModalContent: this.setModalContent,
        contentName: this.state.modalContent,
        showProducts: this.showProducts,
        type: 'desktop',
        currentIndex: this.state.index,
        closeModal: this.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Process.js":
/*!*******************************!*\
  !*** ./components/Process.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Process.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Process =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Process, _React$Component);

  function Process() {
    _classCallCheck(this, Process);

    return _possibleConstructorReturn(this, _getPrototypeOf(Process).apply(this, arguments));
  }

  _createClass(Process, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 offset-lg-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "section-title text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Standing Up the Oasis Platform"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-title-border margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "section-subtitle text-muted text-center font-secondary padding-t-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "In an ideal world we install and be on our way. At Syntervision is to make it that easy, but each of our clients ecosystem is different. We specialise in integrating into any network for quick integrations so you're back to work without having to go thorugh the month long integrations from most IoT solutions."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 text-center process-left-icon-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 text-center process-left-icon-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row margin-t-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 plan-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center process-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-share text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Integrate"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 plan-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center process-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-search text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Discover"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center process-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-rocket text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Automate"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/platform",
        className: "btn btn-custom waves-light waves-effect margin-t-50 nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Learn More ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-arrow-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }))))));
    }
  }]);

  return Process;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Process);

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Product.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var productItems = [{
  id: 1,
  altText: 'Oasis Automation',
  img: '/static/images/eventmanager-modal.png',
  subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Simplify Automation with The Oasis Virtual Operator (OVO)"),
  caption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ptype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "If you\u2019re looking for a world class RPA, you\u2019ve found it with Syntervision. Our enterprise product takes advantage of robotic process automation and artificial intelligence by offering a more cost-effective solution that\u2019ll increase savings without sacrificing quality.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "The Oasis Virtual Operator delivers exceptional automation services for any repeatable process through cognitive computing. The graphical user interface offers a number of common automations right out of the box, but can also be customized! The OVO utilizes multi-path processes to quickly learn and implement the specific scripted language inputted into the system with limitless flexibility and control. And OVO can be purchased as a standalone product or as part of the Oasis Platform."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Enter the World of Automation to Experience Simplicity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Oasis Automation is a natural step in the lifecycle of a maturing Enterprise Service Management or IT Operations strategy in any business."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Reduce Errors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Automated Mundane Tasks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Responds to Common Deviations Rapidly"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Reduce Ticket Count by 80%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Save time and money in incident resolution staff hours and lost business"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Ensure ultimate customer satisfaction")))
}, {
  id: 2,
  altText: 'Discovery Engine',
  img: '/static/images/DeviceDiscoveryNetworkView.png',
  subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }),
  caption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Today, change to your virtual and physical environments is a function of business, happening fast and in high volumes. Oasis Discovery is designed to keep up with today\u2019s hybrid IT, regardless of the location of the assets and in spite of increasing rates in change volume and change types. Auto-discovery is crucial to your business because it is impossible to stay up to date with this tremendous volume of devices, applications and cloud resources without the help of a powerful tool.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), "Two of the most important components of an IT Operations Management Platform are discovering all of your logical, physical and virtual assets and automatically maintaining an accurate CMDB. Additionally, the CMDB demands knowing how each element is related to the business; there must always be context and no element or Configuration Item (CI) can be an island unto itself.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), "The Oasis discovery engine is completely agentless, lightning fast, lightweight, and requires minimal credentials and IP addresses to do its work. The output of the Oasis Discovery engine drives the Oasis Analytics, Reporting and Automation Components. All assets and any changes are updated in near real-time.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), "Discovery methods that are leveraged in Oasis include: ICMP, Netbios, SMB, SNMP, JMX, WinRM, SSH and credentials to inspect virtual environments, cloud-based resources in Azure, AWS, Google and containers with management layers such as Kubernetes. Application relationships can be discovered passively through a combination of SNMP, SSH, WinRM and Netflow: depending on your own policies for polling.")
}, {
  id: 3,
  altText: 'Application and Infrastructure Monitoring',
  img: '/static/images/appmonitoringmodal.jpg',
  subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ptype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Oasis, based on how it is configured, can monitor virtually anything and everything. Since the Oasis platform was designed to do end-to-end service management without the complexity of multiple tools, it is not dependent on other products to complete the solution\u2019s monitoring capabilities. It is important to note, however, that there are numerous products that work well in tandem with Oasis; that flexibility allows us to integrate with your existing ITOM tools, home grown monitoring, element managers and performance management solutions.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Measure end-user-experience and application performance via synthetic checks"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Network analysis of traffic to monitor production traffic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Application Performance Monitoring"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Core Monitoring (Availability, SLA, Event, Asset, Incident, Service Management, and more)")))
}, {
  id: 4,
  altText: 'Oasis Advanced Analytics',
  img: '/static/images/analyticsmodal.jpg',
  subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Oasis delivers business impacting information straight out of your raw data."),
  caption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ptype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Countless feeds from your devices, applications, logs and events are consumed by the Oasis ingestion engine, then normalized to generate context. In turn, that information can be converted into actionable intelligence by the Oasis analytics engine.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Find anomalies based on classifying disparate data sources"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "Easily forecast capacity challenges"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Watch for deviations in time-series data so you can focus on the events that most impact your business")))
}, {
  id: 5,
  altText: 'Oasis Event Manager',
  img: '/static/images/automationmodal.jpg',
  subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "Reduce Noise with The Oasis Event Manager"),
  caption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "The Oasis Event Manager (OEM) delivers a mature and modernized approach to Operations Management by reducing the noise in your system. Go from thousands of daily events down to a manageable volume for your NOC staff - a sure way to increase productivity. With OEM, they're able to pinpoint the root cause of business impacting events such as outages and performance degradations, quicker. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), "Events are automatically correlated to the services they impact so your operations team can prioritize troubleshooting. Additionally, Oasis Analytics proactively finds at-risk applications and devices, then alerts to their deterioration and heightened risk to the business. The synthetic Application Assurance tool constantly checks real world transactions for response time and availability. Systems are confirmed for both availability and reachability. For example, Oasis knows that a service may be unavailable because the NAS is unreachable due to a faulty switch. But the NAS is working properly and the appropriate team is dispatched to repair the switch. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), "The Oasis Event Manager is viewed through a single dashboard view and organized in a built-in view or by readily customizable templates. This flexibility matches the way your personnel work today so productivity is immediate and resolution times are reduced. The Oasis Dashboards are all convertible to Reports which can be scheduled, mailed or published to any portal. Key information is generated out-of-the-box, such as the Top Devices with Events and the Top Events generated. When maintenance windows are implemented, Oasis knows how to calibrate for Availability and Performance metrics and keeps alerts from being generated to the Helpdesk. Save your staff time and headaches.")
}, {
  id: 6,
  altText: 'Trap Adapter SNMP',
  img: '/static/images/trapadaptormodal.jpg',
  subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "The Oasis Trap Adapter SNMP"),
  caption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ptype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform. When you leverage the easy-to-use Oasis web application, you can fully configure all features, including the trap exploder and forwarder. Simply, point all of your device traps to the IP address of our trap adaptor and it just works! The Oasis Trap Adapter handles millions of traps per day on a single node.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "At-A-Glance:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "SNMP Trap Listener"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "Immediate event generation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Enterprise scalability"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Pre-built trap definitions cover thousands of different device manufacturers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Create your own trap definitions in Oasis to capture your custom or vendor specific traps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Create custom automation flows"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "No limitation to what traps we can receive"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "Fully configurable with Oasis API and Oasis Manager"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "Integrates seamlessly with the Oasis Platform, Oasis CMDB, Oasis Automation, Oasis Reporting and Dashboards, and Service Desks")))
}, {
  id: 7,
  altText: 'The Oasis API',
  img: '/static/images/apisuitemodal.jpg',
  subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "The Oasis API is a full feature REST API for CMDB/Assets, Performance, Incidents and Automation."),
  caption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ptype",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "We designed the API to be as simple as possible while also being both powerful and flexible. We use the same API internally when creating integrations with other monitoring and service desk systems.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Features:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Easy to learn, simple to use"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Push notifications into Oasis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, "Save any performance metrics from custom applications into Oasis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "Manage your automation workflows and digital operations"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "Intelligent automation for IT Incident Management")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, "IOT Ready"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "Oasis Automation Ready"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "CMDB/ Asset Management Ready"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "Get any data (time-series or current) from the Oasis Platform"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, "Integrate any new system with Oasis in less than 5 minutes")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Request a copy of the Oasis API Document today."))
}, {
  id: 8,
  altText: 'Syntervision Security',
  img: '/static/images/cybervisionmodal.jpg',
  subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "All-in-One Security Solution"),
  caption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "Syntervision Security is our leading all-in-one cybersecurity service, protecting your enterprise from cybersecurity attacks and keeping you in control of your security protocols. Extend your team with a SIEM and SOAR solution that leverages the renowned MITRE ATT&CK Matrix in tandem with the Oasis platform. If you've tried to attract and retain the talent needed to staff a Security Operations Center then you will appreciate the capability to watch every move on your network and on your endpoints, 24 x 7 x 365.")
}];

var Product =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Product, _React$Component);

  function Product(props) {
    var _this;

    _classCallCheck(this, Product);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Product).call(this, props));
    _this.state = {
      activeIndex: props.currentIndex ? props.currentIndex : 0,
      items: props.contentName === 'product' ? productItems : [{
        id: 1,
        altText: 'Architecture',
        img: '/static/images/SyntervisionSecurityArchitecture.png',
        subtitle: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }),
        caption: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, "The Oasis Platform was designed from the ground up with three key concepts in mind: aggregation, automation. and control. Along with the built-in discovery and monitoring capabilities, this enterprise-ready solution aggregates data from any monitoring service or tool for the management of applications and infrastructure. Providing views of the managed environment in a single interface via alerting, dashboards, and charts, Oasis enables instant identification and analysis of the impact on services in real-time; as well as providing historical data for reporting, trending, and capacity planning. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }))
      }]
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Product, [{
    key: "onExiting",
    value: function onExiting() {
      this.animating = true;
    }
  }, {
    key: "onExited",
    value: function onExited() {
      this.animating = false;
    }
  }, {
    key: "next",
    value: function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      });
    }
  }, {
    key: "previous",
    value: function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
      this.setState({
        activeIndex: nextIndex
      });
    }
  }, {
    key: "goToIndex",
    value: function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeIndex = this.state.activeIndex;
      var slides = this.state.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
          className: "custom-tag",
          tag: "div",
          key: item.id,
          onExiting: _this2.onExiting,
          onExited: _this2.onExited,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "item-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-5 col-sm-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: item.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-md-7 col-sm-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, item.altText), item.subtitle, item.caption))));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, ".custom-tag {\n                max-width: 100%;\n                height: 500px;\n                background: black;\n              }"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "modal-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, this.state.items.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: index,
          className: item.id === _this2.state.activeIndex + 1 ? 'active' : '',
          onClick: function onClick() {
            return _this2.goToIndex(item.id - 1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, item.altText);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
        activeIndex: activeIndex,
        next: this.next,
        previous: this.previous,
        interval: null,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, slides, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      })), this.props.type === 'desktop' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "close",
        "aria-label": "Close",
        onClick: this.props.closeModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "\xD7")));
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Services.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Services =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Services, _React$Component);

  function Services() {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, _getPrototypeOf(Services).apply(this, arguments));
  }

  _createClass(Services, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section pt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 offset-lg-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "section-title text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Our Platform"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-title-border margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "section-subtitle text-muted text-center padding-t-30 font-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "Syntervision was founded in 1994 as a consulting business. Our evolution began when we started offering engineering and management solution services to large enterprises. By 2005, we were established as a SaaS company committed to filling the gaps of existing ITSM tools with a platform that was simple and scalable. Meet our flagship software: The Oasis Platform, an end-to-end data management solution built to enable digital transformation and lead enterprises into the Cognitive Era."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row margin-t-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "services-box text-center hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-refresh-2 text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Automation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Use the Oasis Virtual Operator (OVO) to accelerate your DevOps strategy by automating service requests, deployment steps, or other manual tasks."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "services-box text-center hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-display2 text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Event Manager"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "The Oasis Event Manager (OEM) delivers a mature and modernized approach to Operations Management by reducing the noise in your system."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "services-box text-center hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-network text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Trap Adaptor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row margin-t-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "services-box text-center hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-graph1 text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Analytics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Oasis delivers business impacting information straight out of your raw data. Countless feeds from your network are consumed by the Oasis ingestion engine, then normalized to generate context."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "services-box text-center hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-search text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Discovery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "The Oasis Discovery engine includes both network and device discovery. Supporting numerous protocols and sources, all discoverable assets are added into a detailed inventory."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "services-box text-center hover-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-science text-custom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "padding-t-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Integration"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "The Oasis Platform was designed to consume data and convert it into useful information. Making it simple and fast to pull data into the platform and synthesize it with any related content."))))));
    }
  }]);

  return Services;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/SocialMedia.js":
/*!***********************************!*\
  !*** ./components/SocialMedia.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/SocialMedia.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SocialMedia =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SocialMedia, _React$Component);

  function SocialMedia() {
    _classCallCheck(this, SocialMedia);

    return _possibleConstructorReturn(this, _getPrototypeOf(SocialMedia).apply(this, arguments));
  }

  _createClass(SocialMedia, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "cta bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline social margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://twitter.com/syntervisioninc",
        className: "social-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-twitter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "list-inline-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.linkedin.com/company/syntervision-inc",
        className: "social-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-linkedin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-3 margin-t-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "margin-b-0 contact-title mobile-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-call",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), " \xA0+1 256 508 5590"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "margin-b-0 contact-title desktop-hidden",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "tel:1-256-508-5590",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-call",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), " \xA0+1 256 508 5590"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-3 margin-t-30 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "contact-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pe-7s-mail-open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), "\xA0 info@syntervision.com")))));
    }
  }]);

  return SocialMedia;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SocialMedia);

/***/ }),

/***/ "./components/Started.js":
/*!*******************************!*\
  !*** ./components/Started.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/components/Started.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Started =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Started, _React$Component);

  function Started() {
    _classCallCheck(this, Started);

    return _possibleConstructorReturn(this, _getPrototypeOf(Started).apply(this, arguments));
  }

  _createClass(Started, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "section section-lg bg-get-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 offset-lg-2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "get-started-title text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "IoT Automation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "section-title-border margin-t-20 bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 home-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Delivering exceptional monitoring and automation services for your enterprise through cognitive computing. Leverage out-of-the-box solutions, to seamlessly integrate with other technology and departments for widespread and proactive business impact."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn btn-bg-white waves-effect margin-t-20 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Get Started ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "mdi mdi-arrow-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), " ")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-pattern-effect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/bg-pattern-light.png",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })));
    }
  }]);

  return Started;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Started);

/***/ }),

/***/ "./pages/hoc/Aux_.js":
/*!***************************!*\
  !*** ./pages/hoc/Aux_.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/pages/hoc/Aux_.js";


var aux = function aux(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 1
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (aux);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Services */ "./components/Services.js");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Features */ "./components/Features.js");
/* harmony import */ var _components_Descriptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Descriptions */ "./components/Descriptions.js");
/* harmony import */ var _components_Process__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Process */ "./components/Process.js");
/* harmony import */ var _components_Started__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Started */ "./components/Started.js");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Blog */ "./components/Blog.js");
/* harmony import */ var _components_Demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Demo */ "./components/Demo.js");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.js");
/* harmony import */ var _components_SocialMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SocialMedia */ "./components/SocialMedia.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_FooterLinks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/FooterLinks */ "./components/FooterLinks.js");
/* harmony import */ var _components_Includes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Includes */ "./components/Includes.js");
/* harmony import */ var _hoc_Aux___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hoc/Aux_ */ "./pages/hoc/Aux_.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/brenton/Desktop/webapp19/Syntervision/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


















var HomeFive =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HomeFive, _React$Component);

  function HomeFive() {
    _classCallCheck(this, HomeFive);

    return _possibleConstructorReturn(this, _getPrototypeOf(HomeFive).apply(this, arguments));
  }

  _createClass(HomeFive, [{
    key: "render",
    value: function render() {
      var bkg1 = {
        backgroundImage: 'url(static/images/img-2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Aux___WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Includes__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "home-padding-t-150 position-relative",
        id: "home",
        style: bkg1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "display-table",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "home-cell-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 offset-lg-2 text-white text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "home-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "A Platform for Aggregation, Automation and Control"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "padding-t-15 home-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Creating synergy for your enterprise with cognitive technology and solutions. Start your digital transformation journey today."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/home-dash.png",
        alt: "",
        className: "img-fluid center-block margin-t-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Services__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Descriptions__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Process__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Demo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SocialMedia__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FooterLinks__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }));
    }
  }]);

  return HomeFive;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HomeFive);

/***/ }),

/***/ "./styles/css/main.scss":
/*!******************************!*\
  !*** ./styles/css/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "/*!\n * Bootstrap v4.2.1 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;}*,::after,::before{box-sizing:border-box}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:75%;}.img-fluid-2{max-width:100%;}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;width:auto;max-width:100%}.col-1{flex:0 0 8.333333%;max-width:8.333333%}.col-2{flex:0 0 16.666667%;max-width:16.666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.333333%;max-width:33.333333%}.col-5{flex:0 0 41.666667%;max-width:41.666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.333333%;max-width:58.333333%}.col-8{flex:0 0 66.666667%;max-width:66.666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.333333%;max-width:83.333333%}.col-11{flex:0 0 91.666667%;max-width:91.666667%}.col-12{flex:0 0 100%;max-width:100%}.order-first{order:-1}.order-last{order:13}.order-0{order:0}.order-1{order:1}.order-2{order:2}.order-3{order:3}.order-4{order:4}.order-5{order:5}.order-6{order:6}.order-7{order:7}.order-8{order:8}.order-9{order:9}.order-10{order:10}.order-11{order:11}.order-12{order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.order-sm-first{order:-1}.order-sm-last{order:13}.order-sm-0{order:0}.order-sm-1{order:1}.order-sm-2{order:2}.order-sm-3{order:3}.order-sm-4{order:4}.order-sm-5{order:5}.order-sm-6{order:6}.order-sm-7{order:7}.order-sm-8{order:8}.order-sm-9{order:9}.order-sm-10{order:10}.order-sm-11{order:11}.order-sm-12{order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;width:auto;max-width:100%}.col-md-1{flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{flex:0 0 100%;max-width:100%}.order-md-first{order:-1}.order-md-last{order:13}.order-md-0{order:0}.order-md-1{order:1}.order-md-2{order:2}.order-md-3{order:3}.order-md-4{order:4}.order-md-5{order:5}.order-md-6{order:6}.order-md-7{order:7}.order-md-8{order:8}.order-md-9{order:9}.order-md-10{order:10}.order-md-11{order:11}.order-md-12{order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.order-lg-first{order:-1}.order-lg-last{order:13}.order-lg-0{order:0}.order-lg-1{order:1}.order-lg-2{order:2}.order-lg-3{order:3}.order-lg-4{order:4}.order-lg-5{order:5}.order-lg-6{order:6}.order-lg-7{order:7}.order-lg-8{order:8}.order-lg-9{order:9}.order-lg-10{order:10}.order-lg-11{order:11}.order-lg-12{order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.order-xl-first{order:-1}.order-xl-last{order:13}.order-xl-0{order:0}.order-xl-1{order:1}.order-xl-2{order:2}.order-xl-3{order:3}.order-xl-4{order:4}.order-xl-5{order:5}.order-xl-6{order:6}.order-xl-7{order:7}.order-xl-8{order:8}.order-xl-9{order:9}.order-xl-10{order:10}.order-xl-11{order:11}.order-xl-12{order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(2.25rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.8125rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(2.875rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:flex;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:inline-flex;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:2.25rem;background-repeat:no-repeat;background-position:center right calc(2.25rem / 4);background-size:calc(2.25rem / 2) calc(2.25rem / 2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:2.25rem;background-position:top calc(2.25rem / 4) right calc(2.25rem / 4)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:3.4375rem;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") no-repeat center right 1.75rem/1.125rem 1.125rem}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip{display:block}.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip{display:block}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{border-color:#28a745}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:2.25rem;background-repeat:no-repeat;background-position:center right calc(2.25rem / 4);background-size:calc(2.25rem / 2) calc(2.25rem / 2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\")}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:2.25rem;background-position:top calc(2.25rem / 4) right calc(2.25rem / 4)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:3.4375rem;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\") no-repeat center right 1.75rem/1.125rem 1.125rem}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip{display:block}.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{border-color:#dc3545}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:flex;flex-flow:row wrap;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:flex;align-items:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:flex;flex:0 0 auto;flex-flow:row wrap;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:flex;align-items:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{align-items:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media screen and (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media screen and (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-right{right:0;left:auto}}.dropdown-menu-left{right:auto;left:0}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:first-child{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.dropdown-item:last-child{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:flex;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(2.875rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.8125rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(128,189,255,.5)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(2.875rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(2.25rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:calc(1rem + .4rem);padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media screen and (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media screen and (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media screen and (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler:not(:disabled):not(.disabled){cursor:pointer}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;color:inherit;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:flex;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:flex;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child){border-radius:0}.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion .card{overflow:hidden}.accordion .card:not(:first-of-type) .card-header:first-child{border-radius:0}.accordion .card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion .card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion .card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.accordion .card .card-header{margin-bottom:-1px}.breadcrumb{display:flex;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-link:not(:disabled):not(.disabled){cursor:pointer}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media screen and (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:flex;align-items:flex-start}.media-body{flex:1}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush .list-group-item:last-child{margin-bottom:-1px}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{margin-bottom:0;border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled){cursor:pointer}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);border-radius:.25rem;box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:flex;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-50px);transform:translate(0,-50px)}@media screen and (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - (.5rem * 2))}.modal-dialog-centered::before{display:block;height:calc(100vh - (.5rem * 2));content:\"\"}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;align-items:flex-start;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;align-items:center;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef;border-bottom-right-radius:.3rem;border-bottom-left-radius:.3rem}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - (1.75rem * 2))}.modal-dialog-centered::before{height:calc(100vh - (1.75rem * 2))}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::after,.bs-popover-top .arrow::before{border-width:.5rem .5rem 0}.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::before{bottom:0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-top .arrow::after{bottom:1px;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::after,.bs-popover-right .arrow::before{border-width:.5rem .5rem .5rem 0}.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::before{left:0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-right .arrow::after{left:1px;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::after,.bs-popover-bottom .arrow::before{border-width:0 .5rem .5rem .5rem}.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::before{top:0;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-bottom .arrow::after{top:1px;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::after,.bs-popover-left .arrow::before{border-width:.5rem 0 .5rem .5rem}.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::before{right:0;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-left .arrow::after{right:1px;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden!important}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out, -webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:0s .6s opacity}@media screen and (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media screen and (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media screen and (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-3by4::before{padding-top:133.333333%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-fill{flex:1 1 auto!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}@media (min-width:576px){.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}}@media (min-width:768px){.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position: -webkit-sticky) or (position: sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}/* Magnific Popup CSS */.mfp-bg {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1042;\n  overflow: hidden;\n  position: fixed;\n  background: #0b0b0b;\n  opacity: 0.8;\n  filter: alpha(opacity=80); }.mfp-wrap {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1043;\n  position: fixed;\n  outline: none !important;\n  -webkit-backface-visibility: hidden; }.mfp-container {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding: 0 8px;\n  box-sizing: border-box; }.mfp-container:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle; }.mfp-align-top .mfp-container:before {\n  display: none; }.mfp-content {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 auto;\n  text-align: left;\n  z-index: 1045; }.mfp-inline-holder .mfp-content, .mfp-ajax-holder .mfp-content {\n  width: 100%;\n  cursor: auto; }.mfp-ajax-cur {\n  cursor: progress; }.mfp-zoom-out-cur, .mfp-zoom-out-cur .mfp-image-holder .mfp-close {\n  cursor: zoom-out; }.mfp-zoom {\n  cursor: pointer;\n  cursor: zoom-in; }.mfp-auto-cursor .mfp-content {\n  cursor: auto; }.mfp-close, .mfp-arrow, .mfp-preloader, .mfp-counter {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }.mfp-loading.mfp-figure {\n  display: none; }.mfp-hide {\n  display: none !important; }.mfp-preloader {\n  color: #CCC;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  text-align: center;\n  margin-top: -0.8em;\n  left: 8px;\n  right: 8px;\n  z-index: 1044; }.mfp-preloader a {\n    color: #CCC; }.mfp-preloader a:hover {\n      color: #FFF; }.mfp-s-ready .mfp-preloader {\n  display: none; }.mfp-s-error .mfp-content {\n  display: none; }button.mfp-close{\n    background: transparent none repeat scroll 0 0;\n    border: 0 none;\n    box-shadow: none;\n    cursor: pointer;\n    display: block;\n    height: auto;\n    line-height: 1;\n    min-width: auto;\n    outline: medium none;\n    overflow: visible;\n    padding: 0;\n    right: 4px;\n    top: 4px;\n    width: auto;\n    z-index: 1046;\n}button.mfp-close:hover,button.mfp-close:focus,button.mfp-arrow:hover,button.mfp-arrow:focus{\n\topacity:.5;\n\tbackground:none;\n}button::-moz-focus-inner {\n  padding: 0;\n  border: 0; }.mfp-close {\n  width: 44px;\n  height: 44px;\n  line-height: 44px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-decoration: none;\n  text-align: center;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  padding: 0 0 18px 10px;\n  color: #FFF;\n  font-style: normal;\n  font-size: 24px;\n  font-family: Arial, Baskerville, monospace; }.mfp-close:hover, .mfp-close:focus {\n    opacity: 1;\n    filter: alpha(opacity=100); }.mfp-close:active {\n    top: 1px; }.mfp-close-btn-in .mfp-close {\n  color: #333; }.mfp-image-holder .mfp-close, .mfp-iframe-holder .mfp-close {\n  color: #FFF;\n  right: -6px;\n  text-align: right;\n  padding-right: 6px;\n  width: 100%; }.mfp-counter {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #CCC;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: nowrap; }.mfp-arrow {\n  border: 0 none;    \n  line-height: inherit;    \n  min-width: auto;\t\n  position: absolute;\n  opacity: 0.65;\n  filter: alpha(opacity=65);\n  margin: 0;\n  top: 50%;\n  margin-top: -55px;\n  padding: 0;\n  width: 90px;\n  height: 110px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }.mfp-arrow:active {\n    margin-top: -54px; }.mfp-arrow:hover, .mfp-arrow:focus {\n    opacity: 1;\n    filter: alpha(opacity=100); }.mfp-arrow:before, .mfp-arrow:after, .mfp-arrow .mfp-b, .mfp-arrow .mfp-a {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    margin-top: 35px;\n    margin-left: 35px;\n    border: medium inset transparent; }.mfp-arrow:after, .mfp-arrow .mfp-a {\n    border-top-width: 13px;\n    border-bottom-width: 13px;\n    top: 8px; }.mfp-arrow:before, .mfp-arrow .mfp-b {\n    border-top-width: 21px;\n    border-bottom-width: 21px;\n    opacity: 0.7; }.mfp-arrow-left {\n  left: 0; }.mfp-arrow-left:after, .mfp-arrow-left .mfp-a {\n    border-right: 17px solid #FFF;\n    margin-left: 31px; }.mfp-arrow-left:before, .mfp-arrow-left .mfp-b {\n    margin-left: 25px;\n    border-right: 27px solid #3F3F3F; }.mfp-arrow-right {\n  right: 0; }.mfp-arrow-right:after, .mfp-arrow-right .mfp-a {\n    border-left: 17px solid #FFF;\n    margin-left: 39px; }.mfp-arrow-right:before, .mfp-arrow-right .mfp-b {\n    border-left: 27px solid #3F3F3F; }.mfp-iframe-holder {\n  padding-top: 40px;\n  padding-bottom: 40px; }.mfp-iframe-holder .mfp-content {\n    line-height: 0;\n    width: 100%;\n    max-width: 900px; }.mfp-iframe-holder .mfp-close {\n    top: -40px; }.mfp-iframe-scaler {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-top: 56.25%; }.mfp-iframe-scaler iframe {\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #000; }/* Main image in popup */img.mfp-img {\n  width: auto;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  line-height: 0;\n  box-sizing: border-box;\n  padding: 40px 0 40px;\n  margin: 0 auto; }/* The shadow behind the image */.mfp-figure {\n  line-height: 0; }.mfp-figure:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 40px;\n    bottom: 40px;\n    display: block;\n    right: 0;\n    width: auto;\n    height: auto;\n    z-index: -1;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n    background: #444; }.mfp-figure small {\n    color: #BDBDBD;\n    display: block;\n    font-size: 12px;\n    line-height: 14px; }.mfp-figure figure {\n    margin: 0; }.mfp-bottom-bar {\n  margin-top: -36px;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  cursor: auto; }.mfp-title {\n  text-align: left;\n  line-height: 18px;\n  color: #F3F3F3;\n  word-wrap: break-word;\n  padding-right: 36px; }.mfp-image-holder .mfp-content {\n  max-width: 100%; }.mfp-gallery .mfp-image-holder .mfp-figure {\n  cursor: pointer; }@media screen and (max-width: 800px) and (orientation: landscape), screen and (max-height: 300px) {\n  /**\n       * Remove all paddings around the image on small screen\n       */\n  .mfp-img-mobile .mfp-image-holder {\n    padding-left: 0;\n    padding-right: 0; }\n  .mfp-img-mobile img.mfp-img {\n    padding: 0; }\n  .mfp-img-mobile .mfp-figure:after {\n    top: 0;\n    bottom: 0; }\n  .mfp-img-mobile .mfp-figure small {\n    display: inline;\n    margin-left: 5px; }\n  .mfp-img-mobile .mfp-bottom-bar {\n    background: rgba(0, 0, 0, 0.6);\n    bottom: 0;\n    margin: 0;\n    top: auto;\n    padding: 3px 5px;\n    position: fixed;\n    box-sizing: border-box; }\n    .mfp-img-mobile .mfp-bottom-bar:empty {\n      padding: 0; }\n  .mfp-img-mobile .mfp-counter {\n    right: 5px;\n    top: 3px; }\n  .mfp-img-mobile .mfp-close {\n    top: 0;\n    right: 0;\n    width: 35px;\n    height: 35px;\n    line-height: 35px;\n    background: rgba(0, 0, 0, 0.6);\n    position: fixed;\n    text-align: center;\n    padding: 0; }\n }@media all and (max-width: 900px) {\n  .mfp-arrow {\n    -webkit-transform: scale(0.75);\n    transform: scale(0.75); }\n\n  .mfp-arrow-left {\n    -webkit-transform-origin: 0;\n    transform-origin: 0; }\n\n  .mfp-arrow-right {\n    -webkit-transform-origin: 100%;\n    transform-origin: 100%; }\n\n  .mfp-container {\n    padding-left: 6px;\n    padding-right: 6px; }\n }.mfp-ie7 .mfp-img {\n  padding: 0; }.mfp-ie7 .mfp-bottom-bar {\n  width: 600px;\n  left: 50%;\n  margin-left: -300px;\n  margin-top: 5px;\n  padding-bottom: 5px; }.mfp-ie7 .mfp-container {\n  padding: 0; }.mfp-ie7 .mfp-content {\n  padding-top: 44px; }.mfp-ie7 .mfp-close {\n  top: 0;\n  right: 0;\n  padding-top: 0; }.mfp-no-margins img.mfp-img {\n\tpadding: 0;\n}.mfp-no-margins .mfp-figure:after {\n\ttop: 0;\n\tbottom: 0;\n}.mfp-no-margins .mfp-container {\n\tpadding: 0;\n}.mfp-with-zoom .mfp-container,\n.mfp-with-zoom.mfp-bg {\n\topacity: 0;\n\t-webkit-backface-visibility: hidden; \n\ttransition: all 0.3s ease-out;\n}.mfp-with-zoom.mfp-ready .mfp-container {\n\t\topacity: 1;\n}.mfp-with-zoom.mfp-ready.mfp-bg {\n\t\topacity: 0.8;\n}.mfp-with-zoom.mfp-removing .mfp-container, \n.mfp-with-zoom.mfp-removing.mfp-bg {\n\topacity: 0;\n}.mfp-fade.mfp-bg {\n\topacity: 0; \n\ttransition: all 0.15s ease-out;\n}.mfp-fade.mfp-bg.mfp-ready {\n\topacity: 0.8;\n}.mfp-fade.mfp-bg.mfp-removing {\n\topacity: 0;\n}.mfp-fade.mfp-wrap .mfp-content {\n\topacity: 0; \n\ttransition: all 0.15s ease-out;\n}.mfp-fade.mfp-wrap.mfp-ready .mfp-content {\n\topacity: 1;\n}.mfp-fade.mfp-wrap.mfp-removing .mfp-content {\n\topacity: 0;\n}/* Styles for dialog window */.small-dialog {\n\tbackground: white;\n\tpadding:30px;\n\ttext-align: left;\n\tmax-width: 400px;\n\tmargin: 40px auto;\n\tposition: relative;\n}/**\n * Fade-zoom animation for first dialog\n *//* start state */.my-mfp-zoom-in .zoom-anim-dialog {\n\topacity: 0; \n\ttransition: all 0.2s ease-in-out; \n\n\n\n\t-webkit-transform: scale(0.8); \n\ttransform: scale(0.8); \n}/* animate in */.my-mfp-zoom-in.mfp-ready .zoom-anim-dialog {\n\topacity: 1;\n\n\t-webkit-transform: scale(1); \n\ttransform: scale(1); \n}/* animate out */.my-mfp-zoom-in.mfp-removing .zoom-anim-dialog {\n\t-webkit-transform: scale(0.8); \n\ttransform: scale(0.8); \n\n\topacity: 0;\n}/* Dark overlay, start state */.my-mfp-zoom-in.mfp-bg {\n\topacity: 0; \n\ttransition: opacity 0.3s ease-out;\n}/* animate in */.my-mfp-zoom-in.mfp-ready.mfp-bg {\n\topacity: 0.8;\n}/* animate out */.my-mfp-zoom-in.mfp-removing.mfp-bg {\n\topacity: 0;\n}/**\n * Fade-move animation for second dialog\n *//* at start */.my-mfp-slide-bottom .zoom-anim-dialog {\n\topacity: 0;\n\ttransition: all 0.2s ease-out;\n\n\t-webkit-transform: translateY(-20px) perspective( 600px ) rotateX( 10deg );\n\ttransform: translateY(-20px) perspective( 600px ) rotateX( 10deg );\n\n}/* animate in */.my-mfp-slide-bottom.mfp-ready .zoom-anim-dialog {\n\topacity: 1;\n\t-webkit-transform: translateY(0) perspective( 600px ) rotateX( 0 ); \n\ttransform: translateY(0) perspective( 600px ) rotateX( 0 ); \n}/* animate out */.my-mfp-slide-bottom.mfp-removing .zoom-anim-dialog {\n\topacity: 0;\n\n\t-webkit-transform: translateY(-10px) perspective( 600px ) rotateX( 10deg ); \n\ttransform: translateY(-10px) perspective( 600px ) rotateX( 10deg ); \n}/* Dark overlay, start state */.my-mfp-slide-bottom.mfp-bg {\n\topacity: 0; \n\ttransition: opacity 0.3s ease-out;\n}/* animate in */.my-mfp-slide-bottom.mfp-ready.mfp-bg {\n\topacity: 0.8;\n}/* animate out */.my-mfp-slide-bottom.mfp-removing.mfp-bg {\n\topacity: 0;\n}.white-popup-block {\n    background: #fff none repeat scroll 0 0;\n    margin: 40px auto;\n    max-width: 650px;\n    padding:30px;\n    position: relative;\n    text-align: left;\n}/* MaterialDesignIcons.com */@font-face{font-family:\"Material Design Icons\";src:url(\"/static/fonts/materialdesignicons-webfont.eot?v=1.9.32\");src:url(\"/static/fonts/materialdesignicons-webfont.eot?#iefix&v=1.9.32\") format(\"embedded-opentype\"),url(\"/static/fonts/materialdesignicons-webfont.woff2?v=1.9.32\") format(\"woff2\"),url(\"/static/fonts/materialdesignicons-webfont.woff?v=1.9.32\") format(\"woff\"),url(\"/static/fonts/materialdesignicons-webfont.ttf?v=1.9.32\") format(\"truetype\"),url(\"/static/fonts/materialdesignicons-webfont.svg?v=1.9.32#materialdesigniconsregular\") format(\"svg\");font-weight:normal;font-style:normal}.mdi:before,.mdi-set{display:inline-block;font:normal normal normal 24px/1 \"Material Design Icons\";font-size:inherit;text-rendering:auto;line-height:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mdi-access-point:before{content:\"\\F002\"}.mdi-access-point-network:before{content:\"\\F003\"}.mdi-account:before{content:\"\\F004\"}.mdi-account-alert:before{content:\"\\F005\"}.mdi-account-box:before{content:\"\\F006\"}.mdi-account-box-outline:before{content:\"\\F007\"}.mdi-account-card-details:before{content:\"\\F5D2\"}.mdi-account-check:before{content:\"\\F008\"}.mdi-account-circle:before{content:\"\\F009\"}.mdi-account-convert:before{content:\"\\F00A\"}.mdi-account-edit:before{content:\"\\F6BB\"}.mdi-account-key:before{content:\"\\F00B\"}.mdi-account-location:before{content:\"\\F00C\"}.mdi-account-minus:before{content:\"\\F00D\"}.mdi-account-multiple:before{content:\"\\F00E\"}.mdi-account-multiple-minus:before{content:\"\\F5D3\"}.mdi-account-multiple-outline:before{content:\"\\F00F\"}.mdi-account-multiple-plus:before{content:\"\\F010\"}.mdi-account-network:before{content:\"\\F011\"}.mdi-account-off:before{content:\"\\F012\"}.mdi-account-outline:before{content:\"\\F013\"}.mdi-account-plus:before{content:\"\\F014\"}.mdi-account-remove:before{content:\"\\F015\"}.mdi-account-search:before{content:\"\\F016\"}.mdi-account-settings:before{content:\"\\F630\"}.mdi-account-settings-variant:before{content:\"\\F631\"}.mdi-account-star:before{content:\"\\F017\"}.mdi-account-switch:before{content:\"\\F019\"}.mdi-adjust:before{content:\"\\F01A\"}.mdi-air-conditioner:before{content:\"\\F01B\"}.mdi-airballoon:before{content:\"\\F01C\"}.mdi-airplane:before{content:\"\\F01D\"}.mdi-airplane-landing:before{content:\"\\F5D4\"}.mdi-airplane-off:before{content:\"\\F01E\"}.mdi-airplane-takeoff:before{content:\"\\F5D5\"}.mdi-airplay:before{content:\"\\F01F\"}.mdi-alarm:before{content:\"\\F020\"}.mdi-alarm-check:before{content:\"\\F021\"}.mdi-alarm-multiple:before{content:\"\\F022\"}.mdi-alarm-off:before{content:\"\\F023\"}.mdi-alarm-plus:before{content:\"\\F024\"}.mdi-alarm-snooze:before{content:\"\\F68D\"}.mdi-album:before{content:\"\\F025\"}.mdi-alert:before{content:\"\\F026\"}.mdi-alert-box:before{content:\"\\F027\"}.mdi-alert-circle:before{content:\"\\F028\"}.mdi-alert-circle-outline:before{content:\"\\F5D6\"}.mdi-alert-decagram:before{content:\"\\F6BC\"}.mdi-alert-octagon:before{content:\"\\F029\"}.mdi-alert-octagram:before{content:\"\\F766\"}.mdi-alert-outline:before{content:\"\\F02A\"}.mdi-all-inclusive:before{content:\"\\F6BD\"}.mdi-alpha:before{content:\"\\F02B\"}.mdi-alphabetical:before{content:\"\\F02C\"}.mdi-altimeter:before{content:\"\\F5D7\"}.mdi-amazon:before{content:\"\\F02D\"}.mdi-amazon-clouddrive:before{content:\"\\F02E\"}.mdi-ambulance:before{content:\"\\F02F\"}.mdi-amplifier:before{content:\"\\F030\"}.mdi-anchor:before{content:\"\\F031\"}.mdi-android:before{content:\"\\F032\"}.mdi-android-debug-bridge:before{content:\"\\F033\"}.mdi-android-studio:before{content:\"\\F034\"}.mdi-angular:before{content:\"\\F6B1\"}.mdi-angularjs:before{content:\"\\F6BE\"}.mdi-animation:before{content:\"\\F5D8\"}.mdi-apple:before{content:\"\\F035\"}.mdi-apple-finder:before{content:\"\\F036\"}.mdi-apple-ios:before{content:\"\\F037\"}.mdi-apple-keyboard-caps:before{content:\"\\F632\"}.mdi-apple-keyboard-command:before{content:\"\\F633\"}.mdi-apple-keyboard-control:before{content:\"\\F634\"}.mdi-apple-keyboard-option:before{content:\"\\F635\"}.mdi-apple-keyboard-shift:before{content:\"\\F636\"}.mdi-apple-mobileme:before{content:\"\\F038\"}.mdi-apple-safari:before{content:\"\\F039\"}.mdi-application:before{content:\"\\F614\"}.mdi-apps:before{content:\"\\F03B\"}.mdi-archive:before{content:\"\\F03C\"}.mdi-arrange-bring-forward:before{content:\"\\F03D\"}.mdi-arrange-bring-to-front:before{content:\"\\F03E\"}.mdi-arrange-send-backward:before{content:\"\\F03F\"}.mdi-arrange-send-to-back:before{content:\"\\F040\"}.mdi-arrow-all:before{content:\"\\F041\"}.mdi-arrow-bottom-left:before{content:\"\\F042\"}.mdi-arrow-bottom-right:before{content:\"\\F043\"}.mdi-arrow-compress:before{content:\"\\F615\"}.mdi-arrow-compress-all:before{content:\"\\F044\"}.mdi-arrow-down:before{content:\"\\F045\"}.mdi-arrow-down-bold:before{content:\"\\F72D\"}.mdi-arrow-down-bold-box:before{content:\"\\F72E\"}.mdi-arrow-down-bold-box-outline:before{content:\"\\F72F\"}.mdi-arrow-down-bold-circle:before{content:\"\\F047\"}.mdi-arrow-down-bold-circle-outline:before{content:\"\\F048\"}.mdi-arrow-down-bold-hexagon-outline:before{content:\"\\F049\"}.mdi-arrow-down-box:before{content:\"\\F6BF\"}.mdi-arrow-down-drop-circle:before{content:\"\\F04A\"}.mdi-arrow-down-drop-circle-outline:before{content:\"\\F04B\"}.mdi-arrow-down-thick:before{content:\"\\F046\"}.mdi-arrow-expand:before{content:\"\\F616\"}.mdi-arrow-expand-all:before{content:\"\\F04C\"}.mdi-arrow-left:before{content:\"\\F04D\"}.mdi-arrow-left-bold:before{content:\"\\F730\"}.mdi-arrow-left-bold-box:before{content:\"\\F731\"}.mdi-arrow-left-bold-box-outline:before{content:\"\\F732\"}.mdi-arrow-left-bold-circle:before{content:\"\\F04F\"}.mdi-arrow-left-bold-circle-outline:before{content:\"\\F050\"}.mdi-arrow-left-bold-hexagon-outline:before{content:\"\\F051\"}.mdi-arrow-left-box:before{content:\"\\F6C0\"}.mdi-arrow-left-drop-circle:before{content:\"\\F052\"}.mdi-arrow-left-drop-circle-outline:before{content:\"\\F053\"}.mdi-arrow-left-thick:before{content:\"\\F04E\"}.mdi-arrow-right:before{content:\"\\F054\"}.mdi-arrow-right-bold:before{content:\"\\F733\"}.mdi-arrow-right-bold-box:before{content:\"\\F734\"}.mdi-arrow-right-bold-box-outline:before{content:\"\\F735\"}.mdi-arrow-right-bold-circle:before{content:\"\\F056\"}.mdi-arrow-right-bold-circle-outline:before{content:\"\\F057\"}.mdi-arrow-right-bold-hexagon-outline:before{content:\"\\F058\"}.mdi-arrow-right-box:before{content:\"\\F6C1\"}.mdi-arrow-right-drop-circle:before{content:\"\\F059\"}.mdi-arrow-right-drop-circle-outline:before{content:\"\\F05A\"}.mdi-arrow-right-thick:before{content:\"\\F055\"}.mdi-arrow-top-left:before{content:\"\\F05B\"}.mdi-arrow-top-right:before{content:\"\\F05C\"}.mdi-arrow-up:before{content:\"\\F05D\"}.mdi-arrow-up-bold:before{content:\"\\F736\"}.mdi-arrow-up-bold-box:before{content:\"\\F737\"}.mdi-arrow-up-bold-box-outline:before{content:\"\\F738\"}.mdi-arrow-up-bold-circle:before{content:\"\\F05F\"}.mdi-arrow-up-bold-circle-outline:before{content:\"\\F060\"}.mdi-arrow-up-bold-hexagon-outline:before{content:\"\\F061\"}.mdi-arrow-up-box:before{content:\"\\F6C2\"}.mdi-arrow-up-drop-circle:before{content:\"\\F062\"}.mdi-arrow-up-drop-circle-outline:before{content:\"\\F063\"}.mdi-arrow-up-thick:before{content:\"\\F05E\"}.mdi-assistant:before{content:\"\\F064\"}.mdi-asterisk:before{content:\"\\F6C3\"}.mdi-at:before{content:\"\\F065\"}.mdi-atom:before{content:\"\\F767\"}.mdi-attachment:before{content:\"\\F066\"}.mdi-audiobook:before{content:\"\\F067\"}.mdi-auto-fix:before{content:\"\\F068\"}.mdi-auto-upload:before{content:\"\\F069\"}.mdi-autorenew:before{content:\"\\F06A\"}.mdi-av-timer:before{content:\"\\F06B\"}.mdi-baby:before{content:\"\\F06C\"}.mdi-baby-buggy:before{content:\"\\F68E\"}.mdi-backburger:before{content:\"\\F06D\"}.mdi-backspace:before{content:\"\\F06E\"}.mdi-backup-restore:before{content:\"\\F06F\"}.mdi-bandcamp:before{content:\"\\F674\"}.mdi-bank:before{content:\"\\F070\"}.mdi-barcode:before{content:\"\\F071\"}.mdi-barcode-scan:before{content:\"\\F072\"}.mdi-barley:before{content:\"\\F073\"}.mdi-barrel:before{content:\"\\F074\"}.mdi-basecamp:before{content:\"\\F075\"}.mdi-basket:before{content:\"\\F076\"}.mdi-basket-fill:before{content:\"\\F077\"}.mdi-basket-unfill:before{content:\"\\F078\"}.mdi-battery:before{content:\"\\F079\"}.mdi-battery-10:before{content:\"\\F07A\"}.mdi-battery-20:before{content:\"\\F07B\"}.mdi-battery-30:before{content:\"\\F07C\"}.mdi-battery-40:before{content:\"\\F07D\"}.mdi-battery-50:before{content:\"\\F07E\"}.mdi-battery-60:before{content:\"\\F07F\"}.mdi-battery-70:before{content:\"\\F080\"}.mdi-battery-80:before{content:\"\\F081\"}.mdi-battery-90:before{content:\"\\F082\"}.mdi-battery-alert:before{content:\"\\F083\"}.mdi-battery-charging:before{content:\"\\F084\"}.mdi-battery-charging-100:before{content:\"\\F085\"}.mdi-battery-charging-20:before{content:\"\\F086\"}.mdi-battery-charging-30:before{content:\"\\F087\"}.mdi-battery-charging-40:before{content:\"\\F088\"}.mdi-battery-charging-60:before{content:\"\\F089\"}.mdi-battery-charging-80:before{content:\"\\F08A\"}.mdi-battery-charging-90:before{content:\"\\F08B\"}.mdi-battery-minus:before{content:\"\\F08C\"}.mdi-battery-negative:before{content:\"\\F08D\"}.mdi-battery-outline:before{content:\"\\F08E\"}.mdi-battery-plus:before{content:\"\\F08F\"}.mdi-battery-positive:before{content:\"\\F090\"}.mdi-battery-unknown:before{content:\"\\F091\"}.mdi-beach:before{content:\"\\F092\"}.mdi-beaker:before{content:\"\\F68F\"}.mdi-beats:before{content:\"\\F097\"}.mdi-beer:before{content:\"\\F098\"}.mdi-behance:before{content:\"\\F099\"}.mdi-bell:before{content:\"\\F09A\"}.mdi-bell-off:before{content:\"\\F09B\"}.mdi-bell-outline:before{content:\"\\F09C\"}.mdi-bell-plus:before{content:\"\\F09D\"}.mdi-bell-ring:before{content:\"\\F09E\"}.mdi-bell-ring-outline:before{content:\"\\F09F\"}.mdi-bell-sleep:before{content:\"\\F0A0\"}.mdi-beta:before{content:\"\\F0A1\"}.mdi-bible:before{content:\"\\F0A2\"}.mdi-bike:before{content:\"\\F0A3\"}.mdi-bing:before{content:\"\\F0A4\"}.mdi-binoculars:before{content:\"\\F0A5\"}.mdi-bio:before{content:\"\\F0A6\"}.mdi-biohazard:before{content:\"\\F0A7\"}.mdi-bitbucket:before{content:\"\\F0A8\"}.mdi-black-mesa:before{content:\"\\F0A9\"}.mdi-blackberry:before{content:\"\\F0AA\"}.mdi-blender:before{content:\"\\F0AB\"}.mdi-blinds:before{content:\"\\F0AC\"}.mdi-block-helper:before{content:\"\\F0AD\"}.mdi-blogger:before{content:\"\\F0AE\"}.mdi-bluetooth:before{content:\"\\F0AF\"}.mdi-bluetooth-audio:before{content:\"\\F0B0\"}.mdi-bluetooth-connect:before{content:\"\\F0B1\"}.mdi-bluetooth-off:before{content:\"\\F0B2\"}.mdi-bluetooth-settings:before{content:\"\\F0B3\"}.mdi-bluetooth-transfer:before{content:\"\\F0B4\"}.mdi-blur:before{content:\"\\F0B5\"}.mdi-blur-linear:before{content:\"\\F0B6\"}.mdi-blur-off:before{content:\"\\F0B7\"}.mdi-blur-radial:before{content:\"\\F0B8\"}.mdi-bomb:before{content:\"\\F690\"}.mdi-bomb-off:before{content:\"\\F6C4\"}.mdi-bone:before{content:\"\\F0B9\"}.mdi-book:before{content:\"\\F0BA\"}.mdi-book-minus:before{content:\"\\F5D9\"}.mdi-book-multiple:before{content:\"\\F0BB\"}.mdi-book-multiple-variant:before{content:\"\\F0BC\"}.mdi-book-open:before{content:\"\\F0BD\"}.mdi-book-open-page-variant:before{content:\"\\F5DA\"}.mdi-book-open-variant:before{content:\"\\F0BE\"}.mdi-book-plus:before{content:\"\\F5DB\"}.mdi-book-variant:before{content:\"\\F0BF\"}.mdi-bookmark:before{content:\"\\F0C0\"}.mdi-bookmark-check:before{content:\"\\F0C1\"}.mdi-bookmark-music:before{content:\"\\F0C2\"}.mdi-bookmark-outline:before{content:\"\\F0C3\"}.mdi-bookmark-plus:before{content:\"\\F0C5\"}.mdi-bookmark-plus-outline:before{content:\"\\F0C4\"}.mdi-bookmark-remove:before{content:\"\\F0C6\"}.mdi-boombox:before{content:\"\\F5DC\"}.mdi-bootstrap:before{content:\"\\F6C5\"}.mdi-border-all:before{content:\"\\F0C7\"}.mdi-border-bottom:before{content:\"\\F0C8\"}.mdi-border-color:before{content:\"\\F0C9\"}.mdi-border-horizontal:before{content:\"\\F0CA\"}.mdi-border-inside:before{content:\"\\F0CB\"}.mdi-border-left:before{content:\"\\F0CC\"}.mdi-border-none:before{content:\"\\F0CD\"}.mdi-border-outside:before{content:\"\\F0CE\"}.mdi-border-right:before{content:\"\\F0CF\"}.mdi-border-style:before{content:\"\\F0D0\"}.mdi-border-top:before{content:\"\\F0D1\"}.mdi-border-vertical:before{content:\"\\F0D2\"}.mdi-bow-tie:before{content:\"\\F677\"}.mdi-bowl:before{content:\"\\F617\"}.mdi-bowling:before{content:\"\\F0D3\"}.mdi-box:before{content:\"\\F0D4\"}.mdi-box-cutter:before{content:\"\\F0D5\"}.mdi-box-shadow:before{content:\"\\F637\"}.mdi-bridge:before{content:\"\\F618\"}.mdi-briefcase:before{content:\"\\F0D6\"}.mdi-briefcase-check:before{content:\"\\F0D7\"}.mdi-briefcase-download:before{content:\"\\F0D8\"}.mdi-briefcase-upload:before{content:\"\\F0D9\"}.mdi-brightness-1:before{content:\"\\F0DA\"}.mdi-brightness-2:before{content:\"\\F0DB\"}.mdi-brightness-3:before{content:\"\\F0DC\"}.mdi-brightness-4:before{content:\"\\F0DD\"}.mdi-brightness-5:before{content:\"\\F0DE\"}.mdi-brightness-6:before{content:\"\\F0DF\"}.mdi-brightness-7:before{content:\"\\F0E0\"}.mdi-brightness-auto:before{content:\"\\F0E1\"}.mdi-broom:before{content:\"\\F0E2\"}.mdi-brush:before{content:\"\\F0E3\"}.mdi-buffer:before{content:\"\\F619\"}.mdi-bug:before{content:\"\\F0E4\"}.mdi-bulletin-board:before{content:\"\\F0E5\"}.mdi-bullhorn:before{content:\"\\F0E6\"}.mdi-bullseye:before{content:\"\\F5DD\"}.mdi-burst-mode:before{content:\"\\F5DE\"}.mdi-bus:before{content:\"\\F0E7\"}.mdi-cached:before{content:\"\\F0E8\"}.mdi-cake:before{content:\"\\F0E9\"}.mdi-cake-layered:before{content:\"\\F0EA\"}.mdi-cake-variant:before{content:\"\\F0EB\"}.mdi-calculator:before{content:\"\\F0EC\"}.mdi-calendar:before{content:\"\\F0ED\"}.mdi-calendar-blank:before{content:\"\\F0EE\"}.mdi-calendar-check:before{content:\"\\F0EF\"}.mdi-calendar-clock:before{content:\"\\F0F0\"}.mdi-calendar-multiple:before{content:\"\\F0F1\"}.mdi-calendar-multiple-check:before{content:\"\\F0F2\"}.mdi-calendar-plus:before{content:\"\\F0F3\"}.mdi-calendar-question:before{content:\"\\F691\"}.mdi-calendar-range:before{content:\"\\F678\"}.mdi-calendar-remove:before{content:\"\\F0F4\"}.mdi-calendar-text:before{content:\"\\F0F5\"}.mdi-calendar-today:before{content:\"\\F0F6\"}.mdi-call-made:before{content:\"\\F0F7\"}.mdi-call-merge:before{content:\"\\F0F8\"}.mdi-call-missed:before{content:\"\\F0F9\"}.mdi-call-received:before{content:\"\\F0FA\"}.mdi-call-split:before{content:\"\\F0FB\"}.mdi-camcorder:before{content:\"\\F0FC\"}.mdi-camcorder-box:before{content:\"\\F0FD\"}.mdi-camcorder-box-off:before{content:\"\\F0FE\"}.mdi-camcorder-off:before{content:\"\\F0FF\"}.mdi-camera:before{content:\"\\F100\"}.mdi-camera-burst:before{content:\"\\F692\"}.mdi-camera-enhance:before{content:\"\\F101\"}.mdi-camera-front:before{content:\"\\F102\"}.mdi-camera-front-variant:before{content:\"\\F103\"}.mdi-camera-iris:before{content:\"\\F104\"}.mdi-camera-off:before{content:\"\\F5DF\"}.mdi-camera-party-mode:before{content:\"\\F105\"}.mdi-camera-rear:before{content:\"\\F106\"}.mdi-camera-rear-variant:before{content:\"\\F107\"}.mdi-camera-switch:before{content:\"\\F108\"}.mdi-camera-timer:before{content:\"\\F109\"}.mdi-cancel:before{content:\"\\F739\"}.mdi-candle:before{content:\"\\F5E2\"}.mdi-candycane:before{content:\"\\F10A\"}.mdi-car:before{content:\"\\F10B\"}.mdi-car-battery:before{content:\"\\F10C\"}.mdi-car-connected:before{content:\"\\F10D\"}.mdi-car-wash:before{content:\"\\F10E\"}.mdi-cards:before{content:\"\\F638\"}.mdi-cards-outline:before{content:\"\\F639\"}.mdi-cards-playing-outline:before{content:\"\\F63A\"}.mdi-cards-variant:before{content:\"\\F6C6\"}.mdi-carrot:before{content:\"\\F10F\"}.mdi-cart:before{content:\"\\F110\"}.mdi-cart-off:before{content:\"\\F66B\"}.mdi-cart-outline:before{content:\"\\F111\"}.mdi-cart-plus:before{content:\"\\F112\"}.mdi-case-sensitive-alt:before{content:\"\\F113\"}.mdi-cash:before{content:\"\\F114\"}.mdi-cash-100:before{content:\"\\F115\"}.mdi-cash-multiple:before{content:\"\\F116\"}.mdi-cash-usd:before{content:\"\\F117\"}.mdi-cast:before{content:\"\\F118\"}.mdi-cast-connected:before{content:\"\\F119\"}.mdi-cast-off:before{content:\"\\F789\"}.mdi-castle:before{content:\"\\F11A\"}.mdi-cat:before{content:\"\\F11B\"}.mdi-ceiling-light:before{content:\"\\F768\"}.mdi-cellphone:before{content:\"\\F11C\"}.mdi-cellphone-android:before{content:\"\\F11D\"}.mdi-cellphone-basic:before{content:\"\\F11E\"}.mdi-cellphone-dock:before{content:\"\\F11F\"}.mdi-cellphone-iphone:before{content:\"\\F120\"}.mdi-cellphone-link:before{content:\"\\F121\"}.mdi-cellphone-link-off:before{content:\"\\F122\"}.mdi-cellphone-settings:before{content:\"\\F123\"}.mdi-certificate:before{content:\"\\F124\"}.mdi-chair-school:before{content:\"\\F125\"}.mdi-chart-arc:before{content:\"\\F126\"}.mdi-chart-areaspline:before{content:\"\\F127\"}.mdi-chart-bar:before{content:\"\\F128\"}.mdi-chart-bar-stacked:before{content:\"\\F769\"}.mdi-chart-bubble:before{content:\"\\F5E3\"}.mdi-chart-gantt:before{content:\"\\F66C\"}.mdi-chart-histogram:before{content:\"\\F129\"}.mdi-chart-line:before{content:\"\\F12A\"}.mdi-chart-line-stacked:before{content:\"\\F76A\"}.mdi-chart-pie:before{content:\"\\F12B\"}.mdi-chart-scatterplot-hexbin:before{content:\"\\F66D\"}.mdi-chart-timeline:before{content:\"\\F66E\"}.mdi-check:before{content:\"\\F12C\"}.mdi-check-all:before{content:\"\\F12D\"}.mdi-check-circle:before{content:\"\\F5E0\"}.mdi-check-circle-outline:before{content:\"\\F5E1\"}.mdi-checkbox-blank:before{content:\"\\F12E\"}.mdi-checkbox-blank-circle:before{content:\"\\F12F\"}.mdi-checkbox-blank-circle-outline:before{content:\"\\F130\"}.mdi-checkbox-blank-outline:before{content:\"\\F131\"}.mdi-checkbox-marked:before{content:\"\\F132\"}.mdi-checkbox-marked-circle:before{content:\"\\F133\"}.mdi-checkbox-marked-circle-outline:before{content:\"\\F134\"}.mdi-checkbox-marked-outline:before{content:\"\\F135\"}.mdi-checkbox-multiple-blank:before{content:\"\\F136\"}.mdi-checkbox-multiple-blank-circle:before{content:\"\\F63B\"}.mdi-checkbox-multiple-blank-circle-outline:before{content:\"\\F63C\"}.mdi-checkbox-multiple-blank-outline:before{content:\"\\F137\"}.mdi-checkbox-multiple-marked:before{content:\"\\F138\"}.mdi-checkbox-multiple-marked-circle:before{content:\"\\F63D\"}.mdi-checkbox-multiple-marked-circle-outline:before{content:\"\\F63E\"}.mdi-checkbox-multiple-marked-outline:before{content:\"\\F139\"}.mdi-checkerboard:before{content:\"\\F13A\"}.mdi-chemical-weapon:before{content:\"\\F13B\"}.mdi-chevron-double-down:before{content:\"\\F13C\"}.mdi-chevron-double-left:before{content:\"\\F13D\"}.mdi-chevron-double-right:before{content:\"\\F13E\"}.mdi-chevron-double-up:before{content:\"\\F13F\"}.mdi-chevron-down:before{content:\"\\F140\"}.mdi-chevron-left:before{content:\"\\F141\"}.mdi-chevron-right:before{content:\"\\F142\"}.mdi-chevron-up:before{content:\"\\F143\"}.mdi-chip:before{content:\"\\F61A\"}.mdi-church:before{content:\"\\F144\"}.mdi-circle:before{content:\"\\F764\"}.mdi-circle-outline:before{content:\"\\F765\"}.mdi-cisco-webex:before{content:\"\\F145\"}.mdi-city:before{content:\"\\F146\"}.mdi-clipboard:before{content:\"\\F147\"}.mdi-clipboard-account:before{content:\"\\F148\"}.mdi-clipboard-alert:before{content:\"\\F149\"}.mdi-clipboard-arrow-down:before{content:\"\\F14A\"}.mdi-clipboard-arrow-left:before{content:\"\\F14B\"}.mdi-clipboard-check:before{content:\"\\F14C\"}.mdi-clipboard-flow:before{content:\"\\F6C7\"}.mdi-clipboard-outline:before{content:\"\\F14D\"}.mdi-clipboard-plus:before{content:\"\\F750\"}.mdi-clipboard-text:before{content:\"\\F14E\"}.mdi-clippy:before{content:\"\\F14F\"}.mdi-clock:before{content:\"\\F150\"}.mdi-clock-alert:before{content:\"\\F5CE\"}.mdi-clock-end:before{content:\"\\F151\"}.mdi-clock-fast:before{content:\"\\F152\"}.mdi-clock-in:before{content:\"\\F153\"}.mdi-clock-out:before{content:\"\\F154\"}.mdi-clock-start:before{content:\"\\F155\"}.mdi-close:before{content:\"\\F156\"}.mdi-close-box:before{content:\"\\F157\"}.mdi-close-box-outline:before{content:\"\\F158\"}.mdi-close-circle:before{content:\"\\F159\"}.mdi-close-circle-outline:before{content:\"\\F15A\"}.mdi-close-network:before{content:\"\\F15B\"}.mdi-close-octagon:before{content:\"\\F15C\"}.mdi-close-octagon-outline:before{content:\"\\F15D\"}.mdi-close-outline:before{content:\"\\F6C8\"}.mdi-closed-caption:before{content:\"\\F15E\"}.mdi-cloud:before{content:\"\\F15F\"}.mdi-cloud-check:before{content:\"\\F160\"}.mdi-cloud-circle:before{content:\"\\F161\"}.mdi-cloud-download:before{content:\"\\F162\"}.mdi-cloud-off-outline:before{content:\"\\F164\"}.mdi-cloud-outline:before{content:\"\\F163\"}.mdi-cloud-print:before{content:\"\\F165\"}.mdi-cloud-print-outline:before{content:\"\\F166\"}.mdi-cloud-sync:before{content:\"\\F63F\"}.mdi-cloud-upload:before{content:\"\\F167\"}.mdi-code-array:before{content:\"\\F168\"}.mdi-code-braces:before{content:\"\\F169\"}.mdi-code-brackets:before{content:\"\\F16A\"}.mdi-code-equal:before{content:\"\\F16B\"}.mdi-code-greater-than:before{content:\"\\F16C\"}.mdi-code-greater-than-or-equal:before{content:\"\\F16D\"}.mdi-code-less-than:before{content:\"\\F16E\"}.mdi-code-less-than-or-equal:before{content:\"\\F16F\"}.mdi-code-not-equal:before{content:\"\\F170\"}.mdi-code-not-equal-variant:before{content:\"\\F171\"}.mdi-code-parentheses:before{content:\"\\F172\"}.mdi-code-string:before{content:\"\\F173\"}.mdi-code-tags:before{content:\"\\F174\"}.mdi-code-tags-check:before{content:\"\\F693\"}.mdi-codepen:before{content:\"\\F175\"}.mdi-coffee:before{content:\"\\F176\"}.mdi-coffee-outline:before{content:\"\\F6C9\"}.mdi-coffee-to-go:before{content:\"\\F177\"}.mdi-coin:before{content:\"\\F178\"}.mdi-coins:before{content:\"\\F694\"}.mdi-collage:before{content:\"\\F640\"}.mdi-color-helper:before{content:\"\\F179\"}.mdi-comment:before{content:\"\\F17A\"}.mdi-comment-account:before{content:\"\\F17B\"}.mdi-comment-account-outline:before{content:\"\\F17C\"}.mdi-comment-alert:before{content:\"\\F17D\"}.mdi-comment-alert-outline:before{content:\"\\F17E\"}.mdi-comment-check:before{content:\"\\F17F\"}.mdi-comment-check-outline:before{content:\"\\F180\"}.mdi-comment-multiple-outline:before{content:\"\\F181\"}.mdi-comment-outline:before{content:\"\\F182\"}.mdi-comment-plus-outline:before{content:\"\\F183\"}.mdi-comment-processing:before{content:\"\\F184\"}.mdi-comment-processing-outline:before{content:\"\\F185\"}.mdi-comment-question-outline:before{content:\"\\F186\"}.mdi-comment-remove-outline:before{content:\"\\F187\"}.mdi-comment-text:before{content:\"\\F188\"}.mdi-comment-text-outline:before{content:\"\\F189\"}.mdi-compare:before{content:\"\\F18A\"}.mdi-compass:before{content:\"\\F18B\"}.mdi-compass-outline:before{content:\"\\F18C\"}.mdi-console:before{content:\"\\F18D\"}.mdi-contact-mail:before{content:\"\\F18E\"}.mdi-contacts:before{content:\"\\F6CA\"}.mdi-content-copy:before{content:\"\\F18F\"}.mdi-content-cut:before{content:\"\\F190\"}.mdi-content-duplicate:before{content:\"\\F191\"}.mdi-content-paste:before{content:\"\\F192\"}.mdi-content-save:before{content:\"\\F193\"}.mdi-content-save-all:before{content:\"\\F194\"}.mdi-content-save-settings:before{content:\"\\F61B\"}.mdi-contrast:before{content:\"\\F195\"}.mdi-contrast-box:before{content:\"\\F196\"}.mdi-contrast-circle:before{content:\"\\F197\"}.mdi-cookie:before{content:\"\\F198\"}.mdi-copyright:before{content:\"\\F5E6\"}.mdi-counter:before{content:\"\\F199\"}.mdi-cow:before{content:\"\\F19A\"}.mdi-creation:before{content:\"\\F1C9\"}.mdi-credit-card:before{content:\"\\F19B\"}.mdi-credit-card-multiple:before{content:\"\\F19C\"}.mdi-credit-card-off:before{content:\"\\F5E4\"}.mdi-credit-card-plus:before{content:\"\\F675\"}.mdi-credit-card-scan:before{content:\"\\F19D\"}.mdi-crop:before{content:\"\\F19E\"}.mdi-crop-free:before{content:\"\\F19F\"}.mdi-crop-landscape:before{content:\"\\F1A0\"}.mdi-crop-portrait:before{content:\"\\F1A1\"}.mdi-crop-rotate:before{content:\"\\F695\"}.mdi-crop-square:before{content:\"\\F1A2\"}.mdi-crosshairs:before{content:\"\\F1A3\"}.mdi-crosshairs-gps:before{content:\"\\F1A4\"}.mdi-crown:before{content:\"\\F1A5\"}.mdi-cube:before{content:\"\\F1A6\"}.mdi-cube-outline:before{content:\"\\F1A7\"}.mdi-cube-send:before{content:\"\\F1A8\"}.mdi-cube-unfolded:before{content:\"\\F1A9\"}.mdi-cup:before{content:\"\\F1AA\"}.mdi-cup-off:before{content:\"\\F5E5\"}.mdi-cup-water:before{content:\"\\F1AB\"}.mdi-currency-btc:before{content:\"\\F1AC\"}.mdi-currency-eur:before{content:\"\\F1AD\"}.mdi-currency-gbp:before{content:\"\\F1AE\"}.mdi-currency-inr:before{content:\"\\F1AF\"}.mdi-currency-ngn:before{content:\"\\F1B0\"}.mdi-currency-rub:before{content:\"\\F1B1\"}.mdi-currency-try:before{content:\"\\F1B2\"}.mdi-currency-usd:before{content:\"\\F1B3\"}.mdi-currency-usd-off:before{content:\"\\F679\"}.mdi-cursor-default:before{content:\"\\F1B4\"}.mdi-cursor-default-outline:before{content:\"\\F1B5\"}.mdi-cursor-move:before{content:\"\\F1B6\"}.mdi-cursor-pointer:before{content:\"\\F1B7\"}.mdi-cursor-text:before{content:\"\\F5E7\"}.mdi-database:before{content:\"\\F1B8\"}.mdi-database-minus:before{content:\"\\F1B9\"}.mdi-database-plus:before{content:\"\\F1BA\"}.mdi-debug-step-into:before{content:\"\\F1BB\"}.mdi-debug-step-out:before{content:\"\\F1BC\"}.mdi-debug-step-over:before{content:\"\\F1BD\"}.mdi-decagram:before{content:\"\\F76B\"}.mdi-decagram-outline:before{content:\"\\F76C\"}.mdi-decimal-decrease:before{content:\"\\F1BE\"}.mdi-decimal-increase:before{content:\"\\F1BF\"}.mdi-delete:before{content:\"\\F1C0\"}.mdi-delete-circle:before{content:\"\\F682\"}.mdi-delete-empty:before{content:\"\\F6CB\"}.mdi-delete-forever:before{content:\"\\F5E8\"}.mdi-delete-sweep:before{content:\"\\F5E9\"}.mdi-delete-variant:before{content:\"\\F1C1\"}.mdi-delta:before{content:\"\\F1C2\"}.mdi-deskphone:before{content:\"\\F1C3\"}.mdi-desktop-mac:before{content:\"\\F1C4\"}.mdi-desktop-tower:before{content:\"\\F1C5\"}.mdi-details:before{content:\"\\F1C6\"}.mdi-developer-board:before{content:\"\\F696\"}.mdi-deviantart:before{content:\"\\F1C7\"}.mdi-dialpad:before{content:\"\\F61C\"}.mdi-diamond:before{content:\"\\F1C8\"}.mdi-dice-1:before{content:\"\\F1CA\"}.mdi-dice-2:before{content:\"\\F1CB\"}.mdi-dice-3:before{content:\"\\F1CC\"}.mdi-dice-4:before{content:\"\\F1CD\"}.mdi-dice-5:before{content:\"\\F1CE\"}.mdi-dice-6:before{content:\"\\F1CF\"}.mdi-dice-d10:before{content:\"\\F76E\"}.mdi-dice-d20:before{content:\"\\F5EA\"}.mdi-dice-d4:before{content:\"\\F5EB\"}.mdi-dice-d6:before{content:\"\\F5EC\"}.mdi-dice-d8:before{content:\"\\F5ED\"}.mdi-dice-multiple:before{content:\"\\F76D\"}.mdi-dictionary:before{content:\"\\F61D\"}.mdi-directions:before{content:\"\\F1D0\"}.mdi-directions-fork:before{content:\"\\F641\"}.mdi-discord:before{content:\"\\F66F\"}.mdi-disk:before{content:\"\\F5EE\"}.mdi-disk-alert:before{content:\"\\F1D1\"}.mdi-disqus:before{content:\"\\F1D2\"}.mdi-disqus-outline:before{content:\"\\F1D3\"}.mdi-division:before{content:\"\\F1D4\"}.mdi-division-box:before{content:\"\\F1D5\"}.mdi-dna:before{content:\"\\F683\"}.mdi-dns:before{content:\"\\F1D6\"}.mdi-do-not-disturb:before{content:\"\\F697\"}.mdi-do-not-disturb-off:before{content:\"\\F698\"}.mdi-dolby:before{content:\"\\F6B2\"}.mdi-domain:before{content:\"\\F1D7\"}.mdi-dots-horizontal:before{content:\"\\F1D8\"}.mdi-dots-vertical:before{content:\"\\F1D9\"}.mdi-douban:before{content:\"\\F699\"}.mdi-download:before{content:\"\\F1DA\"}.mdi-download-network:before{content:\"\\F6F3\"}.mdi-drag:before{content:\"\\F1DB\"}.mdi-drag-horizontal:before{content:\"\\F1DC\"}.mdi-drag-vertical:before{content:\"\\F1DD\"}.mdi-drawing:before{content:\"\\F1DE\"}.mdi-drawing-box:before{content:\"\\F1DF\"}.mdi-dribbble:before{content:\"\\F1E0\"}.mdi-dribbble-box:before{content:\"\\F1E1\"}.mdi-drone:before{content:\"\\F1E2\"}.mdi-dropbox:before{content:\"\\F1E3\"}.mdi-drupal:before{content:\"\\F1E4\"}.mdi-duck:before{content:\"\\F1E5\"}.mdi-dumbbell:before{content:\"\\F1E6\"}.mdi-earth:before{content:\"\\F1E7\"}.mdi-earth-box:before{content:\"\\F6CC\"}.mdi-earth-box-off:before{content:\"\\F6CD\"}.mdi-earth-off:before{content:\"\\F1E8\"}.mdi-edge:before{content:\"\\F1E9\"}.mdi-eject:before{content:\"\\F1EA\"}.mdi-elevation-decline:before{content:\"\\F1EB\"}.mdi-elevation-rise:before{content:\"\\F1EC\"}.mdi-elevator:before{content:\"\\F1ED\"}.mdi-email:before{content:\"\\F1EE\"}.mdi-email-alert:before{content:\"\\F6CE\"}.mdi-email-open:before{content:\"\\F1EF\"}.mdi-email-open-outline:before{content:\"\\F5EF\"}.mdi-email-outline:before{content:\"\\F1F0\"}.mdi-email-secure:before{content:\"\\F1F1\"}.mdi-email-variant:before{content:\"\\F5F0\"}.mdi-emby:before{content:\"\\F6B3\"}.mdi-emoticon:before{content:\"\\F1F2\"}.mdi-emoticon-cool:before{content:\"\\F1F3\"}.mdi-emoticon-dead:before{content:\"\\F69A\"}.mdi-emoticon-devil:before{content:\"\\F1F4\"}.mdi-emoticon-excited:before{content:\"\\F69B\"}.mdi-emoticon-happy:before{content:\"\\F1F5\"}.mdi-emoticon-neutral:before{content:\"\\F1F6\"}.mdi-emoticon-poop:before{content:\"\\F1F7\"}.mdi-emoticon-sad:before{content:\"\\F1F8\"}.mdi-emoticon-tongue:before{content:\"\\F1F9\"}.mdi-engine:before{content:\"\\F1FA\"}.mdi-engine-outline:before{content:\"\\F1FB\"}.mdi-equal:before{content:\"\\F1FC\"}.mdi-equal-box:before{content:\"\\F1FD\"}.mdi-eraser:before{content:\"\\F1FE\"}.mdi-eraser-variant:before{content:\"\\F642\"}.mdi-escalator:before{content:\"\\F1FF\"}.mdi-ethernet:before{content:\"\\F200\"}.mdi-ethernet-cable:before{content:\"\\F201\"}.mdi-ethernet-cable-off:before{content:\"\\F202\"}.mdi-etsy:before{content:\"\\F203\"}.mdi-ev-station:before{content:\"\\F5F1\"}.mdi-evernote:before{content:\"\\F204\"}.mdi-exclamation:before{content:\"\\F205\"}.mdi-exit-to-app:before{content:\"\\F206\"}.mdi-export:before{content:\"\\F207\"}.mdi-eye:before{content:\"\\F208\"}.mdi-eye-off:before{content:\"\\F209\"}.mdi-eye-off-outline:before{content:\"\\F6D0\"}.mdi-eye-outline:before{content:\"\\F6CF\"}.mdi-eyedropper:before{content:\"\\F20A\"}.mdi-eyedropper-variant:before{content:\"\\F20B\"}.mdi-face:before{content:\"\\F643\"}.mdi-face-profile:before{content:\"\\F644\"}.mdi-facebook:before{content:\"\\F20C\"}.mdi-facebook-box:before{content:\"\\F20D\"}.mdi-facebook-messenger:before{content:\"\\F20E\"}.mdi-factory:before{content:\"\\F20F\"}.mdi-fan:before{content:\"\\F210\"}.mdi-fast-forward:before{content:\"\\F211\"}.mdi-fast-forward-outline:before{content:\"\\F6D1\"}.mdi-fax:before{content:\"\\F212\"}.mdi-feather:before{content:\"\\F6D2\"}.mdi-ferry:before{content:\"\\F213\"}.mdi-file:before{content:\"\\F214\"}.mdi-file-account:before{content:\"\\F73A\"}.mdi-file-chart:before{content:\"\\F215\"}.mdi-file-check:before{content:\"\\F216\"}.mdi-file-cloud:before{content:\"\\F217\"}.mdi-file-delimited:before{content:\"\\F218\"}.mdi-file-document:before{content:\"\\F219\"}.mdi-file-document-box:before{content:\"\\F21A\"}.mdi-file-excel:before{content:\"\\F21B\"}.mdi-file-excel-box:before{content:\"\\F21C\"}.mdi-file-export:before{content:\"\\F21D\"}.mdi-file-find:before{content:\"\\F21E\"}.mdi-file-hidden:before{content:\"\\F613\"}.mdi-file-image:before{content:\"\\F21F\"}.mdi-file-import:before{content:\"\\F220\"}.mdi-file-lock:before{content:\"\\F221\"}.mdi-file-multiple:before{content:\"\\F222\"}.mdi-file-music:before{content:\"\\F223\"}.mdi-file-outline:before{content:\"\\F224\"}.mdi-file-pdf:before{content:\"\\F225\"}.mdi-file-pdf-box:before{content:\"\\F226\"}.mdi-file-plus:before{content:\"\\F751\"}.mdi-file-powerpoint:before{content:\"\\F227\"}.mdi-file-powerpoint-box:before{content:\"\\F228\"}.mdi-file-presentation-box:before{content:\"\\F229\"}.mdi-file-restore:before{content:\"\\F670\"}.mdi-file-send:before{content:\"\\F22A\"}.mdi-file-tree:before{content:\"\\F645\"}.mdi-file-video:before{content:\"\\F22B\"}.mdi-file-word:before{content:\"\\F22C\"}.mdi-file-word-box:before{content:\"\\F22D\"}.mdi-file-xml:before{content:\"\\F22E\"}.mdi-film:before{content:\"\\F22F\"}.mdi-filmstrip:before{content:\"\\F230\"}.mdi-filmstrip-off:before{content:\"\\F231\"}.mdi-filter:before{content:\"\\F232\"}.mdi-filter-outline:before{content:\"\\F233\"}.mdi-filter-remove:before{content:\"\\F234\"}.mdi-filter-remove-outline:before{content:\"\\F235\"}.mdi-filter-variant:before{content:\"\\F236\"}.mdi-find-replace:before{content:\"\\F6D3\"}.mdi-fingerprint:before{content:\"\\F237\"}.mdi-fire:before{content:\"\\F238\"}.mdi-firefox:before{content:\"\\F239\"}.mdi-fish:before{content:\"\\F23A\"}.mdi-flag:before{content:\"\\F23B\"}.mdi-flag-checkered:before{content:\"\\F23C\"}.mdi-flag-outline:before{content:\"\\F23D\"}.mdi-flag-outline-variant:before{content:\"\\F23E\"}.mdi-flag-triangle:before{content:\"\\F23F\"}.mdi-flag-variant:before{content:\"\\F240\"}.mdi-flash:before{content:\"\\F241\"}.mdi-flash-auto:before{content:\"\\F242\"}.mdi-flash-off:before{content:\"\\F243\"}.mdi-flash-outline:before{content:\"\\F6D4\"}.mdi-flash-red-eye:before{content:\"\\F67A\"}.mdi-flashlight:before{content:\"\\F244\"}.mdi-flashlight-off:before{content:\"\\F245\"}.mdi-flask:before{content:\"\\F093\"}.mdi-flask-empty:before{content:\"\\F094\"}.mdi-flask-empty-outline:before{content:\"\\F095\"}.mdi-flask-outline:before{content:\"\\F096\"}.mdi-flattr:before{content:\"\\F246\"}.mdi-flip-to-back:before{content:\"\\F247\"}.mdi-flip-to-front:before{content:\"\\F248\"}.mdi-floppy:before{content:\"\\F249\"}.mdi-flower:before{content:\"\\F24A\"}.mdi-folder:before{content:\"\\F24B\"}.mdi-folder-account:before{content:\"\\F24C\"}.mdi-folder-download:before{content:\"\\F24D\"}.mdi-folder-google-drive:before{content:\"\\F24E\"}.mdi-folder-image:before{content:\"\\F24F\"}.mdi-folder-lock:before{content:\"\\F250\"}.mdi-folder-lock-open:before{content:\"\\F251\"}.mdi-folder-move:before{content:\"\\F252\"}.mdi-folder-multiple:before{content:\"\\F253\"}.mdi-folder-multiple-image:before{content:\"\\F254\"}.mdi-folder-multiple-outline:before{content:\"\\F255\"}.mdi-folder-open:before{content:\"\\F76F\"}.mdi-folder-outline:before{content:\"\\F256\"}.mdi-folder-plus:before{content:\"\\F257\"}.mdi-folder-remove:before{content:\"\\F258\"}.mdi-folder-star:before{content:\"\\F69C\"}.mdi-folder-upload:before{content:\"\\F259\"}.mdi-font-awesome:before{content:\"\\F03A\"}.mdi-food:before{content:\"\\F25A\"}.mdi-food-apple:before{content:\"\\F25B\"}.mdi-food-fork-drink:before{content:\"\\F5F2\"}.mdi-food-off:before{content:\"\\F5F3\"}.mdi-food-variant:before{content:\"\\F25C\"}.mdi-football:before{content:\"\\F25D\"}.mdi-football-australian:before{content:\"\\F25E\"}.mdi-football-helmet:before{content:\"\\F25F\"}.mdi-format-align-bottom:before{content:\"\\F752\"}.mdi-format-align-center:before{content:\"\\F260\"}.mdi-format-align-justify:before{content:\"\\F261\"}.mdi-format-align-left:before{content:\"\\F262\"}.mdi-format-align-middle:before{content:\"\\F753\"}.mdi-format-align-right:before{content:\"\\F263\"}.mdi-format-align-top:before{content:\"\\F754\"}.mdi-format-annotation-plus:before{content:\"\\F646\"}.mdi-format-bold:before{content:\"\\F264\"}.mdi-format-clear:before{content:\"\\F265\"}.mdi-format-color-fill:before{content:\"\\F266\"}.mdi-format-color-text:before{content:\"\\F69D\"}.mdi-format-float-center:before{content:\"\\F267\"}.mdi-format-float-left:before{content:\"\\F268\"}.mdi-format-float-none:before{content:\"\\F269\"}.mdi-format-float-right:before{content:\"\\F26A\"}.mdi-format-font:before{content:\"\\F6D5\"}.mdi-format-header-1:before{content:\"\\F26B\"}.mdi-format-header-2:before{content:\"\\F26C\"}.mdi-format-header-3:before{content:\"\\F26D\"}.mdi-format-header-4:before{content:\"\\F26E\"}.mdi-format-header-5:before{content:\"\\F26F\"}.mdi-format-header-6:before{content:\"\\F270\"}.mdi-format-header-decrease:before{content:\"\\F271\"}.mdi-format-header-equal:before{content:\"\\F272\"}.mdi-format-header-increase:before{content:\"\\F273\"}.mdi-format-header-pound:before{content:\"\\F274\"}.mdi-format-horizontal-align-center:before{content:\"\\F61E\"}.mdi-format-horizontal-align-left:before{content:\"\\F61F\"}.mdi-format-horizontal-align-right:before{content:\"\\F620\"}.mdi-format-indent-decrease:before{content:\"\\F275\"}.mdi-format-indent-increase:before{content:\"\\F276\"}.mdi-format-italic:before{content:\"\\F277\"}.mdi-format-line-spacing:before{content:\"\\F278\"}.mdi-format-line-style:before{content:\"\\F5C8\"}.mdi-format-line-weight:before{content:\"\\F5C9\"}.mdi-format-list-bulleted:before{content:\"\\F279\"}.mdi-format-list-bulleted-type:before{content:\"\\F27A\"}.mdi-format-list-checks:before{content:\"\\F755\"}.mdi-format-list-numbers:before{content:\"\\F27B\"}.mdi-format-page-break:before{content:\"\\F6D6\"}.mdi-format-paint:before{content:\"\\F27C\"}.mdi-format-paragraph:before{content:\"\\F27D\"}.mdi-format-pilcrow:before{content:\"\\F6D7\"}.mdi-format-quote-close:before{content:\"\\F27E\"}.mdi-format-quote-open:before{content:\"\\F756\"}.mdi-format-rotate-90:before{content:\"\\F6A9\"}.mdi-format-section:before{content:\"\\F69E\"}.mdi-format-size:before{content:\"\\F27F\"}.mdi-format-strikethrough:before{content:\"\\F280\"}.mdi-format-strikethrough-variant:before{content:\"\\F281\"}.mdi-format-subscript:before{content:\"\\F282\"}.mdi-format-superscript:before{content:\"\\F283\"}.mdi-format-text:before{content:\"\\F284\"}.mdi-format-textdirection-l-to-r:before{content:\"\\F285\"}.mdi-format-textdirection-r-to-l:before{content:\"\\F286\"}.mdi-format-title:before{content:\"\\F5F4\"}.mdi-format-underline:before{content:\"\\F287\"}.mdi-format-vertical-align-bottom:before{content:\"\\F621\"}.mdi-format-vertical-align-center:before{content:\"\\F622\"}.mdi-format-vertical-align-top:before{content:\"\\F623\"}.mdi-format-wrap-inline:before{content:\"\\F288\"}.mdi-format-wrap-square:before{content:\"\\F289\"}.mdi-format-wrap-tight:before{content:\"\\F28A\"}.mdi-format-wrap-top-bottom:before{content:\"\\F28B\"}.mdi-forum:before{content:\"\\F28C\"}.mdi-forward:before{content:\"\\F28D\"}.mdi-foursquare:before{content:\"\\F28E\"}.mdi-fridge:before{content:\"\\F28F\"}.mdi-fridge-filled:before{content:\"\\F290\"}.mdi-fridge-filled-bottom:before{content:\"\\F291\"}.mdi-fridge-filled-top:before{content:\"\\F292\"}.mdi-fullscreen:before{content:\"\\F293\"}.mdi-fullscreen-exit:before{content:\"\\F294\"}.mdi-function:before{content:\"\\F295\"}.mdi-gamepad:before{content:\"\\F296\"}.mdi-gamepad-variant:before{content:\"\\F297\"}.mdi-garage:before{content:\"\\F6D8\"}.mdi-garage-open:before{content:\"\\F6D9\"}.mdi-gas-cylinder:before{content:\"\\F647\"}.mdi-gas-station:before{content:\"\\F298\"}.mdi-gate:before{content:\"\\F299\"}.mdi-gauge:before{content:\"\\F29A\"}.mdi-gavel:before{content:\"\\F29B\"}.mdi-gender-female:before{content:\"\\F29C\"}.mdi-gender-male:before{content:\"\\F29D\"}.mdi-gender-male-female:before{content:\"\\F29E\"}.mdi-gender-transgender:before{content:\"\\F29F\"}.mdi-gesture-double-tap:before{content:\"\\F73B\"}.mdi-gesture-swipe-down:before{content:\"\\F73C\"}.mdi-gesture-swipe-left:before{content:\"\\F73D\"}.mdi-gesture-swipe-right:before{content:\"\\F73E\"}.mdi-gesture-swipe-up:before{content:\"\\F73F\"}.mdi-gesture-tap:before{content:\"\\F740\"}.mdi-gesture-two-double-tap:before{content:\"\\F741\"}.mdi-gesture-two-tap:before{content:\"\\F742\"}.mdi-ghost:before{content:\"\\F2A0\"}.mdi-gift:before{content:\"\\F2A1\"}.mdi-git:before{content:\"\\F2A2\"}.mdi-github-box:before{content:\"\\F2A3\"}.mdi-github-circle:before{content:\"\\F2A4\"}.mdi-github-face:before{content:\"\\F6DA\"}.mdi-glass-flute:before{content:\"\\F2A5\"}.mdi-glass-mug:before{content:\"\\F2A6\"}.mdi-glass-stange:before{content:\"\\F2A7\"}.mdi-glass-tulip:before{content:\"\\F2A8\"}.mdi-glassdoor:before{content:\"\\F2A9\"}.mdi-glasses:before{content:\"\\F2AA\"}.mdi-gmail:before{content:\"\\F2AB\"}.mdi-gnome:before{content:\"\\F2AC\"}.mdi-gondola:before{content:\"\\F685\"}.mdi-google:before{content:\"\\F2AD\"}.mdi-google-cardboard:before{content:\"\\F2AE\"}.mdi-google-chrome:before{content:\"\\F2AF\"}.mdi-google-circles:before{content:\"\\F2B0\"}.mdi-google-circles-communities:before{content:\"\\F2B1\"}.mdi-google-circles-extended:before{content:\"\\F2B2\"}.mdi-google-circles-group:before{content:\"\\F2B3\"}.mdi-google-controller:before{content:\"\\F2B4\"}.mdi-google-controller-off:before{content:\"\\F2B5\"}.mdi-google-drive:before{content:\"\\F2B6\"}.mdi-google-earth:before{content:\"\\F2B7\"}.mdi-google-glass:before{content:\"\\F2B8\"}.mdi-google-keep:before{content:\"\\F6DB\"}.mdi-google-maps:before{content:\"\\F5F5\"}.mdi-google-nearby:before{content:\"\\F2B9\"}.mdi-google-pages:before{content:\"\\F2BA\"}.mdi-google-photos:before{content:\"\\F6DC\"}.mdi-google-physical-web:before{content:\"\\F2BB\"}.mdi-google-play:before{content:\"\\F2BC\"}.mdi-google-plus:before{content:\"\\F2BD\"}.mdi-google-plus-box:before{content:\"\\F2BE\"}.mdi-google-translate:before{content:\"\\F2BF\"}.mdi-google-wallet:before{content:\"\\F2C0\"}.mdi-gradient:before{content:\"\\F69F\"}.mdi-grease-pencil:before{content:\"\\F648\"}.mdi-grid:before{content:\"\\F2C1\"}.mdi-grid-large:before{content:\"\\F757\"}.mdi-grid-off:before{content:\"\\F2C2\"}.mdi-group:before{content:\"\\F2C3\"}.mdi-guitar-acoustic:before{content:\"\\F770\"}.mdi-guitar-electric:before{content:\"\\F2C4\"}.mdi-guitar-pick:before{content:\"\\F2C5\"}.mdi-guitar-pick-outline:before{content:\"\\F2C6\"}.mdi-hackernews:before{content:\"\\F624\"}.mdi-hamburger:before{content:\"\\F684\"}.mdi-hand-pointing-right:before{content:\"\\F2C7\"}.mdi-hanger:before{content:\"\\F2C8\"}.mdi-hangouts:before{content:\"\\F2C9\"}.mdi-harddisk:before{content:\"\\F2CA\"}.mdi-headphones:before{content:\"\\F2CB\"}.mdi-headphones-box:before{content:\"\\F2CC\"}.mdi-headphones-settings:before{content:\"\\F2CD\"}.mdi-headset:before{content:\"\\F2CE\"}.mdi-headset-dock:before{content:\"\\F2CF\"}.mdi-headset-off:before{content:\"\\F2D0\"}.mdi-heart:before{content:\"\\F2D1\"}.mdi-heart-box:before{content:\"\\F2D2\"}.mdi-heart-box-outline:before{content:\"\\F2D3\"}.mdi-heart-broken:before{content:\"\\F2D4\"}.mdi-heart-half:before{content:\"\\F6DE\"}.mdi-heart-half-full:before{content:\"\\F6DD\"}.mdi-heart-half-outline:before{content:\"\\F6DF\"}.mdi-heart-off:before{content:\"\\F758\"}.mdi-heart-outline:before{content:\"\\F2D5\"}.mdi-heart-pulse:before{content:\"\\F5F6\"}.mdi-help:before{content:\"\\F2D6\"}.mdi-help-box:before{content:\"\\F78A\"}.mdi-help-circle:before{content:\"\\F2D7\"}.mdi-help-circle-outline:before{content:\"\\F625\"}.mdi-help-network:before{content:\"\\F6F4\"}.mdi-hexagon:before{content:\"\\F2D8\"}.mdi-hexagon-multiple:before{content:\"\\F6E0\"}.mdi-hexagon-outline:before{content:\"\\F2D9\"}.mdi-highway:before{content:\"\\F5F7\"}.mdi-history:before{content:\"\\F2DA\"}.mdi-hololens:before{content:\"\\F2DB\"}.mdi-home:before{content:\"\\F2DC\"}.mdi-home-map-marker:before{content:\"\\F5F8\"}.mdi-home-modern:before{content:\"\\F2DD\"}.mdi-home-outline:before{content:\"\\F6A0\"}.mdi-home-variant:before{content:\"\\F2DE\"}.mdi-hook:before{content:\"\\F6E1\"}.mdi-hook-off:before{content:\"\\F6E2\"}.mdi-hops:before{content:\"\\F2DF\"}.mdi-hospital:before{content:\"\\F2E0\"}.mdi-hospital-building:before{content:\"\\F2E1\"}.mdi-hospital-marker:before{content:\"\\F2E2\"}.mdi-hotel:before{content:\"\\F2E3\"}.mdi-houzz:before{content:\"\\F2E4\"}.mdi-houzz-box:before{content:\"\\F2E5\"}.mdi-human:before{content:\"\\F2E6\"}.mdi-human-child:before{content:\"\\F2E7\"}.mdi-human-female:before{content:\"\\F649\"}.mdi-human-greeting:before{content:\"\\F64A\"}.mdi-human-handsdown:before{content:\"\\F64B\"}.mdi-human-handsup:before{content:\"\\F64C\"}.mdi-human-male:before{content:\"\\F64D\"}.mdi-human-male-female:before{content:\"\\F2E8\"}.mdi-human-pregnant:before{content:\"\\F5CF\"}.mdi-humble-bundle:before{content:\"\\F743\"}.mdi-image:before{content:\"\\F2E9\"}.mdi-image-album:before{content:\"\\F2EA\"}.mdi-image-area:before{content:\"\\F2EB\"}.mdi-image-area-close:before{content:\"\\F2EC\"}.mdi-image-broken:before{content:\"\\F2ED\"}.mdi-image-broken-variant:before{content:\"\\F2EE\"}.mdi-image-filter:before{content:\"\\F2EF\"}.mdi-image-filter-black-white:before{content:\"\\F2F0\"}.mdi-image-filter-center-focus:before{content:\"\\F2F1\"}.mdi-image-filter-center-focus-weak:before{content:\"\\F2F2\"}.mdi-image-filter-drama:before{content:\"\\F2F3\"}.mdi-image-filter-frames:before{content:\"\\F2F4\"}.mdi-image-filter-hdr:before{content:\"\\F2F5\"}.mdi-image-filter-none:before{content:\"\\F2F6\"}.mdi-image-filter-tilt-shift:before{content:\"\\F2F7\"}.mdi-image-filter-vintage:before{content:\"\\F2F8\"}.mdi-image-multiple:before{content:\"\\F2F9\"}.mdi-import:before{content:\"\\F2FA\"}.mdi-inbox:before{content:\"\\F686\"}.mdi-inbox-arrow-down:before{content:\"\\F2FB\"}.mdi-inbox-arrow-up:before{content:\"\\F3D1\"}.mdi-incognito:before{content:\"\\F5F9\"}.mdi-infinity:before{content:\"\\F6E3\"}.mdi-information:before{content:\"\\F2FC\"}.mdi-information-outline:before{content:\"\\F2FD\"}.mdi-information-variant:before{content:\"\\F64E\"}.mdi-instagram:before{content:\"\\F2FE\"}.mdi-instapaper:before{content:\"\\F2FF\"}.mdi-internet-explorer:before{content:\"\\F300\"}.mdi-invert-colors:before{content:\"\\F301\"}.mdi-itunes:before{content:\"\\F676\"}.mdi-jeepney:before{content:\"\\F302\"}.mdi-jira:before{content:\"\\F303\"}.mdi-jsfiddle:before{content:\"\\F304\"}.mdi-json:before{content:\"\\F626\"}.mdi-keg:before{content:\"\\F305\"}.mdi-kettle:before{content:\"\\F5FA\"}.mdi-key:before{content:\"\\F306\"}.mdi-key-change:before{content:\"\\F307\"}.mdi-key-minus:before{content:\"\\F308\"}.mdi-key-plus:before{content:\"\\F309\"}.mdi-key-remove:before{content:\"\\F30A\"}.mdi-key-variant:before{content:\"\\F30B\"}.mdi-keyboard:before{content:\"\\F30C\"}.mdi-keyboard-backspace:before{content:\"\\F30D\"}.mdi-keyboard-caps:before{content:\"\\F30E\"}.mdi-keyboard-close:before{content:\"\\F30F\"}.mdi-keyboard-off:before{content:\"\\F310\"}.mdi-keyboard-return:before{content:\"\\F311\"}.mdi-keyboard-tab:before{content:\"\\F312\"}.mdi-keyboard-variant:before{content:\"\\F313\"}.mdi-kickstarter:before{content:\"\\F744\"}.mdi-kodi:before{content:\"\\F314\"}.mdi-label:before{content:\"\\F315\"}.mdi-label-outline:before{content:\"\\F316\"}.mdi-lambda:before{content:\"\\F627\"}.mdi-lamp:before{content:\"\\F6B4\"}.mdi-lan:before{content:\"\\F317\"}.mdi-lan-connect:before{content:\"\\F318\"}.mdi-lan-disconnect:before{content:\"\\F319\"}.mdi-lan-pending:before{content:\"\\F31A\"}.mdi-language-c:before{content:\"\\F671\"}.mdi-language-cpp:before{content:\"\\F672\"}.mdi-language-csharp:before{content:\"\\F31B\"}.mdi-language-css3:before{content:\"\\F31C\"}.mdi-language-html5:before{content:\"\\F31D\"}.mdi-language-javascript:before{content:\"\\F31E\"}.mdi-language-php:before{content:\"\\F31F\"}.mdi-language-python:before{content:\"\\F320\"}.mdi-language-python-text:before{content:\"\\F321\"}.mdi-language-swift:before{content:\"\\F6E4\"}.mdi-language-typescript:before{content:\"\\F6E5\"}.mdi-laptop:before{content:\"\\F322\"}.mdi-laptop-chromebook:before{content:\"\\F323\"}.mdi-laptop-mac:before{content:\"\\F324\"}.mdi-laptop-off:before{content:\"\\F6E6\"}.mdi-laptop-windows:before{content:\"\\F325\"}.mdi-lastfm:before{content:\"\\F326\"}.mdi-launch:before{content:\"\\F327\"}.mdi-layers:before{content:\"\\F328\"}.mdi-layers-off:before{content:\"\\F329\"}.mdi-lead-pencil:before{content:\"\\F64F\"}.mdi-leaf:before{content:\"\\F32A\"}.mdi-led-off:before{content:\"\\F32B\"}.mdi-led-on:before{content:\"\\F32C\"}.mdi-led-outline:before{content:\"\\F32D\"}.mdi-led-variant-off:before{content:\"\\F32E\"}.mdi-led-variant-on:before{content:\"\\F32F\"}.mdi-led-variant-outline:before{content:\"\\F330\"}.mdi-library:before{content:\"\\F331\"}.mdi-library-books:before{content:\"\\F332\"}.mdi-library-music:before{content:\"\\F333\"}.mdi-library-plus:before{content:\"\\F334\"}.mdi-lightbulb:before{content:\"\\F335\"}.mdi-lightbulb-on:before{content:\"\\F6E7\"}.mdi-lightbulb-on-outline:before{content:\"\\F6E8\"}.mdi-lightbulb-outline:before{content:\"\\F336\"}.mdi-link:before{content:\"\\F337\"}.mdi-link-off:before{content:\"\\F338\"}.mdi-link-variant:before{content:\"\\F339\"}.mdi-link-variant-off:before{content:\"\\F33A\"}.mdi-linkedin:before{content:\"\\F33B\"}.mdi-linkedin-box:before{content:\"\\F33C\"}.mdi-linux:before{content:\"\\F33D\"}.mdi-loading:before{content:\"\\F771\"}.mdi-lock:before{content:\"\\F33E\"}.mdi-lock-open:before{content:\"\\F33F\"}.mdi-lock-open-outline:before{content:\"\\F340\"}.mdi-lock-outline:before{content:\"\\F341\"}.mdi-lock-pattern:before{content:\"\\F6E9\"}.mdi-lock-plus:before{content:\"\\F5FB\"}.mdi-lock-reset:before{content:\"\\F772\"}.mdi-login:before{content:\"\\F342\"}.mdi-login-variant:before{content:\"\\F5FC\"}.mdi-logout:before{content:\"\\F343\"}.mdi-logout-variant:before{content:\"\\F5FD\"}.mdi-looks:before{content:\"\\F344\"}.mdi-loop:before{content:\"\\F6EA\"}.mdi-loupe:before{content:\"\\F345\"}.mdi-lumx:before{content:\"\\F346\"}.mdi-magnet:before{content:\"\\F347\"}.mdi-magnet-on:before{content:\"\\F348\"}.mdi-magnify:before{content:\"\\F349\"}.mdi-magnify-minus:before{content:\"\\F34A\"}.mdi-magnify-minus-outline:before{content:\"\\F6EB\"}.mdi-magnify-plus:before{content:\"\\F34B\"}.mdi-magnify-plus-outline:before{content:\"\\F6EC\"}.mdi-mail-ru:before{content:\"\\F34C\"}.mdi-mailbox:before{content:\"\\F6ED\"}.mdi-map:before{content:\"\\F34D\"}.mdi-map-marker:before{content:\"\\F34E\"}.mdi-map-marker-circle:before{content:\"\\F34F\"}.mdi-map-marker-minus:before{content:\"\\F650\"}.mdi-map-marker-multiple:before{content:\"\\F350\"}.mdi-map-marker-off:before{content:\"\\F351\"}.mdi-map-marker-plus:before{content:\"\\F651\"}.mdi-map-marker-radius:before{content:\"\\F352\"}.mdi-margin:before{content:\"\\F353\"}.mdi-markdown:before{content:\"\\F354\"}.mdi-marker:before{content:\"\\F652\"}.mdi-marker-check:before{content:\"\\F355\"}.mdi-martini:before{content:\"\\F356\"}.mdi-material-ui:before{content:\"\\F357\"}.mdi-math-compass:before{content:\"\\F358\"}.mdi-matrix:before{content:\"\\F628\"}.mdi-maxcdn:before{content:\"\\F359\"}.mdi-medical-bag:before{content:\"\\F6EE\"}.mdi-medium:before{content:\"\\F35A\"}.mdi-memory:before{content:\"\\F35B\"}.mdi-menu:before{content:\"\\F35C\"}.mdi-menu-down:before{content:\"\\F35D\"}.mdi-menu-down-outline:before{content:\"\\F6B5\"}.mdi-menu-left:before{content:\"\\F35E\"}.mdi-menu-right:before{content:\"\\F35F\"}.mdi-menu-up:before{content:\"\\F360\"}.mdi-menu-up-outline:before{content:\"\\F6B6\"}.mdi-message:before{content:\"\\F361\"}.mdi-message-alert:before{content:\"\\F362\"}.mdi-message-bulleted:before{content:\"\\F6A1\"}.mdi-message-bulleted-off:before{content:\"\\F6A2\"}.mdi-message-draw:before{content:\"\\F363\"}.mdi-message-image:before{content:\"\\F364\"}.mdi-message-outline:before{content:\"\\F365\"}.mdi-message-plus:before{content:\"\\F653\"}.mdi-message-processing:before{content:\"\\F366\"}.mdi-message-reply:before{content:\"\\F367\"}.mdi-message-reply-text:before{content:\"\\F368\"}.mdi-message-settings:before{content:\"\\F6EF\"}.mdi-message-settings-variant:before{content:\"\\F6F0\"}.mdi-message-text:before{content:\"\\F369\"}.mdi-message-text-outline:before{content:\"\\F36A\"}.mdi-message-video:before{content:\"\\F36B\"}.mdi-meteor:before{content:\"\\F629\"}.mdi-microphone:before{content:\"\\F36C\"}.mdi-microphone-off:before{content:\"\\F36D\"}.mdi-microphone-outline:before{content:\"\\F36E\"}.mdi-microphone-settings:before{content:\"\\F36F\"}.mdi-microphone-variant:before{content:\"\\F370\"}.mdi-microphone-variant-off:before{content:\"\\F371\"}.mdi-microscope:before{content:\"\\F654\"}.mdi-microsoft:before{content:\"\\F372\"}.mdi-minecraft:before{content:\"\\F373\"}.mdi-minus:before{content:\"\\F374\"}.mdi-minus-box:before{content:\"\\F375\"}.mdi-minus-box-outline:before{content:\"\\F6F1\"}.mdi-minus-circle:before{content:\"\\F376\"}.mdi-minus-circle-outline:before{content:\"\\F377\"}.mdi-minus-network:before{content:\"\\F378\"}.mdi-mixcloud:before{content:\"\\F62A\"}.mdi-monitor:before{content:\"\\F379\"}.mdi-monitor-multiple:before{content:\"\\F37A\"}.mdi-more:before{content:\"\\F37B\"}.mdi-motorbike:before{content:\"\\F37C\"}.mdi-mouse:before{content:\"\\F37D\"}.mdi-mouse-off:before{content:\"\\F37E\"}.mdi-mouse-variant:before{content:\"\\F37F\"}.mdi-mouse-variant-off:before{content:\"\\F380\"}.mdi-move-resize:before{content:\"\\F655\"}.mdi-move-resize-variant:before{content:\"\\F656\"}.mdi-movie:before{content:\"\\F381\"}.mdi-multiplication:before{content:\"\\F382\"}.mdi-multiplication-box:before{content:\"\\F383\"}.mdi-music:before{content:\"\\F759\"}.mdi-music-box:before{content:\"\\F384\"}.mdi-music-box-outline:before{content:\"\\F385\"}.mdi-music-circle:before{content:\"\\F386\"}.mdi-music-note:before{content:\"\\F387\"}.mdi-music-note-bluetooth:before{content:\"\\F5FE\"}.mdi-music-note-bluetooth-off:before{content:\"\\F5FF\"}.mdi-music-note-eighth:before{content:\"\\F388\"}.mdi-music-note-half:before{content:\"\\F389\"}.mdi-music-note-off:before{content:\"\\F38A\"}.mdi-music-note-quarter:before{content:\"\\F38B\"}.mdi-music-note-sixteenth:before{content:\"\\F38C\"}.mdi-music-note-whole:before{content:\"\\F38D\"}.mdi-music-off:before{content:\"\\F75A\"}.mdi-nature:before{content:\"\\F38E\"}.mdi-nature-people:before{content:\"\\F38F\"}.mdi-navigation:before{content:\"\\F390\"}.mdi-near-me:before{content:\"\\F5CD\"}.mdi-needle:before{content:\"\\F391\"}.mdi-nest-protect:before{content:\"\\F392\"}.mdi-nest-thermostat:before{content:\"\\F393\"}.mdi-netflix:before{content:\"\\F745\"}.mdi-network:before{content:\"\\F6F2\"}.mdi-new-box:before{content:\"\\F394\"}.mdi-newspaper:before{content:\"\\F395\"}.mdi-nfc:before{content:\"\\F396\"}.mdi-nfc-tap:before{content:\"\\F397\"}.mdi-nfc-variant:before{content:\"\\F398\"}.mdi-ninja:before{content:\"\\F773\"}.mdi-nodejs:before{content:\"\\F399\"}.mdi-note:before{content:\"\\F39A\"}.mdi-note-multiple:before{content:\"\\F6B7\"}.mdi-note-multiple-outline:before{content:\"\\F6B8\"}.mdi-note-outline:before{content:\"\\F39B\"}.mdi-note-plus:before{content:\"\\F39C\"}.mdi-note-plus-outline:before{content:\"\\F39D\"}.mdi-note-text:before{content:\"\\F39E\"}.mdi-notification-clear-all:before{content:\"\\F39F\"}.mdi-npm:before{content:\"\\F6F6\"}.mdi-nuke:before{content:\"\\F6A3\"}.mdi-numeric:before{content:\"\\F3A0\"}.mdi-numeric-0-box:before{content:\"\\F3A1\"}.mdi-numeric-0-box-multiple-outline:before{content:\"\\F3A2\"}.mdi-numeric-0-box-outline:before{content:\"\\F3A3\"}.mdi-numeric-1-box:before{content:\"\\F3A4\"}.mdi-numeric-1-box-multiple-outline:before{content:\"\\F3A5\"}.mdi-numeric-1-box-outline:before{content:\"\\F3A6\"}.mdi-numeric-2-box:before{content:\"\\F3A7\"}.mdi-numeric-2-box-multiple-outline:before{content:\"\\F3A8\"}.mdi-numeric-2-box-outline:before{content:\"\\F3A9\"}.mdi-numeric-3-box:before{content:\"\\F3AA\"}.mdi-numeric-3-box-multiple-outline:before{content:\"\\F3AB\"}.mdi-numeric-3-box-outline:before{content:\"\\F3AC\"}.mdi-numeric-4-box:before{content:\"\\F3AD\"}.mdi-numeric-4-box-multiple-outline:before{content:\"\\F3AE\"}.mdi-numeric-4-box-outline:before{content:\"\\F3AF\"}.mdi-numeric-5-box:before{content:\"\\F3B0\"}.mdi-numeric-5-box-multiple-outline:before{content:\"\\F3B1\"}.mdi-numeric-5-box-outline:before{content:\"\\F3B2\"}.mdi-numeric-6-box:before{content:\"\\F3B3\"}.mdi-numeric-6-box-multiple-outline:before{content:\"\\F3B4\"}.mdi-numeric-6-box-outline:before{content:\"\\F3B5\"}.mdi-numeric-7-box:before{content:\"\\F3B6\"}.mdi-numeric-7-box-multiple-outline:before{content:\"\\F3B7\"}.mdi-numeric-7-box-outline:before{content:\"\\F3B8\"}.mdi-numeric-8-box:before{content:\"\\F3B9\"}.mdi-numeric-8-box-multiple-outline:before{content:\"\\F3BA\"}.mdi-numeric-8-box-outline:before{content:\"\\F3BB\"}.mdi-numeric-9-box:before{content:\"\\F3BC\"}.mdi-numeric-9-box-multiple-outline:before{content:\"\\F3BD\"}.mdi-numeric-9-box-outline:before{content:\"\\F3BE\"}.mdi-numeric-9-plus-box:before{content:\"\\F3BF\"}.mdi-numeric-9-plus-box-multiple-outline:before{content:\"\\F3C0\"}.mdi-numeric-9-plus-box-outline:before{content:\"\\F3C1\"}.mdi-nut:before{content:\"\\F6F7\"}.mdi-nutrition:before{content:\"\\F3C2\"}.mdi-oar:before{content:\"\\F67B\"}.mdi-octagon:before{content:\"\\F3C3\"}.mdi-octagon-outline:before{content:\"\\F3C4\"}.mdi-octagram:before{content:\"\\F6F8\"}.mdi-octagram-outline:before{content:\"\\F774\"}.mdi-odnoklassniki:before{content:\"\\F3C5\"}.mdi-office:before{content:\"\\F3C6\"}.mdi-oil:before{content:\"\\F3C7\"}.mdi-oil-temperature:before{content:\"\\F3C8\"}.mdi-omega:before{content:\"\\F3C9\"}.mdi-onedrive:before{content:\"\\F3CA\"}.mdi-onenote:before{content:\"\\F746\"}.mdi-opacity:before{content:\"\\F5CC\"}.mdi-open-in-app:before{content:\"\\F3CB\"}.mdi-open-in-new:before{content:\"\\F3CC\"}.mdi-openid:before{content:\"\\F3CD\"}.mdi-opera:before{content:\"\\F3CE\"}.mdi-orbit:before{content:\"\\F018\"}.mdi-ornament:before{content:\"\\F3CF\"}.mdi-ornament-variant:before{content:\"\\F3D0\"}.mdi-owl:before{content:\"\\F3D2\"}.mdi-package:before{content:\"\\F3D3\"}.mdi-package-down:before{content:\"\\F3D4\"}.mdi-package-up:before{content:\"\\F3D5\"}.mdi-package-variant:before{content:\"\\F3D6\"}.mdi-package-variant-closed:before{content:\"\\F3D7\"}.mdi-page-first:before{content:\"\\F600\"}.mdi-page-last:before{content:\"\\F601\"}.mdi-page-layout-body:before{content:\"\\F6F9\"}.mdi-page-layout-footer:before{content:\"\\F6FA\"}.mdi-page-layout-header:before{content:\"\\F6FB\"}.mdi-page-layout-sidebar-left:before{content:\"\\F6FC\"}.mdi-page-layout-sidebar-right:before{content:\"\\F6FD\"}.mdi-palette:before{content:\"\\F3D8\"}.mdi-palette-advanced:before{content:\"\\F3D9\"}.mdi-panda:before{content:\"\\F3DA\"}.mdi-pandora:before{content:\"\\F3DB\"}.mdi-panorama:before{content:\"\\F3DC\"}.mdi-panorama-fisheye:before{content:\"\\F3DD\"}.mdi-panorama-horizontal:before{content:\"\\F3DE\"}.mdi-panorama-vertical:before{content:\"\\F3DF\"}.mdi-panorama-wide-angle:before{content:\"\\F3E0\"}.mdi-paper-cut-vertical:before{content:\"\\F3E1\"}.mdi-paperclip:before{content:\"\\F3E2\"}.mdi-parking:before{content:\"\\F3E3\"}.mdi-pause:before{content:\"\\F3E4\"}.mdi-pause-circle:before{content:\"\\F3E5\"}.mdi-pause-circle-outline:before{content:\"\\F3E6\"}.mdi-pause-octagon:before{content:\"\\F3E7\"}.mdi-pause-octagon-outline:before{content:\"\\F3E8\"}.mdi-paw:before{content:\"\\F3E9\"}.mdi-paw-off:before{content:\"\\F657\"}.mdi-pen:before{content:\"\\F3EA\"}.mdi-pencil:before{content:\"\\F3EB\"}.mdi-pencil-box:before{content:\"\\F3EC\"}.mdi-pencil-box-outline:before{content:\"\\F3ED\"}.mdi-pencil-circle:before{content:\"\\F6FE\"}.mdi-pencil-circle-outline:before{content:\"\\F775\"}.mdi-pencil-lock:before{content:\"\\F3EE\"}.mdi-pencil-off:before{content:\"\\F3EF\"}.mdi-pentagon:before{content:\"\\F6FF\"}.mdi-pentagon-outline:before{content:\"\\F700\"}.mdi-percent:before{content:\"\\F3F0\"}.mdi-periscope:before{content:\"\\F747\"}.mdi-pharmacy:before{content:\"\\F3F1\"}.mdi-phone:before{content:\"\\F3F2\"}.mdi-phone-bluetooth:before{content:\"\\F3F3\"}.mdi-phone-classic:before{content:\"\\F602\"}.mdi-phone-forward:before{content:\"\\F3F4\"}.mdi-phone-hangup:before{content:\"\\F3F5\"}.mdi-phone-in-talk:before{content:\"\\F3F6\"}.mdi-phone-incoming:before{content:\"\\F3F7\"}.mdi-phone-locked:before{content:\"\\F3F8\"}.mdi-phone-log:before{content:\"\\F3F9\"}.mdi-phone-minus:before{content:\"\\F658\"}.mdi-phone-missed:before{content:\"\\F3FA\"}.mdi-phone-outgoing:before{content:\"\\F3FB\"}.mdi-phone-paused:before{content:\"\\F3FC\"}.mdi-phone-plus:before{content:\"\\F659\"}.mdi-phone-settings:before{content:\"\\F3FD\"}.mdi-phone-voip:before{content:\"\\F3FE\"}.mdi-pi:before{content:\"\\F3FF\"}.mdi-pi-box:before{content:\"\\F400\"}.mdi-piano:before{content:\"\\F67C\"}.mdi-pig:before{content:\"\\F401\"}.mdi-pill:before{content:\"\\F402\"}.mdi-pillar:before{content:\"\\F701\"}.mdi-pin:before{content:\"\\F403\"}.mdi-pin-off:before{content:\"\\F404\"}.mdi-pine-tree:before{content:\"\\F405\"}.mdi-pine-tree-box:before{content:\"\\F406\"}.mdi-pinterest:before{content:\"\\F407\"}.mdi-pinterest-box:before{content:\"\\F408\"}.mdi-pistol:before{content:\"\\F702\"}.mdi-pizza:before{content:\"\\F409\"}.mdi-plane-shield:before{content:\"\\F6BA\"}.mdi-play:before{content:\"\\F40A\"}.mdi-play-box-outline:before{content:\"\\F40B\"}.mdi-play-circle:before{content:\"\\F40C\"}.mdi-play-circle-outline:before{content:\"\\F40D\"}.mdi-play-pause:before{content:\"\\F40E\"}.mdi-play-protected-content:before{content:\"\\F40F\"}.mdi-playlist-check:before{content:\"\\F5C7\"}.mdi-playlist-minus:before{content:\"\\F410\"}.mdi-playlist-play:before{content:\"\\F411\"}.mdi-playlist-plus:before{content:\"\\F412\"}.mdi-playlist-remove:before{content:\"\\F413\"}.mdi-playstation:before{content:\"\\F414\"}.mdi-plex:before{content:\"\\F6B9\"}.mdi-plus:before{content:\"\\F415\"}.mdi-plus-box:before{content:\"\\F416\"}.mdi-plus-box-outline:before{content:\"\\F703\"}.mdi-plus-circle:before{content:\"\\F417\"}.mdi-plus-circle-multiple-outline:before{content:\"\\F418\"}.mdi-plus-circle-outline:before{content:\"\\F419\"}.mdi-plus-network:before{content:\"\\F41A\"}.mdi-plus-one:before{content:\"\\F41B\"}.mdi-plus-outline:before{content:\"\\F704\"}.mdi-pocket:before{content:\"\\F41C\"}.mdi-pokeball:before{content:\"\\F41D\"}.mdi-polaroid:before{content:\"\\F41E\"}.mdi-poll:before{content:\"\\F41F\"}.mdi-poll-box:before{content:\"\\F420\"}.mdi-polymer:before{content:\"\\F421\"}.mdi-pool:before{content:\"\\F606\"}.mdi-popcorn:before{content:\"\\F422\"}.mdi-pot:before{content:\"\\F65A\"}.mdi-pot-mix:before{content:\"\\F65B\"}.mdi-pound:before{content:\"\\F423\"}.mdi-pound-box:before{content:\"\\F424\"}.mdi-power:before{content:\"\\F425\"}.mdi-power-plug:before{content:\"\\F6A4\"}.mdi-power-plug-off:before{content:\"\\F6A5\"}.mdi-power-settings:before{content:\"\\F426\"}.mdi-power-socket:before{content:\"\\F427\"}.mdi-prescription:before{content:\"\\F705\"}.mdi-presentation:before{content:\"\\F428\"}.mdi-presentation-play:before{content:\"\\F429\"}.mdi-printer:before{content:\"\\F42A\"}.mdi-printer-3d:before{content:\"\\F42B\"}.mdi-printer-alert:before{content:\"\\F42C\"}.mdi-printer-settings:before{content:\"\\F706\"}.mdi-priority-high:before{content:\"\\F603\"}.mdi-priority-low:before{content:\"\\F604\"}.mdi-professional-hexagon:before{content:\"\\F42D\"}.mdi-projector:before{content:\"\\F42E\"}.mdi-projector-screen:before{content:\"\\F42F\"}.mdi-publish:before{content:\"\\F6A6\"}.mdi-pulse:before{content:\"\\F430\"}.mdi-puzzle:before{content:\"\\F431\"}.mdi-qqchat:before{content:\"\\F605\"}.mdi-qrcode:before{content:\"\\F432\"}.mdi-qrcode-scan:before{content:\"\\F433\"}.mdi-quadcopter:before{content:\"\\F434\"}.mdi-quality-high:before{content:\"\\F435\"}.mdi-quicktime:before{content:\"\\F436\"}.mdi-radar:before{content:\"\\F437\"}.mdi-radiator:before{content:\"\\F438\"}.mdi-radio:before{content:\"\\F439\"}.mdi-radio-handheld:before{content:\"\\F43A\"}.mdi-radio-tower:before{content:\"\\F43B\"}.mdi-radioactive:before{content:\"\\F43C\"}.mdi-radiobox-blank:before{content:\"\\F43D\"}.mdi-radiobox-marked:before{content:\"\\F43E\"}.mdi-raspberrypi:before{content:\"\\F43F\"}.mdi-ray-end:before{content:\"\\F440\"}.mdi-ray-end-arrow:before{content:\"\\F441\"}.mdi-ray-start:before{content:\"\\F442\"}.mdi-ray-start-arrow:before{content:\"\\F443\"}.mdi-ray-start-end:before{content:\"\\F444\"}.mdi-ray-vertex:before{content:\"\\F445\"}.mdi-rdio:before{content:\"\\F446\"}.mdi-react:before{content:\"\\F707\"}.mdi-read:before{content:\"\\F447\"}.mdi-readability:before{content:\"\\F448\"}.mdi-receipt:before{content:\"\\F449\"}.mdi-record:before{content:\"\\F44A\"}.mdi-record-rec:before{content:\"\\F44B\"}.mdi-recycle:before{content:\"\\F44C\"}.mdi-reddit:before{content:\"\\F44D\"}.mdi-redo:before{content:\"\\F44E\"}.mdi-redo-variant:before{content:\"\\F44F\"}.mdi-refresh:before{content:\"\\F450\"}.mdi-regex:before{content:\"\\F451\"}.mdi-relative-scale:before{content:\"\\F452\"}.mdi-reload:before{content:\"\\F453\"}.mdi-remote:before{content:\"\\F454\"}.mdi-rename-box:before{content:\"\\F455\"}.mdi-reorder-horizontal:before{content:\"\\F687\"}.mdi-reorder-vertical:before{content:\"\\F688\"}.mdi-repeat:before{content:\"\\F456\"}.mdi-repeat-off:before{content:\"\\F457\"}.mdi-repeat-once:before{content:\"\\F458\"}.mdi-replay:before{content:\"\\F459\"}.mdi-reply:before{content:\"\\F45A\"}.mdi-reply-all:before{content:\"\\F45B\"}.mdi-reproduction:before{content:\"\\F45C\"}.mdi-resize-bottom-right:before{content:\"\\F45D\"}.mdi-responsive:before{content:\"\\F45E\"}.mdi-restart:before{content:\"\\F708\"}.mdi-restore:before{content:\"\\F6A7\"}.mdi-rewind:before{content:\"\\F45F\"}.mdi-rewind-outline:before{content:\"\\F709\"}.mdi-rhombus:before{content:\"\\F70A\"}.mdi-rhombus-outline:before{content:\"\\F70B\"}.mdi-ribbon:before{content:\"\\F460\"}.mdi-road:before{content:\"\\F461\"}.mdi-road-variant:before{content:\"\\F462\"}.mdi-robot:before{content:\"\\F6A8\"}.mdi-rocket:before{content:\"\\F463\"}.mdi-roomba:before{content:\"\\F70C\"}.mdi-rotate-3d:before{content:\"\\F464\"}.mdi-rotate-left:before{content:\"\\F465\"}.mdi-rotate-left-variant:before{content:\"\\F466\"}.mdi-rotate-right:before{content:\"\\F467\"}.mdi-rotate-right-variant:before{content:\"\\F468\"}.mdi-rounded-corner:before{content:\"\\F607\"}.mdi-router-wireless:before{content:\"\\F469\"}.mdi-routes:before{content:\"\\F46A\"}.mdi-rowing:before{content:\"\\F608\"}.mdi-rss:before{content:\"\\F46B\"}.mdi-rss-box:before{content:\"\\F46C\"}.mdi-ruler:before{content:\"\\F46D\"}.mdi-run:before{content:\"\\F70D\"}.mdi-run-fast:before{content:\"\\F46E\"}.mdi-sale:before{content:\"\\F46F\"}.mdi-satellite:before{content:\"\\F470\"}.mdi-satellite-variant:before{content:\"\\F471\"}.mdi-saxophone:before{content:\"\\F609\"}.mdi-scale:before{content:\"\\F472\"}.mdi-scale-balance:before{content:\"\\F5D1\"}.mdi-scale-bathroom:before{content:\"\\F473\"}.mdi-scanner:before{content:\"\\F6AA\"}.mdi-school:before{content:\"\\F474\"}.mdi-screen-rotation:before{content:\"\\F475\"}.mdi-screen-rotation-lock:before{content:\"\\F476\"}.mdi-screwdriver:before{content:\"\\F477\"}.mdi-script:before{content:\"\\F478\"}.mdi-sd:before{content:\"\\F479\"}.mdi-seal:before{content:\"\\F47A\"}.mdi-search-web:before{content:\"\\F70E\"}.mdi-seat-flat:before{content:\"\\F47B\"}.mdi-seat-flat-angled:before{content:\"\\F47C\"}.mdi-seat-individual-suite:before{content:\"\\F47D\"}.mdi-seat-legroom-extra:before{content:\"\\F47E\"}.mdi-seat-legroom-normal:before{content:\"\\F47F\"}.mdi-seat-legroom-reduced:before{content:\"\\F480\"}.mdi-seat-recline-extra:before{content:\"\\F481\"}.mdi-seat-recline-normal:before{content:\"\\F482\"}.mdi-security:before{content:\"\\F483\"}.mdi-security-home:before{content:\"\\F689\"}.mdi-security-network:before{content:\"\\F484\"}.mdi-select:before{content:\"\\F485\"}.mdi-select-all:before{content:\"\\F486\"}.mdi-select-inverse:before{content:\"\\F487\"}.mdi-select-off:before{content:\"\\F488\"}.mdi-selection:before{content:\"\\F489\"}.mdi-selection-off:before{content:\"\\F776\"}.mdi-send:before{content:\"\\F48A\"}.mdi-serial-port:before{content:\"\\F65C\"}.mdi-server:before{content:\"\\F48B\"}.mdi-server-minus:before{content:\"\\F48C\"}.mdi-server-network:before{content:\"\\F48D\"}.mdi-server-network-off:before{content:\"\\F48E\"}.mdi-server-off:before{content:\"\\F48F\"}.mdi-server-plus:before{content:\"\\F490\"}.mdi-server-remove:before{content:\"\\F491\"}.mdi-server-security:before{content:\"\\F492\"}.mdi-set-all:before{content:\"\\F777\"}.mdi-set-center:before{content:\"\\F778\"}.mdi-set-center-right:before{content:\"\\F779\"}.mdi-set-left:before{content:\"\\F77A\"}.mdi-set-left-center:before{content:\"\\F77B\"}.mdi-set-left-right:before{content:\"\\F77C\"}.mdi-set-none:before{content:\"\\F77D\"}.mdi-set-right:before{content:\"\\F77E\"}.mdi-settings:before{content:\"\\F493\"}.mdi-settings-box:before{content:\"\\F494\"}.mdi-shape-circle-plus:before{content:\"\\F65D\"}.mdi-shape-plus:before{content:\"\\F495\"}.mdi-shape-polygon-plus:before{content:\"\\F65E\"}.mdi-shape-rectangle-plus:before{content:\"\\F65F\"}.mdi-shape-square-plus:before{content:\"\\F660\"}.mdi-share:before{content:\"\\F496\"}.mdi-share-variant:before{content:\"\\F497\"}.mdi-shield:before{content:\"\\F498\"}.mdi-shield-half-full:before{content:\"\\F77F\"}.mdi-shield-outline:before{content:\"\\F499\"}.mdi-shopping:before{content:\"\\F49A\"}.mdi-shopping-music:before{content:\"\\F49B\"}.mdi-shovel:before{content:\"\\F70F\"}.mdi-shovel-off:before{content:\"\\F710\"}.mdi-shredder:before{content:\"\\F49C\"}.mdi-shuffle:before{content:\"\\F49D\"}.mdi-shuffle-disabled:before{content:\"\\F49E\"}.mdi-shuffle-variant:before{content:\"\\F49F\"}.mdi-sigma:before{content:\"\\F4A0\"}.mdi-sigma-lower:before{content:\"\\F62B\"}.mdi-sign-caution:before{content:\"\\F4A1\"}.mdi-sign-direction:before{content:\"\\F780\"}.mdi-sign-text:before{content:\"\\F781\"}.mdi-signal:before{content:\"\\F4A2\"}.mdi-signal-2g:before{content:\"\\F711\"}.mdi-signal-3g:before{content:\"\\F712\"}.mdi-signal-4g:before{content:\"\\F713\"}.mdi-signal-hspa:before{content:\"\\F714\"}.mdi-signal-hspa-plus:before{content:\"\\F715\"}.mdi-signal-off:before{content:\"\\F782\"}.mdi-signal-variant:before{content:\"\\F60A\"}.mdi-silverware:before{content:\"\\F4A3\"}.mdi-silverware-fork:before{content:\"\\F4A4\"}.mdi-silverware-spoon:before{content:\"\\F4A5\"}.mdi-silverware-variant:before{content:\"\\F4A6\"}.mdi-sim:before{content:\"\\F4A7\"}.mdi-sim-alert:before{content:\"\\F4A8\"}.mdi-sim-off:before{content:\"\\F4A9\"}.mdi-sitemap:before{content:\"\\F4AA\"}.mdi-skip-backward:before{content:\"\\F4AB\"}.mdi-skip-forward:before{content:\"\\F4AC\"}.mdi-skip-next:before{content:\"\\F4AD\"}.mdi-skip-next-circle:before{content:\"\\F661\"}.mdi-skip-next-circle-outline:before{content:\"\\F662\"}.mdi-skip-previous:before{content:\"\\F4AE\"}.mdi-skip-previous-circle:before{content:\"\\F663\"}.mdi-skip-previous-circle-outline:before{content:\"\\F664\"}.mdi-skull:before{content:\"\\F68B\"}.mdi-skype:before{content:\"\\F4AF\"}.mdi-skype-business:before{content:\"\\F4B0\"}.mdi-slack:before{content:\"\\F4B1\"}.mdi-sleep:before{content:\"\\F4B2\"}.mdi-sleep-off:before{content:\"\\F4B3\"}.mdi-smoking:before{content:\"\\F4B4\"}.mdi-smoking-off:before{content:\"\\F4B5\"}.mdi-snapchat:before{content:\"\\F4B6\"}.mdi-snowflake:before{content:\"\\F716\"}.mdi-snowman:before{content:\"\\F4B7\"}.mdi-soccer:before{content:\"\\F4B8\"}.mdi-sofa:before{content:\"\\F4B9\"}.mdi-solid:before{content:\"\\F68C\"}.mdi-sort:before{content:\"\\F4BA\"}.mdi-sort-alphabetical:before{content:\"\\F4BB\"}.mdi-sort-ascending:before{content:\"\\F4BC\"}.mdi-sort-descending:before{content:\"\\F4BD\"}.mdi-sort-numeric:before{content:\"\\F4BE\"}.mdi-sort-variant:before{content:\"\\F4BF\"}.mdi-soundcloud:before{content:\"\\F4C0\"}.mdi-source-branch:before{content:\"\\F62C\"}.mdi-source-commit:before{content:\"\\F717\"}.mdi-source-commit-end:before{content:\"\\F718\"}.mdi-source-commit-end-local:before{content:\"\\F719\"}.mdi-source-commit-local:before{content:\"\\F71A\"}.mdi-source-commit-next-local:before{content:\"\\F71B\"}.mdi-source-commit-start:before{content:\"\\F71C\"}.mdi-source-commit-start-next-local:before{content:\"\\F71D\"}.mdi-source-fork:before{content:\"\\F4C1\"}.mdi-source-merge:before{content:\"\\F62D\"}.mdi-source-pull:before{content:\"\\F4C2\"}.mdi-speaker:before{content:\"\\F4C3\"}.mdi-speaker-off:before{content:\"\\F4C4\"}.mdi-speaker-wireless:before{content:\"\\F71E\"}.mdi-speedometer:before{content:\"\\F4C5\"}.mdi-spellcheck:before{content:\"\\F4C6\"}.mdi-spotify:before{content:\"\\F4C7\"}.mdi-spotlight:before{content:\"\\F4C8\"}.mdi-spotlight-beam:before{content:\"\\F4C9\"}.mdi-spray:before{content:\"\\F665\"}.mdi-square:before{content:\"\\F763\"}.mdi-square-inc:before{content:\"\\F4CA\"}.mdi-square-inc-cash:before{content:\"\\F4CB\"}.mdi-square-outline:before{content:\"\\F762\"}.mdi-square-root:before{content:\"\\F783\"}.mdi-stackexchange:before{content:\"\\F60B\"}.mdi-stackoverflow:before{content:\"\\F4CC\"}.mdi-stadium:before{content:\"\\F71F\"}.mdi-stairs:before{content:\"\\F4CD\"}.mdi-star:before{content:\"\\F4CE\"}.mdi-star-circle:before{content:\"\\F4CF\"}.mdi-star-half:before{content:\"\\F4D0\"}.mdi-star-off:before{content:\"\\F4D1\"}.mdi-star-outline:before{content:\"\\F4D2\"}.mdi-steam:before{content:\"\\F4D3\"}.mdi-steering:before{content:\"\\F4D4\"}.mdi-step-backward:before{content:\"\\F4D5\"}.mdi-step-backward-2:before{content:\"\\F4D6\"}.mdi-step-forward:before{content:\"\\F4D7\"}.mdi-step-forward-2:before{content:\"\\F4D8\"}.mdi-stethoscope:before{content:\"\\F4D9\"}.mdi-sticker:before{content:\"\\F5D0\"}.mdi-sticker-emoji:before{content:\"\\F784\"}.mdi-stocking:before{content:\"\\F4DA\"}.mdi-stop:before{content:\"\\F4DB\"}.mdi-stop-circle:before{content:\"\\F666\"}.mdi-stop-circle-outline:before{content:\"\\F667\"}.mdi-store:before{content:\"\\F4DC\"}.mdi-store-24-hour:before{content:\"\\F4DD\"}.mdi-stove:before{content:\"\\F4DE\"}.mdi-subdirectory-arrow-left:before{content:\"\\F60C\"}.mdi-subdirectory-arrow-right:before{content:\"\\F60D\"}.mdi-subway:before{content:\"\\F6AB\"}.mdi-subway-variant:before{content:\"\\F4DF\"}.mdi-summit:before{content:\"\\F785\"}.mdi-sunglasses:before{content:\"\\F4E0\"}.mdi-surround-sound:before{content:\"\\F5C5\"}.mdi-svg:before{content:\"\\F720\"}.mdi-swap-horizontal:before{content:\"\\F4E1\"}.mdi-swap-vertical:before{content:\"\\F4E2\"}.mdi-swim:before{content:\"\\F4E3\"}.mdi-switch:before{content:\"\\F4E4\"}.mdi-sword:before{content:\"\\F4E5\"}.mdi-sword-cross:before{content:\"\\F786\"}.mdi-sync:before{content:\"\\F4E6\"}.mdi-sync-alert:before{content:\"\\F4E7\"}.mdi-sync-off:before{content:\"\\F4E8\"}.mdi-tab:before{content:\"\\F4E9\"}.mdi-tab-plus:before{content:\"\\F75B\"}.mdi-tab-unselected:before{content:\"\\F4EA\"}.mdi-table:before{content:\"\\F4EB\"}.mdi-table-column-plus-after:before{content:\"\\F4EC\"}.mdi-table-column-plus-before:before{content:\"\\F4ED\"}.mdi-table-column-remove:before{content:\"\\F4EE\"}.mdi-table-column-width:before{content:\"\\F4EF\"}.mdi-table-edit:before{content:\"\\F4F0\"}.mdi-table-large:before{content:\"\\F4F1\"}.mdi-table-row-height:before{content:\"\\F4F2\"}.mdi-table-row-plus-after:before{content:\"\\F4F3\"}.mdi-table-row-plus-before:before{content:\"\\F4F4\"}.mdi-table-row-remove:before{content:\"\\F4F5\"}.mdi-tablet:before{content:\"\\F4F6\"}.mdi-tablet-android:before{content:\"\\F4F7\"}.mdi-tablet-ipad:before{content:\"\\F4F8\"}.mdi-taco:before{content:\"\\F761\"}.mdi-tag:before{content:\"\\F4F9\"}.mdi-tag-faces:before{content:\"\\F4FA\"}.mdi-tag-heart:before{content:\"\\F68A\"}.mdi-tag-multiple:before{content:\"\\F4FB\"}.mdi-tag-outline:before{content:\"\\F4FC\"}.mdi-tag-plus:before{content:\"\\F721\"}.mdi-tag-remove:before{content:\"\\F722\"}.mdi-tag-text-outline:before{content:\"\\F4FD\"}.mdi-target:before{content:\"\\F4FE\"}.mdi-taxi:before{content:\"\\F4FF\"}.mdi-teamviewer:before{content:\"\\F500\"}.mdi-telegram:before{content:\"\\F501\"}.mdi-television:before{content:\"\\F502\"}.mdi-television-guide:before{content:\"\\F503\"}.mdi-temperature-celsius:before{content:\"\\F504\"}.mdi-temperature-fahrenheit:before{content:\"\\F505\"}.mdi-temperature-kelvin:before{content:\"\\F506\"}.mdi-tennis:before{content:\"\\F507\"}.mdi-tent:before{content:\"\\F508\"}.mdi-terrain:before{content:\"\\F509\"}.mdi-test-tube:before{content:\"\\F668\"}.mdi-text-shadow:before{content:\"\\F669\"}.mdi-text-to-speech:before{content:\"\\F50A\"}.mdi-text-to-speech-off:before{content:\"\\F50B\"}.mdi-textbox:before{content:\"\\F60E\"}.mdi-texture:before{content:\"\\F50C\"}.mdi-theater:before{content:\"\\F50D\"}.mdi-theme-light-dark:before{content:\"\\F50E\"}.mdi-thermometer:before{content:\"\\F50F\"}.mdi-thermometer-lines:before{content:\"\\F510\"}.mdi-thumb-down:before{content:\"\\F511\"}.mdi-thumb-down-outline:before{content:\"\\F512\"}.mdi-thumb-up:before{content:\"\\F513\"}.mdi-thumb-up-outline:before{content:\"\\F514\"}.mdi-thumbs-up-down:before{content:\"\\F515\"}.mdi-ticket:before{content:\"\\F516\"}.mdi-ticket-account:before{content:\"\\F517\"}.mdi-ticket-confirmation:before{content:\"\\F518\"}.mdi-ticket-percent:before{content:\"\\F723\"}.mdi-tie:before{content:\"\\F519\"}.mdi-tilde:before{content:\"\\F724\"}.mdi-timelapse:before{content:\"\\F51A\"}.mdi-timer:before{content:\"\\F51B\"}.mdi-timer-10:before{content:\"\\F51C\"}.mdi-timer-3:before{content:\"\\F51D\"}.mdi-timer-off:before{content:\"\\F51E\"}.mdi-timer-sand:before{content:\"\\F51F\"}.mdi-timer-sand-empty:before{content:\"\\F6AC\"}.mdi-timer-sand-full:before{content:\"\\F78B\"}.mdi-timetable:before{content:\"\\F520\"}.mdi-toggle-switch:before{content:\"\\F521\"}.mdi-toggle-switch-off:before{content:\"\\F522\"}.mdi-tooltip:before{content:\"\\F523\"}.mdi-tooltip-edit:before{content:\"\\F524\"}.mdi-tooltip-image:before{content:\"\\F525\"}.mdi-tooltip-outline:before{content:\"\\F526\"}.mdi-tooltip-outline-plus:before{content:\"\\F527\"}.mdi-tooltip-text:before{content:\"\\F528\"}.mdi-tooth:before{content:\"\\F529\"}.mdi-tor:before{content:\"\\F52A\"}.mdi-tower-beach:before{content:\"\\F680\"}.mdi-tower-fire:before{content:\"\\F681\"}.mdi-traffic-light:before{content:\"\\F52B\"}.mdi-train:before{content:\"\\F52C\"}.mdi-tram:before{content:\"\\F52D\"}.mdi-transcribe:before{content:\"\\F52E\"}.mdi-transcribe-close:before{content:\"\\F52F\"}.mdi-transfer:before{content:\"\\F530\"}.mdi-transit-transfer:before{content:\"\\F6AD\"}.mdi-translate:before{content:\"\\F5CA\"}.mdi-treasure-chest:before{content:\"\\F725\"}.mdi-tree:before{content:\"\\F531\"}.mdi-trello:before{content:\"\\F532\"}.mdi-trending-down:before{content:\"\\F533\"}.mdi-trending-neutral:before{content:\"\\F534\"}.mdi-trending-up:before{content:\"\\F535\"}.mdi-triangle:before{content:\"\\F536\"}.mdi-triangle-outline:before{content:\"\\F537\"}.mdi-trophy:before{content:\"\\F538\"}.mdi-trophy-award:before{content:\"\\F539\"}.mdi-trophy-outline:before{content:\"\\F53A\"}.mdi-trophy-variant:before{content:\"\\F53B\"}.mdi-trophy-variant-outline:before{content:\"\\F53C\"}.mdi-truck:before{content:\"\\F53D\"}.mdi-truck-delivery:before{content:\"\\F53E\"}.mdi-truck-fast:before{content:\"\\F787\"}.mdi-truck-trailer:before{content:\"\\F726\"}.mdi-tshirt-crew:before{content:\"\\F53F\"}.mdi-tshirt-v:before{content:\"\\F540\"}.mdi-tumblr:before{content:\"\\F541\"}.mdi-tumblr-reblog:before{content:\"\\F542\"}.mdi-tune:before{content:\"\\F62E\"}.mdi-tune-vertical:before{content:\"\\F66A\"}.mdi-twitch:before{content:\"\\F543\"}.mdi-twitter:before{content:\"\\F544\"}.mdi-twitter-box:before{content:\"\\F545\"}.mdi-twitter-circle:before{content:\"\\F546\"}.mdi-twitter-retweet:before{content:\"\\F547\"}.mdi-uber:before{content:\"\\F748\"}.mdi-ubuntu:before{content:\"\\F548\"}.mdi-umbraco:before{content:\"\\F549\"}.mdi-umbrella:before{content:\"\\F54A\"}.mdi-umbrella-outline:before{content:\"\\F54B\"}.mdi-undo:before{content:\"\\F54C\"}.mdi-undo-variant:before{content:\"\\F54D\"}.mdi-unfold-less-horizontal:before{content:\"\\F54E\"}.mdi-unfold-less-vertical:before{content:\"\\F75F\"}.mdi-unfold-more-horizontal:before{content:\"\\F54F\"}.mdi-unfold-more-vertical:before{content:\"\\F760\"}.mdi-ungroup:before{content:\"\\F550\"}.mdi-unity:before{content:\"\\F6AE\"}.mdi-untappd:before{content:\"\\F551\"}.mdi-update:before{content:\"\\F6AF\"}.mdi-upload:before{content:\"\\F552\"}.mdi-upload-network:before{content:\"\\F6F5\"}.mdi-usb:before{content:\"\\F553\"}.mdi-vector-arrange-above:before{content:\"\\F554\"}.mdi-vector-arrange-below:before{content:\"\\F555\"}.mdi-vector-circle:before{content:\"\\F556\"}.mdi-vector-circle-variant:before{content:\"\\F557\"}.mdi-vector-combine:before{content:\"\\F558\"}.mdi-vector-curve:before{content:\"\\F559\"}.mdi-vector-difference:before{content:\"\\F55A\"}.mdi-vector-difference-ab:before{content:\"\\F55B\"}.mdi-vector-difference-ba:before{content:\"\\F55C\"}.mdi-vector-intersection:before{content:\"\\F55D\"}.mdi-vector-line:before{content:\"\\F55E\"}.mdi-vector-point:before{content:\"\\F55F\"}.mdi-vector-polygon:before{content:\"\\F560\"}.mdi-vector-polyline:before{content:\"\\F561\"}.mdi-vector-radius:before{content:\"\\F749\"}.mdi-vector-rectangle:before{content:\"\\F5C6\"}.mdi-vector-selection:before{content:\"\\F562\"}.mdi-vector-square:before{content:\"\\F001\"}.mdi-vector-triangle:before{content:\"\\F563\"}.mdi-vector-union:before{content:\"\\F564\"}.mdi-verified:before{content:\"\\F565\"}.mdi-vibrate:before{content:\"\\F566\"}.mdi-video:before{content:\"\\F567\"}.mdi-video-off:before{content:\"\\F568\"}.mdi-video-switch:before{content:\"\\F569\"}.mdi-view-agenda:before{content:\"\\F56A\"}.mdi-view-array:before{content:\"\\F56B\"}.mdi-view-carousel:before{content:\"\\F56C\"}.mdi-view-column:before{content:\"\\F56D\"}.mdi-view-dashboard:before{content:\"\\F56E\"}.mdi-view-day:before{content:\"\\F56F\"}.mdi-view-grid:before{content:\"\\F570\"}.mdi-view-headline:before{content:\"\\F571\"}.mdi-view-list:before{content:\"\\F572\"}.mdi-view-module:before{content:\"\\F573\"}.mdi-view-parallel:before{content:\"\\F727\"}.mdi-view-quilt:before{content:\"\\F574\"}.mdi-view-sequential:before{content:\"\\F728\"}.mdi-view-stream:before{content:\"\\F575\"}.mdi-view-week:before{content:\"\\F576\"}.mdi-vimeo:before{content:\"\\F577\"}.mdi-vine:before{content:\"\\F578\"}.mdi-violin:before{content:\"\\F60F\"}.mdi-visualstudio:before{content:\"\\F610\"}.mdi-vk:before{content:\"\\F579\"}.mdi-vk-box:before{content:\"\\F57A\"}.mdi-vk-circle:before{content:\"\\F57B\"}.mdi-vlc:before{content:\"\\F57C\"}.mdi-voice:before{content:\"\\F5CB\"}.mdi-voicemail:before{content:\"\\F57D\"}.mdi-volume-high:before{content:\"\\F57E\"}.mdi-volume-low:before{content:\"\\F57F\"}.mdi-volume-medium:before{content:\"\\F580\"}.mdi-volume-minus:before{content:\"\\F75D\"}.mdi-volume-mute:before{content:\"\\F75E\"}.mdi-volume-off:before{content:\"\\F581\"}.mdi-volume-plus:before{content:\"\\F75C\"}.mdi-vpn:before{content:\"\\F582\"}.mdi-walk:before{content:\"\\F583\"}.mdi-wallet:before{content:\"\\F584\"}.mdi-wallet-giftcard:before{content:\"\\F585\"}.mdi-wallet-membership:before{content:\"\\F586\"}.mdi-wallet-travel:before{content:\"\\F587\"}.mdi-wan:before{content:\"\\F588\"}.mdi-washing-machine:before{content:\"\\F729\"}.mdi-watch:before{content:\"\\F589\"}.mdi-watch-export:before{content:\"\\F58A\"}.mdi-watch-import:before{content:\"\\F58B\"}.mdi-watch-vibrate:before{content:\"\\F6B0\"}.mdi-water:before{content:\"\\F58C\"}.mdi-water-off:before{content:\"\\F58D\"}.mdi-water-percent:before{content:\"\\F58E\"}.mdi-water-pump:before{content:\"\\F58F\"}.mdi-watermark:before{content:\"\\F612\"}.mdi-waves:before{content:\"\\F78C\"}.mdi-weather-cloudy:before{content:\"\\F590\"}.mdi-weather-fog:before{content:\"\\F591\"}.mdi-weather-hail:before{content:\"\\F592\"}.mdi-weather-lightning:before{content:\"\\F593\"}.mdi-weather-lightning-rainy:before{content:\"\\F67D\"}.mdi-weather-night:before{content:\"\\F594\"}.mdi-weather-partlycloudy:before{content:\"\\F595\"}.mdi-weather-pouring:before{content:\"\\F596\"}.mdi-weather-rainy:before{content:\"\\F597\"}.mdi-weather-snowy:before{content:\"\\F598\"}.mdi-weather-snowy-rainy:before{content:\"\\F67E\"}.mdi-weather-sunny:before{content:\"\\F599\"}.mdi-weather-sunset:before{content:\"\\F59A\"}.mdi-weather-sunset-down:before{content:\"\\F59B\"}.mdi-weather-sunset-up:before{content:\"\\F59C\"}.mdi-weather-windy:before{content:\"\\F59D\"}.mdi-weather-windy-variant:before{content:\"\\F59E\"}.mdi-web:before{content:\"\\F59F\"}.mdi-webcam:before{content:\"\\F5A0\"}.mdi-webhook:before{content:\"\\F62F\"}.mdi-webpack:before{content:\"\\F72A\"}.mdi-wechat:before{content:\"\\F611\"}.mdi-weight:before{content:\"\\F5A1\"}.mdi-weight-kilogram:before{content:\"\\F5A2\"}.mdi-whatsapp:before{content:\"\\F5A3\"}.mdi-wheelchair-accessibility:before{content:\"\\F5A4\"}.mdi-white-balance-auto:before{content:\"\\F5A5\"}.mdi-white-balance-incandescent:before{content:\"\\F5A6\"}.mdi-white-balance-iridescent:before{content:\"\\F5A7\"}.mdi-white-balance-sunny:before{content:\"\\F5A8\"}.mdi-widgets:before{content:\"\\F72B\"}.mdi-wifi:before{content:\"\\F5A9\"}.mdi-wifi-off:before{content:\"\\F5AA\"}.mdi-wii:before{content:\"\\F5AB\"}.mdi-wiiu:before{content:\"\\F72C\"}.mdi-wikipedia:before{content:\"\\F5AC\"}.mdi-window-close:before{content:\"\\F5AD\"}.mdi-window-closed:before{content:\"\\F5AE\"}.mdi-window-maximize:before{content:\"\\F5AF\"}.mdi-window-minimize:before{content:\"\\F5B0\"}.mdi-window-open:before{content:\"\\F5B1\"}.mdi-window-restore:before{content:\"\\F5B2\"}.mdi-windows:before{content:\"\\F5B3\"}.mdi-wordpress:before{content:\"\\F5B4\"}.mdi-worker:before{content:\"\\F5B5\"}.mdi-wrap:before{content:\"\\F5B6\"}.mdi-wrench:before{content:\"\\F5B7\"}.mdi-wunderlist:before{content:\"\\F5B8\"}.mdi-xaml:before{content:\"\\F673\"}.mdi-xbox:before{content:\"\\F5B9\"}.mdi-xbox-controller:before{content:\"\\F5BA\"}.mdi-xbox-controller-battery-alert:before{content:\"\\F74A\"}.mdi-xbox-controller-battery-empty:before{content:\"\\F74B\"}.mdi-xbox-controller-battery-full:before{content:\"\\F74C\"}.mdi-xbox-controller-battery-low:before{content:\"\\F74D\"}.mdi-xbox-controller-battery-medium:before{content:\"\\F74E\"}.mdi-xbox-controller-battery-unknown:before{content:\"\\F74F\"}.mdi-xbox-controller-off:before{content:\"\\F5BB\"}.mdi-xda:before{content:\"\\F5BC\"}.mdi-xing:before{content:\"\\F5BD\"}.mdi-xing-box:before{content:\"\\F5BE\"}.mdi-xing-circle:before{content:\"\\F5BF\"}.mdi-xml:before{content:\"\\F5C0\"}.mdi-yammer:before{content:\"\\F788\"}.mdi-yeast:before{content:\"\\F5C1\"}.mdi-yelp:before{content:\"\\F5C2\"}.mdi-yin-yang:before{content:\"\\F67F\"}.mdi-youtube-play:before{content:\"\\F5C3\"}.mdi-zip-box:before{content:\"\\F5C4\"}.mdi-18px.mdi-set,.mdi-18px.mdi:before{font-size:18px}.mdi-24px.mdi-set,.mdi-24px.mdi:before{font-size:24px}.mdi-36px.mdi-set,.mdi-36px.mdi:before{font-size:36px}.mdi-48px.mdi-set,.mdi-48px.mdi:before{font-size:48px}.mdi-dark:before{color:rgba(0,0,0,0.54)}.mdi-dark.mdi-inactive:before{color:rgba(0,0,0,0.26)}.mdi-light:before{color:#fff}.mdi-light.mdi-inactive:before{color:rgba(255,255,255,0.3)}.mdi-rotate-45:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.mdi-rotate-90:before{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.mdi-rotate-135:before{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.mdi-rotate-180:before{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.mdi-rotate-225:before{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.mdi-rotate-270:before{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.mdi-rotate-315:before{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.mdi-flip-h:before{-webkit-transform:scaleX(-1);transform:scaleX(-1);-webkit-filter:FlipH;filter:FlipH;-ms-filter:\"FlipH\"}.mdi-flip-v:before{-webkit-transform:scaleY(-1);transform:scaleY(-1);-webkit-filter:FlipV;filter:FlipV;-ms-filter:\"FlipV\"}.mdi-spin:before{-webkit-animation:mdi-spin 2s infinite linear;animation:mdi-spin 2s infinite linear}@-webkit-keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@font-face {\n\tfont-family: 'Pe-icon-7-stroke';\n\tsrc:url('/static/fonts/Pe-icon-7-stroke.eot?d7yf1v');\n\tsrc:url('/static/fonts/Pe-icon-7-stroke.eot?#iefixd7yf1v') format('embedded-opentype'),\n\t\turl('/static/fonts/Pe-icon-7-stroke.woff?d7yf1v') format('woff'),\n\t\turl('/static/fonts/Pe-icon-7-stroke.ttf?d7yf1v') format('truetype'),\n\t\turl('/static/fonts/Pe-icon-7-stroke.svg?d7yf1v#Pe-icon-7-stroke') format('svg');\n\tfont-weight: normal;\n\tfont-style: normal;\n}[class^=\"pe-7s-\"], [class*=\" pe-7s-\"] {\n\tdisplay: inline-block;\n\tfont-family: 'Pe-icon-7-stroke';\n\tspeak: none;\n\tfont-style: normal;\n\tfont-weight: normal;\n\tfont-variant: normal;\n\ttext-transform: none;\n\tline-height: 1;\n\n\t/* Better Font Rendering =========== */\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}.pe-7s-album:before {\n\tcontent: \"\\e6aa\";\n}.pe-7s-arc:before {\n\tcontent: \"\\e6ab\";\n}.pe-7s-back-2:before {\n\tcontent: \"\\e6ac\";\n}.pe-7s-bandaid:before {\n\tcontent: \"\\e6ad\";\n}.pe-7s-car:before {\n\tcontent: \"\\e6ae\";\n}.pe-7s-diamond:before {\n\tcontent: \"\\e6af\";\n}.pe-7s-door-lock:before {\n\tcontent: \"\\e6b0\";\n}.pe-7s-eyedropper:before {\n\tcontent: \"\\e6b1\";\n}.pe-7s-female:before {\n\tcontent: \"\\e6b2\";\n}.pe-7s-gym:before {\n\tcontent: \"\\e6b3\";\n}.pe-7s-hammer:before {\n\tcontent: \"\\e6b4\";\n}.pe-7s-headphones:before {\n\tcontent: \"\\e6b5\";\n}.pe-7s-helm:before {\n\tcontent: \"\\e6b6\";\n}.pe-7s-hourglass:before {\n\tcontent: \"\\e6b7\";\n}.pe-7s-leaf:before {\n\tcontent: \"\\e6b8\";\n}.pe-7s-magic-wand:before {\n\tcontent: \"\\e6b9\";\n}.pe-7s-male:before {\n\tcontent: \"\\e6ba\";\n}.pe-7s-map-2:before {\n\tcontent: \"\\e6bb\";\n}.pe-7s-next-2:before {\n\tcontent: \"\\e6bc\";\n}.pe-7s-paint-bucket:before {\n\tcontent: \"\\e6bd\";\n}.pe-7s-pendrive:before {\n\tcontent: \"\\e6be\";\n}.pe-7s-photo:before {\n\tcontent: \"\\e6bf\";\n}.pe-7s-piggy:before {\n\tcontent: \"\\e6c0\";\n}.pe-7s-plugin:before {\n\tcontent: \"\\e6c1\";\n}.pe-7s-refresh-2:before {\n\tcontent: \"\\e6c2\";\n}.pe-7s-rocket:before {\n\tcontent: \"\\e6c3\";\n}.pe-7s-settings:before {\n\tcontent: \"\\e6c4\";\n}.pe-7s-shield:before {\n\tcontent: \"\\e6c5\";\n}.pe-7s-smile:before {\n\tcontent: \"\\e6c6\";\n}.pe-7s-usb:before {\n\tcontent: \"\\e6c7\";\n}.pe-7s-vector:before {\n\tcontent: \"\\e6c8\";\n}.pe-7s-wine:before {\n\tcontent: \"\\e6c9\";\n}.pe-7s-cloud-upload:before {\n\tcontent: \"\\e68a\";\n}.pe-7s-cash:before {\n\tcontent: \"\\e68c\";\n}.pe-7s-close:before {\n\tcontent: \"\\e680\";\n}.pe-7s-bluetooth:before {\n\tcontent: \"\\e68d\";\n}.pe-7s-cloud-download:before {\n\tcontent: \"\\e68b\";\n}.pe-7s-way:before {\n\tcontent: \"\\e68e\";\n}.pe-7s-close-circle:before {\n\tcontent: \"\\e681\";\n}.pe-7s-id:before {\n\tcontent: \"\\e68f\";\n}.pe-7s-angle-up:before {\n\tcontent: \"\\e682\";\n}.pe-7s-wristwatch:before {\n\tcontent: \"\\e690\";\n}.pe-7s-angle-up-circle:before {\n\tcontent: \"\\e683\";\n}.pe-7s-world:before {\n\tcontent: \"\\e691\";\n}.pe-7s-angle-right:before {\n\tcontent: \"\\e684\";\n}.pe-7s-volume:before {\n\tcontent: \"\\e692\";\n}.pe-7s-angle-right-circle:before {\n\tcontent: \"\\e685\";\n}.pe-7s-users:before {\n\tcontent: \"\\e693\";\n}.pe-7s-angle-left:before {\n\tcontent: \"\\e686\";\n}.pe-7s-user-female:before {\n\tcontent: \"\\e694\";\n}.pe-7s-angle-left-circle:before {\n\tcontent: \"\\e687\";\n}.pe-7s-up-arrow:before {\n\tcontent: \"\\e695\";\n}.pe-7s-angle-down:before {\n\tcontent: \"\\e688\";\n}.pe-7s-switch:before {\n\tcontent: \"\\e696\";\n}.pe-7s-angle-down-circle:before {\n\tcontent: \"\\e689\";\n}.pe-7s-scissors:before {\n\tcontent: \"\\e697\";\n}.pe-7s-wallet:before {\n\tcontent: \"\\e600\";\n}.pe-7s-safe:before {\n\tcontent: \"\\e698\";\n}.pe-7s-volume2:before {\n\tcontent: \"\\e601\";\n}.pe-7s-volume1:before {\n\tcontent: \"\\e602\";\n}.pe-7s-voicemail:before {\n\tcontent: \"\\e603\";\n}.pe-7s-video:before {\n\tcontent: \"\\e604\";\n}.pe-7s-user:before {\n\tcontent: \"\\e605\";\n}.pe-7s-upload:before {\n\tcontent: \"\\e606\";\n}.pe-7s-unlock:before {\n\tcontent: \"\\e607\";\n}.pe-7s-umbrella:before {\n\tcontent: \"\\e608\";\n}.pe-7s-trash:before {\n\tcontent: \"\\e609\";\n}.pe-7s-tools:before {\n\tcontent: \"\\e60a\";\n}.pe-7s-timer:before {\n\tcontent: \"\\e60b\";\n}.pe-7s-ticket:before {\n\tcontent: \"\\e60c\";\n}.pe-7s-target:before {\n\tcontent: \"\\e60d\";\n}.pe-7s-sun:before {\n\tcontent: \"\\e60e\";\n}.pe-7s-study:before {\n\tcontent: \"\\e60f\";\n}.pe-7s-stopwatch:before {\n\tcontent: \"\\e610\";\n}.pe-7s-star:before {\n\tcontent: \"\\e611\";\n}.pe-7s-speaker:before {\n\tcontent: \"\\e612\";\n}.pe-7s-signal:before {\n\tcontent: \"\\e613\";\n}.pe-7s-shuffle:before {\n\tcontent: \"\\e614\";\n}.pe-7s-shopbag:before {\n\tcontent: \"\\e615\";\n}.pe-7s-share:before {\n\tcontent: \"\\e616\";\n}.pe-7s-server:before {\n\tcontent: \"\\e617\";\n}.pe-7s-search:before {\n\tcontent: \"\\e618\";\n}.pe-7s-film:before {\n\tcontent: \"\\e6a5\";\n}.pe-7s-science:before {\n\tcontent: \"\\e619\";\n}.pe-7s-disk:before {\n\tcontent: \"\\e6a6\";\n}.pe-7s-ribbon:before {\n\tcontent: \"\\e61a\";\n}.pe-7s-repeat:before {\n\tcontent: \"\\e61b\";\n}.pe-7s-refresh:before {\n\tcontent: \"\\e61c\";\n}.pe-7s-add-user:before {\n\tcontent: \"\\e6a9\";\n}.pe-7s-refresh-cloud:before {\n\tcontent: \"\\e61d\";\n}.pe-7s-paperclip:before {\n\tcontent: \"\\e69c\";\n}.pe-7s-radio:before {\n\tcontent: \"\\e61e\";\n}.pe-7s-note2:before {\n\tcontent: \"\\e69d\";\n}.pe-7s-print:before {\n\tcontent: \"\\e61f\";\n}.pe-7s-network:before {\n\tcontent: \"\\e69e\";\n}.pe-7s-prev:before {\n\tcontent: \"\\e620\";\n}.pe-7s-mute:before {\n\tcontent: \"\\e69f\";\n}.pe-7s-power:before {\n\tcontent: \"\\e621\";\n}.pe-7s-medal:before {\n\tcontent: \"\\e6a0\";\n}.pe-7s-portfolio:before {\n\tcontent: \"\\e622\";\n}.pe-7s-like2:before {\n\tcontent: \"\\e6a1\";\n}.pe-7s-plus:before {\n\tcontent: \"\\e623\";\n}.pe-7s-left-arrow:before {\n\tcontent: \"\\e6a2\";\n}.pe-7s-play:before {\n\tcontent: \"\\e624\";\n}.pe-7s-key:before {\n\tcontent: \"\\e6a3\";\n}.pe-7s-plane:before {\n\tcontent: \"\\e625\";\n}.pe-7s-joy:before {\n\tcontent: \"\\e6a4\";\n}.pe-7s-photo-gallery:before {\n\tcontent: \"\\e626\";\n}.pe-7s-pin:before {\n\tcontent: \"\\e69b\";\n}.pe-7s-phone:before {\n\tcontent: \"\\e627\";\n}.pe-7s-plug:before {\n\tcontent: \"\\e69a\";\n}.pe-7s-pen:before {\n\tcontent: \"\\e628\";\n}.pe-7s-right-arrow:before {\n\tcontent: \"\\e699\";\n}.pe-7s-paper-plane:before {\n\tcontent: \"\\e629\";\n}.pe-7s-delete-user:before {\n\tcontent: \"\\e6a7\";\n}.pe-7s-paint:before {\n\tcontent: \"\\e62a\";\n}.pe-7s-bottom-arrow:before {\n\tcontent: \"\\e6a8\";\n}.pe-7s-notebook:before {\n\tcontent: \"\\e62b\";\n}.pe-7s-note:before {\n\tcontent: \"\\e62c\";\n}.pe-7s-next:before {\n\tcontent: \"\\e62d\";\n}.pe-7s-news-paper:before {\n\tcontent: \"\\e62e\";\n}.pe-7s-musiclist:before {\n\tcontent: \"\\e62f\";\n}.pe-7s-music:before {\n\tcontent: \"\\e630\";\n}.pe-7s-mouse:before {\n\tcontent: \"\\e631\";\n}.pe-7s-more:before {\n\tcontent: \"\\e632\";\n}.pe-7s-moon:before {\n\tcontent: \"\\e633\";\n}.pe-7s-monitor:before {\n\tcontent: \"\\e634\";\n}.pe-7s-micro:before {\n\tcontent: \"\\e635\";\n}.pe-7s-menu:before {\n\tcontent: \"\\e636\";\n}.pe-7s-map:before {\n\tcontent: \"\\e637\";\n}.pe-7s-map-marker:before {\n\tcontent: \"\\e638\";\n}.pe-7s-mail:before {\n\tcontent: \"\\e639\";\n}.pe-7s-mail-open:before {\n\tcontent: \"\\e63a\";\n}.pe-7s-mail-open-file:before {\n\tcontent: \"\\e63b\";\n}.pe-7s-magnet:before {\n\tcontent: \"\\e63c\";\n}.pe-7s-loop:before {\n\tcontent: \"\\e63d\";\n}.pe-7s-look:before {\n\tcontent: \"\\e63e\";\n}.pe-7s-lock:before {\n\tcontent: \"\\e63f\";\n}.pe-7s-lintern:before {\n\tcontent: \"\\e640\";\n}.pe-7s-link:before {\n\tcontent: \"\\e641\";\n}.pe-7s-like:before {\n\tcontent: \"\\e642\";\n}.pe-7s-light:before {\n\tcontent: \"\\e643\";\n}.pe-7s-less:before {\n\tcontent: \"\\e644\";\n}.pe-7s-keypad:before {\n\tcontent: \"\\e645\";\n}.pe-7s-junk:before {\n\tcontent: \"\\e646\";\n}.pe-7s-info:before {\n\tcontent: \"\\e647\";\n}.pe-7s-home:before {\n\tcontent: \"\\e648\";\n}.pe-7s-help2:before {\n\tcontent: \"\\e649\";\n}.pe-7s-help1:before {\n\tcontent: \"\\e64a\";\n}.pe-7s-graph3:before {\n\tcontent: \"\\e64b\";\n}.pe-7s-graph2:before {\n\tcontent: \"\\e64c\";\n}.pe-7s-graph1:before {\n\tcontent: \"\\e64d\";\n}.pe-7s-graph:before {\n\tcontent: \"\\e64e\";\n}.pe-7s-global:before {\n\tcontent: \"\\e64f\";\n}.pe-7s-gleam:before {\n\tcontent: \"\\e650\";\n}.pe-7s-glasses:before {\n\tcontent: \"\\e651\";\n}.pe-7s-gift:before {\n\tcontent: \"\\e652\";\n}.pe-7s-folder:before {\n\tcontent: \"\\e653\";\n}.pe-7s-flag:before {\n\tcontent: \"\\e654\";\n}.pe-7s-filter:before {\n\tcontent: \"\\e655\";\n}.pe-7s-file:before {\n\tcontent: \"\\e656\";\n}.pe-7s-expand1:before {\n\tcontent: \"\\e657\";\n}.pe-7s-exapnd2:before {\n\tcontent: \"\\e658\";\n}.pe-7s-edit:before {\n\tcontent: \"\\e659\";\n}.pe-7s-drop:before {\n\tcontent: \"\\e65a\";\n}.pe-7s-drawer:before {\n\tcontent: \"\\e65b\";\n}.pe-7s-download:before {\n\tcontent: \"\\e65c\";\n}.pe-7s-display2:before {\n\tcontent: \"\\e65d\";\n}.pe-7s-display1:before {\n\tcontent: \"\\e65e\";\n}.pe-7s-diskette:before {\n\tcontent: \"\\e65f\";\n}.pe-7s-date:before {\n\tcontent: \"\\e660\";\n}.pe-7s-cup:before {\n\tcontent: \"\\e661\";\n}.pe-7s-culture:before {\n\tcontent: \"\\e662\";\n}.pe-7s-crop:before {\n\tcontent: \"\\e663\";\n}.pe-7s-credit:before {\n\tcontent: \"\\e664\";\n}.pe-7s-copy-file:before {\n\tcontent: \"\\e665\";\n}.pe-7s-config:before {\n\tcontent: \"\\e666\";\n}.pe-7s-compass:before {\n\tcontent: \"\\e667\";\n}.pe-7s-comment:before {\n\tcontent: \"\\e668\";\n}.pe-7s-coffee:before {\n\tcontent: \"\\e669\";\n}.pe-7s-cloud:before {\n\tcontent: \"\\e66a\";\n}.pe-7s-clock:before {\n\tcontent: \"\\e66b\";\n}.pe-7s-check:before {\n\tcontent: \"\\e66c\";\n}.pe-7s-chat:before {\n\tcontent: \"\\e66d\";\n}.pe-7s-cart:before {\n\tcontent: \"\\e66e\";\n}.pe-7s-camera:before {\n\tcontent: \"\\e66f\";\n}.pe-7s-call:before {\n\tcontent: \"\\e670\";\n}.pe-7s-calculator:before {\n\tcontent: \"\\e671\";\n}.pe-7s-browser:before {\n\tcontent: \"\\e672\";\n}.pe-7s-box2:before {\n\tcontent: \"\\e673\";\n}.pe-7s-box1:before {\n\tcontent: \"\\e674\";\n}.pe-7s-bookmarks:before {\n\tcontent: \"\\e675\";\n}.pe-7s-bicycle:before {\n\tcontent: \"\\e676\";\n}.pe-7s-bell:before {\n\tcontent: \"\\e677\";\n}.pe-7s-battery:before {\n\tcontent: \"\\e678\";\n}.pe-7s-ball:before {\n\tcontent: \"\\e679\";\n}.pe-7s-back:before {\n\tcontent: \"\\e67a\";\n}.pe-7s-attention:before {\n\tcontent: \"\\e67b\";\n}.pe-7s-anchor:before {\n\tcontent: \"\\e67c\";\n}.pe-7s-albums:before {\n\tcontent: \"\\e67d\";\n}.pe-7s-alarm:before {\n\tcontent: \"\\e67e\";\n}.pe-7s-airplay:before {\n\tcontent: \"\\e67f\";\n}.rotating {\n  display: inline-block;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transform: rotateX(0) rotateY(0) rotateZ(0);\n  transform: rotateX(0) rotateY(0) rotateZ(0);\n  transition: 0.5s;\n  -webkit-transform-origin-x: 50%;\n}.rotating.flip {\n  position: relative;\n}.rotating .front, .rotating .back {\n  left: 0;\n  top: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}.rotating .front {\n  position: absolute;\n  display: inline-block;\n  -webkit-transform: translate3d(0,0,1px);\n  transform: translate3d(0,0,1px);\n}.rotating.flip .front {\n  z-index: 1;\n}.rotating .back {\n  display: block;\n  opacity: 0;\n}.rotating.spin {\n  -webkit-transform: rotate(360deg) scale(0);\n  transform: rotate(360deg) scale(0);\n}.rotating.flip .back {\n  z-index: 2;\n  display: block;\n  opacity: 1;\n  \n  -webkit-transform: rotateY(180deg) translate3d(0,0,0);\n  transform: rotateY(180deg) translate3d(0,0,0);\n}.rotating.flip.up .back {\n  -webkit-transform: rotateX(180deg) translate3d(0,0,0);\n  transform: rotateX(180deg) translate3d(0,0,0);\n}.rotating.flip.cube .front {\n  -webkit-transform: translate3d(0,0,100px) scale(0.9,0.9);\n  transform: translate3d(0,0,100px) scale(0.85,0.85);\n}.rotating.flip.cube .back {\n  -webkit-transform: rotateY(180deg) translate3d(0,0,100px) scale(0.9,0.9);\n  transform: rotateY(180deg) translate3d(0,0,100px) scale(0.85,0.85);\n}.rotating.flip.cube.up .back {\n  -webkit-transform: rotateX(180deg) translate3d(0,0,100px) scale(0.9,0.9);\n  transform: rotateX(180deg) translate3d(0,0,100px) scale(0.85,0.85);\n}/*!\n * Waves v0.7.5\n * http://fian.my.id/Waves \n * \n * Copyright 2014-2016 Alfiana E. Sibuea and other contributors \n * Released under the MIT license \n * https://github.com/fians/Waves/blob/master/LICENSE \n */.waves-effect {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}.waves-effect .waves-ripple {\n  position: absolute;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  margin-top: -50px;\n  margin-left: -50px;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.2);\n  background: radial-gradient(rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n  transition: all 0.5s ease-out;\n  transition-property: opacity, -webkit-transform;\n  transition-property: transform, opacity;\n  transition-property: transform, opacity, -webkit-transform;\n  -webkit-transform: scale(0) translate(0, 0);\n  transform: scale(0) translate(0, 0);\n  pointer-events: none;\n}.waves-effect.waves-light .waves-ripple {\n  background: rgba(255, 255, 255, 0.4);\n  background: radial-gradient(rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.waves-effect.waves-classic .waves-ripple {\n  background: rgba(0, 0, 0, 0.2);\n}.waves-effect.waves-classic.waves-light .waves-ripple {\n  background: rgba(255, 255, 255, 0.4);\n}.waves-notransition {\n  transition: none !important;\n}.waves-button,\n.waves-circle {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-mask-image: -webkit-radial-gradient(circle, #ffffff 100%, #000000 100%);\n}.waves-button,\n.waves-button:hover,\n.waves-button:visited,\n.waves-button-input {\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  color: inherit;\n  background-color: rgba(0, 0, 0, 0);\n  font-size: 1em;\n  line-height: 1em;\n  text-align: center;\n  text-decoration: none;\n  z-index: 1;\n}.waves-button {\n  padding: 0.85em 1.1em;\n  border-radius: 0.2em;\n}.waves-button-input {\n  margin: 0;\n  padding: 0.85em 1.1em;\n}.waves-input-wrapper {\n  border-radius: 0.2em;\n  vertical-align: bottom;\n}.waves-input-wrapper.waves-button {\n  padding: 0;\n}.waves-input-wrapper .waves-button-input {\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}.waves-circle {\n  text-align: center;\n  width: 2.5em;\n  height: 2.5em;\n  line-height: 2.5em;\n  border-radius: 50%;\n}.waves-float {\n  -webkit-mask-image: none;\n  box-shadow: 0px 1px 1.5px 1px rgba(0, 0, 0, 0.12);\n  transition: all 300ms;\n}.waves-float:active {\n  box-shadow: 0px 8px 20px 1px rgba(0, 0, 0, 0.3);\n}.waves-block {\n  display: block;\n}/*___________________________________________________________________________________________________________________________________________________\n _ jquery.mb.components                                                                                                                             _\n _                                                                                                                                                  _\n _ file: mb.YTPlayer.css                                                                                                                            _\n _ last modified: 19/08/14 19.57                                                                                                                    _\n _                                                                                                                                                  _\n _ Open Lab s.r.l., Florence - Italy                                                                                                                _\n _                                                                                                                                                  _\n _ email: matteo@open-lab.com                                                                                                                       _\n _ site: http://pupunzi.com                                                                                                                         _\n _       http://open-lab.com                                                                                                                        _\n _ blog: http://pupunzi.open-lab.com                                                                                                                _\n _ Q&A:  http://jquery.pupunzi.com                                                                                                                  _\n _                                                                                                                                                  _\n _ Licences: MIT, GPL                                                                                                                               _\n _    http://www.opensource.org/licenses/mit-license.php                                                                                            _\n _    http://www.gnu.org/licenses/gpl.html                                                                                                          _\n _                                                                                                                                                  _\n _ Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);                                                                                              _\n ___________________________________________________________________________________________________________________________________________________*/@charset\"UTF-8\";/* Generated by Font Squirrel (http://www.fontsquirrel.com) on May 30, 2013 */@font-face {\n  font-family: 'ytpregular';\n  src: url('ytp-regular.eot');\n}@font-face {\n  font-family: 'ytpregular';\n  src: url(data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAA5sABEAAAAAFCAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABgAAAABwAAAAcZ9iuNUdERUYAAAGcAAAAHQAAACAAdAAET1MvMgAAAbwAAABJAAAAYHUMUrFjbWFwAAACCAAAAKkAAAGKn5XycWN2dCAAAAK0AAAANgAAADYNLQohZnBnbQAAAuwAAAGxAAACZVO0L6dnYXNwAAAEoAAAAAgAAAAIAAAAEGdseWYAAASoAAAGVQAAB4jz86dSaGVhZAAACwAAAAAzAAAANgbKONpoaGVhAAALNAAAACAAAAAkESQLXGhtdHgAAAtUAAAAVAAAARxOmwVwbG9jYQAAC6gAAAAjAAAAkFoEXRRtYXhwAAALzAAAACAAAAAgAWoB625hbWUAAAvsAAAA+wAAAeok3Eb+cG9zdAAADOgAAADAAAABN99tv1lwcmVwAAANqAAAALkAAAFY3I6ikndlYmYAAA5kAAAABgAAAAbHMlGnAAAAAQAAAADMPaLPAAAAAM3Nk7QAAAAAzc13sXjaY2BkYGDgA2IJBhBgYmAEQjcgZgHzGAAHTAB5AAAAeNpjYGbZwDiBgZWBhdWY5SwDA8MsCM10liGNKQ3IB0rBASMDEgj1DvdjcGDgfcDAlvYPqJJVldEZpoZVkuUZkFJgYAQAUUULewAAAHjaY2BgYGaAYBkGRgYQaAHyGMF8FoYMIC3GIAAUYQOyeBkUGKIYqhgWKHAp6CvEP2D4/x+sAyTuyJAIFGeAizP+//r/8f/D//f+n/HA8oHo/WcKblDzsQBGoOkwSUYmIMGErgDiRLyAhZWNnYOTi5uHl49fQFBIWERUTFxCUkpaRhYiLyevoKikrKKqpq6hqaWto6unb2BoZGxiambOQF1gQZYuAIQnH4IAAAAAAAAAAAABegEnAHEAswC9AOAA5QD+ARcBIwBdAHIBtgBcAGAAZgByAI8AogErAbIAUwBEBREAAHjaXVG7TltBEN0NDwOBxNggOdoUs5mQxnuhBQnE1Y1iZDuF5QhpN3KRi3EBH0CBRA3arxmgoaRImwYhF0h8Qj4hEjNriKI0Ozuzc86ZM0vKkap36WvPU+ckkMLdBs02/U5ItbMA96Tr642MtIMHWmxm9Mp1+/4LBpvRlDtqAOU9bykPGU07gVq0p/7R/AqG+/wf8zsYtDTT9NQ6CekhBOabcUuD7xnNussP+oLV4WIwMKSYpuIuP6ZS/rc052rLsLWR0byDMxH5yTRAU2ttBJr+1CHV83EUS5DLprE2mJiy/iQTwYXJdFVTtcz42sFdsrPoYIMqzYEH2MNWeQweDg8mFNK3JMosDRH2YqvECBGTHAo55dzJ/qRA+UgSxrxJSjvjhrUGxpHXwKA2T7P/PJtNbW8dwvhZHMF3vxlLOvjIhtoYEWI7YimACURCRlX5hhrPvSwG5FL7z0CUgOXxj3+dCLTu2EQ8l7V1DjFWCHp+29zyy4q7VrnOi0J3b6pqqNIpzftezr7HA54eC8NBY8Gbz/v+SoH6PCyuNGgOBEN6N3r/orXqiKu8Fz6yJ9O/sVoAAAAAAQAB//8AD3jaTZVrbBxXFcfvufNe72Nmdx77tmfHO2N76117784OTr154YAbR7RQuUQhttoSuXZKFQVKKYqgiFJAgkpIkVClIn8opSomjXY3VHHTFldEIYpay1hR+ID4Bha27FoIEQGpd8Idu4lY7c6eOfee//2f3+zeizAaQwif4iYRgwRUbgGqjLYFNvVxtcVzfxltM5iGqMUEaS5ItwU+vTPahiBPFFMpmoo5hnv8XnjFn+Um7/xmjF1GCLHoPf+fgsUVEYcSKIcGkYbaWYxKLZ3bgGa50qpACQ0NeyYoYILaDTqpurUK2FZBUYlJY8ukEc0egLpbo+kY8O/BQcx2dvwP2Fh6/Q+Gl19fyroubHmer7rpjHllPZ/NKB+tp2/4/TzxSx0zo/74uUY29vJZOEHIfng4lzz7cjyXzn/jJwqCwCOLdj2iPSP3F/hUAHF3v+Cviee5DIqhJDLRACLoPGpHECq1M7Sd5iDZ/W6zQW8mu9Ecql7SI6xYaiOpnxCydwPNWqWJ/tSSjY1mqtqU5ZYNpWal2pJiGy0XSi1bVuKX1Fyh1GuMoJYeUeJvy/GEVbTpfTOjHJRVzUim0tlcwekbKD1QrgR5M97OV8nIyMjQsKPUEKWGNEVFFBwqEs/yHMEVFMM1PIc4FhiWQVxHcxjD0zzXEkgbmHe5G1eA9T955453xd+B9tbpi6vj10+fvj6+evH0Fju7vPDU5szVY8euzmw+tXABv7kEov/v33WOv+v/C8LG9M2xD19/EquzCyuHVuY6R25Obz35+odw4NDKwuzWHAK86q9x21wKYYQkjFeZ3M5f/TUmw6Qo12P+38Wf0zEZpVABlVANfQu1owHXXMD1AdIyQhvNgeou2b1LAuhAkVwyExRps/ppAE230qrTX1MrEVXil5W4qlm9thMAMpR2MtVHAbXMnBJvZ8oVGjdZ5XK6u6cwNExqdNJ9dnm4D+8eIeYeM7hH0b3H9bcQuczdeH75ef+TxTveO/5tuDK2Mrs5d+HmzQtzm7MrbP6ZqxMrrz2+vf34aysTV5+5iN9YhMi51W93Tiz5/wFp+ujy/MntGXx+dfrjqflrO788Ob989MaMP716+Nr8FOpCjbvnw032BUrm82gKfQc10SJaAwwZGINHEUrksaEndI3XCppBavWaU7Nrda/u7QfPsnmBF1ReK4NjCxbkgVRJdW/MdmiyjHkhCgKvGkrNq+uGngPLUDXVioJTcGxONWguENOIYmkq1lQqaDu2q1AqKi6qRh6CN0uqhlkn1WIwt1Z3FTqH6lt2kWLkqZpQ2F1H4D3X1CzFUkCp1R8EVaeKGr3mgXpyd3OKZTcgioMi3qImqA2FaFSYrkHd7BYESnSMdqAx1HNgg/6pG0Bo95RAGehqoNAuaRHR90wGdXyJtkAJ1DxSDVQCfS8ocui+EohqagNjFroniyLAOYbBgvSQxuXxiUSCGQXReJBnjafhbf6xBs8P9ZclLLJdTJfdL3bLRsgd50Nf52P7JIWjInYqFuZhUGErucF0Qj/zNJtPGArDz7EYFi0chvSpw8C/mJRgRVLfgrEf7RvowhyjJ3JPfPlX/h8N/6fZryX7bh/pJsPj4QLX9Ra89NL3QQkljmOqnognU6HcxKkoI/JsaJ8cDcfCqZAMC2cfFeSoHu+WFEmWzIQqx8PVmCThSFqPKqLIsgxJx0QYZt1iocjgfrPbjIoiltkXxzxTlE5FVTL1zb7YmTOSzXGiEBU0ZgHzXexjd9HklDtTc2P7iR4/Wmqk/jGhfZXjZW1bYFVp3y01G+ocrh/K9VST3+05OUsaEnAYGKZRfWIpDQaXT2Ej2/vCl1S5nNe7jHq5eCAlM7rOpFx8PP1Zf/NzCUdkpXjUhHmdfdi/Xv31D6WccPAIDjNMmPnBzC+ErAipZzPf++LkQyGRhTDEpCNkbmLpz8892zmE3+8swq1YODIqf2Z7lO8RdJHn7RS8kpY6r0qhAg7xXIHnhViu+zBDbhcx16UOfGVgaGkoXe6LhwS+h7NgSa+vR7ESZvPyq6VUqN+SC0ZSTPm3oETGoxGIh/p60w3naIyJ/Gywf9CMnnAemR3524hT5DErxOwBhR55COMw3e+u0T0tOEsR0JMx+NBHftD/AJ+D/f7v/TW+9t+P+Bo9e/7vNYz+By6FsKkAAAB42mNgZGBgYGRwbI8IWhzPb/OVQZ6DAQTOni3fCKP/+/x7yrOBNRTI5WBgAokCAG3mDbAAeNpjYGRgYFX9t5eBgeftf5//WTwbGIAiKMAdAJycBph42mN6w+DCwcDAAMIsZ8D0HhBNLIap52D478fBwHQRyvbBpZ7nLYMtKeZjt5OJhxT1TKsYGFhDETTjcSAG0gyPoRgozigIpL0hNEiOBcgFAEBoNC142mNgYNCBwjoccALDBEY9RhsgPIMMmZcRhHtIhkcA9pQspAAAAQAAAEcBVAALAAAAAAACAAEAAgAWAAABAACTAAAAAHjalZCxTgJBFEXPApJoYYgF9VZUSIAFTdDCnmiIgsTKsASQuGiCu0YaCr4OfomKOzsTCHRmMzPn3blz38sCFyzJ4uXOgbKWZY+8KssZLqk7zkp9cJyjSOT4jD9WjvPSt46vKHoFx2txyfGGqnfPO18kyohSGjBjJPqRFmqPmWolWkZ9o0uHZ/EkfTNgTo0KVX017ujRps+TyDqvT7xW9U/UV1Vz9ZryrQn8o8QOL1JsdVA/5IwZpv7f/YsKTW50O1PqpzKNZyw1UnKov2c9dbkD7c1/zdhXFSrNdIz3HbuaJFH1KM9CZyDN3N3SoiFupfP66mbOYAd8k0EGAHjabc05TwJhHITxZ0BBBc/P4IkI7y4sh0dBsosHKiqHeLUiiTE0FH56Xdl/6TS/ZIoZUszzM+ad/3IOSilNmm122GWPfQ4ocEiRI0qUcXj4VKgSUKNOgybHnHDKGSER7Xjjgkuu6HDNDbd0ueOeB3r0GTDkkRFPPPPCK29a0KIyympJy1pRTnmtak3r2tCmtjLjz+/ph5edfU2cc2Fiy/3px4Xpmb5ZMatmYNbMutkwm2Yr0W8nBnOj+OcXVDk0PnjaRc67DoJAEAVQFuT9fqsJCSZ2+w12QkNjrCCx9w+sbSy19DsGK/9Ob3RZujk3k7nzZp8bsbvSkXXoR8Yew9gavN9QNHSUHTFch4oMfuoV0uqGNL4nv25emq3yHzzADwVcwOsFHMCtBWzAWQlYgJ0ImIA1rRmAeRbQAWM6vQD04A9GgXglRBo4Kh+19gJGYDgzBqOnZALGO8kUTLaSGZhWkjmYrSULMA8kS7CYi5ZgKTlQxr/W1F5aAAAAAAFRp8cxAAA=) format('woff'),\n  url('ytp-regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n\n}.mb_YTPlayer :focus {\n  outline: 0;\n}.mb_YTPlayer{\n  display:block;\n  -webkit-transform:translateZ(0);\n          transform:translateZ(0);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-perspective: 1000;\n          perspective: 1000;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform:translate3d(0,0,0);\n          transform:translate3d(0,0,0);\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  box-sizing: border-box;\n}.mb_YTPlayer.fullscreen{\n  display:block!important;\n  position: fixed!important;\n  width: 100%!important;\n  height: 100%!important;\n  top: 0!important;\n  left: 0!important;\n  margin: 0!important;\n  border: none !important;\n}.mb_YTPlayer.fullscreen .mbYTP_wrapper{\n  opacity:1 !important;\n}.mbYTP_wrapper iframe {\n  max-width: 4000px !important;\n}.inline_YTPlayer{\n  margin-bottom: 20px;\n  vertical-align:top;\n  position:relative;\n  left:0;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 0 0 5px rgba(0,0,0,.7);\n  background: rgba(0,0,0,.5);\n}.inline_YTPlayer img{\n  border: none!important;\n  -webkit-transform: none!important;\n  transform: none!important;\n  margin:0!important;\n  padding:0!important\n}/*CONTROL BAR*/.mb_YTPBar .ytpicon{\n  font-size: 20px;\n  font-family: 'ytpregular';\n}.mb_YTPBar .mb_YTPUrl.ytpicon{\n  font-size: 30px;\n}.mb_YTPBar{\n\n  transition: opacity 1s;\n  -moz-transition: opacity 1s;\n  -webkit-transition: opacity 1s;\n  -o-transition: opacity 1s;\n\n  display:block;\n  width:100%;\n  height:10px;\n  padding:5px;\n  background:#333;\n  position:fixed;\n  bottom:0;\n  left:0;\n  -moz-box-sizing:padding-box;\n  -webkit-box-sizing:border-box;\n  text-align:left;\n  z-index: 1000;\n  font: 14px/16px sans-serif;\n  color:white;\n  opacity:.1;\n}.mb_YTPBar.visible, .mb_YTPBar:hover{\n  opacity:1;\n}.mb_YTPBar .buttonBar{\n\n  transition: all 1s;\n  -moz-transition: all 1s;\n  -webkit-transition: all 1s;\n  -o-transition: all 1s;\n\n  background:transparent;\n  font:12px/14px Calibri;\n  position:absolute;\n  top:-30px;\n  left:0;\n  padding: 5px;\n  width:100%;\n  -o-box-sizing: border-box;\n  box-sizing: border-box;\n}.mb_YTPBar:hover .buttonBar{\n  background: rgba(0,0,0,0.4);\n}.mb_YTPBar span{\n  display:inline-block;\n  font:16px/20px Calibri, sans-serif;\n  position:relative;\n  width: 30px;\n  height: 25px;\n  vertical-align: middle;\n}.mb_YTPBar span.mb_YTPTime{\n  width: 130px;\n}.mb_YTPBar span.mb_YTPUrl,.mb_YTPBar span.mb_OnlyYT {\n  position: absolute;\n  width: auto;\n  display:block;\n  top:6px;\n  right:10px;\n  cursor: pointer;\n}.mb_YTPBar span.mb_YTPUrl img{\n  width: 60px;\n}.mb_YTPBar span.mb_OnlyYT {\n  left:185px;\n  right: auto;\n}.mb_YTPBar span.mb_OnlyYT img{\n  width: 25px;\n}.mb_YTPBar span.mb_YTPUrl a{\n  color:white;\n}.mb_YTPPlaypause,.mb_YTPlayer .mb_YTPPlaypause img{\n  cursor:pointer;\n}.mb_YTPMuteUnmute{\n  cursor:pointer;\n}/*PROGRESS BAR*/.mb_YTPProgress{\n  height:10px;\n  width:100%;\n  background:#222;\n  bottom:0;\n  left:0;\n}.mb_YTPLoaded{\n  height:10px;\n  width:0;\n  background:#444;\n  left:0;\n}.mb_YTPseekbar{\n  height:10px;\n  width:0;\n  background:#fff;\n  bottom:0;\n  left:0;\n  box-shadow: rgba(82, 82, 82, 0.47) 1px 1px 3px;\n}.YTPOverlay{\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform-style: \"flat\";\n  box-sizing: border-box;\n}/*RASTER OVERLAY*/.YTPOverlay.raster{\n  background: url(\"../images/raster.png\");\n}.YTPOverlay.raster.retina{\n  background: url(\"../images/raster@2x.png\");\n}.YTPOverlay.raster-dot{\n  background: url(\"../images/raster_dot.png\");\n}.YTPOverlay.raster-dot.retina{\n  background: url(\"../images/raster_dot@2x.png\");\n}/* cyrillic-ext */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }/* cyrillic */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }/* vietnamese */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n  }/* latin-ext */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }/* latin */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v13/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }/* cyrillic-ext */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gTD_vx3rCubqg.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }/* cyrillic */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3g3D_vx3rCubqg.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }/* vietnamese */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gbD_vx3rCubqg.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n  }/* latin-ext */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gfD_vx3rCubqg.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }/* latin */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }/* cyrillic-ext */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gTD_vx3rCubqg.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }/* cyrillic */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3g3D_vx3rCubqg.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }/* vietnamese */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gbD_vx3rCubqg.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n  }/* latin-ext */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gfD_vx3rCubqg.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }/* latin */@font-face {\n    font-family: 'Montserrat';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Montserrat Bold'), local('Montserrat-Bold'), url(https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gnD_vx3rCs.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }/* cyrillic-ext */@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n  }/* cyrillic */@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }/* greek-ext */@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }/* greek */@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }/* vietnamese */@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n  }/* latin-ext */@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n  }/* latin */@font-face {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n  }/*\n  1. BASIC\n  2. HELPER\n  3. BOOTSTRAP RESET\n  4. NAVBAR\n  5. HOME\n  6. SERVICES\n  7. ABOUT US\n  8. WEBSITE DESCRIPTION\n  9. PRICING BOX\n  10. TEAM\n  11. OUR PROCESS\n  12. PEOPLE SAYS\n  13. GET STARTED\n  14. BLOG\n  15. CONTACT\n  16. FOOTER\n  17. RESPONSIVE\n  *//* ==========\n     1.BASIC\n     ========== */body, html {\n      font-family: 'Montserrat', sans-serif;\n      overflow-x: hidden !important;\n      position: relative;\n      max-width: 100vw;\n  }a,\n  a:hover,\n  a:focus,\n  button {\n      text-decoration: none !important;\n      outline: none !important;\n  }p {\n      font-size: .9em;\n      line-height: 2em;\n      font-family: 'Roboto', sans-serif;\n  }h1,h2,h3,h4,h5,h6 {\n      font-family: 'Montserrat', sans-serif;\n  }.h1,\n  h1 {\n      font-size: 36px;\n  }.h2,\n  h2 {\n      font-size: 30px;\n  }.h3,\n  h3 {\n      font-size: 24px;\n  }.h4,\n  h4 {\n      font-size: 18px;\n  }.h5,\n  h5 {\n      font-size: 14px;\n  }.h6,\n  h6 {\n      font-size: 12px;\n  }b {\n      font-weight: 500;\n  }::-moz-selection {\n    background-color: #2e3138;\n    color: #fff; }::selection {\n    background-color: #2e3138;\n    color: #fff; }/*====================\n    2.HELPER\n    ===================*/.margin-t-20 {\n      margin-top: 0px;\n  }.margin-t-30 {\n      margin-top: 30px;\n  }.margin-t-50 {\n      margin-top: 50px;\n  }.margin-b-0 {\n      margin-bottom: 0px;\n  }.padding-t-15 {\n      padding-top: 15px;\n  }.padding-t-30 {\n      padding-top: 30px;\n  }.padding-b-10 {\n      padding-bottom: 10px;\n  }.height-100vh {\n      height: 100vh;\n  }.vertical-content {\n      display: -moz-flex;\n      display: flex;\n      align-items: center;\n      -webkit-align-items: center;\n      justify-content: center;\n      -webkit-justify-content: center;\n      flex-direction: row;\n      padding-top: 5%;\n  }.bg-overlay {\n      background: linear-gradient(to bottom, rgb(5, 5, 8), #1f2741);\n      opacity: 0.9;\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      top: 0;\n  }.bg-overlay-light {\n      background-color: rgba(0, 0, 0, 0.5);\n  }.section {\n      padding-top: 80px;\n      padding-bottom: 80px;\n      position: relative;\n  }.section-lg {\n      padding: 100px 0;\n  }.section-title {\n      letter-spacing: 2px;\n      margin-bottom: 0px;\n      padding-bottom: 1rem;\n      line-height: 1;\n      font-size: 2.5rem;\n      font-weight: 700;\n      color: #0e212b;\n  }.section-title-border {\n      width: 50px;\n      height: 2px;\n      margin-right: auto;\n      margin-left: auto;\n  }.section-subtitle {\n      letter-spacing: 0.02em;\n  }.svg-pattern {\n    width: 100%;\n    position: relative;\n  }iframe {\n      max-width: 100%;\n  }.hover-effect {\n      transition: all .3s ease-in-out;\n  }.hover-effect:hover {\n      -webkit-transform: translateY(-1rem);\n              transform: translateY(-1rem);\n  }/*----BACKGROUND COLOR-----*/.bg-gray {\n      background-color: #f7f7f7;\n  }.bg-white {\n      background-color: #fff;\n  }.cookie-banner > div {\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    left: 0px;\n    z-index: 1000000;\n  }.cookie-banner > div > div{\n    position: absolute;\n    width: 60%;\n    min-width: 300px;\n    margin: 0px auto;\n    background: white;\n    padding: 20px;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }.bg-dark {\n      background-color: #393f4f !important;\n  }.bg-light {\n      background-color: #fafbfe!important;\n  }/*=====================\n    3. BOOTSTRAP RESET\n    ======================*//*--Text color--- */.text-muted {\n      color: #091E42 !important;\n  }.text-white {\n      color: #f1f1f1 !important;\n      font-family: 'Montserrat', sans-serif;\n      font-weight: 700;\n  }.text-gray {\n      color: #091E42;\n  }.text-dark {\n      color: #212121 !important;\n  }/*====Buttons=======*/.btn {\n      padding: 10px 22px;\n      transition: all 0.5s;\n      box-shadow: none !important;\n  }.btn:hover {\n      -webkit-transform: translateY(-5px);\n              transform: translateY(-5px);\n  }.btn-rounded {\n      border-radius: 30px;\n  }.btn-custom {\n      border: 1px solid;\n      color: #2e3138;\n      transition: all 0.3s;\n      font-size: 14px;\n  }.btn-custom:hover,\n  .btn-custom:hover,\n  .open\n  {\n    border: 1px solid !important;\n    color: #D80000 !important;\n  }.btn-custom:focus,\n  .btn-custom:active,\n  .btn-custom.active,\n  .btn-custom.focus,\n  .btn-custom:active,\n  .btn-custom:focus,\n  .open\n   > .dropdown-toggle.btn-custom {\n      border: 1px solid !important;\n      color: #f3f3f3 !important;\n  }.btn-bg-white {\n      background-color: #fff !important;\n      transition: all 0.3s;\n      border: 2px solid #fff;\n      color: #000 !important;\n      font-size: 14px;\n  }.read-btn {\n      font-size: 15px;\n  }.read-btn:hover {\n      color: #212529 !important;\n  }/*======================\n    4.NAVBAR\n    ======================*/.logo {\n      width: 200px;\n  }.navbar-custom {\n      padding: 20px 0px;\n      width: 100%;\n      border-radius: 0px;\n      z-index: 999;\n      margin-bottom: 0px;\n      transition: all 0.5s ease-in-out;\n  }.sticky-wrapper {\n      position: absolute;\n      width: 100%;\n  }.navbar-nav {\n      /* margin-left: 140px; */\n      margin-right: 0;\n      border-bottom: none;\n  }.navbar-custom .navbar-brand {\n      text-transform: uppercase;\n      color: #fff !important;\n      font-weight: 700;\n      letter-spacing: 2px;\n      height: auto;\n      font-family: 'Montserrat', sans-serif;\n  }.navbar-custom .navbar-nav li a {\n      color: rgba(255, 255, 255, 0.6);\n      font-size: 15px;\n      background-color: transparent !important;\n      padding: 15px 0;\n      margin: 0 45px;\n      transition: all 0.4s;\n  }.navbar-custom .navbar-nav li:last-child a {\n    margin-right: 165px;\n  }.navbar-custom .navbar-nav li a:hover,\n  .navbar-custom .navbar-nav li a:focus,\n  .navbar-custom .navbar-nav li a:active {\n      color: #fff;\n  }.navbar-custom .navbar-nav li.active a {\n      color: #fff;\n  }.is-sticky .navbar-custom {\n      margin-top: 0px;\n      padding: 10px 0px;\n      background-color: #272a33;\n      box-shadow: 0 10px 33px rgba(0, 0, 0, .1);\n  }.navbar-toggle {\n      font-size: 24px;\n      margin-top: 0px;\n      margin-bottom: 0px;\n      color: #ffffff;\n  }.navbar-custom .btn-custom {\n      margin-top: 4px;\n      margin-bottom: 4px;\n  }.nav .open>a,\n  .nav .open>a:focus,\n  .nav .open>a:hover {\n      background-color: transparent;\n      border-color: #337ab7;\n  }/*---Navbar-White--*/.navbar-custom.navbar-white {\n      background-color: #fff;\n      padding: 10px 0;\n      box-shadow: 0 10px 33px rgba(0, 0, 0, .1);\n  }.navbar-custom.navbar-white .navbar-nav li a,\n  .navbar-custom.navbar-white .navbar-brand,\n  .navbar-white .navbar-toggle {\n      color: #393f4f !important;\n  }/*=======================================\n            5.HOME\n    =====================================*/.bg-home {\n      background: url(\"../images/bg-home.jpg\");\n      background-repeat: no-repeat;\n      background-size: cover;\n      background-position: center;\n  }.home-title {\n      font-size: 50px;\n      line-height: 55px;\n      font-family: 'Montserrat', sans-serif;\n      font-weight: 700;\n  }.display-table-cell {\n      display: table-cell;\n      vertical-align: middle;\n  }.display-table {\n      display: table;\n      width: 100%;\n      height: 100%;\n  }.home-up {\n      z-index: 10;\n      position: relative;\n  }.play-btn {\n      border: 2px solid;\n      border-radius: 50%;\n      width: 60px;\n      height: 60px;\n      display: block;\n      font-size: 30px;\n      margin-right: auto;\n      margin-left: auto;\n      line-height: 60px;\n      margin-top: 10px;\n      text-align: center;\n  }.play-shadow {\n      border-radius: 50%;\n      border: 1px solid transparent;\n      width: 82px;\n      height: 82px;\n      margin: 20px auto;\n  }.home-desc {\n      font-size: 1.2em;\n      max-width: 75%;\n      margin: 0 auto;\n      font-family: \"Roboto\", sans-serif;\n      color: #fff;\n      line-height: 1.5em;\n      padding-bottom: 4%;\n  \n  }/* ------------- Demo 1 bg-pattern ------------- */.home-half {\n      padding-bottom: 150px;\n      padding-top: 220px;\n  }.bg-pattern-effect{\n      position: absolute;\n      bottom: 0px;\n      left: 0px;\n      right: 0px;\n  }/*-------Demo 3 Rgistartion form ------*/.home-registration-form .form-heading {\n      margin-bottom: 25px;\n  }.home-registration-form {\n      padding: 15px 32px 32px 32px;\n      border-radius: 3px;\n      box-shadow: 0px 0px 3px 0px #000000;\n  }.home-subtitle-width-100 {\n      max-width: 100%;\n  }.small-text {\n      font-size: 14px;\n  }.home-btn-width {\n      width: 100%;\n  }/*----Demo 4 Dashboard image ----*/.home-cell-bottom {\n      display: table-cell;\n      vertical-align: bottom;\n  }.home-padding-t-150 {\n      padding-top: 150px;\n  }/*---Demo 5 Subscribe -----*/.subscribe-form input {\n      padding: 15px 20px;\n      width: 100%;\n      font-size: 17px;\n      color: #4c5667 !important;\n      border: none;\n      outline: none !important;\n      padding-right: 180px;\n      padding-left: 30px;\n      background-color: rgba(255, 255, 255, 0.85);\n      border-radius: 30px;\n  }.subscribe-form button {\n      position: absolute;\n      text-transform: uppercase;\n      top: 6px;\n      right: 8px;\n      outline: none !important;\n      border-radius: 30px;\n      font-size: 16px;\n      padding: 9px 30px;\n  }.subscribe-form form {\n      position: relative;\n      max-width: 600px;\n      margin: 0px auto;\n  }/*----Demo 7 Home with video --------*/.frame-border {\n      border: 9px solid rgba(0, 0, 0, 0.3);\n      border-radius: 5px 5px 5px 5px;\n  }/*---Demo 8 Animated ---*/.slidero {\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      position: absolute;\n      z-index: 100;\n      left: 0;\n      right: 0;\n  }/* ------- Demo 9 wave animation --------- */.wave-effect {\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      height: 150px;\n      overflow: hidden;\n  }.shape-one {\n      z-index: 15;\n      opacity: 0.5;\n  }.shape-two {\n      z-index: 10;\n      opacity: 0.75;\n  }.shape-three {\n      z-index: 5;\n  }.wave {\n      position: absolute;\n      left: 0;\n      width: 200%;\n      height: 100%;\n      background-repeat: repeat no-repeat;\n      background-position: 0 bottom;\n      -webkit-transform-origin: center bottom;\n              transform-origin: center bottom;\n  }.waves-shape {\n      position: absolute;\n      bottom: -1px;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n  }.wave-one {\n      background-size: 50% 100px;\n  }.wave-anim .wave-one {\n    animation: move-wave 3s;\n     -webkit-animation: move-wave 3s;\n     -webkit-animation-delay: 1s;\n     animation-delay: 1s;\n  }.wave-two {\n      background-size: 50% 120px;\n  }.wave-anim .wave-two {\n      -webkit-animation: move_wave 10s linear infinite;\n              animation: move_wave 10s linear infinite;\n  }.wave-three {\n      background-size: 50% 100px;\n  }.wave-anim .wave-three {\n      -webkit-animation: move_wave 15s linear infinite;\n              animation: move_wave 15s linear infinite;\n  }@-webkit-keyframes move_wave {\n      0% {\n          -webkit-transform: translateX(0) translateZ(0) scaleY(1);\n                  transform: translateX(0) translateZ(0) scaleY(1)\n      }\n      50% {\n          -webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55);\n                  transform: translateX(-25%) translateZ(0) scaleY(0.55)\n      }\n      100% {\n          -webkit-transform: translateX(-50%) translateZ(0) scaleY(1);\n                  transform: translateX(-50%) translateZ(0) scaleY(1)\n      }\n  }@keyframes move_wave {\n      0% {\n          -webkit-transform: translateX(0) translateZ(0) scaleY(1);\n                  transform: translateX(0) translateZ(0) scaleY(1)\n      }\n      50% {\n          -webkit-transform: translateX(-25%) translateZ(0) scaleY(0.55);\n                  transform: translateX(-25%) translateZ(0) scaleY(0.55)\n      }\n      100% {\n          -webkit-transform: translateX(-50%) translateZ(0) scaleY(1);\n                  transform: translateX(-50%) translateZ(0) scaleY(1)\n      }\n  }/*======================================\n       6. SERVICES\n  ========================================*/.services-box {\n      padding: 15px 10px;\n  }.services-box i {\n      font-size: 32px;\n      height: 68px;\n      width: 68px;\n      background-color: #fff;\n      border-radius: 50%;\n      box-shadow: 0 0 1.25rem rgba(108,118,134,.1)!important;\n      line-height: 68px;\n      margin-bottom: 15px;\n  }.services-box:hover i {\n      background-color: #f23900 !important;\n      color: #ffffff !important;\n      transition: all .3s ease-in-out;\n  }/*=====================================\n       7. ABOUT US\n  ======================================*/.features-box h3 {\n      margin-bottom: 25px;\n      margin-top: 0;\n      line-height: 32px;\n      font-family: \"Montserrat\", sans-serif;\n      font-weight: 700;\n  }.features-item-list li:before {\n      content: \"\";\n      border-radius: 50%;\n      width: 7px;\n      height: 7px;\n      position: absolute;\n      left: 0;\n      top: 14px;\n  }.features-item-list li {\n      position: relative;\n      line-height: 24px;\n      font-size: 15px;\n      padding: 7px 0 7px 20px;\n  }.features-img {\n      max-width: 1000px;\n      margin: 0 0 0 auto;\n  }/*=====================================\n       8. WEBSITE DESCRIPTION\n  ======================================*/.bg-web-desc{\n      background: url(\"../static/images/img-1.jpg\");\n      background-repeat: no-repeat;\n      background-size: cover;\n      background-position: center;\n  }/*======================================\n      9.  PRICING BOX\n  ========================================*/.pricing-box {\n      padding: 50px 40px 50px 40px;\n      border: 1px solid #ecf0f5;\n      border-radius: 8px;\n      box-shadow: 0 0 1.25rem rgba(108,118,134,.1)!important;\n  }.pricing-box h4 {\n      font-size: 15px;\n  }.pricing-box h1 {\n      font-size: 36px;\n      padding-top: 5px;\n  }.pricing-border {\n      width: 100%;\n      height: 1px;\n      margin-top: 35px;\n      background-color: #ecf0f5;\n  }.price-active {\n      box-shadow: 0 0rem 4rem rgba(0,0,0,.1)!important;\n  }.plan-features p {\n      padding-top: 5px;\n  }/*======================================\n           10. TEAM\n  ========================================*/.team-box {\n      border-bottom: 1px solid #ecf0f5;\n  }.team-name {\n      font-size: 16px;\n      padding-top: 20px;\n      margin-bottom: 7px;\n  }.team-designation {\n      font-size: 13px;\n      color: #a8aeb4;\n  }/*=======================================\n       11. OUR PROCESS\n  =========================================*/.process-box i {\n      font-size: 48px;\n      line-height: 72px;\n  }.plan-line:before {\n      content: \"\";\n      border: 1px dashed #e0e0e0;\n      position: absolute;\n      width: 67%;\n      left: 65%;\n      top: 50px;\n  }.process-left-icon {\n      content: \"\";\n      position: absolute;\n      top: 10px;\n      background-color: #000;\n      border-radius: 50%;\n      height: 50px;\n      width: 50px;\n  }.process-left-icon-1 i,\n  .process-left-icon-2 i {\n      font-size: 35px;\n      border-radius: 50%;\n      position: absolute;\n      top: 83px;\n      color: #fff;\n      z-index: 9;\n  }.process-left-icon-1 i {\n      left: 63%;\n  }.process-left-icon-2 i {\n      left: 30%;\n  }/*=======================================\n         12. PEOPLE SAYS\n  =========================================*/.testimonial-decs {\n      border: 1px solid #ecf0f5;\n      border-radius: 8px;\n      transition: all .3s ease-in-out;\n      box-shadow: 0 0 1.25rem rgba(108,118,134,.1)!important;\n  }.testimonial-box img {\n      margin: -40px auto;\n      height: 68px;\n      width: 68px;\n  }.testimonial-decs p {\n      padding: 60px 25px 30px;\n      line-height: 24px;\n      font-style: italic;\n  }/*=====================================\n       13. GET STARTED\n  ======================================*/.bg-get-start{\n      background: url(\"../static/images/img-2.jpg\");\n      background-repeat: no-repeat;\n      background-size: cover;\n      background-position: center;\n  }/*=======================================\n         14. BLOG\n  =========================================*/.blog-title {\n      color: #212529;\n      transition: all 0.5s;\n  }/*======================================\n      15. CONTACT\n  =======================================*/.form-control {\n      margin-bottom: 20px;\n      box-shadow: none !important;\n      height: 50px;\n      padding-left: 20px;\n      border: 1px solid #e0e0e0;\n      font-size: 14px;\n  }.form-control:focus {\n      border-color: #ccc;\n  }textarea.form-control {\n      height: auto;\n      padding-top: 13.5px;\n  }.error {\n      margin: 8px 0px;\n      display: none;\n      color: red;\n  }#ajaxsuccess {\n      font-size: 16px;\n      width: 100%;\n      display: none;\n      clear: both;\n      margin: 8px 0px;\n  }.error_message {\n      padding: 10px;\n      background-color: #fdf0d3;\n      margin-bottom: 20px;\n      text-align: center;\n      font-size: 14px;\n  }.contact-loader {\n      display: none;\n  }#success_page {\n      text-align: center;\n      margin-bottom: 20px;\n      background-color: #c5ffdf;\n      padding: 18px;\n  }#success_page h4 {\n      color: #0dba26;\n      font-size: 22px;\n  }/*======================================\n         16. FOOTER\n  ========================================*/.social-icon {\n      border: 3px solid #dadcdf;\n      border-radius: 50%;\n      color: #dadcdf !important;\n      width: 48px;\n      height: 48px;\n      display: block;\n      font-size: 16px;\n      line-height: 42px;\n      text-align: center;\n  }.cta {\n      padding: 20px 0;\n  }.social-icon:hover i {\n      transition: all 0.5s;\n  }.footer {\n      padding: 50px 0;\n      background-color: #272a33;\n  }.footer h4 {\n      color: #ffffff;\n  }.footer-list li a {\n      color: #98a0aa;\n      padding-top: 8px;\n      display: inline-block;\n      font-size: 14px;\n      transition: all .3s ease-in-out;\n  }.footer-list li a:hover {\n      color: #dce6f3;\n  }.contact-title {\n      font-size: 20px;\n  }.contact-detail {\n      padding-left: 25px;\n      font-size: 12px;\n  }.subscribe {\n      position: relative;\n      width: 100%;\n      margin-top: 15px;\n      margin-bottom: 25px;\n  }.subscribe input {\n      height: 40px;\n      background-color: #2e313a !important;\n      box-shadow: none !important;\n      border: none;\n      padding-right: 50px;\n      color: #fff !important;\n  }.subscribe .submit {\n      position: absolute;\n      top: 0;\n      right: 0;\n      font-size: 20px;\n      width: 50px;\n      line-height: 45px;\n      text-align: center;\n      color: #acacac !important;\n  }.footer-alt-border {\n      background-color: #f5f5f5;\n      height: 1px;\n      width: 100%;\n  }.footer-alt {\n      padding: 15px 0;\n      background-color: #2e313a;\n  }.copy-rights {\n      margin-bottom: 0;\n      line-height: 36px;\n      color: #2f3139;\n  }/*=====================================\n      17. EXTRA PAGES\n  ====================================*/.bg-account-pages {\n      background: linear-gradient(to right, #512DA8, #711e72);\n      opacity: 0.9;\n  }.account-home-btn{\n      position: absolute;\n      top: 18px;\n      right: 28px;\n      z-index: 1;\n  }.account-pages-logo{\n      letter-spacing: 2px;\n  }.account-card form .form-control{\n      height: 45px;\n  }.account-card form label{\n      font-size: 15px;\n  }.account-card .custom-control-input:checked~.custom-control-label::before{\n      background: #f23900;\n      border-color: #f23900;\n  }.account-card .alert{\n      font-size: 14px;\n  }/*=====================================\n      18. RESPONSIVE\n  ====================================*/@media (max-width: 1024px) {\n      .navbar-custom .navbar-nav {\n          margin-left: 0;\n      }\n      .home-half .slidero {\n          top: 80%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          position: absolute;\n          z-index: 100;\n          left: 0;\n          right: 0;\n      }\n      .home-half {\n          padding-bottom: 100px;\n          padding-top: 120px;\n      }\n      .home-padding-t-150 {\n          padding-top: 110px;\n      }\n      /*.navbar-custom {\n          margin-top: 0px;\n          padding: 10px 0px !important;\n          background-color: #272a33 !important;\n          box-shadow: 0 10px 33px rgba(0, 0, 0, .1);\n          color: #fff !important;\n      }*/\n  \n      .navbar-white {\n          margin-top: 0px;\n          padding: 10px 0px !important;\n          background-color: #fff !important;\n          box-shadow: 0 10px 33px rgba(0, 0, 0, .1);\n          color: #fff !important;\n      }\n  \n       .navbar-white .navbar-toggler {\n          color: #393f4f !important;\n      }\n      .navbar-custom .navbar-nav li a {\n          transition: all 0.4s;\n          /*margin: 0px;*/\n      }\n      .navbar-custom>.container-fluid {\n          width: 100%;\n      }\n      .navbar-custom .navbar-nav li.active a {\n          color: #fff !important;\n          border-color: transparent;\n      }\n      .navbar-custom>.container {\n          width: 90%;\n      }\n      .navbar-toggler {\n          font-size: 24px;\n          margin-top: 0px;\n          margin-bottom: 0px;\n          /*color: #fff !important;*/\n      }\n      .login-btn {\n          padding-left: 10px;\n      }\n      .navbar-custom .navbar-brand {\n          line-height: 24px;\n      }\n  \n      .bg-pattern-effect{\n          bottom: -4px\n      }\n      .home-title {\n          font-size: 32px;\n          line-height: 48px;\n      }\n      .vertical-content {\n          display: inherit;\n      }\n      .team-box {\n          margin-top: 45px;\n      }\n      .footer-alt .float-none {\n          float: none !important;\n          text-align: center;\n      }\n      .features-img {\n          margin-top: 30px;\n      }\n  \n      .float-left.pull-none {\n          float: none !important;\n          text-align: center;\n      }\n  \n      .float-right.pull-none {\n          float: none !important;\n          text-align: center;\n      }\n  \n      .pricing-box {\n          margin-top: 30px;\n      }\n  }@media (max-width: 991px) and (min-width: 200px) {\n      .plan-line:before {\n          content: \"\";\n          display: none;\n      }\n      .process-left-icon-1 i,\n      .process-left-icon-2 i {\n          display: none;\n      }\n  }@media (max-width: 768px) {\n      .mobile-only .sticky-wrapper {\n        position: relative;\n        display: inline-block;\n      }\n      .wave-one, .wave-three {\n          background-size: 50% 50px;\n      }\n  \n      .wave-two {\n          background-size: 50% 70px;\n      }\n      .bg-pattern-effect{\n          bottom: -7px\n      }\n      .social {\n          margin-top: 0;\n      }\n      .social-icon {\n          margin-bottom: 5px;\n      }\n      .testimonial-box {\n          margin-top: 80px;\n      }\n      .contact-title {\n          text-align: left;\n      }\n  }@media (max-height: 420px) {\n      .navbar-collapse {\n          max-height: 200px;\n          overflow-y: auto;\n      }\n  }/*==================================\n  STYLE SWITHER - Demo purpose only\n  ==================================*/#style-switcher div h3 {\n      font-size: 16px;\n      margin: 8px 3px 12px;\n  }#style-switcher {\n      background: none repeat scroll 0 0 #ffff;\n      box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.08);\n      left: -189px;\n      position: fixed;\n      top: 17%;\n      width: 189px;\n      z-index: 9999;\n      padding: 10px 5px;\n  }#style-switcher div {\n      padding: 5px 10px;\n  }#style-switcher .bottom {\n      background: none repeat scroll 0 0 #FFFFFF;\n      color: #252525;\n      padding: 0;\n  }#style-switcher .bottom a.settings {\n      background: none repeat scroll 0 0 #2b2424;\n      box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 0.08);\n      display: block;\n      height: 41px;\n      position: absolute;\n      right: -40px;\n      top: 0;\n      width: 40px;\n      padding: 3px;\n  }#style-switcher .bottom a {\n      text-decoration: none;\n  }#style-switcher .bottom a.settings i {\n      margin-left: 5px;\n      color: #ffffff;\n      font-size: 24px;\n      position: absolute;\n  }ul.pattern {\n      list-style: none outside none;\n      margin: 0 0 0px;\n      overflow: hidden;\n      padding: 0;\n      border-radius: 0px;\n  }ul.pattern li {\n      float: left;\n      margin: 2px;\n  }ul.pattern li a {\n      cursor: pointer;\n      display: block;\n      height: 35px;\n      width: 35px;\n      border-radius: 50%;\n      margin: 5px;\n  }ul.pattern .color1 {\n      background-color: #f23900;\n  }ul.pattern .color2 {\n      background-color: #1bbc9d;\n  }ul.pattern .color3 {\n      background-color: #f85f89;\n  }ul.pattern .color4 {\n      background-color: #00e6e6;\n  }ul.pattern .color5 {\n      background-color: #704fff;\n  }ul.pattern .color6 {\n      background-color: #2762da;\n  }ul.pattern .color7 {\n      background-color: #f09105;\n  }ul.pattern .color8 {\n      background-color: #f6cb42;\n  }@media only screen and (max-width: 479px) {\n      #style-switcher {\n          display: none;\n      }\n  }/*mega menu*/.mega-menu p {\n      font-family: 'Montserrat', sans-serif;\n  }.mega-menu .dropdown-content {\n      display: none;\n      position: fixed;\n      right: 0;\n      top: 77px;\n      width: 680px;\n      max-width: 100%;\n      background: white;\n  }.mega-menu .dropdown-content .content {\n      padding: 10px 0;\n      max-height: calc(100vh - 120px);\n      overflow: scroll;\n  }.mega-menu .dropdown-content .item {\n      display: flex;\n      padding-left: 30px;\n      padding-right: 120px;\n      align-items: center;\n      /* margin-bottom: 20px; */\n  }.navbar-custom .navbar-nav li a.item:hover {\n      background-color:#f1f1f1!important;\n  }.mega-menu .dropdown-content .item:hover{\n      background: #f1f1f1!important;\n  }.mega-menu .dropdown-content .item i{\n      padding: 0 30px;\n  }.mega-menu .dropdown-content .item h4 {\n      color: #1e293b;\n      font-weight: bold;\n  }.mega-menu .dropdown-content .item p{\n      margin-bottom: 0;\n      font-size: 14px;\n      color: #1e293b;\n      line-height: 18px;\n      font-weight: 300;\n  }.mega-menu li.dropdown:hover .dropdown-content {\n      display: block;\n  }.mega-menu li.dropdown .dropdown-content ul.header{\n      padding-left: 0;\n      list-style: none;\n      display: inline-block;\n      width: 100%;\n      height: 50px;\n      line-height: 50px;\n      background-color: #2e313a;\n      color: white;\n  }.mega-menu li.dropdown .dropdown-content ul.header li{\n      display: inline-block;\n      margin: 0px 35px;\n      border-bottom: solid 3px transparent;\n      line-height: 47px;\n      cursor: pointer;\n  }.navbar-custom .navbar-nav li .item a{\n      margin-left: 0;\n  }.mega-menu li.nav-item  a.nav-link {\n      padding: 0;\n      line-height: 77px;\n  }.mega-menu li.dropdown .dropdown-content ul.header li.active{\n      border-bottom: solid 3px red;\n  }.bottom-part {\n      padding-left: 50px;\n      padding-right: 120px;\n      display: flex;\n      padding-top: 40px;\n      align-items: center;\n      /* display: none; */\n  }.bottom-part{\n      display: none;\n  }.bottom-part .right-content{\n      padding-left: 40px;\n  }.bottom-part .right-content h6{\n      font-size: 7px;\n      color: #707070;\n      max-width: 240px;\n      line-height: 11px;\n  }.bottom-part .right-content a.learnmore{\n  \n      border-radius: 8px!important;\n      background: #D80000!important;\n      width: 130px;\n      height: 26px!important;\n      padding: 4px 15px!important;\n      margin-left: 0;\n      font-weight: 300;\n      color: white;\n      font-size: 14px!important;\n  }.bottom-part .right-content a.learnmore:hover {\n      color: #ccc!important;\n  }.bottom-part .right-content h5 {\n      color: #1E293B;\n  }.integrations-flex{\n    display: flex;\n    height: 50px;\n    justify-content: space-between;\n  }.integrations-flex img{\n    width: 30%;\n    justify-content: space-between;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }#navbarCollapse {\n      justify-content: flex-end;\n      height: 77px;\n  }.full-container {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      padding: 0 25px;\n  }.navbar-custom {\n      padding: 0;\n      background: white;\n      max-width: 100vw!important;\n      height: 77px;\n  }.navbar-custom .navbar-nav li a {\n      color: #1E293B;\n  }.navbar-custom .navbar-nav li a:hover, .navbar-custom .navbar-nav li a:focus, .navbar-custom .navbar-nav li a:active {\n      color: grey;\n  }.is-sticky .navbar-custom {\n      background: white;\n      padding: 0;\n  }.navbar-custom .navbar-nav li a {\n      font-size: 18px;\n      font-weight: bold;\n  }.mdi-menu:before {\n      font-weight: 500;\n      font-size: 40px;\n  }@media (min-width: 992px){\n    .navbar-expand-lg .navbar-toggler.sub-mobile-menu{\n      display: block!important;\n    }\n    .mobile-only {\n      display: none;\n    }\n  }#subbarCollapse .mdi-close{\n      position: absolute;\n      color: white;\n      top: 19px;\n      right: 18px;\n  }#subbarCollapse .mdi-close:before{\n      font-size: 20px;\n      font-weight: 700;\n  }#subbarCollapse{\n      display: none!important;\n      position: fixed;\n      right: 0;\n      top: 0;\n      padding: 110px 60px;\n      background: #1E293B;\n      color: white;\n  }#subbarCollapse li{\n      list-style: none;\n      font-size: 12px;\n      line-height: 15px;\n      margin: 10px 0;\n  }#subbarCollapse li a{\n      color: white;\n  }#subbarCollapse li.imp-menu-item{\n      font-size: 18px;\n      line-height: 22px;\n      margin-bottom: 35px;\n  }.sub-menu{\n      position: relative;\n  }.show#subbarCollapse{\n      display: block!important;\n      height: 100vh;\n  }.mega-menu .dropdown-content#solutionsMega .item p{\n      font-size: 18px;\n      padding: 10px 0;\n      line-height: 22px;\n      font-weight: 300;\n  }.navbar-custom .navbar-nav li a.item{\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 10px;\n      padding-bottom: 10px;\n      cursor: pointer;\n  }.mega-menu .dropdown-content#solutionsMega .item i{\n      padding: 0 60px;\n  }.mega-menu .dropdown > .toggle-icon {\n    display: none;\n  }@media (max-width: 991px){\n      .mega-menu li.dropdown .dropdown-content ul.header li{\n          margin: 0px 20px;\n      }\n      .mega-menu .dropdown-content .item>a{\n        padding-left: 20px;\n      }\n      .navbar-toggler.sub-mobile-menu{\n          display: none;\n      }\n      .mega-menu .dropdown-content.show {\n          display: block!important;\n      }\n      .mega-menu li.dropdown:hover .dropdown-content{\n          display: none;\n      }\n      .mega-menu .dropdown > .toggle-icon{\n          line-height: 77px;\n          display: block;\n          position: absolute;\n          width: 50px;\n          text-align: center;\n          height: 77px;\n          right: 20px;\n          top: 0;\n          background: transparent;\n          border: none;\n      }\n      .mega-menu .dropdown > .toggle-icon::before{\n          content: '-';\n          font-weight: 700;\n          font-family: 'arial';\n          line-height: 77px;\n          font-size: 30px;\n      }\n      .mega-menu .dropdown > .toggle-icon.collapsed::before{\n          content: '+';\n      }\n      .mega-menu .dropdown-content .item i{\n        padding: 0 20px;\n      }\n      .mega-menu .dropdown-content .item{\n        padding-left: 0;\n        padding-right: 20px;\n      }\n      .bottom-part{\n        padding: 0 20px;\n      }\n      .bottom-part img{\n        width: 60px;\n      }\n      .bottom-part .right-content{\n        padding-left: 20px;\n      }\n      #navbarCollapse{\n          position: absolute;\n          top: 77px;\n          right: 0px;\n          background: white;\n          width: 680px;\n          max-width: 100%;\n          height: auto;\n          max-height: calc(100vh - 77px);\n          overflow: scroll;\n      }\n      .mega-menu .dropdown-content {\n          position: relative;\n          top: 0;\n      }\n      .mega-menu .dropdown-content .content {\n          overflow: visible;\n          max-height: 100%;\n      }\n      .whole-mobile-menu {\n          position: absolute;\n          right: 0;\n      }\n      .navbar-custom .navbar-nav li a {\n          margin: 0 20px;\n      }\n      .mega-menu li.nav-item a.nav-link {\n          /* line-height: 50px; */\n      }\n  \n  }.confirmation{\n      color: #98a0aa;\n      padding-top: 8px;\n      display: inline-block;\n      font-size: 14px;\n      transition: all .3s ease-in-out;\n  }@media (min-width: 768px){\n      .desktop-hidden{\n        display: none!important;\n      }\n  }@media (max-width: 767px){\n      .mobile-hidden{\n        display: none!important;\n      }\n  }.product-modal-wrap{\n      position: fixed;\n      top: 0;\n      background: rgba(0,0,0,0.5);\n      width: 100%;\n      height: 100vh;\n      padding: 50px 120px;\n  }.product-modal .close{\n      position: fixed;\n      top: 0;\n      right: 35px;\n      color: white;\n      opacity: 0.8;\n      font-weight: 300;\n      font-size: 70px;\n  }.carousel-control-next, .carousel-control-prev{\n      width: 120px!important;\n      position: fixed;\n      height: 60px;\n      top: calc(50vh - 30px);\n  }.close:not(:disabled):not(.disabled):focus, .close:not(:disabled):not(.disabled):hover{\n      opacity: 1;\n  }.product-modal{\n      width: 100%;\n      height: 100%;\n      overflow: scroll;\n      position: relative;\n      align-items: center;\n      background: white;\n  }.modal-header{\n      position: fixed;\n      height: 60px;\n      top: 50px;\n      background: #ebebeb;\n      left: 120px;\n      width: calc(100% - 240px);\n      overflow-y: scroll;\n      justify-content: flex-start;\n      /* -webkit-overflow-scrolling: touch; */\n      overflow-x: scroll;\n      display: flex;\n      padding: 0px;\n      z-index: 10000;\n      list-style: none;\n      flex-wrap: nowrap;\n      overflow: hidden !important;\n  }.modal-header li{\n      display: inline-block;\n      line-height: 56px;\n      white-space: nowrap;\n      border-bottom: solid 4px transparent;\n      font-size: 12px;\n      padding: 0 30px;\n      color: #091E42;\n  }.modal-header li.active{\n      border-bottom: solid 4px #de1e00;\n  \n  }.carousel-control-next-icon, .carousel-control-prev-icon{\n      width: 40px;\n      height: 40px;\n  }.product-modal > div{\n      flex: 1;\n  }.custom-tag{\n      background: transparent!important;\n      height: auto!important;\n  }/* .carousel-control-next{\n      right: -120px;\n  }\n  .carousel-control-prev{\n      left: -120px;\n  } */.item-content{\n      padding: 120px 15px 60px;\n      background: white;\n  }.item-content h4{\n      color: #091E42 !important;\n      font-size: 20px;\n      margin-bottom: 10px;\n      max-width: 596px;\n  }.item-content h3{\n      margin-bottom: 10px;\n      max-width: 596px;\n      margin-top: 0;\n      line-height: 32px;\n      font-family: \"Montserrat\", sans-serif;\n      font-weight: 700;\n      font-size: 30px;\n  }.modal-header li:hover{\n      color: #0e212b;\n      cursor: pointer;\n  }.item-content .row > div.col-md-5{\n      display: flex;\n      align-items: center;\n  }.item-content p, .item-content .ptype{\n      max-width: 596px;\n      color: #091E42 !important;\n      font-size: 12px;\n      line-height: 2em;\n      font-family: \"Montserrat\", sans-serif;\n  }.features-box .ptype{\n      font-weight: 300;\n      font-size: 14px;\n      line-height: 24px;\n      color: #091E42;\n      font-family: 'Roboto', sans-serif;\n  }.item-content .row > div img{\n      margin: 0 auto;\n      width: 75%;\n  }@media(min-width: 769px){\n    .mobile-products .modal-header{\n      display: none;\n    }\n  }@media (max-width: 768px){\n    .product-modal-wrap{\n      display: none;\n    }\n    .item-content .row{\n      display: block;\n    }\n    .carousel-control-next, .carousel-control-prev{\n      display: none;\n    }\n    .modal-header{\n      top: 76px;\n      width: 100%;\n      border-radius: 0;\n      left: 0;\n    }\n    .item-content .col-sm-12{\n      width: 100%;\n      flex: 1;\n      max-width: 100%;\n    }\n    .mobile-products{\n      margin-top: 100px;\n    }\n    .navbar-custom{\n      box-shadow: none;\n      -moz-box-shadow: none;\n      z-index: 1000000;\n    }\n    .item-content p,\n    .item-content h3,\n    .item-content h4{\n      max-width: 100%;\n      padding: 0 20px;\n    }\n  }.contents-link a{\n    display: block;\n    text-decoration: underline!important;\n    margin-bottom: 10px;\n    font-size: 14px;\n  }.content-title> h4{\n    padding-top: 25px;\n    padding-bottom: 10px;\n  }.contents-title{\n    margin-top: 20px;\n    margin-bottom: 10px;\n  }.product-modal .item-content .row{\n    align-items: center;\n    display: flex;\n    width: 100%;\n  }.product-modal .item-content{\n    padding: 120px 15px 60px;\n    min-height: calc(100vh - 100px);\n    background: white;\n    display: flex;\n    align-items: center;\n    width: 100%;\n  }.privacy *{\n    font-family: 'Montserrat', sans-serif;\n  }.privacy h4,\n  .privacy h5{\n    font-weight: 700;\n  }.privacy h5{\n    font-size: 17px;\n  }.privacy h3.title{\n    margin-top: 100px;\n    font-weight: 700;\n  }.privacy h6.subtitle{\n    font-weight: 700;\n    margin-bottom: 100px;\n  }.privacy b{\n    font-weight: 700;\n  }.privacy .greya{\n    font-weight: 700;\n    padding-right: 15px;\n    text-decoration: underline;\n  }.custom-tag .item-content li{\n    color: #091E42 !important;\n  }h3.other-p-title{\n    font-size: 34px;\n    line-height: 42px;\n    color: #1E293B;\n  }p.other-p-content{\n    font-size: 14px;\n    line-height: 24px;\n    color: #091E42;\n  }.mega-menu .dropdown-content .content{\n    overflow: -moz-scrollbars-none;\n  }.mega-menu .dropdown-content .content{\n    -ms-overflow-style: none;\n  }.mega-menu .dropdown-content .content::-webkit-scrollbar{\n    width: 0 !important;\n  }.product-modal .item-content .row b{\n    font-family: 'arial';\n    font-weight: 700;\n  }a.underline-link {\n    text-decoration: underline!important;\n    color: #212534!important;\n    cursor: pointer;\n  }\n";
})();

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@palmabit/react-cookie-law":
/*!*********************************************!*\
  !*** external "@palmabit/react-cookie-law" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@palmabit/react-cookie-law");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map