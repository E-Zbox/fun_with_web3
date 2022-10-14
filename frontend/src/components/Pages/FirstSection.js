import React, { useContext } from "react";
// context
import { AppContext } from "../../contexts";
// styles
import {
    Card,
    CardH4,
    Contents,
    FlexContentsContainer,
    FloatingImage,
    MainSectionContainer,
    MainText,
    SectionContents,
    SectionTextContainer,
    SubText,
} from "../styles/Container/FirstSection";

const FirstSection = () => {
    const {
        pages: {
            firstSection: {
                text: { mainText, subText },
                sections,
                images: { babiesNFTImage },
            },
        },
        functions: { handleInterfaceId },
    } = useContext(AppContext);

    return (
        <MainSectionContainer>
            <FloatingImage src={babiesNFTImage} alt="babies-nft-image" />
            <SectionContents>
                <SectionTextContainer>
                    <MainText>{mainText}</MainText>
                    <SubText>{subText}</SubText>
                </SectionTextContainer>
                <Contents>
                    <FlexContentsContainer>
                        {sections.map(({ title, icon, id_href }, index) => (
                            <a href="#interface-section" key={index}>
                                <Card
                                    icon={
                                        typeof icon !== "object"
                                            ? icon
                                            : icon[0]
                                    }
                                    icon2={typeof icon == "object" && icon[1]}
                                    onClick={() => handleInterfaceId(id_href)}
                                >
                                    <CardH4>{title}</CardH4>
                                </Card>
                            </a>
                        ))}
                    </FlexContentsContainer>
                </Contents>
            </SectionContents>
        </MainSectionContainer>
    );
};

export default FirstSection;
