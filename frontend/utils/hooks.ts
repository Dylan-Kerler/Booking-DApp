import { useContext, useEffect, useState } from "react";
import { EthersContext } from "../context/EthersContext";

export const useAccount = () => {
    const { signer } = useContext(EthersContext);
    const [address, setAddress] = useState<null | string>();

    useEffect(() => {
        if (signer) {
            signer.getAddress().then(setAddress);
        } else {
            setAddress(null);
        }
    }, [signer]);

    return { address };
};