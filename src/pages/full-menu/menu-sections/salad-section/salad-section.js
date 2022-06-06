import {
  TopContainer,
  SaladColumn,
  BellPepperLineArtContainer,
} from "./salad-section-styled-components";
import {
  SectionTitleContainer,
  UnderlineContainer,
  StyledTypography,
  TwoColumnContainer,
  SectionBreaker,
} from "../general-styled-components/general-styled-components";

import verticalUnderline from "../../../../img/line-art/underlines/chalk_underline_vertical.png";
import horizontalUnderLine from "../../../../img/line-art/underlines/chalk_underline_horizontal.png";
import bellpepperLineArt from "../../../../img/line-art/veggies/bell-pepper-lineart-1.png";
import {
  renderReadySaladDataColumnOne,
  renderReadySaladDataColumnTwo,
} from "./salad-menu-database";
const SaladSection = () => {
  return (
    <TopContainer>
      <SectionTitleContainer>
        <StyledTypography variant={"h2"}>Salads</StyledTypography>
        <UnderlineContainer src={horizontalUnderLine} />
        <BellPepperLineArtContainer src={bellpepperLineArt} alt={"Bellpeper"} />
      </SectionTitleContainer>
      <TwoColumnContainer
        container
        alignItems="center"
        justifyContent="center"
        columns={3}
        sx={{ position: "relative" }}
      >
        <SaladColumn>{renderReadySaladDataColumnOne}</SaladColumn>
        <SectionBreaker src={verticalUnderline} />
        <SaladColumn>{renderReadySaladDataColumnTwo}</SaladColumn>
      </TwoColumnContainer>
    </TopContainer>
  );
};

export default SaladSection;
