import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        scroll-behaviour: smooth;
        transition: all 450ms ease-in-out;

        // padding
        --three-px: 3px;    --seven-px: 7px;     --ten-px: 10px;
        // dimensions
        --divContainerWidth: 90%;
        // scrollbar
        --scrollbar-Width: 14px;

        &::-webkit-scrollbar {
            width: var(--scrollbar-Width);
        }

        &::-webkit-scrollbar-track {
            position: relative;
            width: 12px;
            justify-content: center;
            background-color: transparent;
            border: 1px solid ${({
                theme: {
                    colors: { blue071 },
                },
            }) => blue071};
        }

        &::-webkit-scrollbar-thumb {
            width: 30px;
            position: absolute;
            top: 0px;
            left: 0px;
            transform: translateX(-50%);
            background-color: ${({
                theme: {
                    colors: { blue02 },
                },
            }) => blue02};
        }
    }
    main#root {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;

        a {
            text-decoration: none;
        }

        div.area {
            width: 100%;
            height: 120vh;
            border: 1px solid green;
        }

        em {
            font-weight: 700;
            color: ${({
                theme: {
                    colors: { blue03 },
                },
            }) => blue03};
        }
    }
`;
