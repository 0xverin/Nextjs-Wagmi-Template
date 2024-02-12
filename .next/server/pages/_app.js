/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/config/wagmi.ts":
/*!*****************************!*\
  !*** ./src/config/wagmi.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chains\": () => (/* binding */ chains),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"wagmiClient\": () => (/* binding */ wagmiClient),\n/* harmony export */   \"webSocketProvider\": () => (/* binding */ webSocketProvider)\n/* harmony export */ });\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.goerli,\n    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.rinkeby,\n    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.kovan,\n    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.ropsten\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__.alchemyProvider)({\n        apiKey: \"\"\n    }),\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__.jsonRpcProvider)({\n        rpc: (chain)=>({\n                http: chain.rpcUrls.default\n            })\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)(), \n]);\nconst needsInjectedWalletFallback =  false && 0;\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.connectorsForWallets)([\n    {\n        groupName: \"Popular\",\n        wallets: [\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.metaMask({\n                chains,\n                shimDisconnect: true\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.brave({\n                chains,\n                shimDisconnect: true\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.rainbow({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.walletConnect({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.coinbase({\n                appName: \"Coinbase\",\n                chains\n            }),\n            ...needsInjectedWalletFallback ? [\n                _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.injected({\n                    chains,\n                    shimDisconnect: true\n                })\n            ] : [], \n        ]\n    },\n    {\n        groupName: \"Other\",\n        wallets: [\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.trust({\n                chains,\n                shimDisconnect: true\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.steak({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.imToken({\n                chains\n            })\n        ]\n    }, \n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3dhZ21pLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFDVDtBQUNIO0FBQ0E7QUFDRjtBQUVqRCxNQUFNLEVBQUVRLE1BQU0sR0FBRUMsUUFBUSxHQUFFQyxpQkFBaUIsR0FBRSxHQUFHUCxzREFBZSxDQUNsRTtJQUFDRCxnREFBYTtJQUFFQSwrQ0FBWTtJQUFFQSxnREFBYTtJQUFFQSw4Q0FBVztJQUFFQSxnREFBYTtDQUFDLEVBQ3hFO0lBQ0lHLHdFQUFlLENBQUM7UUFBRVcsTUFBTSxFQUFFQyxFQUFrQztLQUFFLENBQUM7SUFDL0RYLHdFQUFlLENBQUM7UUFBRWMsR0FBRyxFQUFFLENBQUNsQixLQUFLLEdBQUssQ0FBQztnQkFBRW1CLElBQUksRUFBRW5CLEtBQUssQ0FBQ29CLE9BQU8sQ0FBQ0MsT0FBTzthQUFFLENBQUM7S0FBRSxDQUFDO0lBQ3RFaEIsc0VBQWMsRUFBRTtDQUNuQixDQUNKLENBQUM7QUFFRixNQUFNaUIsMkJBQTJCLEdBQzdCLE1BRTJCLElBQzNCLENBQWlDO0FBRXJDLE1BQU1LLFVBQVUsR0FBRzdCLDRFQUFvQixDQUFDO0lBQ3BDO1FBQ0k4QixTQUFTLEVBQUUsU0FBUztRQUNwQkMsT0FBTyxFQUFFO1lBQ0w5QixtRUFBZSxDQUFDO2dCQUFFTyxNQUFNO2dCQUFFeUIsY0FBYyxFQUFFLElBQUk7YUFBRSxDQUFDO1lBQ2pEaEMsZ0VBQVksQ0FBQztnQkFBRU8sTUFBTTtnQkFBRXlCLGNBQWMsRUFBRSxJQUFJO2FBQUUsQ0FBQztZQUM5Q2hDLGtFQUFjLENBQUM7Z0JBQUVPLE1BQU07YUFBRSxDQUFDO1lBQzFCUCx3RUFBb0IsQ0FBQztnQkFBRU8sTUFBTTthQUFFLENBQUM7WUFDaENQLG1FQUFlLENBQUM7Z0JBQUVxQyxPQUFPLEVBQUUsVUFBVTtnQkFBRTlCLE1BQU07YUFBRSxDQUFDO2VBQzVDZ0IsMkJBQTJCLEdBQUc7Z0JBQUN2QixtRUFBZSxDQUFDO29CQUFFTyxNQUFNO29CQUFFeUIsY0FBYyxFQUFFLElBQUk7aUJBQUUsQ0FBQzthQUFDLEdBQUcsRUFBRTtTQUM3RjtLQUNKO0lBQ0Q7UUFDSUgsU0FBUyxFQUFFLE9BQU87UUFDbEJDLE9BQU8sRUFBRTtZQUFDOUIsZ0VBQVksQ0FBQztnQkFBRU8sTUFBTTtnQkFBRXlCLGNBQWMsRUFBRSxJQUFJO2FBQUUsQ0FBQztZQUFFaEMsZ0VBQVksQ0FBQztnQkFBRU8sTUFBTTthQUFFLENBQUM7WUFBRVAsa0VBQWMsQ0FBQztnQkFBRU8sTUFBTTthQUFFLENBQUM7U0FBQztLQUNsSDtDQUNKLENBQUM7QUFFSyxNQUFNbUMsV0FBVyxHQUFHdkMsbURBQVksQ0FBQztJQUNwQ3dDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCZixVQUFVO0lBQ1ZwQixRQUFRO0NBQ1gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FnbWktdGVtcGxhdGUvLi9zcmMvY29uZmlnL3dhZ21pLnRzPzhmNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdG9yc0ZvcldhbGxldHMsIHdhbGxldCB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvYWxjaGVteVwiO1xuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9qc29uUnBjXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5cbmV4cG9ydCBjb25zdCB7IGNoYWlucywgcHJvdmlkZXIsIHdlYlNvY2tldFByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gICAgW2NoYWluLm1haW5uZXQsIGNoYWluLmdvZXJsaSwgY2hhaW4ucmlua2VieSwgY2hhaW4ua292YW4sIGNoYWluLnJvcHN0ZW5dLFxuICAgIFtcbiAgICAgICAgYWxjaGVteVByb3ZpZGVyKHsgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTENIRU1ZX0lEIH0pLFxuICAgICAgICBqc29uUnBjUHJvdmlkZXIoeyBycGM6IChjaGFpbikgPT4gKHsgaHR0cDogY2hhaW4ucnBjVXJscy5kZWZhdWx0IH0pIH0pLFxuICAgICAgICBwdWJsaWNQcm92aWRlcigpLFxuICAgIF0sXG4pO1xuXG5jb25zdCBuZWVkc0luamVjdGVkV2FsbGV0RmFsbGJhY2sgPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICB3aW5kb3cuZXRoZXJldW0gJiZcbiAgICAhd2luZG93LmV0aGVyZXVtLmlzTWV0YU1hc2sgJiZcbiAgICAhd2luZG93LmV0aGVyZXVtLmlzQ29pbmJhc2VXYWxsZXQ7XG5cbmNvbnN0IGNvbm5lY3RvcnMgPSBjb25uZWN0b3JzRm9yV2FsbGV0cyhbXG4gICAge1xuICAgICAgICBncm91cE5hbWU6IFwiUG9wdWxhclwiLFxuICAgICAgICB3YWxsZXRzOiBbXG4gICAgICAgICAgICB3YWxsZXQubWV0YU1hc2soeyBjaGFpbnMsIHNoaW1EaXNjb25uZWN0OiB0cnVlIH0pLFxuICAgICAgICAgICAgd2FsbGV0LmJyYXZlKHsgY2hhaW5zLCBzaGltRGlzY29ubmVjdDogdHJ1ZSB9KSxcbiAgICAgICAgICAgIHdhbGxldC5yYWluYm93KHsgY2hhaW5zIH0pLFxuICAgICAgICAgICAgd2FsbGV0LndhbGxldENvbm5lY3QoeyBjaGFpbnMgfSksXG4gICAgICAgICAgICB3YWxsZXQuY29pbmJhc2UoeyBhcHBOYW1lOiBcIkNvaW5iYXNlXCIsIGNoYWlucyB9KSxcbiAgICAgICAgICAgIC4uLihuZWVkc0luamVjdGVkV2FsbGV0RmFsbGJhY2sgPyBbd2FsbGV0LmluamVjdGVkKHsgY2hhaW5zLCBzaGltRGlzY29ubmVjdDogdHJ1ZSB9KV0gOiBbXSksXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGdyb3VwTmFtZTogXCJPdGhlclwiLFxuICAgICAgICB3YWxsZXRzOiBbd2FsbGV0LnRydXN0KHsgY2hhaW5zLCBzaGltRGlzY29ubmVjdDogdHJ1ZSB9KSwgd2FsbGV0LnN0ZWFrKHsgY2hhaW5zIH0pLCB3YWxsZXQuaW1Ub2tlbih7IGNoYWlucyB9KV0sXG4gICAgfSxcbl0pO1xuXG5leHBvcnQgY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICAgIGF1dG9Db25uZWN0OiB0cnVlLFxuICAgIGNvbm5lY3RvcnMsXG4gICAgcHJvdmlkZXIsXG59KTtcbiJdLCJuYW1lcyI6WyJjb25uZWN0b3JzRm9yV2FsbGV0cyIsIndhbGxldCIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiYWxjaGVteVByb3ZpZGVyIiwianNvblJwY1Byb3ZpZGVyIiwicHVibGljUHJvdmlkZXIiLCJjaGFpbnMiLCJwcm92aWRlciIsIndlYlNvY2tldFByb3ZpZGVyIiwibWFpbm5ldCIsImdvZXJsaSIsInJpbmtlYnkiLCJrb3ZhbiIsInJvcHN0ZW4iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9JRCIsInJwYyIsImh0dHAiLCJycGNVcmxzIiwiZGVmYXVsdCIsIm5lZWRzSW5qZWN0ZWRXYWxsZXRGYWxsYmFjayIsIndpbmRvdyIsImV0aGVyZXVtIiwiaXNNZXRhTWFzayIsImlzQ29pbmJhc2VXYWxsZXQiLCJjb25uZWN0b3JzIiwiZ3JvdXBOYW1lIiwid2FsbGV0cyIsIm1ldGFNYXNrIiwic2hpbURpc2Nvbm5lY3QiLCJicmF2ZSIsInJhaW5ib3ciLCJ3YWxsZXRDb25uZWN0IiwiY29pbmJhc2UiLCJhcHBOYW1lIiwiaW5qZWN0ZWQiLCJ0cnVzdCIsInN0ZWFrIiwiaW1Ub2tlbiIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/config/wagmi.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var config_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/wagmi */ \"./src/config/wagmi.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styles_rainbowkit_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/rainbowkit.css */ \"./src/styles/rainbowkit.css\");\n/* harmony import */ var styles_rainbowkit_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_rainbowkit_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, config_wagmi__WEBPACK_IMPORTED_MODULE_2__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, config_wagmi__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>setMounted(true), []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiConfig, {\n        client: config_wagmi__WEBPACK_IMPORTED_MODULE_2__.wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.RainbowKitProvider, {\n            chains: config_wagmi__WEBPACK_IMPORTED_MODULE_2__.chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTREO0FBQ1Q7QUFFUDtBQUNoQjtBQUNHO0FBQ0s7QUFFcEMsU0FBU00sS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDL0MsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSU4sK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFN0NELGdEQUFTLENBQUMsSUFBTU8sVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQ0QsT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTFCLHFCQUNJLDhEQUFDSiw4Q0FBVztRQUFDTSxNQUFNLEVBQUVULHFEQUFXO2tCQUM1Qiw0RUFBQ0Ysc0VBQWtCO1lBQUNDLE1BQU0sRUFBRUEsZ0RBQU07c0JBQzlCLDRFQUFDTSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFDWDs7Ozs7WUFDWCxDQUNoQjtDQUNMO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dhZ21pLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFpbmJvd0tpdFByb3ZpZGVyIH0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IGNoYWlucywgd2FnbWlDbGllbnQgfSBmcm9tIFwiY29uZmlnL3dhZ21pXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJzdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBcInN0eWxlcy9yYWluYm93a2l0LmNzc1wiO1xuaW1wb3J0IHsgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiBzZXRNb3VudGVkKHRydWUpLCBbXSk7XG4gICAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgICAgICA8L1dhZ21pQ29uZmlnPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlJhaW5ib3dLaXRQcm92aWRlciIsImNoYWlucyIsIndhZ21pQ2xpZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXYWdtaUNvbmZpZyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJjbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/rainbowkit.css":
/*!***********************************!*\
  !*** ./src/styles/rainbowkit.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/jsonRpc":
/*!******************************************!*\
  !*** external "wagmi/providers/jsonRpc" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();