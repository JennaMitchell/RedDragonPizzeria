import {
  TopContainer,
  CocktailsRowOneContainer,
  CocktailsRowTwoContainer,
  BeerLineArtContainer,
  CocktailLineArtContainer,
  ThreeRowColumn,
} from "./drinks-section-styled-components";
import {
  TwoColumnContainer,
  SectionTitleContainer,
  UnderlineContainer,
  SectionBreaker,
  FourColumnContainer,
  StyledTypography,
} from "../general-styled-components/general-styled-components";

import horizontalUnderLine from "../../../../img/chalk_underline_horizontal.png";
import verticalUnderLine from "../../../../img/chalk_underline_vertical.png";
import beerLineArt from "../../../../img/beer-lineart-2.png";
import cocktailLineArt from "../../../../img/lemonade-lineart-1.png";
import shotGlassLineArt from "../../../../img/shot-glass-lineart-1.png";
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
        <StyledTypography variant={"h2"}>Beer n' Mead</StyledTypography>
        <UnderlineContainer src={horizontalUnderLine} />
      </SectionTitleContainer>
      <FourColumnContainer>{renderReadyBeerData}</FourColumnContainer>
      <SectionTitleContainer>
        <StyledTypography variant={"h2"}>Cocktails</StyledTypography>
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
        <StyledTypography variant={"h2"}>Shots n' Cider</StyledTypography>
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
