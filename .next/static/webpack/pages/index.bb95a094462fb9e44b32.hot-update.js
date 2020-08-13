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
    }, 1).from(links, 1.2, {
      x: -1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power3"].easeOut
    });
  });
  return __jsx("div", {
    className: _sidebar_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/assets/craftbeer2.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Home"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "About Us"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Our Beers"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "History"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJpbWFnZSIsInVzZVJlZiIsImxpbmtzIiwidGwiLCJUaW1lbGluZUxpdGUiLCJ1c2VFZmZlY3QiLCJmcm9tIiwieCIsImVhc2UiLCJQb3dlcjMiLCJlYXNlT3V0Iiwic3R5bGVzIiwic2lkZWJhcl9jb250YWluZXIiLCJlbCIsInNpZGViYXJfaW1nIiwic2lkZWJhcl9saW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDaEMsTUFBSUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFDQSxNQUFJQyxLQUFLLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUVBLE1BQUlFLEVBQUUsR0FBRyxJQUFJQyxpREFBSixFQUFUO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixNQUFFLENBQUNHLElBQUgsQ0FBUU4sS0FBUixFQUFlLEdBQWYsRUFBb0I7QUFBRU8sT0FBQyxFQUFFLENBQUMsSUFBTjtBQUFZQyxVQUFJLEVBQUVDLDJDQUFNLENBQUNDO0FBQXpCLEtBQXBCLEVBQXdELENBQXhELEVBQTJESixJQUEzRCxDQUNFSixLQURGLEVBRUUsR0FGRixFQUdFO0FBQUVLLE9BQUMsRUFBRSxDQUFDLElBQU47QUFBWUMsVUFBSSxFQUFFQywyQ0FBTSxDQUFDQztBQUF6QixLQUhGO0FBS0QsR0FOUSxDQUFUO0FBUUEsU0FDRTtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRSxhQUFDQyxFQUFEO0FBQUEsYUFBU2IsS0FBSyxHQUFHYSxFQUFqQjtBQUFBLEtBQVY7QUFBZ0MsYUFBUyxFQUFFRiwyREFBTSxDQUFDRyxXQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsd0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLE9BQUcsRUFBRSxhQUFDRCxFQUFEO0FBQUEsYUFBU1gsS0FBSyxHQUFHVyxFQUFqQjtBQUFBLEtBQVY7QUFBZ0MsYUFBUyxFQUFFRiwyREFBTSxDQUFDSSxhQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLENBREYsQ0FKRixDQURGO0FBZ0JEOztHQTdCdUJoQixPOztLQUFBQSxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJiOTVhMDk0NDYyZmI5ZTQ0YjMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NpZGViYXIubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IFR3ZWVuTWF4LCBUaW1lbGluZUxpdGUsIFBvd2VyMyB9IGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGxldCBpbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgbGlua3MgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCB0bCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdGwuZnJvbShpbWFnZSwgMS4yLCB7IHg6IC0xMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9LCAxKS5mcm9tKFxyXG4gICAgICBsaW5rcyxcclxuICAgICAgMS4yLFxyXG4gICAgICB7IHg6IC0xMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9XHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyX2NvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgcmVmPXsoZWwpID0+IChpbWFnZSA9IGVsKX0gY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcl9pbWd9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9jcmFmdGJlZXIyLnBuZ1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHJlZj17KGVsKSA9PiAobGlua3MgPSBlbCl9IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJfbGlua3N9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5Ib21lPC9saT5cclxuICAgICAgICAgIDxsaT5BYm91dCBVczwvbGk+XHJcbiAgICAgICAgICA8bGk+T3VyIEJlZXJzPC9saT5cclxuICAgICAgICAgIDxsaT5IaXN0b3J5PC9saT5cclxuICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==