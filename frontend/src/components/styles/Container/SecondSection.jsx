import styled from "styled-components";
// assets
import bgImage from "../../../public/secondsection_bg.svg";

export const MainSection = styled.main`
    display: ${({ showCard }) => showCard === "default" && "none"};
    width: 100%;
    height: ${({ showCard }) => {
        switch (showCard) {
            case "in_dev":
                return "200px";
            case "ready":
                return "100vh";
            default:
                return "0px";
        }
    }};
    transition: ease-in-out 750ms;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
    // background-color: #fff4;

    &::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
                to bottom right,
                ${({
                    theme: {
                        colors: { shadow02 },
                    },
                }) => shadow02},
                ${({
                    theme: {
                        colors: { shadow02 },
                    },
                }) => shadow02}
            ),
            url(${bgImage});
        background-size: 100% auto;
        background-repeat: repeat;
        background-position: top center;
        background-attachment: fixed;
        opacity: 0.995;
    }
`;

export const MainSectionContainer = styled.div`
    width: var(--divContainerWidth);
    height: 80%;
    z-index: 1;
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 7px
        ${({
            theme: {
                colors: { shadow01 },
            },
        }) => shadow01};

    &:hover {
        box-shadow: 1px 1px 7px
            ${({
                theme: {
                    colors: { shadow01 },
                },
            }) => shadow01};
    }
`;
