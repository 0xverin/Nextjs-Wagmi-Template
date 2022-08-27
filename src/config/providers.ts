import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { ChainId } from "./constants/chainId";
import { RPC } from "./constants/rpc";
export class Providers {
    private static _providerCache = {} as Record<ChainId, StaticJsonRpcProvider>;

    /**
     * Returns a provider url for a given network
     */
    public static getProviderUrl(chainId: ChainId) {
        const [url] = RPC.getNodeUrls(chainId);

        return url;
    }

    /**
     * Returns a static provider for a given network
     */
    public static getStaticProvider(chainId: ChainId) {
        if (!this._providerCache[chainId])
            this._providerCache[chainId] = new StaticJsonRpcProvider(this.getProviderUrl(chainId));

        return this._providerCache[chainId];
    }
}
