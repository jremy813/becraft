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
  var lagerBg = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
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
    tl.from(lagerBg, 1.2, {
      x: -1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_13__["Power3"].easeOut
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Barlow&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
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
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "about_sec1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: function ref(el) {
      return content = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "A FEW WORDS ABOUT US"), __jsx("img", {
    ref: function ref(el) {
      return lagerBg = el;
    },
    className: "about_background",
    src: _public_assets_craftbeer2_slider_pic2_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "about_sec2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic1_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Swedish Tradition Since 1938"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit at nulla. Suspendisse potenti. In non lacinia risus."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Nulla sit amet vestibulum magna, eget pulvinar libero. Vivamus in diam turpis. In condimentum maximus tristique"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, " Pellentesque lorem augue, fermentum orci.")), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Read More"))), __jsx("section", {
    className: "about_sec3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "about_sec3imgs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, "PHARETRA ODIO"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "KEVIN PERRY"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit magna.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic3_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, "PHARETRA ODIO"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, "KEVIN PERRY"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit magna.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic4_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, "PHARETRA ODIO"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, "KEVIN PERRY"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit magna.")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic5_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, "PHARETRA ODIO"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, "KEVIN PERRY"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, "Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit magna."))), __jsx("div", {
    className: "about_sec3btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "CONTACT WITH US"))), __jsx("section", {
    className: "about_sec4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "A MESSAGE FROM OUR CEO AND FOUNDER"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan, massa non consectetur condimentum, diam arcu tristique nibh, nec egestas diam elit at nulla. Suspendisse potenti. In non lacinia risus."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, "Nulla sit amet vestibulum magna, eget pulvinar libero. Vivamus in diam turpis. In condimentum maximus tristique"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, " Pellentesque lorem augue, fermentum orci.")), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, "Read More")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_about_pic6_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  })));
}

_s(About, "LXUOg/snDasEn4Ak6nmobhf5DgQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXQuanMiXSwibmFtZXMiOlsiQWJvdXQiLCJiZWVySW1hZ2UiLCJ1c2VSZWYiLCJjb250ZW50IiwibGFnZXJCZyIsInRsIiwiVGltZWxpbmVMaXRlIiwidXNlRWZmZWN0IiwiZnJvbSIsIngiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZU91dCIsInkiLCJiYWNrZ3JvdW5kIiwicmVxdWlyZSIsImVsIiwiQmFja2dyb3VuZCIsIkJlZXIxIiwiR2xvYmUiLCJQZXJzb24xIiwiUGVyc29uMiIsIlBlcnNvbjMiLCJQZXJzb240IiwiUGVyc29uNSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUM5QixNQUFJQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF0QjtBQUNBLE1BQUlDLE9BQU8sR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBSUUsT0FBTyxHQUFHRixvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFFQSxNQUFJRyxFQUFFLEdBQUcsSUFBSUMsa0RBQUosRUFBVDtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsTUFBRSxDQUFDRyxJQUFILENBQVFMLE9BQVIsRUFBaUIsR0FBakIsRUFBc0I7QUFBRU0sT0FBQyxFQUFFLENBQUMsSUFBTjtBQUFZQyxVQUFJLEVBQUVDLDRDQUFNLENBQUNDO0FBQXpCLEtBQXRCO0FBQ0FQLE1BQUUsQ0FBQ0csSUFBSCxDQUFRUCxTQUFSLEVBQW1CLEdBQW5CLEVBQXdCO0FBQUVZLE9BQUMsRUFBRSxJQUFMO0FBQVdILFVBQUksRUFBRUMsNENBQU0sQ0FBQ0M7QUFBeEIsS0FBeEI7QUFDQVAsTUFBRSxDQUFDRyxJQUFILENBQVFK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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxR0FKRixDQTVCRixDQURGLEVBdUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0F2Q0YsQ0ExQ0YsRUFxRkU7QUFBUyxhQUFTLEVBQUMsWUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOE1BREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVIQVBGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFYRixDQUZGLEVBZUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRixDQURGLEVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRUMsZ0ZBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbEJGLENBckZGLEVBMkdFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNHRixDQWJGLENBREY7QUE2SEQ7O0dBMUl1QnhCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuZmE1OGRlZmUxNmM1NWVhYzUxNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XHJcbmltcG9ydCBHbG9iZSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWFib3V0LXBpYzEucG5nXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUGVyc29uMSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWFib3V0LXBpYzIuanBnXCI7XHJcbmltcG9ydCBQZXJzb24yIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2NyYWZ0YmVlcjItYWJvdXQtcGljMy5qcGdcIjtcclxuaW1wb3J0IFBlcnNvbjMgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvY3JhZnRiZWVyMi1hYm91dC1waWM0LmpwZ1wiO1xyXG5pbXBvcnQgUGVyc29uNCBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWFib3V0LXBpYzUuanBnXCI7XHJcbmltcG9ydCBCZWVyMSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLXN1YmhlYWRlci1waWMxLnBuZ1wiO1xyXG5pbXBvcnQgUGVyc29uNSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWFib3V0LXBpYzYucG5nXCI7XHJcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2NyYWZ0YmVlcjItc2xpZGVyLXBpYzIucG5nXCI7XHJcblxyXG5pbXBvcnQgeyBUd2Vlbk1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjMgfSBmcm9tIFwiZ3NhcFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XHJcbiAgbGV0IGJlZXJJbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY29udGVudCA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgbGFnZXJCZyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdGwuZnJvbShjb250ZW50LCAxLjIsIHsgeDogLTEyODAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0pO1xyXG4gICAgdGwuZnJvbShiZWVySW1hZ2UsIDEuMiwgeyB5OiAxMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9KTtcclxuICAgIHRsLmZyb20obGFnZXJCZywgMS4yLCB7IHg6IC0xMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ZZXNldmErT25lJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3cmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgIFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvY3JhZnRiZWVyMi1iZy5wbmdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJvdXRfY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0X3NlYzFcIj5cclxuICAgICAgICAgIDxkaXYgcmVmPXsoZWwpID0+IChjb250ZW50ID0gZWwpfT5cclxuICAgICAgICAgICAgPGgxPkEgRkVXIFdPUkRTIEFCT1VUIFVTPC9oMT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIHJlZj17KGVsKSA9PiAobGFnZXJCZyA9IGVsKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYm91dF9iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICBzcmM9e0JhY2tncm91bmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgcmVmPXsoZWwpID0+IChiZWVySW1hZ2UgPSBlbCl9IGNsYXNzTmFtZT1cImFib3V0X2ltZzFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e0JlZXIxfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0X3NlYzJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtHbG9iZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlN3ZWRpc2ggVHJhZGl0aW9uIFNpbmNlIDE5Mzg8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBhYyBkdWkgdmVsIGR1aSB2dWxwdXRhdGUgY29uc2VjdGV0dXIuIE1hdXJpcyBhY2N1bXNhbixcclxuICAgICAgICAgICAgICAgIG1hc3NhIG5vbiBjb25zZWN0ZXR1ciBjb25kaW1lbnR1bSwgZGlhbSBhcmN1IHRyaXN0aXF1ZSBuaWJoLCBuZWNcclxuICAgICAgICAgICAgICAgIGVnZXN0YXMgZGlhbSBlbGl0IGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBub24gbGFjaW5pYVxyXG4gICAgICAgICAgICAgICAgcmlzdXMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgTnVsbGEgc2l0IGFtZXQgdmVzdGlidWx1bSBtYWduYSwgZWdldCBwdWx2aW5hciBsaWJlcm8uIFZpdmFtdXNcclxuICAgICAgICAgICAgICAgIGluIGRpYW0gdHVycGlzLiBJbiBjb25kaW1lbnR1bSBtYXhpbXVzIHRyaXN0aXF1ZVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD4gUGVsbGVudGVzcXVlIGxvcmVtIGF1Z3VlLCBmZXJtZW50dW0gb3JjaS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uPlJlYWQgTW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImFib3V0X3NlYzNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfc2VjM2ltZ3NcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17UGVyc29uMX0gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5QSEFSRVRSQSBPRElPPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMT5LRVZJTiBQRVJSWTwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgc2VkIGlhY3VsaXMgZG9sb3IsIG5vbiBjb25ndWUgbGlndWxhLiBNYWVjZW5hc1xyXG4gICAgICAgICAgICAgICAgaW1wZXJkaWV0IGFudGUgZWdldCBoZW5kcmVyaXQgbWFnbmEuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17UGVyc29uMn0gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5QSEFSRVRSQSBPRElPPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMT5LRVZJTiBQRVJSWTwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgc2VkIGlhY3VsaXMgZG9sb3IsIG5vbiBjb25ndWUgbGlndWxhLiBNYWVjZW5hc1xyXG4gICAgICAgICAgICAgICAgaW1wZXJkaWV0IGFudGUgZWdldCBoZW5kcmVyaXQgbWFnbmEuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17UGVyc29uM30gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5QSEFSRVRSQSBPRElPPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMT5LRVZJTiBQRVJSWTwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgc2VkIGlhY3VsaXMgZG9sb3IsIG5vbiBjb25ndWUgbGlndWxhLiBNYWVjZW5hc1xyXG4gICAgICAgICAgICAgICAgaW1wZXJkaWV0IGFudGUgZWdldCBoZW5kcmVyaXQgbWFnbmEuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17UGVyc29uNH0gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5QSEFSRVRSQSBPRElPPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMT5LRVZJTiBQRVJSWTwvaDE+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgc2VkIGlhY3VsaXMgZG9sb3IsIG5vbiBjb25ndWUgbGlndWxhLiBNYWVjZW5hc1xyXG4gICAgICAgICAgICAgICAgaW1wZXJkaWV0IGFudGUgZWdldCBoZW5kcmVyaXQgbWFnbmEuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF9zZWMzYnRuXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24+Q09OVEFDVCBXSVRIIFVTPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXRfc2VjNFwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkEgTUVTU0FHRSBGUk9NIE9VUiBDRU8gQU5EIEZPVU5ERVI8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBhYyBkdWkgdmVsIGR1aSB2dWxwdXRhdGUgY29uc2VjdGV0dXIuIE1hdXJpcyBhY2N1bXNhbixcclxuICAgICAgICAgICAgICAgIG1hc3NhIG5vbiBjb25zZWN0ZXR1ciBjb25kaW1lbnR1bSwgZGlhbSBhcmN1IHRyaXN0aXF1ZSBuaWJoLCBuZWNcclxuICAgICAgICAgICAgICAgIGVnZXN0YXMgZGlhbSBlbGl0IGF0IG51bGxhLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbiBub24gbGFjaW5pYVxyXG4gICAgICAgICAgICAgICAgcmlzdXMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgTnVsbGEgc2l0IGFtZXQgdmVzdGlidWx1bSBtYWduYSwgZWdldCBwdWx2aW5hciBsaWJlcm8uIFZpdmFtdXNcclxuICAgICAgICAgICAgICAgIGluIGRpYW0gdHVycGlzLiBJbiBjb25kaW1lbnR1bSBtYXhpbXVzIHRyaXN0aXF1ZVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD4gUGVsbGVudGVzcXVlIGxvcmVtIGF1Z3VlLCBmZXJtZW50dW0gb3JjaS48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uPlJlYWQgTW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17UGVyc29uNX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9