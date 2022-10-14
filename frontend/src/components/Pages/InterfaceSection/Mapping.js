import React, { useContext, useEffect, useState } from "react";
// context
import { AppContext } from "../../../contexts";
// ethers
import { Contract } from "ethers";
// images
import loaderImg from "../../../public/gifs/Ripple-1s-200px.gif";
import mappingExample from "../../../public/mapping_example.png";
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
    List,
    NormalText,
    SubText1,
    SubText2,
    UL,
} from "../../styles/Container/InterfaceSection/Text";
import {
    ContentImage,
    Loader,
} from "../../styles/Container/InterfaceSection/Image";
import { Button } from "../../styles/Container/InterfaceSection/Button";

const Mapping = ({ abi, contractAddress }) => {
    const {
        functions: { getProviderOrSigner, handleEventState, handleInterfaceId },
        pages: {
            firstSection: { sections },
        },
    } = useContext(AppContext);

    const [mappingState, setMappingState] = useState({
        loading: false,
        data: [],
    });

    const getMappedPersons = async () => {
        let provider = await getProviderOrSigner();
        let contract = new Contract(contractAddress, abi, provider);

        // loading
        setMappingState((prevState) => ({ ...prevState, loading: true }));

        let _personsLength = await contract.personsLength();

        if (_personsLength == 0) {
            setMappingState((prevState) => ({
                ...prevState,
                loading: false,
                data: [],
            }));
            return false;
        }

        let _mappingArray = [];
        for (let index = 0; index < _personsLength; index++) {
            let item = await contract.mapStringPerson(index);
            _mappingArray.push(item);
        }

        setMappingState((prevState) => ({
            ...prevState,
            loading: false,
            data: _mappingArray,
        }));
        return true;
    };

    const goToStructs_Events = () => {
        let { id_href } = sections.find(
            ({ id_href }) => id_href === "structures_events"
        );

        handleInterfaceId(id_href);
    };

    useEffect(() => {
        getMappedPersons()
            .then((res) => {
                if (!res) {
                    handleEventState({
                        showCard: true,
                        data: {
                            success: false,
                            message: "No mapped person has been created",
                        },
                    });
                }
            })
            .catch(({ message }) => {
                handleEventState({
                    showCard: true,
                    data: { success: false, message },
                });
            });
    }, []);

    return (
        <ContentsContainer>
            <FlexDivContainer justifyContent="flex-start">
                <HeaderText>Mapping 🗺🧐</HeaderText>
            </FlexDivContainer>
            <GridContainer>
                <SubText1>What is Mapping? 🤔</SubText1>
                <NormalText>
                    Mapping is a reference type as arrays and structs. Following
                    is the syntax to declare a mapping type.
                </NormalText>
                <ContentImage
                    src={mappingExample}
                    width={"auto"}
                    height={"auto"}
                />
                <SubText2>Where</SubText2>
                <NormalText>
                    <em>_KeyType</em> - can be any built-in types plus bytes and
                    string. No reference type or complex objects are allowed.
                </NormalText>
                <NormalText>
                    <em>_ValueType</em> - can be any type. Structs are not
                    excluded
                </NormalText>
            </GridContainer>
            <GridContainer>
                <SubText2>⚠Note that: </SubText2>
                <UL>
                    <List>
                        <NormalText>
                            - Mapping can only have type of <em>storage</em> and
                            are generally used for state variables.
                        </NormalText>
                    </List>
                    <List>
                        - Mapping can be marked public. Solidity automatically
                        create getter for it.
                    </List>
                </UL>
            </GridContainer>
            <GridContainer>
                <FlexDivContainer>
                    <SubText1>
                        Let's check out the available blockchain api 🎭🕺
                    </SubText1>
                </FlexDivContainer>
                <SubText2>
                    ⚠In case you have not created a person click on the "
                    <em>Structures & Events</em>" button above to create a
                    person
                </SubText2>
                {mappingState.loading ? (
                    <Loader src={loaderImg} />
                ) : (
                    <Scroller>
                        <ScrollContainer>
                            <ScrollFlexContainer>
                                {mappingState.data.map(
                                    (
                                        { _firstName, _lastName, _age },
                                        index
                                    ) => (
                                        <Box key={index}>
                                            <NormalText>
                                                <em>{"{"}</em>
                                            </NormalText>
                                            <NormalText>
                                                name
                                                <em>:</em>
                                                <Button isText={true}>
                                                    {_lastName} {_firstName}
                                                </Button>
                                            </NormalText>
                                            <NormalText>
                                                age <em>:</em>
                                                <Button isText={true}>
                                                    {_age}
                                                </Button>
                                            </NormalText>
                                            <NormalText>
                                                <em>{"}"}</em>
                                            </NormalText>
                                        </Box>
                                    )
                                )}
                            </ScrollFlexContainer>
                        </ScrollContainer>
                    </Scroller>
                )}
                <NormalText>
                    Go to the{" "}
                    <Button onClick={goToStructs_Events}>
                        Structs & Events
                    </Button>{" "}
                    section to create a person
                </NormalText>
            </GridContainer>
        </ContentsContainer>
    );
};

export default Mapping;
