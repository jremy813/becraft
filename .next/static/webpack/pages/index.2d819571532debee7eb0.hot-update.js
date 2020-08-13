webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sidebar.js":
/*!*******************************!*\
  !*** ./components/sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.module.scss */ "./components/sidebar.module.scss");
/* harmony import */ var _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "C:\\Users\\jremy\\OneDrive\\Desktop\\becraft\\components\\sidebar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Sidebar() {
  _s();

  var image = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var links = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]();
  return __jsx("div", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/assets/craftbeer2.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })), __jsx("div", {
    ref: function ref(el) {
      return links = el;
    },
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Home"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "About Us"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Our Beers"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "History"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Contact"))));
}

_s(Sidebar, "3bKvnqtF1zEL3YN2wGFl+1mMC3g=");

_c = Sidebar;

var _c;

$RefreshReg$(_c, "Sidebar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJpbWFnZSIsInVzZVJlZiIsImxpbmtzIiwidGwiLCJUaW1lbGluZUxpdGUiLCJzdHlsZXMiLCJzaWRlYmFyX2NvbnRhaW5lciIsInNpZGViYXJfaW1nIiwiZWwiLCJzaWRlYmFyX2xpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUNoQyxNQUFJQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUNBLE1BQUlDLEtBQUssR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBRUFFLElBQUUsR0FBRyxJQUFJQyxpREFBSixFQUFMO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUQsMkRBQU0sQ0FBQ0UsV0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxPQUFHLEVBQUUsYUFBQ0MsRUFBRDtBQUFBLGFBQVNOLEtBQUssR0FBR00sRUFBakI7QUFBQSxLQUFWO0FBQWdDLGFBQVMsRUFBRUgsMkRBQU0sQ0FBQ0ksYUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixDQURGLENBSkYsQ0FERjtBQWdCRDs7R0FyQnVCVixPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJkODE5NTcxNTMyZGViZWU3ZWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NpZGViYXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IFR3ZWVuTWF4LCBUaW1lbGluZUxpdGUsIFBvd2VyMyB9IGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGxldCBpbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgbGlua3MgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJfY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyX2ltZ30+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2NyYWZ0YmVlcjIucG5nXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgcmVmPXsoZWwpID0+IChsaW5rcyA9IGVsKX0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcl9saW5rc30+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPkhvbWU8L2xpPlxyXG4gICAgICAgICAgPGxpPkFib3V0IFVzPC9saT5cclxuICAgICAgICAgIDxsaT5PdXIgQmVlcnM8L2xpPlxyXG4gICAgICAgICAgPGxpPkhpc3Rvcnk8L2xpPlxyXG4gICAgICAgICAgPGxpPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9