import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

import { FaWallet } from "react-icons/fa";

export const CustomConnect = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                    ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button className="p-4 bg-[rgba(255,255,255,.1)] rounded-3xl" onClick={openConnectModal} type="button">
                                        <FaWallet />
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button onClick={openChainModal} type="button">
                                        Wrong network
                                    </button>
                                );
                            }
                            return (
                                <div className="text-sm">
                                    <button className="bg-[rgba(255,255,255,.15)] p-1 rounded-full" onClick={openAccountModal} type="button">
                                        {account.displayName}
                                        {account.displayBalance ? ` (${account.displayBalance})` : ""}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export const BasciConnect = () => {
    // return <ConnectButton label="label" chainStatus="none" accountStatus="address"></ConnectButton>;
    return <CustomConnect></CustomConnect>
};
