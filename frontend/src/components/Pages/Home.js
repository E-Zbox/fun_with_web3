import React, { useContext } from "react";
// context
import { AppContext } from "../../contexts";
// styles
import {
    HomePreText,
    HomeSubText,
    HomeMainText,
    HomeTextContainer,
    MainHomeContainer,
    ImageContainer,
    Image,
    YellowText,
} from "../styles/Container/Home";
import { Button } from "../styles/Container/Others/Button";

const Home = () => {
    const {
        pages: {
            home: {
                logo,
                text: { preText, mainText, subText, buttonText },
            },
        },
        functions: { connectWallet },
    } = useContext(AppContext);

    return (
        <MainHomeContainer>
            <HomeTextContainer>
                <HomePreText>{preText}</HomePreText>
                <HomeMainText>
                    {mainText.substring(0, mainText.length - 4)}
                    <YellowText>
                        {mainText.substring(mainText.length - 4)}
                    </YellowText>
                </HomeMainText>
                <HomeSubText>{subText}</HomeSubText>
                <Button onClick={connectWallet}>{buttonText}</Button>
            </HomeTextContainer>
            <ImageContainer>
                <Image src={logo} alt="logo" />
            </ImageContainer>
        </MainHomeContainer>
    );
};

export default Home;
