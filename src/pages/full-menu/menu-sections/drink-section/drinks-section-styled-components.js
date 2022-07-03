import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "max-content",
  gridTemplateColumns: "100%",
  alignItems: "center",
  justifyItems: "center",
  position: "relative",
  fontFamily: "inherit",
  overflowX: "hidden",
}));

const CocktailsRowOneContainer = styled("div", {
  name: "CocktailsRowOneContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  alignItems: "center",
  justifyItems: "center",
  position: "relative",
  fontFamily: "inherit",
}));

const CocktailsRowTwoContainer = styled("div", {
  name: "CocktailsRowTwoContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  alignItems: "center",
  justifyContent: "space-evenly",
  position: "relative",
  fontFamily: "inherit",
  marginLeft: "40%",
}));

const BeerLineArtContainer = styled("img", {
  name: "BeerLineArtContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(60px,60px)",
  height: "max(120px,120px)",
  position: "absolute",
  top: "-30px",
  left: "70px",
  border: "none",
  display: "grid",
  placeItems: "center",
  "@media (max-width:1450px)": {
    width: "max(60px,60px)",
    height: "max(100px,100px)",
  },
  "@media (max-width:1075px)": {
    width: "max(40px,40px)",
    height: "max(80px,80px)",
    left: "30px",
    top: "0px",
  },
  "@media (max-width:900px)": {
    width: "max(40px,40px)",
    height: "max(60px,60px)",
    left: "20px",
  },
  "@media (max-width:655px)": {
    width: "max(30px,30px)",
    height: "max(50px,50px)",
    left: "20px",
  },
  "@media (max-width:550px)": {
    left: "10px",
  },
}));

const CocktailLineArtContainer = styled("img", {
  name: "CocktailLineArtContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(60px,60px)",
  height: "max(140px,140px)",
  position: "absolute",
  top: "-40px",
  right: "70px",
  border: "none",
  display: "grid",
  placeItems: "center",
  "@media (max-width:1450px)": {
    width: "max(60px,60px)",
    height: "max(100px,100px)",
  },
  "@media (max-width:1075px)": {
    width: "max(40px,40px)",
    height: "max(80px,80px)",
    top: "0px",
    right: "30px",
  },
  "@media (max-width:900px)": {
    width: "max(40px,40px)",
    height: "max(60px,60px)",
  },
  "@media (max-width:655px)": {
    width: "max(30px,30px)",
    height: "max(50px,50px)",
  },
  "@media (max-width:550px)": {
    right: "10px",
  },
}));

const ThreeRowColumn = styled("div", {
  name: "ThreeRowColumn",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "repeat(3,1fr)",
  alignItems: "flex-start",
  justifyItems: "center",
  position: "relative",
  fontFamily: "inherit",
}));
const SectionTitle = styled(Typography, {
  name: "SectionTitle",
  slot: "Wrapper",
})(({ theme }) => ({
  fontSize: "48px",
  fontFamily: "inherit",
  color: theme.palette.secondary.light,
  textAlign: "center",
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  "@media (max-width:900px)": {
    fontSize: "36px",
  },
  "@media (max-width:745px)": {
    fontSize: "28px",
  },
}));

export {
  TopContainer,
  CocktailsRowOneContainer,
  CocktailsRowTwoContainer,
  BeerLineArtContainer,
  CocktailLineArtContainer,
  ThreeRowColumn,
  SectionTitle,
};
