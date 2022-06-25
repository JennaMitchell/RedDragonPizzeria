import {
  TopContainer,
  CocktailsRowOneContainer,
  CocktailsRowTwoContainer,
  BeerLineArtContainer,
  CocktailLineArtContainer,
  ThreeRowColumn,
  SectionTitle,
} from "./drinks-section-styled-components";
import {
  TwoColumnContainer,
  SectionTitleContainer,
  UnderlineContainer,
  SectionBreaker,
  FourColumnContainer,
} from "../general-styled-components/general-styled-components";

import horizontalUnderLine from "../../../../img/line-art/underlines/chalk_underline_horizontal.png";
import verticalUnderLine from "../../../../img/line-art/underlines/chalk_underline_vertical.png";
import beerLineArt from "../../../../img/line-art/drinks/beer-lineart-2.png";
import cocktailLineArt from "../../../../img/line-art/drinks/lemonade-lineart-1.png";
import shotGlassLineArt from "../../../../img/line-art/drinks/shot-glass-lineart-1.png";
import {
  renderReadyBeerData,
  renderReadyCocktailsDataRowOne,
  renderReadyCocktailsDataRowTwo,
  renderReadyShotsData,
  renderReadyCiderData,
} from "./drinks-menu-database";

const DrinksSection = () => {
  return (
    <TopContainer>
      {/* Heading */}

      <SectionTitleContainer>
        <BeerLineArtContainer src={beerLineArt} />
        <SectionTitle>Beer n' Mead</SectionTitle>
        <UnderlineContainer src={horizontalUnderLine} />
      </SectionTitleContainer>
      <FourColumnContainer>{renderReadyBeerData}</FourColumnContainer>
      <SectionTitleContainer>
        <SectionTitle>Cocktails</SectionTitle>
        <UnderlineContainer src={horizontalUnderLine} />
        <CocktailLineArtContainer src={cocktailLineArt} />
      </SectionTitleContainer>
      <CocktailsRowOneContainer>
        {renderReadyCocktailsDataRowOne}
      </CocktailsRowOneContainer>
      <CocktailsRowTwoContainer>
        {renderReadyCocktailsDataRowTwo}
      </CocktailsRowTwoContainer>
      <SectionTitleContainer>
        <BeerLineArtContainer src={shotGlassLineArt} />
        <SectionTitle>Shots n' Cider</SectionTitle>
        <UnderlineContainer src={horizontalUnderLine} />
      </SectionTitleContainer>
      <TwoColumnContainer>
        <ThreeRowColumn>{renderReadyShotsData}</ThreeRowColumn>
        <SectionBreaker src={verticalUnderLine} />

        <ThreeRowColumn>{renderReadyCiderData}</ThreeRowColumn>
      </TwoColumnContainer>
    </TopContainer>
  );
};

export default DrinksSection;
