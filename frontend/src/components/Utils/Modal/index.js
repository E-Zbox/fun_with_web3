import React, { useEffect, useState } from "react";
// images
import errorImg from "../../../public/icons8-cancel-50.png";
import successImg from "../../../public/icons8-check-48.png";
// styles
import {
    Button,
    Container,
    HeaderText,
    Logo,
    LogoContainer,
    Main,
    SubText,
    TextContainer,
} from "./index.jsx";
// theme
import { useTheme } from "styled-components";

const Modal = ({ isSuccess, message, handleShowModal }) => {
    const [messageColor, setMessageColor] = useState("");
    const [showCard, setShowCard] = useState(true);

    const duration = 12;

    const {
        colors: { red01, green01, blue071: textColor },
    } = useTheme();

    useEffect(() => {
        console.log("I am alive [Modal.js]");
        setMessageColor(isSuccess ? green01 : red01);

        const timeoutId = setTimeout(() => {
            setShowCard(false);
        }, duration * 1000);

        () => {
            clearTimeout(timeoutId);
        };
    }, []);

    useEffect(() => {
        handleShowModal(showCard);
    }, [showCard]);

    return (
        <Main showCard={showCard} duration={duration}>
            <Container messageColor={messageColor}>
                <LogoContainer>
                    <Logo
                        src={isSuccess ? successImg : errorImg}
                        isSuccess={isSuccess}
                    />
                </LogoContainer>
                <TextContainer>
                    <HeaderText>
                        {isSuccess ? "Success 🎉🚀" : "Error 😞💔"}
                    </HeaderText>
                    <SubText textColor={textColor}>
                        {message.length > 50
                            ? `${message.substring(0, 47)}...`
                            : message}
                    </SubText>
                </TextContainer>
                <Button
                    textColor={textColor}
                    messageColor={messageColor}
                    onClick={() => setShowCard(false)}
                >
                    Close
                </Button>
            </Container>
        </Main>
    );
};

export default Modal;
