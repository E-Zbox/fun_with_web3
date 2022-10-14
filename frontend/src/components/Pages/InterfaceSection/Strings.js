import React, { useContext, useEffect, useState } from "react";
// context
import { AppContext } from "../../../contexts";
// ethers
import { Contract } from "ethers";
// hooks
import useForm from "../../../hooks/useForm";
// images
import loaderImg from "../../../public/gifs/Ripple-1s-200px.gif";
// styles
import {
    ContentsContainer,
    GridContainer,
} from "../../styles/Container/InterfaceSection/Container";
import {
    HeaderText,
    List,
    NormalText,
    SubText2,
    UL,
} from "../../styles/Container/InterfaceSection/Text";
import { FlexDivContainer } from "../../styles/Container/Others/Container";
import { Button } from "../../styles/Container/InterfaceSection/Button";
import { Loader } from "../../styles/Container/InterfaceSection/Image";
import { Form, TextInput } from "../../styles/Container/InterfaceSection/Form";

const Strings = ({ abi, contractAddress }) => {
    const {
        functions: { getProviderOrSigner, handleEventState },
    } = useContext(AppContext);

    const [formState, setFormState] = useForm({ input_string: "" });

    const [_stringTextState, set_stringTextState] = useState({
        loading: false,
        value: "",
    });

    const getStringText = async () => {
        let provider = await getProviderOrSigner();
        let contract = new Contract(contractAddress, abi, provider);

        // loading is true
        set_stringTextState((prevState) => ({ ...prevState, loading: true }));

        let _stringText = await contract._stringText();

        set_stringTextState((prevState) => ({
            ...prevState,
            loading: false,
            value: _stringText,
        }));

        // loading is false
        return _stringText;
    };

    const setStringText = async (arg) => {
        let signer = await getProviderOrSigner(true);
        let contract = new Contract(contractAddress, abi, signer);

        let tx = await contract.set_stringText(arg);

        // loading is true
        set_stringTextState((prevState) => ({ ...prevState, loading: true }));

        await tx.wait();

        set_stringTextState((prevState) => ({ ...prevState, loading: false }));
        // loading is false

        return true;
    };

    const handleSubmit = () => {
        let arg = formState.input_string;
        setStringText(arg)
            .then((res) => {
                handleEventState({
                    showCard: true,
                    data: {
                        success: true,
                        message:
                            "String value got updated on blockchain successfully",
                    },
                });
                if (res) {
                    getStringText().catch(({ message }) =>
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
        console.log("getting data");
        getStringText().catch(({ message }) =>
            handleEventState({
                showCard: true,
                data: { success: false, message },
            })
        );
    }, []);

    return (
        <ContentsContainer>
            <FlexDivContainer justifyContent={"flex-start"}>
                <HeaderText>Strings in Solidity</HeaderText>
            </FlexDivContainer>
            <GridContainer>
                <SubText2>Strings can be any of the following</SubText2>
                <UL>
                    <List>
                        - Strings in Solidity is a reference type of data type
                        which stores the location of the data instead of
                        directly storing the data into the variable.
                    </List>
                    <List>
                        - They are dynamic arrays that store a set of characters
                        that can consist of numbers, special characters, spaces,
                        and alphabets.{" "}
                    </List>
                </UL>
            </GridContainer>
            <GridContainer>
                <FlexDivContainer justifyContent="flex-start">
                    <Button
                        disabled={formState.input_string.length == 0}
                        onClick={handleSubmit}
                    >
                        String
                    </Button>
                    <Form>
                        <TextInput
                            type="text"
                            name="input_string"
                            value={formState.input_string}
                            onChange={setFormState}
                        />
                    </Form>
                </FlexDivContainer>
                {_stringTextState.loading ? (
                    <Loader src={loaderImg} />
                ) : (
                    <NormalText>{_stringTextState.value}</NormalText>
                )}
            </GridContainer>
        </ContentsContainer>
    );
};

export default Strings;
