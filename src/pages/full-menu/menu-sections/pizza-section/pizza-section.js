import { Typography, Grid } from "@mui/material";
import {
  TwoColumnContainer,
  SectionTitleContainer,
  UnderlineContainer,
  ThreeColumnContainer,
  SmallUnderlineContainer,
  SectionBreaker,
} from "../general-styled-components/general-styled-components";

import {
  TopContainer,
  ToppingsTitleContainer,
  PizzaSliceLineArtOne,
  PizzaSliceLineArtTwo,
  TomatoLineArt,
} from "./pizza-section-styled-components";
import pizzaUnderline from "../../../../img/chalk_underline_horizontal.png";
import verticalUnderline from "../../../../img/chalk_underline_vertical.png";
import pizzaSliceLineArtOne from "../../../../img/pizza-slice-lineart-1.png";
import pizzaSliceLineArtTwo from "../../../../img/pizza-slice-lineart-2.png";
// import pizzaMenuImage from "../../../../img/pizza-lineart-2.png";
import tomatoLineArt from "../../../../img/tomatoes-lineart-1.png";
import {
  renderReadyPizzaSizes,
  renderReadyPizzaCrusts,
  renderReadyPizzaSauces,
  renderReadyVegetablesToppings,
  renderReadyMeatsToppings,
  renderReadyOtherToppings,
  renderReadyPizzaColumnOne,
  renderReadyPizzaColumnTwo,
} from "./pizza-menu-database";
const PizzaSection = () => {
  return (
    <TopContainer>
      <PizzaSliceLineArtOne src={pizzaSliceLineArtOne} />
      <PizzaSliceLineArtTwo src={pizzaSliceLineArtTwo} />

      <SectionTitleContainer>
        <Typography
          variant="h3"
          sx={{ fontFamily: "inherit", color: "secondary.light" }}
        >
          Build Your Own Pizza
        </Typography>
        <UnderlineContainer src={pizzaUnderline} />
      </SectionTitleContainer>
      <ThreeColumnContainer>
        <Grid
          container
          columns={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={1}
            container
            columns={1}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "inherit",
                color: "secondary.light",
                textAlign: "center",
              }}
            >
              1. Pick a Size
            </Typography>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyPizzaSizes}
        </Grid>
        <SectionBreaker src={verticalUnderline} />
        <Grid
          container
          columns={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={1}
            container
            columns={1}
            alignContent="flex-start"
            justifyContent="center"
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "inherit",
                color: "secondary.light",
                textAlign: "center",
              }}
            >
              2. Pick a Crust
            </Typography>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyPizzaCrusts}
        </Grid>
        <SectionBreaker src={verticalUnderline} />
        <Grid
          container
          columns={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={1}
            container
            columns={1}
            alignContent="flex-start"
            justifyContent="center"
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "inherit",
                color: "secondary.light",
                textAlign: "center",
              }}
            >
              3. Pick a Sauce
            </Typography>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyPizzaSauces}
        </Grid>
      </ThreeColumnContainer>

      <ToppingsTitleContainer>
        <Typography
          variant="h3"
          sx={{ fontFamily: "inherit", color: "secondary.light" }}
        >
          4. Choose your Toppings
        </Typography>
        <UnderlineContainer src={pizzaUnderline} />
      </ToppingsTitleContainer>

      <ThreeColumnContainer>
        <Grid
          container
          columns={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={1}
            container
            columns={1}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "inherit",
                color: "secondary.light",
                textAlign: "center",
              }}
            >
              Vegetables
            </Typography>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyVegetablesToppings}
        </Grid>
        <SectionBreaker src={verticalUnderline} />
        <Grid
          container
          columns={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={1}
            container
            columns={1}
            alignContent="flex-start"
            justifyContent="center"
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "inherit",
                color: "secondary.light",
                textAlign: "center",
              }}
            >
              Meat
            </Typography>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyMeatsToppings}
        </Grid>
        <SectionBreaker src={verticalUnderline} />
        <Grid
          container
          columns={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: "column",
          }}
        >
          <Grid
            item
            xs={1}
            container
            columns={1}
            alignContent="flex-start"
            justifyContent="center"
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "inherit",
                color: "secondary.light",
                textAlign: "center",
              }}
            >
              Other
            </Typography>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyOtherToppings}
        </Grid>
      </ThreeColumnContainer>
      <Typography
        variant="h6"
        sx={{ color: "secondary.light", marginTop: "10px" }}
      >
        ($1.00 per Topping. Max of 5 Toppings per pizza)
      </Typography>
      <SectionTitleContainer>
        <Typography
          variant="h3"
          sx={{ fontFamily: "inherit", color: "secondary.light" }}
        >
          Speciality Pizza
        </Typography>
        <UnderlineContainer src={pizzaUnderline} />
      </SectionTitleContainer>
      <TwoColumnContainer>
        <TomatoLineArt src={tomatoLineArt}></TomatoLineArt>
        <Grid container columns={1} sx={{ flexDirection: "column" }}>
          {renderReadyPizzaColumnOne}
        </Grid>
        <SectionBreaker src={verticalUnderline} />
        <Grid container columns={1} sx={{ flexDirection: "column" }}>
          {renderReadyPizzaColumnTwo}
        </Grid>
      </TwoColumnContainer>
    </TopContainer>
  );
};
export default PizzaSection;
