import styled from "styled-components";

export const MainAppContainer = styled.main`
    width: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: flex-start;
    // align-items: center;
    display: grid;
    place-items: center;
    place-content: flex-start;
    // border: 1px solid black;
`;

export const DivContainer = styled.div`
    width: var(--divContainerWidth);
    display: flex;
    flex-direction: column;
    padding: calc(var(--ten-px) * 2) 0px;
    // border: 1px solid red;
`;
