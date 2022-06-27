import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows:
    "max-content max-content max-content max-content max-content",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
}));

const ToppingsTitleContainer = styled("div", {
  name: "ToppingsTitleContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  display: "grid",
  gridTemplateRows: "max-content max-content",
  placeItems: "center",
  fontFamily: "Fredericka the Great, cursive",
  marginTop: "30px",
  marginBottom: "10px",
}));

const PizzaSliceLineArtOne = styled("img", {
  name: "PizzaSliceLineArtOne",
  slot: "Wrapper",
})(() => ({
  width: "max(130px,130px)",
  height: "max(100px,100px)",
  position: "absolute",
  top: "0px",
  right: "10px",
  display: "grid",
  placeItems: "center",
  "@media (max-width:1450px)": {
    width: "max(100px,100px)",
    height: "max(80px,80px)",
  },
  "@media (max-width:900px)": {
    width: "max(80px,80px)",
    height: "max(60px,60px)",
    top: "-5px",
  },
  "@media (max-width:670px)": {
    width: "max(60px,60px)",
    height: "max(40px,40px)",
    top: "-15px",
  },
}));
const PizzaSliceLineArtTwo = styled("img", {
  name: "PizzaSliceLineArtTwo ",
  slot: "Wrapper",
})(() => ({
  width: "max(140px,140px)",
  height: "max(90px,90px)",
  position: "absolute",
  top: "340px",
  left: "10px",
  display: "grid",
  placeItems: "center",
  "@media (max-width:1450px)": {
    width: "max(100px,100px)",
    height: "max(80px,80px)",
  },
  "@media (max-width:900px)": {
    width: "max(80px,80px)",
    height: "max(60px,60px)",
    top: "315px",
  },
  "@media (max-width:670px)": {
    width: "max(60px,60px)",
    height: "max(40px,40px)",
    top: "280px",
  },
}));

const TomatoLineArt = styled("img", {
  name: "TomatoLineArt",
  slot: "Wrapper",
})(() => ({
  width: "max(140px,140px)",
  height: "max(100px,100px)",
  position: "absolute",
  top: "-130px",
  right: "2.5%",
  display: "grid",

  placeItems: "center",
  "@media (max-width:1450px)": {
    width: "max(100px,100px)",
    height: "max(100px,100px)",
    right: "5.5%",
  },
  "@media (max-width:1075px)": {
    width: "max(80px,80px)",
    height: "max(80px,80px)",
    right: "5.5%",
    top: "-110px",
  },
  "@media (max-width:900px)": {
    width: "max(80px,80px)",
    height: "max(60px,60px)",
    right: "4.5%",
    top: "-90px",
  },
  "@media (max-width:655px)": {
    width: "max(60px,60px)",
    height: "max(40px,40px)",
    top: "-75px",
  },
}));

const SectionTitle = styled(Typography, {
  name: "SectionTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  fontSize: "28px",
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "center",

  "@media (max-width:900px)": {
    fontSize: "24px",
  },
  "@media (max-width:745px)": {
    fontSize: "20px",
  },
  "@media (max-width:670px)": {
    fontSize: "16px",
  },
}));
const MainSectionTitle = styled(Typography, {
  name: "MainSectionTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  fontSize: "38px",
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "center",
  "@media (max-width:900px)": {
    fontSize: "32px",
  },
  "@media (max-width:745px)": {
    fontSize: "28px",
  },
}));

export {
  TopContainer,
  ToppingsTitleContainer,
  PizzaSliceLineArtOne,
  PizzaSliceLineArtTwo,
  TomatoLineArt,
  SectionTitle,
  MainSectionTitle,
};
