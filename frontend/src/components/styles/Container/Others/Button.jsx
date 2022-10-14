import styled, { keyframes } from "styled-components";

const smallToLargeScaleAnimate = keyframes`
    0% {
        transform: scale(0.9) translateY(10%);
        box-shadow: 1px 1px 7px #5554;
    }
    70% {
        transform: scale(1.15) translateY(10%);
        box-shadow: 1px 1px 7px #5554;
    }
    100% {
        transform: scale(1.0) translateY(10%);
        box-shadow: 1px 1px 7px #5558;
    }
`;
export const Button = styled.button`
    --color: ${({
        color,
        theme: {
            colors: { blue02 },
        },
    }) => color || blue02};
    --bgColor: ${({ bgColor }) => bgColor || "#fff"};

    position: relative;
    color: var(--color);
    background-color: var(--bgColor);
    margin: var(--seven-px) 0;
    padding: calc(var(--seven-px) * 2.5) calc(var(--ten-px) * 3.5);
    font-size: 1.05rem;
    font-weight: 600;
    font-family: "Calibri Light";
    border-radius: 30px;
    border: 2px solid transparent;
    box-shadow: 1px 1px 7px #5554;
    transition: ease-in-out 450ms;
    transform: scale(0.9) translateY(10%);

    &:active {
        opacity: 0.66;
    }

    &:hover {
        border-color: ${({
            color,
            theme: {
                colors: { blue02 },
            },
        }) => color || blue02};
        color: var(--bgColor);
        background-color: var(--color);
        animation: ${smallToLargeScaleAnimate} 650ms ease-in-out forwards;
    }
`;
