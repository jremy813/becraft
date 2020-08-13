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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "C:\\Users\\jremy\\OneDrive\\Desktop\\becraft\\components\\sidebar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Sidebar() {
  _s();

  var image = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var links = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tl = new gsap__WEBPACK_IMPORTED_MODULE_3__["TimelineLite"]();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    tl.from(image, 1.2, {
      x: -1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    }, 0.8);
    tl.from(links, 1.2, {
      x: -1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    });
  });
  return __jsx("div", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    ref: function ref(el) {
      return image = el;
    },
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/assets/craftbeer2.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Home")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "About Us"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Our Beers"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "History"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Contact"))));
}

_s(Sidebar, "ABLppEeedlQYLoFI4tDgkyq24Bw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJpbWFnZSIsInVzZVJlZiIsImxpbmtzIiwidGwiLCJUaW1lbGluZUxpdGUiLCJ1c2VFZmZlY3QiLCJmcm9tIiwieCIsImVhc2UiLCJQb3dlcjMiLCJlYXNlT3V0Iiwic3R5bGVzIiwic2lkZWJhcl9jb250YWluZXIiLCJlbCIsInNpZGViYXJfaW1nIiwic2lkZWJhcl9saW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2hDLE1BQUlDLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQSxNQUFJRSxFQUFFLEdBQUcsSUFBSUMsaURBQUosRUFBVDtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsTUFBRSxDQUFDRyxJQUFILENBQVFOLEtBQVIsRUFBZSxHQUFmLEVBQW9CO0FBQUVPLE9BQUMsRUFBRSxDQUFDLElBQU47QUFBWUMsVUFBSSxFQUFFQywyQ0FBTSxDQUFDQztBQUF6QixLQUFwQixFQUF3RCxHQUF4RDtBQUNBUCxNQUFFLENBQUNHLElBQUgsQ0FBUUosS0FBUixFQUFlLEdBQWYsRUFBb0I7QUFBRUssT0FBQyxFQUFFLENBQUMsSUFBTjtBQUFZQyxVQUFJLEVBQUVDLDJDQUFNLENBQUNDO0FBQXpCLEtBQXBCO0FBQ0QsR0FIUSxDQUFUO0FBS0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRSxhQUFDQyxFQUFEO0FBQUEsYUFBU2IsS0FBSyxHQUFHYSxFQUFqQjtBQUFBLEtBQVY7QUFBZ0MsYUFBUyxFQUFFRiwyREFBTSxDQUFDRyxXQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsd0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLE9BQUcsRUFBRSxhQUFDRCxFQUFEO0FBQUEsYUFBU1gsS0FBSyxHQUFHVyxFQUFqQjtBQUFBLEtBQVY7QUFBZ0MsYUFBUyxFQUFFRiwyREFBTSxDQUFDSSxhQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkYsQ0FERixDQUpGLENBREY7QUFtQkQ7O0dBN0J1QmhCLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjg0ZDczZGZhMGRkMWIwM2IzOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2lkZWJhci5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBUd2Vlbk1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjMgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhcigpIHtcclxuICBsZXQgaW1hZ2UgPSB1c2VSZWYobnVsbCk7XHJcbiAgbGV0IGxpbmtzID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBsZXQgdGwgPSBuZXcgVGltZWxpbmVMaXRlKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHRsLmZyb20oaW1hZ2UsIDEuMiwgeyB4OiAtMTI4MCwgZWFzZTogUG93ZXIzLmVhc2VPdXQgfSwgMC44KTtcclxuICAgIHRsLmZyb20obGlua3MsIDEuMiwgeyB4OiAtMTI4MCwgZWFzZTogUG93ZXIzLmVhc2VPdXQgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJfY29udGFpbmVyfT5cclxuICAgICAgPGRpdiByZWY9eyhlbCkgPT4gKGltYWdlID0gZWwpfSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyX2ltZ30+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvYXNzZXRzL2NyYWZ0YmVlcjIucG5nXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgcmVmPXsoZWwpID0+IChsaW5rcyA9IGVsKX0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcl9saW5rc30+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgIDxsaT5Ib21lPC9saT5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8bGk+QWJvdXQgVXM8L2xpPlxyXG4gICAgICAgICAgPGxpPk91ciBCZWVyczwvbGk+XHJcbiAgICAgICAgICA8bGk+SGlzdG9yeTwvbGk+XHJcbiAgICAgICAgICA8bGk+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=