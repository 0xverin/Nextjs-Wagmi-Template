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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BasciConnect\": function() { return /* binding */ BasciConnect; },\n/* harmony export */   \"CustomConnect\": function() { return /* binding */ CustomConnect; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n\n\nvar _this = undefined;\n\n\n\n\nvar CustomConnect = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.ConnectButton.Custom, {\n        children: function(param) {\n            var account = param.account, chain = param.chain, openAccountModal = param.openAccountModal, openChainModal = param.openChainModal, openConnectModal = param.openConnectModal, authenticationStatus = param.authenticationStatus, mounted = param.mounted;\n            // Note: If your app doesn't use authentication, you\n            // can remove all 'authenticationStatus' checks\n            var ready = mounted && authenticationStatus !== \"loading\";\n            var connected = ready && account && chain && (!authenticationStatus || authenticationStatus === \"authenticated\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, !ready && {\n                \"aria-hidden\": true,\n                style: {\n                    opacity: 0,\n                    pointerEvents: \"none\",\n                    userSelect: \"none\"\n                }\n            }), {\n                children: function() {\n                    if (!connected) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-400\",\n                            onClick: openConnectModal,\n                            type: \"button\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaWallet, {}, void 0, false, {\n                                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 41\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 37\n                        }, _this);\n                    }\n                    if (chain.unsupported) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openChainModal,\n                            type: \"button\",\n                            children: \"Wrong network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 37\n                        }, _this);\n                    }\n                    var _name;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            gap: 12\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: openChainModal,\n                                style: {\n                                    display: \"flex\",\n                                    alignItems: \"center\"\n                                },\n                                type: \"button\",\n                                children: [\n                                    chain.hasIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            background: chain.iconBackground,\n                                            width: 12,\n                                            height: 12,\n                                            borderRadius: 999,\n                                            overflow: \"hidden\",\n                                            marginRight: 4\n                                        },\n                                        children: chain.iconUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            alt: (_name = chain.name) !== null && _name !== void 0 ? _name : \"Chain icon\",\n                                            src: chain.iconUrl,\n                                            width: 12,\n                                            height: 12\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 53\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 45\n                                    }, _this),\n                                    chain.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: openAccountModal,\n                                type: \"button\",\n                                children: [\n                                    account.displayName,\n                                    account.displayBalance ? \" (\".concat(account.displayBalance, \")\") : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 37\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 33\n                    }, _this);\n                }()\n            }), void 0, false, {\n                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 21\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, _this);\n};\n_c = CustomConnect;\nvar BasciConnect = function(param) {\n    var label = param.label;\n    // return <ConnectButton label=\"label\" chainStatus=\"none\" accountStatus=\"address\"></ConnectButton>;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomConnect, {}, void 0, false, {\n        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n        lineNumber: 95,\n        columnNumber: 12\n    }, _this);\n};\n_c1 = BasciConnect;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomConnect\");\n$RefreshReg$(_c1, \"BasciConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db25uZWN0V2FsbGV0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBdUQ7QUFDeEI7QUFFVztBQUVuQyxJQUFNRyxhQUFhLEdBQUcsV0FBTTtJQUMvQixxQkFDSSw4REFBQ0gsd0VBQW9CO2tCQUNoQixnQkFRSztnQkFQRkssT0FBTyxTQUFQQSxPQUFPLEVBQ1BDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUNoQkMsY0FBYyxTQUFkQSxjQUFjLEVBQ2RDLGdCQUFnQixTQUFoQkEsZ0JBQWdCLEVBQ2hCQyxvQkFBb0IsU0FBcEJBLG9CQUFvQixFQUNwQkMsT0FBTyxTQUFQQSxPQUFPO1lBRVAsb0RBQW9EO1lBQ3BELCtDQUErQztZQUMvQyxJQUFNQyxLQUFLLEdBQUdELE9BQU8sSUFBSUQsb0JBQW9CLEtBQUssU0FBUztZQUMzRCxJQUFNRyxTQUFTLEdBQ1hELEtBQUssSUFBSVAsT0FBTyxJQUFJQyxLQUFLLElBQUksQ0FBQyxDQUFDSSxvQkFBb0IsSUFBSUEsb0JBQW9CLEtBQUssZUFBZSxDQUFDO1lBQ3BHLHFCQUNJLDhEQUFDSSxLQUFHLDBLQUNLLENBQUNGLEtBQUssSUFBSTtnQkFDWCxhQUFhLEVBQUUsSUFBSTtnQkFDbkJHLEtBQUssRUFBRTtvQkFDSEMsT0FBTyxFQUFFLENBQUM7b0JBQ1ZDLGFBQWEsRUFBRSxNQUFNO29CQUNyQkMsVUFBVSxFQUFFLE1BQU07aUJBQ3JCO2FBQ0o7MEJBRUEsV0FBTztvQkFDSixJQUFJLENBQUNMLFNBQVMsRUFBRTt3QkFDWixxQkFDSSw4REFBQ00sUUFBTTs0QkFBQ0MsU0FBUyxFQUFDLFlBQVk7NEJBQUNDLE9BQU8sRUFBRVosZ0JBQWdCOzRCQUFFYSxJQUFJLEVBQUMsUUFBUTtzQ0FDbkUsNEVBQUNwQixvREFBUTs7OztxQ0FBRzs7Ozs7aUNBQ1AsQ0FDWDtxQkFDTDtvQkFDRCxJQUFJSSxLQUFLLENBQUNpQixXQUFXLEVBQUU7d0JBQ25CLHFCQUNJLDhEQUFDSixRQUFNOzRCQUFDRSxPQUFPLEVBQUViLGNBQWM7NEJBQUVjLElBQUksRUFBQyxRQUFRO3NDQUFDLGVBRS9DOzs7OztpQ0FBUyxDQUNYO3FCQUNMO3dCQXFCZ0NoQixLQUFVO29CQXBCM0MscUJBQ0ksOERBQUNRLEtBQUc7d0JBQUNDLEtBQUssRUFBRTs0QkFBRVMsT0FBTyxFQUFFLE1BQU07NEJBQUVDLEdBQUcsRUFBRSxFQUFFO3lCQUFFOzswQ0FDcEMsOERBQUNOLFFBQU07Z0NBQ0hFLE9BQU8sRUFBRWIsY0FBYztnQ0FDdkJPLEtBQUssRUFBRTtvQ0FBRVMsT0FBTyxFQUFFLE1BQU07b0NBQUVFLFVBQVUsRUFBRSxRQUFRO2lDQUFFO2dDQUNoREosSUFBSSxFQUFDLFFBQVE7O29DQUVaaEIsS0FBSyxDQUFDcUIsT0FBTyxrQkFDViw4REFBQ2IsS0FBRzt3Q0FDQUMsS0FBSyxFQUFFOzRDQUNIYSxVQUFVLEVBQUV0QixLQUFLLENBQUN1QixjQUFjOzRDQUNoQ0MsS0FBSyxFQUFFLEVBQUU7NENBQ1RDLE1BQU0sRUFBRSxFQUFFOzRDQUNWQyxZQUFZLEVBQUUsR0FBRzs0Q0FDakJDLFFBQVEsRUFBRSxRQUFROzRDQUNsQkMsV0FBVyxFQUFFLENBQUM7eUNBQ2pCO2tEQUVBNUIsS0FBSyxDQUFDNkIsT0FBTyxrQkFDViw4REFBQ2xDLG1EQUFLOzRDQUNGbUMsR0FBRyxFQUFFOUIsQ0FBQUEsS0FBVSxHQUFWQSxLQUFLLENBQUMrQixJQUFJLGNBQVYvQixLQUFVLGNBQVZBLEtBQVUsR0FBSSxZQUFZOzRDQUMvQmdDLEdBQUcsRUFBRWhDLEtBQUssQ0FBQzZCLE9BQU87NENBQ2xCTCxLQUFLLEVBQUUsRUFBRTs0Q0FDVEMsTUFBTSxFQUFFLEVBQUU7Ozs7O2lEQUNaOzs7Ozs2Q0FFSjtvQ0FFVHpCLEtBQUssQ0FBQytCLElBQUk7Ozs7OztxQ0FDTjswQ0FDVCw4REFBQ2xCLFFBQU07Z0NBQUNFLE9BQU8sRUFBRWQsZ0JBQWdCO2dDQUFFZSxJQUFJLEVBQUMsUUFBUTs7b0NBQzNDakIsT0FBTyxDQUFDa0MsV0FBVztvQ0FDbkJsQyxPQUFPLENBQUNtQyxjQUFjLEdBQUcsSUFBRyxDQUF5QixNQUFDLENBQXhCbkMsT0FBTyxDQUFDbUMsY0FBYyxFQUFDLEdBQUMsQ0FBQyxHQUFHLEVBQUU7Ozs7OztxQ0FDeEQ7Ozs7Ozs2QkFDUCxDQUNSO2lCQUNMLEVBQUc7Ozs7O3FCQUNGLENBQ1I7U0FDTDs7Ozs7YUFDa0IsQ0FDekI7Q0FDTCxDQUFDO0FBckZXckMsS0FBQUEsYUFBYTtBQXVGbkIsSUFBTXNDLFlBQVksR0FBRyxnQkFBYTtRQUFYQyxLQUFLLFNBQUxBLEtBQUs7SUFDL0IsbUdBQW1HO0lBQ25HLHFCQUFPLDhEQUFDdkMsYUFBYTs7OzthQUFpQjtDQUN6QyxDQUFDO0FBSFdzQyxNQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQvaW5kZXgudHN4PzllZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29ubmVjdEJ1dHRvbiB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgRmFXYWxsZXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuZXhwb3J0IGNvbnN0IEN1c3RvbUNvbm5lY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbm5lY3RCdXR0b24uQ3VzdG9tPlxuICAgICAgICAgICAgeyh7XG4gICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgICAgICBvcGVuQWNjb3VudE1vZGFsLFxuICAgICAgICAgICAgICAgIG9wZW5DaGFpbk1vZGFsLFxuICAgICAgICAgICAgICAgIG9wZW5Db25uZWN0TW9kYWwsXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25TdGF0dXMsXG4gICAgICAgICAgICAgICAgbW91bnRlZCxcbiAgICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBJZiB5b3VyIGFwcCBkb2Vzbid0IHVzZSBhdXRoZW50aWNhdGlvbiwgeW91XG4gICAgICAgICAgICAgICAgLy8gY2FuIHJlbW92ZSBhbGwgJ2F1dGhlbnRpY2F0aW9uU3RhdHVzJyBjaGVja3NcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkeSA9IG1vdW50ZWQgJiYgYXV0aGVudGljYXRpb25TdGF0dXMgIT09IFwibG9hZGluZ1wiO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5lY3RlZCA9XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5ICYmIGFjY291bnQgJiYgY2hhaW4gJiYgKCFhdXRoZW50aWNhdGlvblN0YXR1cyB8fCBhdXRoZW50aWNhdGlvblN0YXR1cyA9PT0gXCJhdXRoZW50aWNhdGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4oIXJlYWR5ICYmIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTZWxlY3Q6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTQwMFwiIG9uQ2xpY2s9e29wZW5Db25uZWN0TW9kYWx9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFXYWxsZXQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhaW4udW5zdXBwb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3BlbkNoYWluTW9kYWx9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXcm9uZyBuZXR3b3JrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZ2FwOiAxMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuQ2hhaW5Nb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbi5oYXNJY29uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBjaGFpbi5pY29uQmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDk5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbi5pY29uVXJsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtjaGFpbi5uYW1lID8/IFwiQ2hhaW4gaWNvblwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NoYWluLmljb25Vcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuQWNjb3VudE1vZGFsfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjY291bnQuZGlzcGxheUJhbGFuY2UgPyBgICgke2FjY291bnQuZGlzcGxheUJhbGFuY2V9KWAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPC9Db25uZWN0QnV0dG9uLkN1c3RvbT5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEJhc2NpQ29ubmVjdCA9ICh7bGFiZWx9KSA9PiB7XG4gICAgLy8gcmV0dXJuIDxDb25uZWN0QnV0dG9uIGxhYmVsPVwibGFiZWxcIiBjaGFpblN0YXR1cz1cIm5vbmVcIiBhY2NvdW50U3RhdHVzPVwiYWRkcmVzc1wiPjwvQ29ubmVjdEJ1dHRvbj47XG4gICAgcmV0dXJuIDxDdXN0b21Db25uZWN0PjwvQ3VzdG9tQ29ubmVjdD5cbn07XG4iXSwibmFtZXMiOlsiQ29ubmVjdEJ1dHRvbiIsIkltYWdlIiwiRmFXYWxsZXQiLCJDdXN0b21Db25uZWN0IiwiQ3VzdG9tIiwiYWNjb3VudCIsImNoYWluIiwib3BlbkFjY291bnRNb2RhbCIsIm9wZW5DaGFpbk1vZGFsIiwib3BlbkNvbm5lY3RNb2RhbCIsImF1dGhlbnRpY2F0aW9uU3RhdHVzIiwibW91bnRlZCIsInJlYWR5IiwiY29ubmVjdGVkIiwiZGl2Iiwic3R5bGUiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsInVzZXJTZWxlY3QiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidHlwZSIsInVuc3VwcG9ydGVkIiwiZGlzcGxheSIsImdhcCIsImFsaWduSXRlbXMiLCJoYXNJY29uIiwiYmFja2dyb3VuZCIsImljb25CYWNrZ3JvdW5kIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsIm1hcmdpblJpZ2h0IiwiaWNvblVybCIsImFsdCIsIm5hbWUiLCJzcmMiLCJkaXNwbGF5TmFtZSIsImRpc3BsYXlCYWxhbmNlIiwiQmFzY2lDb25uZWN0IiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ConnectWallet/index.tsx\n"));

/***/ })

});