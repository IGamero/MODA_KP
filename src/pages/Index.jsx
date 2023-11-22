// import { useLoaderData } from "react-router-dom";
// import styled from "styled-components";
import HeroSectionComponent from "../components/Sections/HeroSectionComponent";
import BestsellingProductsSection from "../components/Sections/BestsellingProductsSection";
import ProductsSection from "../components/Sections/ProductsSection";
import { useState } from "react";

function Index() {
    const imageHeroURL =
        window.location.hostname === "localhost"
            ? "./src/assets/images/hero/hero_1.png"
            : "https://i.pinimg.com/originals/19/94/16/19941697c1341bae32d8052fa6805759.jpg";


    const heroMainText =
        "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>";
    const heroButtonText = "Ver más";
    return (
        <>
            <HeroSectionComponent
                imageHeroURL={imageHeroURL}
                heroMainText={heroMainText}
                heroButtonText={heroButtonText}
            ></HeroSectionComponent>
            <BestsellingProductsSection></BestsellingProductsSection>
            <ProductsSection></ProductsSection>
        </>
    );
}

export default Index;
