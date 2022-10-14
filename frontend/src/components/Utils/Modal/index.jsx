import styled, { keyframes } from "styled-components";

/**
 * const animateModal = keyframes`
    0% {
        transform: translate(200%, 0%);
        opacity: 0;
    }
    10% {
        transform: translate(0%, 0%);
        opacity: 0.85;
    }
    15% {
        opacity: 1;
    }
    80% {
        opacity: 0.95;
        transform: translate(0%, 0%);
    }
    100% {
        opacity: 0.05;
        transform: translate(0%, 200vh);
    }
`;
 */

const animateModal = keyframes`
    0% {
        transform: translate(200%, 0%);
        opacity: 0;
    }
    10% {
        transform: translate(0%, 0%);
        opacity: 0.85;
    }
    15% {
        opacity: 1;
    }
    80% {
        opacity: 0.95;
        transform: translate(0%, 0%);
    }
    100% {
        opacity: 0.05;
        transform: translate(-100vw, 0%);
    }
`;

export const Main = styled.main`
    position: fixed;
    top: 100px;
    right: 30px;
    width: 380px;
    height: 80px;
    display: ${({ showCard }) => (showCard ? "grid" : "none")};
    place-items: center;
    background-color: ${({
        theme: {
            colors: { white01 },
        },
    }) => white01};
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0px 8px 10px
        ${({
            theme: {
                colors: { shadow01 },
            },
        }) => shadow01};
    z-index: 2;
    animation: ${animateModal} ${({ duration }) => duration + "s"} ease-in-out
        forwards;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    &::before {
        content: "";
        top: 0px;
        left: 0px;
        width: 7px;
        height: 100%;
        background-color: ${({ messageColor }) => messageColor};
    }
`;

export const LogoContainer = styled.div`
    flex: 0.1;
    display: grid;
    place-content: center;
    height: 100%;
`;

export const Logo = styled.img`
    width: 40px;
    transform: scale(${({ isSuccess }) => isSuccess || 0.85});
`;

export const TextContainer = styled.div`
    flex: 0.65;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-family: monospace;
`;

export const HeaderText = styled.h4`
    font-size: 1.65rem;
    font-weight: bolder;
    line-height: 1.9rem;
    color: #111;
`;

export const SubText = styled.p`
    color: ${({ textColor }) => textColor};
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 0.8rem;
    opacity: 0.7;
`;

export const Button = styled.button`
    --color: ${({ textColor }) => textColor};
    --hoverColor: ${({ messageColor }) => messageColor};
    flex: 0.2;
    height: 100%;
    color: var(--hoverColor);
    background-color: inherit;
    border: 0px;
    text-transform: uppercase;
    border-left: 1px solid var(--color);

    &:hover {
        background-color: var(--hoverColor);
        color: var(--color);
        border-left-color: transparent;
    }
`;
