webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sidebar */ "./components/sidebar.js");
/* harmony import */ var _public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/assets/craftbeer2-subheader-pic1.png */ "./public/assets/craftbeer2-subheader-pic1.png");
/* harmony import */ var _public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_assets_craftbeer2_contact_icon1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/assets/craftbeer2-contact-icon1.png */ "./public/assets/craftbeer2-contact-icon1.png");
/* harmony import */ var _public_assets_craftbeer2_contact_icon1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_contact_icon1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_assets_craftbeer2_contact_icon2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/assets/craftbeer2-contact-icon2.png */ "./public/assets/craftbeer2-contact-icon2.png");
/* harmony import */ var _public_assets_craftbeer2_contact_icon2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_contact_icon2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_assets_craftbeer2_contact_icon3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/assets/craftbeer2-contact-icon3.png */ "./public/assets/craftbeer2-contact-icon3.png");
/* harmony import */ var _public_assets_craftbeer2_contact_icon3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_contact_icon3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_assets_craftbeer2_contact_icon4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/assets/craftbeer2-contact-icon4.png */ "./public/assets/craftbeer2-contact-icon4.png");
/* harmony import */ var _public_assets_craftbeer2_contact_icon4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_assets_craftbeer2_contact_icon4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "C:\\Users\\jremy\\OneDrive\\Desktop\\becraft\\pages\\contact.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function Contact() {
  _s();

  var beerImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var content = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tl = new gsap__WEBPACK_IMPORTED_MODULE_10__["TimelineLite"]();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    tl.from(content, 1.2, {
      x: -1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_10__["Power3"].easeOut
    });
    tl.from(beerImage, 1.2, {
      y: 1280,
      ease: gsap__WEBPACK_IMPORTED_MODULE_10__["Power3"].easeOut
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Barlow&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx(_components_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "contact_sec1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    ref: function ref(el) {
      return content = el;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, "OUR HISTORY & TRADITION")), __jsx("div", {
    ref: function ref(el) {
      return beerImage = el;
    },
    className: "contact_img1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_subheader_pic1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }))), __jsx("section", {
    className: "contact_sec2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "LEVEL 13, 2 ELIZABETH ST, MELBOURNE, VICTORIA 3000, AUSTRALIA"), __jsx("div", {
    className: "contact_icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_contact_icon1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "E-MAIL"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "noreply@envato.com")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_contact_icon2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "PHONE"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, "+61 383 766 284")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_contact_icon3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "OPENING HOURS"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, "Mon - Sat: 9 AM - 6 PM")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_assets_craftbeer2_contact_icon4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "SOCIAL MEDIA"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "Facebok"), " & ", __jsx("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 43
    }
  }, "Youtube"))))), __jsx("section", {
    className: "contact_sec3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, "SEND US A MESSAGE"), __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("input", {
    placeholder: "Your name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx("input", {
    placeholder: "Your e-mail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), __jsx("input", {
    placeholder: "Subject",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }), __jsx("textarea", {
    placeholder: "Message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, "Send A Message"))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  })));
}

_s(Contact, "y9iQXToy83iLaurT6Ahi7s6A9hQ=");

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

$RefreshReg$(_c, "Contact");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC5qcyJdLCJuYW1lcyI6WyJDb250YWN0IiwiYmVlckltYWdlIiwidXNlUmVmIiwiY29udGVudCIsInRsIiwiVGltZWxpbmVMaXRlIiwidXNlRWZmZWN0IiwiZnJvbSIsIngiLCJlYXNlIiwiUG93ZXIzIiwiZWFzZU91dCIsInkiLCJiYWNrZ3JvdW5kIiwicmVxdWlyZSIsImVsIiwiQmVlcjEiLCJFbWFpbCIsIlBob25lIiwiQ2xvY2siLCJTb2NpYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2pCLE1BQUlDLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFFQSxNQUFJRSxFQUFFLEdBQUcsSUFBSUMsa0RBQUosRUFBVDtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsTUFBRSxDQUFDRyxJQUFILENBQVFKLE9BQVIsRUFBaUIsR0FBakIsRUFBc0I7QUFBRUssT0FBQyxFQUFFLENBQUMsSUFBTjtBQUFZQyxVQUFJLEVBQUVDLDRDQUFNLENBQUNDO0FBQXpCLEtBQXRCO0FBQ0FQLE1BQUUsQ0FBQ0csSUFBSCxDQUFRTixTQUFSLEVBQW1CLEdBQW5CLEVBQXdCO0FBQUVXLE9BQUMsRUFBRSxJQUFMO0FBQVdILFVBQUksRUFBRUMsNENBQU0sQ0FBQ0M7QUFBeEIsS0FBeEI7QUFDRCxHQUhRLENBQVQ7QUFLQSxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLGtFQURQO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixTQUM0QjtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFENUIsQ0FIRixDQWhCRixDQUZGLENBZkYsRUEwQ0U7QUFBUyxhQUFTLEVBQUMsY0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxlQUFXLEVBQUMsV0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTyxlQUFXLEVBQUMsYUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTyxlQUFXLEVBQUMsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUU7QUFBVSxlQUFXLEVBQUMsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRixDQUZGLENBMUNGLEVBb0RFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBERixDQWJGLENBREY7QUFzRUQ7O0dBakZRcEIsTzs7S0FBQUEsTztBQW1GTUEsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC40MTE1ZDIyODc5Yjg2MThhMmFmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZGViYXJcIjtcclxuaW1wb3J0IEJlZXIxIGZyb20gXCIuLi9wdWJsaWMvYXNzZXRzL2NyYWZ0YmVlcjItc3ViaGVhZGVyLXBpYzEucG5nXCI7XHJcbmltcG9ydCBFbWFpbCBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWNvbnRhY3QtaWNvbjEucG5nXCI7XHJcbmltcG9ydCBQaG9uZSBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWNvbnRhY3QtaWNvbjIucG5nXCI7XHJcbmltcG9ydCBDbG9jayBmcm9tIFwiLi4vcHVibGljL2Fzc2V0cy9jcmFmdGJlZXIyLWNvbnRhY3QtaWNvbjMucG5nXCI7XHJcbmltcG9ydCBTb2NpYWwgZnJvbSBcIi4uL3B1YmxpYy9hc3NldHMvY3JhZnRiZWVyMi1jb250YWN0LWljb240LnBuZ1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xyXG5cclxuaW1wb3J0IHsgVHdlZW5NYXgsIFRpbWVsaW5lTGl0ZSwgUG93ZXIzIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgbGV0IGJlZXJJbWFnZSA9IHVzZVJlZihudWxsKTtcclxuICBsZXQgY29udGVudCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgbGV0IHRsID0gbmV3IFRpbWVsaW5lTGl0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdGwuZnJvbShjb250ZW50LCAxLjIsIHsgeDogLTEyODAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0pO1xyXG4gICAgdGwuZnJvbShiZWVySW1hZ2UsIDEuMiwgeyB5OiAxMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ZZXNldmErT25lJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYXJsb3cmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8U2lkZWJhciAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgIFwidXJsKFwiICsgYCR7cmVxdWlyZShcIi4uL3B1YmxpYy9hc3NldHMvY3JhZnRiZWVyMi1iZy5wbmdcIil9YCArIFwiKVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJvdXRfY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3Rfc2VjMVwiPlxyXG4gICAgICAgICAgPGRpdiByZWY9eyhlbCkgPT4gKGNvbnRlbnQgPSBlbCl9PlxyXG4gICAgICAgICAgICA8aDE+T1VSIEhJU1RPUlkgJiBUUkFESVRJT048L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHJlZj17KGVsKSA9PiAoYmVlckltYWdlID0gZWwpfSBjbGFzc05hbWU9XCJjb250YWN0X2ltZzFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e0JlZXIxfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3Rfc2VjMlwiPlxyXG4gICAgICAgICAgPGgxPkxFVkVMIDEzLCAyIEVMSVpBQkVUSCBTVCwgTUVMQk9VUk5FLCBWSUNUT1JJQSAzMDAwLCBBVVNUUkFMSUE8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X2ljb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e0VtYWlsfSAvPlxyXG4gICAgICAgICAgICAgIDxoMj5FLU1BSUw8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPm5vcmVwbHlAZW52YXRvLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e1Bob25lfSAvPlxyXG4gICAgICAgICAgICAgIDxoMj5QSE9ORTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+KzYxIDM4MyA3NjYgMjg0PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17Q2xvY2t9IC8+XHJcbiAgICAgICAgICAgICAgPGgyPk9QRU5JTkcgSE9VUlM8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPk1vbiAtIFNhdDogOSBBTSAtIDYgUE08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtTb2NpYWx9IC8+XHJcbiAgICAgICAgICAgICAgPGgyPlNPQ0lBTCBNRURJQTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkZhY2Vib2s8L2E+ICYgPGEgaHJlZj1cIiNcIj5Zb3V0dWJlPC9hPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdF9zZWMzXCI+XHJcbiAgICAgICAgICA8aDE+U0VORCBVUyBBIE1FU1NBR0U8L2gxPlxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIllvdXIgZS1tYWlsXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiU3ViamVjdFwiIC8+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8YnV0dG9uPlNlbmQgQSBNZXNzYWdlPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9