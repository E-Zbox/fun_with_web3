import styled from "styled-components";

export const Button = styled.button`
    border: none;
    color: #fff;
    background-color: ${({
        isText,
        theme: {
            colors: { blue05, yellow02 },
        },
    }) => (isText ? blue05 : yellow02)};
    font-size: ${({ isText }) => (isText ? "1.15rem" : "1.05rem")};
    font-family: "Calibri Light";
    font-weight: ${({ isText }) => isText && "600"};
    letter-spacing: ${({ isText }) => isText && "1.2px"};
    border-radius: 3px;
    transition: 0.35ms ease-in-out;
    opacity: 0.9;
    padding: var(--seven-px) calc(var(--seven-px) * 1.4);

    &:disabled {
        opacity: 0.6;

        &:hover {
            opacity: 0.6;
        }
    }

    &:hover {
        opacity: 1;
    }
`;

export const BackButton = styled.button`
    --color: ${({
        theme: {
            colors: { red01 },
        },
    }) => red01};
    border: none;
    border-radius: 30px;
    color: var(--color);
    background-color: transparent;
    font-size: 0.95rem;
    font-family: "Calibri Light";
    font-weight: 600;
    letter-spacing: 1.2px;
    padding: calc(var(--seven-px) * 1.4) calc(var(--seven-px) * 3);
    border-bottom: 2px solid;
    border-top: 2px solid;
    border-right: 2px solid;

    &:hover {
        color: #fff;
        background-color: var(--color);
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
    }

    &:disabled {
        opacity: 0.6;

        &:hover {
            opacity: 0.6;
            color: var(--color);
            background-color: transparent;
            border-bottom: 2px solid;
            border-top: 2px solid;
            border-right: 2px solid;
        }
    }
`;
