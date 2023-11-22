import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as Icon from "react-bootstrap-icons";
import "react-bootstrap-icons";

const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;

    @media (max-width: 1050px) {
        flex-direction: column;
        /* height: 125px; */
    }
`;

const Navigator = styled.nav`
    width: 40%;
    font-size: 20px;
    color: white;

    @media (max-width: 1050px) {
        width: 100%;
        /* background-color: yellow; */
        display: flex;
        justify-content: flex-end;
    }
`;

const NavigatorUl = styled.ul`
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1050px) {
        /* width: 80%; */
        justify-content: flex-end;
        /* background-color: green; */
    }
`;

const MenuListIcon = styled.li`
    transition: 200ms;
    width: 30px;
    height: 30px;

    &:hover {
        width: 40px;
        height: 40px;
    }
`;

const MobileBlock = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    /* width: 60%; */
    align-items: center;

    @media (max-width: 1050px) {
        width: 90%;
        flex-direction: row-reverse;
        /* background-color: red; */
    }
`;

const Logo = styled.div`
    /* width: 20%; */
    width: 350px;
    height: 100%;
    background-size: contain;
    /* background-image: url(./src/assets/images/header/logo_camisetas_1.png); */
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 1050px) {
        /* position: absolute;
        /* width: 100%; */
        display: flex;
        align-items: center;
        width: 325px;
    }
`;

const Buttons = styled.div`
    width: 40%;
    color: white;

    transition: 200ms ease-in;
    border-bottom-left-radius: 40px;
    min-width: 400px;
    width: 30%;

    @media (max-width: 1050px) {
        opacity: 1;
        /* width: 60%; */
        margin: auto;

        position: absolute;
        top: 80px;
        right: 0;
        z-index: 99;
        background: black;
    }
`;

const ButtonsUl = styled.ul`
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8%;
    padding: 0 20%;

    @media (max-width: 1050px) {
        display: flex;
        justify-content: center;
    }
`;

const SeachDiv = styled.div`
    background-color: white;
    position: relative;
    width: 100%;
    height: 28px;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;
const SearchContainer = styled.div`
    padding: 10px 0;
    width: 28px;
    transition: 200ms;
    &:hover {
        width: 150px;
    }
`;
const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    color: black;
    border-radius: inherit;
    outline: none;
`;

const HeaderComponent = ({ setHeaderHeight }) => {
    const [searchActive, setSearchActive] = useState(false);
    const [logoWidht, setlogoWidht] = useState(350);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showButtons, setShowButtons] = useState(false);

    const inputRef = useRef(null);
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight);
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

            setlogoWidht(logoRef.current.offsetWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const imageLogoURL =
        window.location.hostname === "localhost"
            ? "./src/assets/images/footer/logo_camisetas_2.png"
            : "https://w7.pngwing.com/pngs/172/890/png-transparent-logo-dynamic-sign-shop-t-shirt-screen-printing-t-shirt-company-text-logo.png";

    console.log(imageLogoURL);

    return (
        <Header ref={headerRef}>
            <MobileBlock style={{ width: `calc(100% - ${logoWidht / 2}px)` }}>
                <Navigator>
                    <NavigatorUl>
                        <li style={{ marginRight: "5%" }}>Inicio</li>
                        <li style={{ marginRight: "5%" }}>Contacto</li>
                        {windowWidth <= 1050 && (
                            <MenuListIcon>
                                <Icon.List
                                    size="100%"
                                    onClick={() => {
                                        if (showButtons) {
                                            setShowButtons(false);
                                        } else {
                                            setShowButtons(true);
                                        }
                                        console.log(showButtons);
                                    }}
                                />
                            </MenuListIcon>
                        )}
                    </NavigatorUl>
                </Navigator>
                <Logo
                    ref={logoRef}
                    style={{ backgroundImage: `url(${imageLogoURL})` }}
                />
            </MobileBlock>
            <Buttons ref={buttonsRef} style={{ opacity: showButtons ? 1 : 0 }}>
                <ButtonsUl>
                    <SearchContainer
                        onMouseEnter={() => {
                            setSearchActive(true);
                            // inputRef.current.focus();
                        }}
                        onMouseLeave={() => {
                            setSearchActive(false);
                        }}
                    >
                        <SeachDiv>
                            <Icon.Search
                                style={{
                                    position: "absolute",
                                    left: "5px",
                                }}
                                color="black"
                                size={20}
                            />
                            <SearchInput
                                type="text"
                                ref={inputRef}
                                id="siu"
                                style={
                                    searchActive
                                        ? {
                                              display: "block",
                                              padding: "0 10px 0px 30px",
                                          }
                                        : { display: "none" }
                                }
                                placeholder="buscar..."
                            />
                        </SeachDiv>
                    </SearchContainer>

                    <li>
                        <Icon.PersonCircle size={20} />
                    </li>
                    <li>
                        <Icon.BagHeartFill size={20} />
                    </li>
                    <li>
                        <Icon.Cart size={20} />
                    </li>
                </ButtonsUl>
            </Buttons>
        </Header>
    );
};

export default HeaderComponent;
