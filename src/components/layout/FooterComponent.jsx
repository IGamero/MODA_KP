import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";
import "react-bootstrap-icons";

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
`;
const FooterMain = styled.div`
    position: relative;
    width: 100%;
    background-color: #e67004;
    background-image: url(./src/assets/images/footer/logo_camisetas_2.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 40px 0px;
    display: flex;
    justify-content: center;
    padding-bottom: 75px;
`;
const BlockContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90%;
`;
const FooterCard = styled.div`
    background-color: white;
    width: 100%;
    margin: 0 10px;
    border-radius: 20px;
    padding: 15px;
`;

const FooterCardTitle = styled.div`
    padding-bottom: 2px;
    border-bottom: 1px solid;
    font-weight: bold;
`;

const FooterCardBody = styled.div``;

const CardList = styled.ul`
    padding-top: 10px;
`;

const CardListIco = styled.ul`
    padding-top: 10px;
    display: flex;
    justify-content: space-evenly;
`;

const CardListElem = styled.li`
    padding-bottom: 5px;
`;

const FooterBanner = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    gap: 5%;
    padding: 5px;
    font-size: 10px;
`;

const FooterBannerElem = styled.div`
    font-weight: bold;
`;

const PromoImageContainer = styled.div`
    width: 150px;
    height: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
    /* transform: translateX(0); */
    transition: right ease-in-out;
`;
const PromoImage = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(./src/assets/images/footer/ovni_image.png);
`;

const FooterComponent = ({ setFooterHeight }) => {
    const footerRef = useRef(null);
    const promoImageRef = useRef(null);

    const animationTimer = 8000;

    useEffect(() => {
        setFooterHeight(footerRef.current.offsetHeight);
    });

    useEffect(() => {
        if (promoImageRef.current) {
            setTimeout(() => {
                promoImageRef.current.classList.add("promoImageAnimation");
            }, animationTimer);
        }
    });

    useEffect(() => {
        // console.log("move");
        if (promoImageRef.current) {
            // Usamos setTimeout para retrasar el inicio de la animación
            setInterval(() => {
                promoImageRef.current.classList.remove("promoImageAnimation");
                setTimeout(() => {
                    promoImageRef.current.classList.add("promoImageAnimation");
                }, animationTimer);
            }, animationTimer * 2);
        }
    }, []);

    const year = new Date().getFullYear();
    return (
        <Footer ref={footerRef}>
            <FooterMain>
                <BlockContainer>
                    <PromoImageContainer
                        ref={promoImageRef}
                        style={{ transitionDuration: `${animationTimer}ms` }}
                    >
                        <PromoImage></PromoImage>
                    </PromoImageContainer>
                    <FooterCard>
                        <FooterCardTitle>Sobre nosotros</FooterCardTitle>
                        <FooterCardBody>
                            <CardList>
                                <CardListElem>¿Qué es KoLocker?</CardListElem>
                                <CardListElem>¿Quiénes somos?</CardListElem>
                            </CardList>
                        </FooterCardBody>
                    </FooterCard>
                    <FooterCard>
                        <FooterCardTitle>Nuestras redes</FooterCardTitle>
                        <FooterCardBody>
                            <CardListIco>
                                <CardListElem>
                                    <Icon.Instagram size={30} />
                                </CardListElem>
                                <CardListElem>
                                    <Icon.Twitter size={30} />
                                </CardListElem>
                            </CardListIco>
                        </FooterCardBody>
                    </FooterCard>
                    <FooterCard>
                        <FooterCardTitle>Aceptamos...</FooterCardTitle>
                        <FooterCardBody>
                            <CardListIco>
                                <CardListElem>
                                    <Icon.Paypal size={30} />
                                </CardListElem>
                                <CardListElem>
                                    <Icon.CreditCard size={30} />
                                </CardListElem>
                            </CardListIco>
                        </FooterCardBody>
                    </FooterCard>
                    <FooterCard>
                        <FooterCardTitle>Trabaja con nosotros</FooterCardTitle>
                        <FooterCardBody>
                            <CardList>
                                <CardListElem>Condiciones</CardListElem>
                                <CardListElem>
                                    Contacta con nosotros
                                </CardListElem>
                            </CardList>
                        </FooterCardBody>
                    </FooterCard>
                </BlockContainer>
            </FooterMain>
            <FooterBanner>
                <FooterBannerElem>KoLocker©{year}</FooterBannerElem>
                <FooterBannerElem>Aviso legal</FooterBannerElem>
                <FooterBannerElem>Términos y condiciones</FooterBannerElem>
                <FooterBannerElem>Condiciones de venta</FooterBannerElem>
            </FooterBanner>
        </Footer>
    );
};

export default FooterComponent;
