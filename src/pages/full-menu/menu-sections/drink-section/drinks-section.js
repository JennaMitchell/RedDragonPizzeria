import {
  TopContainer,
  BeerLineArtContainer,
  CocktailLineArtContainer,
  SectionTitle,
} from "./drinks-section-styled-components";
import {
  SectionTitleContainer,
  UnderlineContainer,
} from "../general-styled-components/general-styled-components";

import horizontalUnderLine from "../../../../img/line-art/underlines/chalk_underline_horizontal.png";

import beerLineArt from "../../../../img/line-art/drinks/beer-lineart-2.png";
import cocktailLineArt from "../../../../img/line-art/drinks/lemonade-lineart-1.png";
import shotGlassLineArt from "../../../../img/line-art/drinks/shot-glass-lineart-1.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  renderReadyBeerData,
  renderReadyCocktailsData,
  renderReadyShotsData,
  renderReadyCiderData,
} from "./drinks-menu-database";
import fullMenuColumnsSorter from "../../../../components/custom-hooks/full-menu-column-sorter";

const DrinksSection = () => {
  const threeColumnLimitActive = useMediaQuery("(max-width:1200px)");
  const twoColumnLimitActive = useMediaQuery("(max-width:1000px)");
  const oneColumnLimitActive = useMediaQuery("(max-width:540px)");
  let mediaQueriesInactive = true;
  let maxNumberOfColumns = 0;
  if (threeColumnLimitActive) {
    mediaQueriesInactive = false;
    maxNumberOfColumns = 3;
  }
  if (twoColumnLimitActive) {
    mediaQueriesInactive = false;
    maxNumberOfColumns = 2;
  }
  if (oneColumnLimitActive) {
    mediaQueriesInactive = false;
    maxNumberOfColumns = 1;
  }
  return (
    <TopContainer>
      {/* Heading */}
      <SectionTitleContainer>
        <BeerLineArtContainer src={beerLineArt} />
        <SectionTitle>Beer n' Mead</SectionTitle>
        <UnderlineContainer src={horizontalUnderLine} />
      </SectionTitleContainer>
      {mediaQueriesInactive && fullMenuColumnsSorter(renderReadyBeerData, 4)}
      {maxNumberOfColumns === 3 &&
        fullMenuColumnsSorter(renderReadyBeerData, 3)}
      {maxNumberOfColumns === 2 &&
        fullMenuColumnsSorter(renderReadyBeerData, 2)}
      {maxNumberOfColumns === 1 &&
        fullMenuColumnsSorter(renderReadyBeerData, 1)}

      <SectionTitleContainer>
        <SectionTitle>Cocktails</SectionTitle>
        <UnderlineContainer src={horizontalUnderLine} />
        <CocktailLineArtContainer src={cocktailLineArt} />
      </SectionTitleContainer>
      {mediaQueriesInactive &&
        fullMenuColumnsSorter(renderReadyCocktailsData, 3)}
      {maxNumberOfColumns === 3 &&
        fullMenuColumnsSorter(renderReadyCocktailsData, 3)}
      {maxNumberOfColumns === 2 &&
        fullMenuColumnsSorter(renderReadyCocktailsData, 2)}
      {maxNumberOfColumns === 1 &&
        fullMenuColumnsSorter(renderReadyCocktailsData, 1)}
      <SectionTitleContainer>
        <BeerLineArtContainer src={shotGlassLineArt} />
        <SectionTitle>Shots n' Cider</SectionTitle>
        <UnderlineContainer src={horizontalUnderLine} />
      </SectionTitleContainer>
      {mediaQueriesInactive && fullMenuColumnsSorter(renderReadyShotsData, 3)}
      {maxNumberOfColumns === 3 &&
        fullMenuColumnsSorter(renderReadyShotsData, 3)}
      {maxNumberOfColumns === 2 &&
        fullMenuColumnsSorter(renderReadyShotsData, 2)}
      {maxNumberOfColumns === 1 &&
        fullMenuColumnsSorter(renderReadyShotsData, 1)}

      {mediaQueriesInactive && fullMenuColumnsSorter(renderReadyCiderData, 3)}
      {maxNumberOfColumns === 3 &&
        fullMenuColumnsSorter(renderReadyCiderData, 3)}
      {maxNumberOfColumns === 2 &&
        fullMenuColumnsSorter(renderReadyCiderData, 2)}
      {maxNumberOfColumns === 1 &&
        fullMenuColumnsSorter(renderReadyCiderData, 1)}
    </TopContainer>
  );
};

export default DrinksSection;
