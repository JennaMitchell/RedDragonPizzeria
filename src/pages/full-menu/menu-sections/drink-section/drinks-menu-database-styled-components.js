import { styled } from "@mui/material";

const DrinksContainer = styled("div", {
  name: "DrinksContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(90%,90%)",
  height: "max(max-content,max-content)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  gridTemplateRows: "max-content max-content max-content max-content",
  placeItems: "center",
  position: "relative",
  fontFamily: "inherit",
  marginBottom: "15px",
}));

export { DrinksContainer };
