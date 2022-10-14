import React, { useContext, useEffect, useState } from "react";
// context
import { AppContext } from "../../../contexts";
// ethers
import { Contract } from "ethers";
// images
import loaderImg from "../../../public/gifs/Ripple-1s-200px.gif";
// styles
import {
    ContentsContainer,
    GridContainer,
} from "../../styles/Container/InterfaceSection/Container";
import { FlexDivContainer } from "../../styles/Container/Others/Container";
import {
    HeaderText,
    List,
    NormalText,
    SubText1,
    SubText2,
    UL,
} from "../../styles/Container/InterfaceSection/Text";
import { Button } from "../../styles/Container/InterfaceSection/Button";
import { Loader } from "../../styles/Container/InterfaceSection/Image";

const Address = ({ abi, contractAddress, secondContractAddress }) => {
    const {
        functions: { getProviderOrSigner, handleEventState },
        states: { connectedAddress },
    } = useContext(AppContext);

    const [_addressState, set_addressState] = useState({
        loading: false,
        value: "",
    });

    const [ownerState, setOwnerState] = useState({ loading: false, value: "" });

    const getOwner = async () => {
        let provider = await getProviderOrSigner();
        let contract = new Contract(contractAddress, abi, provider);

        /// loading is true
        setOwnerState((prevState) => ({ ...prevState, loading: true }));

        let owner = await contract.getOwner();

        setOwnerState((prevState) => ({
            ...prevState,
            loading: false,
            value: owner,
        }));

        return owner;
    };

    const getAddress = async () => {
        let provider = await getProviderOrSigner();
        let contract = new Contract(contractAddress, abi, provider);

        // set loading to true
        set_addressState((prevState) => ({ ...prevState, loading: true }));

        let _address = await contract._address();

        set_addressState((prevState) => ({
            ...prevState,
            loading: false,
            value: _address,
        }));
        // set loading to false
        return _address;
    };

    /**
     * setAddress
     * there's no argument because the smart contract uses msg.sender
     */
    const setAddress = async () => {
        if (connectedAddress !== _addressState.value) {
            let signer = await getProviderOrSigner(true);
            let contract = new Contract(contractAddress, abi, signer);
            let tx = await contract.set_address();

            // loading is true
            set_addressState((prevState) => ({ ...prevState, loading: true }));

            await tx.wait();

            // loading is false
            set_addressState((prevState) => ({ ...prevState, loading: false }));
            return true;
        }
        return false;
    };

    const handleSubmit = () => {
        setAddress()
            .then((res) => {
                if (res) {
                    handleEventState({
                        showCard: true,
                        data: {
                            success: true,
                            message:
                                "Address got updated successfully on the blockchain",
                        },
                    });
                    getAddress().catch(({ message }) =>
                        handleEventState({
                            showCard: true,
                            data: { success: false, message },
                        })
                    );
                } else {
                    if (connectedAddress.length == 0) {
                        window.alert(
                            "No address was selected. Click on the 'Connect Wallet' button"
                        );
                        handleEventState({
                            showCard: true,
                            data: {
                                success: false,
                                message:
                                    "No address was selected. Click on the 'Connect Wallet' button",
                            },
                        });
                    } else {
                        window.alert(
                            "Change to a different account to be able to change the address state of the blockchain"
                        );
                    }
                }
            })
            .catch(({ message }) =>
                handleEventState({
                    showCard: true,
                    data: { success: false, message },
                })
            );
    };

    useEffect(() => {
        getAddress().catch((err) =>
            handleEventState({
                showCard: true,
                data: { success: false, message },
            })
        );

        getOwner().catch((err) => console.log(err));
    }, []);

    return (
        <ContentsContainer>
            <FlexDivContainer justifyContent="flex-start">
                <HeaderText>Address</HeaderText>
            </FlexDivContainer>
            <GridContainer>
                <SubText1>What is an Address? 👾🧐</SubText1>
                <NormalText>
                    An address is a 20 bytes data type. It is specifically
                    designed to hold account addresses in Ethereum, which are
                    160 bits or 20 bytes in size. It can hold contract account
                    addresses as well as externally owned account addresses.
                    Address is a value type and it creates a new copy while
                    being assigned to another variable. Address has a 'balance'
                    property that returns the amount of Ether available with the
                    account and has a few functions for transferring Ether to
                    accounts and invoking contract functions.
                </NormalText>
                <NormalText>
                    It provides the following two functions to transfer Ether:
                </NormalText>
                <UL>
                    <List>
                        1️⃣ transfer (better alternative for transferring Ether
                        to an account)
                    </List>
                    <List>2️⃣ send</List>
                </UL>
            </GridContainer>
            <GridContainer>
                <SubText2>transfer</SubText2>
                <NormalText>
                    The transfer function raises an exception and returns the
                    Ether to the caller.
                </NormalText>
                <SubText2>send</SubText2>
                <NormalText>
                    The send function returns a boolean value depending on
                    successful execution of the Ether transfer{" "}
                </NormalText>
            </GridContainer>
            <GridContainer>
                <NormalText>
                    The address of the 2 smart contracts that is being used in
                    this application are
                </NormalText>
                <FlexDivContainer justifyContent="flex-start">
                    <NormalText>Basic Builtins SC: </NormalText>
                    <SubText2>{contractAddress}</SubText2>
                </FlexDivContainer>
                <FlexDivContainer justifyContent="flex-start">
                    <NormalText>Intermediate Builtins SC: </NormalText>
                    <SubText2>{secondContractAddress}</SubText2>
                </FlexDivContainer>
            </GridContainer>
            <GridContainer>
                <FlexDivContainer justifyContent="flex-start">
                    <Button onClick={handleSubmit}>Address</Button>
                    <NormalText>
                        Go to the top of the page, click on the {">>"} button
                        and see the currently connected address.
                    </NormalText>
                </FlexDivContainer>
                {_addressState.loading ? (
                    <Loader src={loaderImg} />
                ) : (
                    <Button isText={true}>{_addressState.value}</Button>
                )}
                {ownerState.loading ? (
                    <Loader src={loaderImg} />
                ) : (
                    <Button isText={true}>Owner: {ownerState.value}</Button>
                )}
            </GridContainer>
        </ContentsContainer>
    );
};

export default Address;
