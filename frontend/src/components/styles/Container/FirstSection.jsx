import styled, { keyframes } from "styled-components";
import firstSectionBg from "../../../public/firstsection_bg.svg";

const alternateBgImg = (firstBg, secondBg) => keyframes`
    from {
        background: url(${firstBg});
    }
    to {
        background: url(${secondBg});
    }
`;

export const MainSectionContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: relative;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        opacity: 0.25;
        z-index: -1;
        background: url(${firstSectionBg});
        background-attachment: fixed;
    }
`;

export const SectionContents = styled.div`
    width: var(--divContainerWidth);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const SectionTextContainer = styled.div`
    display: grid;
    place-content: center;
    place-items: center;
    width: 300px;
    color: ${({
        theme: {
            colors: { blue02 },
        },
    }) => blue02};
    font-family: Calibri;
    height: fit-content;
`;

export const MainText = styled.h4`
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
`;

export const SubText = styled.p`
    font-weight: 200;
    text-align: center;
`;

export const Contents = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const FlexContentsContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // border: 1px solid red;
`;

export const Card = styled.div`
    --color: ${({
        theme: {
            colors: { blue04 },
        },
    }) => blue04};
    --translateX: 10%;

    position: relative;
    color: var(--color);
    background-color: #fff;
    border: 2px solid var(--color);
    border-radius: 3px;
    cursor: pointer;
    margin: calc(var(--ten-px) * 1.4);
    padding: calc(var(--seven-px) * 2.5) calc(var(--ten-px) * 3);

    &:hover {
        color: #fff;
        background-color: var(--color);
        transform: translateX(var(--translateX));

        &::before {
            opacity: 0.25;
        }
    }

    &:nth-child(2n) {
        &:hover {
            transform: translateX(calc(var(--translateX) * -1));
        }
    }

    &::before {
        content: "";
        position: absolute;
        bottom: 0px;
        right: 0px;
        height: 100%;
        width: 40px;
        opacity: 0.15;
        z-index: 0;
        transform: translateX(-5%);
        background: url(${({ icon }) => icon});
        background-position: center;
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 100%;
        width: 40px;
        opacity: 0.15;
        z-index: 0;
        transform: translateX(5%);
        background: url(${({ icon2 }) => icon2});
        background-position: center;
        background-size: 100% auto;
        background-repeat: no-repeat;
    }
`;

export const CardH4 = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Calibri Light";
    letter-spacing: 1.15px;
    z-index: 1;
    transform: translateX(-10%);
`;

export const FloatingImage = styled.img`
    position: absolute;
    top: 5%;
    right: 0px;
    transform: translate(25%, -10%);
`;
