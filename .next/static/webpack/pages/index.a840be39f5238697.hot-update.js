"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ConnectWallet/index.tsx":
/*!************************************************!*\
  !*** ./src/components/ConnectWallet/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BasciConnect\": function() { return /* binding */ BasciConnect; },\n/* harmony export */   \"CustomConnect\": function() { return /* binding */ CustomConnect; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\nvar CustomConnect = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.ConnectButton.Custom, {\n        children: function(param) {\n            var account = param.account, chain = param.chain, openAccountModal = param.openAccountModal, openChainModal = param.openChainModal, openConnectModal = param.openConnectModal, authenticationStatus = param.authenticationStatus, mounted = param.mounted;\n            // Note: If your app doesn't use authentication, you\n            // can remove all 'authenticationStatus' checks\n            var ready = mounted && authenticationStatus !== \"loading\";\n            var connected = ready && account && chain && (!authenticationStatus || authenticationStatus === \"authenticated\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, !ready && {\n                \"aria-hidden\": true,\n                style: {\n                    opacity: 0,\n                    pointerEvents: \"none\",\n                    userSelect: \"none\"\n                }\n            }), {\n                children: function() {\n                    if (!connected) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-400\",\n                            onClick: openConnectModal,\n                            type: \"button\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaWallet, {}, void 0, false, {\n                                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 41\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 37\n                        }, _this);\n                    }\n                    if (chain.unsupported) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openChainModal,\n                            type: \"button\",\n                            children: \"Wrong network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 37\n                        }, _this);\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openAccountModal,\n                            type: \"button\",\n                            children: [\n                                account.displayName,\n                                account.displayBalance ? \" (\".concat(account.displayBalance, \")\") : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 37\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 33\n                    }, _this);\n                }()\n            }), void 0, false, {\n                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 21\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_c = CustomConnect;\nvar BasciConnect = function(param) {\n    var label = param.label;\n    // return <ConnectButton label=\"label\" chainStatus=\"none\" accountStatus=\"address\"></ConnectButton>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomConnect, {}, void 0, false, {\n        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n        lineNumber: 67,\n        columnNumber: 12\n    }, _this);\n};\n_c1 = BasciConnect;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomConnect\");\n$RefreshReg$(_c1, \"BasciConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db25uZWN0V2FsbGV0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQXVEO0FBR2I7QUFFbkMsSUFBTUUsYUFBYSxHQUFHLFdBQU07SUFDL0IscUJBQ0ksOERBQUNGLHdFQUFvQjtrQkFDaEIsZ0JBUUs7Z0JBUEZJLE9BQU8sU0FBUEEsT0FBTyxFQUNQQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsZ0JBQWdCLFNBQWhCQSxnQkFBZ0IsRUFDaEJDLGNBQWMsU0FBZEEsY0FBYyxFQUNkQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUNoQkMsb0JBQW9CLFNBQXBCQSxvQkFBb0IsRUFDcEJDLE9BQU8sU0FBUEEsT0FBTztZQUVQLG9EQUFvRDtZQUNwRCwrQ0FBK0M7WUFDL0MsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLElBQUlELG9CQUFvQixLQUFLLFNBQVM7WUFDM0QsSUFBTUcsU0FBUyxHQUNYRCxLQUFLLElBQUlQLE9BQU8sSUFBSUMsS0FBSyxJQUFJLENBQUMsQ0FBQ0ksb0JBQW9CLElBQUlBLG9CQUFvQixLQUFLLGVBQWUsQ0FBQztZQUNwRyxxQkFDSSw4REFBQ0ksS0FBRywwS0FDSyxDQUFDRixLQUFLLElBQUk7Z0JBQ1gsYUFBYSxFQUFFLElBQUk7Z0JBQ25CRyxLQUFLLEVBQUU7b0JBQ0hDLE9BQU8sRUFBRSxDQUFDO29CQUNWQyxhQUFhLEVBQUUsTUFBTTtvQkFDckJDLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjthQUNKOzBCQUVBLFdBQU87b0JBQ0osSUFBSSxDQUFDTCxTQUFTLEVBQUU7d0JBQ1oscUJBQ0ksOERBQUNNLFFBQU07NEJBQUNDLFNBQVMsRUFBQyxZQUFZOzRCQUFDQyxPQUFPLEVBQUVaLGdCQUFnQjs0QkFBRWEsSUFBSSxFQUFDLFFBQVE7c0NBQ25FLDRFQUFDcEIsb0RBQVE7Ozs7cUNBQUc7Ozs7O2lDQUNQLENBQ1g7cUJBQ0w7b0JBQ0QsSUFBSUksS0FBSyxDQUFDaUIsV0FBVyxFQUFFO3dCQUNuQixxQkFDSSw4REFBQ0osUUFBTTs0QkFBQ0UsT0FBTyxFQUFFYixjQUFjOzRCQUFFYyxJQUFJLEVBQUMsUUFBUTtzQ0FBQyxlQUUvQzs7Ozs7aUNBQVMsQ0FDWDtxQkFDTDtvQkFDRCxxQkFDSSw4REFBQ1IsS0FBRzt3QkFBQ00sU0FBUyxFQUFDLFNBQVM7a0NBQ3BCLDRFQUFDRCxRQUFNOzRCQUFDRSxPQUFPLEVBQUVkLGdCQUFnQjs0QkFBRWUsSUFBSSxFQUFDLFFBQVE7O2dDQUMzQ2pCLE9BQU8sQ0FBQ21CLFdBQVc7Z0NBQ25CbkIsT0FBTyxDQUFDb0IsY0FBYyxHQUFHLElBQUcsQ0FBeUIsTUFBQyxDQUF4QnBCLE9BQU8sQ0FBQ29CLGNBQWMsRUFBQyxHQUFDLENBQUMsR0FBRyxFQUFFOzs7Ozs7aUNBQ3hEOzs7Ozs2QkFDUCxDQUNSO2lCQUNMLEVBQUc7Ozs7O3FCQUNGLENBQ1I7U0FDTDs7Ozs7YUFDa0IsQ0FDekI7Q0FDTCxDQUFDO0FBekRXdEIsS0FBQUEsYUFBYTtBQTJEbkIsSUFBTXVCLFlBQVksR0FBRyxnQkFBYTtRQUFYQyxLQUFLLFNBQUxBLEtBQUs7SUFDL0IsbUdBQW1HO0lBQ25HLHFCQUFPLDhEQUFDeEIsYUFBYTs7OzthQUFpQjtDQUN6QyxDQUFDO0FBSFd1QixNQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQvaW5kZXgudHN4PzllZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgRmFXYWxsZXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZXhwb3J0IGNvbnN0IEN1c3RvbUNvbm5lY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbm5lY3RCdXR0b24uQ3VzdG9tPlxuICAgICAgICAgICAgeyh7XG4gICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgICAgICBvcGVuQWNjb3VudE1vZGFsLFxuICAgICAgICAgICAgICAgIG9wZW5DaGFpbk1vZGFsLFxuICAgICAgICAgICAgICAgIG9wZW5Db25uZWN0TW9kYWwsXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMsXG4gICAgICAgICAgICAgICAgbW91bnRlZCxcbiAgICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBJZiB5b3VyIGFwcCBkb2Vzbid0IHVzZSBhdXRoZW50aWNhdGlvbiwgeW91XG4gICAgICAgICAgICAgICAgLy8gY2FuIHJlbW92ZSBhbGwgJ2F1dGhlbnRpY2F0aW9uU3RhdHVzJyBjaGVja3NcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkeSA9IG1vdW50ZWQgJiYgYXV0aGVudGljYXRpb25TdGF0dXMgIT09IFwibG9hZGluZ1wiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5ICYmIGFjY291bnQgJiYgY2hhaW4gJiYgKCFhdXRoZW50aWNhdGlvblN0YXR1cyB8fCBhdXRoZW50aWNhdGlvblN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4oIXJlYWR5ICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTQwMFwiIG9uQ2xpY2s9e29wZW5Db25uZWN0TW9kYWx9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFXYWxsZXQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhaW4udW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3BlbkNoYWluTW9kYWx9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXcm9uZyBuZXR3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5BY2NvdW50TW9kYWx9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kaXNwbGF5QmFsYW5jZSA/IGAgKCR7YWNjb3VudC5kaXNwbGF5QmFsYW5jZX0pYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICA8L0Nvbm5lY3RCdXR0b24uQ3VzdG9tPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgQmFzY2lDb25uZWN0ID0gKHtsYWJlbH0pID0+IHtcbiAgICAvLyByZXR1cm4gPENvbm5lY3RCdXR0b24gbGFiZWw9XCJsYWJlbFwiIGNoYWluU3RhdHVzPVwibm9uZVwiIGFjY291bnRTdGF0dXM9XCJhZGRyZXNzXCI+PC9Db25uZWN0QnV0dG9uPjtcbiAgICByZXR1cm4gPEN1c3RvbUNvbm5lY3Q+PC9DdXN0b21Db25uZWN0PlxufTtcbiJdLCJuYW1lcyI6WyJDb25uZWN0QnV0dG9uIiwiRmFXYWxsZXQiLCJDdXN0b21Db25uZWN0IiwiQ3VzdG9tIiwiYWNjb3VudCIsImNoYWluIiwib3BlbkFjY291bnRNb2RhbCIsIm9wZW5DaGFpbk1vZGFsIiwib3BlbkNvbm5lY3RNb2RhbCIsImF1dGhlbnRpY2F0aW9uU3RhdHVzIiwibW91bnRlZCIsInJlYWR5IiwiY29ubmVjdGVkIiwiZGl2Iiwic3R5bGUiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsInVzZXJTZWxlY3QiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidHlwZSIsInVuc3VwcG9ydGVkIiwiZGlzcGxheU5hbWUiLCJkaXNwbGF5QmFsYW5jZSIsIkJhc2NpQ29ubmVjdCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ConnectWallet/index.tsx\n"));

/***/ })

});