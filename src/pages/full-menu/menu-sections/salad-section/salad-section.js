import {
  TopContainer,
  BellPepperLineArtContainer,
  SectionTitle,
} from "./salad-section-styled-components";
import {
  SectionTitleContainer,
  UnderlineContainer,
} from "../general-styled-components/general-styled-components";

import horizontalUnderLine from "../../../../img/line-art/underlines/chalk_underline_horizontal.png";
import bellpepperLineArt from "../../../../img/line-art/veggies/bell-pepper-lineart-1.png";
import { renderReadySaladData } from "./salad-menu-database";
import useMediaQuery from "@mui/material/useMediaQuery";
import fullMenuColumnsSorter from "../../../../components/custom-hooks/full-menu-column-sorter";
const SaladSection = () => {
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
      <SectionTitleContainer>
        <SectionTitle>Salads</SectionTitle>
        <UnderlineContainer src={horizontalUnderLine} />
        <BellPepperLineArtContainer src={bellpepperLineArt} alt={"Bellpeper"} />
      </SectionTitleContainer>
      {mediaQueriesInactive && fullMenuColumnsSorter(renderReadySaladData, 3)}
      {maxNumberOfColumns === 3 &&
        fullMenuColumnsSorter(renderReadySaladData, 3)}
      {maxNumberOfColumns === 2 &&
        fullMenuColumnsSorter(renderReadySaladData, 2)}
      {maxNumberOfColumns === 1 &&
        fullMenuColumnsSorter(renderReadySaladData, 1)}
    </TopContainer>
  );
};

export default SaladSection;
