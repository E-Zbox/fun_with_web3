import styled from "styled-components";

export const Card = styled.main`
    --boxShadow: #0004;
    --height: 40px;
    --width: ${({ showCard }) => (showCard ? "fit-content" : "var(--height)")};
    position: absolute;
    top: ${({ top }) => top};
    left: 0px;
    width: var(--width);
    height: var(--size);
    display: grid;
    place-content: center;
    padding: var(--seven-px);

    * {
        transition: all 450ms ease-in-out;
    }

    & > div {
        box-shadow: ${({ showCard }) =>
            showCard && "1px 1px 3px var(--boxShadow)"};
    }

    & div > button {
        box-shadow: ${({ showCard }) =>
            !showCard && "1px 1px 3px var(--boxShadow)"};
    }
`;

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #fff;
`;

export const CardText = styled.h4`
    color: ${({
        theme: {
            colors: { yellow01 },
        },
    }) => yellow01};
    font-weight: 400;
    font-family: Calibri;
    padding: 0px var(--seven-px);
`;

export const CardButton = styled.button`
    --color: ${({ color }) => (color ? color : "#eee")};
    --bgColor: ${({
        bgColor,
        theme: {
            colors: { blue02 },
        },
    }) => (bgColor ? bgColor : blue02)};
    border: none;
    font-size: 1.3rem;
    font-weight: 100;
    font-family: Arial;
    color: var(--color);
    background-color: var(--bgColor);
    padding: calc(var(--three-px) * 2);
    border-radius: 3px;

    &:hover {
        --color: ${({ hoverColor }) => hoverColor};
    }
`;
