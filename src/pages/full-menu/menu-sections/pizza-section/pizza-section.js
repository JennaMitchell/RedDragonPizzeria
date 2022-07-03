import { Grid } from "@mui/material";
import {
  TwoColumnContainer,
  SectionTitleContainer,
  UnderlineContainer,
  ThreeColumnContainer,
  SmallUnderlineContainer,
  SectionBreaker,
  OneColumnContainer,
} from "../general-styled-components/general-styled-components";

import {
  TopContainer,
  ToppingsTitleContainer,
  PizzaSliceLineArtOne,
  PizzaSliceLineArtTwo,
  TomatoLineArt,
  SectionTitle,
  MainSectionTitle,
} from "./pizza-section-styled-components";
import pizzaUnderline from "../../../../img/line-art/underlines/chalk_underline_horizontal.png";
import verticalUnderline from "../../../../img/line-art/underlines/chalk_underline_vertical.png";
import pizzaSliceLineArtOne from "../../../../img/line-art/pizza/pizza-slice-lineart-1.png";
import pizzaSliceLineArtTwo from "../../../../img/line-art/pizza/pizza-slice-lineart-2.png";
// import pizzaMenuImage from "../../../../img/pizza-lineart-2.png";
import tomatoLineArt from "../../../../img/line-art/veggies/tomatoes-lineart-1.png";
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
import useMediaQuery from "@mui/material/useMediaQuery";
const PizzaSection = () => {
  const specilityPizzaSingleColumnActive = useMediaQuery("(max-width:760px)");
  return (
    <TopContainer>
      <PizzaSliceLineArtOne src={pizzaSliceLineArtOne} />
      <PizzaSliceLineArtTwo src={pizzaSliceLineArtTwo} />

      <SectionTitleContainer>
        <MainSectionTitle>Build Your Own Pizza</MainSectionTitle>
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
            <SectionTitle>1. Pick a Size</SectionTitle>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyPizzaSizes}
        </Grid>
        <SectionBreaker
          src={verticalUnderline}
          sx={{
            "@media(max-width:905px)": { height: "max(174px,174px)" },
            "@media(max-width:745px)": { height: "max(135px,135px)" },
            "@media(max-width:535px)": { height: "max(108px,108px)" },
          }}
        />
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
            <SectionTitle>2. Pick a Crust</SectionTitle>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyPizzaCrusts}
        </Grid>
        <SectionBreaker
          src={verticalUnderline}
          sx={{
            "@media(max-width:905px)": { height: "max(174px,174px)" },
            "@media(max-width:745px)": { height: "max(135px,135px)" },
            "@media(max-width:535px)": { height: "max(108px,108px)" },
          }}
        />
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
            <SectionTitle>3. Pick a Sauce</SectionTitle>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyPizzaSauces}
        </Grid>
      </ThreeColumnContainer>

      <ToppingsTitleContainer>
        <MainSectionTitle>4. Choose your Toppings</MainSectionTitle>
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
            <SectionTitle>Vegetables</SectionTitle>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyVegetablesToppings}
        </Grid>
        <SectionBreaker
          src={verticalUnderline}
          sx={{
            "@media(max-width:905px)": { height: "max(200px,200px)" },
            "@media(max-width:745px)": { height: "max(200px,200px)" },
            "@media(max-width:535px)": { height: "max(200px,200px)" },
          }}
        />
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
            <SectionTitle>Meat</SectionTitle>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyMeatsToppings}
        </Grid>
        <SectionBreaker
          src={verticalUnderline}
          sx={{
            "@media(max-width:905px)": { height: "max(200px,200px)" },
            "@media(max-width:745px)": { height: "max(200px,200px)" },
            "@media(max-width:535px)": { height: "max(200px,200px)" },
          }}
        />
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
            <SectionTitle>Other</SectionTitle>
            <SmallUnderlineContainer src={pizzaUnderline} />
          </Grid>
          {renderReadyOtherToppings}
        </Grid>
      </ThreeColumnContainer>
      <SectionTitle sx={{ marginTop: "10px" }}>
        ($1.00 per Topping. Max of 5 Toppings per pizza)
      </SectionTitle>
      <SectionTitleContainer>
        <MainSectionTitle>Signature Pizza's</MainSectionTitle>
        <UnderlineContainer src={pizzaUnderline} />
      </SectionTitleContainer>
      {!specilityPizzaSingleColumnActive && (
        <TwoColumnContainer>
          <TomatoLineArt src={tomatoLineArt} />
          <Grid
            container
            columns={1}
            sx={{
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {renderReadyPizzaColumnOne}
          </Grid>
          <SectionBreaker src={verticalUnderline} />
          <Grid
            container
            columns={1}
            sx={{
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            {renderReadyPizzaColumnTwo}
          </Grid>
        </TwoColumnContainer>
      )}
      {specilityPizzaSingleColumnActive && (
        <OneColumnContainer
          sx={{ textAlign: "center", justifyItems: "center" }}
        >
          {renderReadyPizzaColumnOne}

          {renderReadyPizzaColumnTwo}
        </OneColumnContainer>
      )}
    </TopContainer>
  );
};
export default PizzaSection;
