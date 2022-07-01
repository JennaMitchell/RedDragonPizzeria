import {
  ImageContainer,
  TopContainer,
} from "./custom-pizza-main-page-styled-components";
import peperoniPhoto from "../../../img/homepage/pep-pizza-1.jpg";

import { Grid, Typography, Card } from "@mui/material";
import { StyledInActiveNavLink } from "../../../generic-styled-components/generic-styled-components";
import { useSelector } from "react-redux";

const CustomPizzaSectionMainPage = () => {
  const popupActive = useSelector((state) => state.popupActive);
  return (
    <TopContainer sx={{ width: `${popupActive && "100vw"}` }}>
      <Grid
        container
        columns={1}
        rowSpacing={"10px"}
        sx={{
          width: "max(65%,150px)",
          height: "max(max-content,max-content",
          position: "relative",
          marginTop: "10px",
          marginBottom: "10px",
          "@media (max-width:700px)": {
            width: "max(80%,80%)",
          },
        }}
      >
        <Grid item xs={1}>
          <Typography
            variant={"h3"}
            sx={{
              "@media (max-width:1050px)": {
                fontSize: "30px",
              },
              "@media (max-width:970px)": {
                fontSize: "26px",
              },

              "@media(max-width:670px)": {
                fontSize: "20px",
              },
              "@media(max-width:520px)": {
                fontSize: "18px",
              },
              "@media(max-width:465px)": {
                fontSize: "16px",
              },
              "@media(max-width:410px)": {
                fontSize: "14px",
              },
            }}
            color="secondary.light"
          >
            Create a Custom Peperonni Pizza
          </Typography>
        </Grid>
        <Grid item xs={1} sx={{ postion: "relative", paddingTop: "0" }}>
          <Typography
            variant={"h5"}
            color="secondary.light"
            sx={{
              fontSize: "14px",
              "@media (max-width:880px)": {
                fontSize: "12px",
              },
              "@media(max-width:410px)": {
                fontSize: "10px",
              },
            }}
          >
            Create a peperonni pizza with custom pepperonni configuration
          </Typography>
        </Grid>
        <StyledInActiveNavLink
          sx={{
            marginTop: "20px",
            width: "max(100%,100%)",

            textAlign: "center",
            "@media(max-width:1200px)": {
              fontSize: "16px",
            },
            "@media(max-width:600px)": {
              fontSize: "10px",
            },
            "@media(max-width:410px)": {
              fontSize: "14px",
            },
            "@media(max-width:370px)": {
              fontSize: "10px",
            },
          }}
          to="/pizza-maker"
        >
          Pizza Maker
        </StyledInActiveNavLink>
      </Grid>
      <Card
        variant="outlined"
        sx={{ width: "max(80%,80%)", height: "max(80%,80%)" }}
      >
        <ImageContainer src={peperoniPhoto} alt="peperoni Pizza" />
      </Card>
    </TopContainer>
  );
};
export default CustomPizzaSectionMainPage;
