import styled from "styled-components";
import { Button } from "../core/Button";
import { MinorTitle } from "../core/Typography";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useContext, useState } from "react";
import { EthersContext } from "../../context/EthersContext";
import { useAccount } from "../../utils/hooks";
import { shortenAddress } from "../../utils/helpers";
import Hamburger from 'hamburger-react';
import { Menu } from "./Menu";

const Container = styled.div`
    background-color: white;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin-bottom: 18px;
    height: 64px;
`;

export const NavBar = () => {
    const { setSigner, signer } = useContext(EthersContext);
    const { address } = useAccount();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Container>
            <div style={{ display: "flex", alignItems: "center", marginLeft: -12 }}>
                <Hamburger 
                    size={24}
                    toggled={isMenuOpen}
                    toggle={setIsMenuOpen}
                />

                <MinorTitle style={{ marginLeft: 6 }}>Bookio.</MinorTitle>
            </div>

            {
                isMenuOpen &&
                    <Menu onSelect={() => setIsMenuOpen(false)}/>
            }

            {
                address ?
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div 
                            style={{ 
                                height: 6, 
                                width: 6, 
                                borderRadius: "100%", 
                                backgroundColor: "blue",
                                marginRight: 8,
                            }}
                        />
                        <MinorTitle>{shortenAddress(address)}</MinorTitle>
                    </div>
                :
                    <Button
                        onClick={async () => {
                            const web3Modal = new Web3Modal({
                                providerOptions: {
                                    // @ts-ignore
                                    disableInjectedProvider: false,
                                    // @ts-ignore
                                    cacheProvider: false,
                                }
                            });

                            web3Modal.clearCachedProvider();
                            const web3Provider = await web3Modal.connect();
                            const ethersProvider = new ethers.providers.Web3Provider(web3Provider);
                            setSigner(ethersProvider.getSigner());
                        }}
                    >
                        Connect Wallet
                    </Button>
            }
        </Container>
    );
}