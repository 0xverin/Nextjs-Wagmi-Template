"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 892:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kQ": () => (/* binding */ wagmiClient),
/* harmony export */   "p5": () => (/* binding */ chains)
/* harmony export */ });
/* unused harmony exports provider, webSocketProvider */
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(770);
/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(176);
/* harmony import */ var wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(538);
/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.configureChains)([
    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.mainnet,
    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.goerli,
    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.rinkeby,
    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.kovan,
    wagmi__WEBPACK_IMPORTED_MODULE_1__.chain.ropsten
], [
    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_2__.alchemyProvider)({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID
    }),
    (0,wagmi_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_3__.jsonRpcProvider)({
        rpc: (chain)=>({
                http: chain.rpcUrls.default
            })
    }),
    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_4__.publicProvider)(), 
]);
const needsInjectedWalletFallback =  false && 0;
const connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.connectorsForWallets)([
    {
        groupName: "Popular",
        wallets: [
            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.metaMask({
                chains,
                shimDisconnect: true
            }),
            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.brave({
                chains,
                shimDisconnect: true
            }),
            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.rainbow({
                chains
            }),
            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.walletConnect({
                chains
            }),
            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.coinbase({
                appName: "Coinbase",
                chains
            }),
            ...needsInjectedWalletFallback ? [
                _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.injected({
                    chains,
                    shimDisconnect: true
                })
            ] : [], 
        ]
    },
    {
        groupName: "Other",
        wallets: [
            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.trust({
                chains,
                shimDisconnect: true
            }),
            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.steak({
                chains
            }),
            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_0__.wallet.imToken({
                chains
            })
        ]
    }, 
]);
const wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.createClient)({
    autoConnect: true,
    connectors,
    provider
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(921);
/* harmony import */ var config_wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(892);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, config_wagmi__WEBPACK_IMPORTED_MODULE_2__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__, config_wagmi__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function MyApp({ Component , pageProps  }) {
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>setMounted(true), []);
    if (!mounted) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {
        client: config_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .wagmiClient */ .kQ,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_1__.RainbowKitProvider, {
            chains: config_wagmi__WEBPACK_IMPORTED_MODULE_2__/* .chains */ .p5,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 770:
/***/ ((module) => {

module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ 176:
/***/ ((module) => {

module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 538:
/***/ ((module) => {

module.exports = require("wagmi/providers/public");

/***/ }),

/***/ 921:
/***/ ((module) => {

module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(957));
module.exports = __webpack_exports__;

})();