import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
// components
import Navbar from "./components/Pages/Navbar";
import AddressCard from "./components/Pages/AddressCard";
import Home from "./components/Pages/Home";
import FirstSection from "./components/Pages/FirstSection";
import SecondSection from "./components/Pages/SecondSection";
// context
import { AppContext } from "./contexts";
// styles
import {
    MainAppContainer,
    DivContainer,
} from "./components/styles/Container/AppStyles";
import GlobalStyles from "./components/styles/GlobalStyles";
// theme
import { theme, pages } from "./utils/data";
// web3 & ethers
import Web3Modal from "web3modal";
import { providers } from "ethers";

import Modal from "./components/Utils/Modal";

const App = () => {
    const web3ModalRef = useRef();
    const [connectedAddress, setConnectedAddress] = useState("");
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [interfaceId, setInterfaceId] = useState("");

    const [eventState, setEventState] = useState({
        showCard: false,
        data: { success: false, message: "" },
    });

    const refs = { navbarRef: useRef() };

    const states = {
        isWalletConnected,
        connectedAddress,
        interfaceId,
        eventState,
    };

    const handleShowModal = (showCard) => {
        setEventState((prevState) => ({ ...prevState, showCard }));
    };

    const handleEventState = (_object) => {
        setEventState((prevState) => ({ ...prevState, ..._object }));
    };

    const handleInterfaceId = (val) => {
        setInterfaceId(val);
    };

    const getProviderOrSigner = async (needSigner = false) => {
        let connection = await web3ModalRef.current.connect();
        let provider = new providers.Web3Provider(connection);
        // check if user is connected to the Goerli network, else let them know by throwing an error
        let { chainId } = await provider.getNetwork();
        if (chainId !== 5) {
            window.alert("Change the network to Goerli");
            throw new Error("Change wallet network to Goerli");
        }

        if (needSigner) {
            let signer = provider.getSigner();
            return signer;
        }

        return provider;
    };

    const connectWallet = async () => {
        if (!isWalletConnected) {
            await getProviderOrSigner().catch((err) => {
                console.log(err);
            });
            setIsWalletConnected(true);
            await getAddress().catch((err) => console.log(err));
        }
    };

    const getAddress = async () => {
        let signer = await getProviderOrSigner(true);
        let address = await signer.getAddress();
        setConnectedAddress(address);
    };

    const appContextProvider = {
        pages,
        refs,
        states,
        functions: {
            connectWallet,
            getProviderOrSigner,
            handleShowModal,
            handleEventState,
            handleInterfaceId,
        },
    };

    useEffect(() => {
        web3ModalRef.current = new Web3Modal({
            disableInjectedProvider: false,
            network: "goerli",
            providerOptions: {},
        });

        web3ModalRef.current.connect().then((connection) => {
            const provider = new providers.Web3Provider(connection);

            connection.on("accountsChanged", (accounts) => {
                setConnectedAddress(accounts[0]);
            });
        });
    }, []);

    return (
        <AppContext.Provider value={appContextProvider}>
            <ThemeProvider theme={theme}>
                <MainAppContainer>
                    <Navbar />
                    <AddressCard />
                    <DivContainer>
                        <Home />
                    </DivContainer>
                    <FirstSection />
                    <SecondSection />
                    {/* <div className="area"></div> */}
                    {eventState.showCard && (
                        <Modal
                            isSuccess={eventState.data.success}
                            message={eventState.data.message}
                            handleShowModal={handleShowModal}
                        />
                    )}
                </MainAppContainer>

                <GlobalStyles />
            </ThemeProvider>
        </AppContext.Provider>
    );
};

export default App;
