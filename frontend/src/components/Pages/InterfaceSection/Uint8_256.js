import React, { useContext, useEffect, useState } from "react";
// components
import {
    HeaderText,
    List,
    NormalText,
    SubText1,
    SubText2,
    UL,
} from "../../styles/Container/InterfaceSection/Text";
import {
    ContentsContainer,
    GridContainer,
} from "../../styles/Container/InterfaceSection/Container";
import { Button } from "../../styles/Container/InterfaceSection/Button";
import { FlexDivContainer } from "../../styles/Container/Others/Container";
import { Loader } from "../../styles/Container/InterfaceSection/Image";
// context
import { AppContext } from "../../../contexts";
import { Form, TextInput } from "../../styles/Container/InterfaceSection/Form";
// hooks
import useForm from "../../../hooks/useForm";
// image
import loaderImg from "../../../public/gifs/Ripple-1s-200px.gif";

// ethers
import { Contract } from "ethers";

const Uint8_256 = ({ abi, contractAddress, icon }) => {
    const {
        functions: { getProviderOrSigner, handleEventState },
    } = useContext(AppContext);

    const [formState, setFormState] = useForm({
        input_uint8: "",
        input_uint256: "",
    });

    const [_uintEightState, set_uintEightState] = useState({
        value: null,
        loading: false,
    });
    const [_uintTwoFiveSixState, set_uintTwoFiveSixState] = useState({
        value: null,
        loading: false,
    });

    const getUintEight = async () => {
        let provider = await getProviderOrSigner();
        let basicBuiltinsContract = new Contract(
            contractAddress,
            abi,
            provider
        );

        set_uintEightState((prevState) => ({ ...prevState, loading: true }));

        let _uint8 = await basicBuiltinsContract._uintEight();

        set_uintEightState({ loading: false, value: _uint8 });

        return _uint8;
    };

    const getUintTwoFiveSix = async () => {
        let provider = await getProviderOrSigner();
        let basicBuiltinsContract = new Contract(
            contractAddress,
            abi,
            provider
        );

        set_uintTwoFiveSixState((prevState) => ({
            ...prevState,
            loading: true,
        }));

        let _uint256 = await basicBuiltinsContract._uintTwoFiveSix();

        let value = _uint256.toNumber();
        console.log("i am here >> let value = _uint256.toNumber();");

        set_uintTwoFiveSixState({ loading: false, value });

        return value;
    };

    const setUintEight = async (arg) => {
        let signer = await getProviderOrSigner(true);
        let contract = new Contract(contractAddress, abi, signer);
        let tx = await contract.set_uintEight(arg);

        set_uintEightState((prevState) => ({ ...prevState, loading: true }));

        await tx.wait();

        set_uintEightState((prevState) => ({ ...prevState, loading: false }));

        return true;
    };

    const setUintTwoFiveSix = async (arg) => {
        let signer = await getProviderOrSigner(true);
        let contract = new Contract(contractAddress, abi, signer);
        console.log(contract);
        let tx = await contract.set_uintTwoFiveSix(arg);

        set_uintTwoFiveSixState((prevState) => ({
            ...prevState,
            loading: true,
        }));

        await tx.wait();

        set_uintTwoFiveSixState((prevState) => ({
            ...prevState,
            loading: false,
        }));

        return true;
    };

    const handleUint8 = () => {
        let arg = Number(formState.input_uint8);
        console.log({ arg });

        setUintEight(arg)
            .then((result) => {
                handleEventState({
                    showCard: true,
                    data: {
                        success: true,
                        message:
                            "Uint8 value got updated successfully on the blockchain",
                    },
                });
                if (result == true) {
                    console.log("let's get that data");
                    getUintEight().catch(({ message }) =>
                        handleEventState({
                            showCard: true,
                            data: { success: false, message },
                        })
                    );
                }
            })
            .catch(({ message }) =>
                handleEventState({
                    showCard: true,
                    data: { success: false, message },
                })
            );
    };

    const handleUint256 = () => {
        let arg = Number(formState.input_uint256);

        setUintTwoFiveSix(arg)
            .then((res) => {
                if (res) {
                    handleEventState({
                        showCard: true,
                        data: {
                            success: true,
                            message:
                                "Uint256 value got updated successfully on the blockchain",
                        },
                    });
                    getUintTwoFiveSix().catch(({ message }) =>
                        handleEventState({
                            showCard: true,
                            data: { success: false, message },
                        })
                    );
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
        getUintEight().catch(({ message }) =>
            handleEventState({
                showCard: true,
                data: { success: false, message },
            })
        );
        getUintTwoFiveSix().catch(({ message }) =>
            handleEventState({
                showCard: true,
                data: { success: false, message },
            })
        );
    }, []);

    return (
        <ContentsContainer>
            <FlexDivContainer justifyContent={"flex-start"}>
                <HeaderText>Uint8 & Uint256</HeaderText>
            </FlexDivContainer>
            <SubText1>Integers</SubText1>
            <NormalText>
                Integers help in storing numbers in contracts. Solidity provides
                the following two types of integer:
            </NormalText>
            <UL>
                <List>
                    <SubText2>Signed integers : </SubText2> Signed integers can
                    hold both negative and positive values.
                </List>
                <List>
                    <SubText2>Unsigned integers : </SubText2>Unsigned integers
                    can hold only positive values along with zero. They can also
                    hold negative values apart from positive and zero values.
                </List>
            </UL>
            <GridContainer>
                <FlexDivContainer
                    justifyContent="flex-start"
                    alignItems="bottom"
                >
                    <Button
                        onClick={handleUint8}
                        disabled={formState.input_uint8.length == 0}
                    >
                        Uint 8
                    </Button>
                    {_uintEightState.loading == true ? (
                        <Loader src={loaderImg} />
                    ) : (
                        <NormalText>{_uintEightState.value}</NormalText>
                    )}
                    <Form>
                        <TextInput
                            type="number"
                            name="input_uint8"
                            value={formState.input_uint8}
                            onChange={setFormState}
                        />
                    </Form>
                </FlexDivContainer>
                <FlexDivContainer
                    justifyContent="flex-start"
                    alignItems="bottom"
                >
                    <Button
                        onClick={handleUint256}
                        disabled={formState.input_uint256.length == 0}
                    >
                        Uint 256
                    </Button>
                    {_uintTwoFiveSixState.loading == true ? (
                        <Loader src={loaderImg} />
                    ) : (
                        <NormalText>{_uintTwoFiveSixState.value}</NormalText>
                    )}
                    <Form>
                        <TextInput
                            type="number"
                            name="input_uint256"
                            value={formState.input_uint256}
                            onChange={setFormState}
                        />
                    </Form>
                </FlexDivContainer>
            </GridContainer>
        </ContentsContainer>
    );
};

export default Uint8_256;
