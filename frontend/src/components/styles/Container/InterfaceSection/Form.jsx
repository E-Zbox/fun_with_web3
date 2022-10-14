import styled from "styled-components";

export const Form = styled.form`
    height: 100%;
    display: grid;
    place-content: flex-end;
    place-items: flex-start;
    row-gap: var(--ten-px);
    margin: 0px var(--seven-px);
`;

export const TextInput = styled.input`
    border: none;
    opacity: 0.9;
    outline: none;
    background: transparent;
    color: #fff;
    font-size: 1.12rem;
    font-weight: 600;
    font-family: "Calibri Light";
    padding: calc(var(--three-px) * 1.7) calc(var(--ten-px) * 1.1);
    border-bottom: 2px solid #ddde;
    letter-spacing: 1px;

    &:hover {
        opacity: 1;
    }

    &:focus {
        border-radius: var(--three-px);
        border-bottom-color: ${({
            theme: {
                colors: { yellow02 },
            },
        }) => yellow02};
    }
`;
