import { styled } from "@mui/material";
import plank from "../../img/full-menu/plank.jpg";

const BlackboardContainer = styled("div", {
  name: "BlackboardContainer",
  slot: "Wrapper",
})(() => ({
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  width: "max(1075px,1075px)",

  display: "grid",
  placeItems: "center",
  position: "relative",
  boxShadow: "0 0 10px black",
  padding: "20px",
  border: "2px solid black",
  borderRadius: "20px",
  backgroundImage: `url(${plank})`,
  marginBottom: "20px",
  "@media (max-width:1200px)": {
    width: "max(80%,80%)",
  },
  "@media (max-width:780px)": {
    width: "max(95%,95%)",
  },
}));

const MenuContainer = styled("div", {
  name: "MenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(100%,100%)",
  minHeight: "max-content",
  height: "max-content",
  maxHeight: "max-content",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  placeItems: "center",
  position: "relative",
  border: "2px solid black",
  borderRadius: "20px",
  gridTemplateRows: "max-content",
  gridTemplateColumns: "100%",

  fontFamily: "Fredericka the Great ,cursive",
}));

const HorizonalUnderline = styled("img", {
  name: "HorizonalUnderline",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  height: "max(20px,20px)",
  backgroundColor: "transparent",
  display: "grid",
  placeItems: "center",
  position: "relative",
}));

export { BlackboardContainer, MenuContainer, HorizonalUnderline };
