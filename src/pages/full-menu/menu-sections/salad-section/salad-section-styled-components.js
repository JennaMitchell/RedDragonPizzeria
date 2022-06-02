import { styled } from "@mui/material";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "repeat(2,max-content)",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
}));

const SaladColumn = styled("div", {
  name: "SaladColumn",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(100%,100%)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "repeat(3,1fr)",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
}));

const BellPepperLineArtContainer = styled("img", {
  name: "BeerLineArtContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(120px,120px)",
  height: "max(120px,120px)",
  position: "absolute",
  top: "-10px",
  right: "20px",
  border: "none",
  display: "grid",
  placeItems: "center",
}));
export { TopContainer, SaladColumn, BellPepperLineArtContainer };
