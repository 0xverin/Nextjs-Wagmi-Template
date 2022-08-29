import { ChainId } from "./chainId";
export type AddressMap = Partial<Record<ChainId, string>>;

export const EXAMPLE_ADDRESSES = {
    [ChainId.RINKEBY]: "0xf5C45A7b9880A40A6E279c25fB82C5dd64A174e0",
    [ChainId.ETHEREUM]: "0x1dd03A699CAE66F7DBb9aCEc62c50cc2631e48B9",
};
