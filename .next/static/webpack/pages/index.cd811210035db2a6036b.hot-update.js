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
  var tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineLite"]();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    tl.from(image, 1.2, {
      x: -1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeOut
    }, 2);
    tl.from(links, 1.2, {
      x: -1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeOut
    });
  });
  return __jsx("div", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/assets/craftbeer2.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Home"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "About Us"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Our Beers"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "History"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJpbWFnZSIsInVzZVJlZiIsImxpbmtzIiwidGwiLCJUaW1lbGluZUxpdGUiLCJ1c2VFZmZlY3QiLCJmcm9tIiwieCIsImVhc2UiLCJQb3dlcjMiLCJlYXNlT3V0Iiwic3R5bGVzIiwic2lkZWJhcl9jb250YWluZXIiLCJlbCIsInNpZGViYXJfaW1nIiwic2lkZWJhcl9saW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDaEMsTUFBSUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBLE1BQUlFLEVBQUUsR0FBRyxJQUFJQyxpREFBSixFQUFUO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixNQUFFLENBQUNHLElBQUgsQ0FBUU4sS0FBUixFQUFlLEdBQWYsRUFBb0I7QUFBRU8sT0FBQyxFQUFFLENBQUMsSUFBTjtBQUFZQyxVQUFJLEVBQUVDLDJDQUFNLENBQUNDO0FBQXpCLEtBQXBCLEVBQXdELENBQXhEO0FBQ0FQLE1BQUUsQ0FBQ0csSUFBSCxDQUFRSixLQUFSLEVBQWUsR0FBZixFQUFvQjtBQUFFSyxPQUFDLEVBQUUsQ0FBQyxJQUFOO0FBQVlDLFVBQUksRUFBRUMsMkNBQU0sQ0FBQ0M7QUFBekIsS0FBcEI7QUFDRCxHQUhRLENBQVQ7QUFLQSxTQUNFO0FBQUssYUFBUyxFQUFFQywyREFBTSxDQUFDQyxpQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFLGFBQUNDLEVBQUQ7QUFBQSxhQUFTYixLQUFLLEdBQUdhLEVBQWpCO0FBQUEsS0FBVjtBQUFnQyxhQUFTLEVBQUVGLDJEQUFNLENBQUNHLFdBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyx3QkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssT0FBRyxFQUFFLGFBQUNELEVBQUQ7QUFBQSxhQUFTWCxLQUFLLEdBQUdXLEVBQWpCO0FBQUEsS0FBVjtBQUFnQyxhQUFTLEVBQUVGLDJEQUFNLENBQUNJLGFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsQ0FERixDQUpGLENBREY7QUFnQkQ7O0dBMUJ1QmhCLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2Q4MTEyMTAwMzVkYjJhNjAzNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc2lkZWJhci5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuaW1wb3J0IHsgVHdlZW5NYXgsIFRpbWVsaW5lTGl0ZSwgUG93ZXIzIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoKSB7XHJcbiAgbGV0IGltYWdlID0gdXNlUmVmKG51bGwpO1xyXG4gIGxldCBsaW5rcyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0bC5mcm9tKGltYWdlLCAxLjIsIHsgeDogLTEyODAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0sIDIpO1xyXG4gICAgdGwuZnJvbShsaW5rcywgMS4yLCB7IHg6IC0xMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcl9jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IHJlZj17KGVsKSA9PiAoaW1hZ2UgPSBlbCl9IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJfaW1nfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvY3JhZnRiZWVyMi5wbmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiByZWY9eyhlbCkgPT4gKGxpbmtzID0gZWwpfSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyX2xpbmtzfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+SG9tZTwvbGk+XHJcbiAgICAgICAgICA8bGk+QWJvdXQgVXM8L2xpPlxyXG4gICAgICAgICAgPGxpPk91ciBCZWVyczwvbGk+XHJcbiAgICAgICAgICA8bGk+SGlzdG9yeTwvbGk+XHJcbiAgICAgICAgICA8bGk+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=