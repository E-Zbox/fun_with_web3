import React, { useContext } from "react";
// context
import { AppContext } from "../../contexts";
// styles
import {
    MainNavbarContainer,
    Menu,
    MenuContainer,
    MenuList,
    NavbarContents,
    NavHeader,
    NavHeaderImg,
} from "../styles/Container/Navbar";
import { FlexDivContainer } from "../styles/Container/Others/Container";

const Navbar = () => {
    const {
        pages: { navbar: _navbar },
        refs: { navbarRef },
    } = useContext(AppContext);
    return (
        <MainNavbarContainer ref={navbarRef}>
            <NavbarContents>
                <FlexDivContainer>
                    <NavHeader>
                        <NavHeaderImg src={_navbar.logo} alt="navbar-logo" />
                    </NavHeader>
                    <MenuContainer>
                        <Menu>
                            {_navbar.menuItems.map(
                                ({ title, link, selected }, index) => (
                                    <MenuList key={index} selected={selected}>
                                        {title}
                                    </MenuList>
                                )
                            )}
                        </Menu>
                    </MenuContainer>
                </FlexDivContainer>
            </NavbarContents>
        </MainNavbarContainer>
    );
};

export default Navbar;
