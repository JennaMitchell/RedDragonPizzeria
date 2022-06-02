import { styled } from "@mui/material/styles";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "repeat(7,max-content)",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
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
  marginLeft: "350px",
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

export {
  TopContainer,
  CocktailsRowOneContainer,
  CocktailsRowTwoContainer,
  BeerLineArtContainer,
  CocktailLineArtContainer,
  ThreeRowColumn,
};
