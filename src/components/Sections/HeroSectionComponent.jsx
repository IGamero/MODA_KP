import React from "react";

import styled from "styled-components";

const Section = styled.section``;

const HeroSection = styled.div`
    height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
`;

const HeroCard = styled.div`
    width: 50%;
    padding: 2% 0 0 5%;
`;

const HeroCardText = styled.div`
    color: black;
    font-size: 30px;
    -webkit-text-stroke: 1px white;
    font-weight: bold;
    padding-bottom: 5%;
`;

const HeroCardButtons = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const HeroCardButton = styled.button`
    background-color: #555353;
    color: white;
    font-size: 30px;
    padding: 5px 20px;
    border-radius: 20px;
`;

const HeroSectionComponent = ({
    imageHeroURL,
    heroMainText,
    heroButtonText,
}) => {
    return (
        <Section id="hero-section">
            <HeroSection
                style={{
                    backgroundImage: `url(${imageHeroURL})`,
                }}
            >
                <HeroCard>
                    <HeroCardText
                        dangerouslySetInnerHTML={{ __html: heroMainText }}
                    />
                    <HeroCardButtons>
                        <HeroCardButton>{heroButtonText}</HeroCardButton>
                    </HeroCardButtons>
                </HeroCard>
            </HeroSection>
        </Section>
    );
};

export default HeroSectionComponent;
