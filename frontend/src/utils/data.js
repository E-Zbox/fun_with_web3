import navbarLogo from "../public/cover.png";
import homeLogo from "../public/home_background.png";
import uintIcon from "../public/icons8-unit-50.png";
import stringIcon from "../public/flaticon-knot.png";
import bytesIcon from "../public/flaticon-bytes.png";
import arrayIcon from "../public/icons8-icon-64.png";
import structIcon from "../public/icons8-structs-80.png";
import addressIcon from "../public/icons8-address-50.png";
import mappingIcon from "../public/flaticon-mapping.png";
import eventIcon from "../public/flaticon-events.png";
import enumerableIcon from "../public/flaticon-enumerate.png";
import booleanIcon from "../public/icons8-boolean-64.png";
import babiesNFTImage from "../public/babies_NFT.png";
import animatedSpaceCharacterImage from "../public/animated_space_character.png";

export const theme = {
    colors: {
        // red
        red01: "#e74c3c",
        // green
        green01: "#1abc9c",
        // blue
        blue01: "#E7F3FC",
        blue02: "#475EDF",
        blue03: "#007DE8",
        blue04: "#A1C3DB",
        blue05: "#253D52",
        blue06: "#395166",
        blue07: "#0e273f",
        blue071: "#0e273f6d",
        // yellow
        yellow01: "#f8c35c",
        yellow02: "#b87c33",
        // shadow
        shadow01: "#020d0f50",
        shadow02: "#020d0f2F",
        // white
        white01: "#FBF6FF",
    },
    mobile: {},
};

export const pages = {
    navbar: {
        logo: navbarLogo,
        menuItems: [
            { title: "Home", link: "home", selected: true },
            { title: "Login", link: "login", selected: false },
            { title: "Sign-up", link: "sign-up", selected: false },
        ],
    },
    home: {
        logo: homeLogo,
        text: {
            preText: "Mazi Eben",
            mainText: "Fun With Web3",
            subText:
                "A great tool for interactive learning on how the Solidity Built-in commands work. Web3 is Fun",
            // buttonText: "Get started today",
            buttonText: "Connect Wallet",
        },
    },
    firstSection: {
        text: {
            mainText: "Builtins of Solidity",
            subText:
                "Select any of the available options below. Dive into the builtins of Solidity",
        },
        sections: [
            { title: "Uint8", icon: uintIcon, id_href: "uint8_256" },
            { title: "Arrays", icon: arrayIcon, id_href: "arrays" },
            { title: "Strings", icon: stringIcon, id_href: "strings" },
            { title: "Bytes32", icon: bytesIcon, id_href: "bytes32" },
            {
                title: "String Arrays",
                icon: arrayIcon,
                id_href: "string_arrays",
            },
            {
                title: "Enumerables",
                icon: enumerableIcon,
                id_href: "enumerables",
            },
            { title: "Uint256", icon: uintIcon, id_href: "uint8_256" },
            { title: "Address", icon: addressIcon, id_href: "address" },
            { title: "Mapping", icon: mappingIcon, id_href: "mapping" },
            {
                title: "Structures & Events",
                icon: [eventIcon, structIcon],
                id_href: "structures_events",
            },
            { title: "Booleans", icon: booleanIcon, id_href: "booleans" },
            { title: "Int8 & Int256", icon: uintIcon, id_href: "int8_256" },
        ],
        images: {
            babiesNFTImage,
        },
    },
    secondSection: {
        images: {
            animatedSpaceCharacterImage,
        },
    },
    interfaceSection: {
        images: {
            uintIcon,
            arrayIcon,
            stringIcon,
            bytesIcon,
            arrayIcon,
            enumerableIcon,
            uintIcon,
            addressIcon,
            mappingIcon,
            eventIcon,
            structIcon,
            booleanIcon,
            uintIcon,
        },
    },
};
