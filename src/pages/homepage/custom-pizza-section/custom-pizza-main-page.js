import {
  ImageContainer,
  TopContainer,
} from "./custom-pizza-main-page-styled-components";
import peperoniPhoto from "../../../img/homepage/pep-pizza-1.jpg";

import { Grid, Typography, Card } from "@mui/material";
import { StyledInActiveNavLink } from "../../../generic-styled-components/generic-styled-components";

const CustomPizzaSectionMainPage = () => {
  return (
    <TopContainer>
      <Grid
        container
        columns={1}
        rowSpacing={"30px"}
        sx={{
          width: "max(78%,78%)",
          height: "max(max-content,max-content)",
          position: "relative",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Grid item xs={1}>
          <Typography
            variant={"h3"}
            sx={{
              "@media (max-width:1050px)": {
                fontSize: "30px",
              },

              "@media(max-width:760px)": {
                fontSize: "28px",
              },
              "@media(max-width:670px)": {
                fontSize: "20px",
              },
            }}
            color="secondary.light"
          >
            Create a Custom Peperonni Pizza
          </Typography>
        </Grid>
        <Grid item xs={1} sx={{ postion: "relative" }}>
          <Typography
            variant={"h5"}
            color="secondary.light"
            sx={{
              "@media (max-width:880px)": {
                fontSize: "24px",
              },
              "@media(max-width:760px)": {
                fontSize: "18px",
              },
              "@media(max-width:670px)": {
                fontSize: "12px",
              },
            }}
          >
            Create a peperonni pizza with custom peperonni configuration, or
            choose from the most popular designs
          </Typography>
        </Grid>
        <StyledInActiveNavLink
          sx={{
            marginTop: "20px",
            width: "max(160px,160px)",

            textAlign: "center",
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
