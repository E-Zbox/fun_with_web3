import React, { useContext, useEffect, useState } from "react";
// abis
import {
    basicBuiltinsAbi,
    intermediateBuiltinsAbi,
    basicBuiltinsContractAddress,
    intermediateBuiltinsContractAddress,
} from "../../../constants";
//components
import Uint8_256 from "./Uint8_256";
import Arrays from "./Arrays";
import Strings from "./Strings";
import StringArrays from "./StringArrays";
import Address from "./Address";
import Structures from "./Structures";
import Mapping from "./Mapping";
// context
import { AppContext } from "../../../contexts";
// styles
import {
    MainSection as MainInterfaceSection,
    SectionContainer,
} from "../../styles/Container/InterfaceSection";
import { SubText1 } from "../../styles/Container/InterfaceSection/Text";
import {
    MainSection,
    MainSectionContainer,
} from "../../styles/Container/SecondSection";

const InterfaceSection = () => {
    const {
        states: { interfaceId },
        pages: {
            interfaceSection: {
                images: { uintIcon },
            },
        },
    } = useContext(AppContext);

    /**
     * values for showCard:
     *      ready => means there is content to be displayed
     *      in_dev=> means there is no ready content to be displayed
     *      default=> means show nothing
     */
    const [state, setState] = useState({ showCard: "default", element: <></> });

    useEffect(() => {
        switch (interfaceId) {
            case "uint8_256":
                setState({
                    showCard: "ready",
                    element: (
                        <Uint8_256
                            abi={basicBuiltinsAbi}
                            contractAddress={basicBuiltinsContractAddress}
                            icon={uintIcon}
                        />
                    ),
                });
                break;
            case "arrays":
                setState({
                    showCard: "ready",
                    element: (
                        <Arrays
                            abi={basicBuiltinsAbi}
                            contractAddress={basicBuiltinsContractAddress}
                        />
                    ),
                });
                break;
            case "strings":
                setState({
                    showCard: "ready",
                    element: (
                        <Strings
                            abi={basicBuiltinsAbi}
                            contractAddress={basicBuiltinsContractAddress}
                        />
                    ),
                });
                break;
            case "bytes32":
                setState({
                    showCard: "in_dev",
                    element: (
                        <SubText1>
                            "Bytes 32" section is in development 🚧🏗
                        </SubText1>
                    ),
                });
                break;
            case "string_arrays":
                setState({
                    showCard: "ready",
                    element: (
                        <StringArrays
                            abi={basicBuiltinsAbi}
                            contractAddress={basicBuiltinsContractAddress}
                        />
                    ),
                });
                break;
            case "enumerables":
                setState({
                    showCard: "in_dev",
                    element: (
                        <SubText1>
                            "Enumerables" section is in development 🚧🏗
                        </SubText1>
                    ),
                });
                break;
            case "address":
                setState({
                    showCard: "ready",
                    element: (
                        <Address
                            abi={basicBuiltinsAbi}
                            contractAddress={basicBuiltinsContractAddress}
                            secondContractAddress={
                                intermediateBuiltinsContractAddress
                            }
                        />
                    ),
                });
                break;
            case "mapping":
                setState({
                    showCard: "ready",
                    element: (
                        <Mapping
                            abi={intermediateBuiltinsAbi}
                            contractAddress={
                                intermediateBuiltinsContractAddress
                            }
                        />
                    ),
                });
                break;
            case "structures_events":
                setState({
                    showCard: "ready",
                    element: (
                        <Structures
                            abi={intermediateBuiltinsAbi}
                            contractAddress={
                                intermediateBuiltinsContractAddress
                            }
                        />
                    ),
                });
                break;
            case "booleans":
                setState({
                    showCard: "in_dev",
                    element: (
                        <SubText1>
                            "Booleans" section is in development 🚧🏗
                        </SubText1>
                    ),
                });
                break;
            case "int8_256":
                setState({
                    showCard: "in_dev",
                    element: (
                        <SubText1>
                            "Int8 & Int 256" section is in development 🚧🏗
                        </SubText1>
                    ),
                });
                break;
            default:
                setState({ showCard: "default", element: <></> });
                break;
        }
    }, [interfaceId]);

    return (
        <MainSection showCard={state.showCard}>
            <MainSectionContainer>
                <MainInterfaceSection>
                    <SectionContainer>
                        <a id="interface-section">{state.element}</a>
                    </SectionContainer>
                </MainInterfaceSection>
            </MainSectionContainer>
        </MainSection>
    );
};

export default InterfaceSection;
