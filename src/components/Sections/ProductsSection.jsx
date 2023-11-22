import React from "react";
import styled from "styled-components";

const Section = styled.section``;

const SectionTitle = styled.section`
    padding: 5px 5% 2px 5%;
    background-color: #e67004;
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    color: white;
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const ProductContainer = styled.div`
    width: 100%;
    max-width: 550px;
    height: 150px;
    box-sizing: border-box;
    border-radius: 20px;
    margin: 0 40px;

    background-color: #e67004;
    /* background-image: url(${(props) => props.imageurl}); */
    /* background-position-y: ${(props) => props.bg_y_position}; */
    background-position-x: center;

    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 48px;
    -webkit-text-stroke: 2px white;
    font-weight: bolder;

    @media (max-width: 768px) {
        margin-top: 40px;
    }
`;

const ProductsSection = () => {
    return (
        <Section id="products-section">
            <SectionTitle> &nbsp;</SectionTitle>
            <SectionContainer>
                <ProductContainer
                    style={{
                        backgroundImage: `url(./src/assets/images/common/tshirt-banner.png)`,
                        backgroundPositionY: "10%",
                        marginTop: 0,
                    }}
                >
                    Camisetas
                </ProductContainer>
                <ProductContainer
                    style={{
                        backgroundImage: `url(./src/assets/images/common/hoodie-banner.png)`,
                        backgroundPositionY: "47%",
                    }}
                >
                    Sudaderas
                </ProductContainer>
            </SectionContainer>
        </Section>
    );
};

export default ProductsSection;
