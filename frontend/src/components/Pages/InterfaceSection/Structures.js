import React, { useContext, useEffect, useState } from "react";
// components
import Modal from "../../Utils/Modal";
// context
import { AppContext } from "../../../contexts";
// ethers
import { Contract } from "ethers";
// hooks
import useForm from "../../../hooks/useForm";
// images
import loaderImg from "../../../public/gifs/Spinner-1s-200px.gif";
import structImg from "../../../public/structs_example.png";
// styles
import {
    ContentsContainer,
    GridContainer,
} from "../../styles/Container/InterfaceSection/Container";
import { FlexDivContainer } from "../../styles/Container/Others/Container";
import {
    HeaderText,
    NormalText,
    SubText1,
    SubText2,
} from "../../styles/Container/InterfaceSection/Text";
import {
    ContentImage,
    Loader,
} from "../../styles/Container/InterfaceSection/Image";
import {
    BackButton,
    Button,
} from "../../styles/Container/InterfaceSection/Button";
import { Form, TextInput } from "../../styles/Container/InterfaceSection/Form";

const Structures = ({ abi, contractAddress }) => {
    const {
        functions: { getProviderOrSigner, handleEventState },
    } = useContext(AppContext);

    const [createPersonFormState, setCreatePersonFormState] = useForm({
        input_firstName: "",
        input_lastName: "",
        input_age: 0,
    });

    const [findPersonFormState, setFindPersonFormState] = useForm({
        input_id: 0,
    });

    const [updatePersonFormState, setUpdatePersonFormState] = useForm({
        input_firstName: "",
        input_lastName: "",
        input_age: 0,
    });

    const [eventState, setEventState] = useState({
        showCard: false,
        data: { success: false, message: "" },
    });

    const [createPersonState, setCreatePersonState] = useState({
        loading: false,
    });

    const [updatePersonState, setUpdatePersonState] = useState({
        loading: false,
    });

    /**
     * message :
     *      '_' => means that no id was provided and 'find person' button should be disabled
     *      'not found' => means that an id was provided but could not be found on the blockchain
     *      'found' => means that an id was provided and was found on the blockchain
     */
    const [findPersonState, setFindPersonState] = useState({
        loading: false,
        message: "_",
        data: { _firstName: "", _lastName: "", _age: 0 },
    });

    const createPerson = async (firstName, lastName, age) => {
        let signer = await getProviderOrSigner(true);
        let contract = new Contract(contractAddress, abi, signer);
        let tx = await contract.createPerson(firstName, lastName, age);

        // loading is true
        setCreatePersonState((prevState) => ({ ...prevState, loading: true }));

        await tx.wait();

        console.log(tx);

        setCreatePersonState((prevState) => ({ ...prevState, loading: false }));
        // loading is false
        return tx;
    };

    const handleCreatePerson = () => {
        let {
            input_firstName: firstName,
            input_lastName: lastName,
            input_age: age,
        } = createPersonFormState;

        createPerson(firstName, lastName, age)
            .then((res) => {
                console.log({ res });
            })
            .catch((err) => console.log(err));
    };

    const findPerson = async (id) => {
        let provider = await getProviderOrSigner();
        let contract = new Contract(contractAddress, abi, provider);

        // set loading to true
        setFindPersonState((prevState) => ({ ...prevState, loading: true }));

        let personsLength = await contract.personsLength();

        console.log(personsLength);

        if (id > personsLength) {
            setFindPersonState((prevState) => ({
                ...prevState,
                loading: false,
                message: "not_found",
            }));
            throw Error("Person with id not found");
        }

        let { _age, _firstName, _lastName } = await contract.persons(id);

        setFindPersonState((prevState) => ({
            ...prevState,
            loading: false,
            message: "success",
            data: { _age, _firstName, _lastName },
        }));
        // set loading to false
        return true;
    };

    const handleFindPerson = () => {
        let arg = findPersonFormState.input_id;

        findPerson(arg)
            .then((res) => {
                console.log(res);
            })
            .catch(({ message }) => {
                setFindPersonState((prevState) => ({
                    ...prevState,
                    loading: false,
                }));
                handleEventState({
                    showCard: true,
                    data: { success: false, message },
                });
            });
    };

    const updatePerson = async (_firstName, _lastName, _age, _id) => {
        let signer = await getProviderOrSigner(true);
        let contract = new Contract(contractAddress, abi, signer);
        let tx = await contract.updatePerson(_firstName, _lastName, _age, _id);

        // set loading to true
        setUpdatePersonState((prevState) => ({ ...prevState, loading: true }));

        await tx.wait();

        setUpdatePersonState((prevState) => ({ ...prevState, loading: false }));
        // set loading to false
        return tx;
    };

    const handleUpdatePerson = () => {
        let {
            input_age: _age,
            input_firstName: _firstName,
            input_lastName: _lastName,
        } = updatePersonFormState;
        console.log(updatePersonFormState);
        let { input_id: _id } = findPersonFormState;

        updatePerson(_firstName, _lastName, _age, _id)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    };

    const showPersonUpdater = () => {
        switch (findPersonState.message) {
            case "_":
                return (
                    <FlexDivContainer
                        justifyContent="flex-end"
                        alignItems="flex-end"
                    >
                        {findPersonState.loading ? (
                            <Loader src={loaderImg} />
                        ) : (
                            <Button onClick={handleFindPerson}>
                                Find Person
                            </Button>
                        )}
                        <Form>
                            <TextInput
                                type="number"
                                name="input_id"
                                min={1}
                                value={findPersonFormState.input_id}
                                onChange={setFindPersonFormState}
                                placeholder="Id"
                            />
                        </Form>
                    </FlexDivContainer>
                );
            case "not_found":
                return (
                    <FlexDivContainer
                        flexDirection="column"
                        alignItems="flex-end"
                    >
                        <FlexDivContainer
                            justifyContent="flex-end"
                            alignItems="flex-end"
                        >
                            <Button onClick={handleFindPerson}>
                                Find Person
                            </Button>
                            <Form>
                                <TextInput
                                    type="number"
                                    name="input_id"
                                    min={1}
                                    value={findPersonFormState.input_id}
                                    onChange={setFindPersonFormState}
                                    placeholder="Id"
                                />
                            </Form>
                        </FlexDivContainer>
                        {findPersonState.loading ? (
                            <Loader src={loaderImg} />
                        ) : (
                            <NormalText>
                                Person with provided id was not found
                            </NormalText>
                        )}
                    </FlexDivContainer>
                );
            case "success":
                return (
                    <FlexDivContainer
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <FlexDivContainer
                            justifyContent="flex-end"
                            alignItems="flex-end"
                        >
                            {updatePersonState.loading ? (
                                <Loader src={loaderImg} />
                            ) : (
                                <Button onClick={handleUpdatePerson}>
                                    Update Person
                                </Button>
                            )}
                            <Form>
                                <TextInput
                                    type="text"
                                    name="input_firstName"
                                    placeholder="First name"
                                    value={
                                        updatePersonFormState.input_firstName
                                    }
                                    onChange={setUpdatePersonFormState}
                                />
                                <TextInput
                                    type="text"
                                    name="input_lastName"
                                    placeholder="Last name"
                                    value={updatePersonFormState.input_lastName}
                                    onChange={setUpdatePersonFormState}
                                />
                                <TextInput
                                    type="number"
                                    name="input_age"
                                    placeholder="Age"
                                    min={0}
                                    value={updatePersonFormState.input_age}
                                    onChange={setUpdatePersonFormState}
                                />
                            </Form>
                        </FlexDivContainer>

                        <BackButton
                            onClick={() =>
                                setFindPersonState((prevState) => ({
                                    ...prevState,
                                    message: "_",
                                }))
                            }
                            disabled={updatePersonState.loading}
                        >
                            Go back
                        </BackButton>
                    </FlexDivContainer>
                );
            default:
                return "";
        }
    };

    useEffect(() => {
        getProviderOrSigner()
            .then((provider) => {
                console.log("instatiated events");

                let contract = new Contract(contractAddress, abi, provider);

                contract.on(
                    "PersonCreated",
                    (_firstName, _lastName, _age, _id) => {
                        console.log({ _firstName, _lastName, _age, _id });

                        let message =
                            "Transaction was successful. Person got created";
                        handleEventState({
                            showCard: true,
                            data: { success: true, message },
                        });
                    }
                );

                contract.on("PersonUpdated", (_id) => {
                    console.log({ _id });

                    let message = `Transaction was successful. Person ${_id} was updated`;
                    handleEventState({
                        showCard: true,
                        data: { success: true, message },
                    });
                });
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (findPersonState.message === "success") {
            let eAge = {
                target: { name: "input_age", value: findPersonState.data._age },
            };
            setUpdatePersonFormState(eAge);
            let eFirstName = {
                target: {
                    name: "input_firstName",
                    value: findPersonState.data._firstName,
                },
            };
            setUpdatePersonFormState(eFirstName);
            let eLastName = {
                target: {
                    name: "input_lastName",
                    value: findPersonState.data._lastName,
                },
            };
            setUpdatePersonFormState(eLastName);
        }
    }, [findPersonState]);

    return (
        <ContentsContainer>
            <FlexDivContainer>
                <HeaderText>Structs are Structures 🏗👽</HeaderText>
            </FlexDivContainer>
            <GridContainer>
                <NormalText>
                    Structs in Solidity allows you to create more complicated
                    data types that have multiple properties. You can define
                    your own type by creating a struct. They are useful for
                    grouping together related data. Structs can be declared
                    outside of a contract and imported in another contract.
                </NormalText>
                <NormalText>
                    Generally, it is used to represent a record. To define a
                    structure <em>struct</em> keyword is used, which creates a
                    new data type.{" "}
                </NormalText>
                <ContentImage src={structImg} width={"650px"} height={"auto"} />
            </GridContainer>
            <FlexDivContainer>
                <HeaderText>Events in Solidity ✨👽</HeaderText>
            </FlexDivContainer>
            <GridContainer>
                <SubText1>What are Events ? 🧐🤔</SubText1>
                <NormalText>
                    To put it simply, <em>events</em> are ways to communicate
                    with a client application or front-end website that
                    something has happened on the blockchain.
                </NormalText>
                <NormalText>
                    Solidity Events are the same as <em>events</em> in any other
                    programming language. An event is an inheritable member of
                    the contract, which stores the arguments passed in the
                    transaction logs when emitted.
                </NormalText>
            </GridContainer>
            <GridContainer>
                <FlexDivContainer>
                    <SubText2>Let's play with the blockchain api 🎭💃</SubText2>
                </FlexDivContainer>
                <NormalText>
                    We will be creating a person struct with{" "}
                    <Button isText={true}>firstName</Button>,
                    <Button isText={true}>lastName</Button>,{" "}
                    <Button isText={true}>age</Button> and{" "}
                    <Button isText={true}>id</Button> properties. Also,{" "}
                    <em>events</em> will be printed to show what that happened
                    on the Blockchain.
                </NormalText>
                <FlexDivContainer
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <FlexDivContainer
                        justifyContent="flex-start"
                        alignItems="flex-end"
                    >
                        <Form>
                            <TextInput
                                type="text"
                                name="input_firstName"
                                placeholder="First name"
                                value={createPersonFormState.input_firstName}
                                onChange={setCreatePersonFormState}
                            />
                            <TextInput
                                type="text"
                                name="input_lastName"
                                placeholder="Last name"
                                value={createPersonFormState.input_lastName}
                                onChange={setCreatePersonFormState}
                            />
                            <TextInput
                                type="number"
                                name="input_age"
                                min={0}
                                placeholder="Age"
                                value={createPersonFormState.input_age}
                                onChange={setCreatePersonFormState}
                            />
                        </Form>
                        {createPersonState.loading ? (
                            <Loader src={loaderImg} />
                        ) : (
                            <Button onClick={handleCreatePerson}>
                                Create Person
                            </Button>
                        )}
                    </FlexDivContainer>

                    {showPersonUpdater()}
                </FlexDivContainer>
            </GridContainer>
        </ContentsContainer>
    );
};

export default Structures;
