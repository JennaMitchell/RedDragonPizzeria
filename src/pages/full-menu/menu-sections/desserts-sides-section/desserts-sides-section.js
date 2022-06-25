import {
  TopContainer,
  CookieContainer,
  SectionTitle,
} from "./desserts-sides-section-styled-components";
import {
  SectionTitleContainer,
  UnderlineContainer,
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
    <>
      <TopContainer>
        {/* Heading */}
        <SectionTitleContainer>
          <SectionTitle>Sides n' Sweets</SectionTitle>
          <UnderlineContainer src={horizontalUnderLine} />
        </SectionTitleContainer>
        <Grid container columns={1} alignItems="center" justifyContent="center">
          {renderReadySidesContainer}
        </Grid>
        {pizzaCookieSection}
      </TopContainer>
      <CookieContainer src={cookieLineArt} />
    </>
  );
};

export default DessertsSidesSection;
