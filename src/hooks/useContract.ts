import { Contract, ContractInterface } from "@ethersproject/contracts";
import { AddressMap } from "config/constants/addresses";
import { ChainId, defaultChainId } from "config/constants/chainId";
import { Providers } from "config/providers";
import { useMemo } from "react";
import { useNetwork, useProvider, useSigner } from "wagmi";

export const createStaticContract = <TContract extends Contract = Contract>(ABI: ContractInterface) => {
    return (address: string, chainId: ChainId) => {
        const provider = Providers.getStaticProvider(chainId);
        return useMemo(() => new Contract(address, ABI, provider) as TContract, [address, provider]);
    };
};

const createDynamicContract = <TContract extends Contract = Contract>(ABI: ContractInterface) => {
    return (addressMap: AddressMap, asSigner = false) => {
        const provider = useProvider();
        const { data: signer } = useSigner();
        const { chain = { id: defaultChainId } } = useNetwork();

        return useMemo(() => {
            const address = addressMap[chain.id as keyof typeof addressMap];

            if (!address) return null;

            const providerOrSigner = asSigner && signer ? signer : provider;

            return new Contract(address, ABI, providerOrSigner) as TContract;
        }, [addressMap, chain.id, asSigner, signer, provider]);
    };
};

// export const useStaticExampleContract = createStaticContract<type>(ABI);

// export const useDynamicExampleContract = createDynamicContract<type>(ABI);
