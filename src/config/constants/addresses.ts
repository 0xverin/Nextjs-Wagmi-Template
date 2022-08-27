import { ChainId } from "./chainId";
export type AddressMap = Partial<Record<ChainId, string>>;

export const EXAMPLE_ADDRESSES = {
    [ChainId.RINKEBY]: "0x1dd03A699CAE66F7DBb9aCEc62c50cc2631e48B9",
    [ChainId.ETHEREUM]: "0x1dd03A699CAE66F7DBb9aCEc62c50cc2631e48B9",
};
