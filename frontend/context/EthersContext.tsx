import { createContext, useState } from "react";

export const EthersContext = createContext({
    signer: null,
    setSigner: null,
});

export const EthersProvider = ({ children }: { children: React.ReactNode }) => {
    const [signer, setSigner] = useState();

    return (
        <EthersContext.Provider value={{ setSigner, signer }}>
            {children}
        </EthersContext.Provider>
    );
};