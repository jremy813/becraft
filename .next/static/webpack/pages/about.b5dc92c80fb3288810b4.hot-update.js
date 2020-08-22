webpackHotUpdate_N_E("pages/about",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _public_assets_craftbeer2_about_pic1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/craftbeer2-about-pic1.png */ "./public/assets/craftbeer2-about-pic1.png");
/* harmony import */ var _public_assets_craftbeer2_about_pic1_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_about_pic1_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ "./components/sidebar.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_craftbeer2_about_pic2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/craftbeer2-about-pic2.jpg */ "./public/assets/craftbeer2-about-pic2.jpg");
/* harmony import */ var _public_assets_craftbeer2_about_pic2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_about_pic2_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_craftbeer2_about_pic3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/craftbeer2-about-pic3.jpg */ "./public/assets/craftbeer2-about-pic3.jpg");
/* harmony import */ var _public_assets_craftbeer2_about_pic3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_about_pic3_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_craftbeer2_about_pic4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/craftbeer2-about-pic4.jpg */ "./public/assets/craftbeer2-about-pic4.jpg");
/* harmony import */ var _public_assets_craftbeer2_about_pic4_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_about_pic4_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_assets_craftbeer2_about_pic5_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/assets/craftbeer2-about-pic5.jpg */ "./public/assets/craftbeer2-about-pic5.jpg");
/* harmony import */ var _public_assets_craftbeer2_about_pic5_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_about_pic5_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/assets/craftbeer2-subheader-pic1.png */ "./public/assets/craftbeer2-subheader-pic1.png");
/* harmony import */ var _public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_assets_craftbeer2_about_pic6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/assets/craftbeer2-about-pic6.png */ "./public/assets/craftbeer2-about-pic6.png");
/* harmony import */ var _public_assets_craftbeer2_about_pic6_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_about_pic6_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_assets_craftbeer2_slider_pic2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/assets/craftbeer2-slider-pic2.png */ "./public/assets/craftbeer2-slider-pic2.png");
/* harmony import */ var _public_assets_craftbeer2_slider_pic2_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_slider_pic2_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "C:\\Users\\jremy\\OneDrive\\Desktop\\becraft\\pages\\about.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function About() {
  _s();

  var beerImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var content = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tl = new gsap__WEBPACK_IMPORTED_MODULE_13__["TimelineLite"]();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    tl.from(content, 1.2, {
      x: -1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_13__["Power3"].easeOut
    });
    tl.from(beerImage, 1.2, {
      y: 1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_13__["Power3"].easeOut
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Barlow&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      background: "url(" + "".concat(__webpack_require__(/*! ../public/assets/craftbeer2-bg.png */ "./public/assets/craftbeer2-bg.png")) + ")"
    },
    className: "about_container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "about_sec1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: function ref(el) {
      return content = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "A FEW WORDS ABOUT US"), __jsx("img", {
    className: "about_background",
    src: _public_assets_craftbeer2_slider_pic2_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  })), __jsx("div", {
    ref: function ref(el) {
      return beerImage = el;
    },
    className: "about_img1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "about_sec2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic1_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Swedish Tradition Since 1938"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit at nulla. Suspendisse potenti. In non lacinia risus."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Nulla sit amet vestibulum magna, eget pulvinar libero. Vivamus in diam turpis. In condimentum maximus tristique"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, " Pellentesque lorem augue, fermentum orci.")), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Read More"))), __jsx("section", {
    className: "about_sec3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "about_sec3imgs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  }, "PHARETRA ODIO"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "KEVIN PERRY"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit magna.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic3_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "PHARETRA ODIO"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "KEVIN PERRY"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit magna.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic4_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, "PHARETRA ODIO"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, "KEVIN PERRY"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit magna.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic5_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, "PHARETRA ODIO"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, "KEVIN PERRY"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit magna."))), __jsx("div", {
    className: "about_sec3btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "CONTACT WITH US"))), __jsx("section", {
    className: "about_sec4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "A MESSAGE FROM OUR CEO AND FOUNDER"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit at nulla. Suspendisse potenti. In non lacinia risus."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "Nulla sit amet vestibulum magna, eget pulvinar libero. Vivamus in diam turpis. In condimentum maximus tristique"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, " Pellentesque lorem augue, fermentum orci.")), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "Read More")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic6_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  })));
}

_s(About, "y9iQXToy83iLaurT6Ahi7s6A9hQ=");

_c = About;

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJiZWVySW1hZ2UiLCJ1c2VSZWYiLCJjb250ZW50IiwidGwiLCJUaW1lbGluZUxpdGUiLCJ1c2VFZmZlY3QiLCJmcm9tIiwieCIsImVhc2UiLCJQb3dlcjMiLCJlYXNlT3V0IiwieSIsImJhY2tncm91bmQiLCJyZXF1aXJlIiwiZWwiLCJCYWNrZ3JvdW5kIiwiQmVlcjEiLCJHbG9iZSIsIlBlcnNvbjEiLCJQZXJzb24yIiwiUGVyc29uMyIsIlBlcnNvbjQiLCJQZXJzb241Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQUlDLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFFQSxNQUFJRSxFQUFFLEdBQUcsSUFBSUMsa0RBQUosRUFBVDtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsTUFBRSxDQUFDRyxJQUFILENBQVFKLE9BQVIsRUFBaUIsR0FBakIsRUFBc0I7QUFBRUssT0FBQyxFQUFFLENBQUMsSUFBTjtBQUFZQyxVQUFJLEVBQUVDLDRDQUFNLENBQUNDO0FBQXpCLEtBQXRCO0FBQ0FQLE1BQUUsQ0FBQ0csSUFBSCxDQUFRTixTQUFSLEVBQW1CLEdBQW5CLEVBQXdCO0FBQUVXLE9BQUMsRUFBRSxJQUFMO0FBQVdILFVBQUksRUFBRUMsNENBQU0sQ0FBQ0M7QUFBeEIsS0FBeEI7QUFDRCxHQUhRLENBQVQ7QUFLQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLGtFQURQO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFDRSxRQUFJLEVBQUMsOERBRFA7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixFQVdFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkYsRUFhRTtBQUNFLFNBQUssRUFBRTtBQUNMRSxnQkFBVSxFQUNSLG1CQUFZQyxtQkFBTyxDQUFDLDZFQUFELENBQW5CLElBQThEO0FBRjNELEtBRFQ7QUFLRSxhQUFTLEVBQUMsaUJBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQVMsYUFBUyxFQUFDLFlBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRSxhQUFDQyxFQUFEO0FBQUEsYUFBU1osT0FBTyxHQUFHWSxFQUFuQjtBQUFBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFrQyxPQUFHLEVBQUVDLGlGQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUssT0FBRyxFQUFFLGFBQUNELEVBQUQ7QUFBQSxhQUFTZCxTQUFTLEdBQUdjLEVBQXJCO0FBQUEsS0FBVjtBQUFvQyxhQUFTLEVBQUMsWUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFRSxvRkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQVBGLEVBZ0JFO0FBQVMsYUFBUyxFQUFDLFlBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLCtFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4TUFERixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUhBUEYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQVhGLENBRkYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGLENBSkYsQ0FoQkYsRUFzQ0U7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLCtFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxR0FKRixDQURGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFQywrRUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUdBSkYsQ0FWRixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLCtFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxR0FKRixDQW5CRixFQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVDLCtFQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxR0FKRixDQTVCRixDQURGLEVBdUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0F2Q0YsQ0F0Q0YsRUFpRkU7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOE1BREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVIQVBGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFYRixDQUZGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRixDQURGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUMsZ0ZBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbEJGLENBakZGLEVBdUdFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZHRixDQWJGLENBREY7QUF5SEQ7O0dBcEl1QnZCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYjVkYzkyYzgwZmIzMjg4ODEwYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBHbG9iZSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWFib3V0LXBpYzEucG5nXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUGVyc29uMSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWFib3V0LXBpYzIuanBnXCI7XHJcbmltcG9ydCBQZXJzb24yIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2NyYWZ0YmVlcjItYWJvdXQtcGljMy5qcGdcIjtcclxuaW1wb3J0IFBlcnNvbjMgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvY3JhZnRiZWVyMi1hYm91dC1waWM0LmpwZ1wiO1xyXG5pbXBvcnQgUGVyc29uNCBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWFib3V0LXBpYzUuanBnXCI7XHJcbmltcG9ydCBCZWVyMSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLXN1YmhlYWRlci1waWMxLnBuZ1wiO1xyXG5pbXBvcnQgUGVyc29uNSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWFib3V0LXBpYzYucG5nXCI7XHJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2NyYWZ0YmVlcjItc2xpZGVyLXBpYzIucG5nXCI7XHJcblxyXG5pbXBvcnQgeyBUd2Vlbk1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjMgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XHJcbiAgbGV0IGJlZXJJbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY29udGVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdGwuZnJvbShjb250ZW50LCAxLjIsIHsgeDogLTEyODAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0pO1xyXG4gICAgdGwuZnJvbShiZWVySW1hZ2UsIDEuMiwgeyB5OiAxMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ZZXNldmErT25lJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3cmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgIFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvY3JhZnRiZWVyMi1iZy5wbmdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJvdXRfY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0X3NlYzFcIj5cclxuICAgICAgICAgIDxkaXYgcmVmPXsoZWwpID0+IChjb250ZW50ID0gZWwpfT5cclxuICAgICAgICAgICAgPGgxPkEgRkVXIFdPUkRTIEFCT1VUIFVTPC9oMT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhYm91dF9iYWNrZ3JvdW5kXCIgc3JjPXtCYWNrZ3JvdW5kfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17KGVsKSA9PiAoYmVlckltYWdlID0gZWwpfSBjbGFzc05hbWU9XCJhYm91dF9pbWcxXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtCZWVyMX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhYm91dF9zZWMyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17R2xvYmV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5Td2VkaXNoIFRyYWRpdGlvbiBTaW5jZSAxOTM4PC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEFsaXF1YW0gYWMgZHVpIHZlbCBkdWkgdnVscHV0YXRlIGNvbnNlY3RldHVyLiBNYXVyaXMgYWNjdW1zYW4sXHJcbiAgICAgICAgICAgICAgICBtYXNzYSBub24gY29uc2VjdGV0dXIgY29uZGltZW50dW0sIGRpYW0gYXJjdSB0cmlzdGlxdWUgbmliaCwgbmVjXHJcbiAgICAgICAgICAgICAgICBlZ2VzdGFzIGRpYW0gZWxpdCBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gbm9uIGxhY2luaWFcclxuICAgICAgICAgICAgICAgIHJpc3VzLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIE51bGxhIHNpdCBhbWV0IHZlc3RpYnVsdW0gbWFnbmEsIGVnZXQgcHVsdmluYXIgbGliZXJvLiBWaXZhbXVzXHJcbiAgICAgICAgICAgICAgICBpbiBkaWFtIHR1cnBpcy4gSW4gY29uZGltZW50dW0gbWF4aW11cyB0cmlzdGlxdWVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+IFBlbGxlbnRlc3F1ZSBsb3JlbSBhdWd1ZSwgZmVybWVudHVtIG9yY2kuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5SZWFkIE1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhYm91dF9zZWMzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X3NlYzNpbWdzXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e1BlcnNvbjF9IC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UEhBUkVUUkEgT0RJTzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDE+S0VWSU4gUEVSUlk8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQ3VyYWJpdHVyIHNlZCBpYWN1bGlzIGRvbG9yLCBub24gY29uZ3VlIGxpZ3VsYS4gTWFlY2VuYXNcclxuICAgICAgICAgICAgICAgIGltcGVyZGlldCBhbnRlIGVnZXQgaGVuZHJlcml0IG1hZ25hLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e1BlcnNvbjJ9IC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UEhBUkVUUkEgT0RJTzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDE+S0VWSU4gUEVSUlk8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQ3VyYWJpdHVyIHNlZCBpYWN1bGlzIGRvbG9yLCBub24gY29uZ3VlIGxpZ3VsYS4gTWFlY2VuYXNcclxuICAgICAgICAgICAgICAgIGltcGVyZGlldCBhbnRlIGVnZXQgaGVuZHJlcml0IG1hZ25hLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e1BlcnNvbjN9IC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UEhBUkVUUkEgT0RJTzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDE+S0VWSU4gUEVSUlk8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQ3VyYWJpdHVyIHNlZCBpYWN1bGlzIGRvbG9yLCBub24gY29uZ3VlIGxpZ3VsYS4gTWFlY2VuYXNcclxuICAgICAgICAgICAgICAgIGltcGVyZGlldCBhbnRlIGVnZXQgaGVuZHJlcml0IG1hZ25hLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e1BlcnNvbjR9IC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+UEhBUkVUUkEgT0RJTzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDE+S0VWSU4gUEVSUlk8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQ3VyYWJpdHVyIHNlZCBpYWN1bGlzIGRvbG9yLCBub24gY29uZ3VlIGxpZ3VsYS4gTWFlY2VuYXNcclxuICAgICAgICAgICAgICAgIGltcGVyZGlldCBhbnRlIGVnZXQgaGVuZHJlcml0IG1hZ25hLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfc2VjM2J0blwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uPkNPTlRBQ1QgV0lUSCBVUzwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0X3NlYzRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5BIE1FU1NBR0UgRlJPTSBPVVIgQ0VPIEFORCBGT1VOREVSPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEFsaXF1YW0gYWMgZHVpIHZlbCBkdWkgdnVscHV0YXRlIGNvbnNlY3RldHVyLiBNYXVyaXMgYWNjdW1zYW4sXHJcbiAgICAgICAgICAgICAgICBtYXNzYSBub24gY29uc2VjdGV0dXIgY29uZGltZW50dW0sIGRpYW0gYXJjdSB0cmlzdGlxdWUgbmliaCwgbmVjXHJcbiAgICAgICAgICAgICAgICBlZ2VzdGFzIGRpYW0gZWxpdCBhdCBudWxsYS4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW4gbm9uIGxhY2luaWFcclxuICAgICAgICAgICAgICAgIHJpc3VzLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIE51bGxhIHNpdCBhbWV0IHZlc3RpYnVsdW0gbWFnbmEsIGVnZXQgcHVsdmluYXIgbGliZXJvLiBWaXZhbXVzXHJcbiAgICAgICAgICAgICAgICBpbiBkaWFtIHR1cnBpcy4gSW4gY29uZGltZW50dW0gbWF4aW11cyB0cmlzdGlxdWVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+IFBlbGxlbnRlc3F1ZSBsb3JlbSBhdWd1ZSwgZmVybWVudHVtIG9yY2kuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbj5SZWFkIE1vcmU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e1BlcnNvbjV9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==