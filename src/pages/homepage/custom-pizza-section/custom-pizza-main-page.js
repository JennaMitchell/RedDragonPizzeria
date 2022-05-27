import {
  ImageContainer,
  TopContainer,
} from "./custom-pizza-main-page-styled-components";
import peperoniPhoto from "../../../img/pep-pizza-1.jpg";
import { Grid, Typography, Card } from "@mui/material";
import { StyledButton } from "../../../generic-styled-components/generic-styled-components";

const CustomPizzaSectionMainPage = () => {
  return (
    <TopContainer>
      <Grid
        container
        columns={1}
        rowSpacing={"30px"}
        sx={{ width: "max(78%,78%)", height: "max(max-content,max-content)" }}
      >
        <Grid item xs={1}>
          <Typography variant={"h3"} color="secondary.light">
            Create a Custom Peperonni Pizza
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant={"h5"} color="secondary.light">
            Create a peperonni pizza with custom peperonni configuration, or
            choose from the most popular designs
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <StyledButton variant={"contained"} size={"large"} color="secondary">
            Peperonni Pizza Maker
          </StyledButton>
        </Grid>
      </Grid>
      <Card
        variant="outlined"
        sx={{ width: "max(80%,80%)", height: "max(80%,80%)" }}
      >
        <ImageContainer
          src={peperoniPhoto}
          alt="peperoni Pizza"
        ></ImageContainer>
      </Card>
    </TopContainer>
  );
};
export default CustomPizzaSectionMainPage;
