import React from "react";
import styled from "styled-components";

const Slide = styled.div`
    /* background-color: green; */
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SlideCard = styled.div`
    width: 350px;
    height: 450px;
    /* background-color: red; */
`;

const border = "40px";
const imageSize = 80;
const SlideImage = styled.div`
    width: 100%;
    height: ${imageSize}%;
    /* background: url(${(props) => props.imageurl}); */
    background-size: cover;
    background-position-x: center;
    border: 3px solid black;
    border-top-left-radius: ${border};
    border-top-right-radius: ${border};
    border-bottom: none;
`;
const SlideInfo = styled.div`
    width: 100%;
    height: calc(100% - ${imageSize}%);
    padding: 5px 20px;
    border: 3px solid black;
    border-top: none;
    border-bottom-left-radius: ${border};
    border-bottom-right-radius: ${border};
`;

const ProductName = styled.div`
    font-size: 25px;
    font-weight: bold;
`;
const PriceContainer = styled.div`
    margin-top: 5px;
`;
const PriceText = styled.span`
    color: #555353;
    padding-right: 5%;
    font-size: 25px;
    text-decoration: line-through;
    font-weight: 600;
`;
const DiscPriceText = styled.span`
    font-size: 25px;
    font-weight: bold;
`;

const SwiperItemComponent = ({ imageurl, productName, price, discPrice }) => {
    return (
        <Slide>
            <SlideCard>
                <SlideImage
                    style={{ backgroundImage: `url(${imageurl})` }}
                ></SlideImage>
                <SlideInfo>
                    <ProductName>{productName}</ProductName>
                    <PriceContainer>
                        <PriceText>{price}</PriceText>
                        <DiscPriceText>{discPrice}</DiscPriceText>
                    </PriceContainer>
                </SlideInfo>
            </SlideCard>
        </Slide>
    );
};

export default SwiperItemComponent;
