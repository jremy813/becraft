webpackHotUpdate_N_E("pages/beers",{

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
    href: "/",
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
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/beers",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Our Beers")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "Contact")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaWRlYmFyLmpzIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJpbWFnZSIsInVzZVJlZiIsImxpbmtzIiwidGwiLCJUaW1lbGluZUxpdGUiLCJ1c2VFZmZlY3QiLCJmcm9tIiwieCIsImVhc2UiLCJQb3dlcjMiLCJlYXNlT3V0Iiwic3R5bGVzIiwic2lkZWJhcl9jb250YWluZXIiLCJlbCIsInNpZGViYXJfaW1nIiwic2lkZWJhcl9saW5rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2hDLE1BQUlDLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQSxNQUFJRSxFQUFFLEdBQUcsSUFBSUMsaURBQUosRUFBVDtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsTUFBRSxDQUFDRyxJQUFILENBQVFOLEtBQVIsRUFBZSxHQUFmLEVBQW9CO0FBQUVPLE9BQUMsRUFBRSxDQUFDLElBQU47QUFBWUMsVUFBSSxFQUFFQywyQ0FBTSxDQUFDQztBQUF6QixLQUFwQixFQUF3RCxHQUF4RDtBQUNBUCxNQUFFLENBQUNHLElBQUgsQ0FBUUosS0FBUixFQUFlLEdBQWYsRUFBb0I7QUFBRUssT0FBQyxFQUFFLENBQUMsSUFBTjtBQUFZQyxVQUFJLEVBQUVDLDJDQUFNLENBQUNDO0FBQXpCLEtBQXBCO0FBQ0QsR0FIUSxDQUFUO0FBS0EsU0FDRTtBQUFLLGFBQVMsRUFBRUMsMkRBQU0sQ0FBQ0MsaUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRSxhQUFDQyxFQUFEO0FBQUEsYUFBU2IsS0FBSyxHQUFHYSxFQUFqQjtBQUFBLEtBQVY7QUFBZ0MsYUFBUyxFQUFFRiwyREFBTSxDQUFDRyxXQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsd0JBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLE9BQUcsRUFBRSxhQUFDRCxFQUFEO0FBQUEsYUFBU1gsS0FBSyxHQUFHVyxFQUFqQjtBQUFBLEtBQVY7QUFBZ0MsYUFBUyxFQUFFRiwyREFBTSxDQUFDSSxhQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFJRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FKRixFQU9FLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQVBGLEVBVUUsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FWRixDQURGLENBSkYsQ0FERjtBQXVCRDs7R0FqQ3VCaEIsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iZWVycy4yMjNkN2IxZGRiZTQ3YmM3YmE3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zaWRlYmFyLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IFR3ZWVuTWF4LCBUaW1lbGluZUxpdGUsIFBvd2VyMyB9IGZyb20gXCJnc2FwXCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gIGxldCBpbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgbGlua3MgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGxldCB0bCA9IG5ldyBUaW1lbGluZUxpdGUoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdGwuZnJvbShpbWFnZSwgMS4yLCB7IHg6IC0xMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9LCAwLjgpO1xyXG4gICAgdGwuZnJvbShsaW5rcywgMS4yLCB7IHg6IC0xMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZWJhcl9jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IHJlZj17KGVsKSA9PiAoaW1hZ2UgPSBlbCl9IGNsYXNzTmFtZT17c3R5bGVzLnNpZGViYXJfaW1nfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvY3JhZnRiZWVyMi5wbmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiByZWY9eyhlbCkgPT4gKGxpbmtzID0gZWwpfSBjbGFzc05hbWU9e3N0eWxlcy5zaWRlYmFyX2xpbmtzfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8bGk+SG9tZTwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgIDxsaT5BYm91dCBVczwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2JlZXJzXCI+XHJcbiAgICAgICAgICAgIDxsaT5PdXIgQmVlcnM8L2xpPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxsaT5Db250YWN0PC9saT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==