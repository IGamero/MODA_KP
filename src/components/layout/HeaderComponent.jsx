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
`;

const Navigator = styled.nav`
    width: 40%;
    font-size: 20px;
    color: white;
`;

const NavigatorUl = styled.ul`
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Logo = styled.div`
    width: 20%;
    height: 100%;
    background-size: contain;
    background-image: url(./src/assets/images/header/logo_camisetas_1.png);
    background-repeat: no-repeat;
    background-position: center;
`;

const Buttons = styled.div`
    width: 40%;
    color: white;
`;

const ButtonsUl = styled.ul`
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8%;
    padding: 0 20%;
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
    const inputRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        setHeaderHeight(headerRef.current.offsetHeight);
    });

    return (
        <Header ref={headerRef}>
            <Navigator>
                <NavigatorUl>
                    <li>Inicio</li>
                    <li>Contacto</li>
                </NavigatorUl>
            </Navigator>
            <Logo />
            <Buttons>
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
