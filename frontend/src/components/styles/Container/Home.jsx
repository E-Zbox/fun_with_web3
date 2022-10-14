import styled from "styled-components";

export const MainHomeContainer = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    // border: 1px solid green;
`;

export const HomeTextContainer = styled.div`
    flex: 0.7;
    display: grid;
    place-items: flex-start;
    place-content: center;
    row-gap: var(--seven-px);
    height: 60%;
    font-family: "Calibri Light";
    color: ${({
        theme: {
            colors: { blue02 },
        },
    }) => blue02};
    transform: translateY(-20%);
    // border: 1px solid blue;
`;

export const HomePreText = styled.h5`
    font-size: 1.6rem;
    font-weight: 900;
`;

export const HomeMainText = styled.h4`
    width: 100%;
    font-size: 2.87rem;
    font-family: Calibri;
    line-height: 1.5rem;
    margin-bottom: var(--ten-px);
`;

export const HomeSubText = styled.p`
    // width: 400px;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.5px;
`;

export const YellowText = styled.span`
    color: ${({
        theme: {
            colors: { yellow01 },
        },
    }) => yellow01};
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-self: flex-end;
    // border: 1px solid blue;
    flex: 1;
`;

export const Image = styled.img`
    // border: 1px solid red;
    width: 160%;
    box-shadow: 2px 0px 7px
        ${({
            theme: {
                colors: { shadow01 },
            },
        }) => shadow01};
`;
