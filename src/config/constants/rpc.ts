import { ChainId } from "./chainId";

export class RPC {
    public static env = process.env;

    private static _get(args: { key: string; err?: string; first: true; fallback: string }): string;
    private static _get(args: { key: string; err?: string; first?: never; fallback: string }): string[];
    private static _get(args: { key: string; err?: string; first: true; fallback?: never }): string | undefined;
    private static _get(args: { key: string; err?: string; first?: never; fallback?: never }): string[] | undefined;
    private static _get(args: { key: string; err?: string; first?: boolean; fallback?: string }) {
        const value = this.env[args.key] || args.fallback;

        if (!value) console.warn(args.err);

        if (value === undefined) return value;

        return args.first ? value : value.split(" ");
    }
    public static getNodeUrls = (chainId: ChainId) => {
        switch (chainId) {
            case ChainId.ETHEREUM:
                return this._get({
                    key: `REACT_APP_ETHEREUM_NODE_URL`,
                    fallback: "https://eth-mainnet.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                });
            case ChainId.RINKEBY:
                return this._get({
                    key: `REACT_APP_RINKEBY_NODE_URL`,
                    fallback: "https://eth-rinkeby.alchemyapi.io/v2/_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
                });
            case ChainId.BSC:
                return this._get({
                    key: `REACT_APP_BSC_NODE_URL`,
                    fallback: "https://bsc-dataseed1.binance.org",
                });
        }
    };
}
