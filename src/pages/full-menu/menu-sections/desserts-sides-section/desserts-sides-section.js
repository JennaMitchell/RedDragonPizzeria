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
  singleColumnSection,
} from "./desserts-sides-database";
import useMediaQuery from "@mui/material/useMediaQuery";

// "@media(max-width:480px)": {
//   width: "max(150px,150px)",
// },
const DessertsSidesSection = () => {
  const singleColumnActive = useMediaQuery("(max-width:600px)");
  return (
    <>
      <TopContainer>
        {/* Heading */}
        <SectionTitleContainer>
          <SectionTitle>Sides n' Sweets</SectionTitle>
          <UnderlineContainer src={horizontalUnderLine} />
        </SectionTitleContainer>
        <Grid container columns={1} alignItems="center" justifyContent="center">
          {!singleColumnActive && renderReadySidesContainer}
          {singleColumnActive && singleColumnSection}
        </Grid>
        {pizzaCookieSection}
      </TopContainer>
      <CookieContainer src={cookieLineArt} />
    </>
  );
};

export default DessertsSidesSection;
