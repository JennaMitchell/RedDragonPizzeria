import { styled } from "@mui/material/styles";
import cityStreets from "../../img/city-streets.jpg";

import woodenBoard from "../../img/plank.jpg";

const TopContainer = styled("div", {
  name: "TopContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(1200px,1200px)",
  backgroundColor: "transparent",
  border: "none",
  display: "grid",
  placeItems: "center",
  position: "relative",
  fontFamily: "Fredericka the Great ,cursive",
  backgroundImage: `url(${cityStreets})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundPosition: "center",
  objectFit: "contain",
}));
const MenuContainer = styled("div", {
  name: "MenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(1000px,1000px)",
  height: "min(1000px,1000px)",
  overflowY: "scroll",
  overflowX: "hidden",
  backgroundColor: theme.palette.secondary.dark,
  border: "none",
  display: "grid",
  placeItems: "center",
  position: "relative",
  gridTemplateRows: "repeat(2, max-content)",
  marginTop: "20px",
  marginBottom: "20px",
  borderRadius: "20px",
  boxShadow: "0 0 10px black",
}));
const BoardImageContainer = styled("div", {
  name: "BoardImageContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "min(max-content,1000px)",

  padding: "10px 25px 10px 25px",
  display: "grid",
  placeItems: "center",
  position: "relative",
  backgroundImage: `url(${woodenBoard})`,
  borderRadius: "10px",
  boxShadow: "0 0 10px black",
}));

const MenuSelectorContainer = styled("div", {
  name: "MenuSelectorContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(100%,100%)",
  height: "max(100px,100px)",
  backgroundColor: "transparent",
  border: "none",

  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "repeat(5,1fr)",
  position: "relative",
  fontFamily: "Fredericka the Great ,cursive",
}));

export {
  TopContainer,
  MenuContainer,
  BoardImageContainer,
  MenuSelectorContainer,
};
