import styled from "styled-components";

export const ContentsContainer = styled.div`
    width: 100%;
    max-height: 100%;
    height: fit-content;
    color: white;
    font-family: Calibri;
`;

export const GridContainer = styled.div`
    padding: calc(var(--ten-px) * 1.5);
    display: grid;
    row-gap: calc(var(--ten-px));
`;

export const Scroller = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    // padding: var(--seven-px);
    overflow-x: hidden;
    // border: 1px solid red;
`;

export const ScrollContainer = styled.div`
    width: 100%;
    overflow-x: auto;
    scroll-behaviour: smooth;
    // border: 1px solid green;
`;

export const ScrollFlexContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    width: fit-content;
    padding: 0px 1px;
`;

export const Box = styled.div`
    --radius: 2px;
    padding: var(--seven-px);
    min-width: 250px;
    border: 1px solid
        ${({
            theme: {
                colors: { blue04 },
            },
        }) => blue04};
    border-left-width: 0px;

    &:first-child {
        border-left-width: 1px;
        border-top-left-radius: var(--radius);
    }

    &:last-child {
        border-bottom-right-radius: var(--radius);
    }
`;
