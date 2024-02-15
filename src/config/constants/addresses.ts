import { ChainId } from "./chainId";
export type AddressMap = Partial<Record<ChainId, string>>;

export const EXAMPLE_ADDRESSES = {
    [ChainId.GÖRLI]: "0x74C3254562E996A1393cc8385aB4d2772ab64DB9",
    [ChainId.ETHEREUM]: "0x74C3254562E996A1393cc8385aB4d2772ab64DB9",
};
