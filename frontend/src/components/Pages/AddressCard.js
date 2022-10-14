import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "styled-components";
// context
import { AppContext } from "../../contexts";
// styles
import {
    CardButton,
    Card,
    CardContainer,
    CardText,
} from "../styles/Container/AddressCard";

const AddressCard = () => {
    const {
        refs: { navbarRef },
        states: { connectedAddress, isWalletConnected },
    } = useContext(AppContext);

    const [showCard, setShowCard] = useState(false);
    const [topPosition, setTopPosition] = useState("20%");

    const {
        colors: { blue02 },
    } = useTheme();

    useEffect(() => {
        let {
            current: { clientHeight },
        } = navbarRef;
        setTopPosition(`${clientHeight}px`);
    });
    return (
        <Card showCard={showCard} top={topPosition}>
            <CardContainer>
                {showCard ? (
                    <>
                        <CardText>
                            {isWalletConnected
                                ? connectedAddress
                                : "Wallet is not connected"}
                        </CardText>
                        <CardButton
                            bgColor={"transparent"}
                            color={"#d52"}
                            hoverColor={"#f52"}
                            onClick={() => setShowCard(false)}
                        >
                            X
                        </CardButton>
                    </>
                ) : (
                    <>
                        <CardButton
                            bgColor={"#fff"}
                            color={blue02}
                            onClick={() => setShowCard(true)}
                        >
                            {">>"}
                        </CardButton>
                    </>
                )}
            </CardContainer>
        </Card>
    );
};

export default AddressCard;
