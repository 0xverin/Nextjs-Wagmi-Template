import { BasciConnect } from "components/ConnectWallet";
import { EXAMPLE_ADDRESSES } from "config/constants/addresses";
import { ChainId } from "config/constants/chainId";
import { useDynamicExampleContract, useStaticExampleContract } from "hooks/useContract";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const Example = () => {
    const StaticExampleInstance = useStaticExampleContract(EXAMPLE_ADDRESSES[ChainId.RINKEBY], ChainId.RINKEBY);
    const DynamicExampleInstance = useDynamicExampleContract(EXAMPLE_ADDRESSES, true);
    const [count, setCount] = useState("");
    const { isConnected } = useAccount();

    useEffect(() => {
        init();
    }, []);
    const init = async () => {
        const count = await StaticExampleInstance.getCount();
        setCount(count.toString());
    };
    return (
        <div>
            <div>
                <BasciConnect></BasciConnect>

                <div
                    style={{
                        width: "100%",
                        textAlign: "center",
                        fontSize: "24px",
                    }}
                >
                    count (
                    <span
                        style={{
                            color: "gray",
                        }}
                    >
                        read Contract
                    </span>
                    ) :{count ? count : 0}
                </div>
                <>
                    {isConnected ? (
                        <div>
                            <div
                                style={{
                                    width: "200px",
                                    height: "50px",
                                    backgroundColor: "#0076F7",
                                    color: "white",
                                    borderRadius: "20px",
                                    textAlign: "center",
                                    lineHeight: "50px",
                                    fontSize: "14px",
                                    margin: "0 auto",
                                    cursor: "pointer",
                                }}
                                onClick={async () => {
                                    try {
                                        console.log(DynamicExampleInstance);

                                        const tx = await DynamicExampleInstance.setCount();
                                        await tx.wait();
                                        init();
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }}
                            >
                                setCount(write Contract)
                            </div>
                        </div>
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <BasciConnect></BasciConnect>
                        </div>
                    )}
                </>
            </div>
        </div>
    );
};

export default Example;
