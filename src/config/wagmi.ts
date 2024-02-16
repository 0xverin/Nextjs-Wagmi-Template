import {
  connectorsForWallets,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import {
  configureChains,
  createClient,
  goerli,
  mainnet,
  useQueryClient,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
  okxWallet,
} from "@rainbow-me/rainbowkit/wallets";

export const { chains, provider } = configureChains(
  [goerli, mainnet],
  [publicProvider()]
);

//walletConnectV2版本的配置，自己去申请
export const projectId = "5a4386a4dd365a4e59d94173d51630e2";

export const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains, projectId }),
      walletConnectWallet({ chains, projectId }),
      okxWallet({ projectId, chains }),
    ],
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// export const { chains, provider, webSocketProvider } = configureChains(
//   [chain.mainnet, chain.goerli],
//   [
//     alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
//     jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default }) }),
//     publicProvider(),
//   ]
// );

// const needsInjectedWalletFallback =
//   typeof window !== "undefined" &&
//   window.ethereum &&
//   !window.ethereum.isMetaMask &&
//   !window.ethereum.isCoinbaseWallet;

// const connectors = connectorsForWallets([
//   {
//     groupName: "Popular",
//     wallets: [
//       wallet.metaMask({ chains, shimDisconnect: true }),
//       wallet.brave({ chains, shimDisconnect: true }),
//       wallet.rainbow({ chains }),
//       wallet.walletConnect({ chains }),
//       wallet.coinbase({ appName: "Coinbase", chains }),
//       ...(needsInjectedWalletFallback
//         ? [wallet.injected({ chains, shimDisconnect: true })]
//         : []),
//     ],
//   },
//   {
//     groupName: "Other",
//     wallets: [
//       wallet.trust({ chains, shimDisconnect: true }),
//       wallet.steak({ chains }),
//       wallet.imToken({ chains }),
//     ],
//   },
// ]);

// export const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider,
// });
