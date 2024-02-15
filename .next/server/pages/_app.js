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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chains\": () => (/* binding */ chains),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"wagmiClient\": () => (/* binding */ wagmiClient),\n/* harmony export */   \"webSocketProvider\": () => (/* binding */ webSocketProvider)\n/* harmony export */ });\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi/providers/jsonRpc */ \"wagmi/providers/jsonRpc\");\n/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.goerli\n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__.alchemyProvider)({\n        apiKey: \"iJ3LOLUkuYl_sAEwDAtnD94wiayG-0kP\"\n    }),\n    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__.jsonRpcProvider)({\n        rpc: (chain)=>({\n                http: chain.rpcUrls.default\n            })\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)(), \n]);\nconst needsInjectedWalletFallback =  false && 0;\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.connectorsForWallets)([\n    {\n        groupName: \"Popular\",\n        wallets: [\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.metaMask({\n                chains,\n                shimDisconnect: true\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.brave({\n                chains,\n                shimDisconnect: true\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.rainbow({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.walletConnect({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.coinbase({\n                appName: \"Coinbase\",\n                chains\n            }),\n            ...needsInjectedWalletFallback ? [\n                _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.injected({\n                    chains,\n                    shimDisconnect: true\n                })\n            ] : [], \n        ]\n    },\n    {\n        groupName: \"Other\",\n        wallets: [\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.trust({\n                chains,\n                shimDisconnect: true\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.steak({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.imToken({\n                chains\n            })\n        ]\n    }, \n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3dhZ21pLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0U7QUFDVDtBQUNIO0FBQ0E7QUFDRjtBQUVqRCxNQUFNLEVBQUVRLE1BQU0sR0FBRUMsUUFBUSxHQUFFQyxpQkFBaUIsR0FBRSxHQUFHUCxzREFBZSxDQUNsRTtJQUFDRCxnREFBYTtJQUFFQSwrQ0FBWTtDQUFDLEVBQzdCO0lBQ0lHLHdFQUFlLENBQUM7UUFBRVEsTUFBTSxFQUFFQyxrQ0FBa0M7S0FBRSxDQUFDO0lBQy9EUix3RUFBZSxDQUFDO1FBQUVXLEdBQUcsRUFBRSxDQUFDZixLQUFLLEdBQUssQ0FBQztnQkFBRWdCLElBQUksRUFBRWhCLEtBQUssQ0FBQ2lCLE9BQU8sQ0FBQ0MsT0FBTzthQUFFLENBQUM7S0FBRSxDQUFDO0lBQ3RFYixzRUFBYyxFQUFFO0NBQ25CLENBQ0osQ0FBQztBQUVGLE1BQU1jLDJCQUEyQixHQUM3QixNQUUyQixJQUMzQixDQUFpQztBQUVyQyxNQUFNSyxVQUFVLEdBQUcxQiw0RUFBb0IsQ0FBQztJQUNwQztRQUNJMkIsU0FBUyxFQUFFLFNBQVM7UUFDcEJDLE9BQU8sRUFBRTtZQUNMM0IsbUVBQWUsQ0FBQztnQkFBRU8sTUFBTTtnQkFBRXNCLGNBQWMsRUFBRSxJQUFJO2FBQUUsQ0FBQztZQUNqRDdCLGdFQUFZLENBQUM7Z0JBQUVPLE1BQU07Z0JBQUVzQixjQUFjLEVBQUUsSUFBSTthQUFFLENBQUM7WUFDOUM3QixrRUFBYyxDQUFDO2dCQUFFTyxNQUFNO2FBQUUsQ0FBQztZQUMxQlAsd0VBQW9CLENBQUM7Z0JBQUVPLE1BQU07YUFBRSxDQUFDO1lBQ2hDUCxtRUFBZSxDQUFDO2dCQUFFa0MsT0FBTyxFQUFFLFVBQVU7Z0JBQUUzQixNQUFNO2FBQUUsQ0FBQztlQUM1Q2EsMkJBQTJCLEdBQUc7Z0JBQUNwQixtRUFBZSxDQUFDO29CQUFFTyxNQUFNO29CQUFFc0IsY0FBYyxFQUFFLElBQUk7aUJBQUUsQ0FBQzthQUFDLEdBQUcsRUFBRTtTQUM3RjtLQUNKO0lBQ0Q7UUFDSUgsU0FBUyxFQUFFLE9BQU87UUFDbEJDLE9BQU8sRUFBRTtZQUFDM0IsZ0VBQVksQ0FBQztnQkFBRU8sTUFBTTtnQkFBRXNCLGNBQWMsRUFBRSxJQUFJO2FBQUUsQ0FBQztZQUFFN0IsZ0VBQVksQ0FBQztnQkFBRU8sTUFBTTthQUFFLENBQUM7WUFBRVAsa0VBQWMsQ0FBQztnQkFBRU8sTUFBTTthQUFFLENBQUM7U0FBQztLQUNsSDtDQUNKLENBQUM7QUFFSyxNQUFNZ0MsV0FBVyxHQUFHcEMsbURBQVksQ0FBQztJQUNwQ3FDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCZixVQUFVO0lBQ1ZqQixRQUFRO0NBQ1gsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FnbWktdGVtcGxhdGUvLi9zcmMvY29uZmlnL3dhZ21pLnRzPzhmNzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdG9yc0ZvcldhbGxldHMsIHdhbGxldCB9IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGFsY2hlbXlQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvYWxjaGVteVwiO1xuaW1wb3J0IHsganNvblJwY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9qc29uUnBjXCI7XG5pbXBvcnQgeyBwdWJsaWNQcm92aWRlciB9IGZyb20gXCJ3YWdtaS9wcm92aWRlcnMvcHVibGljXCI7XG5cbmV4cG9ydCBjb25zdCB7IGNoYWlucywgcHJvdmlkZXIsIHdlYlNvY2tldFByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gICAgW2NoYWluLm1haW5uZXQsIGNoYWluLmdvZXJsaV0sXG4gICAgW1xuICAgICAgICBhbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQgfSksXG4gICAgICAgIGpzb25ScGNQcm92aWRlcih7IHJwYzogKGNoYWluKSA9PiAoeyBodHRwOiBjaGFpbi5ycGNVcmxzLmRlZmF1bHQgfSkgfSksXG4gICAgICAgIHB1YmxpY1Byb3ZpZGVyKCksXG4gICAgXSxcbik7XG5cbmNvbnN0IG5lZWRzSW5qZWN0ZWRXYWxsZXRGYWxsYmFjayA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgIHdpbmRvdy5ldGhlcmV1bSAmJlxuICAgICF3aW5kb3cuZXRoZXJldW0uaXNNZXRhTWFzayAmJlxuICAgICF3aW5kb3cuZXRoZXJldW0uaXNDb2luYmFzZVdhbGxldDtcblxuY29uc3QgY29ubmVjdG9ycyA9IGNvbm5lY3RvcnNGb3JXYWxsZXRzKFtcbiAgICB7XG4gICAgICAgIGdyb3VwTmFtZTogXCJQb3B1bGFyXCIsXG4gICAgICAgIHdhbGxldHM6IFtcbiAgICAgICAgICAgIHdhbGxldC5tZXRhTWFzayh7IGNoYWlucywgc2hpbURpc2Nvbm5lY3Q6IHRydWUgfSksXG4gICAgICAgICAgICB3YWxsZXQuYnJhdmUoeyBjaGFpbnMsIHNoaW1EaXNjb25uZWN0OiB0cnVlIH0pLFxuICAgICAgICAgICAgd2FsbGV0LnJhaW5ib3coeyBjaGFpbnMgfSksXG4gICAgICAgICAgICB3YWxsZXQud2FsbGV0Q29ubmVjdCh7IGNoYWlucyB9KSxcbiAgICAgICAgICAgIHdhbGxldC5jb2luYmFzZSh7IGFwcE5hbWU6IFwiQ29pbmJhc2VcIiwgY2hhaW5zIH0pLFxuICAgICAgICAgICAgLi4uKG5lZWRzSW5qZWN0ZWRXYWxsZXRGYWxsYmFjayA/IFt3YWxsZXQuaW5qZWN0ZWQoeyBjaGFpbnMsIHNoaW1EaXNjb25uZWN0OiB0cnVlIH0pXSA6IFtdKSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgZ3JvdXBOYW1lOiBcIk90aGVyXCIsXG4gICAgICAgIHdhbGxldHM6IFt3YWxsZXQudHJ1c3QoeyBjaGFpbnMsIHNoaW1EaXNjb25uZWN0OiB0cnVlIH0pLCB3YWxsZXQuc3RlYWsoeyBjaGFpbnMgfSksIHdhbGxldC5pbVRva2VuKHsgY2hhaW5zIH0pXSxcbiAgICB9LFxuXSk7XG5cbmV4cG9ydCBjb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gICAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gICAgY29ubmVjdG9ycyxcbiAgICBwcm92aWRlcixcbn0pO1xuIl0sIm5hbWVzIjpbImNvbm5lY3RvcnNGb3JXYWxsZXRzIiwid2FsbGV0IiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJhbGNoZW15UHJvdmlkZXIiLCJqc29uUnBjUHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsImNoYWlucyIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJtYWlubmV0IiwiZ29lcmxpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FMQ0hFTVlfSUQiLCJycGMiLCJodHRwIiwicnBjVXJscyIsImRlZmF1bHQiLCJuZWVkc0luamVjdGVkV2FsbGV0RmFsbGJhY2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImlzTWV0YU1hc2siLCJpc0NvaW5iYXNlV2FsbGV0IiwiY29ubmVjdG9ycyIsImdyb3VwTmFtZSIsIndhbGxldHMiLCJtZXRhTWFzayIsInNoaW1EaXNjb25uZWN0IiwiYnJhdmUiLCJyYWluYm93Iiwid2FsbGV0Q29ubmVjdCIsImNvaW5iYXNlIiwiYXBwTmFtZSIsImluamVjdGVkIiwidHJ1c3QiLCJzdGVhayIsImltVG9rZW4iLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/wagmi.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var config_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/wagmi */ \"./src/config/wagmi.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styles_rainbowkit_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/rainbowkit.css */ \"./src/styles/rainbowkit.css\");\n/* harmony import */ var styles_rainbowkit_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_rainbowkit_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ebay_nice_modal_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ebay/nice-modal-react */ \"@ebay/nice-modal-react\");\n/* harmony import */ var _ebay_nice_modal_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ebay_nice_modal_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, config_wagmi__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_8__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, config_wagmi__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>setMounted(true), []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().StrictMode), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ebay_nice_modal_react__WEBPACK_IMPORTED_MODULE_7___default().Provider), {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_6__.WagmiConfig, {\n                client: config_wagmi__WEBPACK_IMPORTED_MODULE_2__.wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.RainbowKitProvider, {\n                    chains: config_wagmi__WEBPACK_IMPORTED_MODULE_2__.chains,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_8__.ToastContainer, {\n                            theme: \"dark\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kasoqian/Desktop/Nextjs-Wagmi-Template/src/pages/_app.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEQ7QUFDVDtBQUVQO0FBQ2hCO0FBQ0c7QUFDSztBQUVXO0FBQ3JCO0FBRzZCO0FBQ1I7QUFFL0MsU0FBU1MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDL0MsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSVQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFFN0NELGdEQUFTLENBQUMsSUFBTVUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLElBQUksQ0FBQ0QsT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTFCLHFCQUNJLDhEQUFDTCx5REFBZ0I7a0JBQ2IsNEVBQUNELHdFQUFrQjtzQkFDZiw0RUFBQ0QsOENBQVc7Z0JBQUNXLE1BQU0sRUFBRWQscURBQVc7MEJBQzVCLDRFQUFDRixzRUFBa0I7b0JBQUNDLE1BQU0sRUFBRUEsZ0RBQU07O3NDQUM5Qiw4REFBQ1MsU0FBUzs0QkFBRSxHQUFHQyxTQUFTOzs7OztnQ0FBSTtzQ0FDNUIsOERBQUNILDBEQUFjOzRCQUFDUyxLQUFLLEVBQUMsTUFBTTs7Ozs7Z0NBQUU7Ozs7Ozt3QkFDYjs7Ozs7b0JBQ1g7Ozs7O2dCQUNHOzs7OztZQUNOLENBQ3JCO0NBQ0w7QUFFRCxpRUFBZVIsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FnbWktdGVtcGxhdGUvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYWluYm93S2l0UHJvdmlkZXIgfSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuaW1wb3J0IHsgY2hhaW5zLCB3YWdtaUNsaWVudCB9IGZyb20gXCJjb25maWcvd2FnbWlcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcInN0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwic3R5bGVzL3JhaW5ib3draXQuY3NzXCI7XG5pbXBvcnQgeyBXYWdtaUNvbmZpZyB9IGZyb20gXCJ3YWdtaVwiO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZWJheS9uaWNlLW1vZGFsLXJlYWN0JztcbmltcG9ydCBOaWNlTW9kYWwgZnJvbSBcIkBlYmF5L25pY2UtbW9kYWwtcmVhY3RcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiBzZXRNb3VudGVkKHRydWUpLCBbXSk7XG4gICAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPlxuICAgICAgICAgICAgPE5pY2VNb2RhbC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHRoZW1lPVwiZGFya1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICAgICAgICAgIDwvTmljZU1vZGFsLlByb3ZpZGVyPlxuICAgICAgICA8L1JlYWN0LlN0cmljdE1vZGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmFpbmJvd0tpdFByb3ZpZGVyIiwiY2hhaW5zIiwid2FnbWlDbGllbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldhZ21pQ29uZmlnIiwiTmljZU1vZGFsIiwiUmVhY3QiLCJUb2FzdENvbnRhaW5lciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJTdHJpY3RNb2RlIiwiUHJvdmlkZXIiLCJjbGllbnQiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



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

/***/ "@ebay/nice-modal-react":
/*!*****************************************!*\
  !*** external "@ebay/nice-modal-react" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ebay/nice-modal-react");

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

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

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