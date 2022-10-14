import React, { useContext, useEffect, useRef, useState } from "react";
// context
import { AppContext } from "../../../contexts";
// styles
import {
    Box,
    ContentsContainer,
    GridContainer,
    ScrollContainer,
    Scroller,
    ScrollFlexContainer,
} from "../../styles/Container/InterfaceSection/Container";
import {
    HeaderText,
    NormalText,
    SubText1,
    SubText2,
} from "../../styles/Container/InterfaceSection/Text";
import { FlexDivContainer } from "../../styles/Container/Others/Container";
import { Button } from "../../styles/Container/InterfaceSection/Button";
import { Form, TextInput } from "../../styles/Container/InterfaceSection/Form";
import { Loader } from "../../styles/Container/InterfaceSection/Image";
// hooks
import useForm from "../../../hooks/useForm";
// image
import loaderImg from "../../../public/gifs/Spinner-1s-200px.gif";
// ethers
import { Contract } from "ethers";

const Arrays = ({ abi, contractAddress }) => {
    const {
        functions: { getProviderOrSigner, handleEventState },
    } = useContext(AppContext);

    const [formState, setFormState] = useForm({
        input_uint8Array: "",
        input_uint256Array: "",
    });

    const uint8ScrollContainerRef = useRef();

    const uint256ScrollContainerRef = useRef();

    const [_uintEightArrayState, set_uintEightArrayState] = useState({
        loading: false,
        data: [],
    });
    const [_uintTwoFiveSixArrayState, set_uintTwoFiveSixArrayState] = useState({
        loading: false,
        data: [],
    });

    const getUintEightArray = async () => {
        let provider = await getProviderOrSigner();
        let contract = new Contract(contractAddress, abi, provider);

        set_uintEightArrayState((prevState) => ({
            ...prevState,
            loading: true,
        }));

        let _uint8ArrayLength = await contract._uintEightArrayLength();

        let _uint8Array = [];

        for (let index = 0; index < _uint8ArrayLength; index++) {
            let item = await contract._uintEightArray(index);
            _uint8Array.push(item);
        }

        set_uintEightArrayState({
            loading: false,
            data: _uint8Array,
        });
    };

    const getUintTwoFiveSixArray = async () => {
        let provider = await getProviderOrSigner();
        let contract = new Contract(contractAddress, abi, provider);

        // loading is true
        set_uintTwoFiveSixArrayState((prevState) => ({
            ...prevState,
            loading: true,
        }));

        let _uint256ArrayLength = await contract._uintTwoFiveSixArrayLength();
        _uint256ArrayLength = _uint256ArrayLength.toNumber();

        let _uint256Array = [];
        for (let index = 0; index < _uint256ArrayLength; index++) {
            let item = await contract._uintTwoFiveSixArray(index);
            item = item.toNumber();
            _uint256Array.push(item);
        }

        console.log(_uint256Array);

        set_uintTwoFiveSixArrayState({ loading: false, data: _uint256Array });
        // loading is false
    };

    const setUintEightArray = async (arg) => {
        let signer = await getProviderOrSigner(true);
        let contract = new Contract(contractAddress, abi, signer);

        let tx = await contract.update_uintEightArray(arg);

        // loading is true
        set_uintEightArrayState((prevState) => ({
            ...prevState,
            loading: true,
        }));

        await tx.wait();

        set_uintEightArrayState((prevState) => ({
            ...prevState,
            loading: false,
        }));
        // loading is now false
        return true;
    };

    const setUintTwoFiveSixArray = async (arg) => {
        let signer = await getProviderOrSigner(true);
        let contract = new Contract(contractAddress, abi, signer);

        let tx = await contract.update_uintTwoFiveSixArray(arg);

        // loading is true
        set_uintTwoFiveSixArrayState((prevState) => ({
            ...prevState,
            loading: true,
        }));

        await tx.wait();

        set_uintTwoFiveSixArrayState((prevState) => ({
            ...prevState,
            loading: false,
        }));
        // loading is now false
        return true;
    };

    const handleUint8Array = () => {
        let arg = Number(formState.input_uint8Array);

        setUintEightArray(arg)
            .then((res) => {
                if (res) {
                    handleEventState({
                        showCard: true,
                        data: {
                            success: true,
                            message:
                                "Uint8 value got added successfully to the blockchain",
                        },
                    });
                    getUintEightArray().catch(({ message }) =>
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

    const handleUint256Array = () => {
        let arg = Number(formState.input_uint256Array);

        setUintTwoFiveSixArray(arg)
            .then((res) => {
                if (res) {
                    handleEventState({
                        showCard: true,
                        data: {
                            success: true,
                            message:
                                "Uint256 value got added successfully to the blockchain",
                        },
                    });
                    getUintTwoFiveSixArray().catch(({ message }) =>
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
        getUintEightArray().catch(({ message }) =>
            handleEventState({
                showCard: true,
                data: { success: false, message },
            })
        );
        getUintTwoFiveSixArray().catch(({ message }) =>
            handleEventState({
                showCard: true,
                data: { success: false, message },
            })
        );
    }, []);

    useEffect(() => {
        let { scrollWidth } = uint8ScrollContainerRef.current;
        uint8ScrollContainerRef.scrollLeft += scrollWidth;
    }, [_uintEightArrayState]);

    useEffect(() => {
        let { scrollWidth } = uint256ScrollContainerRef.current;
        uint256ScrollContainerRef.scrollLeft += scrollWidth;
    }, [_uintTwoFiveSixArrayState]);

    return (
        <ContentsContainer>
            <FlexDivContainer justifyContent={"flex-start"}>
                <HeaderText>Arrays</HeaderText>
            </FlexDivContainer>
            <GridContainer>
                <SubText1>What are arrays ? 🧐</SubText1>
                <NormalText>
                    Arrays are data structures that store the fixed collection
                    of elements of the same data types in which each and every
                    element has a specific location called index.
                </NormalText>
            </GridContainer>
            <GridContainer>
                <SubText2>Fixed-size Array</SubText2>
                <NormalText>
                    The size of the array should be predefined. The total number
                    of elements should not exceed the size of the array. If the
                    size of the array is not specified then the array of enough
                    size is created which is enough to hold the initialization
                </NormalText>
                <SubText2>Dynamic Array</SubText2>
                <NormalText>
                    The size of the array is not predefined when it is declared.
                    As the elements are added the size of array changes and at
                    the runtime, the size of the array will be determined.
                </NormalText>
            </GridContainer>
            <GridContainer>
                <SubText2>Uint8 Array</SubText2>
                <FlexDivContainer justifyContent="flex-start">
                    <Button
                        onClick={handleUint8Array}
                        disabled={formState.input_uint8Array.length == 0}
                    >
                        Append to array
                    </Button>
                    <Form>
                        <TextInput
                            type="number"
                            name="input_uint8Array"
                            value={formState.input_uint8Array}
                            onChange={setFormState}
                        />
                    </Form>
                </FlexDivContainer>
                <Scroller>
                    <ScrollContainer ref={uint8ScrollContainerRef}>
                        <ScrollFlexContainer>
                            {_uintEightArrayState.data.map((item, index) => (
                                <Box key={index}>
                                    <NormalText textAlign="center">
                                        {item}
                                    </NormalText>
                                </Box>
                            ))}
                            {_uintEightArrayState.loading && (
                                <Loader src={loaderImg} />
                            )}
                        </ScrollFlexContainer>
                    </ScrollContainer>
                </Scroller>
            </GridContainer>
            <GridContainer>
                <SubText2>Uint256 Array</SubText2>
                <FlexDivContainer justifyContent="flex-start">
                    <Button
                        onClick={handleUint256Array}
                        disabled={formState.input_uint256Array.length == 0}
                    >
                        Append to array
                    </Button>
                    <Form>
                        <TextInput
                            type="number"
                            name="input_uint256Array"
                            value={formState.input_uint256Array}
                            onChange={setFormState}
                        />
                    </Form>
                </FlexDivContainer>
                <Scroller>
                    <ScrollContainer ref={uint256ScrollContainerRef}>
                        <ScrollFlexContainer>
                            {_uintTwoFiveSixArrayState.data.map(
                                (item, index) => (
                                    <Box key={index}>
                                        <NormalText>{item}</NormalText>
                                    </Box>
                                )
                            )}
                            {_uintTwoFiveSixArrayState.loading && (
                                <Loader src={loaderImg} />
                            )}
                        </ScrollFlexContainer>
                    </ScrollContainer>
                </Scroller>
            </GridContainer>
        </ContentsContainer>
    );
};

export default Arrays;
