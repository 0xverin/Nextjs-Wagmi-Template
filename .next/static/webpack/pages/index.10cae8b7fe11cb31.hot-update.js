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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BasciConnect\": function() { return /* binding */ BasciConnect; },\n/* harmony export */   \"CustomConnect\": function() { return /* binding */ CustomConnect; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\n\n\nvar CustomConnect = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.ConnectButton.Custom, {\n        children: function(param) {\n            var account = param.account, chain = param.chain, openAccountModal = param.openAccountModal, openChainModal = param.openChainModal, openConnectModal = param.openConnectModal, authenticationStatus = param.authenticationStatus, mounted = param.mounted;\n            // Note: If your app doesn't use authentication, you\n            // can remove all 'authenticationStatus' checks\n            var ready = mounted && authenticationStatus !== \"loading\";\n            var connected = ready && account && chain && (!authenticationStatus || authenticationStatus === \"authenticated\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, !ready && {\n                \"aria-hidden\": true,\n                style: {\n                    opacity: 0,\n                    pointerEvents: \"none\",\n                    userSelect: \"none\"\n                }\n            }), {\n                children: function() {\n                    if (!connected) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openConnectModal,\n                            type: \"button\",\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 37\n                        }, _this);\n                    }\n                    if (chain.unsupported) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: openChainModal,\n                            type: \"button\",\n                            children: \"Wrong network\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 37\n                        }, _this);\n                    }\n                    var _name;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            gap: 12\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: openChainModal,\n                                style: {\n                                    display: \"flex\",\n                                    alignItems: \"center\"\n                                },\n                                type: \"button\",\n                                children: [\n                                    chain.hasIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        style: {\n                                            background: chain.iconBackground,\n                                            width: 12,\n                                            height: 12,\n                                            borderRadius: 999,\n                                            overflow: \"hidden\",\n                                            marginRight: 4\n                                        },\n                                        children: chain.iconUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            alt: (_name = chain.name) !== null && _name !== void 0 ? _name : \"Chain icon\",\n                                            src: chain.iconUrl,\n                                            width: 12,\n                                            height: 12\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 53\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 45\n                                    }, _this),\n                                    chain.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: openAccountModal,\n                                type: \"button\",\n                                children: [\n                                    account.displayName,\n                                    account.displayBalance ? \" (\".concat(account.displayBalance, \")\") : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 37\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 33\n                    }, _this);\n                }()\n            }), void 0, false, {\n                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 21\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, _this);\n};\n_c = CustomConnect;\nvar BasciConnect = function(param) {\n    var label = param.label;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.ConnectButton, {\n        label: \"label\",\n        chainStatus: \"none\",\n        accountStatus: \"address\"\n    }, void 0, false, {\n        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/components/ConnectWallet/index.tsx\",\n        lineNumber: 92,\n        columnNumber: 12\n    }, _this);\n};\n_c1 = BasciConnect;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomConnect\");\n$RefreshReg$(_c1, \"BasciConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db25uZWN0V2FsbGV0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUF1RDtBQUN4QjtBQUV4QixJQUFNRSxhQUFhLEdBQUcsV0FBTTtJQUMvQixxQkFDSSw4REFBQ0Ysd0VBQW9CO2tCQUNoQixnQkFRSztnQkFQRkksT0FBTyxTQUFQQSxPQUFPLEVBQ1BDLEtBQUssU0FBTEEsS0FBSyxFQUNMQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUNoQkMsY0FBYyxTQUFkQSxjQUFjLEVBQ2RDLGdCQUFnQixTQUFoQkEsZ0JBQWdCLEVBQ2hCQyxvQkFBb0IsU0FBcEJBLG9CQUFvQixFQUNwQkMsT0FBTyxTQUFQQSxPQUFPO1lBRVAsb0RBQW9EO1lBQ3BELCtDQUErQztZQUMvQyxJQUFNQyxLQUFLLEdBQUdELE9BQU8sSUFBSUQsb0JBQW9CLEtBQUssU0FBUztZQUMzRCxJQUFNRyxTQUFTLEdBQ1hELEtBQUssSUFBSVAsT0FBTyxJQUFJQyxLQUFLLElBQUksQ0FBQyxDQUFDSSxvQkFBb0IsSUFBSUEsb0JBQW9CLEtBQUssZUFBZSxDQUFDO1lBQ3BHLHFCQUNJLDhEQUFDSSxLQUFHLDBLQUNLLENBQUNGLEtBQUssSUFBSTtnQkFDWCxhQUFhLEVBQUUsSUFBSTtnQkFDbkJHLEtBQUssRUFBRTtvQkFDSEMsT0FBTyxFQUFFLENBQUM7b0JBQ1ZDLGFBQWEsRUFBRSxNQUFNO29CQUNyQkMsVUFBVSxFQUFFLE1BQU07aUJBQ3JCO2FBQ0o7MEJBRUEsV0FBTztvQkFDSixJQUFJLENBQUNMLFNBQVMsRUFBRTt3QkFDWixxQkFDSSw4REFBQ00sUUFBTTs0QkFBQ0MsT0FBTyxFQUFFWCxnQkFBZ0I7NEJBQUVZLElBQUksRUFBQyxRQUFRO3NDQUFDLGdCQUVqRDs7Ozs7aUNBQVMsQ0FDWDtxQkFDTDtvQkFDRCxJQUFJZixLQUFLLENBQUNnQixXQUFXLEVBQUU7d0JBQ25CLHFCQUNJLDhEQUFDSCxRQUFNOzRCQUFDQyxPQUFPLEVBQUVaLGNBQWM7NEJBQUVhLElBQUksRUFBQyxRQUFRO3NDQUFDLGVBRS9DOzs7OztpQ0FBUyxDQUNYO3FCQUNMO3dCQXFCZ0NmLEtBQVU7b0JBcEIzQyxxQkFDSSw4REFBQ1EsS0FBRzt3QkFBQ0MsS0FBSyxFQUFFOzRCQUFFUSxPQUFPLEVBQUUsTUFBTTs0QkFBRUMsR0FBRyxFQUFFLEVBQUU7eUJBQUU7OzBDQUNwQyw4REFBQ0wsUUFBTTtnQ0FDSEMsT0FBTyxFQUFFWixjQUFjO2dDQUN2Qk8sS0FBSyxFQUFFO29DQUFFUSxPQUFPLEVBQUUsTUFBTTtvQ0FBRUUsVUFBVSxFQUFFLFFBQVE7aUNBQUU7Z0NBQ2hESixJQUFJLEVBQUMsUUFBUTs7b0NBRVpmLEtBQUssQ0FBQ29CLE9BQU8sa0JBQ1YsOERBQUNaLEtBQUc7d0NBQ0FDLEtBQUssRUFBRTs0Q0FDSFksVUFBVSxFQUFFckIsS0FBSyxDQUFDc0IsY0FBYzs0Q0FDaENDLEtBQUssRUFBRSxFQUFFOzRDQUNUQyxNQUFNLEVBQUUsRUFBRTs0Q0FDVkMsWUFBWSxFQUFFLEdBQUc7NENBQ2pCQyxRQUFRLEVBQUUsUUFBUTs0Q0FDbEJDLFdBQVcsRUFBRSxDQUFDO3lDQUNqQjtrREFFQTNCLEtBQUssQ0FBQzRCLE9BQU8sa0JBQ1YsOERBQUNoQyxtREFBSzs0Q0FDRmlDLEdBQUcsRUFBRTdCLENBQUFBLEtBQVUsR0FBVkEsS0FBSyxDQUFDOEIsSUFBSSxjQUFWOUIsS0FBVSxjQUFWQSxLQUFVLEdBQUksWUFBWTs0Q0FDL0IrQixHQUFHLEVBQUUvQixLQUFLLENBQUM0QixPQUFPOzRDQUNsQkwsS0FBSyxFQUFFLEVBQUU7NENBQ1RDLE1BQU0sRUFBRSxFQUFFOzs7OztpREFDWjs7Ozs7NkNBRUo7b0NBRVR4QixLQUFLLENBQUM4QixJQUFJOzs7Ozs7cUNBQ047MENBQ1QsOERBQUNqQixRQUFNO2dDQUFDQyxPQUFPLEVBQUViLGdCQUFnQjtnQ0FBRWMsSUFBSSxFQUFDLFFBQVE7O29DQUMzQ2hCLE9BQU8sQ0FBQ2lDLFdBQVc7b0NBQ25CakMsT0FBTyxDQUFDa0MsY0FBYyxHQUFHLElBQUcsQ0FBeUIsTUFBQyxDQUF4QmxDLE9BQU8sQ0FBQ2tDLGNBQWMsRUFBQyxHQUFDLENBQUMsR0FBRyxFQUFFOzs7Ozs7cUNBQ3hEOzs7Ozs7NkJBQ1AsQ0FDUjtpQkFDTCxFQUFHOzs7OztxQkFDRixDQUNSO1NBQ0w7Ozs7O2FBQ2tCLENBQ3pCO0NBQ0wsQ0FBQztBQXJGV3BDLEtBQUFBLGFBQWE7QUF1Rm5CLElBQU1xQyxZQUFZLEdBQUcsZ0JBQWE7UUFBWEMsS0FBSyxTQUFMQSxLQUFLO0lBQy9CLHFCQUFPLDhEQUFDeEMsaUVBQWE7UUFBQ3dDLEtBQUssRUFBQyxPQUFPO1FBQUNDLFdBQVcsRUFBQyxNQUFNO1FBQUNDLGFBQWEsRUFBQyxTQUFTOzs7OzthQUFpQixDQUFDO0NBQ25HLENBQUM7QUFGV0gsTUFBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db25uZWN0V2FsbGV0L2luZGV4LnRzeD85ZWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBjb25zdCBDdXN0b21Db25uZWN0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb25uZWN0QnV0dG9uLkN1c3RvbT5cbiAgICAgICAgICAgIHsoe1xuICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICAgICAgb3BlbkFjY291bnRNb2RhbCxcbiAgICAgICAgICAgICAgICBvcGVuQ2hhaW5Nb2RhbCxcbiAgICAgICAgICAgICAgICBvcGVuQ29ubmVjdE1vZGFsLFxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0aW9uU3RhdHVzLFxuICAgICAgICAgICAgICAgIG1vdW50ZWQsXG4gICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gTm90ZTogSWYgeW91ciBhcHAgZG9lc24ndCB1c2UgYXV0aGVudGljYXRpb24sIHlvdVxuICAgICAgICAgICAgICAgIC8vIGNhbiByZW1vdmUgYWxsICdhdXRoZW50aWNhdGlvblN0YXR1cycgY2hlY2tzXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZHkgPSBtb3VudGVkICYmIGF1dGhlbnRpY2F0aW9uU3RhdHVzICE9PSBcImxvYWRpbmdcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25uZWN0ZWQgPVxuICAgICAgICAgICAgICAgICAgICByZWFkeSAmJiBhY2NvdW50ICYmIGNoYWluICYmICghYXV0aGVudGljYXRpb25TdGF0dXMgfHwgYXV0aGVudGljYXRpb25TdGF0dXMgPT09IFwiYXV0aGVudGljYXRlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uKCFyZWFkeSAmJiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Db25uZWN0TW9kYWx9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25uZWN0IFdhbGxldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFpbi51bnN1cHBvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuQ2hhaW5Nb2RhbH0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdyb25nIG5ldHdvcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IDEyIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5DaGFpbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluLmhhc0ljb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNoYWluLmljb25CYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOTk5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoYWluLmljb25VcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2NoYWluLm5hbWUgPz8gXCJDaGFpbiBpY29uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2hhaW4uaWNvblVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5BY2NvdW50TW9kYWx9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWNjb3VudC5kaXNwbGF5QmFsYW5jZSA/IGAgKCR7YWNjb3VudC5kaXNwbGF5QmFsYW5jZX0pYCA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICA8L0Nvbm5lY3RCdXR0b24uQ3VzdG9tPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgQmFzY2lDb25uZWN0ID0gKHtsYWJlbH0pID0+IHtcbiAgICByZXR1cm4gPENvbm5lY3RCdXR0b24gbGFiZWw9XCJsYWJlbFwiIGNoYWluU3RhdHVzPVwibm9uZVwiIGFjY291bnRTdGF0dXM9XCJhZGRyZXNzXCI+PC9Db25uZWN0QnV0dG9uPjtcbn07XG4iXSwibmFtZXMiOlsiQ29ubmVjdEJ1dHRvbiIsIkltYWdlIiwiQ3VzdG9tQ29ubmVjdCIsIkN1c3RvbSIsImFjY291bnQiLCJjaGFpbiIsIm9wZW5BY2NvdW50TW9kYWwiLCJvcGVuQ2hhaW5Nb2RhbCIsIm9wZW5Db25uZWN0TW9kYWwiLCJhdXRoZW50aWNhdGlvblN0YXR1cyIsIm1vdW50ZWQiLCJyZWFkeSIsImNvbm5lY3RlZCIsImRpdiIsInN0eWxlIiwib3BhY2l0eSIsInBvaW50ZXJFdmVudHMiLCJ1c2VyU2VsZWN0IiwiYnV0dG9uIiwib25DbGljayIsInR5cGUiLCJ1bnN1cHBvcnRlZCIsImRpc3BsYXkiLCJnYXAiLCJhbGlnbkl0ZW1zIiwiaGFzSWNvbiIsImJhY2tncm91bmQiLCJpY29uQmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJtYXJnaW5SaWdodCIsImljb25VcmwiLCJhbHQiLCJuYW1lIiwic3JjIiwiZGlzcGxheU5hbWUiLCJkaXNwbGF5QmFsYW5jZSIsIkJhc2NpQ29ubmVjdCIsImxhYmVsIiwiY2hhaW5TdGF0dXMiLCJhY2NvdW50U3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ConnectWallet/index.tsx\n"));

/***/ })

});