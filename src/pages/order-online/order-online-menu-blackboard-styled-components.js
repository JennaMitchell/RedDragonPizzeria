import { styled } from "@mui/material";
import plank from "../../img/full-menu/plank.jpg";

const BlackboardContainer = styled("div", {
  name: "BlackboardContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",

  display: "grid",
  placeItems: "center",
  position: "relative",
  boxShadow: "0 0 10px black",
  padding: "20px",
  border: "2px solid black",
  borderRadius: "20px",
  backgroundImage: `url(${plank})`,
  marginBottom: "200px",
}));

const MenuContainer = styled("div", {
  name: "MenuContainer",
  slot: "Wrapper",
})(({ theme }) => ({
  width: "max(max-content,max-content)",
  height: "max(max-content,max-content)",
  backgroundColor: theme.palette.secondary.dark,
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  border: "2px solid black",
  borderRadius: "20px",
  padding: "20px 50px 20px 50px",
  fontFamily: "Fredericka the Great ,cursive",
}));

const FourColumnContainer = styled("div", {
  name: "FourColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  height: "max(max-content, max-content)",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gridTemplateRows: "max-content max-content",
  gap: "30px",
  alignContent: "space-between",

  justifyItems: "center",
  position: "relative",
  marginTop: "30px",
  marginBottom: "30px",
}));

const ThreeColumnContainer = styled("div", {
  name: "ThreeColumnContainer",
  slot: "Wrapper",
})(() => ({
  width: "max(95%,95%)",
  height: "max(max-content, max-content)",
  backgroundColor: "inherit",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridTemplateRows: "max-content",
  alignItems: "space-evenly",

  justifyItems: "center",
  position: "relative",
  gap: "30px",
  marginTop: "30px",
  marginBottom: "30px",
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

export {
  BlackboardContainer,
  MenuContainer,
  FourColumnContainer,
  ThreeColumnContainer,
  HorizonalUnderline,
};
