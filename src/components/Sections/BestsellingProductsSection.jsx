import styled from "styled-components";
import { useLayoutEffect, useRef, useState } from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperItemComponent from "./SwiperComponents/SwiperItemComponent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import * as Icon from "react-bootstrap-icons";
import "react-bootstrap-icons";

const Section = styled.section``;

const SectionTitle = styled.div`
    padding: 5px 5% 2px 5%;
    background-color: #e67004;
    margin: auto;
    font-size: 20px;
    font-weight: bold;
    color: white;
`;

const CustomSwiperContainer = styled.div`
    position: relative;
    padding: 40px 8%;
`;

const CustomNextButton = styled.div`
    position: absolute;
    top: 50%;
    right: 6%;
    /* z-index: 9999; */
    transform: translateY(-50%);
`;

const CustomPrevButton = styled.div`
    position: absolute;
    top: 50%;
    left: 2%;
    /* z-index: 9999; */
    transform: translateY(-50%);
`;

const BestsellingProductsSection = () => {
    const swiperRef = useRef(null);
    const [iconSize, setIconSize] = useState(40);

    useLayoutEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            const newSize = screenWidth < 768 ? 30 : 40;

            setIconSize(newSize);
        };

        handleResize();
        // window.addEventListener("resize", handleResize);

        // return () => {
        //     window.removeEventListener("resize", handleResize);
        // };
    }, []);

    const handlePrevClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const slidesArray = [
        {
            imageurl: "./src/assets/images/products/tshirt/camiseta_demo.png",
            productName: "Camiseta waparda",
            price: "14,99€",
            discPrice: "9,99€",
        },
        {
            imageurl:
                "https://tiendasonlineenecuador.enginy.com.ec/demo/wp-content/uploads/2020/08/camiseta-1-verde.png",
            productName: "Camiseta waparda",
            price: "14,99€",
            discPrice: "9,99€",
        },
        {
            imageurl:
                "https://www.teez.in/cdn/shop/products/Wordpress-T-Shirt-6_add2149d-787a-479d-9e9c-83fb86c2b62d_1024x1024.jpg?v=1571504383",
            productName: "Camiseta waparda",
            price: "14,99€",
            discPrice: "9,99€",
        },
        {
            imageurl:
                "https://www.demo.360sger.com/wp-content/uploads/2021/05/T_2_front-14.jpg",
            productName: "Camiseta waparda",
            price: "14,99€",
            discPrice: "9,99€",
        },
    ];

    return (
        <Section>
            <SectionTitle>Productos más vendidos</SectionTitle>

            <CustomSwiperContainer>
                <Swiper
                    ref={swiperRef}
                    className="customSwiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    watchSlidesProgress
                    spaceBetween={50}
                    slidesPerView={3}
                    // navigation
                    loop
                    onSwiper={(swiper) => console.log()}
                    onSlideChange={() => console.log()}
                >
                    {slidesArray.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <SwiperItemComponent
                                imageurl={slide.imageurl}
                                productName={slide.productName}
                                price={slide.price}
                                discPrice={slide.discPrice}
                            ></SwiperItemComponent>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Agrega flechas personalizadas fuera del Swiper para evitar el padding */}
                <CustomNextButton
                    onClick={() => {
                        console.log("Next");
                        handleNextClick();
                    }}
                >
                    <Icon.ArrowRightCircle
                        style={{
                            position: "absolute",
                            left: "5px",
                        }}
                        color="black"
                        size={iconSize}
                    />
                </CustomNextButton>
                <CustomPrevButton
                    onClick={() => {
                        console.log("Prev");
                        handlePrevClick();
                    }}
                >
                    <Icon.ArrowLeftCircle
                        style={{
                            position: "absolute",
                            left: "5px",
                        }}
                        color="black"
                        size={iconSize}
                    />
                </CustomPrevButton>
            </CustomSwiperContainer>
        </Section>
    );
};

export default BestsellingProductsSection;
