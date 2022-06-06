import {
  TopContainer,
  CookieContainer,
} from "./desserts-sides-section-styled-components";
import {
  SectionTitleContainer,
  UnderlineContainer,
  StyledTypography,
} from "../general-styled-components/general-styled-components";
import { Grid } from "@mui/material";

import horizontalUnderLine from "../../../../img/line-art/underlines/chalk_underline_horizontal.png";
import cookieLineArt from "../../../../img/line-art/dessert/cookie-lineart-1-half.png";
import {
  renderReadySidesContainer,
  pizzaCookieSection,
} from "./desserts-sides-database";

const DessertsSidesSection = () => {
  return (
    <TopContainer>
      {/* Heading */}
      <SectionTitleContainer>
        <StyledTypography variant={"h2"}>Sides n' Sweets</StyledTypography>
        <UnderlineContainer src={horizontalUnderLine} />
      </SectionTitleContainer>
      <Grid container columns={1} alignItem="center" justifyContent="center">
        {renderReadySidesContainer}
      </Grid>
      {pizzaCookieSection}
      <CookieContainer src={cookieLineArt} />
    </TopContainer>
  );
};

export default DessertsSidesSection;
