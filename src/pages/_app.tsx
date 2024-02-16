import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chains, wagmiClient } from "config/wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "styles/globals.css";
import "styles/rainbowkit.css";
import { WagmiConfig } from "wagmi";
import { useModal } from "@ebay/nice-modal-react";
import NiceModal from "@ebay/nice-modal-react";
import React from "react";
import { Modal } from "antd";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
 
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
          <React.StrictMode>
      <NiceModal.Provider>
            <Component {...pageProps} />
            <ToastContainer theme="dark" />
            </NiceModal.Provider>
    </React.StrictMode>
          </RainbowKitProvider>
        </WagmiConfig>
     
  );
}

export default MyApp;
