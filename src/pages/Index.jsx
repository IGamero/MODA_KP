// import { useLoaderData } from "react-router-dom";
// import styled from "styled-components";
import HeroSectionComponent from "../components/sections/HeroSectionComponent";
import BestsellingProductsSection from "../components/Sections/BestsellingProductsSection";
import ProductsSection from "../components/Sections/ProductsSection";

function Index() {
    const imageHeroURL = "./src/assets/images/hero/hero_1.png";
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
