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
}));

const TomatoLineArt = styled("img", {
  name: "TomatoLineArt",
  slot: "Wrapper",
})(() => ({
  width: "max(140px,140px)",
  height: "max(100px,100px)",
  position: "absolute",
  top: "-160px",
  right: "50px",
  display: "grid",

  placeItems: "center",
}));

export {
  TopContainer,
  ToppingsTitleContainer,
  PizzaSliceLineArtOne,
  PizzaSliceLineArtTwo,
  TomatoLineArt,
};
