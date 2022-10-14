import React, { useContext, useEffect, useRef, useState } from "react";
// context
import { AppContext } from "../../../contexts";
// ethers
import { Contract } from "ethers";
// hooks
import useForm from "../../../hooks/useForm";
// images
import loaderImg from "../../../public/gifs/Spinner-1s-200px.gif";
// styles
import {
    Box,
    ContentsContainer,
    GridContainer,
    ScrollContainer,
    Scroller,
    ScrollFlexContainer,
} from "../../styles/Container/InterfaceSection/Container";
import { FlexDivContainer } from "../../styles/Container/Others/Container";
import {
    HeaderText,
    NormalText,
    SubText1,
    SubText2,
} from "../../styles/Container/InterfaceSection/Text";
import { Form, TextInput } from "../../styles/Container/InterfaceSection/Form";
import { Loader } from "../../styles/Container/InterfaceSection/Image";
import { Button } from "../../styles/Container/InterfaceSection/Button";

const StringArrays = ({ abi, contractAddress }) => {
    const {
        functions: { getProviderOrSigner, handleEventState },
    } = useContext(AppContext);

    const [formState, setFormState] = useForm({ input_string_array: "" });

    const scrollContainerRef = useRef();

    const [_stringArrayState, set_stringArrayState] = useState({
        loading: false,
        data: [],
    });

    const getStringArray = async () => {
        let provider = await getProviderOrSigner();
        let contract = new Contract(contractAddress, abi, provider);

        // loading to true
        set_stringArrayState((prevState) => ({ ...prevState, loading: true }));

        let _stringArrayLength = await contract._stringArrayLength();

        let _stringArray = [];

        for (let index = 0; index < _stringArrayLength; index++) {
            let item = await contract._stringArray(index);
            _stringArray.push(item);
        }

        console.log({ _stringArray });

        set_stringArrayState((prevState) => ({
            ...prevState,
            loading: false,
            data: _stringArray,
        }));
        // loading is false

        return _stringArray;
    };

    const setStringArray = async (arg) => {
        let signer = await getProviderOrSigner(true);
        let contract = new Contract(contractAddress, abi, signer);
        let tx = await contract.set_stringArray(arg);

        // loading is true
        set_stringArrayState((prevState) => ({ ...prevState, loading: true }));

        await tx.wait();

        set_stringArrayState((prevState) => ({ ...prevState, loading: false }));
        // loading is false

        return true;
    };

    const handleSubmit = () => {
        let arg = formState.input_string_array;
        setStringArray(arg)
            .then((res) => {
                handleEventState({
                    showCard: true,
                    data: {
                        success: true,
                        message: "String was added correctly to the blockchain",
                    },
                });
                if (res) {
                    getStringArray().catch((err) => {
                        let { message } = err;
                        console.log(err);
                        handleEventState({
                            showCard: true,
                            data: { success: false, message },
                        });
                    });
                }
            })
            .catch((err) => {
                let { message } = err;
                console.log(err);
                handleEventState({
                    showCard: true,
                    data: { success: false, message },
                });
            });
    };

    useEffect(() => {
        getStringArray().catch((err) => {
            let { message } = err;
            console.log(err);
            handleEventState({
                showCard: true,
                data: { success: false, message },
            });
        });
    }, []);

    useEffect(() => {
        let { scrollWidth } = scrollContainerRef.current;
        scrollContainerRef.current.scrollLeft += scrollWidth;
        console.log(scrollContainerRef.current);
    }, [_stringArrayState]);

    return (
        <ContentsContainer>
            <FlexDivContainer>
                <HeaderText>Array of Strings</HeaderText>
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
                <FlexDivContainer justifyContent="flex-start">
                    <Button onClick={handleSubmit} disabled={false}>
                        Append to array
                    </Button>
                    <Form>
                        <TextInput
                            type="text"
                            name="input_string_array"
                            value={formState.input_string_array}
                            onChange={setFormState}
                        />
                    </Form>
                </FlexDivContainer>
                <Scroller>
                    <ScrollContainer ref={scrollContainerRef}>
                        <ScrollFlexContainer>
                            {_stringArrayState.data.map((item, index) => (
                                <Box key={index}>
                                    <NormalText>{item}</NormalText>
                                </Box>
                            ))}
                            {_stringArrayState.loading && (
                                <Loader src={loaderImg} />
                            )}
                        </ScrollFlexContainer>
                    </ScrollContainer>
                </Scroller>
            </GridContainer>
        </ContentsContainer>
    );
};

export default StringArrays;
