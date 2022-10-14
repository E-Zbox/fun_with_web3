import styled from "styled-components";

export const MainNavbarContainer = styled.main`
    position: sticky;
    top: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0px 2px 7px
        ${({
            theme: {
                colors: { shadow01 },
            },
        }) => shadow01};
    z-index: 2;
    // border: 1px solid red;
`;

export const NavbarContents = styled.div`
    width: var(--divContainerWidth);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavHeader = styled.div`
    width: 300px;
    height: 80px;
    overflow: hidden;
    // border: 1px solid green;
`;

export const NavHeaderImg = styled.img`
    height: 100%;
    transform: scale(1.4);
`;

export const MenuContainer = styled.div`
    width: 100%;
    display: grid;
    place-items: center flex-end;
    place-contents: flex-start center;
`;

export const Menu = styled.ul`
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const MenuList = styled.li`
    font-size: 1.05rem;
    font-weight: 600;
    font-family: "Calibri Light";
    list-style: none;
    color: ${({
        selected,
        theme: {
            colors: { blue03, blue06 },
        },
    }) => (selected ? blue03 : blue06)};
    cursor: pointer;
    padding: calc(var(--seven-px) * 2.6);

    &:hover {
        background-color: ${({
            selected,
            theme: {
                colors: { blue01 },
            },
        }) => selected || blue01};
    }
`;
